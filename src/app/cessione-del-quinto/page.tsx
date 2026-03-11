import type { Metadata } from "next";
import ServiceJsonLd from "../../components/seo/ServiceJsonLd";
import BreadcrumbJsonLd from "../../components/seo/BreadcrumbJsonLd";
import CessioneDelQuinto from "../../views/CessioneDelQuinto";

export const metadata: Metadata = {
  title: "Cos'è la Cessione del Quinto: Guida Completa e Tassi 2026",
  description: "Guida definitiva alla Cessione del Quinto. Scopri come funziona per dipendenti e pensionati, i requisiti OAM e come ottenerla anche con segnalazioni CRIF.",
  alternates: {
    canonical: "https://biofinance.it/cessione-del-quinto",
  },
  openGraph: {
    title: "Cos'è la Cessione del Quinto: Guida Completa e Tassi 2026",
    description: "Guida definitiva alla Cessione del Quinto. Scopri come funziona per dipendenti e pensionati, i requisiti OAM e come ottenerla anche con segnalazioni CRIF.",
  },
};

export default function Page() {
  return (
    <>
      <ServiceJsonLd name="Cessione del Quinto" description="Prestito con rata trattenuta direttamente da stipendio o pensione. Soluzione regolamentata e sostenibile per dipendenti e pensionati." url="https://biofinance.it/cessione-del-quinto" serviceType="Cessione del Quinto" />

      <BreadcrumbJsonLd items={[
      { name: "Home", item: "https://biofinance.it" },
      { name: "Cessione del Quinto", item: "https://biofinance.it/cessione-del-quinto" }
      ]} />
      <CessioneDelQuinto />
    </>
  );
}