import type { Metadata } from "next";
import ServiceJsonLd from "../../components/seo/ServiceJsonLd";
import BreadcrumbJsonLd from "../../components/seo/BreadcrumbJsonLd";
import SegnalatiCrif from "../../views/SegnalatiCrif";

export const metadata: Metadata = {
  title: "Prestiti per Segnalati CRIF e Cattivi Pagatori | Biofinance",
  description: "Sei segnalato in CRIF o protestato? La Cessione del Quinto è il tuo diritto. Ottieni credito senza garanti. Valutiamo anche pignoramenti in corso.",
  alternates: {
    canonical: "https://biofinance.it/prestiti-segnalati-crif",
  },
  openGraph: {
    title: "Prestiti per Segnalati CRIF e Cattivi Pagatori | Biofinance",
    description: "Sei segnalato in CRIF o protestato? La Cessione del Quinto è il tuo diritto. Ottieni credito senza garanti. Valutiamo anche pignoramenti in corso.",
  },
};

export default function Page() {
  return (
    <>
      <ServiceJsonLd name="Prestiti per Segnalati CRIF" description="Accesso al credito tramite Cessione del Quinto anche in presenza di segnalazioni o protesti." url="https://biofinance.it/prestiti-segnalati-crif" serviceType="Prestiti per Segnalati CRIF" />

      <BreadcrumbJsonLd items={[
      { name: "Home", item: "https://biofinance.it" },
      { name: "Soluzioni Liquidità", item: "https://biofinance.it/soluzioni-liquidita" },
      { name: "Prestiti Segnalati CRIF", item: "https://biofinance.it/prestiti-segnalati-crif" }
      ]} />
      <SegnalatiCrif />
    </>
  );
}