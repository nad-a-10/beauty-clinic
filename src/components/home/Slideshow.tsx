"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

import banner01 from "@/Images/banner/IMG_0620.jpeg";
import banner02 from "@/Images/banner/8F4EDDC4-9F49-4EF6-97FE-2156769BCD57.jpeg";
import banner03 from "@/Images/banner/CC733FC0-9E31-43F6-A8EC-C335315304FC.jpeg";
import banner04 from "@/Images/banner/9C25EC54-6065-46DE-9435-4929CF92C9AA.jpeg";

type Slide = { src: StaticImageData; alt: string };

const SLIDES: Slide[] = [
  { src: banner01, alt: "Inside the atelier" },
  { src: banner02, alt: "Inside the atelier" },
  { src: banner03, alt: "Inside the atelier" },
  { src: banner04, alt: "Inside the atelier" },
];

export function Slideshow() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [],
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    intervalRef.current = window.setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [emblaApi]);

  return (
    <section
      aria-label="Clinic moments"
      className="relative mx-auto max-w-7xl px-6 pb-12 pt-6 md:px-10"
    >
      <div className="mb-8 flex items-end justify-between gap-6">
        <div>
          <span className="text-[11px] uppercase tracking-[0.32em] text-gold-500">
            Inside the atelier
          </span>
          <h2 className="mt-3 font-display text-4xl text-charcoal md:text-5xl">
            Moments from our space
          </h2>
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            aria-label="Previous slide"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line/70 text-charcoal transition hover:bg-rose-50"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            aria-label="Next slide"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line/70 text-charcoal transition hover:bg-rose-50"
          >
            <ChevronRight className="h-5 w-5" aria-hidden />
          </button>
        </div>
      </div>

      <div ref={emblaRef} className="overflow-hidden rounded-[2rem]">
        <div className="flex">
          {SLIDES.map((slide, idx) => (
            <div
              key={idx}
              className="relative min-w-0 flex-[0_0_82%] pl-3 xs:flex-[0_0_66%] sm:flex-[0_0_52%] sm:pl-4 md:flex-[0_0_46%] lg:flex-[0_0_36%]"
            >
              <figure className="relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] shadow-soft">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="(min-width: 1024px) 36vw, (min-width: 768px) 46vw, (min-width: 640px) 52vw, (min-width: 480px) 66vw, 82vw"
                  className="object-cover"
                  placeholder="blur"
                  priority={idx === 0}
                />
              </figure>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => emblaApi?.scrollTo(i)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-500",
              i === selectedIndex
                ? "w-10 bg-rose-500"
                : "w-3 bg-charcoal/15 hover:bg-charcoal/30",
            )}
          />
        ))}
      </div>
    </section>
  );
}
