import dayjs from "dayjs";
import { SitemapStream, streamToPromise } from "sitemap";
import { createClient } from "@supabase/supabase-js";

const domain = "https://www.jenuel.dev";

const pages = [
    {
        url: domain + "/blog",
        lastmod: "2024-08-07",
    },
];

export async function GET(props: any) {
    const supabase = createClient(import.meta.env.SUPABASE_URL, import.meta.env.SUPABASE_KEY);
    const sitemap = new SitemapStream({
        hostname: domain,
    });

    for (const page of pages) {
        sitemap.write({
            url: page.url,
            lastmod: page.lastmod,
        });
    }

    let limit = props.url.searchParams.get("limit") ?? 50000;

    let clientQuery = supabase
        .from("blogs")
        .select(`id, title, summary, slug, updated_at, cover_img, blog_meta(*), tags`)
        .eq("is_active", 1)
        .order("updated_at", { ascending: false })
        .limit(limit);

    const { data, error } = await clientQuery;

    let feedItem = [];

    for (const blog of data ?? []) {
        sitemap.write({
            url: `${domain}/blog/${blog.slug}`,
            changefreq: "monthly",
            lastmod: dayjs(blog.updated_at).format("YYYY-MM-DD"),
        });
    }

    sitemap.end();
    return new Response(await streamToPromise(sitemap), {
        headers: {
            "Content-Type": "application/xml",
        },
    });
}
