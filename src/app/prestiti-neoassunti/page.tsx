import type { Metadata } from "next";
import Neoassunti from "../../views/Neoassunti";

export const metadata: Metadata = {
  title: "Prestiti per Neoassunti: Requisiti e Anzianità Minima 2026",
  description: "Sei stato assunto da poco? Scopri dopo quanti mesi puoi chiedere la Cessione del Quinto. Soluzioni per chi ha cambiato lavoro e trasferito il TFR.",
  openGraph: {
    title: "Prestiti per Neoassunti: Requisiti e Anzianità Minima 2026",
    description: "Sei stato assunto da poco? Scopri dopo quanti mesi puoi chiedere la Cessione del Quinto. Soluzioni per chi ha cambiato lavoro e trasferito il TFR.",
  },
};

export default function Page() {
  return <Neoassunti />;
}
