import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { achievements, party, timeline } from "@/lib/content";

export function OPartido() {
  return (
    <section id="partido" className="scroll-mt-24 relative overflow-hidden bg-democrata-blue py-24 text-democrata-white sm:py-32">
      <div className="engraved pointer-events-none absolute inset-0" />
      <div className="absolute inset-y-0 right-0 hidden w-px bg-democrata-green/70 lg:block" aria-hidden="true" />

      <div className="shell relative">
        <SectionHeading
          tone="light"
          eyebrow="A legenda"
          title="Do PMB ao Democrata. O número 35."
          description="Fundado em 2008 como Partido da Mulher Brasileira, o Democrata manteve o número 35 quando o TSE aprovou o novo nome, em dezembro de 2025. A presidência nacional é de Suêd Haidar."
        />

        <div className="mt-16 grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="relative">
            <div className="absolute bottom-2 left-[7px] top-2 w-px bg-democrata-green/70" aria-hidden="true" />
            <ol className="space-y-8">
              {timeline.map((item, index) => (
                <Reveal key={item.year} delay={index * 0.05}>
                  <li className="relative pl-10">
                    <span className="absolute left-0 top-1.5 h-[15px] w-[15px] border border-democrata-green bg-democrata-blue" />
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-democrata-white">{item.year}</p>
                    <h3 className="mt-2 font-display text-3xl leading-tight">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-democrata-white/75">{item.text}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          <Reveal delay={0.1}>
            <div className="border border-democrata-white/20 bg-democrata-white/10 p-7 sm:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-democrata-white">A legenda</p>
              <p className="mt-5 font-display text-4xl leading-[1.05] sm:text-5xl">
                Mesma origem. Novo nome. O número {party.number}.
              </p>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-democrata-white/80 sm:text-base">
                <p>
                  Suêd Haidar fundou o Partido da Mulher Brasileira em 2008 para ampliar a representação das mulheres
                  na política e na sociedade. Ela segue na presidência nacional do Democrata.
                </p>
                <p>
                  O registro definitivo no Tribunal Superior Eleitoral é de 29 de setembro de 2015. Nessa decisão a
                  legenda recebeu o número {party.number}, que o eleitor digita na urna.
                </p>
                <p>
                  Em dezembro de 2025, o TSE aprovou a mudança de nome. O Partido da Mulher Brasileira passou a se
                  chamar Democrata. A sigla mudou. O número {party.number} permaneceu. Em {party.city}, o diretório
                  municipal leva essa legenda ao bairro e à orla, sob a presidência de {party.president}.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {achievements.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="h-full border border-democrata-white/20 bg-democrata-white/10 p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-democrata-white">{item.place}</p>
                <h3 className="mt-4 font-display text-3xl leading-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-democrata-white/75">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
