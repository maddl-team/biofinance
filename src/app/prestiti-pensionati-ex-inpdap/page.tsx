import type { Metadata } from "next";
import BreadcrumbJsonLd from "../../components/seo/BreadcrumbJsonLd";
import PensionatiExInpdap from "../../views/PensionatiExInpdap";

export const metadata: Metadata = {
  title: "Prestiti Pensionati Ex-INPDAP: Tassi Convenzione Pubblica",
  description: "Sei un pensionato pubblico (ex statale)? Scopri i tassi riservati alla Gestione Ex-INPDAP. Prestiti agevolati per ex dipendenti pubblici e statali.",
  alternates: {
    canonical: "https://biofinance.it/prestiti-pensionati-ex-inpdap",
  },
  openGraph: {
    title: "Prestiti Pensionati Ex-INPDAP: Tassi Convenzione Pubblica",
    description: "Sei un pensionato pubblico (ex statale)? Scopri i tassi riservati alla Gestione Ex-INPDAP. Prestiti agevolati per ex dipendenti pubblici e statali.",
  },
};

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd items={[
      { name: "Home", item: "https://biofinance.it" },
      { name: "Prestiti Pensionati", item: "https://biofinance.it/prestiti-pensionati" },
      { name: "Pensionati Ex-INPDAP", item: "https://biofinance.it/prestiti-pensionati-ex-inpdap" }
      ]} />
      <PensionatiExInpdap />
    </>
  );
}