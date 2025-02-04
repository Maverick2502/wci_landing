import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import astroI18next from "astro-i18next";
import { defineConfig, squooshImageService } from "astro/config";

// https://astro.build/config
export default defineConfig({
  image: {
    service: squooshImageService(),
  },
  site: "https://wci-landing.vercel.app",
  prefetch: {
    prefetchAll: false,
  },
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
