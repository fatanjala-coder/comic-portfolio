"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={cn(
        "fixed bottom-5 right-4 z-30 grid size-12 place-items-center rounded-[var(--corner-panel)] border-[3px] border-ink bg-accent text-white shadow-[4px_4px_0_0_var(--ink)] transition-all duration-200 hover:-translate-y-1 hover:bg-accent-deep active:translate-x-[2px] active:translate-y-[2px] active:shadow-none sm:bottom-7 sm:right-6",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
      )}
    >
      <span className="sr-only">Kembali ke atas</span>
      <span className="flex flex-col items-center gap-0.5">
        <ArrowUp aria-hidden="true" className="size-4" strokeWidth={3} />
        <span className="text-[8px] font-bold uppercase tracking-[0.12em]">Top</span>
      </span>
    </button>
  );
}
