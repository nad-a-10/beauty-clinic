import { siteConfig } from "@/config/site";

export interface CalendarEvent {
  /** Stable id (e.g. booking token) so the .ics UID doesn't change per render. */
  uid: string;
  title: string;
  startIso: string;
  endIso: string;
  description?: string;
  location?: string;
}

/** ISO instant -> iCal UTC stamp, e.g. 20260706T130000Z. */
function toUtcStamp(iso: string): string {
  return new Date(iso)
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}/, "");
}

function safeHost(): string {
  try {
    return new URL(siteConfig.url).host || "booking";
  } catch {
    return "booking";
  }
}

/** A link that opens Google Calendar with the event pre-filled. */
export function googleCalendarUrl(e: CalendarEvent): string {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: e.title,
    dates: `${toUtcStamp(e.startIso)}/${toUtcStamp(e.endIso)}`,
  });
  if (e.description) params.set("details", e.description);
  if (e.location) params.set("location", e.location);
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function icsEscape(s: string): string {
  return s
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\r?\n/g, "\\n");
}

/** A full VCALENDAR document for one event. */
export function icsContent(e: CalendarEvent): string {
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    `PRODID:-//${icsEscape(siteConfig.name)}//booking//EN`,
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `UID:${e.uid}@${safeHost()}`,
    // Deterministic stamp (based on the event) to avoid SSR/client drift.
    `DTSTAMP:${toUtcStamp(e.startIso)}`,
    `DTSTART:${toUtcStamp(e.startIso)}`,
    `DTEND:${toUtcStamp(e.endIso)}`,
    `SUMMARY:${icsEscape(e.title)}`,
  ];
  if (e.description) lines.push(`DESCRIPTION:${icsEscape(e.description)}`);
  if (e.location) lines.push(`LOCATION:${icsEscape(e.location)}`);
  lines.push("END:VEVENT", "END:VCALENDAR");
  return lines.join("\r\n");
}

/** A data: URI suitable for an <a download="...ics"> link. */
export function icsHref(e: CalendarEvent): string {
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(icsContent(e))}`;
}
