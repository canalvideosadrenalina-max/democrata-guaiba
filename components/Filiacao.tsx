"use client";

import { FormEvent, useId, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { party } from "@/lib/content";

type FieldName = "nome" | "email" | "telefone" | "bairro";

type FormValues = Record<FieldName, string>;

const emptyValues: FormValues = {
  nome: "",
  email: "",
  telefone: "",
  bairro: "",
};

function maskPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length === 0) return "";
  if (digits.length < 3) return `(${digits}`;
  if (digits.length < 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length < 11) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function validate(values: FormValues): Partial<Record<FieldName, string>> {
  const errors: Partial<Record<FieldName, string>> = {};
  const nome = values.nome.trim();
  const email = values.email.trim();
  const bairro = values.bairro.trim();
  const digits = values.telefone.replace(/\D/g, "");

  if (nome.length < 3) errors.nome = "Informe o nome completo.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Informe um e-mail válido.";
  if (digits.length < 10 || digits.length > 11) errors.telefone = "Informe um telefone com DDD.";
  if (bairro.length < 2) errors.bairro = "Informe o bairro em Guaíba.";

  return errors;
}

const fields: { name: FieldName; label: string; type: string; autoComplete: string; placeholder: string }[] = [
  { name: "nome", label: "Nome completo", type: "text", autoComplete: "name", placeholder: "Maria Oliveira da Silva" },
  { name: "email", label: "E-mail", type: "email", autoComplete: "email", placeholder: "maria@email.com" },
  { name: "telefone", label: "Telefone", type: "tel", autoComplete: "tel", placeholder: "(51) 99999-0000" },
  { name: "bairro", label: "Bairro", type: "text", autoComplete: "address-level3", placeholder: "Ex.: Centro, Ermo, Pedras Brancas" },
];

export function Filiacao() {
  const baseId = useId();
  const [values, setValues] = useState<FormValues>(emptyValues);
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [submitted, setSubmitted] = useState<FormValues | null>(null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    const firstInvalid = (Object.keys(nextErrors) as FieldName[])[0];
    if (firstInvalid) {
      document.getElementById(`${baseId}-${firstInvalid}`)?.focus();
      return;
    }
    setSubmitted(values);
  }

  return (
    <section id="filiacao" className="scroll-mt-24 relative overflow-hidden bg-democrata-blue py-24 text-democrata-white sm:py-32">
      <div className="engraved pointer-events-none absolute inset-0 opacity-80" />
      <div className="shell relative grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-democrata-white">Filie-se</p>
          <h2 className="mt-4 font-display text-5xl leading-[0.98] sm:text-6xl">
            A filiação começa com um nome e um bairro.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-democrata-white/80">
            Preencha o pedido de contato do diretório municipal. A filiação partidária propriamente dita segue o
            estatuto do {party.name} e as regras do TSE — este formulário não conclui o ato sozinho.
          </p>
          <dl className="mt-10 space-y-5 border-t border-democrata-white/15 pt-6">
            <div>
              <dt className="text-[11px] uppercase tracking-[0.2em] text-democrata-white">Quem recebe</dt>
              <dd className="mt-1 text-sm text-democrata-white/80">Secretaria do diretório de {party.city}, quando o envio estiver ligado a um sistema.</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.2em] text-democrata-white">Nesta versão</dt>
              <dd className="mt-1 text-sm text-democrata-white/80">Os dados permanecem apenas no seu navegador. Nada é transmitido.</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.2em] text-democrata-white">Número de urna</dt>
              <dd className="mt-1 font-display text-4xl text-democrata-white">{party.number}</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="border border-white/10 bg-cream p-6 text-ink sm:p-8">
            {submitted ? (
              <div role="status" aria-live="polite">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-democrata-blue">Protótipo</p>
                <h3 className="mt-3 font-display text-4xl leading-tight">Pedido preparado, não enviado.</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink/75">
                  {submitted.nome.split(" ")[0]}, esta demonstração guardou o formulário só nesta tela. Nenhum servidor
                  do diretório recebeu nome, e-mail, telefone ou bairro. Na versão definitiva, a secretaria usa o
                  contato para orientar a filiação oficial.
                </p>
                <dl className="mt-6 divide-y divide-ink/10 border-y border-ink/10 text-sm">
                  {(
                    [
                      ["Nome", submitted.nome],
                      ["E-mail", submitted.email],
                      ["Telefone", submitted.telefone],
                      ["Bairro", submitted.bairro],
                    ] as const
                  ).map(([label, value]) => (
                    <div key={label} className="flex justify-between gap-4 py-3">
                      <dt className="text-ink/50">{label}</dt>
                      <dd className="text-right font-medium">{value}</dd>
                    </div>
                  ))}
                </dl>
                <button
                  type="button"
                  className="mt-6 w-full border border-democrata-blue px-5 py-3.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-democrata-blue transition-colors hover:bg-democrata-blue hover:text-paper"
                  onClick={() => {
                    setSubmitted(null);
                    setValues(emptyValues);
                    setErrors({});
                  }}
                >
                  Preencher outro pedido
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate aria-describedby={`${baseId}-note`}>
                <div className="mb-6 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-democrata-blue">Pedido de contato</p>
                    <h3 className="mt-2 font-display text-4xl text-ink">Quero me filiar</h3>
                  </div>
                  <p className="hidden font-display text-5xl leading-none text-democrata-blue/20 sm:block">{party.number}</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {fields.map((field) => {
                    const error = errors[field.name];
                    const inputId = `${baseId}-${field.name}`;
                    const errorId = `${inputId}-error`;
                    const wide = field.name === "nome" || field.name === "bairro";
                    return (
                      <div key={field.name} className={wide ? "sm:col-span-2" : undefined}>
                        <label htmlFor={inputId} className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/70">
                          {field.label}
                        </label>
                        <input
                          id={inputId}
                          name={field.name}
                          type={field.type}
                          autoComplete={field.autoComplete}
                          placeholder={field.placeholder}
                          value={values[field.name]}
                          aria-invalid={error ? true : undefined}
                          aria-describedby={error ? errorId : undefined}
                          onChange={(event) => {
                            const next = field.name === "telefone" ? maskPhone(event.target.value) : event.target.value;
                            setValues((current) => ({ ...current, [field.name]: next }));
                            if (errors[field.name]) {
                              setErrors((current) => {
                                const clone = { ...current };
                                delete clone[field.name];
                                return clone;
                              });
                            }
                          }}
                          className={`w-full border bg-paper px-4 py-3.5 text-[15px] text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-democrata-blue ${
                            error ? "border-red-700" : "border-ink/15"
                          }`}
                        />
                        {error ? (
                          <p id={errorId} className="mt-2 text-sm text-red-800">
                            {error}
                          </p>
                        ) : null}
                      </div>
                    );
                  })}
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full bg-democrata-green px-5 py-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-democrata-blue hover:text-democrata-white"
                >
                  Enviar pedido de filiação
                </button>
                <p id={`${baseId}-note`} className="mt-4 text-xs leading-relaxed text-ink/55">
                  Protótipo de interface. O botão não envia dados a nenhum servidor e não gera filiação partidária.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
