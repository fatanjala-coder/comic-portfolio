"use client";

import Image from "next/image";
import { ArrowDown, BookOpen, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { CaptionBox } from "@/components/ui/CaptionBox";
import { ComicButton } from "@/components/ui/ComicButton";
import { Panel } from "@/components/ui/Panel";
import { SpeechBubble } from "@/components/ui/SpeechBubble";
import { Ticker } from "@/components/layout/Ticker";
import { portfolio, sectionOrder } from "@/data/portfolio";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();
  const { profile } = portfolio;

  const nameWords = profile.name.trim().split(/\s+/);
  const firstLine = nameWords.length > 1 ? nameWords.slice(0, -1).join(" ") : nameWords[0];
  const lastLine = nameWords.length > 1 ? nameWords[nameWords.length - 1] : null;

  const firstVisible = sectionOrder.find((id) => portfolio.sections[id]) ?? "contact";
  const projectsVisible = portfolio.sections.projects;

  const fadeUp = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.62, delay, ease: EASE },
        };

  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 top-24 size-80 rounded-full halftone-accent opacity-20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] speed-lines opacity-25 [mask-image:linear-gradient(to_left,black,transparent)] lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-8 top-10 hidden font-display text-[13rem] leading-none opacity-[0.055] xl:block"
      >
        001
      </div>

      <div className="page-shell relative grid gap-12 pb-12 pt-8 lg:grid-cols-12 lg:items-center lg:gap-8 lg:pb-16 lg:pt-12">
        <div className="lg:col-span-7">
          <motion.div {...fadeUp(0.02)} className="flex flex-wrap items-center gap-2">
            <CaptionBox tone="ink">Portfolio Edition</CaptionBox>
            <CaptionBox>Issue #001</CaptionBox>
            <CaptionBox>{profile.school}</CaptionBox>
            <span className="ml-auto hidden text-[10px] font-bold uppercase tracking-[0.18em] text-ink-soft md:inline">
              Est. 2026 · {profile.location}
            </span>
          </motion.div>

          <motion.p
            {...fadeUp(0.08)}
            className="mt-7 font-marker text-base text-accent-deep sm:text-lg"
          >
            {profile.heroKicker}
          </motion.p>

          <motion.h1
            id="hero-title"
            aria-label={profile.name}
            {...fadeUp(0.14)}
            className="mt-2 text-[clamp(3.5rem,8.8vw,7.2rem)] uppercase leading-[0.8] tracking-[-0.06em]"
          >
            <span className="block break-words">{firstLine}</span>
            {lastLine ? (
              <span className="mt-1 block break-words text-accent">
                <span className="marker-underline">{lastLine}</span>
              </span>
            ) : null}
          </motion.h1>

          <motion.ul
            {...fadeUp(0.2)}
            className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] font-bold uppercase tracking-[0.16em] text-ink-soft sm:text-[11px]"
            aria-label="Peran"
          >
            {profile.roles.map((role, index) => (
              <li key={role} className="flex items-center gap-3">
                {index > 0 ? (
                  <span aria-hidden="true" className="size-1.5 rotate-45 bg-accent" />
                ) : null}
                <span>{role}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div {...fadeUp(0.26)} className="mt-8 max-w-[31rem]">
            <SpeechBubble tone="surface" tail="bottom-left" className="-rotate-[0.7deg]">
              <p className="text-sm font-medium leading-relaxed text-ink sm:text-base">
                {profile.tagline}
              </p>
            </SpeechBubble>
          </motion.div>

          <motion.div {...fadeUp(0.32)} className="mt-9 flex flex-wrap items-center gap-3">
            <ComicButton href={`#${firstVisible}`}>
              <span className="inline-flex items-center gap-2">
                <BookOpen aria-hidden="true" className="size-4" />
                {profile.startLabel}
              </span>
            </ComicButton>
            {projectsVisible ? (
              <ComicButton href="#projects" variant="secondary" arrow>
                {profile.projectsLabel}
              </ComicButton>
            ) : null}
          </motion.div>

          <motion.div
            {...fadeUp(0.4)}
            className="mt-8 flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.2em] text-ink-soft"
          >
            <span aria-hidden="true" className="flex h-7 w-5 items-start justify-center rounded-full border-2 border-ink/50 p-1">
              <ArrowDown className="size-3 animate-bounce" aria-hidden="true" />
            </span>
            <span>Scroll to read · 5 panels inside</span>
          </motion.div>
        </div>

        <motion.div {...fadeUp(0.2)} className="relative mx-auto w-full max-w-[430px] lg:col-span-5">
          <div aria-hidden="true" className="tape left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2" />

          <Panel className="rotate-[1.2deg] p-2 pb-0">
            <div className="relative overflow-hidden border-[3px] border-ink bg-accent-soft">
              <Image
                src={profile.avatar}
                alt={profile.avatarAlt}
                width={640}
                height={820}
                priority
                unoptimized
                sizes="(max-width: 1024px) 90vw, 420px"
                className="h-auto w-full"
              />
              <div className="absolute left-3 top-3">
                <CaptionBox tone="accent">Page 01</CaptionBox>
              </div>
            </div>
            <div className="flex items-center justify-between gap-3 px-1 py-3">
              <p className="font-marker text-[11px] leading-none text-accent-deep sm:text-xs">
                {profile.avatarCaption}
              </p>
              <span className="shrink-0 text-[8px] font-bold uppercase tracking-[0.16em] text-ink-soft">
                {profile.coverNote}
              </span>
            </div>
          </Panel>

          <div className="absolute -right-3 -top-7 z-20 rotate-[7deg] border-[3px] border-ink bg-highlight px-3 py-2 text-center shadow-[4px_4px_0_0_var(--ink)]">
            <span className="block font-marker text-sm leading-none text-ink">
              {profile.availability}!
            </span>
            <Sparkles aria-hidden="true" className="mx-auto mt-1 size-3.5" />
          </div>

          <div className="absolute -bottom-4 -left-2 z-20 hidden -rotate-[5deg] border-[3px] border-ink bg-surface px-3 py-1.5 shadow-[4px_4px_0_0_var(--ink)] sm:block">
            <span className="font-marker text-[11px] text-ink">DEBUG MODE: ON</span>
          </div>
        </motion.div>
      </div>

      <Ticker />
    </section>
  );
}
