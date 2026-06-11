import { Quote } from "lucide-react";

const QUOTES = [
  "Personal development is a continuous process toward the best version of ourselves. We never stop learning, from the day of our birth until our last.",
  "We have unlimited capacities. Working to reach our full potential is a road of choice.",
  "Positivity, communication, love, passion, tolerance, gratitude, and perseverance are the keys to a joyful and successful life.",
  "If we are given the grace of knowledge, it is to give and benefit the society in return.",
];

export function Vision() {
  return (
    <section className="relative overflow-hidden rounded-[2.5rem] bg-rose-500 px-6 py-12 text-white shadow-lift sm:px-8 sm:py-16 md:px-16 md:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 18% 22%, rgba(255,255,255,0.45), transparent 50%), radial-gradient(circle at 82% 78%, rgba(229,201,154,0.6), transparent 55%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl">
        <div className="flex items-center gap-3">
          <span
            aria-hidden
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/20"
          >
            <Quote className="h-5 w-5" />
          </span>
          <span className="text-[11px] uppercase tracking-[0.32em] text-rose-50/85">
            Vision
          </span>
        </div>

        <h2 className="mt-6 font-display text-4xl leading-[1.1] md:text-5xl text-balance">
          A few things I keep close.
        </h2>

        <ol
          role="list"
          className="mt-10 space-y-7 border-l border-white/30 pl-6 md:pl-8"
        >
          {QUOTES.map((q, i) => (
            <li key={i} className="relative">
              <span
                aria-hidden
                className="absolute -left-[33px] top-2 h-2 w-2 rounded-full bg-gold-300 md:-left-[37px]"
              />
              <p className="font-display text-xl italic leading-relaxed text-white md:text-2xl">
                “{q}”
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-10 text-[11px] uppercase tracking-[0.42em] text-rose-50/80">
          — Laudy
        </p>
      </div>
    </section>
  );
}
