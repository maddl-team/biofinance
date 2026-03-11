import type { Metadata } from "next";
import "./globals.css";
import AppShell from "../components/layout/AppShell";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import TransparentInformation from "../components/layout/TransparentInformation";
import TransparencyLinks from "../components/layout/TransparencyLinks";
import ScrollToTop from "../components/ui/ScrollToTop";

export const metadata: Metadata = {
  title: {
    default: "Biofinance",
    template: "%s | Biofinance",
  },
  description:
    "Agenzia in Attività Finanziaria specializzata in Cessione del Quinto e Prestiti Personali. Soluzioni su misura, trasparenti e sicure per dipendenti e pensionati.",
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "Biofinance",
    images: [
      {
        url: "/img/logo_biofinance_header.png",
        width: 800,
        height: 800,
        alt: "Biofinance",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body>
        <AppShell>
          <ScrollToTop />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <TransparentInformation />
          <TransparencyLinks />
          <Footer />
        </AppShell>
      </body>
    </html>
  );
}
