import {
  Category,
  MON_TO_SAT_MASK,
  Service,
  ServiceWithCategory,
} from "@/types/catalog";

function placeholderImage(label: string, palette: [string, string, string]) {
  const [from, via, to] = palette;
  const svg = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'>
      <defs>
        <linearGradient id='bg' x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0%' stop-color='${from}'/>
          <stop offset='55%' stop-color='${via}'/>
          <stop offset='100%' stop-color='${to}'/>
        </linearGradient>
      </defs>
      <rect width='800' height='600' fill='url(#bg)'/>
      <g fill='none' stroke='rgba(255,255,255,0.45)' stroke-width='1.4'>
        <circle cx='600' cy='160' r='90'/>
        <circle cx='600' cy='160' r='140'/>
      </g>
      <g fill='rgba(255,255,255,0.95)' font-family='Georgia' font-style='italic' font-size='32'>
        <text x='40' y='540'>${label}</text>
      </g>
    </svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

const PALETTES = {
  rose:    ["#FCEAE5", "#F4B8A6", "#9A4F44"] as [string, string, string],
  gold:    ["#F6ECD7", "#E5C99A", "#8D7038"] as [string, string, string],
  cream:   ["#FBF8F3", "#F4EDE2", "#8A736E"] as [string, string, string],
  blush:   ["#FCEAE5", "#E89886", "#6E3A33"] as [string, string, string],
  ruby:    ["#F8D7CE", "#D87A6A", "#4A2622"] as [string, string, string],
  copper:  ["#F6E4D2", "#D2AE71", "#7A4A2A"] as [string, string, string],
  sand:    ["#F4EDE2", "#E5C99A", "#9A8770"] as [string, string, string],
  deepRose:["#F4B8A6", "#B96253", "#4A2622"] as [string, string, string],
};

export const PLACEHOLDER_CATEGORIES: Category[] = [
  {
    id: "cat-makeup",
    slug: "makeup",
    name: "Makeup",
    blurb: "Simple, bridal, prom, and event makeup tailored to your moment.",
    sortOrder: 1,
  },
  {
    id: "cat-eyebrows",
    slug: "eyebrows",
    name: "Eyebrows",
    blurb: "From a clean basic shape to microblading, shadow brows, and extensions.",
    sortOrder: 2,
  },
  {
    id: "cat-facial",
    slug: "facial",
    name: "Facial",
    blurb: "Deep cleansing, skin boosters, treatments, and considered facial care.",
    sortOrder: 3,
  },
  {
    id: "cat-removal",
    slug: "removal",
    name: "Removal",
    blurb: "Laser, Selan, and Rejuvi tattoo and pigment removal.",
    sortOrder: 4,
  },
  {
    id: "cat-lips",
    slug: "lips",
    name: "Lips",
    blurb: "Lip blush, neutralization, lip liner tattoo, and laser removal.",
    sortOrder: 5,
  },
  {
    id: "cat-lashes",
    slug: "lashes",
    name: "Lashes",
    blurb: "Lash lifts, full extensions, refills, and lash tinting.",
    sortOrder: 6,
  },
  {
    id: "cat-body-laser",
    slug: "body-laser",
    name: "Body Laser",
    blurb: "Laser hair removal across the body, plus electric epilation.",
    sortOrder: 7,
  },
  {
    id: "cat-nails",
    slug: "nails",
    name: "Nails",
    blurb: "Multi-session nail packages, available privately or in small groups.",
    sortOrder: 8,
  },
  {
    id: "cat-courses",
    slug: "courses",
    name: "Courses",
    blurb: "Multi-month programs in makeup and permanent tattoo techniques.",
    sortOrder: 9,
  },
];

export const PLACEHOLDER_SERVICES: Service[] = [
  // ─── Makeup ────────────────────────────────────────────
  {
    id: "srv-simple-makeup",
    categoryId: "cat-makeup",
    slug: "simple-makeup",
    name: "Simple Makeup",
    description:
      "A clean, fresh look for everyday occasions or a polished daytime finish.",
    priceCents: 7500,
    durationMinutes: 60,
    imageUrl: placeholderImage("Simple Makeup", PALETTES.rose),
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 1,
  },
  {
    id: "srv-bridal-makeup",
    categoryId: "cat-makeup",
    slug: "bridal-makeup",
    name: "Bridal Makeup",
    description:
      "A 90-minute bridal session crafted for the wedding day. Trial available on request.",
    priceCents: 35000,
    durationMinutes: 90,
    imageUrl: placeholderImage("Bridal Makeup", PALETTES.rose),
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 2,
  },
  {
    id: "srv-bridal-bridesmaid-package",
    categoryId: "cat-makeup",
    slug: "bridal-bridesmaid-package",
    name: "Bridal + Bridesmaid Package",
    description:
      "Bride and bridesmaid styled together. ~1 hour each, $500 total for both looks.",
    priceCents: 50000,
    durationMinutes: 120,
    imageUrl: placeholderImage("Bridal + Bridesmaid", PALETTES.rose),
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 3,
  },
  {
    id: "srv-event-makeup",
    categoryId: "cat-makeup",
    slug: "event-makeup",
    name: "Event Makeup",
    description:
      "For wedding guests, event guests, New Year's, and special evenings.",
    priceCents: 10000,
    durationMinutes: 60,
    imageUrl: placeholderImage("Event Makeup", PALETTES.rose),
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 4,
  },
  {
    id: "srv-prom-makeup",
    categoryId: "cat-makeup",
    slug: "prom-makeup",
    name: "Prom Makeup",
    description: "A confident, photo-ready prom look in one hour.",
    priceCents: 10000,
    durationMinutes: 60,
    imageUrl: placeholderImage("Prom Makeup", PALETTES.rose),
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 5,
  },

  // ─── Eyebrows ─────────────────────────────────────────
  {
    id: "srv-basic-eyebrows",
    categoryId: "cat-eyebrows",
    slug: "basic-eyebrows",
    name: "Basic Eyebrows",
    description: "Quick shape, clean-up, and tidy.",
    priceCents: 1000,
    durationMinutes: 15,
    imageUrl: placeholderImage("Basic Eyebrows", PALETTES.gold),
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 1,
  },
  {
    id: "srv-microblading",
    categoryId: "cat-eyebrows",
    slug: "microblading",
    name: "Microblading",
    description:
      "Fine, hair-stroke microblading for natural, defined brows. +$50 retouch session.",
    priceCents: 35000,
    durationMinutes: 60,
    imageUrl: placeholderImage("Microblading", PALETTES.gold),
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 2,
  },
  {
    id: "srv-micropigmentation",
    categoryId: "cat-eyebrows",
    slug: "micropigmentation",
    name: "Micropigmentation",
    description:
      "Soft, even brow pigmentation that lasts. +$50 retouch session.",
    priceCents: 35000,
    durationMinutes: 60,
    imageUrl: placeholderImage("Micropigmentation", PALETTES.gold),
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 3,
  },
  {
    id: "srv-shadow-brows",
    categoryId: "cat-eyebrows",
    slug: "shadow-brows",
    name: "Shadow Brows",
    description:
      "A powdered, made-up brow look done as a tattoo. +$50 retouch session.",
    priceCents: 35000,
    durationMinutes: 60,
    imageUrl: placeholderImage("Shadow Brows", PALETTES.gold),
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 4,
  },
  {
    id: "srv-eyebrows-extension",
    categoryId: "cat-eyebrows",
    slug: "eyebrows-extension",
    name: "Eyebrows Extension",
    description:
      "Individual brow hair extensions for dense, structured shape.",
    priceCents: 6000,
    durationMinutes: 90,
    imageUrl: placeholderImage("Eyebrows Extension", PALETTES.gold),
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 5,
  },

  // ─── Facial ───────────────────────────────────────────
  {
    id: "srv-deep-cleaning-facial",
    categoryId: "cat-facial",
    slug: "deep-cleaning-facial",
    name: "Deep Cleaning Facial",
    description:
      "Full cleanse, exfoliation, and extractions to reset the skin.",
    priceCents: 7500,
    durationMinutes: 60,
    imageUrl: placeholderImage("Deep Cleaning Facial", PALETTES.cream),
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 1,
  },
  {
    id: "srv-skin-booster",
    categoryId: "cat-facial",
    slug: "skin-booster",
    name: "Skin Booster",
    description: "Hydration and glow boost for a refreshed, dewy finish.",
    priceCents: 15000,
    durationMinutes: 30,
    imageUrl: placeholderImage("Skin Booster", PALETTES.cream),
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 2,
  },
  {
    id: "srv-scars-treatment",
    categoryId: "cat-facial",
    slug: "scars-treatment",
    name: "Scars Treatment",
    description: "Targeted treatment to soften scarring and improve texture.",
    priceCents: 10000,
    durationMinutes: 30,
    imageUrl: placeholderImage("Scars Treatment", PALETTES.cream),
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 3,
  },
  {
    id: "srv-pigmentation-treatment",
    categoryId: "cat-facial",
    slug: "pigmentation-treatment",
    name: "Pigmentation Treatment",
    description:
      "Brightens dark spots and evens skin tone over a series of sessions.",
    priceCents: 10000,
    durationMinutes: 30,
    imageUrl: placeholderImage("Pigmentation Treatment", PALETTES.cream),
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 4,
  },
  {
    id: "srv-lift-treatment",
    categoryId: "cat-facial",
    slug: "lift-treatment",
    name: "Lift Treatment",
    description: "A lifting facial for firmer, more sculpted-looking skin.",
    priceCents: 10000,
    durationMinutes: 30,
    imageUrl: placeholderImage("Lift Treatment", PALETTES.cream),
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 5,
  },
  {
    id: "srv-under-eyes-treatment",
    categoryId: "cat-facial",
    slug: "under-eyes-treatment",
    name: "Under Eyes Treatment",
    description: "Brightens, hydrates, and de-puffs the under-eye area.",
    priceCents: 7500,
    durationMinutes: 20,
    imageUrl: placeholderImage("Under Eyes Treatment", PALETTES.cream),
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 6,
  },
  {
    id: "srv-micro-needling-face",
    categoryId: "cat-facial",
    slug: "micro-needling-face",
    name: "Micro Needling — Face",
    description:
      "Collagen-induction therapy for the face. Smoother texture, fewer scars.",
    priceCents: 5000,
    durationMinutes: 45,
    imageUrl: placeholderImage("Micro Needling · Face", PALETTES.cream),
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 7,
  },
  {
    id: "srv-micro-needling-face-neck",
    categoryId: "cat-facial",
    slug: "micro-needling-face-neck",
    name: "Micro Needling — Face & Neck",
    description:
      "Full face and neck micro needling — collagen induction over a wider area.",
    priceCents: 10000,
    durationMinutes: 60,
    imageUrl: placeholderImage("Micro Needling · Face & Neck", PALETTES.cream),
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 8,
  },
  {
    id: "srv-face-neck-massage",
    categoryId: "cat-facial",
    slug: "face-neck-massage",
    name: "Face and Neck Massage",
    description:
      "Lymphatic, sculpting massage for the face and neck. Calming and de-puffing.",
    priceCents: 5000,
    durationMinutes: 40,
    imageUrl: placeholderImage("Face & Neck Massage", PALETTES.cream),
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 9,
  },

  // ─── Removal (tattoo / pigment) ───────────────────────
  {
    id: "srv-removal-laser",
    categoryId: "cat-removal",
    slug: "removal-laser",
    name: "Laser Removal",
    description:
      "Laser-based removal of unwanted tattoo or pigment, by session.",
    priceCents: 10000,
    durationMinutes: 30,
    imageUrl: placeholderImage("Laser Removal", PALETTES.blush),
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 1,
  },
  {
    id: "srv-removal-selan",
    categoryId: "cat-removal",
    slug: "removal-selan",
    name: "Selan Removal",
    description: "Saline-based pigment removal — gentler, gradual lightening.",
    priceCents: 5000,
    durationMinutes: 30,
    imageUrl: placeholderImage("Selan Removal", PALETTES.blush),
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 2,
  },
  {
    id: "srv-removal-rejuvi",
    categoryId: "cat-removal",
    slug: "removal-rejuvi",
    name: "Rejuvi Removal",
    description:
      "Rejuvi method for tattoo and permanent makeup removal, per session.",
    priceCents: 7500,
    durationMinutes: 45,
    imageUrl: placeholderImage("Rejuvi Removal", PALETTES.blush),
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 3,
  },

  // ─── Lips ─────────────────────────────────────────────
  {
    id: "srv-lip-blush",
    categoryId: "cat-lips",
    slug: "lip-blush",
    name: "Lip Blush",
    description:
      "Soft, blushed lip pigmentation for natural-looking color and definition.",
    priceCents: 35000,
    durationMinutes: 90,
    imageUrl: placeholderImage("Lip Blush", PALETTES.ruby),
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 1,
  },
  {
    id: "srv-lip-neutralization",
    categoryId: "cat-lips",
    slug: "lip-neutralization",
    name: "Lip Neutralization",
    description:
      "Neutralizes darker pigment in the lips for a balanced, even tone.",
    priceCents: 15000,
    durationMinutes: 60,
    imageUrl: placeholderImage("Lip Neutralization", PALETTES.ruby),
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 2,
  },
  {
    id: "srv-lip-liner",
    categoryId: "cat-lips",
    slug: "lip-liner",
    name: "Lip Liner",
    description: "Permanent lip liner for cleaner shape and added definition.",
    priceCents: 10000,
    durationMinutes: 60,
    imageUrl: placeholderImage("Lip Liner", PALETTES.ruby),
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 3,
  },
  {
    id: "srv-lip-laser-removal",
    categoryId: "cat-lips",
    slug: "lip-laser-removal",
    name: "Lip Laser Removal",
    description:
      "Laser removal of unwanted lip pigment. Pricing per session, confirmed at consultation.",
    priceCents: 10000,
    durationMinutes: 30,
    imageUrl: placeholderImage("Lip Laser Removal", PALETTES.ruby),
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 4,
  },

  // ─── Lashes ───────────────────────────────────────────
  {
    id: "srv-lash-lift",
    categoryId: "cat-lashes",
    slug: "lash-lift",
    name: "Lash Lift",
    description: "Natural-looking lift that opens the eyes — no extensions.",
    priceCents: 5000,
    durationMinutes: 60,
    imageUrl: placeholderImage("Lash Lift", PALETTES.gold),
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 1,
  },
  {
    id: "srv-lash-extensions-full",
    categoryId: "cat-lashes",
    slug: "lash-extensions-full",
    name: "Lash Extensions — Full Set",
    description:
      "Full set of lash extensions, applied one-to-one for a soft, fuller look.",
    priceCents: 6000,
    durationMinutes: 120,
    imageUrl: placeholderImage("Lash Extensions · Full Set", PALETTES.gold),
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 2,
  },
  {
    id: "srv-lash-refill",
    categoryId: "cat-lashes",
    slug: "lash-refill",
    name: "Lash Refill",
    description: "Top-up of an existing lash set within ~3 weeks.",
    priceCents: 3500,
    durationMinutes: 60,
    imageUrl: placeholderImage("Lash Refill", PALETTES.gold),
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 3,
  },
  {
    id: "srv-tinted-lashes",
    categoryId: "cat-lashes",
    slug: "tinted-lashes",
    name: "Tinted Lashes",
    description: "Lash tinting for added depth and definition.",
    priceCents: 2000,
    durationMinutes: 25,
    imageUrl: placeholderImage("Tinted Lashes", PALETTES.gold),
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 4,
  },

  // ─── Body Laser ───────────────────────────────────────
  {
    id: "srv-body-full",
    categoryId: "cat-body-laser",
    slug: "body-laser-full-body",
    name: "Full Body Laser",
    description: "Full-body laser hair removal session, ~60–90 minutes.",
    priceCents: 20000,
    durationMinutes: 90,
    imageUrl: placeholderImage("Full Body Laser", PALETTES.copper),
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 1,
  },
  {
    id: "srv-body-under-arms",
    categoryId: "cat-body-laser",
    slug: "body-laser-under-arms",
    name: "Under Arms Laser",
    description: "Quick laser session for the underarm area.",
    priceCents: 5000,
    durationMinutes: 10,
    imageUrl: placeholderImage("Under Arms Laser", PALETTES.copper),
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 2,
  },
  {
    id: "srv-body-full-arms",
    categoryId: "cat-body-laser",
    slug: "body-laser-full-arms",
    name: "Full Arms Laser",
    description: "Laser hair removal across the full arm.",
    priceCents: 8000,
    durationMinutes: 15,
    imageUrl: placeholderImage("Full Arms Laser", PALETTES.copper),
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 3,
  },
  {
    id: "srv-body-legs",
    categoryId: "cat-body-laser",
    slug: "body-laser-legs",
    name: "Legs Laser",
    description: "Laser hair removal for the legs, ~30–40 minutes.",
    priceCents: 10000,
    durationMinutes: 40,
    imageUrl: placeholderImage("Legs Laser", PALETTES.copper),
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 4,
  },
  {
    id: "srv-body-full-bikini",
    categoryId: "cat-body-laser",
    slug: "body-laser-full-bikini",
    name: "Full Bikini Laser",
    description: "Full bikini laser hair removal, completed in ~20 minutes.",
    priceCents: 10000,
    durationMinutes: 20,
    imageUrl: placeholderImage("Full Bikini Laser", PALETTES.copper),
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 5,
  },
  {
    id: "srv-body-belly-back",
    categoryId: "cat-body-laser",
    slug: "body-laser-belly-back",
    name: "Belly / Back Laser",
    description: "Targeted laser session for the belly or the back.",
    priceCents: 5000,
    durationMinutes: 10,
    imageUrl: placeholderImage("Belly / Back Laser", PALETTES.copper),
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 6,
  },
  {
    id: "srv-body-full-face",
    categoryId: "cat-body-laser",
    slug: "body-laser-full-face",
    name: "Full Face Laser",
    description: "Full-face laser hair removal session.",
    priceCents: 8000,
    durationMinutes: 15,
    imageUrl: placeholderImage("Full Face Laser", PALETTES.copper),
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 7,
  },
  {
    id: "srv-body-moustache",
    categoryId: "cat-body-laser",
    slug: "body-laser-moustache",
    name: "Moustache Laser",
    description: "Quick targeted laser session for the upper lip.",
    priceCents: 2000,
    durationMinutes: 5,
    imageUrl: placeholderImage("Moustache Laser", PALETTES.copper),
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 8,
  },
  {
    id: "srv-electric-epilation",
    categoryId: "cat-body-laser",
    slug: "electric-epilation",
    name: "Electric Epilation",
    description:
      "Electrolysis hair removal, billed at $2 per minute. 30 minutes shown as default — final price set at the session.",
    priceCents: 6000,
    durationMinutes: 30,
    imageUrl: placeholderImage("Electric Epilation", PALETTES.copper),
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 9,
  },

  // ─── Nails (multi-session packages) ────────────────────
  {
    id: "srv-nails-spa",
    categoryId: "cat-nails",
    slug: "nails-spa-mani-pedi",
    name: "Spa Mani + Pedi",
    description:
      "5-session package combining spa manicure and spa pedicure. Private $200 / In group $150 per person.",
    priceCents: 20000,
    durationMinutes: 120,
    imageUrl: placeholderImage("Spa Mani + Pedi", PALETTES.sand),
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 1,
  },
  {
    id: "srv-nails-russian",
    categoryId: "cat-nails",
    slug: "nails-russian-mani-pedi",
    name: "Russian Mani & Pedi + Gel Color",
    description:
      "5 sessions of Russian manicure and pedicure with gel color. Private $250 / In group $180 per person.",
    priceCents: 25000,
    durationMinutes: 150,
    imageUrl: placeholderImage("Russian Mani & Pedi + Gel", PALETTES.sand),
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 2,
  },
  {
    id: "srv-nails-rubber-base",
    categoryId: "cat-nails",
    slug: "nails-rubber-base",
    name: "Rubber Base (Russian)",
    description:
      "3–5 sessions of rubber base technique. Private $250 / In group $180 per person.",
    priceCents: 25000,
    durationMinutes: 150,
    imageUrl: placeholderImage("Rubber Base", PALETTES.sand),
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 3,
  },
  {
    id: "srv-nails-russian-rubber-gel",
    categoryId: "cat-nails",
    slug: "nails-russian-rubber-gel",
    name: "Russian + Rubber Base + Gel Color",
    description:
      "5-session combined program: Russian, rubber base, and gel color. Private $300 / In group $200 per person.",
    priceCents: 30000,
    durationMinutes: 150,
    imageUrl: placeholderImage("Russian + Rubber + Gel", PALETTES.sand),
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 4,
  },
  {
    id: "srv-nails-complete",
    categoryId: "cat-nails",
    slug: "nails-complete-bundle",
    name: "Complete Nails Bundle",
    description:
      "14–16 sessions covering all of the above techniques. Private $700 / In group $500 per person.",
    priceCents: 70000,
    durationMinutes: 150,
    imageUrl: placeholderImage("Complete Nails Bundle", PALETTES.sand),
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 5,
  },

  // ─── Courses ──────────────────────────────────────────
  {
    id: "srv-course-makeup",
    categoryId: "cat-courses",
    slug: "course-makeup",
    name: "Makeup Course",
    description:
      "3-month makeup program — 24 sessions covering technique, products, and styling.",
    priceCents: 110000,
    durationMinutes: 180,
    imageUrl: placeholderImage("Makeup Course", PALETTES.deepRose),
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 1,
  },
  {
    id: "srv-course-tattoo-eyebrows",
    categoryId: "cat-courses",
    slug: "course-tattoo-eyebrows",
    name: "Tattoo Eyebrows Course",
    description:
      "2-month course — 16 sessions covering microblading, micropigmentation, and shadow brows.",
    priceCents: 110000,
    durationMinutes: 180,
    imageUrl: placeholderImage("Tattoo Eyebrows Course", PALETTES.deepRose),
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 2,
  },
  {
    id: "srv-course-tattoo-lips",
    categoryId: "cat-courses",
    slug: "course-tattoo-lips",
    name: "Tattoo Lips Course",
    description:
      "2-month course — 16 sessions covering lip blush, neutralization, and lip liner.",
    priceCents: 110000,
    durationMinutes: 180,
    imageUrl: placeholderImage("Tattoo Lips Course", PALETTES.deepRose),
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 3,
  },
];

export function listCategories(): Category[] {
  return [...PLACEHOLDER_CATEGORIES].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function listServices(): Service[] {
  return [...PLACEHOLDER_SERVICES]
    .filter((s) => s.isActive)
    .sort((a, b) => {
      if (a.categoryId !== b.categoryId) {
        const catA = PLACEHOLDER_CATEGORIES.find((c) => c.id === a.categoryId)?.sortOrder ?? 0;
        const catB = PLACEHOLDER_CATEGORIES.find((c) => c.id === b.categoryId)?.sortOrder ?? 0;
        if (catA !== catB) return catA - catB;
      }
      return a.sortOrder - b.sortOrder;
    });
}

export function listServicesByCategory(categorySlug: string): Service[] {
  const category = PLACEHOLDER_CATEGORIES.find((c) => c.slug === categorySlug);
  if (!category) return [];
  return listServices().filter((s) => s.categoryId === category.id);
}

export function findServiceBySlug(slug: string): ServiceWithCategory | null {
  const service = PLACEHOLDER_SERVICES.find((s) => s.slug === slug && s.isActive);
  if (!service) return null;
  const category = PLACEHOLDER_CATEGORIES.find((c) => c.id === service.categoryId);
  if (!category) return null;
  return { ...service, category };
}
