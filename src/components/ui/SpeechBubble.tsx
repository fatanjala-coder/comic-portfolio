import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SpeechBubbleProps = {
  children: ReactNode;
  tone?: "surface" | "paper" | "ink" | "accent" | "highlight";
  tail?: "bottom-left" | "bottom-right" | "left" | "right" | "none";
  className?: string;
};

const toneClasses = {
  surface: "bg-surface text-ink",
  paper: "bg-paper text-ink",
  ink: "bg-ink text-paper",
  accent: "bg-accent text-white",
  highlight: "bg-highlight text-ink",
};

const tailFillClasses = {
  surface: "fill-surface",
  paper: "fill-paper",
  ink: "fill-ink",
  accent: "fill-accent",
  highlight: "fill-highlight",
};

export function SpeechBubble({
  children,
  tone = "surface",
  tail = "bottom-left",
  className,
}: SpeechBubbleProps) {
  return (
    <div
      className={cn(
        "relative rounded-[var(--corner-bubble)] border-[3px] border-ink px-5 py-4 shadow-comic-sm",
        toneClasses[tone],
        className,
      )}
    >
      {children}

      {tail === "bottom-left" || tail === "bottom-right" ? (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 18"
          className={cn(
            "absolute -bottom-[16px] h-[18px] w-6 overflow-visible stroke-ink",
            tail === "bottom-left" ? "left-8" : "right-8 -scale-x-100",
            tailFillClasses[tone],
          )}
        >
          <path d="M1 1 L12 17 L23 1 Z" strokeWidth="3" strokeLinejoin="round" />
        </svg>
      ) : null}

      {tail === "left" || tail === "right" ? (
        <svg
          aria-hidden="true"
          viewBox="0 0 16 24"
          className={cn(
            "absolute top-7 h-6 w-4 overflow-visible stroke-ink",
            tail === "left" ? "-left-[15px] rotate-180" : "-right-[15px]",
            tailFillClasses[tone],
          )}
        >
          <path d="M1 1 L15 12 L1 23 Z" strokeWidth="3" strokeLinejoin="round" />
        </svg>
      ) : null}
    </div>
  );
}
