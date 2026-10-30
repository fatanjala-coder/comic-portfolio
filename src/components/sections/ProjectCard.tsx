"use client";

import Image from "next/image";
import { ArrowUpRight, Eye } from "lucide-react";
import { ComicButton } from "@/components/ui/ComicButton";
import { portfolio, type Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  index: number;
  featured?: boolean;
  onOpen: (project: Project) => void;
};

function categoryLabel(category: Project["category"]) {
  return portfolio.projectCategories.find((item) => item.id === category)?.label ?? category;
}

export function ProjectCard({ project, index, featured = false, onOpen }: ProjectCardProps) {
  if (featured) {
    return (
      <article className="group relative grid overflow-hidden rounded-[var(--corner-panel)] border-[3px] border-ink bg-surface shadow-comic transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-comic-lg lg:grid-cols-[1.12fr_1fr]">
        <div className="relative min-h-[280px] overflow-hidden border-b-[3px] border-ink sm:min-h-[340px] lg:min-h-full lg:border-b-0 lg:border-r-[3px]">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            unoptimized
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <span aria-hidden="true" className="absolute inset-0 halftone opacity-0 transition-opacity duration-300 group-hover:opacity-15" />
          <span className="absolute left-4 top-4 border-2 border-ink bg-surface px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em]">
            {categoryLabel(project.category)}
          </span>
          <span
            aria-hidden="true"
            className="absolute right-4 top-4 border-2 border-ink bg-ink px-2.5 py-1 font-marker text-[11px] leading-none text-paper"
          >
            FILE #{String(index + 1).padStart(2, "0")}
          </span>
          {project.isPlaceholder ? (
            <span className="absolute bottom-4 left-4 border-2 border-ink bg-highlight px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em]">
              Contoh
            </span>
          ) : null}
          <span aria-hidden="true" className="sfx absolute bottom-4 right-4 border-[3px] border-ink bg-surface px-2 py-1 text-xl shadow-[3px_3px_0_0_var(--ink)]">
            READ!
          </span>
          <button
            type="button"
            onClick={() => onOpen(project)}
            aria-label={`Lihat detail proyek ${project.title} — ${categoryLabel(project.category)}${
              project.isPlaceholder ? ", contoh" : ""
            }`}
            className="absolute inset-0 z-10 cursor-pointer focus-visible:outline-offset-[-6px]"
          />
        </div>

        <div className="flex flex-col p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2 text-[9px] font-bold uppercase tracking-[0.16em] text-ink-soft">
            <span className="border-2 border-ink bg-accent px-2 py-1 text-white">Featured</span>
            <span>{project.year}</span>
            <span aria-hidden="true">/</span>
            <span>{project.role}</span>
          </div>

          <h3 className="mt-5 font-display text-[clamp(2rem,4vw,3.2rem)] uppercase leading-[0.94]">
            {project.title}
          </h3>
          <p className="mt-2 font-marker text-sm leading-snug text-accent-deep">{project.subtitle}</p>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">{project.description}</p>

          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Teknologi yang digunakan">
            {project.tech.map((tech) => (
              <li
                key={tech}
                className="border border-ink/25 bg-paper px-2 py-1 text-[9px] font-bold uppercase tracking-[0.1em] text-ink-soft"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap items-center gap-3 pt-7">
            <ComicButton
              size="sm"
              onClick={() => onOpen(project)}
              className="group/button"
            >
              <span className="inline-flex items-center gap-2">
                <Eye aria-hidden="true" className="size-3.5" />
                View details
              </span>
            </ComicButton>
            {project.links.demo ? (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex min-h-10 items-center gap-1.5 border-b-2 border-ink pb-1 text-[10px] font-bold uppercase tracking-[0.12em] hover:text-accent-deep"
              >
                Live demo
                <ArrowUpRight aria-hidden="true" className="size-3.5" />
              </a>
            ) : null}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[var(--corner-panel)] border-[3px] border-ink bg-surface shadow-comic transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-comic-lg">
      <div className="relative aspect-[16/10] overflow-hidden border-b-[3px] border-ink">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <span aria-hidden="true" className="absolute inset-0 halftone opacity-0 transition-opacity duration-300 group-hover:opacity-15" />
        <span className="absolute left-3 top-3 border-2 border-ink bg-surface px-2 py-1 text-[8px] font-bold uppercase tracking-[0.14em]">
          {categoryLabel(project.category)}
        </span>
        <span
          aria-hidden="true"
          className="absolute right-3 top-3 border-2 border-ink bg-ink px-2 py-1 font-marker text-[10px] leading-none text-paper"
        >
          #{String(index + 1).padStart(2, "0")}
        </span>
        {project.isPlaceholder ? (
          <span className="absolute bottom-3 left-3 border-2 border-ink bg-highlight px-2 py-1 text-[8px] font-bold uppercase tracking-[0.14em]">
            Contoh
          </span>
        ) : null}
        <span aria-hidden="true" className="sfx absolute bottom-3 right-3 border-[3px] border-ink bg-surface px-1.5 py-0.5 text-base shadow-[3px_3px_0_0_var(--ink)]">
          READ!
        </span>
        <button
          type="button"
          onClick={() => onOpen(project)}
          aria-label={`Lihat detail proyek ${project.title} — ${categoryLabel(project.category)}${
            project.isPlaceholder ? ", contoh" : ""
          }`}
          className="absolute inset-0 z-10 cursor-pointer focus-visible:outline-offset-[-6px]"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2 text-[9px] font-bold uppercase tracking-[0.14em] text-ink-soft">
          <span>{project.year}</span>
          <span aria-hidden="true" className="size-1 rotate-45 bg-accent" />
          <span>{project.role}</span>
        </div>
        <h3 className="mt-3 font-display text-2xl uppercase leading-none">{project.title}</h3>
        <p className="mt-2 text-[13px] font-semibold leading-snug text-accent-deep">{project.subtitle}</p>
        <p className="mt-3 line-clamp-3 text-[13px] leading-relaxed text-ink-soft">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Teknologi yang digunakan">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className={cn(
                "border border-ink/25 bg-paper px-2 py-0.5 text-[8px] font-bold uppercase tracking-[0.1em] text-ink-soft",
              )}
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-3 pt-5">
          <ComicButton size="sm" onClick={() => onOpen(project)} className="group/button">
            <span className="inline-flex items-center gap-2">
              <Eye aria-hidden="true" className="size-3.5" />
              View details
            </span>
          </ComicButton>
          {project.links.demo ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex min-h-10 items-center gap-1.5 border-b-2 border-ink pb-1 text-[9px] font-bold uppercase tracking-[0.12em] hover:text-accent-deep"
            >
              Demo
              <ArrowUpRight aria-hidden="true" className="size-3" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
