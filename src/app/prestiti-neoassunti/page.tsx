import type { Metadata } from "next";
import BreadcrumbJsonLd from "../../components/seo/BreadcrumbJsonLd";
import Neoassunti from "../../views/Neoassunti";

export const metadata: Metadata = {
  title: "Prestiti per Neoassunti: Requisiti e Anzianità Minima 2026",
  description: "Sei stato assunto da poco? Scopri dopo quanti mesi puoi chiedere la Cessione del Quinto. Soluzioni per chi ha cambiato lavoro e trasferito il TFR.",
  alternates: {
    canonical: "https://biofinance.it/prestiti-neoassunti",
  },
  openGraph: {
    title: "Prestiti per Neoassunti: Requisiti e Anzianità Minima 2026",
    description: "Sei stato assunto da poco? Scopri dopo quanti mesi puoi chiedere la Cessione del Quinto. Soluzioni per chi ha cambiato lavoro e trasferito il TFR.",
  },
};

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd items={[
      { name: "Home", item: "https://biofinance.it" },
      { name: "Dipendenti Privati", item: "https://biofinance.it/dipendenti-privati" },
      { name: "Prestiti Neoassunti", item: "https://biofinance.it/prestiti-neoassunti" }
      ]} />
      <Neoassunti />
    </>
  );
}