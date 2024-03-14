import { defineConfig } from "astro/config";
import { VitePluginFonts } from "vite-plugin-fonts";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      VitePluginFonts({
        custom: {
          families: [
            {
              name: "Asgard Trial",
              src: "./src/assets/fonts/*.woff",
            },
          ],
          display: "swap",
          preload: true,
          prefetch: false,
          injectTo: "head-prepend",
        },
      }),
    ],
  },
});
