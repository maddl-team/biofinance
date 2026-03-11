import type { Metadata } from "next";
import BreadcrumbJsonLd from "../../components/seo/BreadcrumbJsonLd";
import EntiLocali from "../../views/EntiLocali";

export const metadata: Metadata = {
  title: "Prestiti Dipendenti Comunali e Regionali: Cessione Enti Locali",
  description: "Lavori in Comune, Regione o Provincia? Scopri la Cessione del Quinto per Enti Locali. Tassi fissi, zero spese accessorie e firma digitale. Preventivo immediato.",
  alternates: {
    canonical: "https://biofinance.it/prestiti-enti-locali",
  },
  openGraph: {
    title: "Prestiti Dipendenti Comunali e Regionali: Cessione Enti Locali",
    description: "Lavori in Comune, Regione o Provincia? Scopri la Cessione del Quinto per Enti Locali. Tassi fissi, zero spese accessorie e firma digitale. Preventivo immediato.",
  },
};

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd items={[
      { name: "Home", item: "https://biofinance.it" },
      { name: "Enti Locali e Sanità", item: "https://biofinance.it/enti-locali-sanita" },
      { name: "Prestiti Enti Locali", item: "https://biofinance.it/prestiti-enti-locali" }
      ]} />
      <EntiLocali />
    </>
  );
}