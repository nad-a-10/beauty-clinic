import { describe, expect, it } from "vitest";
import { formatInTimeZone } from "date-fns-tz";
import { fromZonedTime } from "date-fns-tz";
import { generateSlots } from "@/lib/booking/slots";

const TZ = "Asia/Beirut";

// Clinic open 09:00–19:00 on 2026-05-04 (Monday), in Beirut wall time.
const open = fromZonedTime("2026-05-04T09:00:00", TZ);
const close = fromZonedTime("2026-05-04T19:00:00", TZ);

function hhmm(d: Date) {
  return formatInTimeZone(d, TZ, "HH:mm");
}

describe("generateSlots", () => {
  it("returns no slots when duration is non-positive", () => {
    expect(
      generateSlots({
        open,
        close,
        serviceDurationMin: 0,
        granularityMin: 15,
        existingBookings: [],
      }),
    ).toEqual([]);
  });

  it("respects service duration so the last slot fits before close", () => {
    const slots = generateSlots({
      open,
      close,
      serviceDurationMin: 60,
      granularityMin: 30,
      existingBookings: [],
    });

    expect(hhmm(slots[0])).toBe("09:00");
    // 60-min service: last start that ends by 19:00 is 18:00.
    expect(hhmm(slots[slots.length - 1])).toBe("18:00");
  });

  it("produces 15-minute granularity from open to last fit", () => {
    const slots = generateSlots({
      open,
      close,
      serviceDurationMin: 30,
      granularityMin: 15,
      existingBookings: [],
    });

    expect(hhmm(slots[0])).toBe("09:00");
    // last 30-min slot fits when starting at 18:30
    expect(hhmm(slots[slots.length - 1])).toBe("18:30");
  });

  it("excludes slots that overlap an existing booking (capacity 1)", () => {
    const blocked = {
      start: fromZonedTime("2026-05-04T12:00:00", TZ),
      end: fromZonedTime("2026-05-04T13:30:00", TZ),
    };
    const slots = generateSlots({
      open,
      close,
      serviceDurationMin: 60,
      granularityMin: 30,
      existingBookings: [blocked],
    });

    const times = slots.map(hhmm);
    expect(times).not.toContain("12:00");
    // 11:30 + 60 = 12:30 still overlaps blocked range, must also be excluded
    expect(times).not.toContain("11:30");
    // 13:30 + 60 = 14:30 is fine
    expect(times).toContain("13:30");
  });

  it("treats touching boundaries as non-overlapping", () => {
    const blocked = {
      start: fromZonedTime("2026-05-04T11:00:00", TZ),
      end: fromZonedTime("2026-05-04T12:00:00", TZ),
    };
    const slots = generateSlots({
      open,
      close,
      serviceDurationMin: 60,
      granularityMin: 60,
      existingBookings: [blocked],
    });

    expect(slots.map(hhmm)).toContain("12:00");
  });

  it("allows overlap up to capacity (nails-style pool)", () => {
    const a = {
      start: fromZonedTime("2026-05-04T12:00:00", TZ),
      end: fromZonedTime("2026-05-04T13:00:00", TZ),
    };
    // Capacity 2: a single existing booking should NOT block the 12:00 slot.
    const slots = generateSlots({
      open,
      close,
      serviceDurationMin: 60,
      granularityMin: 60,
      existingBookings: [a],
      capacity: 2,
    });

    expect(slots.map(hhmm)).toContain("12:00");
  });
});
