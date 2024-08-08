import { createClient } from "@supabase/supabase-js";

export async function GET(props: any) {
    const supabase = createClient(import.meta.env.SUPABASE_URL, import.meta.env.SUPABASE_KEY);
    let limit = props.url.searchParams.get("limit") ?? 100;

    let clientQuery = supabase
        .from("blogs")
        .select(`id, title, summary, slug, updated_at, cover_img, blog_meta(*), tags`)
        .eq("is_active", 1)
        .order("id", { ascending: false })
        .limit(limit);

    const { data, error } = await clientQuery;

    if (error) {
        return error.message;
    }

    const headers = new Headers();
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Methods", "GET");
    headers.append(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );

    return new Response(JSON.stringify(data), {
        headers: headers,
    });
}
