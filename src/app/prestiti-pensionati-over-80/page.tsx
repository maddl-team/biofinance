import type { Metadata } from "next";
import PensionatiOver80 from "../../views/PensionatiOver80";

export const metadata: Metadata = {
  title: "Prestiti Pensionati Over 80: Cessione fino a 88 Anni",
  description: "Hai più di 80 anni? Con Biofinance puoi ottenere credito fino ai 88 anni (a scadenza). Assicurazione vita inclusa e nessuna visita medica.",
  openGraph: {
    title: "Prestiti Pensionati Over 80: Cessione fino a 88 Anni",
    description: "Hai più di 80 anni? Con Biofinance puoi ottenere credito fino ai 88 anni (a scadenza). Assicurazione vita inclusa e nessuna visita medica.",
  },
};

export default function Page() {
  return <PensionatiOver80 />;
}
