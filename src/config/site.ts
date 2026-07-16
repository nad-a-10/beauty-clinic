export const siteConfig = {
  name: "Laudy Maamary",
  shortName: "Laudy",
  role: "Beauty Expert",
  tagline: "Where Care Meets Craft",
  description:
    "Laudy Maamary Beauty Center, Zalka, Lebanon. Permanent makeup, facials, lashes, body care, and considered beauty rituals — twenty-five years of practice in one quiet room.",
  url: "https://laudymaamary.com",
  contact: {
    phoneDisplay: "+961 3 542 197",
    whatsappE164: "+9613542197",
    email: "laudimaamari@hotmail.com",
    instagram: "https://instagram.com/laudymaamary",
    instagramHandle: "@laudymaamary",
    facebook: "https://facebook.com/Laudy-Maamary-Beauty-Center",
    facebookLabel: "Laudy Maamary Beauty Center",
    addressLines: ["Aamrit Chalhoub, Zalqa", "Next to Haroun Hospital"],
    mapsUrl: "https://maps.app.goo.gl/Lceq4wVTA3h8wRsy7?g_st=aw",
  },
  hours: {
    weekdays: "Mon – Sat · 09:00 – 19:00",
    sunday: "Sunday · 07:00 – 19:00",
  },
  // The clinic's timezone. All booking slots and times are computed and
  // displayed in this zone, regardless of the visitor's or server's locale.
  timeZone: "Asia/Beirut",
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
  ] as const,
  defaultBookingHoldHours: 24,
};

export type SiteConfig = typeof siteConfig;
