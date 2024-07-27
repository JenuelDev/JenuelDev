import fs from "fs";
import path from "path";
import { ImageResponse } from "@vercel/og";
import { supabase } from "../../../lib/supabase";

interface Props {
    params: { slug: "The-Best-Vector-Database" };
}

export async function GET({ params }: Props) {
    const slug = params.slug;

    const { data } = await supabase
        .from("blogs")
        .select(`*, user_profile(*)`)
        .eq("is_active", 1)
        .eq("slug", slug)
        .single();

    const title = data.title;
    const url = `jenuel.dev/blogs/${slug}`;

    // using custom font files
    const InterFont = fs.readFileSync(path.resolve("./src/assets/fonts/poppins/Poppins-Regular.ttf"));

    // Astro doesn't support tsx endpoints so usign React-element objects
    const html = {
        type: "div",
        props: {
            children: [
                {
                    type: "div",
                    props: {
                        tw: "flex items-start justify-start h-full",
                        children: [
                            {
                                type: "div",
                                props: {
                                    tw: "flex flex-col justify-between w-full h-full",
                                    children: [
                                        {
                                            type: "h1",
                                            props: {
                                                tw: "text-[60px] py-20 px-30 font-black text-left",
                                                children: title,
                                            },
                                        },
                                        {
                                            type: "div",
                                            props: {
                                                tw: "text-2xl pb-10 px-30 font-bold mb-0",
                                                children: "😎 " + url,
                                            },
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                },
            ],
            tw: "h-full w-full flex items-start justify-start ",
            style: {
                background: "#fff",
                fontFamily: "InterFont",
            },
        },
    };

    return new ImageResponse(html, {
        width: 1200,
        height: 600,
        fonts: [
            {
                name: "InterFont",
                data: InterFont.buffer,
                style: "normal",
            },
        ],
    });
}
