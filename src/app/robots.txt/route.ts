import { FRONTEND_URL } from "../../lib/wp/config";

export function GET() {
    const body = [
        "User-Agent: *",
        "Allow: /",
        "",
        `# LLM context: ${FRONTEND_URL}/llms.txt`,
        `Host: ${FRONTEND_URL}`,
        `Sitemap: ${FRONTEND_URL}/sitemap.xml`,
    ].join("\n");

    return new Response(body, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
        },
    });
}
