/** @type {import('astro-i18next').AstroI18nextConfig} */

const config: any = {
  defaultLocale: "ru",
  locales: ["ru", "en"],
  load: ["server", "client"],
  i18nextServer: {
    debug: true,
  },
  i18nextClient: {
    debug: true,
  },
  i18nextServerPlugins: {
    "{initReactI18next}": "react-i18next",
  },
  i18nextClientPlugins: {
    "{initReactI18next}": "react-i18next",
  },
};

export default config;
