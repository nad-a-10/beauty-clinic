interface Entry {
  period: string;
  title: string;
  org: string;
  summary: string;
}

const ENTRIES: Entry[] = [
  {
    period: "2018",
    title: "Updates on Infection Control & Hazard Prevention",
    org: "Lebanese Order of Physicians, Beirut",
    summary:
      "Continuing-education program in clinical safety and best practice for hands-on aesthetic work.",
  },
  {
    period: "2017",
    title: "Permanent Makeup & Facial Treatments",
    org: "Biotek (Reston, Jounieh) · Medica (Monroe, Beirut)",
    summary:
      "Two intensive certifications in the same year — permanent-makeup technique with Biotek and advanced facial protocols with Medica.",
  },
  {
    period: "2013",
    title: "SRS & Dermaceutic Workshop",
    org: "Le Royal, Dbayeh",
    summary:
      "Hands-on training in chemical peeling, cosmeceutical care, and transdermal therapy.",
  },
  {
    period: "2008",
    title: "Aromatherapy, Skin Analysis & Reflexology",
    org: "Eve Taylor (England) · K Stars · Reflexology certification",
    summary:
      "Practical aromatherapy and a system of skin analysis for face and body with Eve Taylor in England, alongside Ayur-Medic cosmeceutical training and reflexology.",
  },
  {
    period: "2007",
    title: "Silk-Light Hair Removal & Dermalogica",
    org: "Quanta System / Softline · Alpha Tech",
    summary:
      "Certified on Quanta System silk-light technology and trained on the full Dermalogica skincare programme.",
  },
  {
    period: "2005",
    title: "Professional Semi-Permanent Lash Extensions",
    org: "Certification",
    summary:
      "One-to-one extension technique that still informs every lash service today.",
  },
  {
    period: "2004",
    title: "European Product Houses",
    org: "Le Club des Professionnels · Promat’s International · Oligodermie Paris",
    summary:
      "Manufacturer-led training across three premium professional skincare lines.",
  },
  {
    period: "2002 — Today",
    title: "Instructor at CIT Technical Institute",
    org: "Daoura, Lebanon",
    summary:
      "Teaching the next generation of beauticians. The classroom keeps the practice sharp — every lesson sends me back to study and refine.",
  },
  {
    period: "1996 — Today",
    title: "Founder, Laudy Maamary Beauty Center",
    org: "Self-employed · Alma Center, Dekwaneh",
    summary:
      "An independent atelier built around personal, considered work. The same chair, the same hands, for nearly thirty years.",
  },
  {
    period: "1995",
    title: "Diplomas in Esthetics & Professional Tattoo Plotting",
    org: "Foundations",
    summary:
      "Where it all started. The official diploma in esthetics and the start of permanent-tattoo work.",
  },
];

export function ExperienceTimeline() {
  return (
    <section>
      <header className="mb-12 max-w-2xl">
        <span className="text-[11px] uppercase tracking-[0.32em] text-gold-500">
          Experience
        </span>
        <h2 className="mt-3 font-display text-4xl text-charcoal md:text-5xl">
          A long thread of training and craft
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted">
          A selection of the certifications and milestones that shape how I
          work today. The full list keeps growing — by design.
        </p>
      </header>

      <ol role="list" className="relative border-l border-line/70 pl-8">
        {ENTRIES.map((entry, idx) => (
          <li key={idx} className="relative pb-12 last:pb-0">
            <span
              aria-hidden
              className="absolute -left-[37px] top-2 h-3 w-3 rounded-full border-2 border-rose-500 bg-ivory"
            />
            <p className="text-[11px] uppercase tracking-[0.28em] text-gold-500">
              {entry.period}
            </p>
            <h3 className="mt-2 font-display text-2xl text-charcoal">
              {entry.title}
            </h3>
            <p className="mt-1 text-sm text-rose-700">{entry.org}</p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
              {entry.summary}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
