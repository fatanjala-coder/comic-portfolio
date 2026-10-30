"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ComicButton } from "@/components/ui/ComicButton";
import { portfolio, sectionMeta, sectionOrder, type SectionId } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const visibleSections = sectionOrder.filter((id) => portfolio.sections[id]);

export function SiteHeader() {
  const [active, setActive] = useState<SectionId | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (entry.target.id === "top") {
            setActive(null);
            return;
          }
          setActive(entry.target.id as SectionId);
        });
      },
      { rootMargin: "-38% 0px -54% 0px", threshold: 0 },
    );

    const targets = [document.getElementById("top"), ...visibleSections.map((id) => document.getElementById(id))];
    targets.forEach((target) => target && observer.observe(target));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const previousPadding = document.body.style.paddingRight;
    const trigger = triggerRef.current;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;

    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 40);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        return;
      }

      if (event.key !== "Tab" || !menuRef.current) return;

      const focusable = menuRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPadding;

      // Kembalikan fokus ke tombol menu, kecuali tombolnya sedang
      // tersembunyi (misalnya karena layar melebar ke desktop).
      if (trigger && trigger.offsetParent !== null) {
        trigger.focus({ preventScroll: true });
      }
    };
  }, [menuOpen]);

  const ctaHref = portfolio.sections.contact
    ? "#contact"
    : visibleSections[0]
      ? `#${visibleSections[0]}`
      : "#top";

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b-[3px] border-ink bg-paper">
        <div className="page-shell flex h-[var(--header-height)] items-center justify-between gap-4">
          <a href="#top" className="group flex min-w-0 items-center gap-3">
            <span className="grid size-10 shrink-0 place-items-center border-[3px] border-ink bg-ink font-display text-sm text-paper shadow-[3px_3px_0_0_var(--accent)] transition-transform duration-200 group-hover:-rotate-3">
              {portfolio.profile.logoText}
            </span>
            <span className="min-w-0">
              <span className="block text-[9px] font-bold uppercase tracking-[0.22em] text-ink-soft">
                Portfolio Comic
              </span>
              <span className="block truncate font-display text-sm uppercase leading-tight tracking-[-0.02em]">
                {portfolio.profile.name}
              </span>
            </span>
            <span className="sr-only">— kembali ke sampul</span>
          </a>

          <nav aria-label="Navigasi utama" className="hidden items-center gap-0.5 lg:flex">
            {visibleSections.map((id, index) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={active === id ? "location" : undefined}
                className={cn(
                  "relative px-3 py-2 text-[11px] font-bold uppercase tracking-[0.12em] transition-colors duration-200 hover:text-accent-deep",
                  active === id ? "text-accent-deep" : "text-ink",
                )}
              >
                <span className="mr-1.5 font-marker text-[10px] font-normal tracking-normal text-ink-soft">
                  0{index + 1}
                </span>
                {sectionMeta[id].nav}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-x-3 -bottom-0.5 h-[3px] origin-left bg-accent transition-transform duration-200",
                    active === id ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <ComicButton href={ctaHref} size="sm" variant="primary" className="hidden sm:inline-flex" arrow>
              Let&apos;s talk
            </ComicButton>
            <button
              ref={triggerRef}
              type="button"
              aria-label="Buka menu navigasi"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(true)}
              className="grid size-11 place-items-center rounded-[var(--corner-panel)] border-[3px] border-ink bg-surface shadow-[3px_3px_0_0_var(--ink)] transition-transform active:translate-x-[2px] active:translate-y-[2px] active:shadow-none lg:hidden"
            >
              <Menu aria-hidden="true" className="size-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menu navigasi"
            className="fixed inset-0 z-50 flex flex-col bg-paper lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="pointer-events-none absolute -right-16 top-24 size-56 rounded-full bg-accent-soft halftone opacity-50" />
            <div className="page-shell relative flex h-[var(--header-height)] shrink-0 items-center justify-between border-b-[3px] border-ink">
              <span className="flex items-center gap-3">
                <span className="grid size-10 place-items-center border-[3px] border-ink bg-ink font-display text-sm text-paper">
                  {portfolio.profile.logoText}
                </span>
                <span className="font-display text-sm uppercase">Menu</span>
              </span>
              <button
                ref={closeRef}
                type="button"
                onClick={closeMenu}
                aria-label="Tutup menu navigasi"
                className="grid size-11 place-items-center rounded-[var(--corner-panel)] border-[3px] border-ink bg-accent text-white shadow-[3px_3px_0_0_var(--ink)] transition-transform active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              >
                <X aria-hidden="true" className="size-5" />
              </button>
            </div>

            <nav aria-label="Navigasi mobile" className="comic-scrollbar relative flex-1 overflow-y-auto">
              <div className="page-shell py-8">
                <ol className="divide-y-[2px] divide-ink/15">
                  {visibleSections.map((id, index) => (
                    <li key={id}>
                      <a
                        href={`#${id}`}
                        onClick={closeMenu}
                        className="group flex items-center justify-between gap-4 py-4"
                      >
                        <span className="flex items-baseline gap-4">
                          <span className="font-marker text-sm text-accent-deep">0{index + 1}</span>
                          <span className="font-display text-[clamp(1.7rem,7vw,2.6rem)] uppercase leading-none transition-transform duration-200 group-hover:translate-x-1">
                            {sectionMeta[id].nav}
                          </span>
                        </span>
                        <ArrowUpRight
                          aria-hidden="true"
                          className="size-5 shrink-0 text-accent-deep transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
                        />
                      </a>
                    </li>
                  ))}
                </ol>

                <div className="mt-10 border-[3px] border-ink bg-surface p-5 shadow-comic-sm">
                  <p className="font-marker text-sm text-accent-deep">{portfolio.profile.availability}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{portfolio.profile.tagline}</p>
                  <a
                    href={`mailto:${portfolio.contact.email}`}
                    className="mt-4 inline-flex items-center gap-2 border-b-2 border-ink pb-1 text-xs font-bold uppercase tracking-[0.12em]"
                  >
                    <span>{portfolio.contact.email}</span>
                    <ArrowUpRight aria-hidden="true" className="size-3.5" />
                  </a>
                </div>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
