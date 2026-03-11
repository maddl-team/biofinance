import type { Metadata } from "next";
import ForzeArmate from "../../views/ForzeArmate";

export const metadata: Metadata = {
  title: "Prestiti Forze Armate e Polizia: Cessione del Quinto NoiPA",
  description: "Finanziamenti agevolati per Carabinieri, Polizia, Esercito e Guardia di Finanza. Tassi in convenzione, nessuna spesa istruttoria e gestione anche con trasferimenti.",
  openGraph: {
    title: "Prestiti Forze Armate e Polizia: Cessione del Quinto NoiPA",
    description: "Finanziamenti agevolati per Carabinieri, Polizia, Esercito e Guardia di Finanza. Tassi in convenzione, nessuna spesa istruttoria e gestione anche con trasferimenti.",
  },
};

export default function Page() {
  return <ForzeArmate />;
}
