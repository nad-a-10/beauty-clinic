import { addMinutes, isBefore, isEqual } from "date-fns";
import type { BookingTimeRange } from "@/types/booking";

export interface DayHours {
  openMinutes: number;
  closeMinutes: number;
}

export interface GenerateSlotsArgs {
  serviceDurationMin: number;
  granularityMin: number;
  hoursForDay: DayHours | null;
  date: Date;
  existingBookings: BookingTimeRange[];
  /**
   * How many bookings may overlap a slot before it's full. Defaults to 1
   * (single room). Pools like nails pass a higher capacity.
   */
  capacity?: number;
}

function setMinutesOnDay(base: Date, minutes: number): Date {
  const d = new Date(base);
  d.setHours(0, 0, 0, 0);
  d.setMinutes(minutes);
  return d;
}

function rangesOverlap(a: BookingTimeRange, b: BookingTimeRange): boolean {
  return isBefore(a.start, b.end) && isBefore(b.start, a.end);
}

export function generateSlots(args: GenerateSlotsArgs): Date[] {
  const {
    serviceDurationMin,
    granularityMin,
    hoursForDay,
    date,
    existingBookings,
    capacity = 1,
  } = args;

  if (!hoursForDay) return [];
  if (granularityMin <= 0) return [];
  if (serviceDurationMin <= 0) return [];
  if (capacity <= 0) return [];

  const open = setMinutesOnDay(date, hoursForDay.openMinutes);
  const close = setMinutesOnDay(date, hoursForDay.closeMinutes);
  const lastValidStart = addMinutes(close, -serviceDurationMin);

  const slots: Date[] = [];
  let cursor = open;

  while (isBefore(cursor, lastValidStart) || isEqual(cursor, lastValidStart)) {
    const candidate: BookingTimeRange = {
      start: cursor,
      end: addMinutes(cursor, serviceDurationMin),
    };

    const overlaps = existingBookings.filter((b) =>
      rangesOverlap(candidate, b),
    ).length;
    if (overlaps < capacity) slots.push(cursor);

    cursor = addMinutes(cursor, granularityMin);
  }

  return slots;
}

export function parseHHMM(value: string): number {
  const [h, m] = value.split(":").map(Number);
  if (Number.isNaN(h) || Number.isNaN(m)) {
    throw new Error(`Invalid HH:MM string: ${value}`);
  }
  return h * 60 + m;
}

export function dayHoursFromHHMM(
  open: string | null,
  close: string | null,
): DayHours | null {
  if (!open || !close) return null;
  return {
    openMinutes: parseHHMM(open),
    closeMinutes: parseHHMM(close),
  };
}
