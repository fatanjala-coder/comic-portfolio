"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, Check, Info, X } from "lucide-react";
import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";
import { ComicButton } from "@/components/ui/ComicButton";
import { portfolio, type Project } from "@/data/portfolio";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
  onNavigate: (project: Project) => void;
};

function categoryLabel(category: Project["category"]) {
  return portfolio.projectCategories.find((item) => item.id === category)?.label ?? category;
}

export function ProjectModal({ project, onClose, onNavigate }: ProjectModalProps) {
  const reduceMotion = useReducedMotion();
  const dialogRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const onCloseRef = useRef(onClose);
  const isOpen = project !== null;

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    const previousPadding = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;

    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 60);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onCloseRef.current();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => element.offsetParent !== null);

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

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPadding;
      previouslyFocused.current?.focus({ preventScroll: true });
    };
  }, [isOpen]);

  useEffect(() => {
    if (!project) return;
    scrollRef.current?.scrollTo({ top: 0 });
  }, [project]);

  // Portal hanya tersedia di browser; modal selalu tertutup saat SSR.
  if (typeof document === "undefined") return null;

  const currentIndex = project ? portfolio.projects.findIndex((item) => item.id === project.id) : -1;
  const previousProject =
    currentIndex >= 0
      ? portfolio.projects[(currentIndex - 1 + portfolio.projects.length) % portfolio.projects.length]
      : null;
  const nextProject =
    currentIndex >= 0
      ? portfolio.projects[(currentIndex + 1) % portfolio.projects.length]
      : null;

  return createPortal(
    <AnimatePresence>
      {project ? (
        <motion.div
          key="project-modal"
          className="fixed inset-0 z-[70]"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            aria-hidden="true"
            onClick={onClose}
            className="fixed inset-0 bg-ink/80"
          />

          <div
            ref={scrollRef}
            className="comic-scrollbar relative flex min-h-full items-start justify-center overflow-y-auto p-3 py-6 sm:p-6 sm:py-10"
          >
            <motion.div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              className="relative w-full max-w-4xl overflow-hidden rounded-[var(--corner-panel)] border-[3px] border-ink bg-surface shadow-[8px_8px_0_0_var(--accent)] sm:shadow-[12px_12px_0_0_var(--accent)]"
              initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: 18, scale: 0.985 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Tutup detail proyek"
                className="absolute right-3 top-3 z-20 grid size-11 place-items-center rounded-[var(--corner-panel)] border-[3px] border-ink bg-surface text-ink shadow-[3px_3px_0_0_var(--ink)] transition-transform hover:bg-highlight active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              >
                <X aria-hidden="true" className="size-5" />
              </button>

              <div className="relative aspect-[16/10] overflow-hidden border-b-[3px] border-ink bg-paper-deep sm:aspect-[16/7]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="size-full object-cover"
                />
                <span aria-hidden="true" className="absolute inset-0 halftone opacity-10" />
                <div className="absolute bottom-3 left-3 flex flex-wrap gap-2 sm:bottom-4 sm:left-4">
                  <span className="border-2 border-ink bg-accent px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-white">
                    {categoryLabel(project.category)}
                  </span>
                  <span className="border-2 border-ink bg-surface px-2.5 py-1 font-marker text-[11px] leading-none">
                    FILE #{String(currentIndex + 1).padStart(2, "0")}
                  </span>
                  {project.isPlaceholder ? (
                    <span className="border-2 border-ink bg-highlight px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em]">
                      Proyek contoh
                    </span>
                  ) : null}
                </div>
              </div>

              <div className="p-5 sm:p-8">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[9px] font-bold uppercase tracking-[0.15em] text-ink-soft">
                  <span>{project.year}</span>
                  <span aria-hidden="true" className="size-1 rotate-45 bg-accent" />
                  <span>{project.role}</span>
                  <span aria-hidden="true">/</span>
                  <span>{project.tech[0] ?? "Proyek"}</span>
                </div>

                <h2
                  id="project-modal-title"
                  className="mt-3 font-display text-[clamp(2.2rem,6vw,4rem)] uppercase leading-[0.9]"
                >
                  {project.title}
                </h2>
                <p className="mt-2 font-marker text-base text-accent-deep">{project.subtitle}</p>

                {project.isPlaceholder ? (
                  <div className="mt-5 flex gap-3 border-[2px] border-ink bg-highlight/50 p-3">
                    <Info aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
                    <p className="text-[11px] leading-relaxed text-ink/80">
                      <strong className="font-bold uppercase tracking-[0.08em]">Slot contoh.</strong>{" "}
                      Studi kasus ini disiapkan sebagai format portofolio. Detail, gambar, dan tautan
                      dapat diganti dengan proyekmu sendiri.
                    </p>
                  </div>
                ) : null}

                <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink-soft">
                  {project.story.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-7 grid gap-6 sm:grid-cols-[1fr_auto]">
                  <div>
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink">
                      Yang dikerjakan
                    </h3>
                    <ul className="mt-3 space-y-2.5">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-2.5 text-[13px] leading-snug text-ink-soft">
                          <span className="mt-0.5 grid size-4 shrink-0 place-items-center border-2 border-ink bg-accent-soft">
                            <Check aria-hidden="true" className="size-2.5" strokeWidth={3} />
                          </span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="sm:min-w-[170px]">
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink">
                      Teknologi
                    </h3>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <li
                          key={tech}
                          className="border border-ink/25 bg-paper px-2 py-1 text-[9px] font-bold uppercase tracking-[0.08em] text-ink-soft"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-7 border-t-[2px] border-ink/20 pt-5">
                  {project.links.repo || project.links.demo ? (
                    <div className="flex flex-wrap gap-3">
                      {project.links.demo ? (
                        <ComicButton href={project.links.demo} external size="sm" arrow>
                          Live demo
                        </ComicButton>
                      ) : null}
                      {project.links.repo ? (
                        <ComicButton
                          href={project.links.repo}
                          external
                          size="sm"
                          variant="secondary"
                          arrow
                        >
                          Repository
                        </ComicButton>
                      ) : null}
                    </div>
                  ) : (
                    <p className="text-[11px] text-ink-soft">
                      Tautan repository &amp; demo belum tersedia untuk studi kasus contoh ini.
                    </p>
                  )}
                </div>

                <div className="mt-7 flex flex-col gap-4 border-t-[3px] border-ink pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="button"
                    onClick={() => previousProject && onNavigate(previousProject)}
                    className="group flex max-w-full items-center gap-3 text-left"
                    aria-label={`Proyek sebelumnya: ${previousProject?.title ?? ""}`}
                  >
                    <span className="grid size-9 shrink-0 place-items-center border-2 border-ink bg-surface transition-colors group-hover:bg-accent-soft">
                      <ArrowLeft aria-hidden="true" className="size-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[8px] font-bold uppercase tracking-[0.16em] text-ink-soft">
                        Sebelumnya
                      </span>
                      <span className="block truncate text-xs font-bold">{previousProject?.title}</span>
                    </span>
                  </button>

                  <span className="hidden text-[9px] font-bold uppercase tracking-[0.16em] text-ink-soft sm:block">
                    File {String(currentIndex + 1).padStart(2, "0")} /{" "}
                    {String(portfolio.projects.length).padStart(2, "0")}
                  </span>

                  <button
                    type="button"
                    onClick={() => nextProject && onNavigate(nextProject)}
                    className="group flex max-w-full items-center gap-3 text-left sm:justify-end sm:text-right"
                    aria-label={`Proyek berikutnya: ${nextProject?.title ?? ""}`}
                  >
                    <span className="min-w-0 sm:order-2">
                      <span className="block text-[8px] font-bold uppercase tracking-[0.16em] text-ink-soft">
                        Berikutnya
                      </span>
                      <span className="block truncate text-xs font-bold">{nextProject?.title}</span>
                    </span>
                    <span className="order-1 grid size-9 shrink-0 place-items-center border-2 border-ink bg-surface transition-colors group-hover:bg-accent-soft sm:order-3">
                      <ArrowRight aria-hidden="true" className="size-4" />
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
