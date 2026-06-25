"use client";

import { useEffect, useState } from "react";
import {
  phoneToDigits,
  waMeUrl,
  whatsappBusinessAndroidUrl,
} from "@/lib/booking/whatsapp";

interface Props {
  phoneE164: string;
  message?: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * Opens a WhatsApp chat with the customer. On Android it targets the owner's
 * WhatsApp Business app; everywhere else it falls back to a `wa.me` link. The
 * href starts as `wa.me` (matching the server render) and upgrades to the
 * Business intent after mount, once we can read the user agent.
 */
export function WhatsAppLink({ phoneE164, message, className, children }: Props) {
  const digits = phoneToDigits(phoneE164);
  const [href, setHref] = useState(() => waMeUrl(digits, message));

  useEffect(() => {
    if (/android/i.test(navigator.userAgent)) {
      setHref(whatsappBusinessAndroidUrl(digits, message));
    }
  }, [digits, message]);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
