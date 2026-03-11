import type { Metadata } from 'next';
import BreadcrumbJsonLd from "../../components/seo/BreadcrumbJsonLd";
import Municipalizzate from '../../views/Municipalizzate';

export const metadata: Metadata = {
    title: 'Prestiti Dipendenti Municipalizzate: Cessione del Quinto',
    description: 'Lavori in una municipalizzata come Autolinee Toscane o Alia? Ottieni liquidità immediata con la Cessione del Quinto. Tassi fissi e trattenuta in busta paga.',
  alternates: {
    canonical: "https://biofinance.it/prestiti-municipalizzate",
  },
};

export default function Page() {
    return (
    <>
      <BreadcrumbJsonLd items={[
      { name: "Home", item: "https://biofinance.it" },
      { name: "Enti Locali e Sanità", item: "https://biofinance.it/enti-locali-sanita" },
      { name: "Prestiti Municipalizzate", item: "https://biofinance.it/prestiti-municipalizzate" }
      ]} />
      <Municipalizzate />
    </>
  );
}