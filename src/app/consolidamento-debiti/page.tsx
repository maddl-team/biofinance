import type { Metadata } from "next";
import ServiceJsonLd from "../../components/seo/ServiceJsonLd";
import BreadcrumbJsonLd from "../../components/seo/BreadcrumbJsonLd";
import ConsolidamentoDebiti from "../../views/ConsolidamentoDebiti";

export const metadata: Metadata = {
  title: "Consolidamento Debiti: Unica Rata con Cessione del Quinto",
  description: "Troppe rate a fine mese? Accorpa prestiti, carte revolving e finanziamenti in un'unica rata sostenibile trattenuta in busta paga. Riduci lo stress finanziario.",
  alternates: {
    canonical: "https://biofinance.it/consolidamento-debiti",
  },
  openGraph: {
    title: "Consolidamento Debiti: Unica Rata con Cessione del Quinto",
    description: "Troppe rate a fine mese? Accorpa prestiti, carte revolving e finanziamenti in un'unica rata sostenibile trattenuta in busta paga. Riduci lo stress finanziario.",
  },
};

export default function Page() {
  return (
    <>
      <ServiceJsonLd name="Consolidamento Debiti" description="Accorpamento dei debiti in un'unica rata sostenibile con trattenuta in busta paga." url="https://biofinance.it/consolidamento-debiti" serviceType="Consolidamento Debiti" />

      <BreadcrumbJsonLd items={[
      { name: "Home", item: "https://biofinance.it" },
      { name: "Soluzioni Liquidità", item: "https://biofinance.it/soluzioni-liquidita" },
      { name: "Consolidamento Debiti", item: "https://biofinance.it/consolidamento-debiti" }
      ]} />
      <ConsolidamentoDebiti />
    </>
  );
}