import type { Metadata } from "next";
import DelegazionePagamento from "../../views/DelegazionePagamento";

export const metadata: Metadata = {
  title: "Delegazione di Pagamento: Il "Doppio Quinto" dello Stipendio",
  description: "Hai già la Cessione del Quinto? Richiedi la Delega di Pagamento per ottenere ulteriore liquidità. Impegna un secondo 20% del tuo stipendio. Solo dipendenti.",
  openGraph: {
    title: "Delegazione di Pagamento: Il "Doppio Quinto" dello Stipendio",
    description: "Hai già la Cessione del Quinto? Richiedi la Delega di Pagamento per ottenere ulteriore liquidità. Impegna un secondo 20% del tuo stipendio. Solo dipendenti.",
  },
};

export default function Page() {
  return <DelegazionePagamento />;
}
