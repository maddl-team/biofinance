import { WPPost, WPCategory, BlogPost, BlogCategory } from "./types";
import { WORDPRESS_URL, FRONTEND_URL } from "./config";

/**
 * Normalizes a URL from WordPress to Frontend
 */
export function normalizeUrl(url: string | undefined): string {
    if (!url) return "";
    return url.replace(WORDPRESS_URL, FRONTEND_URL);
}

const BLACKLIST_PATHS = [
    "/wp-content/",
    "/wp-admin/",
    "/wp-login.php",
    "/wp-json/",
    "/feed/",
    "/tag/",
    "/author/",
    "/search/",
];

/**
 * Normalizes internal links within HTML content (posts and categories)
 * Uses a prudent approach by targetting only href attributes and using URL parsing.
 */
export function normalizeHtmlContent(html: string): string {
    if (!html) return "";

    // Escape special characters in WORDPRESS_URL for safe Regex usage
    const escapedWpUrl = WORDPRESS_URL.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const hrefRegex = new RegExp(`href="(${escapedWpUrl}([^"]*))"`, 'g');

    // 1. Normalize Href Links
    const contentWithLinks = html.replace(hrefRegex, (match, fullUrl) => {
        try {
            const url = new URL(fullUrl);
            const pathname = url.pathname;
            const search = url.search;
            const hash = url.hash;

            // 1.1 Blacklist & Root Check: exclude system paths, media, feeds, and the root itself
            if (pathname === "/" || BLACKLIST_PATHS.some(path => pathname.includes(path))) {
                return match;
            }

            // 1.2 Categories: /category/{slug}/ -> /blog/categoria/{slug}/
            if (pathname.startsWith("/category/")) {
                const categoryPath = pathname.replace("/category/", "/blog/categoria/");
                return `href="${FRONTEND_URL}${categoryPath}${search}${hash}"`;
            }

            // 1.3 Posts: /{slug}/ -> /blog/{slug}/
            // We assume any other non-blacklisted path with length > 1 is a post slug
            if (pathname.length > 1) {
                return `href="${FRONTEND_URL}/blog${pathname}${search}${hash}"`;
            }

            return match;
        } catch (e) {
            // Safe fallback if URL parsing fails
            return match;
        }
    });

    // 2. Optimize Images (Add loading="lazy" and decoding="async" if missing)
    return contentWithLinks.replace(/<img([^>]*)>/g, (match, attributes) => {
        let newAttributes = attributes;
        if (!attributes.includes('loading=')) {
            newAttributes += ' loading="lazy"';
        }
        if (!attributes.includes('decoding=')) {
            newAttributes += ' decoding="async"';
        }
        return `<img${newAttributes}>`;
    });
}

/**
 * Helper to slugify text for HTML IDs
 */
function slugify(text: string): string {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')     // Replace spaces with -
        .replace(/[^\w-]+/g, '')   // Remove all non-word chars
        .replace(/--+/g, '-')      // Replace multiple - with single -
        .replace(/^-+/, '')        // Trim - from start of text
        .replace(/-+$/, '');       // Trim - from end of text
}

/**
 * Helper to decode common HTML entities from WordPress
 */
function decodeHtmlEntities(text: string): string {
    return text
        .replace(/&#8217;/g, "'")
        .replace(/&#8211;/g, "–")
        .replace(/&#8220;/g, "“")
        .replace(/&#8221;/g, "”")
        .replace(/&#038;/g, "&")
        .replace(/&amp;/g, "&")
        .replace(/&quot;/g, '"')
        .replace(/&apos;/g, "'")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&hellip;/g, "…");
}

/**
 * Extracts headings from HTML and injects IDs for Table of Contents
 */
function processHeadings(html: string): { content: string, headings: Array<{ id: string, text: string, level: number }> } {
    const headings: Array<{ id: string, text: string, level: number }> = [];

    // Regex matches h2 and h3 tags and their content
    const headingRegex = /<(h[23])([^>]*)>(.*?)<\/h[23]>/gi;

    const content = html.replace(headingRegex, (match, tag, attributes, text) => {
        const cleanText = text.replace(/<[^>]*>?/gm, '').trim(); // Strip any nested tags in heading
        const decodedText = decodeHtmlEntities(cleanText);
        const id = slugify(decodedText);
        const level = parseInt(tag.substring(1));

        headings.push({ id, text: decodedText, level });

        // Return heading with injected ID
        return `<${tag}${attributes} id="${id}">${text}</${tag}>`;
    });

    return { content, headings };
}

export function normalizePost(post: WPPost): BlogPost {
    const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0];
    const categories = post._embedded?.["wp:term"]?.[0] || [];
    const author = post._embedded?.author?.[0];

    // 1. Initial normalization of links and images
    const baseContent = normalizeHtmlContent(post.content.rendered);

    // 2. Process headings for Table of Contents
    const { content, headings } = processHeadings(baseContent);

    return {
        id: post.id,
        slug: post.slug,
        title: post.title.rendered,
        content: content,
        excerpt: normalizeHtmlContent(post.excerpt.rendered),
        date: post.date,
        featuredImage: featuredImage
            ? {
                url: featuredImage.source_url,
                alt: featuredImage.alt_text || post.title.rendered,
                width: featuredImage.media_details.width,
                height: featuredImage.media_details.height,
            }
            : undefined,
        categories: categories.map((cat) => ({
            id: cat.id,
            name: cat.name,
            slug: cat.slug,
        })),
        headings,
        author: author ? {
            name: author.name,
            description: author.description || "",
            avatarUrl: author.avatar_urls?.["96"] || author.avatar_urls?.["48"] || author.avatar_urls?.["24"]
        } : undefined,
        yoast: post.yoast_head_json || { title: post.title.rendered },
    };
}

/**
 * Transforms a WordPress Category to our internal BlogCategory type
 */
export function normalizeCategory(category: WPCategory): BlogCategory {
    return {
        id: category.id,
        name: category.name,
        slug: category.slug,
        description: category.description,
        count: category.count,
        yoast: category.yoast_head_json,
    };
}
