import type { Metadata } from "next";
import "./globals.css";
import AppShell from "../components/layout/AppShell";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import TransparentInformation from "../components/layout/TransparentInformation";
import TransparencyLinks from "../components/layout/TransparencyLinks";
import ScrollToTop from "../components/ui/ScrollToTop";
import FinancialServiceJsonLd from "../components/seo/FinancialServiceJsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://biofinance.it"),
  title: {
    default: "Biofinance",
    template: "%s | Biofinance",
  },
  description:
    "Agenzia in Attività Finanziaria specializzata in Cessione del Quinto e Prestiti Personali. Soluzioni su misura, trasparenti e sicure per dipendenti e pensionati.",
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://biofinance.it",
    siteName: "Biofinance",
    title: "Biofinance",
    description:
      "Agenzia in Attività Finanziaria specializzata in Cessione del Quinto e Prestiti Personali. Soluzioni su misura, trasparenti e sicure per dipendenti e pensionati.",
    images: [
      {
        url: "/img/logo_biofinance_header.png",
        width: 800,
        height: 800,
        alt: "Biofinance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Biofinance",
    description:
      "Agenzia in Attività Finanziaria specializzata in Cessione del Quinto e Prestiti Personali. Soluzioni su misura, trasparenti e sicure per dipendenti e pensionati.",
    images: ["/img/logo_biofinance_header.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <head>
        <link rel="preconnect" href="https://cdn.trustindex.io" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Biofinance",
              url: "https://biofinance.it",
              logo: "https://biofinance.it/img/logo_biofinance_header.png",
            }).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Biofinance",
              url: "https://biofinance.it",
            }).replace(/</g, "\\u003c"),
          }}
        />
        <FinancialServiceJsonLd />
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
