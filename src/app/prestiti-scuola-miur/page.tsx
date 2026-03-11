import type { Metadata } from "next";
import ScuolaMiur from "../../views/ScuolaMiur";

export const metadata: Metadata = {
  title: "Prestiti Insegnanti e Personale ATA: Cessione Quinto Scuola",
  description: "Finanziamenti dedicati al mondo Scuola (MIUR). Prestiti per Docenti e ATA anche con contratti annuali (valutazione specifica). Preventivo online NoiPA.",
  openGraph: {
    title: "Prestiti Insegnanti e Personale ATA: Cessione Quinto Scuola",
    description: "Finanziamenti dedicati al mondo Scuola (MIUR). Prestiti per Docenti e ATA anche con contratti annuali (valutazione specifica). Preventivo online NoiPA.",
  },
};

export default function Page() {
  return <ScuolaMiur />;
}
