import { createClient } from "@supabase/supabase-js";

export async function GET(props: any) {
    const supabase = createClient(import.meta.env.SUPABASE_URL, import.meta.env.SUPABASE_KEY);
    let id = props.url.searchParams.get("id") ?? 100;

    await supabase.rpc("increment_blob_view_count", {
        blog_id: id,
    } as any);

    console.log("increase");

    return new Response(JSON.stringify({ message: "Count Added!" }));
}
