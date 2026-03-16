import type { Metadata } from 'next';
import LavoraConNoi from '../../views/LavoraConNoi';

export const metadata: Metadata = {
    title: 'Lavora con Noi | Carriere in Biofinance - Specialisti Cessione del Quinto',
    description: 'Entra a far parte del team Biofinance. Cerchiamo consulenti del credito e professionisti per l\'agenzia finanziaria più veloce e innovativa d\'Italia. Candidati ora.',
};

export default function Page() {
    return <LavoraConNoi />;
}
