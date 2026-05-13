"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import type { Category } from "@/types/catalog";

interface Props {
  categories: Category[];
  activeSlug: string | "all";
  onSelect: (slug: string | "all") => void;
  countsByCategoryId: Record<string, number>;
  totalCount: number;
}

export function CategoryChips({
  categories,
  activeSlug,
  onSelect,
  countsByCategoryId,
  totalCount,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!activeRef.current || !containerRef.current) return;
    activeRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeSlug]);

  return (
    <nav
      aria-label="Service categories"
      className="lg:hidden sticky top-[68px] z-30 -mx-6 mb-8 border-y border-line/60 bg-ivory/90 px-6 py-3 backdrop-blur md:top-[76px]"
    >
      <div
        ref={containerRef}
        className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <Pill
          ref={activeSlug === "all" ? activeRef : null}
          active={activeSlug === "all"}
          label="All"
          count={totalCount}
          onClick={() => onSelect("all")}
        />
        {categories.map((cat) => {
          const isActive = activeSlug === cat.slug;
          return (
            <Pill
              key={cat.id}
              ref={isActive ? activeRef : null}
              active={isActive}
              label={cat.name}
              count={countsByCategoryId[cat.id] ?? 0}
              onClick={() => onSelect(cat.slug)}
            />
          );
        })}
      </div>
    </nav>
  );
}

interface PillProps {
  active: boolean;
  label: string;
  count: number;
  onClick: () => void;
}

const Pill = ({
  ref,
  active,
  label,
  count,
  onClick,
}: PillProps & { ref?: React.Ref<HTMLButtonElement> | null }) => (
  <button
    ref={ref ?? undefined}
    type="button"
    onClick={onClick}
    aria-current={active ? "true" : undefined}
    className={cn(
      "group inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition",
      active
        ? "border-rose-500 bg-rose-500 text-white shadow-soft"
        : "border-line/70 bg-ivory text-charcoal hover:border-rose-300 hover:bg-rose-50",
    )}
  >
    <span>{label}</span>
    <span
      className={cn(
        "rounded-full px-1.5 py-0.5 text-[10px] font-semibold",
        active ? "bg-white/20 text-white" : "bg-line/60 text-charcoal/70",
      )}
    >
      {count}
    </span>
  </button>
);
