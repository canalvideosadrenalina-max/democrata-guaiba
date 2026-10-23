import { Filiacao } from "@/components/Filiacao";
import { Hero } from "@/components/Hero";
import { LiderancaLocal } from "@/components/LiderancaLocal";
import { NossosValores } from "@/components/NossosValores";
import { OPartido } from "@/components/OPartido";
import { SobreGuaiba } from "@/components/SobreGuaiba";

export default function HomePage() {
  return (
    <main id="conteudo">
      <Hero />
      <SobreGuaiba />
      <OPartido />
      <NossosValores />
      <LiderancaLocal />
      <Filiacao />
    </main>
  );
}
