import { Metadata } from "next";
import { YoastHeadJson, BlogPost, BlogCategory } from "./types";
import { normalizeUrl } from "./normalizers";
import { FRONTEND_URL, WORDPRESS_URL } from "./config";

/**
 * Clean HTML and truncate for SEO descriptions
 * Removes tags, extra whitespace, and limits length.
 */
export function stripHtml(html: string = "", limit: number = 160): string {
    if (!html) return "";
    return html
        .replace(/<[^>]*>?/gm, " ") // Remove tags, replace with space to avoid merging words
        .replace(/&nbsp;/g, " ")      // Replace nbsp
        .replace(/\s+/g, " ")         // Normalize whitespace
        .trim()
        .substring(0, limit);
}

function toAbsoluteFrontendUrl(path: string): string {
    return `${FRONTEND_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

function normalizeBlogPostUrlFromYoast(sourceUrl: string | undefined, slug: string): string {
    if (!sourceUrl) return toAbsoluteFrontendUrl(`/blog/${slug}`);

    try {
        const parsed = new URL(sourceUrl);
        const cleanPath = parsed.pathname.replace(/\/$/, "");
        const normalizedPath = cleanPath.startsWith("/blog/") ? cleanPath : `/blog${cleanPath}`;
        return toAbsoluteFrontendUrl(normalizedPath);
    } catch {
        return toAbsoluteFrontendUrl(`/blog/${slug}`);
    }
}

function normalizeBlogCategoryUrlFromYoast(sourceUrl: string | undefined, slug: string): string {
    if (!sourceUrl) return toAbsoluteFrontendUrl(`/blog/categoria/${slug}`);

    try {
        const parsed = new URL(sourceUrl);
        const cleanPath = parsed.pathname.replace(/\/$/, "");
        let normalizedPath = cleanPath;

        if (cleanPath.startsWith("/category/")) {
            normalizedPath = cleanPath.replace(/^\/category\//, "/blog/categoria/");
        } else if (!cleanPath.startsWith("/blog/categoria/")) {
            normalizedPath = `/blog/categoria/${slug}`;
        }

        return toAbsoluteFrontendUrl(normalizedPath || `/blog/categoria/${slug}`);
    } catch {
        return toAbsoluteFrontendUrl(`/blog/categoria/${slug}`);
    }
}

function mapCmsToFrontendBlogUrls(input: string): string {
    const escapedWpUrl = WORDPRESS_URL.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const wpRootRegex = new RegExp(`${escapedWpUrl}/?`, "g");

    return input
        .replace(/https?:\/\/[^"\\\s]+\/category\/([^/"\\\s]+)\/?/g, `${FRONTEND_URL}/blog/categoria/$1/`)
        .replace(wpRootRegex, `${FRONTEND_URL}/blog/`)
        .replace(new RegExp(`${FRONTEND_URL}/blog/blog/`, "g"), `${FRONTEND_URL}/blog/`)
        .replace(new RegExp(`${FRONTEND_URL}/blog/wp-content/`, "g"), `${WORDPRESS_URL}/wp-content/`)
        .replace(new RegExp(`${FRONTEND_URL}/blog/wp-json/`, "g"), `${WORDPRESS_URL}/wp-json/`)
        .replace(new RegExp(`${FRONTEND_URL}/blog/wp-admin/`, "g"), `${WORDPRESS_URL}/wp-admin/`)
        .replace(new RegExp(`${FRONTEND_URL}/blog/wp-login\\.php`, "g"), `${WORDPRESS_URL}/wp-login.php`)
        .replace(new RegExp(`${FRONTEND_URL}/blog/#`, "g"), `${FRONTEND_URL}/#`);
}

/**
 * Generates robust Metadata for a Blog Post with fallback logic
 */
