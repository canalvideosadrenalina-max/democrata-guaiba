"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Logo } from "@/components/Logo";
import { CloseIcon, MenuIcon } from "@/components/Icons";
import { nav, party } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("inicio");
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const nodes = nav
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => node !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.15, 0.4] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const barSolid = scrolled || open;

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-democrata-green focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
      >
        Ir para o conteúdo
      </a>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="flex h-[3px]" aria-hidden="true">
          <span className="h-full flex-1 bg-democrata-blue" />
          <span className="h-full flex-1 bg-democrata-white" />
          <span className="h-full flex-1 bg-democrata-green" />
        </div>
        <div
          className={`transition-colors duration-300 ${
            barSolid ? "border-b border-democrata-white/10 bg-democrata-blue/95 backdrop-blur-md" : "bg-gradient-to-b from-democrata-blue/80 to-transparent"
          }`}
        >
          <div className="shell flex h-[4.6rem] items-center justify-between gap-4">
            <a href="#inicio" aria-label={`${party.name} em ${party.city}, início`} onClick={() => setOpen(false)}>
              <Logo />
            </a>

            <nav className="hidden items-center gap-7 lg:flex" aria-label="Seções">
              {nav.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  aria-current={active === item.id ? "location" : undefined}
                  className={`text-[13px] tracking-wide transition-colors ${
                    active === item.id
                      ? "border-b border-democrata-green text-democrata-white"
                      : "border-b border-transparent text-democrata-white/75 hover:text-democrata-white"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="#filiacao"
                className="hidden bg-democrata-green px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:bg-democrata-white sm:inline-flex"
              >
                Quero me filiar
              </a>
              <button
                type="button"
                className="grid h-11 w-11 place-items-center border border-democrata-white/30 text-democrata-white lg:hidden"
                aria-expanded={open}
                aria-controls="menu-mobile"
                onClick={() => setOpen((value) => !value)}
              >
                <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
                {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="menu-mobile"
            aria-label="Seções"
            className="fixed inset-0 z-40 bg-democrata-blue pt-[6.2rem] lg:hidden"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="shell flex h-full flex-col justify-between pb-10">
              <ul className="mt-6 space-y-1">
                {nav.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * index, duration: 0.35 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline justify-between border-b border-democrata-white/15 py-4 font-display text-4xl text-democrata-white"
                    >
                      {item.label}
                      <span className="font-sans text-xs tracking-[0.2em] text-democrata-white/70">0{index + 1}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a
                href="#filiacao"
                onClick={() => setOpen(false)}
                className="mt-8 bg-democrata-green px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-ink"
              >
                Quero me filiar
              </a>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </>
  );
}
