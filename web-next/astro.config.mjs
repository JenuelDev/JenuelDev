import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import icon from "astro-icon";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
    output: "server",
    integrations: [
        UnoCSS({
            injectReset: true,
        }),
        icon(),
    ],
    adapter: vercel(),
});
