import type { Metadata } from "next";
import BreadcrumbJsonLd from "../../components/seo/BreadcrumbJsonLd";
import DipendentiPrivati from "../../views/DipendentiPrivati";

export const metadata: Metadata = {
  title: "Prestiti Dipendenti Privati: Cessione del Quinto Tassi 2026",
  description: "Finanziamenti per dipendenti di SRL, SPA e Cooperative. Usa il tuo TFR come garanzia per ottenere liquidità immediata a tassi agevolati. Preventivo gratis.",
  alternates: {
    canonical: "https://biofinance.it/dipendenti-privati",
  },
  openGraph: {
    title: "Prestiti Dipendenti Privati: Cessione del Quinto Tassi 2026",
    description: "Finanziamenti per dipendenti di SRL, SPA e Cooperative. Usa il tuo TFR come garanzia per ottenere liquidità immediata a tassi agevolati. Preventivo gratis.",
  },
};

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd items={[
      { name: "Home", item: "https://biofinance.it" },
      { name: "Dipendenti Privati", item: "https://biofinance.it/dipendenti-privati" }
      ]} />
      <DipendentiPrivati />
    </>
  );
}