"use client";

import { useCallback, useMemo, useState } from "react";
import { FolderOpen, RotateCcw } from "lucide-react";
import { ComicButton } from "@/components/ui/ComicButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolio, sectionMeta, type Project, type ProjectCategory } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { ProjectModal } from "@/components/sections/ProjectModal";

type Filter = "all" | ProjectCategory;

export function ProjectsSection() {
  const [filter, setFilter] = useState<Filter>("all");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const meta = sectionMeta.projects;

  const filteredProjects = useMemo(
    () =>
      filter === "all"
        ? portfolio.projects
        : portfolio.projects.filter((project) => project.category === filter),
    [filter],
  );

  const featuredProject = filter === "all" ? filteredProjects.find((project) => project.featured) : null;
  const remainingProjects = featuredProject
    ? filteredProjects.filter((project) => project.id !== featuredProject.id)
    : filteredProjects;

  const closeModal = useCallback(() => setActiveProject(null), []);
  const navigateModal = useCallback((project: Project) => setActiveProject(project), []);

  const countFor = (categoryId: Filter) =>
    categoryId === "all"
      ? portfolio.projects.length
      : portfolio.projects.filter((project) => project.category === categoryId).length;

  return (
    <section id="projects" aria-labelledby="projects-title" className="section-block">
      <div className="page-shell relative">
        <SectionHeading
          id="projects-title"
          issue={meta.issue}
          kicker={meta.kicker}
          title={meta.title}
          description={meta.description}
        />

        <div className="flex flex-col gap-6 border-b-[3px] border-ink pb-7 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-marker text-sm text-accent-deep">Pilih genre cerita</p>
            <div
              role="group"
              aria-label="Filter proyek berdasarkan kategori"
              className="mt-3 flex flex-wrap gap-2"
            >
              {portfolio.projectCategories.map((category) => {
                const isActive = filter === category.id;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setFilter(category.id)}
                    aria-pressed={isActive}
                    className={cn(
                      "inline-flex min-h-10 items-center gap-2 rounded-[var(--corner-panel)] border-[3px] border-ink px-3 py-2 text-[10px] font-bold uppercase tracking-[0.1em] transition-[background-color,color,transform,box-shadow] duration-200",
                      isActive
                        ? "translate-x-[1px] translate-y-[1px] bg-accent text-white shadow-[2px_2px_0_0_var(--ink)]"
                        : "bg-surface text-ink hover:bg-accent-soft hover:shadow-[3px_3px_0_0_var(--ink)]",
                    )}
                  >
                    {category.label}
                    <span
                      className={cn(
                        "grid min-w-5 place-items-center border px-1 py-0.5 text-[8px] leading-none",
                        isActive ? "border-white/40 bg-white/10" : "border-ink/20 bg-paper",
                      )}
                    >
                      {countFor(category.id)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <p className="shrink-0 text-[10px] font-bold uppercase tracking-[0.16em] text-ink-soft">
            Showing{" "}
            <span className="font-display text-2xl text-ink">{String(filteredProjects.length).padStart(2, "0")}</span>{" "}
            / {String(portfolio.projects.length).padStart(2, "0")} stories
          </p>
        </div>

        <p className="sr-only" aria-live="polite">
          {filteredProjects.length} proyek ditampilkan
          {filter === "all" ? " dalam semua kategori" : ` dalam kategori ${filter}`}.
        </p>

        <div key={filter} className="panels-enter mt-8">
          {filteredProjects.length === 0 ? (
            <div className="flex flex-col items-center justify-center border-[3px] border-ink bg-surface px-6 py-16 text-center shadow-comic">
              <FolderOpen aria-hidden="true" className="size-10 text-accent" />
              <h3 className="mt-4 font-display text-2xl uppercase">Panel belum tersedia</h3>
              <p className="mt-2 max-w-sm text-sm text-ink-soft">
                Tidak ada proyek di kategori ini. Kembali ke semua cerita atau tambahkan proyek baru
                lewat data portfolio.
              </p>
              <ComicButton
                size="sm"
                variant="secondary"
                onClick={() => setFilter("all")}
                className="mt-6"
              >
                <span className="inline-flex items-center gap-2">
                  <RotateCcw aria-hidden="true" className="size-3.5" />
                  Reset filter
                </span>
              </ComicButton>
            </div>
          ) : (
            <>
              {featuredProject ? (
                <ProjectCard
                  project={featuredProject}
                  index={portfolio.projects.findIndex((project) => project.id === featuredProject.id)}
                  featured
                  onOpen={navigateModal}
                />
              ) : null}

              {remainingProjects.length > 0 ? (
                <div className={cn("grid gap-6 md:grid-cols-2", featuredProject && "mt-6")}>
                  {remainingProjects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      index={portfolio.projects.findIndex((item) => item.id === project.id)}
                      onOpen={navigateModal}
                    />
                  ))}
                </div>
              ) : null}
            </>
          )}
        </div>

        <div className="mt-8 flex flex-col gap-2 border-l-[4px] border-accent pl-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] leading-relaxed text-ink-soft">
            * Kartu bertanda <strong>CONTOH</strong> adalah studi kasus placeholder, bukan klaim
            proyek yang sudah dirilis.
          </p>
          <span className="shrink-0 font-marker text-xs text-ink-soft">More panels coming soon…</span>
        </div>
      </div>

      <ProjectModal
        project={activeProject}
        onClose={closeModal}
        onNavigate={navigateModal}
      />
    </section>
  );
}
