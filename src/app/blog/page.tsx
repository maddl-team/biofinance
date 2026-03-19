import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPosts } from "../../lib/wp/client";
import { normalizePost } from "../../lib/wp/normalizers";
import BlogView from "../../views/Blog";

export const revalidate = 3600; // 1 hour ISR

export const metadata: Metadata = {
    title: "Blog Biofinance | Guide su Cessione del Quinto e Prestiti",
    description: "Esplora il blog di Biofinance. Guide aggiornate e consigli pratici su cessione del quinto, delega di pagamento, tassi e soluzioni per cattivi pagatori.",
    openGraph: {
        title: "Blog Biofinance | Guide su Cessione del Quinto e Prestiti",
        description: "Esplora il blog di Biofinance. Guide aggiornate e consigli pratici su cessione del quinto, delega di pagamento, tassi e soluzioni per cattivi pagatori.",
        type: "website",
        url: "/blog",
        siteName: "Biofinance",
    }
};

export default async function BlogPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const params = await searchParams;
    const page = typeof params.page === 'string' ? parseInt(params.page, 10) : 1;
    const currentPage = isNaN(page) || page < 1 ? 1 : page;

    try {
        const { posts: rawPosts, totalPages } = await getPosts(currentPage);

        // SEO: Trigger 404 if the requested page is out of bounds
        // Case 1: Blog has posts, but page is too high
        // Case 2: Blog is empty, but page requested is > 1
        if ((totalPages > 0 && currentPage > totalPages) || (totalPages === 0 && currentPage > 1)) {
            notFound();
        }

        const posts = rawPosts.map(normalizePost);

        return (
            <BlogView
                posts={posts}
                currentPage={currentPage}
                totalPages={totalPages}
            />
        );
    } catch (error) {
        console.error("Error loading blog posts:", error);
        // Fallback for real errors (API down, etc.) - maybe redundant here since error could be 404
        return <BlogView posts={[]} currentPage={1} totalPages={0} />;
    }
}
