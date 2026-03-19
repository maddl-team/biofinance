/**
 * Centralized configuration for the WordPress Headless integration.
 * All URLs are derived from environment variables to ensure compatibility
 * across Production, Staging, and Preview environments.
 */

// 1. WordPress API and CMS URLs
export const WORDPRESS_API_URL =
    process.env.WORDPRESS_API_URL || "https://cms.biofinance.it/wp-json";

// Derive WORDPRESS_URL (the CMS base domain) from WORDPRESS_API_URL
// This handles cases with/without trailing slash and /wp-json path.
export const WORDPRESS_URL = WORDPRESS_API_URL
    .replace(/\/wp-json\/?$/, "") // Remove /wp-json or /wp-json/
    .replace(/\/$/, "");          // Remove any remaining trailing slash

// 2. Frontend Public Domain
// We prefer a server-side SITE_URL, but fallback to NEXT_PUBLIC_BASE_URL if needed.
export const FRONTEND_URL =
    process.env.SITE_URL ||
    process.env.NEXT_PUBLIC_BASE_URL ||
    "https://biofinance.it";

// 3. Application Routes
export const BLOG_PATH = "/blog";
export const CATEGORY_PATH = `${BLOG_PATH}/categoria`;
