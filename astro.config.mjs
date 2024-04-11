import react from "@astrojs/react";
import astroI18next from "astro-i18next";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [astroI18next(), react()],
});
