import { Star } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export function Ticker() {
  return (
    <div
      aria-hidden="true"
      className="ticker relative overflow-hidden border-y-[3px] border-ink bg-ink py-3 text-paper"
    >
      <div className="ticker-track">
        {[0, 1].map((group) => (
          <div key={group} className="flex shrink-0 items-center">
            {portfolio.profile.marquee.map((item) => (
              <span
                key={`${group}-${item}`}
                className="flex items-center gap-5 px-5 text-[11px] font-bold uppercase tracking-[0.22em]"
              >
                {item}
                <Star aria-hidden="true" className="size-3 fill-highlight text-highlight" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
