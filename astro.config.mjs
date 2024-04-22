import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import astroI18next from "astro-i18next";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://wci-landing.vercel.app/",
  integrations: [
    astroI18next(),
    react(),
    sitemap({
      i18n: {
        defaultLocale: "ru",
        locales: {
          ru: "ru-RU",
          en: "en-US",
        },
      },
    }),
  ],
});
