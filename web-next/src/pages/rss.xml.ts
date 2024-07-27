import rss from "@astrojs/rss";
import { createClient } from "@supabase/supabase-js";

export async function GET(props: any) {
    const supabase = createClient(import.meta.env.SUPABASE_URL, import.meta.env.SUPABASE_KEY);
    const site = props.site ?? "https://jenuel.dev";

    let limit = props.url.searchParams.get("limit") ?? 5000;

    let clientQuery = supabase
        .from("blogs")
        .select(`id, title, summary, slug, updated_at, cover_img, blog_meta(*), tags`)
        .eq("is_active", 1)
        .order("id", { ascending: false })
        .limit(limit);

    const { data, error } = await clientQuery;

    let feedItem = [];

    for (const doc of data ?? []) {
        feedItem.push({
            title: doc.title ?? "-",
            link: `https://jenuel.dev/blog/${doc.slug}`,
            pubDate: doc.updated_at,
            description: doc.summary,
        });
    }

    return rss({
        title: "Jenuel.Dev - Articles",
        description: "Latest articles in Jenuel.Dev Site by Jenuel Oras Ganawed.",
        site: site,
        items: feedItem,
        customData: `<language>en-us</language>`,
    });
}
