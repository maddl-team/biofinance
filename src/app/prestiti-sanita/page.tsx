import type { Metadata } from "next";
import BreadcrumbJsonLd from "../../components/seo/BreadcrumbJsonLd";
import Sanita from "../../views/Sanita";

export const metadata: Metadata = {
  title: "Prestiti Infermieri e Medici: Cessione del Quinto Sanità",
  description: "Finanziamenti per dipendenti ASL e Ospedalieri. Valorizziamo indennità e turni per massimizzare il prestito. Soluzioni per Infermieri, OSS e Medici.",
  alternates: {
    canonical: "https://biofinance.it/prestiti-sanita",
  },
  openGraph: {
    title: "Prestiti Infermieri e Medici: Cessione del Quinto Sanità",
    description: "Finanziamenti per dipendenti ASL e Ospedalieri. Valorizziamo indennità e turni per massimizzare il prestito. Soluzioni per Infermieri, OSS e Medici.",
  },
};

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd items={[
      { name: "Home", item: "https://biofinance.it" },
      { name: "Enti Locali e Sanità", item: "https://biofinance.it/enti-locali-sanita" },
      { name: "Prestiti Sanità", item: "https://biofinance.it/prestiti-sanita" }
      ]} />
      <Sanita />
    </>
  );
}