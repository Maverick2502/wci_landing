import type { LinkI } from "./types";
import { t } from "i18next";

export const links: LinkI[] = [
  {
    title: `${t("menuNav.whyUs")}`,
    href: "/#features",
  },
  {
    title: `${t("menuNav.services")}`,
    href: "/#services",
  },
  {
    title: `${t("menuNav.contact")}`,
    href: "/#contact",
  },
  {
    title: `${t("menuNav.aboutUs")}`,
    href: "/about",
  },
];

export const footerLinks: LinkI[] = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com",
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com",
  },
];
