import fs from "fs";
import path from "path";
import { ImageResponse } from "@vercel/og";

interface Props {
    params: { slug: "The-Best-Vector-Database" };
}

export async function GET({ params }: Props) {
    // const { post } = props;
    const slug = params.slug;

    console.log(slug);

    // using custom font files
    const InterFont = fs.readFileSync(path.resolve("./src/assets/fonts/inter/extras/ttf/Inter-Regular.ttf"));

    // Astro doesn't support tsx endpoints so usign React-element objects
    const html = {
        type: "div",
        props: {
            children: [
                {
                    type: "div",
                    props: {
                        // using tailwind
                        tw: "w-[200px] h-[200px] flex rounded-3xl overflow-hidden",
                        children: [
                            {
                                type: "img",
                                props: {
                                    src: "https://static.vecteezy.com/system/resources/previews/024/553/534/non_2x/lion-head-logo-mascot-wildlife-animal-illustration-generative-ai-png.png",
                                },
                            },
                        ],
                    },
                },
                {
                    type: "div",
                    props: {
                        tw: "pl-10 shrink flex",
                        children: [
                            {
                                type: "div",
                                props: {
                                    style: {
                                        fontSize: "48px",
                                        fontFamily: "InterFont",
                                        fontFeatureSettings: `'liga' 1, 'calt' 1`,
                                    },
                                    children: "This is a title",
                                },
                            },
                        ],
                    },
                },
                {
                    type: "div",
                    props: {
                        tw: "absolute right-[40px] bottom-[40px] flex items-center",
                        children: [
                            {
                                type: "div",
                                props: {
                                    tw: "text-blue-600 text-3xl",
                                    style: {
                                        fontFamily: "InterFont",
                                    },
                                    children: "Dzmitry Kozhukh",
                                },
                            },
                            {
                                type: "div",
                                props: {
                                    tw: "px-2 text-3xl",
                                    style: {
                                        fontSize: "30px",
                                    },
                                    children: "|",
                                },
                            },
                            {
                                type: "div",
                                props: {
                                    tw: "text-3xl",
                                    children: "Blog",
                                },
                            },
                        ],
                    },
                },
            ],
            tw: "w-full h-full flex items-center justify-center relative px-40",
            style: {
                background: "#f7f8e8",
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
