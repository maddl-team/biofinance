import type { Metadata } from 'next';
import ServiceJsonLd from "../../components/seo/ServiceJsonLd";
import BreadcrumbJsonLd from "../../components/seo/BreadcrumbJsonLd";
import AnticipoTFS from '../../views/AnticipoTFS';

export const metadata: Metadata = {
    title: 'Anticipo TFS Online: Liquidità Immediata per Neopensionati Statali',
    description: "Sei un ex dipendente statale in pensione? Non aspettare i tempi dell'INPS. Ottieni subito il tuo Anticipo TFS con Biofinance a tassi agevolati. Preventivo gratuito.",
  alternates: {
    canonical: "https://biofinance.it/anticipo-tfs",
  },
};

export default function Page() {
    return (
    <>
      <ServiceJsonLd name="Anticipo TFS" description="Liquidità immediata per ex dipendenti statali in attesa del TFS INPS." url="https://biofinance.it/anticipo-tfs" serviceType="Anticipo TFS" />

      <BreadcrumbJsonLd items={[
      { name: "Home", item: "https://biofinance.it" },
      { name: "Dipendenti Statali", item: "https://biofinance.it/dipendenti-statali" },
      { name: "Anticipo TFS", item: "https://biofinance.it/anticipo-tfs" }
      ]} />
      <AnticipoTFS />
    </>
  );
}