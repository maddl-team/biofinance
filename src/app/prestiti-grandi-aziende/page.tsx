import type { Metadata } from "next";
import GrandiAziende from "../../views/GrandiAziende";

export const metadata: Metadata = {
  title: "Prestiti Dipendenti Grandi Aziende: Tassi Agevolati SPA/SRL",
  description: "Lavori in Luxottica, Ferrero, Enel o grandi SPA? Scopri i tassi scontati Biofinance riservati ai dipendenti di Top Companies italiane. Calcola rata.",
  openGraph: {
    title: "Prestiti Dipendenti Grandi Aziende: Tassi Agevolati SPA/SRL",
    description: "Lavori in Luxottica, Ferrero, Enel o grandi SPA? Scopri i tassi scontati Biofinance riservati ai dipendenti di Top Companies italiane. Calcola rata.",
  },
};

export default function Page() {
  return <GrandiAziende />;
}
