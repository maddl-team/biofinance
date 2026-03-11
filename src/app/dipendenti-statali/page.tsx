import type { Metadata } from "next";
import BreadcrumbJsonLd from "../../components/seo/BreadcrumbJsonLd";
import DipendentiStatali from "../../views/DipendentiStatali";

export const metadata: Metadata = {
  title: "Prestiti NoiPA e Statali: Cessione del Quinto Tassi Agevolati",
  description: "Cessione del Quinto per Dipendenti Statali e Ministeriali. Gestione pratica telematica tramite portale NoiPA. Tassi fissi convenzionati e zero spese.",
  alternates: {
    canonical: "https://biofinance.it/dipendenti-statali",
  },
  openGraph: {
    title: "Prestiti NoiPA e Statali: Cessione del Quinto Tassi Agevolati",
    description: "Cessione del Quinto per Dipendenti Statali e Ministeriali. Gestione pratica telematica tramite portale NoiPA. Tassi fissi convenzionati e zero spese.",
  },
};

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd items={[
      { name: "Home", item: "https://biofinance.it" },
      { name: "Dipendenti Statali", item: "https://biofinance.it/dipendenti-statali" }
      ]} />
      <DipendentiStatali />
    </>
  );
}