import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

/**
 * On-demand revalidation endpoint for WordPress content updates.
 * 
 * Expected payload (POST):
 * {
 *   "slug": "string",
 *   "categorySlug": "string"
 * }
 * 
 * Expected query params (GET/POST):
 * ?secret=YOUR_SECRET
 * ?slug=string
 * ?categorySlug=string
 */
export async function POST(req: NextRequest) {
    return handleRevalidate(req);
}

export async function GET(req: NextRequest) {
    return handleRevalidate(req);
}

async function handleRevalidate(req: NextRequest) {
    const url = new URL(req.url);
    const secret = url.searchParams.get("secret") || req.headers.get("x-revalidate-secret");

    // 1. Check Secret
    if (!secret || secret !== process.env.REVALIDATE_SECRET) {
        return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    try {
        let slug: string | null = url.searchParams.get("slug");
        let categorySlug: string | null = url.searchParams.get("categorySlug");

        // If POST, try to get data from body
        if (req.method === "POST") {
            try {
                const body = await req.json();
                if (body.slug) slug = body.slug;
                if (body.categorySlug) categorySlug = body.categorySlug;
            } catch (e) {
                // Ignore body parse errors if query params might be present
            }
        }

        const revalidatedPaths: string[] = [];

        // 2. Always revalidate the main blog listing
        revalidatePath("/blog");
        revalidatedPaths.push("/blog");

        // 3. Revalidate specific post
        if (slug) {
            const postPath = `/blog/${slug}`;
            revalidatePath(postPath);
            revalidatedPaths.push(postPath);
        }

        // 4. Revalidate specific category
        if (categorySlug) {
            const categoryPath = `/blog/categoria/${categorySlug}`;
            revalidatePath(categoryPath);
            revalidatedPaths.push(categoryPath);
        }

        return NextResponse.json({
            revalidated: true,
            now: Date.now(),
            paths: revalidatedPaths
        });
    } catch (err) {
        return NextResponse.json({ message: "Error revalidating", error: err }, { status: 500 });
    }
}
