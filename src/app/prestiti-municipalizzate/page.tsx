import type { Metadata } from 'next';
import Municipalizzate from '../../views/Municipalizzate';

export const metadata: Metadata = {
    title: 'Prestiti Dipendenti Municipalizzate: Cessione del Quinto',
    description: 'Lavori in una municipalizzata come Autolinee Toscane o Alia? Ottieni liquidità immediata con la Cessione del Quinto. Tassi fissi e trattenuta in busta paga.',
};

export default function Page() {
    return <Municipalizzate />;
}
