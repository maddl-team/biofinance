import type { Metadata } from "next";
import ServiceJsonLd from "../../components/seo/ServiceJsonLd";
import BreadcrumbJsonLd from "../../components/seo/BreadcrumbJsonLd";
import DelegazionePagamento from "../../views/DelegazionePagamento";

export const metadata: Metadata = {
  title: 'Delegazione di Pagamento: Il "Doppio Quinto" dello Stipendio',
  description: "Hai già la Cessione del Quinto? Richiedi la Delega di Pagamento per ottenere ulteriore liquidità. Impegna un secondo 20% del tuo stipendio. Solo dipendenti.",
  alternates: {
    canonical: "https://biofinance.it/delegazione-di-pagamento",
  },
  openGraph: {
    title: 'Delegazione di Pagamento: Il "Doppio Quinto" dello Stipendio',
    description: "Hai già la Cessione del Quinto? Richiedi la Delega di Pagamento per ottenere ulteriore liquidità. Impegna un secondo 20% del tuo stipendio. Solo dipendenti.",
  },
};

export default function Page() {
  return (
    <>
      <ServiceJsonLd name="Delegazione di Pagamento" description="Secondo quinto dello stipendio per ottenere ulteriore liquidità oltre alla Cessione del Quinto." url="https://biofinance.it/delegazione-di-pagamento" serviceType="Delegazione di Pagamento" />

      <BreadcrumbJsonLd items={[
      { name: "Home", item: "https://biofinance.it" },
      { name: "Soluzioni Liquidità", item: "https://biofinance.it/soluzioni-liquidita" },
      { name: "Delegazione di Pagamento", item: "https://biofinance.it/delegazione-di-pagamento" }
      ]} />
      <DelegazionePagamento />
    </>
  );
}