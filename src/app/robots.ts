import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://biofinance.it/sitemap.xml",
    host: "https://biofinance.it",
  };
}

export const dynamic = "force-static";
