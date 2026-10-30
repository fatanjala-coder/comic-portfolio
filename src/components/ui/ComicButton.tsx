import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ComicButtonProps = {
  children: ReactNode;
  href?: string;
  external?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "ink" | "ghost";
  size?: "md" | "sm";
  arrow?: boolean;
  disabled?: boolean;
  className?: string;
  "aria-label"?: string;
};

const variantClasses = {
  primary:
    "bg-accent text-white shadow-comic hover:bg-accent-deep hover:shadow-comic-lg hover:-translate-x-[2px] hover:-translate-y-[3px]",
  secondary:
    "bg-surface text-ink shadow-comic hover:bg-highlight hover:shadow-comic-lg hover:-translate-x-[2px] hover:-translate-y-[3px]",
  ink: "bg-ink text-paper shadow-[6px_6px_0_0_var(--accent)] hover:bg-accent hover:shadow-comic hover:-translate-x-[2px] hover:-translate-y-[3px]",
  ghost: "bg-transparent text-ink shadow-none hover:bg-accent-soft",
};

const sizeClasses = {
  md: "min-h-12 px-5 py-3 text-xs sm:text-sm",
  sm: "min-h-10 px-3.5 py-2 text-[11px]",
};

const baseClasses =
  "group/button inline-flex items-center justify-center gap-2 rounded-[var(--corner-panel)] border-[3px] border-ink font-bold uppercase leading-none tracking-[0.09em] transition-[transform,box-shadow,background-color,color] duration-200 active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_0_var(--ink)] disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none";

export function ComicButton({
  children,
  href,
  external = false,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  arrow = false,
  disabled = false,
  className,
  "aria-label": ariaLabel,
}: ComicButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);
  const content = (
    <>
      <span>{children}</span>
      {arrow ? (
        <ArrowUpRight
          aria-hidden="true"
          className="size-4 shrink-0 transition-transform duration-200 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
        />
      ) : null}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        aria-label={ariaLabel}
        className={classes}
        {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={classes}
    >
      {content}
    </button>
  );
}
