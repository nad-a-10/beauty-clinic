export const siteConfig = {
  name: "Laudy Maamary",
  shortName: "Laudy",
  role: "Beauty Expert",
  tagline: "Where Care Meets Craft",
  description:
    "Laudy Maamary Beauty Center, Dekwaneh, Lebanon. Permanent makeup, facials, lashes, body care, and considered beauty rituals — twenty-five years of practice in one quiet room.",
  url: "https://example.com",
  contact: {
    phoneDisplay: "+961 3 542 197",
    whatsappE164: "+9613542197",
    email: "laudimaamari@hotmail.com",
    instagram: "https://instagram.com/laudymaamary",
    instagramHandle: "@laudymaamary",
    facebook: "https://facebook.com/Laudy-Maamary-Beauty-Center",
    facebookLabel: "Laudy Maamary Beauty Center",
    addressLines: ["Alma Center, Dekwaneh", "Mount Lebanon, Lebanon"],
  },
  hours: {
    weekdays: "Mon – Sat · 09:00 – 18:00",
    sunday: "Sunday · select services by appointment",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
  ] as const,
  defaultBookingHoldHours: 24,
};

export type SiteConfig = typeof siteConfig;
