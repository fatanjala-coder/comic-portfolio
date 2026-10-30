"use client";

import { Check, Copy, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type CopyEmailProps = {
  email: string;
  isPlaceholder?: boolean;
};

type CopyStatus = "idle" | "copied" | "error";

export function CopyEmail({ email, isPlaceholder = false }: CopyEmailProps) {
  const [status, setStatus] = useState<CopyStatus>("idle");
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  const resetLater = () => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setStatus("idle"), 2400);
  };

  const legacyCopy = () => {
    const textarea = document.createElement("textarea");
    textarea.value = email;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();

    try {
      return document.execCommand("copy");
    } finally {
      document.body.removeChild(textarea);
    }
  };

  const copyEmail = async () => {
    let copied = false;

    // Cara utama: Clipboard API. Beberapa browser menolak tanpa izin,
    // jadi selalu ada fallback ke execCommand sebelum menampilkan error.
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
        copied = true;
      }
    } catch {
      copied = false;
    }

    if (!copied) {
      try {
        copied = legacyCopy();
      } catch {
        copied = false;
      }
    }

    setStatus(copied ? "copied" : "error");
    resetLater();
  };

  return (
    <div className="border-[3px] border-ink bg-surface p-4 text-ink shadow-[4px_4px_0_0_var(--highlight)] sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-ink-soft">
          <Mail aria-hidden="true" className="size-3.5 text-accent" />
          Email
        </span>
        {isPlaceholder ? (
          <span className="border border-ink bg-highlight px-2 py-0.5 text-[8px] font-bold uppercase tracking-[0.14em]">
            Placeholder
          </span>
        ) : null}
      </div>

      <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <a
          href={`mailto:${email}`}
          className="break-all text-base font-bold tracking-[-0.01em] underline decoration-ink/25 decoration-2 underline-offset-4 transition-colors hover:text-accent-deep sm:text-lg"
        >
          {email}
        </a>

        <button
          type="button"
          onClick={copyEmail}
          className={cn(
            "inline-flex min-h-11 shrink-0 items-center justify-center gap-2 border-[3px] border-ink px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.1em] transition-[background-color,transform,box-shadow] duration-200 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
            status === "copied"
              ? "bg-highlight text-ink shadow-none"
              : "bg-accent text-white shadow-[3px_3px_0_0_var(--ink)] hover:bg-accent-deep",
          )}
        >
          {status === "copied" ? (
            <Check aria-hidden="true" className="size-3.5" strokeWidth={3} />
          ) : (
            <Copy aria-hidden="true" className="size-3.5" />
          )}
          {status === "copied" ? "Tersalin!" : status === "error" ? "Coba lagi" : "Salin email"}
        </button>
      </div>

      <p role="status" aria-live="polite" className="sr-only">
        {status === "copied"
          ? "Email berhasil disalin."
          : status === "error"
            ? "Email gagal disalin. Silakan salin secara manual."
            : ""}
      </p>

      {status === "error" ? (
        <p className="mt-2 text-[10px] text-red-700">Clipboard tidak tersedia. Salin email secara manual.</p>
      ) : null}
    </div>
  );
}
