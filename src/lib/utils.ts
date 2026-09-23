import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(
  cents: number,
  currency: string = "USD",
  locale: string = "en-US",
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(cents / 100);
}

/** Format a price, or a "min–max" range when maxCents is set and larger. */
export function formatPrice(
  cents: number,
  maxCents?: number | null,
  currency: string = "USD",
  locale: string = "en-US",
): string {
  const base = formatCurrency(cents, currency, locale);
  if (maxCents != null && maxCents > cents) {
    return `${base}–${formatCurrency(maxCents, currency, locale)}`;
  }
  return base;
}

export function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes} min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m === 0 ? `${h} hr` : `${h} hr ${m} min`;
}
