import type { Metadata } from "next";
import BreadcrumbJsonLd from "../../components/seo/BreadcrumbJsonLd";
import GrandiAziende from "../../views/GrandiAziende";

export const metadata: Metadata = {
  title: "Prestiti Dipendenti Grandi Aziende: Tassi Agevolati SPA/SRL",
  description: "Lavori in Luxottica, Ferrero, Enel o grandi SPA? Scopri i tassi scontati Biofinance riservati ai dipendenti di Top Companies italiane. Calcola rata.",
  alternates: {
    canonical: "https://biofinance.it/prestiti-grandi-aziende",
  },
  openGraph: {
    title: "Prestiti Dipendenti Grandi Aziende: Tassi Agevolati SPA/SRL",
    description: "Lavori in Luxottica, Ferrero, Enel o grandi SPA? Scopri i tassi scontati Biofinance riservati ai dipendenti di Top Companies italiane. Calcola rata.",
  },
};

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd items={[
      { name: "Home", item: "https://biofinance.it" },
      { name: "Dipendenti Privati", item: "https://biofinance.it/dipendenti-privati" },
      { name: "Prestiti Grandi Aziende", item: "https://biofinance.it/prestiti-grandi-aziende" }
      ]} />
      <GrandiAziende />
    </>
  );
}