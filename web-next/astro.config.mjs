import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    output: "server",
    integrations: [
        UnoCSS({
            injectReset: true,
        }),
        icon(),
    ],
});
