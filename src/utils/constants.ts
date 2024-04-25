import ogImageSrc from "../../public/og_image.png";

export const SITE = {
  title: "WCI",
  tagline: "Top-quality Developers",
  description:
    "WCI provides expert IT outsourcing solutions to streamline your business operations and drive efficiency..",
  description_short:
    "WCI provides expert IT outsourcing solutions to streamline your business operations and drive efficiency.",
  url: "https://wci-landing.vercel.app",
  author: "Nurullo Khuvaidullaev",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: Your IT Outsourcing Partner`,
  description:
    "WCI provides expert IT outsourcing solutions to streamline your business operations and drive efficiency.",
  image: ogImageSrc,
};
