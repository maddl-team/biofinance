import type { MetadataRoute } from "next";
import { getPosts, getCategories } from "../lib/wp/client";
import { FRONTEND_URL } from "../lib/wp/config";

const baseUrl = FRONTEND_URL;

const staticRoutes = [
  "/",
  "/blog",
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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();

  // 1. Static Routes
  const staticItems: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
  }));

  try {
    // 2. Fetch Blog Posts & Categories from WordPress
    const [{ posts }, categories] = await Promise.all([
      getPosts(1, 100),
      getCategories()
    ]);

    const postItems: MetadataRoute.Sitemap = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
    }));

    const categoryItems: MetadataRoute.Sitemap = categories.map((cat) => ({
      url: `${baseUrl}/blog/categoria/${cat.slug}`,
      lastModified,
    }));

    return [...staticItems, ...postItems, ...categoryItems];
  } catch (error) {
    console.error("Error generating dynamic sitemap:", error);
    // Fallback to static items only in case of API failure
    return staticItems;
  }
}
