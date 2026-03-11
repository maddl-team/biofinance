import type { Metadata } from "next";
import CalcoloCessioneDelQuinto from "../../views/CalcoloCessioneDelQuinto";

export const metadata: Metadata = {
  title: "Calcolo Cessione del Quinto Online | Simulazione Rata 2026",
  description: "Calcola la tua rata in 30 secondi. Simulazione gratuita e anonima per dipendenti e pensionati. Scopri il massimo importo erogabile con Biofinance.",
  openGraph: {
    title: "Calcolo Cessione del Quinto Online | Simulazione Rata 2026",
    description: "Calcola la tua rata in 30 secondi. Simulazione gratuita e anonima per dipendenti e pensionati. Scopri il massimo importo erogabile con Biofinance.",
  },
};

export default function Page() {
  return <CalcoloCessioneDelQuinto />;
}
