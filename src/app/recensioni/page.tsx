import type { Metadata } from "next";
import Recensioni from "../../views/Recensioni";

export const metadata: Metadata = {
  title: "Biofinance Recensioni e Opinioni Clienti",
  description: "Leggi le storie vere di chi ha scelto Biofinance. Oltre 500 recensioni verificate su Cessione del Quinto e Prestiti Delega. La tua fiducia è il nostro orgoglio.",
  openGraph: {
    title: "Biofinance Recensioni e Opinioni Clienti",
    description: "Leggi le storie vere di chi ha scelto Biofinance. Oltre 500 recensioni verificate su Cessione del Quinto e Prestiti Delega. La tua fiducia è il nostro orgoglio.",
  },
};

export default function Page() {
  return <Recensioni />;
}
