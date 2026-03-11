import React from "react";

interface ServiceJsonLdProps {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
}

const ServiceJsonLd: React.FC<ServiceJsonLdProps> = ({
  name,
  description,
  url,
  serviceType,
}) => {
  const payload: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "FinancialService",
      name: "Biofinance",
      url: "https://biofinance.it",
      logo: "https://biofinance.it/img/logo_biofinance_header.png",
    },
  };

  if (serviceType) {
    payload.serviceType = serviceType;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(payload).replace(/</g, "\\u003c"),
      }}
    />
  );
};

export default ServiceJsonLd;
