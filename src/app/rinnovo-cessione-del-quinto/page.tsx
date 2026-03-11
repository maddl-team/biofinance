import type { Metadata } from "next";
import RinnovoCessione from "../../views/RinnovoCessione";

export const metadata: Metadata = {
  title: "Rinnovo Cessione del Quinto: Calcolo e Requisiti 2026",
  description: "Hai già una Cessione in corso? Scopri quando puoi rinnovarla per ottenere nuova liquidità. Verifica gratuita del conteggio estintivo e recupero interessi.",
  openGraph: {
    title: "Rinnovo Cessione del Quinto: Calcolo e Requisiti 2026",
    description: "Hai già una Cessione in corso? Scopri quando puoi rinnovarla per ottenere nuova liquidità. Verifica gratuita del conteggio estintivo e recupero interessi.",
  },
};

export default function Page() {
  return <RinnovoCessione />;
}
