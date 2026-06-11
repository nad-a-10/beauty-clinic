"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { CategoryChips } from "./CategoryChips";
import { CategorySidebar } from "./CategorySidebar";
import { ServiceCard } from "./ServiceCard";
import type { Category, Service } from "@/types/catalog";

interface Props {
  categories: Category[];
  services: Service[];
}

export function ServicesBrowser({ categories, services }: Props) {
  const [activeSlug, setActiveSlug] = useState<string | "all">("all");
  const scrollTargetRef = useRef<HTMLDivElement>(null);
  const skipFirstScroll = useRef(true);

  useEffect(() => {
    if (skipFirstScroll.current) {
      skipFirstScroll.current = false;
      return;
    }
    scrollTargetRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [activeSlug]);

  const categoryById = useMemo(() => {
    const map: Record<string, Category> = {};
    for (const c of categories) map[c.id] = c;
    return map;
  }, [categories]);

  const countsByCategoryId = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const s of services) {
      counts[s.categoryId] = (counts[s.categoryId] ?? 0) + 1;
    }
    return counts;
  }, [services]);

  const visibleServices = useMemo(() => {
    if (activeSlug === "all") return services;
    const category = categories.find((c) => c.slug === activeSlug);
    if (!category) return services;
    return services.filter((s) => s.categoryId === category.id);
  }, [activeSlug, categories, services]);

  const activeCategory =
    activeSlug === "all"
      ? null
      : categories.find((c) => c.slug === activeSlug) ?? null;

  return (
    <div>
      <CategoryChips
        categories={categories}
        activeSlug={activeSlug}
        onSelect={setActiveSlug}
        countsByCategoryId={countsByCategoryId}
        totalCount={services.length}
      />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="hidden lg:col-span-4 lg:block xl:col-span-3">
          <CategorySidebar
            categories={categories}
            activeSlug={activeSlug}
            onSelect={setActiveSlug}
            countsByCategoryId={countsByCategoryId}
            totalCount={services.length}
          />
        </div>

        <div
          ref={scrollTargetRef}
          className="scroll-mt-36 lg:col-span-8 lg:scroll-mt-28 xl:col-span-9"
        >
          <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.32em] text-gold-500">
                {activeCategory ? "Category" : "Showing"}
              </p>
              <h2 className="mt-2 font-display text-4xl text-charcoal">
                {activeCategory ? activeCategory.name : "All services"}
              </h2>
              {activeCategory ? (
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                  {activeCategory.blurb}
                </p>
              ) : (
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                  Pick a category to narrow it down, or scroll the full menu.
                </p>
              )}
            </div>
            <span className="rounded-full bg-rose-50 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.24em] text-rose-700">
              {visibleServices.length} treatment
              {visibleServices.length === 1 ? "" : "s"}
            </span>
          </header>

          {visibleServices.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-line/80 px-8 py-16 text-center">
              <p className="font-display text-2xl text-charcoal">
                Nothing here yet
              </p>
              <p className="mt-2 text-sm text-muted">
                Check back soon — we&apos;re refining this category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {visibleServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  categoryName={categoryById[service.categoryId]?.name ?? ""}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
