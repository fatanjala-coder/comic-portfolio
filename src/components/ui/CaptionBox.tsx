import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CaptionBoxProps = {
  children: ReactNode;
  className?: string;
  tone?: "paper" | "ink" | "accent" | "surface";
};

const toneClasses = {
  paper: "bg-paper-deep text-ink",
  ink: "bg-ink text-paper",
  accent: "bg-accent text-white",
  surface: "bg-surface text-ink",
};

export function CaptionBox({ children, className, tone = "paper" }: CaptionBoxProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 border-2 border-ink px-2.5 py-1.5 text-[10px] font-bold uppercase leading-none tracking-[0.16em]",
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
