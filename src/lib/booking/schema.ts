import { z } from "zod";

export const phoneRegex = /^[+0-9 ()-]{7,25}$/;

export const bookingFormSchema = z.object({
  serviceSlug: z.string().min(1, "Missing service"),
  customerName: z
    .string()
    .min(2, "Please enter your name")
    .max(80, "Name is too long"),
  customerPhone: z
    .string()
    .min(7, "Please enter a phone number")
    .regex(phoneRegex, "Use digits, spaces, parentheses, +, or -"),
  customerEmail: z
    .string()
    .email("Enter a valid email")
    .optional()
    .or(z.literal("")),
  notes: z.string().max(500, "Keep notes under 500 characters").optional(),
  scheduledAtIso: z
    .string()
    .min(1, "Pick a time")
    .refine((v) => !Number.isNaN(Date.parse(v)), "Invalid date/time"),
});

export type BookingFormValues = z.infer<typeof bookingFormSchema>;
