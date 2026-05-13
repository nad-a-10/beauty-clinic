import type { Metadata } from "next";
import { ServicesBrowser } from "@/components/services/ServicesBrowser";
import { getCategories, getServices } from "@/server/actions/catalog";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Facials, lashes, nails, body, hair, and makeup — book a slot online and confirm by WhatsApp.",
};

export default async function ServicesPage() {
  const [categories, services] = await Promise.all([
    getCategories(),
    getServices(),
  ]);

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
      <header className="mb-12 max-w-3xl">
        <span className="text-[11px] uppercase tracking-[0.32em] text-gold-500">
          The menu
        </span>
        <h1 className="mt-3 font-display text-5xl leading-[1.05] text-charcoal md:text-6xl">
          Treatments built around you
        </h1>
        <p className="mt-5 text-base leading-relaxed text-muted md:text-lg text-pretty">
          Browse by category, pick a service, and we&apos;ll guide you through a
          short booking. Each treatment lists its own time and price so the
          scheduler can find a slot that actually fits.
        </p>
      </header>

      <ServicesBrowser categories={categories} services={services} />
    </section>
  );
}
