import type { Metadata } from 'next';
import AnticipoTFS from '../../views/AnticipoTFS';

export const metadata: Metadata = {
    title: 'Anticipo TFS Online: Liquidità Immediata per Neopensionati Statali',
    description: "Sei un ex dipendente statale in pensione? Non aspettare i tempi dell'INPS. Ottieni subito il tuo Anticipo TFS con Biofinance a tassi agevolati. Preventivo gratuito.",
};

export default function Page() {
    return <AnticipoTFS />;
}
