import type { Metadata } from "next";
import { BioSection } from "@/components/about/BioSection";
import { ExperienceTimeline } from "@/components/about/ExperienceTimeline";
import { Specialties } from "@/components/about/Specialties";
import { Vision } from "@/components/about/Vision";
import { BookingCallout } from "@/components/home/BookingCallout";

export const metadata: Metadata = {
  title: "About",
  description:
    "Laudy Maamary — Lebanese beautician, founder of Laudy Maamary Beauty Center in Dekwaneh, instructor at CIT since 2002.",
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <BioSection />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10 md:pb-20">
        <Specialties />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10 md:pb-20">
        <ExperienceTimeline />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10 md:pb-28">
        <Vision />
      </section>

      <BookingCallout />
    </>
  );
}
