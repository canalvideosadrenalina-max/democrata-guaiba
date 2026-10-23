import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { leadershipNotes, party } from "@/lib/content";

export function LiderancaLocal() {
  return (
    <section id="lideranca" className="scroll-mt-24 bg-paper py-24 sm:py-32">
      <div className="shell">
        <div className="border border-ink/10 bg-cream">
          <Reveal className="flex flex-col gap-8 px-6 py-10 sm:flex-row sm:items-start sm:px-10 lg:px-12">
            {/* Foto compacta */}
            <figure className="relative w-32 shrink-0 overflow-hidden border border-democrata-blue/20 bg-democrata-blue shadow-dossier sm:w-36">
              <div style={{ aspectRatio: "3/4" }} className="relative w-full">
                <Image
                  src="/dr-heitor.jpg"
                  alt="Dr. Heitor de Abreu Oliveira — Presidente do PSD Guaíba"
                  fill
                  className="object-cover object-[center_10%]"
                  sizes="160px"
                  priority
                />
              </div>
              <div className="pointer-events-none absolute inset-[3px] border border-democrata-white/50" />
            </figure>

            {/* Conteúdo */}
            <div className="flex flex-col justify-center">
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
                Evangélico, frequenta a Igreja Betel de Guaíba. A fé e o serviço comunitário caminham juntos na
                trajetória pública do Dr. Heitor.
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
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
