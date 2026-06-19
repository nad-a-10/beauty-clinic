"use server";

import { addMinutes } from "date-fns";
import { findServiceBySlug } from "@/data/catalog";
import { isSupabaseConfigured } from "@/config/env";
import { siteConfig } from "@/config/site";
import { dayHoursFromHHMM, generateSlots } from "@/lib/booking/slots";
import { countOverlaps } from "@/lib/booking/conflicts";
import { poolForCategoryId, poolForServiceId } from "@/lib/booking/resources";
import { bookingFormSchema } from "@/lib/booking/schema";
import { getNotifier } from "@/lib/booking/notifier";
import { createSupabaseAdmin } from "@/lib/supabase/server";
import type {
  BookingStatus,
  BookingTimeRange,
  BookingWithService,
} from "@/types/booking";
import { isOpenOn } from "@/types/catalog";

const DEFAULT_GRANULARITY = 15;

const CLINIC_HOURS_HHMM: Record<number, [string, string] | null> = {
  0: null,
  1: ["09:00", "19:00"],
  2: ["09:00", "19:00"],
  3: ["09:00", "19:00"],
  4: ["09:00", "19:00"],
  5: ["09:00", "19:00"],
  6: ["09:00", "19:00"],
};

const SUNDAY_HOURS_HHMM: [string, string] = ["11:00", "17:00"];

function clinicHoursForDate(date: Date, weekdayMask: number) {
  const dow = date.getDay();
  if (!isOpenOn(weekdayMask, dow)) return null;
  if (dow === 0) return dayHoursFromHHMM(...SUNDAY_HOURS_HHMM);
  const hhmm = CLINIC_HOURS_HHMM[dow];
  if (!hhmm) return null;
  return dayHoursFromHHMM(...hhmm);
}

type DayBooking = BookingTimeRange & { serviceId: string };

/**
 * Every active booking for the given day, across all services. Pool filtering
 * happens in-memory afterwards so the single-room lock spans every service.
 */
async function fetchDayBookings(date: Date): Promise<DayBooking[]> {
  const admin = await createSupabaseAdmin();
  if (!admin) return [];

  const dayStart = new Date(date);
  dayStart.setHours(0, 0, 0, 0);
  const dayEnd = new Date(dayStart);
  dayEnd.setDate(dayEnd.getDate() + 1);

  const { data, error } = await admin
    .from("bookings")
    .select("service_id,scheduled_at,ends_at,status")
    .in("status", ["pending", "confirmed"])
    .gte("scheduled_at", dayStart.toISOString())
    .lt("scheduled_at", dayEnd.toISOString());

  if (error) {
    console.error("[bookings] fetchDayBookings error", error);
    return [];
  }

  type BookingRow = { service_id: string; scheduled_at: string; ends_at: string };
  return ((data as BookingRow[] | null) ?? []).map((row) => ({
    serviceId: row.service_id,
    start: new Date(row.scheduled_at),
    end: new Date(row.ends_at),
  }));
}

/** Keep only the bookings that compete for the same resource pool. */
function bookingsInPool(
  dayBookings: DayBooking[],
  poolKey: string,
): BookingTimeRange[] {
  return dayBookings
    .filter((b) => poolForServiceId(b.serviceId).key === poolKey)
    .map(({ start, end }) => ({ start, end }));
}

export async function getAvailableSlots(
  serviceSlug: string,
  isoDate: string,
): Promise<{ slots: string[]; closed: boolean }> {
  const service = findServiceBySlug(serviceSlug);
  if (!service) return { slots: [], closed: true };

  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return { slots: [], closed: true };

  const hours = clinicHoursForDate(date, service.weekdayMask);
  if (!hours) return { slots: [], closed: true };

  const pool = poolForCategoryId(service.categoryId);
  const dayBookings = await fetchDayBookings(date);
  const existingBookings = bookingsInPool(dayBookings, pool.key);

  const slots = generateSlots({
    serviceDurationMin: service.durationMinutes,
    granularityMin: DEFAULT_GRANULARITY,
    hoursForDay: hours,
    date,
    existingBookings,
    capacity: pool.capacity,
  });

  return {
    slots: slots.map((d) => d.toISOString()),
    closed: false,
  };
}

export type CreateBookingResult =
  | { ok: true; whatsappUrl: string; messagePreview: string; bookingId: string }
  | { ok: false; reason: "validation" | "conflict" | "service_unknown" | "out_of_hours" | "server"; message: string };

