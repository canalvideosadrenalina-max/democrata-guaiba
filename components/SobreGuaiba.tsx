import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const fotos = [
  {
    src: "/guaiba-fotos/eu-amo-guaiba.jpg",
    kicker: "Orla",
    titulo: "Eu amo Guaíba",
    legenda: "O monumento na beira do lago, com a Lagoa dos Patos ao fundo.",
    span: "lg:col-span-2",
  },
  {
    src: "/guaiba-fotos/vista-panoramica.jpg",
    kicker: "Cidade",
    titulo: "Vista panorâmica",
    legenda: "O centro histórico visto de cima, com o lago dominando o horizonte.",
    span: "",
  },
  {
    src: "/guaiba-fotos/praia-lago.jpg",
    kicker: "Natureza",
    titulo: "Beira do lago",
    legenda: "A orla de Guaíba, com a Arauco ao fundo — natureza e indústria lado a lado.",
    span: "",
  },
  {
    src: "/guaiba-fotos/orla-restaurante.jpg",
    kicker: "Lazer",
    titulo: "Restaurante na orla",
    legenda: "Gastronomia com vista para o lago, símbolo da vida cotidiana guaibense.",
    span: "",
  },
  {
    src: "/guaiba-fotos/igreja-matriz.jpg",
    kicker: "Patrimônio",
    titulo: "Igreja Matriz",
    legenda: "O neo-gótico da Matriz define o skyline do centro histórico.",
    span: "",
  },
  {
    src: "/guaiba-fotos/cipreste-farroupilha.jpg",
    kicker: "História",
    titulo: "Cipreste Farroupilha",
    legenda: "Árvore secular que testemunhou a articulação da Revolução Farroupilha.",
    span: "",
  },
  {
    src: "/guaiba-fotos/vitrine-cultural.jpg",
    kicker: "Cultura",
    titulo: "Berço da Revolução Farroupilha",
    legenda: "A Vitrine Cultural preserva a memória de um dos marcos do gauchismo.",
    span: "",
  },
  {
    src: "/guaiba-fotos/sitio-historico.jpg",
    kicker: "Memória",
    titulo: "Sítio Histórico",
    legenda: "Interior do museu: pedras coloniais, documentos e a linha do tempo da cidade.",
    span: "",
  },
  {
    src: "/guaiba-fotos/arauco-aerea.jpg",
    kicker: "Economia",
    titulo: "Complexo Arauco",
    legenda: "Vista aérea da maior geradora de empregos do município, na margem do lago.",
    span: "lg:col-span-2",
  },
  {
    src: "/guaiba-fotos/bonde-externo.jpg",
    kicker: "Turismo",
    titulo: "Terra é Guaíba",
    legenda: "O bonde turístico percorre os pontos históricos e culturais da cidade.",
    span: "",
  },
  {
    src: "/guaiba-fotos/prefeitura.jpg",
    kicker: "Gestão",
    titulo: "Prefeitura Municipal",
    legenda: "A sede do poder executivo de Guaíba, onde a política local toma forma.",
    span: "",
  },
];

export function SobreGuaiba() {
  return (
    <section id="guaiba" className="scroll-mt-24 bg-paper py-24 sm:py-32">
      <div className="shell">
        <SectionHeading
          eyebrow="A cidade"
          title="Guaíba, onde o lago encontra a história."
          description="Município da Região Metropolitana de Porto Alegre e da Costa Doce, Guaíba leva o nome das águas que a definem. O gentílico é guaibense."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
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

        {/* Galeria fotográfica */}
        <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {fotos.map((foto, i) => (
            <Reveal
              key={foto.src}
              delay={i * 0.04}
              className={foto.span}
            >
              <div className="group relative overflow-hidden bg-ink/10" style={{ aspectRatio: foto.span ? "16/7" : "4/3" }}>
                <Image
                  src={foto.src}
                  alt={foto.titulo}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Overlay com legenda */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-democrata-green">{foto.kicker}</p>
                  <p className="mt-1 font-display text-xl leading-tight text-white">{foto.titulo}</p>
                  <p className="mt-1 text-xs leading-relaxed text-white/80">{foto.legenda}</p>
                </div>
                {/* Kicker sempre visível no canto */}
                <div className="absolute left-3 top-3">
                  <span className="bg-democrata-blue/90 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                    {foto.kicker}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
