import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, GraduationCap, Languages, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import laudyPortrait from "@/Images/LaudyAbout.jpeg";

export function BioSection() {
  return (
    <section className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
      <div className="md:col-span-5">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lift">
          <Image
            src={laudyPortrait}
            alt="Laudy Maamary"
            placeholder="blur"
            sizes="(min-width: 768px) 40vw, 90vw"
            className="object-cover"
            fill
            priority
          />
        </div>

        <dl className="mt-8 grid grid-cols-1 gap-4 rounded-[1.5rem] border border-line/60 bg-cream/40 p-6 sm:grid-cols-3 md:grid-cols-1">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-rose-50 text-rose-600">
              <MapPin className="h-4 w-4" aria-hidden />
            </span>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.28em] text-muted">
                Studio
              </dt>
              <dd className="mt-1 text-sm leading-snug text-charcoal">
                {siteConfig.contact.addressLines.join(" · ")}
              </dd>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-rose-50 text-rose-600">
              <GraduationCap className="h-4 w-4" aria-hidden />
            </span>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.28em] text-muted">
                Teaching since
              </dt>
              <dd className="mt-1 text-sm leading-snug text-charcoal">
                2002 · CIT Technical Institute, Daoura
              </dd>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-rose-50 text-rose-600">
              <Languages className="h-4 w-4" aria-hidden />
            </span>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.28em] text-muted">
                Languages
              </dt>
              <dd className="mt-1 text-sm leading-snug text-charcoal">
                Arabic · French · English
              </dd>
            </div>
          </div>
        </dl>
      </div>

      <div className="md:col-span-7 flex flex-col justify-center">
        <span className="text-[11px] uppercase tracking-[0.32em] text-gold-500">
          About {siteConfig.shortName}
        </span>
        <h2 className="mt-3 font-display text-5xl leading-[1.05] text-charcoal md:text-6xl">
          Twenty-five years of beauty,{" "}
          <span className="italic text-rose-600">in one quiet room</span>.
        </h2>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg text-pretty">
          I&apos;m Laudy Maamary, a Lebanese beautician and the founder of{" "}
          <strong className="text-charcoal">Laudy Maamary Beauty Center</strong>,
          open since 1996. For over twenty-five years I&apos;ve worked across
          both public and private sectors, evolving my craft alongside the
          women who trust me with their skin, their lashes, their lips, and
          their care.
        </p>

        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg text-pretty">
          Since 2002 I&apos;ve also been an instructor at{" "}
          <strong className="text-charcoal">CIT Technical Institute</strong> in
          Daoura, teaching the next generation of beauticians. Teaching keeps
          me sharp: it pushes me to study, to certify, and to bring back
          everything I learn into the chair.
        </p>

        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg text-pretty">
          My work centers on{" "}
          <strong className="text-charcoal">permanent tattoo artistry</strong> —
          microblading, lip blush, full lip tattoo, and tattoo removal — together
          with advanced facial care, body therapies, lashes, and makeup. The
          through-line of every service is the same: slow, attentive, considered
          work, by someone who&apos;s chosen this for life.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 rounded-full bg-rose-500 px-7 py-3.5 text-sm font-medium uppercase tracking-[0.22em] text-white shadow-soft transition hover:bg-rose-600"
          >
            See the menu
            <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
          </Link>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-charcoal/20 px-6 py-3.5 text-sm font-medium uppercase tracking-[0.22em] text-charcoal transition hover:border-rose-500 hover:text-rose-600"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
