import type { Metadata } from "next";
import Sanita from "../../views/Sanita";

export const metadata: Metadata = {
  title: "Prestiti Infermieri e Medici: Cessione del Quinto Sanità",
  description: "Finanziamenti per dipendenti ASL e Ospedalieri. Valorizziamo indennità e turni per massimizzare il prestito. Soluzioni per Infermieri, OSS e Medici.",
  openGraph: {
    title: "Prestiti Infermieri e Medici: Cessione del Quinto Sanità",
    description: "Finanziamenti per dipendenti ASL e Ospedalieri. Valorizziamo indennità e turni per massimizzare il prestito. Soluzioni per Infermieri, OSS e Medici.",
  },
};

export default function Page() {
  return <Sanita />;
}
