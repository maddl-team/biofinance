import type { Metadata } from "next";
import "./globals.css";
import AppShell from "../components/layout/AppShell";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import TransparentInformation from "../components/layout/TransparentInformation";
import TransparencyLinks from "../components/layout/TransparencyLinks";
import ScrollToTop from "../components/ui/ScrollToTop";
import FinancialServiceJsonLd from "../components/seo/FinancialServiceJsonLd";
import Script from "next/script";

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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-57VPQZDD"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* Google Consent Mode Default State */}
        <Script id="google-consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'functionality_storage': 'denied',
              'security_storage': 'granted',
              'wait_for_update': 500
            });
            window.dataLayer.push({
              'event': 'default_consent'
            });
          `}
        </Script>
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
        {/* Iubenda Cookie Solution Configuration */}
        <Script id="iubenda-config" strategy="beforeInteractive">
          {`
            var _iub = _iub || [];
            _iub.csConfiguration = {
              "askConsentAtCookiePolicy":true,
              "floatingPullLeft":true,
              "perPurposeConsent":true,
              "siteId":2812706,
              "whitelabel":false,
              "cookiePolicyId":12345678, // Placeholder - customer should check this
              "lang":"it",
              "googleConsentMode": true,
              "banner": {
                "acceptButtonDisplay":true,
                "customizeButtonDisplay":true,
                "position":"float-top-center",
                "acceptButtonColor":"#10B981",
                "acceptButtonCaptionColor":"white",
                "customizeButtonColor":"#DADADA",
                "customizeButtonCaptionColor":"#4D4D4D",
                "rejectButtonDisplay":true,
                "rejectButtonColor":"#DADADA",
                "rejectButtonCaptionColor":"#4D4D4D",
                "textColor":"black",
                "backgroundColor":"white"
              }
            };
          `}
        </Script>
        <Script
          id="iubenda-sync"
          src="https://cs.iubenda.com/sync/2812706.js"
          strategy="beforeInteractive"
        />
        <Script
          id="iubenda-main"
          src="https://cdn.iubenda.com/cs/iubenda_cs.js"
          strategy="beforeInteractive"
          async
        />
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-57VPQZDD');
          `}
        </Script>
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
