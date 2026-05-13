import { BookingCallout } from "@/components/home/BookingCallout";
import { HeroBanner } from "@/components/home/HeroBanner";
import { Slideshow } from "@/components/home/Slideshow";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <Slideshow />
      <BookingCallout />
    </>
  );
}
