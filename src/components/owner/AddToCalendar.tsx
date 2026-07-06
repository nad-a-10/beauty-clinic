import { CalendarPlus } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  googleCalendarUrl,
  icsHref,
  type CalendarEvent,
} from "@/lib/booking/calendar";

/**
 * Tap-to-add "Add to calendar" links (Google + .ics). Presentational only —
 * safe to render from server or client components.
 */
export function AddToCalendar({
  event,
  tone = "light",
}: {
  event: CalendarEvent;
  tone?: "light" | "dark";
}) {
  const base =
    "inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] transition";
  const styles =
    tone === "dark"
      ? "border-white/30 bg-white/10 text-white hover:bg-white/20"
      : "border-charcoal/20 text-charcoal hover:border-rose-500 hover:text-rose-600";

  return (
    <div className="flex flex-wrap items-center gap-2">
      <a
        href={googleCalendarUrl(event)}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(base, styles)}
      >
        <CalendarPlus className="h-3.5 w-3.5" aria-hidden />
        Google Calendar
      </a>
      <a
        href={icsHref(event)}
        download="appointment.ics"
        className={cn(base, styles)}
      >
        <CalendarPlus className="h-3.5 w-3.5" aria-hidden />
        Apple / .ics
      </a>
    </div>
  );
}
