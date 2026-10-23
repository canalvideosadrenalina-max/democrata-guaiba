import { ValueIconGlyph } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { values } from "@/lib/content";

export function NossosValores() {
  return (
    <section id="valores" className="scroll-mt-24 bg-mist py-24 sm:py-32">
      <div className="shell">
        <SectionHeading
          eyebrow="Carta do diretório"
          title="Seis compromissos, nenhum adjetivo solto."
          description="Representatividade, democracia, progressismo, direitos humanos, meio ambiente e igualdade. Cada palavra abaixo é um critério para decidir, não um enfeite de campanha."
        />

        <div className="mt-14 flex flex-wrap justify-center gap-4">
          {values.map((value, index) => (
            <Reveal
              key={value.title}
              delay={index * 0.06}
              className="w-full sm:w-[calc(50%-0.5rem)] xl:w-[calc(33.333%-0.7rem)]"
            >
              <article className="group relative flex h-full flex-col overflow-hidden border border-democrata-blue/10 bg-cream p-7 transition-colors duration-300 hover:border-democrata-blue/35">
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center border border-democrata-blue/20 text-democrata-blue transition-colors duration-300 group-hover:bg-democrata-blue group-hover:text-democrata-white">
                    <ValueIconGlyph name={value.icon} className="h-6 w-6" />
                  </span>
                  <span className="font-display text-5xl leading-none text-democrata-blue/15">{value.index}</span>
                </div>
                <h3 className="mt-8 font-display text-4xl text-ink">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{value.text}</p>
                <span className="mt-8 block h-px w-10 bg-democrata-green transition-all duration-300 group-hover:w-full" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
