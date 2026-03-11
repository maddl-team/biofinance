import type { Metadata } from "next";
import ServiceJsonLd from "../../components/seo/ServiceJsonLd";
import BreadcrumbJsonLd from "../../components/seo/BreadcrumbJsonLd";
import RinnovoCessione from "../../views/RinnovoCessione";

export const metadata: Metadata = {
  title: "Rinnovo Cessione del Quinto: Calcolo e Requisiti 2026",
  description: "Hai già una Cessione in corso? Scopri quando puoi rinnovarla per ottenere nuova liquidità. Verifica gratuita del conteggio estintivo e recupero interessi.",
  alternates: {
    canonical: "https://biofinance.it/rinnovo-cessione-del-quinto",
  },
  openGraph: {
    title: "Rinnovo Cessione del Quinto: Calcolo e Requisiti 2026",
    description: "Hai già una Cessione in corso? Scopri quando puoi rinnovarla per ottenere nuova liquidità. Verifica gratuita del conteggio estintivo e recupero interessi.",
  },
};

export default function Page() {
  return (
    <>
      <ServiceJsonLd name="Rinnovo Cessione del Quinto" description="Verifica requisiti e condizioni per rinnovare una Cessione del Quinto e ottenere nuova liquidità." url="https://biofinance.it/rinnovo-cessione-del-quinto" serviceType="Rinnovo Cessione del Quinto" />

      <BreadcrumbJsonLd items={[
      { name: "Home", item: "https://biofinance.it" },
      { name: "Cessione del Quinto", item: "https://biofinance.it/cessione-del-quinto" },
      { name: "Rinnovo Cessione del Quinto", item: "https://biofinance.it/rinnovo-cessione-del-quinto" }
      ]} />
      <RinnovoCessione />
    </>
  );
}