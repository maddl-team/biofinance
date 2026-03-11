import type { Metadata } from "next";
import DipendentiStatali from "../../views/DipendentiStatali";

export const metadata: Metadata = {
  title: "Prestiti NoiPA e Statali: Cessione del Quinto Tassi Agevolati",
  description: "Cessione del Quinto per Dipendenti Statali e Ministeriali. Gestione pratica telematica tramite portale NoiPA. Tassi fissi convenzionati e zero spese.",
  openGraph: {
    title: "Prestiti NoiPA e Statali: Cessione del Quinto Tassi Agevolati",
    description: "Cessione del Quinto per Dipendenti Statali e Ministeriali. Gestione pratica telematica tramite portale NoiPA. Tassi fissi convenzionati e zero spese.",
  },
};

export default function Page() {
  return <DipendentiStatali />;
}
