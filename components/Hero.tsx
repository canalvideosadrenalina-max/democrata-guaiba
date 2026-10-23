import Image from "next/image";
import { ArrowIcon } from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import { heroFacts, party } from "@/lib/content";

export function Hero() {
  return (
    <section id="inicio" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-democrata-blue text-democrata-white">
      <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_100%_0%,#009640_0%,transparent_42%)]" />
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-overlay" />
      <p
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 top-24 hidden select-none font-display text-[22rem] leading-none text-white/[0.035] lg:block"
      >
        {party.number}
      </p>

      <div className="shell relative flex flex-1 flex-col justify-center pb-16 pt-32">
        <div className="grid items-end gap-14 lg:grid-cols-[minmax(0,1.4fr)_minmax(18rem,0.7fr)]">
          <div>
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-democrata-white">
                Diretório municipal · {party.city}/{party.state}
              </p>
              <h1 className="mt-6 font-display text-[4.2rem] leading-[0.86] tracking-tight sm:text-8xl lg:text-[7.4rem]">
                Democrata
                <span className="block">35</span>
                <span className="mt-3 block font-display text-[2.4rem] italic text-democrata-white sm:text-5xl lg:text-6xl">
                  em {party.city}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-democrata-white/80 sm:text-lg">
                Um diretório à beira do lago, com memória farroupilha e endereço nos bairros. Sob a presidência de{" "}
                <strong className="font-semibold text-democrata-white">{party.president}</strong>, o {party.name} convida
                guaibenses a participar da vida pública com diálogo, rigor e responsabilidade.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#filiacao"
                  className="inline-flex items-center justify-center gap-3 bg-democrata-green px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-democrata-white"
                >
                  Quero me filiar
                  <ArrowIcon className="h-4 w-4" />
                </a>
                <a
                  href="#guaiba"
                  className="inline-flex items-center justify-center border border-democrata-white/40 px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-democrata-white transition-colors hover:bg-democrata-white hover:text-democrata-blue"
                >
                  Conhecer a cidade
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18}>
            <aside className="relative border border-white/15 bg-white/[0.03] p-6 sm:p-8">
              {/* Logo decorativo no fundo */}
              <div className="pointer-events-none absolute -right-8 -top-8 h-72 w-72 select-none opacity-[0.08] mix-blend-luminosity">
                <Image
                  src="/logo-democrata-white.png"
                  alt=""
                  fill
                  className="object-contain"
                  aria-hidden="true"
                />
              </div>
              <div className="flex items-start justify-between gap-4">
                <p className="text-[11px] uppercase tracking-[0.26em] text-democrata-white/70">Nas urnas</p>
                <p className="font-display text-6xl leading-none text-democrata-white">{party.number}</p>
              </div>
              <div className="my-6 h-px bg-democrata-green" />
              <p className="text-[11px] uppercase tracking-[0.22em] text-democrata-white">{party.role}</p>
              <p className="mt-3 font-display text-4xl leading-[1.05] text-democrata-white">{party.president}</p>
              <p className="mt-5 text-sm leading-relaxed text-democrata-white/75">
                Advogado e líder comunitário à frente do diretório do {party.name} em {party.city}.
              </p>
              <p className="mt-6 border-l border-democrata-green pl-4 font-display text-xl italic leading-snug text-democrata-white/90">
                Escuta no bairro. Rigor nas instituições.
              </p>
              <p className="mt-2 pl-4 text-[10px] uppercase tracking-[0.2em] text-democrata-white/70">Diretório municipal</p>
            </aside>
          </Reveal>
        </div>
      </div>

      <div className="relative">
        <div className="ripples pointer-events-none h-16 opacity-70" />
        <div className="lake-glint h-px bg-democrata-green" />
        <div className="bg-democrata-white">
          <dl className="shell grid grid-cols-2 gap-px bg-democrata-blue/10 sm:grid-cols-4">
            {heroFacts.map((fact) => (
              <div key={fact.label} className="bg-democrata-white px-4 py-4 sm:px-6">
                <dt className="text-[10px] uppercase tracking-[0.2em] text-ink/60">{fact.label}</dt>
                <dd className="mt-1 font-display text-2xl text-democrata-blue">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
