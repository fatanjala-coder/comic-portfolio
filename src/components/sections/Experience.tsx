import { Info } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { Panel } from "@/components/ui/Panel";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolio, sectionMeta } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Experience() {
  const meta = sectionMeta.experience;

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="section-block border-y-[3px] border-ink bg-surface"
    >
      <div className="page-shell relative">
        <SectionHeading
          id="experience-title"
          issue={meta.issue}
          kicker={meta.kicker}
          title={meta.title}
          description={meta.description}
        />

        <Reveal>
          <div className="mb-10 flex flex-col gap-3 border-[3px] border-ink bg-highlight/45 px-4 py-3 shadow-[4px_4px_0_0_var(--ink)] sm:flex-row sm:items-center sm:justify-between sm:px-5">
            <p className="flex gap-3 text-[12px] leading-relaxed text-ink/80">
              <Info aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
              <span>{portfolio.experience.intro}</span>
            </p>
            <span className="shrink-0 self-start border-2 border-ink bg-surface px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] sm:self-auto">
              Placeholder timeline
            </span>
          </div>
        </Reveal>

        <ol className="relative">
          <span
            aria-hidden="true"
            className="absolute bottom-4 left-[17px] top-4 w-[3px] bg-ink md:left-1/2 md:-translate-x-1/2"
          />

          {portfolio.experience.items.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <li key={item.title} className="relative pb-10 last:pb-0 md:pb-14">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-5 z-10 grid size-9 place-items-center rounded-full border-[3px] border-ink bg-accent font-display text-[11px] text-white shadow-[3px_3px_0_0_var(--ink)] md:left-1/2 md:-translate-x-1/2"
                >
                  0{index + 1}
                </span>

                <div className="pl-12 md:grid md:grid-cols-2 md:gap-16 md:pl-0">
                  <Reveal
                    delay={index * 0.06}
                    className={cn(isLeft ? "md:col-start-1" : "md:col-start-2")}
                  >
                    <Panel lift className="p-5 sm:p-6">
                      <div className="flex items-start justify-between gap-3">
                        <span className="grid size-10 place-items-center border-[2px] border-ink bg-accent-soft">
                          <Icon name={item.icon} className="size-4" />
                        </span>
                        <span className="border-2 border-ink bg-highlight px-2 py-1 text-[8px] font-bold uppercase tracking-[0.14em]">
                          {item.isPlaceholder ? "Contoh" : "Cerita"}
                        </span>
                      </div>

                      <p className="mt-4 font-marker text-xs text-accent-deep">{item.period}</p>
                      <h3 className="mt-1 font-display text-xl uppercase leading-tight">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.13em] text-ink-soft">
                        {item.org}
                      </p>
                      <p className="mt-3 text-[13px] leading-relaxed text-ink-soft">
                        {item.description}
                      </p>

                      <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tag pengalaman">
                        {item.tags.map((tag) => (
                          <li
                            key={tag}
                            className="border border-ink/25 bg-paper px-2 py-0.5 text-[8px] font-bold uppercase tracking-[0.1em] text-ink-soft"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </Panel>
                  </Reveal>
                </div>
              </li>
            );
          })}
        </ol>

        <Reveal>
          <div className="mt-10 flex flex-col items-center justify-center gap-2 border-t-[2px] border-dashed border-ink/30 pt-8 text-center">
            <span className="font-marker text-sm text-accent-deep">To be continued...</span>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink-soft">
              Cerita berikutnya sedang ditulis
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
