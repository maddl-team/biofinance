import type { Metadata } from "next";
import BreadcrumbJsonLd from "../../components/seo/BreadcrumbJsonLd";
import ScuolaMiur from "../../views/ScuolaMiur";

export const metadata: Metadata = {
  title: "Prestiti Insegnanti e Personale ATA: Cessione Quinto Scuola",
  description: "Finanziamenti dedicati al mondo Scuola (MIUR). Prestiti per Docenti e ATA anche con contratti annuali (valutazione specifica). Preventivo online NoiPA.",
  alternates: {
    canonical: "https://biofinance.it/prestiti-scuola-miur",
  },
  openGraph: {
    title: "Prestiti Insegnanti e Personale ATA: Cessione Quinto Scuola",
    description: "Finanziamenti dedicati al mondo Scuola (MIUR). Prestiti per Docenti e ATA anche con contratti annuali (valutazione specifica). Preventivo online NoiPA.",
  },
};

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd items={[
      { name: "Home", item: "https://biofinance.it" },
      { name: "Dipendenti Statali", item: "https://biofinance.it/dipendenti-statali" },
      { name: "Prestiti Scuola MIUR", item: "https://biofinance.it/prestiti-scuola-miur" }
      ]} />
      <ScuolaMiur />
    </>
  );
}