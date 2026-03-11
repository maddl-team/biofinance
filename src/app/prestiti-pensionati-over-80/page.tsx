import type { Metadata } from "next";
import BreadcrumbJsonLd from "../../components/seo/BreadcrumbJsonLd";
import PensionatiOver80 from "../../views/PensionatiOver80";

export const metadata: Metadata = {
  title: "Prestiti Pensionati Over 80: Cessione fino a 88 Anni",
  description: "Hai più di 80 anni? Con Biofinance puoi ottenere credito fino ai 88 anni (a scadenza). Assicurazione vita inclusa e nessuna visita medica.",
  alternates: {
    canonical: "https://biofinance.it/prestiti-pensionati-over-80",
  },
  openGraph: {
    title: "Prestiti Pensionati Over 80: Cessione fino a 88 Anni",
    description: "Hai più di 80 anni? Con Biofinance puoi ottenere credito fino ai 88 anni (a scadenza). Assicurazione vita inclusa e nessuna visita medica.",
  },
};

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd items={[
      { name: "Home", item: "https://biofinance.it" },
      { name: "Prestiti Pensionati", item: "https://biofinance.it/prestiti-pensionati" },
      { name: "Pensionati Over 80", item: "https://biofinance.it/prestiti-pensionati-over-80" }
      ]} />
      <PensionatiOver80 />
    </>
  );
}