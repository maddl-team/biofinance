import type { Metadata } from 'next';
import Contatti from '../../views/Contatti';

export const metadata: Metadata = {
    title: 'Contatti e Sedi Biofinance: Parla Subito con un Consulente OAM',
    description: 'Contatta Biofinance per il tuo preventivo gratuito. Trova i nostri recapiti telefonici, WhatsApp, e-mail e PEC. Sedi in tutta Italia per la tua Cessione del Quinto.',
};

export default function Page() {
    return <Contatti />;
}
