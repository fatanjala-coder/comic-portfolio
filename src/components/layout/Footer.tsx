import { ArrowUp, Mail } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t-[3px] border-ink bg-ink text-paper">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-24 size-80 rounded-full bg-accent opacity-20 halftone"
      />
      <div className="page-shell relative py-12 md:py-16">
        <div className="flex flex-col gap-8 border-b-[2px] border-paper/25 pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-marker text-base text-highlight">To be continued...</p>
            <p className="mt-2 font-display text-[clamp(3rem,8vw,6.3rem)] uppercase leading-[0.82]">
              The End<span className="text-accent">?</span>
            </p>
          </div>
          <div className="max-w-sm md:text-right">
            <p className="text-sm leading-relaxed text-paper/70">{portfolio.contact.copyrightNote}</p>
            <a
              href="#top"
              className="mt-4 inline-flex items-center gap-2 border-b-2 border-highlight pb-1 text-[11px] font-bold uppercase tracking-[0.16em] text-highlight transition-colors hover:text-paper"
            >
              <ArrowUp aria-hidden="true" className="size-3.5" />
              Kembali ke sampul
            </a>
          </div>
        </div>

        <div className="grid gap-8 py-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-paper/70">Karakter</p>
            <p className="mt-2 font-display text-lg uppercase">{portfolio.profile.name}</p>
            <p className="mt-1 text-xs text-paper/60">{portfolio.profile.roles.join(" · ")}</p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-paper/70">Lokasi</p>
            <p className="mt-2 text-sm">{portfolio.profile.location}</p>
            <p className="mt-1 text-xs text-paper/60">{portfolio.profile.school}</p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-paper/70">Kontak</p>
            <a
              href={`mailto:${portfolio.contact.email}`}
              className="mt-2 inline-flex items-center gap-2 text-sm underline decoration-paper/30 underline-offset-4 transition-colors hover:text-highlight"
            >
              <Mail aria-hidden="true" className="size-3.5" />
              {portfolio.contact.email}
            </a>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-paper/70">Kredit</p>
            <p className="mt-2 text-xs leading-relaxed text-paper/60">
              Dibuat dengan Next.js, TypeScript, Tailwind CSS &amp; Motion.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t-[2px] border-paper/25 pt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-paper/65 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {portfolio.profile.name} · Issue #001
          </p>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>Portfolio Edition</span>
            <span aria-hidden="true">/</span>
            <span>Made with too much curiosity</span>
            {portfolio.sections.contact ? (
              <>
                <span aria-hidden="true">/</span>
                <a href="#contact" className="transition-colors hover:text-highlight">
                  Kirim pesan
                </a>
              </>
            ) : null}
          </p>
        </div>
      </div>
    </footer>
  );
}
