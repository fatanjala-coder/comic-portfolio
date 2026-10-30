import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type PanelTone = "surface" | "paper" | "ink" | "accent" | "highlight" | "deep";

type PanelProps = HTMLAttributes<HTMLDivElement> & {
  tone?: PanelTone;
  flat?: boolean;
  lift?: boolean;
};

const toneClasses: Record<PanelTone, string> = {
  surface: "bg-surface",
  paper: "bg-paper",
  ink: "bg-ink text-paper",
  accent: "bg-accent text-white",
  highlight: "bg-highlight",
  deep: "bg-paper-deep",
};

export function Panel({
  tone = "surface",
  flat = false,
  lift = false,
  className,
  children,
  ...props
}: PanelProps) {
  return (
    <div
      className={cn(
        flat ? "panel-flat" : "panel",
        toneClasses[tone],
        lift && "hover-lift",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
