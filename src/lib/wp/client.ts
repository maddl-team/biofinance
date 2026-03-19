import { WPPost, WPCategory } from "./types";
import { WORDPRESS_API_URL } from "./config";

/**
 * Common fetch wrapper for WordPress REST API
 */
export async function wpFetch<T>(
    endpoint: string,
    options: RequestInit = {}
): Promise<T> {
    const baseUrl = WORDPRESS_API_URL.endsWith("/")
        ? WORDPRESS_API_URL.slice(0, -1)
        : WORDPRESS_API_URL;

    const path = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
    const url = `${baseUrl}${path}`;

    const response = await fetch(url, {
        ...options,
        next: {
            revalidate: 3600, // Default ISR: 1 hour
            ...options.next,
        },
    });

    if (!response.ok) {
        console.error(`WP Error: ${response.status} ${response.statusText} at ${url}`);
        throw new Error(`WordPress API error: ${response.status}`);
    }

    return response.json() as Promise<T>;
}

/**
 * Fetch wrapper for WordPress REST API that also returns pagination metadata
 */
export async function wpFetchWithMeta<T>(
    endpoint: string,
    options: RequestInit = {}
): Promise<{ data: T; totalPages: number; totalPosts: number }> {
    const baseUrl = WORDPRESS_API_URL.endsWith("/")
        ? WORDPRESS_API_URL.slice(0, -1)
        : WORDPRESS_API_URL;

    const path = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
    const url = `${baseUrl}${path}`;

    const response = await fetch(url, {
        ...options,
        next: {
            revalidate: 3600,
            ...options.next,
        },
    });

    if (!response.ok) {
        console.error(`WP Error: ${response.status} ${response.statusText} at ${url}`);
        throw new Error(`WordPress API error: ${response.status}`);
    }

    const data = await response.json();
    const totalPosts = parseInt(response.headers.get("X-WP-Total") || "0", 10);
    const totalPages = parseInt(response.headers.get("X-WP-TotalPages") || "0", 10);

    return { data, totalPages, totalPosts };
}

/**
 * Fetch a list of posts with pagination
 */
export async function getPosts(page: number = 1, perPage: number = 10, extraParams: string = "") {
    const extra = extraParams ? `&${extraParams}` : "";
    const endpoint = `/wp/v2/posts?_embed&page=${page}&per_page=${perPage}${extra}`;
    const { data, totalPages, totalPosts } = await wpFetchWithMeta<WPPost[]>(endpoint);

    return {
        posts: data,
        totalPages,
        totalPosts,
    };
}

/**
 * Fetch a single post by slug
 */
export async function getPostBySlug(slug: string) {
    const posts = await wpFetch<WPPost[]>(`/wp/v2/posts?slug=${slug}&_embed`);
    return posts.length > 0 ? posts[0] : null;
}

/**
 * Fetch all categories
 */
export async function getCategories() {
    return wpFetch<WPCategory[]>("/wp/v2/categories?per_page=100");
}

/**
 * Fetch a single category by slug
 */
export async function getCategoryBySlug(slug: string) {
    const categories = await wpFetch<WPCategory[]>(`/wp/v2/categories?slug=${slug}`);
    return categories.length > 0 ? categories[0] : null;
}
