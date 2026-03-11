import type { Metadata } from "next";
import BreadcrumbJsonLd from "../../components/seo/BreadcrumbJsonLd";
import ChiSiamo from "../../views/ChiSiamo";

export const metadata: Metadata = {
  title: "Chi Siamo: Biofinance Agenzia OAM | I Nostri Consulenti",
  description: "Conosci il team Biofinance. Iscrizione OAM n. A15318. Oltre 20 anni di esperienza nella Cessione del Quinto. Trasparenza, etica e volti reali al tuo servizio.",
  alternates: {
    canonical: "https://biofinance.it/chi-siamo",
  },
  openGraph: {
    title: "Chi Siamo: Biofinance Agenzia OAM | I Nostri Consulenti",
    description: "Conosci il team Biofinance. Iscrizione OAM n. A15318. Oltre 20 anni di esperienza nella Cessione del Quinto. Trasparenza, etica e volti reali al tuo servizio.",
  },
};

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd items={[
      { name: "Home", item: "https://biofinance.it" },
      { name: "Chi Siamo", item: "https://biofinance.it/chi-siamo" }
      ]} />
      <ChiSiamo />
    </>
  );
}