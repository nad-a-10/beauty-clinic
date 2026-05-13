import { Brush, Flower2, PenTool, Sparkles } from "lucide-react";

interface Area {
  title: string;
  blurb: string;
  techniques: string[];
  Icon: React.ComponentType<{ className?: string }>;
}

const AREAS: Area[] = [
  {
    title: "Permanent Tattoo Artistry",
    blurb:
      "Twenty-five years of permanent makeup and tattoo work. Soft, hand-crafted brows; warm, blushed lips; and considered removal when you change your mind.",
    techniques: [
      "Microblading",
      "Powder & shadow brows",
      "Stroke tattoo",
      "Lip blush",
      "Full lip tattoo",
      "Tattoo removal",
    ],
    Icon: PenTool,
  },
  {
    title: "Skin & Facial Care",
    blurb:
      "Advanced facial protocols built around the skin barrier. Hydration, brightening, lifting, and resurfacing — designed to layer, not overwhelm.",
    techniques: [
      "Deep facial cleansing",
      "Mesotherapy & mesolift",
      "Skin booster",
      "Microdermabrasion",
      "AHA & cosmeceutical peeling",
      "Oxygen & high-frequency",
      "Pigmentation & eye treatment",
      "Plasma lift",
    ],
    Icon: Sparkles,
  },
  {
    title: "Lashes & Body Therapy",
    blurb:
      "Soft definition for the eyes and quiet, restorative body treatments. Reflexology, hair removal, and contouring care.",
    techniques: [
      "Lash extensions",
      "Lash lift & tint",
      "Reflexology",
      "Laser hair removal",
      "Meso cellulite treatment",
    ],
    Icon: Flower2,
  },
  {
    title: "Makeup",
    blurb:
      "Personal, photo-ready makeup for the everyday and the once-in-a-lifetime. Bridal, event, prom, and editorial work.",
    techniques: [
      "Daily makeup",
      "Wedding makeup",
      "Bridal trial",
      "Event & prom",
    ],
    Icon: Brush,
  },
];

export function Specialties() {
  return (
    <section>
      <header className="mb-10 max-w-2xl">
        <span className="text-[11px] uppercase tracking-[0.32em] text-gold-500">
          Specialties
        </span>
        <h2 className="mt-3 font-display text-4xl text-charcoal md:text-5xl">
          Four pillars, refined over time
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Each area reflects years of training, certification, and practice.
          Below is the working menu — see <span className="font-medium text-charcoal">Services</span> for
          treatment-by-treatment pricing.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {AREAS.map(({ title, blurb, techniques, Icon }) => (
          <article
            key={title}
            className="flex flex-col gap-5 rounded-[1.5rem] border border-line/60 bg-ivory p-7 shadow-soft transition hover:shadow-lift"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-50 text-rose-600">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="font-display text-2xl text-charcoal">{title}</h3>
            </div>

            <p className="text-sm leading-relaxed text-muted">{blurb}</p>

            <ul
              role="list"
              className="mt-auto flex flex-wrap gap-2 border-t border-line/60 pt-5"
            >
              {techniques.map((t) => (
                <li
                  key={t}
                  className="rounded-full bg-cream/70 px-3 py-1 text-[11px] font-medium text-charcoal/80"
                >
                  {t}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
