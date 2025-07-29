import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import icon from "astro-icon";
import vercel from "@astrojs/vercel";

import vue from "@astrojs/vue";
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
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