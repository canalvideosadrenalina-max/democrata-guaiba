import { Reveal } from "@/components/Reveal";
import { leadershipNotes, party } from "@/lib/content";

export function LiderancaLocal() {
  return (
    <section id="lideranca" className="scroll-mt-24 bg-paper py-24 sm:py-32">
      <div className="shell">
        <div className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-0">
          <Reveal className="lg:pr-10">
            <figure className="relative h-full min-h-[34rem] overflow-hidden border border-democrata-blue/20 bg-democrata-blue shadow-dossier">
              <svg viewBox="0 0 360 520" className="absolute inset-0 h-full w-full" role="img" aria-label="Retrato institucional em estilo de medalhão, sem fotografia real">
                <defs>
                  <radialGradient id="studio-light" cx="50%" cy="28%" r="68%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.35" />
                    <stop offset="42%" stopColor="#003F9E" />
                    <stop offset="100%" stopColor="#003F9E" />
                  </radialGradient>
                </defs>
                <rect width="360" height="520" fill="url(#studio-light)" />
                <g fill="none" stroke="#FFFFFF" strokeOpacity="0.55">
                  <ellipse cx="180" cy="188" rx="58" ry="72" strokeWidth="0.8" />
                  <ellipse cx="180" cy="188" rx="46" ry="58" strokeWidth="0.6" />
                  <ellipse cx="180" cy="188" rx="32" ry="42" strokeWidth="0.5" />
                  <path d="M104 330c20-58 44-86 76-86s56 28 76 86" strokeWidth="0.8" />
                  <path d="M72 410c32-86 68-124 108-124s76 38 108 124" strokeWidth="0.8" />
                  <path d="M40 500c42-110 88-156 140-156s98 46 140 156" strokeWidth="0.7" />
                </g>
                <path d="M24 430c70 28 120 36 156 36s90-10 156-40" fill="none" stroke="#009640" strokeWidth="2" />
              </svg>
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-democrata-blue via-democrata-blue/85 to-transparent p-6 pt-20">
                <p className="text-[10px] uppercase tracking-[0.24em] text-democrata-white">Retrato a substituir</p>
                <p className="mt-2 font-display text-4xl leading-none text-democrata-white">H. A. O.</p>
                <p className="mt-3 max-w-xs text-xs leading-relaxed text-democrata-white/75">
                  Medalhão institucional. A fotografia oficial do presidente municipal entra neste quadro, com a mesma
                  proporção.
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
