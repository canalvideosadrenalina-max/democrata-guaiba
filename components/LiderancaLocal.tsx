import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { leadershipNotes, party } from "@/lib/content";

export function LiderancaLocal() {
  return (
    <section id="lideranca" className="scroll-mt-24 bg-paper py-24 sm:py-32">
      <div className="shell">
        <div className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-0">
          <Reveal className="lg:pr-10">
            <figure className="relative h-full min-h-[22rem] overflow-hidden border border-democrata-blue/20 bg-democrata-blue shadow-dossier">
              <Image
                src="/dr-heitor.jpg"
                alt="Dr. Heitor de Abreu Oliveira — Presidente do PSD Guaíba"
                fill
                className="object-cover object-[center_15%]"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-democrata-blue via-democrata-blue/85 to-transparent p-6 pt-20">
                <p className="text-[10px] uppercase tracking-[0.24em] text-democrata-white">Presidente Municipal</p>
                <p className="mt-2 font-display text-4xl leading-none text-democrata-white">{party.president}</p>
                <p className="mt-3 max-w-xs text-xs leading-relaxed text-democrata-white/75">
                  Advogado e presidente do diretório municipal do {party.name} em {party.city}.
                </p>
              </figcaption>
              <div className="pointer-events-none absolute inset-4 border border-democrata-white/70" />
              <div className="pointer-events-none absolute inset-6 border border-democrata-green/80" />
            </figure>
          </Reveal>

          <Reveal delay={0.08} className="flex flex-col justify-center border border-ink/10 bg-cream px-6 py-10 sm:px-10 lg:border-l-0 lg:px-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-democrata-blue">Liderança local</p>
            <h2 className="mt-4 font-display text-5xl leading-[0.95] text-ink sm:text-6xl">{party.president}</h2>
            <p className="mt-4 text-sm uppercase tracking-[0.18em] text-democrata-blue">
              {party.role} · Advogado · Líder comunitário
            </p>
            <div className="mt-6 h-px w-16 bg-democrata-green" />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/80">
              <p>
                {party.president} preside o diretório municipal do {party.name} em {party.city}. A apresentação pública
                desta gestão reúne dois ofícios: a advocacia e a liderança comunitária.
              </p>
              <p>
                Não se publica aqui trajetória que o diretório ainda não documentou — datas de formatura, causas ou
                mandatos. O que esta página afirma é o cargo, a formação jurídica e o vínculo com a cidade. O restante
                da biografia entra quando o próprio diretório a revisar.
              </p>
            </div>

            <ul className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
              {leadershipNotes.map((note) => (
                <li key={note.label} className="grid gap-2 py-4 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:gap-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-democrata-blue">{note.label}</p>
                  <p className="text-sm leading-relaxed text-ink/75">{note.text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
