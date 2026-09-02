import { defaultLocale } from "@/i18n.config";

// SITE_URL is configured with a trailing slash, which doubles up when joined with a
// path that already starts with one.
export const siteURL = (process.env.SITE_URL || "http://localhost:3000").replace(
  /\/$/,
  ""
);

// The default locale is served without a prefix; every other locale carries it.
export const localePrefix = (locale: string) =>
  locale === defaultLocale ? "" : `/${locale}`;

export const absoluteURL = (path: string) => `${siteURL}${path}`;

export const localeURL = (locale: string, path: string) =>
  absoluteURL(`${localePrefix(locale)}${path}`);
