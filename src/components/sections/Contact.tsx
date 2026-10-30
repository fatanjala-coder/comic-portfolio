import { ArrowUpRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { Panel } from "@/components/ui/Panel";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CopyEmail } from "@/components/sections/CopyEmail";
import { portfolio, sectionMeta, type Social } from "@/data/portfolio";
import { cn } from "@/lib/utils";

function SocialCard({ social }: { social: Social }) {
  const hasLink = social.url.trim().length > 0;

  const inner = (
    <>
      <span
        className={cn(
          "grid size-10 shrink-0 place-items-center border-2 border-ink",
          hasLink ? "bg-accent text-white" : "bg-paper-deep text-ink-soft",
        )}
      >
        <Icon name={social.icon} className="size-4" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[9px] font-bold uppercase tracking-[0.16em] text-ink-soft">
          {social.label}
        </span>
        <span className="mt-0.5 block truncate text-sm font-bold">{social.handle}</span>
      </span>
      {hasLink ? (
        <ArrowUpRight
          aria-hidden="true"
          className="size-4 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      ) : (
        <span className="shrink-0 border border-ink/20 bg-paper px-1.5 py-1 text-[7px] font-bold uppercase tracking-[0.1em] text-ink-soft">
          Belum ditautkan
        </span>
      )}
    </>
  );

  if (hasLink) {
    return (
      <a
        href={social.url}
        target="_blank"
        rel="noreferrer noopener"
        className="group flex items-center gap-3 border-[3px] border-ink bg-surface p-3.5 shadow-[4px_4px_0_0_var(--ink)] transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-comic-sm"
      >
        {inner}
      </a>
    );
  }

  return (
    <div className="flex items-center gap-3 border-[3px] border-ink/60 bg-paper-deep/50 p-3.5">
      {inner}
    </div>
  );
}

export function Contact() {
  const meta = sectionMeta.contact;

  return (
    <section id="contact" aria-labelledby="contact-title" className="section-block relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-10 font-display text-[16rem] leading-none text-ink/[0.045]"
      >
        05
      </div>
      <div className="page-shell relative">
        <SectionHeading
          id="contact-title"
          issue={meta.issue}
          kicker={meta.kicker}
          title={meta.title}
          description={meta.description}
        />

        <div className="grid gap-7 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-7">
            <Panel tone="ink" className="relative h-full overflow-hidden p-6 sm:p-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-16 -right-16 size-64 rounded-full bg-accent opacity-35 halftone"
              />
              <div className="relative">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="font-marker text-base text-highlight">Dear future collaborator,</span>
                  <span className="border border-paper/30 px-2 py-1 text-[8px] font-bold uppercase tracking-[0.16em] text-paper/60">
                    {portfolio.profile.availability}
                  </span>
                </div>

                <p className="mt-5 max-w-[22ch] font-display text-[clamp(1.8rem,4vw,2.8rem)] uppercase leading-[0.98]">
                  Mari buat panel berikutnya bersama.
                </p>
                <p className="mt-4 max-w-[52ch] text-sm leading-relaxed text-paper/70">
                  {portfolio.contact.pitch}
                </p>

                <div className="mt-7">
                  <CopyEmail
                    email={portfolio.contact.email}
                    isPlaceholder={portfolio.contact.emailIsPlaceholder}
                  />
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
                  <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-paper/55">
                    <span aria-hidden="true" className="size-1.5 rounded-full bg-highlight" />
                    {portfolio.contact.responseNote}
                  </p>
                  <span className="font-marker text-xs text-highlight">No pressure, just a chat.</span>
                </div>
              </div>
            </Panel>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-5">
            <div className="flex h-full flex-col gap-4">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-xl uppercase">Find me online</h3>
                <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-ink-soft">
                  03 channels
                </span>
              </div>

              <div className="grid gap-3">
                {portfolio.contact.socials.map((social) => (
                  <SocialCard key={social.label} social={social} />
                ))}
              </div>

              <div className="mt-auto border-[3px] border-ink bg-highlight p-5 shadow-[4px_4px_0_0_var(--ink)]">
                <p className="font-marker text-lg leading-tight">See you in the next issue!</p>
                <p className="mt-2 text-[11px] leading-relaxed text-ink/75">
                  Setiap proyek adalah halaman baru. Kalau kamu punya ide, kita mulai dari panel kosong
                  ini.
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <span aria-hidden="true" className="h-[3px] w-8 bg-ink" />
                  <span className="text-[8px] font-bold uppercase tracking-[0.18em]">
                    End of transmission
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
