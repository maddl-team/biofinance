import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug } from "../../../lib/wp/client";
import { normalizePost } from "../../../lib/wp/normalizers";
import { mapYoastToMetadata } from "../../../lib/wp/seo";
import BlogPostView from "../../../views/BlogPost";
import { getPostMetadata } from "../../../lib/wp/seo";

export const revalidate = 3600; // 1 hour ISR

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;

    try {
        const rawPost = await getPostBySlug(slug);
        if (!rawPost) return { title: "Articolo non trovato" };

        const post = normalizePost(rawPost);
        return getPostMetadata(post);
    } catch (e) {
        return { title: "Blog | Biofinance" };
    }
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;

    try {
        const rawPost = await getPostBySlug(slug);

        if (!rawPost) {
            notFound();
        }

        const post = normalizePost(rawPost);

        // Fetch related posts (same categories, excluding current post)
        let relatedPosts: any[] = [];
        if (post.categories.length > 0) {
            const categoryIds = post.categories.map(c => c.id).join(',');
            try {
                const { getPosts } = await import("../../../lib/wp/client");
                const { posts: relatedPostsData } = await getPosts(1, 3, `categories=${categoryIds}&exclude=${post.id}`);
                relatedPosts = relatedPostsData.map(normalizePost);
            } catch (e) {
                console.error("Error fetching related posts:", e);
            }
        }

        return <BlogPostView post={post} relatedPosts={relatedPosts} />;
    } catch (error) {
        console.error(`Error loading post ${slug}:`, error);
        notFound();
    }
}