export async function createBooking(
  input: unknown,
): Promise<CreateBookingResult> {
  const parsed = bookingFormSchema.safeParse(input);
  if (!parsed.success) {
    return {
      ok: false,
      reason: "validation",
      message: parsed.error.issues
        .map((i) => `${i.path.join(".")}: ${i.message}`)
        .join("; "),
    };
  }

  const { serviceSlug, customerName, customerPhone, customerEmail, notes, scheduledAtIso } =
    parsed.data;
  const service = findServiceBySlug(serviceSlug);
  if (!service) {
    return { ok: false, reason: "service_unknown", message: "Service not found." };
  }

  const start = new Date(scheduledAtIso);
  const end = addMinutes(start, service.durationMinutes);

  const hours = clinicHoursForDate(start, service.weekdayMask);
  if (!hours) {
    return {
      ok: false,
      reason: "out_of_hours",
      message: "That time is outside the clinic's open hours for this service.",
    };
  }

  const pool = poolForCategoryId(service.categoryId);
  const dayBookings = await fetchDayBookings(start);
  const existingBookings = bookingsInPool(dayBookings, pool.key);
  if (countOverlaps({ start, end }, existingBookings) >= pool.capacity) {
    return {
      ok: false,
      reason: "conflict",
      message:
        "Sorry — that slot has just been taken. Please choose another time.",
    };
  }

  const holdMinutes = siteConfig.defaultBookingHoldHours * 60;
  const holdExpiresAt = addMinutes(new Date(), holdMinutes);

  let bookingId = crypto.randomUUID();
  let ownerToken = crypto.randomUUID();

  const admin = await createSupabaseAdmin();
  if (admin) {
    const { data, error } = await admin
      .from("bookings")
      .insert({
        service_id: service.id,
        service_name: service.name,
        service_price_cents: service.priceCents,
        service_duration_minutes: service.durationMinutes,
        customer_name: customerName,
        customer_phone: customerPhone,
        customer_email: customerEmail || null,
        notes: notes || null,
        scheduled_at: start.toISOString(),
        ends_at: end.toISOString(),
        status: "pending",
        hold_expires_at: holdExpiresAt.toISOString(),
      })
      .select("id, owner_token")
      .single();

    if (error || !data) {
      console.error("[bookings] insert error", error);
      return {
        ok: false,
        reason: "server",
        message: "We couldn't save your booking. Please try again in a moment.",
      };
    }
    bookingId = data.id as string;
    ownerToken = data.owner_token as string;
  } else if (isSupabaseConfigured) {
    return {
      ok: false,
      reason: "server",
      message:
        "Database is online but the service role key isn't set. Add SUPABASE_SERVICE_ROLE_KEY to .env.local.",
    };
  }

  const bookingForNotifier: BookingWithService = {
    id: bookingId,
    serviceId: service.id,
    customerName,
    customerPhone,
    customerEmail: customerEmail || null,
    notes: notes || null,
    scheduledAt: start.toISOString(),
    endsAt: end.toISOString(),
    status: "pending",
    holdExpiresAt: holdExpiresAt.toISOString(),
    ownerToken,
    createdAt: new Date().toISOString(),
    serviceName: service.name,
    serviceDurationMinutes: service.durationMinutes,
    servicePriceCents: service.priceCents,
  };

  const result = await getNotifier().buildHandoff(bookingForNotifier);

  if (result.kind === "handoff") {
    return {
      ok: true,
      whatsappUrl: result.whatsappUrl,
      messagePreview: result.messagePreview,
      bookingId,
    };
  }

  return {
    ok: true,
    whatsappUrl: "",
    messagePreview: "Booking sent directly to the clinic.",
    bookingId,
  };
}

export async function expirePendingBookings(): Promise<{
  expired: number;
}> {
  const admin = await createSupabaseAdmin();
  if (!admin) return { expired: 0 };

  const nowIso = new Date().toISOString();
  const { count, error } = await admin
    .from("bookings")
    .update({ status: "expired" }, { count: "exact" })
    .eq("status", "pending")
    .lt("hold_expires_at", nowIso);

  if (error) {
    console.error("[bookings] expire error", error);
    return { expired: 0 };
  }

  return { expired: count ?? 0 };
}

// ── Owner manage flow ──────────────────────────────────────────

export type OwnerBookingView = {
  id: string;
  status: BookingStatus;
  scheduledAt: string;
  endsAt: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string | null;
  notes: string | null;
  serviceName: string;
  durationMinutes: number;
  priceCents: number;
  holdExpiresAt: string;
};

