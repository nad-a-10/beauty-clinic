import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import heroImage from "@/Images/bannermain.jpeg";

export function HeroBanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-60" aria-hidden />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-16 md:grid-cols-12 md:gap-16 md:px-10 md:pb-28 md:pt-24">
        <div className="md:col-span-6 lg:col-span-7 flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-rose-300/60 bg-rose-50 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.28em] text-rose-700">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            Now booking · spring season
          </span>
          <h1 className="mt-7 font-display text-5xl leading-[1.05] text-charcoal md:text-6xl lg:text-7xl text-balance">
            A quiet space for{" "}
            <span className="italic text-rose-600">considered</span> beauty
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg text-pretty">
            Welcome to {siteConfig.name}. Personalized facials, lashes, nails, and
            wellness rituals designed around how you actually feel — slow,
            considered, and unmistakably yours.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-full bg-rose-500 px-7 py-3.5 text-sm font-medium uppercase tracking-[0.22em] text-white shadow-soft transition hover:bg-rose-600"
            >
              Browse services
              <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-charcoal/20 px-6 py-3.5 text-sm font-medium uppercase tracking-[0.22em] text-charcoal transition hover:border-rose-500 hover:text-rose-600"
            >
              Our story
            </Link>
          </div>

          <dl className="mt-14 flex flex-wrap gap-x-10 gap-y-6 border-t border-line/60 pt-10 text-sm sm:gap-x-20">
            <div className="space-y-1.5">
              <dt className="text-[11px] uppercase tracking-[0.24em] text-muted">
                Open
              </dt>
              <dd className="font-display text-2xl leading-tight text-charcoal">
                Mon&ndash;Sat
              </dd>
              <dd className="text-xs text-muted sm:whitespace-nowrap">
                09:00 &ndash; 19:00
              </dd>
            </div>
            <div className="space-y-1.5">
              <dt className="text-[11px] uppercase tracking-[0.24em] text-muted">
                Booking
              </dt>
              <dd className="font-display text-2xl leading-tight text-charcoal">
                Online
              </dd>
              <dd className="text-xs text-muted sm:whitespace-nowrap">
                confirmed via WhatsApp
              </dd>
            </div>
          </dl>
        </div>

        <div className="md:col-span-6 lg:col-span-5">
          <div className="relative h-120 overflow-hidden rounded-[2.5rem] shadow-lift md:h-155">
            <Image
              src={heroImage}
              alt={`${siteConfig.name} signature facial treatment`}
              fill
              sizes="(min-width: 1024px) 42vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover"
              placeholder="blur"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
