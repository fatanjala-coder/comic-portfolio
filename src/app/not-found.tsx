import type { Metadata } from "next";
import { ComicButton } from "@/components/ui/ComicButton";
import { Panel } from "@/components/ui/Panel";

export const metadata: Metadata = {
  title: "404 — Panel tidak ditemukan",
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 top-1/4 size-64 rounded-full halftone-accent opacity-20"
      />
      <div className="page-shell relative">
        <Panel className="relative mx-auto max-w-2xl overflow-hidden p-6 text-center sm:p-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 -top-8 size-32 rounded-full bg-highlight opacity-60"
          />
          <p className="font-marker text-sm text-accent-deep">Panel missing · Issue ???</p>
          <p className="mt-3 font-display text-[clamp(5rem,18vw,9rem)] uppercase leading-[0.75] text-accent">
            404
          </p>
          <h1 className="mt-6 font-display text-2xl uppercase sm:text-3xl">
            Halaman ini keluar dari panel.
          </h1>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
            Sepertinya kamu membuka halaman yang belum digambar, atau tautannya sudah berpindah.
            Kembali ke sampul untuk melanjutkan cerita.
          </p>
          <div className="mt-7 flex justify-center">
            <ComicButton href="/" arrow>
              Kembali ke sampul
            </ComicButton>
          </div>
        </Panel>
      </div>
    </section>
  );
}
