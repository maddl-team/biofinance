import type { Metadata } from "next";
import ServiceJsonLd from "../../components/seo/ServiceJsonLd";
import BreadcrumbJsonLd from "../../components/seo/BreadcrumbJsonLd";
import CalcoloCessioneDelQuinto from "../../views/CalcoloCessioneDelQuinto";

export const metadata: Metadata = {
  title: "Calcolo Cessione del Quinto Online | Simulazione Rata 2026",
  description: "Calcola la tua rata in 30 secondi. Simulazione gratuita e anonima per dipendenti e pensionati. Scopri il massimo importo erogabile con Biofinance.",
  alternates: {
    canonical: "https://biofinance.it/calcolo-cessione-del-quinto",
  },
  openGraph: {
    title: "Calcolo Cessione del Quinto Online | Simulazione Rata 2026",
    description: "Calcola la tua rata in 30 secondi. Simulazione gratuita e anonima per dipendenti e pensionati. Scopri il massimo importo erogabile con Biofinance.",
  },
};

export default function Page() {
  return (
    <>
      <ServiceJsonLd name="Calcolo Cessione del Quinto" description="Simulazione della rata e dell'importo erogabile per la Cessione del Quinto per dipendenti e pensionati." url="https://biofinance.it/calcolo-cessione-del-quinto" serviceType="Simulazione Cessione del Quinto" />

      <BreadcrumbJsonLd items={[
      { name: "Home", item: "https://biofinance.it" },
      { name: "Cessione del Quinto", item: "https://biofinance.it/cessione-del-quinto" },
      { name: "Calcolo Cessione del Quinto", item: "https://biofinance.it/calcolo-cessione-del-quinto" }
      ]} />
      <CalcoloCessioneDelQuinto />
    </>
  );
}