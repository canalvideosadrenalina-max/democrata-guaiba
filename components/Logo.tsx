import Image from "next/image";
import { party } from "@/lib/content";

type LogoProps = {
  tone?: "light" | "dark";
  compact?: boolean;
};

export function Logo({ tone = "light", compact = false }: LogoProps) {
  const subtitle = tone === "light" ? "text-democrata-white/70" : "text-democrata-blue";

  return (
    <span className="inline-flex items-center gap-3">
      <Image
        src="/logo-democrata.png"
        alt="Democrata 35"
        width={40}
        height={88}
        className="shrink-0"
        priority
      />
      {compact ? null : (
        <span className="leading-none">
          <span className={`mt-1 block text-[10px] font-medium uppercase tracking-[0.22em] ${subtitle}`}>
            {party.city} · {party.state}
          </span>
        </span>
      )}
    </span>
  );
}
