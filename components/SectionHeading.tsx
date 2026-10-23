import { Reveal } from "@/components/Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
};

export function SectionHeading({ eyebrow, title, description, tone = "dark" }: SectionHeadingProps) {
  const light = tone === "light";

  return (
    <Reveal className="max-w-3xl">
      <p
        className={`text-[11px] font-semibold uppercase tracking-[0.28em] ${
          light ? "text-democrata-white" : "text-democrata-blue"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 font-display text-[2.6rem] leading-[0.98] tracking-tight sm:text-5xl lg:text-[3.5rem] ${
          light ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-6 text-base leading-relaxed sm:text-lg ${light ? "text-paper/75" : "text-ink/75"}`}>
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
