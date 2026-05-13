import { publicEnv, serverEnv } from "@/config/env";
import { siteConfig } from "@/config/site";
import type { BookingWithService } from "@/types/booking";
import { WhatsAppLinkNotifier } from "./whatsapp-link";
import { TwilioNotifier } from "./twilio";

export type NotifierResult =
  | { kind: "handoff"; whatsappUrl: string; messagePreview: string }
  | { kind: "sent" };

export interface BookingNotifier {
  buildHandoff(booking: BookingWithService): Promise<NotifierResult>;
}

export function buildOwnerMessage(booking: BookingWithService): string {
  const when = new Date(booking.scheduledAt);
  const formattedDate = when.toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const formattedTime = when.toLocaleString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

  const lines = [
    `New booking request from ${siteConfig.name}`,
    "",
    `Service:  ${booking.serviceName}`,
    `When:     ${formattedDate} at ${formattedTime}`,
    `Length:   ${booking.serviceDurationMinutes} minutes`,
    "",
    `Name:     ${booking.customerName}`,
    `Phone:    ${booking.customerPhone}`,
  ];

  if (booking.customerEmail) lines.push(`Email:    ${booking.customerEmail}`);
  if (booking.notes) {
    lines.push("", `Notes:    ${booking.notes}`);
  }

  const baseUrl = publicEnv.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  const manageUrl = `${baseUrl}/owner/${booking.ownerToken}`;

  lines.push("", `Manage:   ${manageUrl}`);
  lines.push(
    "",
    "Tap the link above to confirm or deny. The slot is held for 24h while you decide.",
  );

  return lines.join("\n");
}

export function getNotifier(): BookingNotifier {
  if (serverEnv.NOTIFIER_KIND === "twilio") {
    return new TwilioNotifier();
  }
  return new WhatsAppLinkNotifier();
}
