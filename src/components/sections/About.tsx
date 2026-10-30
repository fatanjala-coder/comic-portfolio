import { Icon } from "@/components/ui/Icon";
import { CaptionBox } from "@/components/ui/CaptionBox";
import { Panel } from "@/components/ui/Panel";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpeechBubble } from "@/components/ui/SpeechBubble";
import { portfolio, sectionMeta } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function About() {
  const { about, profile } = portfolio;
  const meta = sectionMeta.about;

  return (
    <section id="about" aria-labelledby="about-title" className="section-block">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-16 hidden h-40 w-24 speed-lines opacity-20 md:block"
      />
      <div className="page-shell relative">
        <SectionHeading
          id="about-title"
          issue={meta.issue}
          kicker={meta.kicker}
          title={meta.title}
          description={meta.description}
        />

        <div className="grid gap-7 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-7">
            <Panel className="h-full p-6 sm:p-9">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <CaptionBox>{about.caption}</CaptionBox>
                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-ink-soft">
                  Scene 01 / Origin
                </span>
              </div>

              <p className="mt-7 max-w-[24ch] font-display text-[clamp(1.55rem,3vw,2.35rem)] uppercase leading-[1.03]">
                {about.lead}
              </p>

              <div className="mt-6 max-w-[62ch] space-y-4 text-sm leading-relaxed text-ink-soft sm:text-[15px]">
                {about.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 rotate-[0.5deg]">
                <SpeechBubble tone="highlight" tail="left">
                  <p className="font-marker text-base leading-snug text-ink sm:text-lg">
                    &ldquo;{about.quote}&rdquo;
                  </p>
                </SpeechBubble>
              </div>
            </Panel>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-5">
            <Panel tone="ink" className="relative h-full overflow-hidden p-6 sm:p-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-12 size-64 rounded-full bg-accent opacity-25 halftone"
              />
              <div className="relative">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-highlight">
                    Character Card
                  </span>
                  <Icon name="star" className="size-4 fill-highlight text-highlight" />
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <span className="grid size-20 shrink-0 place-items-center border-[3px] border-paper bg-accent font-display text-3xl text-white shadow-[4px_4px_0_0_var(--highlight)]">
                    {profile.logoText}
                  </span>
                  <div className="min-w-0">
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-paper/50">
                      The Protagonist
                    </p>
                    <h3 className="mt-1 font-display text-2xl uppercase leading-none">
                      {profile.name}
                    </h3>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.08em] text-paper/60">
                      {profile.roles[0]}
                    </p>
                  </div>
                </div>

                <dl className="mt-7 border-y border-paper/20">
                  {about.facts.map((fact) => (
                    <div
                      key={fact.label}
                      className="flex items-center justify-between gap-4 border-b border-paper/15 py-3 last:border-b-0"
                    >
                      <dt className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.16em] text-paper/50">
                        <Icon name={fact.icon} className="size-3.5 text-highlight" />
                        {fact.label}
                      </dt>
                      <dd className="text-right text-xs font-medium text-paper/90">{fact.value}</dd>
                    </div>
                  ))}
                </dl>

                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Bidang yang diminati">
                  {profile.roles.map((role) => (
                    <li
                      key={role}
                      className="border border-paper/30 bg-paper/5 px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-paper/80"
                    >
                      {role}
                    </li>
                  ))}
                </ul>

                <p className="mt-7 font-marker text-xs text-highlight">
                  {profile.availability} · {profile.location}
                </p>
              </div>
            </Panel>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {about.panels.map((panel, index) => (
            <Reveal key={panel.number} delay={index * 0.06}>
              <Panel
                lift
                tone={index === 1 ? "paper" : "surface"}
                className={cn(
                  "flex h-full flex-col p-6",
                  index === 0 && "md:-rotate-[0.45deg]",
                  index === 1 && "md:rotate-[0.35deg]",
                  index === 2 && "md:-rotate-[0.2deg]",
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="grid size-11 place-items-center border-[3px] border-ink bg-accent-soft text-ink">
                    <Icon name={panel.icon} className="size-5" />
                  </span>
                  <span className="font-display text-4xl leading-none text-ink/15">{panel.number}</span>
                </div>
                <h3 className="mt-6 font-display text-lg uppercase leading-tight">{panel.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{panel.body}</p>
                <div className="mt-auto flex items-center gap-2 pt-5">
                  <span aria-hidden="true" className="h-[2px] w-6 bg-accent" />
                  <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-ink-soft">
                    Panel {panel.number}
                  </span>
                </div>
              </Panel>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
