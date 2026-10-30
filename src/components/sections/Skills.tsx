import { Icon } from "@/components/ui/Icon";
import { Panel } from "@/components/ui/Panel";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolio, sectionMeta } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const groupTones = {
  blue: "accent",
  paper: "surface",
  highlight: "highlight",
} as const;

const groupSpans = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
];

export function Skills() {
  const meta = sectionMeta.skills;

  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="section-block border-y-[3px] border-ink bg-paper-deep"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 halftone opacity-[0.07]"
      />
      <div className="page-shell relative">
        <SectionHeading
          id="skills-title"
          issue={meta.issue}
          kicker={meta.kicker}
          title={meta.title}
          description={meta.description}
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-12">
          {portfolio.skills.map((group, index) => {
            const isAccent = group.accent === "blue";
            const isHighlight = group.accent === "highlight";

            return (
              <Reveal
                key={group.id}
                delay={index * 0.05}
                className={cn("md:col-span-1", groupSpans[index])}
              >
                <Panel
                  tone={groupTones[group.accent]}
                  lift
                  className={cn(
                    "group flex h-full flex-col overflow-hidden p-6 sm:p-7",
                    isHighlight && "text-ink",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "pointer-events-none absolute -right-10 -top-10 size-36 rounded-full halftone opacity-20",
                      isAccent ? "bg-white/10" : isHighlight ? "bg-ink/10" : "bg-accent/10",
                    )}
                  />

                  <div className="relative flex items-start justify-between gap-4">
                    <span
                      className={cn(
                        "grid size-12 place-items-center border-[3px] border-ink shadow-[3px_3px_0_0_var(--ink)]",
                        isAccent
                          ? "bg-white text-accent"
                          : isHighlight
                            ? "bg-ink text-highlight"
                            : "bg-accent-soft text-ink",
                      )}
                    >
                      <Icon name={group.icon} className="size-5" />
                    </span>

                    <span
                      className={cn(
                        "font-marker text-xl sfx sm:text-2xl",
                        isAccent ? "text-white" : "text-accent",
                      )}
                    >
                      {group.sfx}
                    </span>
                  </div>

                  <div className="relative mt-6">
                    <p
                      className={cn(
                        "text-[9px] font-bold uppercase tracking-[0.2em]",
                        isAccent ? "text-white/90" : isHighlight ? "opacity-75" : "text-ink-soft",
                      )}
                    >
                      Class / 0{index + 1}
                    </p>
                    <h3 className="mt-1 font-display text-2xl uppercase leading-none">
                      {group.title}
                    </h3>
                    <p
                      className={cn(
                        "mt-3 text-sm leading-relaxed",
                        isAccent ? "text-white/90" : isHighlight ? "text-ink/75" : "text-ink-soft",
                      )}
                    >
                      {group.description}
                    </p>
                  </div>

                  <ul
                    className={cn(
                      "relative mt-6 space-y-0 border-t-[2px]",
                      isAccent
                        ? "border-white/25"
                        : isHighlight
                          ? "border-ink/20"
                          : "border-ink/15",
                    )}
                  >
                    {group.items.map((item) => (
                      <li
                        key={item.name}
                        className={cn(
                          "flex items-start gap-3 border-b-[2px] py-2.5 last:border-b-0",
                          isAccent
                            ? "border-white/15"
                            : isHighlight
                              ? "border-ink/10"
                              : "border-ink/10",
                        )}
                      >
                        <Icon
                          name={item.icon}
                          className={cn(
                            "mt-0.5 size-3.5 shrink-0",
                            isAccent ? "text-white" : isHighlight ? "text-accent-deep" : "text-accent",
                          )}
                        />
                        <div className="min-w-0">
                          <p className="text-xs font-bold uppercase tracking-[0.04em]">{item.name}</p>
                          <p
                            className={cn(
                              "mt-0.5 text-[11px] leading-snug",
                              isAccent ? "text-white/90" : "text-ink-soft",
                            )}
                          >
                            {item.note}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </Panel>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-col gap-3 border-[3px] border-ink bg-surface px-4 py-3 shadow-[4px_4px_0_0_var(--ink)] sm:flex-row sm:items-center sm:justify-between sm:px-5">
            <p className="text-[11px] leading-relaxed text-ink-soft">
              Skill terus bertumbuh — daftar ini menunjukkan alat yang sedang dipakai, bukan klaim
              tingkat kemahiran.
            </p>
            <span className="shrink-0 border-2 border-ink bg-highlight px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.16em]">
              No fake levels
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
