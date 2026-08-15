import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import icon from "astro-icon";

import vue from "@astrojs/vue";
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
    // Required for absolute URL generation (Astro.site). Without it the RSS
    // endpoint's `props.site` is undefined and silently falls back to a
    // hard-coded string.
    site: "https://blog.jenuel.dev",
    output: "server",
    integrations: [
        UnoCSS({
            injectReset: true,
        }),
        icon(),
        vue()
    ],
    adapter: netlify({
        edgeMiddleware: true,
    }),
    image: {
        remotePatterns: [
            {
                protocol: "https",
            },
        ],
    },
});