import type { Metadata } from 'next';
import BreadcrumbJsonLd from "../../components/seo/BreadcrumbJsonLd";
import EntiLocaliSanitaHub from '../../views/EntiLocaliSanitaHub';

export const metadata: Metadata = {
    title: 'Prestiti Enti Locali e Sanità: Cessione del Quinto Agevolata',
    description: 'Finanziamenti per dipendenti di Comuni, Regioni, ASL e Ospedali. Gestione diretta con le ragionerie locali per una liquidità rapida. Scopri le convenzioni.',
  alternates: {
    canonical: "https://biofinance.it/enti-locali-sanita",
  },
};

export default function Page() {
    return (
    <>
      <BreadcrumbJsonLd items={[
      { name: "Home", item: "https://biofinance.it" },
      { name: "Enti Locali e Sanità", item: "https://biofinance.it/enti-locali-sanita" }
      ]} />
      <EntiLocaliSanitaHub />
    </>
  );
}