// Helpers for opening a WhatsApp chat with a customer from the owner views.
//
// The owner runs WhatsApp Business (package `com.whatsapp.w4b`) alongside the
// consumer app. A plain `wa.me` / `whatsapp://` link can't pick between the two
// — both apps register the same schemes, so the OS decides, and it tends to
// open the consumer app. The only reliable override is an Android `intent://`
// URL that names the Business package explicitly. iOS and desktop have no such
// hook, so there we fall back to `wa.me` and let the OS route it.

/** Strip a stored E.164 number down to the digits `wa.me` expects. */
export function phoneToDigits(phoneE164: string): string {
  return phoneE164.replace(/[^0-9]/g, "");
}

/** Universal `wa.me` link — opens whichever WhatsApp the OS routes it to. */
export function waMeUrl(phoneDigits: string, message?: string): string {
  const base = `https://wa.me/${phoneDigits}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/**
 * Android `intent://` URL that forces the WhatsApp **Business** app. If the
 * Business app isn't installed, `browser_fallback_url` sends the OS to the
 * `wa.me` link instead (which opens the consumer app or the Play Store).
 */
export function whatsappBusinessAndroidUrl(
  phoneDigits: string,
  message?: string,
): string {
  const query = message
    ? `send?phone=${phoneDigits}&text=${encodeURIComponent(message)}`
    : `send?phone=${phoneDigits}`;
  const fallback = encodeURIComponent(waMeUrl(phoneDigits, message));
  return (
    `intent://${query}#Intent;scheme=whatsapp;` +
    `package=com.whatsapp.w4b;S.browser_fallback_url=${fallback};end`
  );
}
