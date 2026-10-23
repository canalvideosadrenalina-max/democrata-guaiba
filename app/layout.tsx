import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { party } from "@/lib/content";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-display",
});

const title = `${party.name} em ${party.city} | Diretório Municipal`;
const description = `Página institucional do diretório municipal do ${party.name} em ${party.city}/${party.state}, presidido por ${party.president}. Número de urna ${party.number}.`;

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${party.name} ${party.city}`,
  },
  description,
  keywords: [
    party.name,
    party.city,
    "Rio Grande do Sul",
    party.president,
    "filiação partidária",
    "diretório municipal",
    `número ${party.number}`,
  ],
  authors: [{ name: `${party.name} — Diretório Municipal de ${party.city}` }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: `${party.name} em ${party.city}`,
    title,
    description,
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#003F9E",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: `${party.name} — Diretório Municipal de ${party.city}`,
  description,
  areaServed: `${party.city}, Rio Grande do Sul, Brasil`,
  member: {
    "@type": "Person",
    name: "Heitor de Abreu Oliveira",
    jobTitle: party.role,
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${display.variable}`}>
      <body className="font-sans antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
