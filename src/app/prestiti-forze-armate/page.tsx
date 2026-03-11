import type { Metadata } from "next";
import BreadcrumbJsonLd from "../../components/seo/BreadcrumbJsonLd";
import ForzeArmate from "../../views/ForzeArmate";

export const metadata: Metadata = {
  title: "Prestiti Forze Armate e Polizia: Cessione del Quinto NoiPA",
  description: "Finanziamenti agevolati per Carabinieri, Polizia, Esercito e Guardia di Finanza. Tassi in convenzione, nessuna spesa istruttoria e gestione anche con trasferimenti.",
  alternates: {
    canonical: "https://biofinance.it/prestiti-forze-armate",
  },
  openGraph: {
    title: "Prestiti Forze Armate e Polizia: Cessione del Quinto NoiPA",
    description: "Finanziamenti agevolati per Carabinieri, Polizia, Esercito e Guardia di Finanza. Tassi in convenzione, nessuna spesa istruttoria e gestione anche con trasferimenti.",
  },
};

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd items={[
      { name: "Home", item: "https://biofinance.it" },
      { name: "Dipendenti Statali", item: "https://biofinance.it/dipendenti-statali" },
      { name: "Prestiti Forze Armate", item: "https://biofinance.it/prestiti-forze-armate" }
      ]} />
      <ForzeArmate />
    </>
  );
}