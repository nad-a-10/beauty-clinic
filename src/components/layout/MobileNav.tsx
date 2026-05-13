"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line/70 text-charcoal transition hover:bg-rose-50 md:hidden"
      >
        <Menu className="h-5 w-5" aria-hidden />
      </button>

      <div
        className={cn(
          "fixed inset-0 z-50 transition md:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-charcoal/30 backdrop-blur-sm transition-opacity",
            open ? "opacity-100" : "opacity-0",
          )}
        />
        <aside
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className={cn(
            "absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-ivory shadow-lift transition-transform duration-500 ease-out",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between border-b border-line/60 px-6 py-5">
            <span className="font-display text-2xl text-charcoal">
              {siteConfig.shortName}
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line/70 text-charcoal transition hover:bg-rose-50"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>
          </div>

          <nav className="flex flex-col gap-1 px-4 py-6">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-4 font-display text-2xl text-charcoal transition hover:bg-rose-50"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto px-6 pb-8">
            <Link
              href="/services"
              onClick={() => setOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-full bg-rose-500 px-6 py-3 text-sm font-medium uppercase tracking-[0.2em] text-white transition hover:bg-rose-600"
            >
              Book now
            </Link>
            <p className="mt-6 text-xs uppercase tracking-[0.28em] text-muted">
              {siteConfig.hours.weekdays}
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
