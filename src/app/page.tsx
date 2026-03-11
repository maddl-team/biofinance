import type { Metadata } from "next";
import Home from "../views/Home";

export const metadata: Metadata = {
  title: "Biofinance: Cessione del Quinto Online | Preventivo Rapido e Sicuro",
  description: "Specialisti in Cessione del Quinto per Dipendenti e Pensionati. Tassi agevolati, zero spese anticipate e gestione anche con segnalazioni CRIF. Calcola la rata.",
  alternates: {
    canonical: "https://biofinance.it",
  },
  openGraph: {
    title: "Biofinance: Cessione del Quinto Online | Preventivo Rapido e Sicuro",
    description: "Specialisti in Cessione del Quinto per Dipendenti e Pensionati. Tassi agevolati, zero spese anticipate e gestione anche con segnalazioni CRIF. Calcola la rata.",
  },
};

export default function Page() {
  return <Home />;
}
