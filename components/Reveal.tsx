"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -48px 0px" }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] as const }
      }
    >
      {children}
    </motion.div>
  );
}
