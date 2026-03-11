import type { Metadata } from "next";
import SegnalatiCrif from "../../views/SegnalatiCrif";

export const metadata: Metadata = {
  title: "Prestiti per Segnalati CRIF e Cattivi Pagatori | Biofinance",
  description: "Sei segnalato in CRIF o protestato? La Cessione del Quinto è il tuo diritto. Ottieni credito senza garanti. Valutiamo anche pignoramenti in corso.",
  openGraph: {
    title: "Prestiti per Segnalati CRIF e Cattivi Pagatori | Biofinance",
    description: "Sei segnalato in CRIF o protestato? La Cessione del Quinto è il tuo diritto. Ottieni credito senza garanti. Valutiamo anche pignoramenti in corso.",
  },
};

export default function Page() {
  return <SegnalatiCrif />;
}
