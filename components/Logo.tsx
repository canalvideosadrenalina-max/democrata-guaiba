import { party } from "@/lib/content";

type LogoProps = {
  tone?: "light" | "dark";
  compact?: boolean;
};

export function Logo({ tone = "light", compact = false }: LogoProps) {
  const title = tone === "light" ? "text-democrata-white" : "text-ink";
  const subtitle = tone === "light" ? "text-democrata-white/70" : "text-democrata-blue";

  return (
    <span className="inline-flex items-center gap-3">
      <svg viewBox="0 0 48 48" className="h-11 w-11 shrink-0" aria-hidden="true">
        <circle cx="24" cy="24" r="23" fill="#003F9E" />
        <circle cx="24" cy="24" r="19" fill="none" stroke="#FFFFFF" strokeWidth="1" />
        <path d="M9 33.5c5.2 3.4 9.6 4.6 15 4.6s10.2-1.4 15-4.8" fill="none" stroke="#009640" strokeWidth="1.7" />
        <text
          x="24"
          y="27"
          textAnchor="middle"
          fill="#FFFFFF"
          fontFamily="Georgia, serif"
          fontSize="13"
          fontWeight="700"
        >
          {party.number}
        </text>
      </svg>
      {compact ? null : (
        <span className="leading-none">
          <span className={`block font-display text-[1.35rem] tracking-wide ${title}`}>{party.name}</span>
          <span className={`mt-1 block text-[10px] font-medium uppercase tracking-[0.22em] ${subtitle}`}>
            {party.city} · {party.state}
          </span>
        </span>
      )}
    </span>
  );
}
