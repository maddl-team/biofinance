export interface WPPost {
    id: number;
    date: string;
    slug: string;
    status: string;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
        protected: boolean;
    };
    excerpt: {
        rendered: string;
        protected: boolean;
    };
    featured_media: number;
    categories: number[];
    tags: number[];
    yoast_head_json?: YoastHeadJson;
    _embedded?: {
        "wp:featuredmedia"?: WPMedia[];
        "wp:term"?: WPCategory[][];
        author?: WPAuthor[];
    };
}

export interface WPAuthor {
    id: number;
    name: string;
    url: string;
    description: string;
    link: string;
    slug: string;
    avatar_urls?: Record<string, string>;
}

export interface WPCategory {
    id: number;
    count: number;
    description: string;
    link: string;
    name: string;
    slug: string;
    taxonomy: string;
    parent: number;
    yoast_head_json?: YoastHeadJson;
}

export interface WPMedia {
    id: number;
    date: string;
    slug: string;
    type: string;
    link: string;
    title: {
        rendered: string;
    };
    alt_text: string;
    media_type: string;
    mime_type: string;
    media_details: {
        width: number;
        height: number;
        file: string;
        sizes: {
            full: {
                file: string;
                width: number;
                height: number;
                mime_type: string;
                source_url: string;
            };
            medium?: {
                source_url: string;
            };
            large?: {
                source_url: string;
            };
            thumbnail?: {
                source_url: string;
            };
        };
    };
    source_url: string;
}

export interface YoastHeadJson {
    title: string;
    description?: string;
    canonical?: string;
    robots?: {
        index: string;
        follow: string;
        "max-snippet": string;
        "max-image-preview": string;
        "max-video-preview": string;
    };
    og_locale?: string;
    og_type?: string;
    og_title?: string;
    og_description?: string;
    og_url?: string;
    og_site_name?: string;
    article_published_time?: string;
    article_modified_time?: string;
    og_image?: Array<{
        width: number;
        height: number;
        url: string;
        type: string;
    }>;
    twitter_card?: string;
    twitter_misc?: Record<string, string>;
    schema?: any;
}

// Internal types for the application
export interface BlogPost {
    id: number;
    slug: string;
    title: string;
    content: string;
    excerpt: string;
    date: string;
    featuredImage?: {
        url: string;
        alt: string;
        width: number;
        height: number;
    };
    categories: Array<{
        id: number;
        name: string;
        slug: string;
    }>;
    headings?: Array<{
        id: string;
        text: string;
        level: number;
    }>;
    author?: {
        name: string;
        description: string;
        avatarUrl?: string;
    };
    yoast: YoastHeadJson;
}

export interface BlogCategory {
    id: number;
    name: string;
    slug: string;
    description: string;
    count: number;
    yoast?: YoastHeadJson;
}

export interface PaginatedResponse<T> {
    data: T[];
    totalPages: number;
    totalPosts: number;
}
