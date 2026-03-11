import type { Metadata } from 'next';
import EntiLocaliSanitaHub from '../../views/EntiLocaliSanitaHub';

export const metadata: Metadata = {
    title: 'Prestiti Enti Locali e Sanità: Cessione del Quinto Agevolata',
    description: 'Finanziamenti per dipendenti di Comuni, Regioni, ASL e Ospedali. Gestione diretta con le ragionerie locali per una liquidità rapida. Scopri le convenzioni.',
};

export default function Page() {
    return <EntiLocaliSanitaHub />;
}
