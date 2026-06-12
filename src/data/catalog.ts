import {
  Category,
  MON_TO_SAT_MASK,
  Service,
  ServiceWithCategory,
} from "@/types/catalog";
import simpleMakeupImg from "@/Images/services/simple.jpg";
import bridalMakeupImg from "@/Images/services/bride.jpg";
import bridesmaidPackageImg from "@/Images/services/bridemaid.jpg";
import eventMakeupImg from "@/Images/services/event.jpg";
import promMakeupImg from "@/Images/services/prom.jpg";
import shadowBrowsImg from "@/Images/services/eyebrow_tattoo.png";
import liftTreatmentImg from "@/Images/services/lift_treatment.png";
import lipBlushImg from "@/Images/services/lip_blush.jpg";
import lashExtensionsImg from "@/Images/services/lash_extensions.jpg";
import manicureImg from "@/Images/services/manicure.jpeg";
import pedicureImg from "@/Images/services/pedicure.jpeg";
import spaPedicureImg from "@/Images/services/spa_pedicure.jpeg";
import russianManicureImg from "@/Images/services/russian_manicure.jpeg";
import gelColorImg from "@/Images/services/gel_color.jpeg";
import rubberBaseImg from "@/Images/services/rubber_base.jpeg";
import fullSetGelImg from "@/Images/services/gel.jpeg";
import basicEyebrowsImg from "@/Images/services/basic_eyebrows.jpg";
import micropigmentationImg from "@/Images/services/micro_pigmentation.jpg";
import deepCleansingFacialImg from "@/Images/services/deep_cleansing_facial.jpg";
import underEyesImg from "@/Images/services/under_eyes_treatment.jpg";
import microNeedlingImg from "@/Images/services/micro_needling.jpg";
import microNeedlingNeckImg from "@/Images/services/micro_needling_neck.jpg";
import faceNeckMassageImg from "@/Images/services/face_and_neck_massage.jpg";
import laserTattooRemovalImg from "@/Images/services/laser_tattoo_removal.jpg";
import lipLinerImg from "@/Images/services/lip_liner_tattoo.jpg";
import lipLaserRemovalImg from "@/Images/services/lip_laser_removal.jpg";
import lashLiftImg from "@/Images/services/lash_lifts.jpg";
import tintedLashesImg from "@/Images/services/tinted_lashes.jpg";
import underArmsLaserImg from "@/Images/services/underarm_hair_removal.jpg";
import fullArmLaserImg from "@/Images/services/full_arm_laser.jpg";
import legLaserImg from "@/Images/services/leg_laser_removal.jpg";
import bellyBackLaserImg from "@/Images/services/belly_back_laser_removal.jpg";
import faceLaserImg from "@/Images/services/face_laser.jpg";
import moustacheLaserImg from "@/Images/services/mustache_laser.jpg";
import electricEpilationImg from "@/Images/services/electric_epilation.jpg";
import spaManicureImg from "@/Images/services/spa_manicure.jpg";
import rubberBaseGelishImg from "@/Images/services/rubber_base_and_gelish.jpg";
import refillGelImg from "@/Images/services/refill_gel.jpg";
import frenchImg from "@/Images/services/french.jpg";
import nailDesignImg from "@/Images/services/design.jpg";

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
    blurb:
      "Manicures, pedicures, Russian nails, gel, and refills — with French, design, and polish add-ons.",
    sortOrder: 8,
  },
  {
    id: "cat-courses",
    slug: "courses",
    name: "Courses",
    blurb:
      "Multi-month makeup and permanent tattoo programs, plus multi-session nail packages.",
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
    imageUrl: simpleMakeupImg.src,
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
    imageUrl: bridalMakeupImg.src,
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
    imageUrl: bridesmaidPackageImg.src,
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
    imageUrl: eventMakeupImg.src,
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
    imageUrl: promMakeupImg.src,
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
    imageUrl: basicEyebrowsImg.src,
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
    imageUrl: "https://images.unsplash.com/photo-1651839633408-3fccd671b832?auto=format&fit=crop&w=900&q=80",
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
    imageUrl: micropigmentationImg.src,
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
    imageUrl: shadowBrowsImg.src,
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
    imageUrl: "https://images.unsplash.com/photo-1516220362602-dba5272034e7?auto=format&fit=crop&w=900&q=80",
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
    imageUrl: deepCleansingFacialImg.src,
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
    imageUrl: "https://images.unsplash.com/photo-1573461160327-b450ce3d8e7f?auto=format&fit=crop&w=900&q=80",
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
    imageUrl: "https://images.unsplash.com/photo-1555820585-c5ae44394b79?auto=format&fit=crop&w=900&q=80",
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
    imageUrl: "https://images.unsplash.com/photo-1730288951113-9cc087c14b83?auto=format&fit=crop&w=900&q=80",
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
    imageUrl: liftTreatmentImg.src,
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
    imageUrl: underEyesImg.src,
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
    imageUrl: microNeedlingImg.src,
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
    imageUrl: microNeedlingNeckImg.src,
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
    imageUrl: faceNeckMassageImg.src,
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
    imageUrl: laserTattooRemovalImg.src,
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
    imageUrl: "https://images.unsplash.com/photo-1597852075234-fd721ac361d3?auto=format&fit=crop&w=900&q=80",
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
    imageUrl: "https://images.unsplash.com/photo-1761819922656-d1b77eef49c0?auto=format&fit=crop&w=900&q=80",
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
    imageUrl: lipBlushImg.src,
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
    imageUrl: "https://images.unsplash.com/photo-1762114468986-e9b56e7d9d97?auto=format&fit=crop&w=900&q=80",
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
    imageUrl: lipLinerImg.src,
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
    imageUrl: lipLaserRemovalImg.src,
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
    imageUrl: lashLiftImg.src,
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
    imageUrl: lashExtensionsImg.src,
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
    imageUrl: "https://images.unsplash.com/photo-1548902378-2ec44c906391?auto=format&fit=crop&w=900&q=80",
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
    imageUrl: tintedLashesImg.src,
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
    imageUrl: "https://images.unsplash.com/photo-1700760933574-9f0f4ea9aa3b?auto=format&fit=crop&w=900&q=80",
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
    imageUrl: underArmsLaserImg.src,
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
    imageUrl: fullArmLaserImg.src,
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
    imageUrl: legLaserImg.src,
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
    imageUrl: "https://images.unsplash.com/photo-1626623936480-15fd56a295f8?auto=format&fit=crop&w=900&q=80",
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
    imageUrl: bellyBackLaserImg.src,
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
    imageUrl: faceLaserImg.src,
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
    imageUrl: moustacheLaserImg.src,
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 8,
  },
  {
    id: "srv-electric-epilation",
    categoryId: "cat-body-laser",
    slug: "electric-epilation",
    name: "Épilation Électrique",
    description:
      "Electrolysis hair removal, billed at $2 per minute. Final price is set by session length.",
    priceCents: 200,
    durationMinutes: 30,
    imageUrl: electricEpilationImg.src,
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 9,
  },

  // ─── Nails (single-session services) ──────────────────
  {
    id: "srv-nails-manicure",
    categoryId: "cat-nails",
    slug: "nails-manicure",
    name: "Manicure",
    description: "Classic manicure — shape, cuticle care, and a clean finish.",
    priceCents: 1500,
    durationMinutes: 30,
    imageUrl: manicureImg.src,
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 1,
  },
  {
    id: "srv-nails-spa-manicure",
    categoryId: "cat-nails",
    slug: "nails-spa-manicure",
    name: "Spa Manicure",
    description: "Manicure with an added soak, scrub, and hand massage.",
    priceCents: 2000,
    durationMinutes: 40,
    imageUrl: spaManicureImg.src,
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 2,
  },
  {
    id: "srv-nails-pedicure",
    categoryId: "cat-nails",
    slug: "nails-pedicure",
    name: "Pedicure",
    description: "Classic pedicure — shape, cuticle care, and a clean finish.",
    priceCents: 2000,
    durationMinutes: 45,
    imageUrl: pedicureImg.src,
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 3,
  },
  {
    id: "srv-nails-spa-pedicure",
    categoryId: "cat-nails",
    slug: "nails-spa-pedicure",
    name: "Spa Pedicure",
    description: "Pedicure with an added soak, scrub, and foot massage.",
    priceCents: 3000,
    durationMinutes: 60,
    imageUrl: spaPedicureImg.src,
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 4,
  },
  {
    id: "srv-nails-russian-pose",
    categoryId: "cat-nails",
    slug: "nails-russian-pose",
    name: "Russian Manicure + Pose",
    description: "Russian dry manicure with gel polish application.",
    priceCents: 1800,
    durationMinutes: 35,
    imageUrl: russianManicureImg.src,
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 5,
  },
  {
    id: "srv-nails-russian-gel-color",
    categoryId: "cat-nails",
    slug: "nails-russian-gel-color",
    name: "Gel Color",
    description: "Russian dry manicure finished with long-lasting gel color.",
    priceCents: 2500,
    durationMinutes: 45,
    imageUrl: gelColorImg.src,
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 6,
  },
  {
    id: "srv-nails-russian-rubber-base",
    categoryId: "cat-nails",
    slug: "nails-russian-rubber-base",
    name: "Rubber Base",
    description: "Russian dry manicure with a strengthening rubber base.",
    priceCents: 3000,
    durationMinutes: 45,
    imageUrl: rubberBaseImg.src,
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 7,
  },
  {
    id: "srv-nails-russian-rubber-gel-color",
    categoryId: "cat-nails",
    slug: "nails-russian-rubber-gel-color",
    name: "Rubber Base + Gel Color",
    description:
      "Russian dry manicure with rubber base and gel color in one session.",
    priceCents: 3500,
    durationMinutes: 90,
    imageUrl: rubberBaseGelishImg.src,
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 8,
  },
  {
    id: "srv-nails-russian-full-set-gel",
    categoryId: "cat-nails",
    slug: "nails-russian-full-set-gel",
    name: "Full Set Gel",
    description: "Russian dry manicure with a full set of gel extensions.",
    priceCents: 6500,
    durationMinutes: 90,
    imageUrl: fullSetGelImg.src,
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 9,
  },
  {
    id: "srv-nails-refill-gel",
    categoryId: "cat-nails",
    slug: "nails-refill-gel",
    name: "Refill Gel",
    description: "Gel refill on an existing set to keep it fresh and strong.",
    priceCents: 4500,
    durationMinutes: 60,
    imageUrl: refillGelImg.src,
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 10,
  },
  {
    id: "srv-nails-french",
    categoryId: "cat-nails",
    slug: "nails-french",
    name: "French Finish",
    description:
      "French tips added to any nail service. From $5, depending on the style chosen.",
    priceCents: 500,
    durationMinutes: 15,
    imageUrl: frenchImg.src,
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 11,
  },
  {
    id: "srv-nails-design",
    categoryId: "cat-nails",
    slug: "nails-design",
    name: "Nail Design",
    description:
      "Custom nail art. $2 to $15 depending on the style and detail you choose.",
    priceCents: 200,
    durationMinutes: 15,
    imageUrl: nailDesignImg.src,
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 12,
  },
  {
    id: "srv-nails-pose",
    categoryId: "cat-nails",
    slug: "nails-pose",
    name: "Pose",
    description: "Gel polish application on its own. From $7, depending on the style.",
    priceCents: 700,
    durationMinutes: 15,
    imageUrl: "https://images.unsplash.com/photo-1619607146034-5a05296c8f9a?auto=format&fit=crop&w=900&q=80",
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 13,
  },

  // ─── Courses · Nails (multi-session packages) ──────────
  {
    id: "srv-nails-spa",
    categoryId: "cat-courses",
    slug: "nails-spa-mani-pedi",
    name: "Spa Mani + Pedi",
    description:
      "5-session package combining spa manicure and spa pedicure. Private $200 / In group $150 per person.",
    priceCents: 20000,
    durationMinutes: 120,
    imageUrl: "https://images.unsplash.com/photo-1758225490983-0fae7961e425?auto=format&fit=crop&w=900&q=80",
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 4,
  },
  {
    id: "srv-nails-russian",
    categoryId: "cat-courses",
    slug: "nails-russian-mani-pedi",
    name: "Russian Mani & Pedi + Gel Color",
    description:
      "5 sessions of Russian manicure and pedicure with gel color. Private $250 / In group $180 per person.",
    priceCents: 25000,
    durationMinutes: 150,
    imageUrl: "https://images.unsplash.com/photo-1566113519662-7807a42cc50d?auto=format&fit=crop&w=900&q=80",
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 5,
  },
  {
    id: "srv-nails-rubber-base",
    categoryId: "cat-courses",
    slug: "nails-rubber-base",
    name: "Rubber Base (Russian)",
    description:
      "3–5 sessions of rubber base technique. Private $250 / In group $180 per person.",
    priceCents: 25000,
    durationMinutes: 150,
    imageUrl: "https://images.unsplash.com/photo-1610992015762-45dca7fa3a85?auto=format&fit=crop&w=900&q=80",
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 6,
  },
  {
    id: "srv-nails-russian-rubber-gel",
    categoryId: "cat-courses",
    slug: "nails-russian-rubber-gel",
    name: "Russian + Rubber Base + Gel Color",
    description:
      "5-session combined program: Russian, rubber base, and gel color. Private $300 / In group $200 per person.",
    priceCents: 30000,
    durationMinutes: 150,
    imageUrl: "https://images.unsplash.com/photo-1690749138086-7422f71dc159?auto=format&fit=crop&w=900&q=80",
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 7,
  },
  {
    id: "srv-nails-complete",
    categoryId: "cat-courses",
    slug: "nails-complete-bundle",
    name: "Complete Nails Bundle",
    description:
      "14–16 sessions covering all of the above techniques. Private $700 / In group $500 per person.",
    priceCents: 70000,
    durationMinutes: 150,
    imageUrl: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=900&q=80",
    weekdayMask: MON_TO_SAT_MASK,
    isActive: true,
    sortOrder: 8,
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
    imageUrl: "https://images.unsplash.com/photo-1620464003286-a5b0d79f32c2?auto=format&fit=crop&w=900&q=80",
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
    imageUrl: "https://images.unsplash.com/photo-1638959882708-9503b1cd595f?auto=format&fit=crop&w=900&q=80",
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
    imageUrl: "https://images.unsplash.com/photo-1598300188904-6287d52746ad?auto=format&fit=crop&w=900&q=80",
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
