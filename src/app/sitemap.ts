import type { MetadataRoute } from "next";

const baseUrl = "https://biofinance.it";

const routes = [
  "/",
  "/anticipo-tfs",
  "/calcolo-cessione-del-quinto",
  "/cessione-del-quinto",
  "/chi-siamo",
  "/consolidamento-debiti",
  "/contatti",
  "/delegazione-di-pagamento",
  "/dipendenti-privati",
  "/dipendenti-statali",
  "/enti-locali-sanita",
  "/prestiti-enti-locali",
  "/prestiti-forze-armate",
  "/prestiti-grandi-aziende",
  "/prestiti-municipalizzate",
  "/prestiti-neoassunti",
  "/prestiti-pensionati",
  "/prestiti-pensionati-ex-inpdap",
  "/prestiti-pensionati-over-80",
  "/prestiti-sanita",
  "/prestiti-scuola-miur",
  "/prestiti-segnalati-crif",
  "/recensioni",
  "/rinnovo-cessione-del-quinto",
  "/soluzioni-liquidita",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
  }));
}

export const dynamic = "force-static";
