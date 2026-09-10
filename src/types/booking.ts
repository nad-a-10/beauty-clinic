export type BookingStatus =
  | "pending"
  | "confirmed"
  | "denied"
  | "expired"
  | "cancelled";

export interface Booking {
  id: string;
  serviceId: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string | null;
  notes: string | null;
  scheduledAt: string;
  endsAt: string;
  status: BookingStatus;
  holdExpiresAt: string;
  ownerToken: string;
  createdAt: string;
}

export interface BookingWithService extends Booking {
  serviceName: string;
  serviceDurationMinutes: number;
  /** Price after any promo discount — the amount the customer will pay. */
  servicePriceCents: number;
  promoCode?: string | null;
  promoPercentOff?: number | null;
  /** Catalog price before the promo discount, when one was applied. */
  originalPriceCents?: number | null;
}

export interface BookingTimeRange {
  start: Date;
  end: Date;
}
