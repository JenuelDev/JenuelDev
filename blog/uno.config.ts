// uno.config.ts
import { defineConfig } from "unocss";

export default defineConfig({
    extendTheme: (theme) => ({
        ...theme,
        breakpoints: {
            ...theme.breakpoints,
            xs: "330px",
        },
    }),
});
