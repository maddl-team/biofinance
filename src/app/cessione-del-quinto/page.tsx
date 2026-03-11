import type { Metadata } from "next";
import CessioneDelQuinto from "../../views/CessioneDelQuinto";

export const metadata: Metadata = {
  title: "Cos'è la Cessione del Quinto: Guida Completa e Tassi 2026",
  description: "Guida definitiva alla Cessione del Quinto. Scopri come funziona per dipendenti e pensionati, i requisiti OAM e come ottenerla anche con segnalazioni CRIF.",
  openGraph: {
    title: "Cos'è la Cessione del Quinto: Guida Completa e Tassi 2026",
    description: "Guida definitiva alla Cessione del Quinto. Scopri come funziona per dipendenti e pensionati, i requisiti OAM e come ottenerla anche con segnalazioni CRIF.",
  },
};

export default function Page() {
  return <CessioneDelQuinto />;
}
