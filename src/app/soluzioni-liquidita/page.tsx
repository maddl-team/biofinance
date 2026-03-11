import type { Metadata } from 'next';
import BreadcrumbJsonLd from "../../components/seo/BreadcrumbJsonLd";
import SoluzioniLiquidita from '../../views/SoluzioniLiquidita';

export const metadata: Metadata = {
    title: 'Soluzioni per Problemi di Liquidità: Consolidamento e Doppio Quinto',
    description: 'Hai bisogno di più soldi o hai problemi di accesso al credito? Scopri i prodotti alternativi di Biofinance: Delegazione di Pagamento, Consolidamento e prestiti per segnalati CRIF.',
  alternates: {
    canonical: "https://biofinance.it/soluzioni-liquidita",
  },
};

export default function Page() {
    return (
    <>
      <BreadcrumbJsonLd items={[
      { name: "Home", item: "https://biofinance.it" },
      { name: "Soluzioni Liquidità", item: "https://biofinance.it/soluzioni-liquidita" }
      ]} />
      <SoluzioniLiquidita />
    </>
  );
}