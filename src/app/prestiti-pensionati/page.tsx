import type { Metadata } from "next";
import BreadcrumbJsonLd from "../../components/seo/BreadcrumbJsonLd";
import Pensionati from "../../views/Pensionati";

export const metadata: Metadata = {
  title: "Prestiti Pensionati INPS in Convenzione: Cessione del Quinto",
  description: "Cessione del Quinto per pensionati INPS ed ex-INPDAP. Tassi agevolati in convenzione, rata trattenuta dal cedolino e assicurazione vita inclusa fino a 85 anni.",
  alternates: {
    canonical: "https://biofinance.it/prestiti-pensionati",
  },
  openGraph: {
    title: "Prestiti Pensionati INPS in Convenzione: Cessione del Quinto",
    description: "Cessione del Quinto per pensionati INPS ed ex-INPDAP. Tassi agevolati in convenzione, rata trattenuta dal cedolino e assicurazione vita inclusa fino a 85 anni.",
  },
};

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd items={[
      { name: "Home", item: "https://biofinance.it" },
      { name: "Prestiti Pensionati", item: "https://biofinance.it/prestiti-pensionati" }
      ]} />
      <Pensionati />
    </>
  );
}