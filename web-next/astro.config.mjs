import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
// import node from "@astrojs/node";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [UnoCSS({
    injectReset: true
  })]
  // adapter: node({
  //     mode: "standalone",
  // }),
  ,
  adapter: node({
    mode: "standalone"
  })
});