import Image from "next/image";
import { Logo } from "@/components/Logo";
import { nav, party } from "@/lib/content";

const channels = [
  { label: "Instagram", hint: "perfil a publicar" },
  { label: "Facebook", hint: "página a publicar" },
  { label: "YouTube", hint: "canal a publicar" },
] as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-democrata-white text-ink">
      {/* Logo decorativo no fundo */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center select-none" aria-hidden="true">
        <div className="relative h-[420px] w-[420px] opacity-[0.07]">
          <Image
            src="/logo-democrata.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="shell relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo tone="dark" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink/70">
            Diretório municipal do {party.name} em {party.city}, Rio Grande do Sul. Presidência de {party.president}.
          </p>
          <p className="mt-6 font-display text-6xl leading-none text-democrata-blue">{party.number}</p>
          <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-ink/50">Número oficial de urna</p>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-democrata-blue">Navegação</p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.id}>
                <a href={item.href} className="text-sm text-ink/75 transition-colors hover:text-democrata-blue">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-democrata-blue">Contato</p>
          <address className="mt-4 space-y-3 text-sm not-italic leading-relaxed text-ink/75">
            <p>
              {party.city} · Rio Grande do Sul
              <br />
              Região Metropolitana de Porto Alegre
            </p>
            <p>Sede, telefone e e-mail institucionais a confirmar pelo diretório. DDD 51.</p>
            <p>Esta página não publica número que ainda não foi oficializado.</p>
          </address>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-democrata-blue">Redes</p>
          <ul className="mt-4 space-y-3">
            {channels.map((channel) => (
              <li key={channel.label}>
                <span className="block text-sm text-ink/80">{channel.label}</span>
                <span className="text-xs uppercase tracking-[0.16em] text-ink/45">{channel.hint}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-ink/10">
        <div className="shell flex flex-col gap-3 py-5 text-xs leading-relaxed text-ink/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {party.name} · Diretório Municipal de {party.city}. Página de apresentação.</p>
          <p>Nas urnas, o número é {party.number}.</p>
        </div>
      </div>
      <div className="grid h-2 grid-cols-3 gap-px bg-ink/15" aria-hidden="true">
        <span className="bg-democrata-blue" />
        <span className="bg-democrata-white" />
        <span className="bg-democrata-green" />
      </div>
    </footer>
  );
}
