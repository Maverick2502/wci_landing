import { defineConfig } from "astro/config";
import { VitePluginFonts } from "vite-plugin-fonts";
import astroI18next from "astro-i18next";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [astroI18next(), react(), tailwind()],
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
