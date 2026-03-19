import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPosts, getCategoryBySlug } from "../../../../lib/wp/client";
import { normalizePost, normalizeCategory } from "../../../../lib/wp/normalizers";
import { mapYoastToMetadata, getCategoryMetadata } from "../../../../lib/wp/seo";
import BlogView from "../../../../views/Blog";

export const revalidate = 3600; // 1 hour ISR

interface PageProps {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;

    try {
        const rawCategory = await getCategoryBySlug(slug);
        if (!rawCategory) return { title: "Categoria non trovata" };

        const category = normalizeCategory(rawCategory);
        return getCategoryMetadata(category);
    } catch (e) {
        return { title: "Blog | Biofinance" };
    }
}

export default async function CategoryPage({ params, searchParams }: PageProps) {
    const { slug } = await params;
    const sParams = await searchParams;
    const pageInput = typeof sParams.page === 'string' ? parseInt(sParams.page, 10) : 1;
    const currentPage = isNaN(pageInput) || pageInput < 1 ? 1 : pageInput;

    try {
        const rawCategory = await getCategoryBySlug(slug);

        if (!rawCategory) {
            notFound();
        }

        const category = normalizeCategory(rawCategory);
        const { posts: rawPosts, totalPages } = await getPosts(currentPage, 10, `categories=${category.id}`);

        // SEO: Trigger 404 if the requested page is out of bounds for an existing category
        if ((totalPages > 0 && currentPage > totalPages) || (totalPages === 0 && currentPage > 1)) {
            notFound();
        }

        const posts = rawPosts.map(normalizePost);

        return (
            <BlogView
                posts={posts}
                title={category.name}
                description={category.description || `Scopri tutti gli articoli relativi a ${category.name}.`}
                yoast={rawCategory.yoast_head_json}
                currentPage={currentPage}
                totalPages={totalPages}
                baseUrl={`/blog/categoria/${slug}`}
            />
        );
    } catch (error) {
        console.error(`Error loading category ${slug}:`, error);
        notFound();
    }
}
