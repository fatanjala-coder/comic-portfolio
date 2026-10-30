import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  id: string;
  issue: string;
  kicker: string;
  title: string;
  description: string;
  className?: string;
};

export function SectionHeading({
  id,
  issue,
  kicker,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <header className={cn("mb-12 md:mb-16", className)}>
      <div className="flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center border-[3px] border-ink bg-ink px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-paper shadow-[4px_4px_0_0_var(--accent)]">
          Issue {issue}
        </span>
        <span className="font-marker text-base text-accent-deep sm:text-lg">{kicker}</span>
        <span aria-hidden="true" className="hidden h-[3px] flex-1 bg-ink/15 sm:block" />
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(260px,360px)] md:items-end md:gap-10">
        <h2
          id={id}
          className="max-w-[18ch] text-[clamp(2.15rem,5.2vw,4.1rem)] uppercase leading-[0.93]"
        >
          {title}
        </h2>
        <p className="max-w-xl text-sm leading-relaxed text-ink-soft md:border-l-[3px] md:border-ink md:pl-5 md:text-base">
          {description}
        </p>
      </div>
    </header>
  );
}
