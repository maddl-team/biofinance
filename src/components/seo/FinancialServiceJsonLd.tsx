import React from "react";

const FinancialServiceJsonLd: React.FC = () => {
  const payload = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "Biofinance",
    url: "https://biofinance.it",
    logo: "https://biofinance.it/img/logo_biofinance_header.png",
    description:
      "Agenzia in Attività Finanziaria specializzata in Cessione del Quinto e Prestiti Personali. Soluzioni su misura, trasparenti e sicure per dipendenti e pensionati.",
    email: "info@biofinance.it",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via Mezzomiglio 22/D",
      postalCode: "51018",
      addressLocality: "Pieve a Nievole",
      addressRegion: "PT",
      addressCountry: "IT",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(payload).replace(/</g, "\\u003c"),
      }}
    />
  );
};

export default FinancialServiceJsonLd;
