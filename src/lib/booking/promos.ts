/**
 * Promo codes live in code, like the catalog. To add a new code, append it to
 * PROMO_CODES. Codes are matched case-insensitively and take a percentage off
 * the booked service's price before the WhatsApp handoff is composed.
 */
export interface PromoCode {
  code: string;
  percentOff: number;
}

export const PROMO_CODES: PromoCode[] = [
  { code: "JAMEEL10", percentOff: 10 },
];

/** Categories that never accept promo codes. */
const EXCLUDED_CATEGORY_IDS = new Set<string>(["cat-makeup"]);

export function promoAllowedForCategory(categoryId: string): boolean {
  return !EXCLUDED_CATEGORY_IDS.has(categoryId);
}

/** Look up a promo by code, ignoring case and surrounding whitespace. */
export function findPromo(raw: string | null | undefined): PromoCode | null {
  const code = (raw ?? "").trim().toUpperCase();
  if (!code) return null;
  return PROMO_CODES.find((p) => p.code.toUpperCase() === code) ?? null;
}

export function discountedPriceCents(
  priceCents: number,
  percentOff: number,
): number {
  return Math.round((priceCents * (100 - percentOff)) / 100);
}