export function getPostMetadata(post: BlogPost): Metadata {
    const yoast = post.yoast;

    // 1. Canonical & OG URL
    const canonical = normalizeBlogPostUrlFromYoast(yoast.canonical, post.slug);
    const ogUrl = normalizeBlogPostUrlFromYoast(yoast.og_url || yoast.canonical, post.slug);

    // 2. Title & Description (Yoast > Excerpt > Content)
    const title = yoast.title || `${post.title} | Biofinance`;
    const description = yoast.description ||
        stripHtml(post.excerpt) ||
        stripHtml(post.content);

    // 3. Image fallback
    const images = (yoast.og_image && yoast.og_image.length > 0)
        ? yoast.og_image.map(img => ({ url: img.url, width: img.width, height: img.height }))
        : post.featuredImage
            ? [{ url: post.featuredImage.url, width: post.featuredImage.width, height: post.featuredImage.height, alt: post.featuredImage.alt }]
            : [];

    return {
        title,
        description,
        metadataBase: new URL(FRONTEND_URL),
        alternates: {
            canonical,
        },
        robots: {
            index: yoast.robots?.index !== "noindex",
            follow: yoast.robots?.follow === "follow",
        },
        openGraph: {
            title: yoast.og_title || title,
            description: yoast.og_description || description,
            url: ogUrl,
            siteName: "Biofinance",
            locale: yoast.og_locale || "it_IT",
            type: (yoast.og_type as any) || "article",
            images,
        },
        twitter: {
            card: (yoast.twitter_card as any) || "summary_large_image",
            title: yoast.og_title || title,
            description: yoast.og_description || description,
            images: images.length > 0 ? [images[0].url] : undefined,
        },
    };
}

/**
 * Generates robust Metadata for a Blog Category with fallback logic
 */
export function getCategoryMetadata(category: BlogCategory): Metadata {
    const yoast = category.yoast;

    // 1. Canonical & OG URL
    const canonical = normalizeBlogCategoryUrlFromYoast(yoast?.canonical, category.slug);
    const ogUrl = normalizeBlogCategoryUrlFromYoast(yoast?.og_url || yoast?.canonical, category.slug);

    // 2. Title & Description
    const title = (yoast && yoast.title) || `${category.name} | Blog Biofinance`;
    const description = (yoast && yoast.description) ||
        (category.description ? stripHtml(category.description) : `Tutti gli articoli relativi a ${category.name} su Biofinance.`);

    return {
        title,
        description,
        metadataBase: new URL(FRONTEND_URL),
        alternates: {
            canonical,
        },
        openGraph: {
            title: (yoast && yoast.og_title) || title,
            description: (yoast && yoast.og_description) || description,
            url: ogUrl,
            siteName: "Biofinance",
            locale: "it_IT",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: (yoast && yoast.og_title) || title,
            description: (yoast && yoast.og_description) || description,
        },
    };
}

/**
 * Generic mapper kept for simple use cases or fallback
 */
export function mapYoastToMetadata(yoast: YoastHeadJson | undefined): Metadata {
    if (!yoast) return {};

    const metadata: Metadata = {
        title: yoast.title,
        description: yoast.description,
        metadataBase: new URL(FRONTEND_URL),
        alternates: {
            canonical: normalizeUrl(yoast.canonical) || normalizeUrl(yoast.og_url),
        },
        robots: {
            index: yoast.robots?.index !== "noindex",
            follow: yoast.robots?.follow === "follow",
        },
        openGraph: {
            title: yoast.og_title || yoast.title,
            description: yoast.og_description || yoast.description,
            url: normalizeUrl(yoast.og_url),
            siteName: yoast.og_site_name || "Biofinance",
            locale: yoast.og_locale || "it_IT",
            type: (yoast.og_type as any) || "article",
            images: yoast.og_image?.map((img) => ({
                url: img.url,
                width: img.width,
                height: img.height,
                type: img.type,
            })),
        },
        twitter: {
            card: (yoast.twitter_card as any) || "summary_large_image",
            title: yoast.og_title || yoast.title,
            description: yoast.og_description || yoast.description,
        },
    };

    return metadata;
}

const ALLOWED_SCHEMA_NODES = [
    "Article",
    "BlogPosting",
    "BreadcrumbList",
    "WebPage",
];

/**
 * Normalizes the Yoast schema JSON-LD by:
 * 1. Filtering out redundant nodes (Organization, WebSite) already in the layout
 * 2. Replacing the CMS URL with the Frontend URL
 */
export function getNormalizedSchema(yoast: YoastHeadJson | undefined): string | null {
    if (!yoast?.schema) return null;

    try {
        const schema = yoast.schema as any;

        // If the schema has a graph, we filter it to avoid duplications
        if (schema["@graph"] && Array.isArray(schema["@graph"])) {
            const filteredGraph = schema["@graph"].filter((node: any) =>
                ALLOWED_SCHEMA_NODES.includes(node["@type"])
            );

            const filteredSchema = {
                ...schema,
                "@graph": filteredGraph,
            };

            const schemaStr = JSON.stringify(filteredSchema);
            return mapCmsToFrontendBlogUrls(schemaStr);
        }

        // Fallback for non-graph schema (less common in Yoast)
        const schemaStr = JSON.stringify(schema);
        return mapCmsToFrontendBlogUrls(schemaStr);
    } catch (e) {
        console.error("Error normalizing WP schema:", e);
        return null;
    }
}
