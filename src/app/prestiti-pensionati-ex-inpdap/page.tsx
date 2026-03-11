import type { Metadata } from "next";
import PensionatiExInpdap from "../../views/PensionatiExInpdap";

export const metadata: Metadata = {
  title: "Prestiti Pensionati Ex-INPDAP: Tassi Convenzione Pubblica",
  description: "Sei un pensionato pubblico (ex statale)? Scopri i tassi riservati alla Gestione Ex-INPDAP. Prestiti agevolati per ex dipendenti pubblici e statali.",
  openGraph: {
    title: "Prestiti Pensionati Ex-INPDAP: Tassi Convenzione Pubblica",
    description: "Sei un pensionato pubblico (ex statale)? Scopri i tassi riservati alla Gestione Ex-INPDAP. Prestiti agevolati per ex dipendenti pubblici e statali.",
  },
};

export default function Page() {
  return <PensionatiExInpdap />;
}
