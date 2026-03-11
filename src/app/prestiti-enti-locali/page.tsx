import type { Metadata } from "next";
import EntiLocali from "../../views/EntiLocali";

export const metadata: Metadata = {
  title: "Prestiti Dipendenti Comunali e Regionali: Cessione Enti Locali",
  description: "Lavori in Comune, Regione o Provincia? Scopri la Cessione del Quinto per Enti Locali. Tassi fissi, zero spese accessorie e firma digitale. Preventivo immediato.",
  openGraph: {
    title: "Prestiti Dipendenti Comunali e Regionali: Cessione Enti Locali",
    description: "Lavori in Comune, Regione o Provincia? Scopri la Cessione del Quinto per Enti Locali. Tassi fissi, zero spese accessorie e firma digitale. Preventivo immediato.",
  },
};

export default function Page() {
  return <EntiLocali />;
}
