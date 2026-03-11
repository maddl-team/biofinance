import type { Metadata } from "next";
import ConsolidamentoDebiti from "../../views/ConsolidamentoDebiti";

export const metadata: Metadata = {
  title: "Consolidamento Debiti: Unica Rata con Cessione del Quinto",
  description: "Troppe rate a fine mese? Accorpa prestiti, carte revolving e finanziamenti in un'unica rata sostenibile trattenuta in busta paga. Riduci lo stress finanziario.",
  openGraph: {
    title: "Consolidamento Debiti: Unica Rata con Cessione del Quinto",
    description: "Troppe rate a fine mese? Accorpa prestiti, carte revolving e finanziamenti in un'unica rata sostenibile trattenuta in busta paga. Riduci lo stress finanziario.",
  },
};

export default function Page() {
  return <ConsolidamentoDebiti />;
}
