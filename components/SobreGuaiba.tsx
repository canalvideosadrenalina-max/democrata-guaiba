import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { landmarks } from "@/lib/content";

export function SobreGuaiba() {
  return (
    <section id="guaiba" className="scroll-mt-24 bg-paper py-24 sm:py-32">
      <div className="shell">
        <SectionHeading
          eyebrow="A cidade"
          title="Guaíba, onde o lago encontra a história."
          description="Município da Região Metropolitana de Porto Alegre e da Costa Doce, Guaíba leva o nome das águas que a definem. O gentílico é guaibense."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          <Reveal delay={0.05}>
            <div className="space-y-5 text-base leading-relaxed text-ink/80 sm:text-[1.05rem]">
              <p>
                No território atual há sítios da cultura Guarani e, séculos mais tarde, sesmarias, tropas e
                charqueadas. O povoado de Pedras Brancas cresceu como parada obrigatória de quem vinha do sul e do
                oeste em direção à capital — a travessia se fazia pelo lago, de piroga e canoa ao barco a vapor.
              </p>
              <p>
                Em 14 de outubro de 1926, desmembrado de Porto Alegre, o antigo distrito tornou-se o município de
                Guaíba, em homenagem ao lago. O Censo de 2022 do IBGE contou 92.924 habitantes. A cidade segue
                metropolitana na vocação e guaibense na identidade.
              </p>
              <p>
                Em 2024, a cheia histórica do Guaíba testou a orla e os bairros. Um diretório enraizado não fala
                dessa paisagem apenas no dia de sol: infraestrutura, cuidado entre vizinhos e memória recente
                também são pauta municipal.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <aside className="border border-democrata-blue/15 bg-cream p-7 sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-democrata-blue">Em três linhas</p>
              <ul className="mt-6 space-y-5">
                <li className="border-b border-ink/10 pb-5">
                  <p className="font-display text-3xl text-democrata-blue">1926</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink/70">
                    Emancipação. O distrito de Pedras Brancas passa a se chamar Guaíba.
                  </p>
                </li>
                <li className="border-b border-ink/10 pb-5">
                  <p className="font-display text-3xl text-democrata-blue">1835</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink/70">
                    Da casa de Gomes Jardim sai a articulação farroupilha que atravessa o lago.
                  </p>
                </li>
                <li>
                  <p className="font-display text-3xl text-democrata-blue">92.924</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink/70">
                    Moradores recenseados em 2022. Estimar a cidade é conhecer os seus bairros.
                  </p>
                </li>
              </ul>
            </aside>
          </Reveal>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-4">
          {landmarks.map((place, index) => (
            <Reveal
              key={place.title}
              delay={index * 0.06}
              className="w-full md:w-[calc(50%-0.5rem)] xl:w-[calc(33.333%-0.7rem)]"
            >
              <article className="flex h-full flex-col border border-ink/10 bg-cream p-6 transition-colors duration-300 hover:border-democrata-blue/40">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-democrata-blue">{place.kicker}</p>
                  <span className="font-display text-2xl text-democrata-blue/30">0{index + 1}</span>
                </div>
                <h3 className="mt-6 font-display text-3xl leading-tight text-ink">{place.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink/70">{place.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-xs leading-relaxed text-ink/50">
          Marcos históricos conforme o registro do IBGE e a memória oficial do município. O quinto cartão trata da
          cheia de 2024 como fato recente da vida cívica, não como promessa de governo.
        </p>
      </div>
    </section>
  );
}