export type FindBookingByTokenResult =
  | { ok: true; booking: OwnerBookingView }
  | {
      ok: false;
      reason: "not_configured" | "not_found";
      message: string;
    };

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export async function findBookingByToken(
  token: string,
): Promise<FindBookingByTokenResult> {
  if (!UUID_RE.test(token)) {
    return { ok: false, reason: "not_found", message: "Booking not found." };
  }

  const admin = await createSupabaseAdmin();
  if (!admin) {
    return {
      ok: false,
      reason: "not_configured",
      message:
        "The database isn't configured yet — owner links require Supabase.",
    };
  }

  const { data, error } = await admin
    .from("bookings")
    .select(
      "id, status, scheduled_at, ends_at, customer_name, customer_phone, customer_email, notes, hold_expires_at, service_name, service_duration_minutes, service_price_cents",
    )
    .eq("owner_token", token)
    .maybeSingle();

  if (error) {
    console.error("[bookings] findBookingByToken error", error);
    return { ok: false, reason: "not_found", message: "Booking not found." };
  }
  if (!data) {
    return { ok: false, reason: "not_found", message: "Booking not found." };
  }

  type BookingRow = {
    id: string;
    status: BookingStatus;
    scheduled_at: string;
    ends_at: string;
    customer_name: string;
    customer_phone: string;
    customer_email: string | null;
    notes: string | null;
    hold_expires_at: string;
    service_name: string;
    service_duration_minutes: number;
    service_price_cents: number;
  };

  const row = data as unknown as BookingRow;

  return {
    ok: true,
    booking: {
      id: row.id,
      status: row.status,
      scheduledAt: row.scheduled_at,
      endsAt: row.ends_at,
      customerName: row.customer_name,
      customerPhone: row.customer_phone,
      customerEmail: row.customer_email,
      notes: row.notes,
      holdExpiresAt: row.hold_expires_at,
      serviceName: row.service_name,
      durationMinutes: row.service_duration_minutes,
      priceCents: row.service_price_cents,
    },
  };
}

export type RespondToBookingResult =
  | { ok: true; status: BookingStatus; alreadyInState?: boolean }
  | {
      ok: false;
      reason:
        | "not_configured"
        | "not_found"
        | "invalid_action"
        | "terminal_state"
        | "conflict"
        | "server";
      message: string;
      currentStatus?: BookingStatus;
    };

export async function respondToBooking(
  token: string,
  action: "confirm" | "deny",
): Promise<RespondToBookingResult> {
  if (action !== "confirm" && action !== "deny") {
    return {
      ok: false,
      reason: "invalid_action",
      message: "Unknown action.",
    };
  }
  if (!UUID_RE.test(token)) {
    return { ok: false, reason: "not_found", message: "Booking not found." };
  }

  const admin = await createSupabaseAdmin();
  if (!admin) {
    return {
      ok: false,
      reason: "not_configured",
      message: "The database isn't configured.",
    };
  }

  const lookup = await findBookingByToken(token);
  if (!lookup.ok) {
    return { ok: false, reason: "not_found", message: "Booking not found." };
  }
  const current = lookup.booking;

  if (current.status === "expired" || current.status === "cancelled") {
    return {
      ok: false,
      reason: "terminal_state",
      message: `This booking is already ${current.status} and can't be changed.`,
      currentStatus: current.status,
    };
  }

  const newStatus: BookingStatus = action === "confirm" ? "confirmed" : "denied";

  if (current.status === newStatus) {
    return { ok: true, status: newStatus, alreadyInState: true };
  }

  // If we're restoring a previously-denied booking (the slot was open in the
  // meantime), make sure no one else has booked an overlapping slot. Single
  // practitioner = any time overlap is a conflict, regardless of service.
  if (action === "confirm" && current.status === "denied") {
    const { data: conflicts, error: conflictError } = await admin
      .from("bookings")
      .select("id")
      .neq("id", current.id)
      .in("status", ["pending", "confirmed"])
      .lt("scheduled_at", current.endsAt)
      .gt("ends_at", current.scheduledAt);

    if (conflictError) {
      console.error("[bookings] respondToBooking conflict check error", conflictError);
      return {
        ok: false,
        reason: "server",
        message: "Couldn't verify the slot is still free. Please try again.",
      };
    }

    if (conflicts && conflicts.length > 0) {
      return {
        ok: false,
        reason: "conflict",
        message:
          "Another booking now occupies this time slot. To restore this booking, the other one would need to be cancelled first.",
        currentStatus: current.status,
      };
    }
  }

  const { error: updateError } = await admin
    .from("bookings")
    .update({ status: newStatus })
    .eq("owner_token", token);

  if (updateError) {
    console.error("[bookings] respondToBooking update error", updateError);
    return {
      ok: false,
      reason: "server",
      message: "Couldn't update the booking. Please try again.",
    };
  }

  return { ok: true, status: newStatus };
}

