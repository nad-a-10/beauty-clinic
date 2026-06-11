"use client";

import { cn } from "@/lib/utils";
import type { Category } from "@/types/catalog";

interface Props {
  categories: Category[];
  activeSlug: string | "all";
  onSelect: (slug: string | "all") => void;
  countsByCategoryId: Record<string, number>;
  totalCount: number;
}

export function CategorySidebar({
  categories,
  activeSlug,
  onSelect,
  countsByCategoryId,
  totalCount,
}: Props) {
  return (
    <aside
      aria-label="Service categories"
      className="hidden lg:flex lg:flex-col lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)]"
    >
      <div className="shrink-0">
        <p className="text-[11px] uppercase tracking-[0.32em] text-gold-500">
          Categories
        </p>
        <h2 className="mt-2 font-display text-3xl text-charcoal">
          What can we do for you?
        </h2>
      </div>

      <div
        className="mt-8 flex-1 overflow-y-auto pr-2 -mr-2 [scrollbar-color:var(--color-rose-300)_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-rose-200 hover:[&::-webkit-scrollbar-thumb]:bg-rose-300"
      >
        <ul role="list" className="flex flex-col gap-1 pb-4">
          <li>
            <button
              type="button"
              onClick={() => onSelect("all")}
              className={cn(
                "group flex w-full cursor-pointer items-center justify-between rounded-2xl px-4 py-3 text-left transition duration-200",
                activeSlug === "all"
                  ? "bg-rose-500 text-white shadow-soft"
                  : "hover:translate-x-1 hover:bg-rose-50 hover:shadow-soft",
              )}
            >
              <span
                className={cn(
                  "font-display text-lg transition-colors",
                  activeSlug !== "all" && "group-hover:text-rose-600",
                )}
              >
                All services
              </span>
              <span
                className={cn(
                  "rounded-full px-2.5 py-1 text-[11px] font-medium",
                  activeSlug === "all"
                    ? "bg-white/20 text-white"
                    : "bg-line/60 text-charcoal/70",
                )}
              >
                {totalCount}
              </span>
            </button>
          </li>

          {categories.map((cat) => {
            const isActive = activeSlug === cat.slug;
            const count = countsByCategoryId[cat.id] ?? 0;
            return (
              <li key={cat.id}>
                <button
                  type="button"
                  onClick={() => onSelect(cat.slug)}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "group flex w-full cursor-pointer items-start justify-between gap-4 rounded-2xl px-4 py-3 text-left transition duration-200",
                    isActive
                      ? "bg-rose-500 text-white shadow-soft"
                      : "hover:translate-x-1 hover:bg-rose-50 hover:shadow-soft",
                  )}
                >
                  <div className="flex flex-col">
                    <span
                      className={cn(
                        "font-display text-lg leading-tight transition-colors",
                        !isActive && "group-hover:text-rose-600",
                      )}
                    >
                      {cat.name}
                    </span>
                    <span
                      className={cn(
                        "mt-1 text-xs leading-snug",
                        isActive ? "text-rose-50/85" : "text-muted",
                      )}
                    >
                      {cat.blurb}
                    </span>
                  </div>
                  <span
                    className={cn(
                      "shrink-0 rounded-full px-2.5 py-1 text-[11px] font-medium",
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-line/60 text-charcoal/70",
                    )}
                  >
                    {count}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
