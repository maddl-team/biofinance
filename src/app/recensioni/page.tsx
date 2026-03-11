import type { Metadata } from "next";
import BreadcrumbJsonLd from "../../components/seo/BreadcrumbJsonLd";
import Recensioni from "../../views/Recensioni";

export const metadata: Metadata = {
  title: "Biofinance Recensioni e Opinioni Clienti",
  description: "Leggi le storie vere di chi ha scelto Biofinance. Oltre 500 recensioni verificate su Cessione del Quinto e Prestiti Delega. La tua fiducia è il nostro orgoglio.",
  alternates: {
    canonical: "https://biofinance.it/recensioni",
  },
  openGraph: {
    title: "Biofinance Recensioni e Opinioni Clienti",
    description: "Leggi le storie vere di chi ha scelto Biofinance. Oltre 500 recensioni verificate su Cessione del Quinto e Prestiti Delega. La tua fiducia è il nostro orgoglio.",
  },
};

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd items={[
      { name: "Home", item: "https://biofinance.it" },
      { name: "Recensioni", item: "https://biofinance.it/recensioni" }
      ]} />
      <Recensioni />
    </>
  );
}