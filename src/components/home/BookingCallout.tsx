import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function BookingCallout() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-rose-500 px-8 py-14 text-white shadow-lift md:px-16 md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(circle at 18% 20%, rgba(255,255,255,0.4), transparent 45%), radial-gradient(circle at 80% 80%, rgba(229,201,154,0.55), transparent 50%)",
          }}
        />
        <div className="relative z-10 flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.32em] text-rose-100">
              Ready when you are
            </span>
            <h2 className="mt-4 font-display text-4xl leading-[1.1] md:text-5xl lg:text-6xl text-balance">
              Interested? Book your service now.
            </h2>
            <p className="mt-5 max-w-xl text-base text-rose-50/90 md:text-lg text-pretty">
              Pick a treatment, choose a time that works for you, and we&apos;ll
              confirm by WhatsApp. No accounts, no waiting rooms — just a calm,
              easy reservation.
            </p>
          </div>
          <Link
            href="/services"
            className="group inline-flex items-center gap-3 self-start rounded-full bg-ivory px-8 py-4 text-sm font-medium uppercase tracking-[0.22em] text-rose-700 transition hover:bg-cream md:self-auto"
          >
            Book a service
            <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
