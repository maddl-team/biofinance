import type { Metadata } from "next";
import ChiSiamo from "../../views/ChiSiamo";

export const metadata: Metadata = {
  title: "Chi Siamo: Biofinance Agenzia OAM | I Nostri Consulenti",
  description: "Conosci il team Biofinance. Iscrizione OAM n. A15318. Oltre 20 anni di esperienza nella Cessione del Quinto. Trasparenza, etica e volti reali al tuo servizio.",
  openGraph: {
    title: "Chi Siamo: Biofinance Agenzia OAM | I Nostri Consulenti",
    description: "Conosci il team Biofinance. Iscrizione OAM n. A15318. Oltre 20 anni di esperienza nella Cessione del Quinto. Trasparenza, etica e volti reali al tuo servizio.",
  },
};

export default function Page() {
  return <ChiSiamo />;
}
