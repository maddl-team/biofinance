import type { Metadata } from 'next';
import BreadcrumbJsonLd from "../../components/seo/BreadcrumbJsonLd";
import Contatti from '../../views/Contatti';

export const metadata: Metadata = {
    title: 'Contatti e Sedi Biofinance: Parla Subito con un Consulente OAM',
    description: 'Contatta Biofinance per il tuo preventivo gratuito. Trova i nostri recapiti telefonici, WhatsApp, e-mail e PEC. Sedi in tutta Italia per la tua Cessione del Quinto.',
  alternates: {
    canonical: "https://biofinance.it/contatti",
  },
};

export default function Page() {
    return (
    <>
      <BreadcrumbJsonLd items={[
      { name: "Home", item: "https://biofinance.it" },
      { name: "Contatti", item: "https://biofinance.it/contatti" }
      ]} />
      <Contatti />
    </>
  );
}