import type { Metadata } from 'next';
import SoluzioniLiquidita from '../../views/SoluzioniLiquidita';

export const metadata: Metadata = {
    title: 'Soluzioni per Problemi di Liquidità: Consolidamento e Doppio Quinto',
    description: 'Hai bisogno di più soldi o hai problemi di accesso al credito? Scopri i prodotti alternativi di Biofinance: Delegazione di Pagamento, Consolidamento e prestiti per segnalati CRIF.',
};

export default function Page() {
    return <SoluzioniLiquidita />;
}
