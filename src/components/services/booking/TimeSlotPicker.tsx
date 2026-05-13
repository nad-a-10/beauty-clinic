"use client";

import { format } from "date-fns";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { getAvailableSlots } from "@/server/actions/bookings";

interface Props {
  serviceSlug: string;
  selectedDate: Date | null;
  selectedSlotIso: string | null;
  onSelect: (iso: string) => void;
}

export function TimeSlotPicker({
  serviceSlug,
  selectedDate,
  selectedSlotIso,
  onSelect,
}: Props) {
  const [slots, setSlots] = useState<string[]>([]);
  const [closed, setClosed] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selectedDate) return;
    let cancelled = false;
    setLoading(true);
    getAvailableSlots(serviceSlug, selectedDate.toISOString())
      .then((res) => {
        if (cancelled) return;
        setSlots(res.slots);
        setClosed(res.closed);
      })
      .catch(() => {
        if (cancelled) return;
        setSlots([]);
        setClosed(false);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [serviceSlug, selectedDate]);

  if (!selectedDate) {
    return (
      <div className="rounded-2xl border border-dashed border-line/70 px-6 py-10 text-center text-sm text-muted">
        Pick a day above to see available times.
      </div>
    );
  }

  return (
    <div>
      <h3 className="font-display text-2xl text-charcoal">Pick a time</h3>
      <p className="mt-1 text-sm text-muted">
        Times shown reflect this service&apos;s duration on {format(selectedDate, "EEEE, MMMM d")}.
      </p>

      <div className="mt-5 min-h-24">
        {loading ? (
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="h-12 animate-pulse rounded-2xl bg-line/40"
              />
            ))}
          </div>
        ) : closed ? (
          <div className="rounded-2xl border border-dashed border-line/70 px-6 py-10 text-center text-sm text-muted">
            We&apos;re closed for this service on{" "}
            {format(selectedDate, "EEEE, MMMM d")}. Try another day.
          </div>
        ) : slots.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-line/70 px-6 py-10 text-center text-sm text-muted">
            No openings on this day. Try another date — or call us if it&apos;s
            urgent.
          </div>
        ) : (
          <div
            role="radiogroup"
            aria-label="Available times"
            className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6"
          >
            {slots.map((iso) => {
              const time = format(new Date(iso), "h:mm a");
              const selected = iso === selectedSlotIso;
              return (
                <button
                  key={iso}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() => onSelect(iso)}
                  className={cn(
                    "rounded-2xl border px-3 py-3 text-sm font-medium transition",
                    selected
                      ? "border-rose-500 bg-rose-500 text-white shadow-soft"
                      : "border-line/70 bg-ivory text-charcoal hover:border-rose-300 hover:bg-rose-50",
                  )}
                >
                  {time}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
