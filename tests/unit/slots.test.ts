import { describe, expect, it } from "vitest";
import { dayHoursFromHHMM, generateSlots } from "@/lib/booking/slots";

function at(date: string, hhmm: string) {
  return new Date(`${date}T${hhmm}:00.000`);
}

describe("generateSlots", () => {
  const date = new Date("2026-05-04T00:00:00.000"); // Monday
  const hours = dayHoursFromHHMM("10:00", "19:00")!;

  it("returns no slots when the day is closed", () => {
    expect(
      generateSlots({
        serviceDurationMin: 60,
        granularityMin: 15,
        hoursForDay: null,
        date,
        existingBookings: [],
      }),
    ).toEqual([]);
  });

  it("respects service duration so the last slot fits before close", () => {
    const slots = generateSlots({
      serviceDurationMin: 60,
      granularityMin: 30,
      hoursForDay: hours,
      date,
      existingBookings: [],
    });

    const last = slots[slots.length - 1];
    expect(last.getHours()).toBe(18);
    expect(last.getMinutes()).toBe(0);
  });

  it("produces 15-minute granularity from 10:00 to last fit", () => {
    const slots = generateSlots({
      serviceDurationMin: 30,
      granularityMin: 15,
      hoursForDay: hours,
      date,
      existingBookings: [],
    });

    expect(slots[0].toISOString()).toBe(at("2026-05-04", "10:00").toISOString());
    // last 30-min slot fits when starting at 18:30
    const last = slots[slots.length - 1];
    expect(last.getHours()).toBe(18);
    expect(last.getMinutes()).toBe(30);
  });

  it("excludes slots that overlap an existing booking", () => {
    const blocked = {
      start: at("2026-05-04", "12:00"),
      end: at("2026-05-04", "13:30"),
    };
    const slots = generateSlots({
      serviceDurationMin: 60,
      granularityMin: 30,
      hoursForDay: hours,
      date,
      existingBookings: [blocked],
    });

    const blockedIso = at("2026-05-04", "12:00").toISOString();
    const before = at("2026-05-04", "11:30").toISOString();
    const after = at("2026-05-04", "13:30").toISOString();

    expect(slots.find((d) => d.toISOString() === blockedIso)).toBeUndefined();
    // 11:30 + 60 = 12:30 still overlaps blocked range, must also be excluded
    expect(slots.find((d) => d.toISOString() === before)).toBeUndefined();
    // 13:30 + 60 = 14:30 is fine
    expect(slots.find((d) => d.toISOString() === after)).toBeDefined();
  });

  it("treats touching boundaries as non-overlapping", () => {
    const blocked = {
      start: at("2026-05-04", "11:00"),
      end: at("2026-05-04", "12:00"),
    };
    const slots = generateSlots({
      serviceDurationMin: 60,
      granularityMin: 60,
      hoursForDay: hours,
      date,
      existingBookings: [blocked],
    });

    const touching = at("2026-05-04", "12:00").toISOString();
    expect(slots.find((d) => d.toISOString() === touching)).toBeDefined();
  });
});
