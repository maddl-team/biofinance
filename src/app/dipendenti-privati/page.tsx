import type { Metadata } from "next";
import DipendentiPrivati from "../../views/DipendentiPrivati";

export const metadata: Metadata = {
  title: "Prestiti Dipendenti Privati: Cessione del Quinto Tassi 2026",
  description: "Finanziamenti per dipendenti di SRL, SPA e Cooperative. Usa il tuo TFR come garanzia per ottenere liquidità immediata a tassi agevolati. Preventivo gratis.",
  openGraph: {
    title: "Prestiti Dipendenti Privati: Cessione del Quinto Tassi 2026",
    description: "Finanziamenti per dipendenti di SRL, SPA e Cooperative. Usa il tuo TFR come garanzia per ottenere liquidità immediata a tassi agevolati. Preventivo gratis.",
  },
};

export default function Page() {
  return <DipendentiPrivati />;
}
