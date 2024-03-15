/** @type {import('astro-i18next').AstroI18nextConfig} */

const config: any = {
  defaultLocale: "ru",
  locales: ["ru", "en"],
  load: ["client"],
  i18nextClient: {
    debug: true,
  },
};

export default config;
