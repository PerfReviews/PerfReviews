import { defineRouting } from "next-intl/routing";

import { defaultLocale, locales } from "../i18n.config";

export const routing = defineRouting({
  locales,
  defaultLocale,
  // The default locale is served without a prefix. Linking with one still resolves,
  // but only after a redirect, so every internal link would cost a round trip.
  localePrefix: "as-needed",
  localeDetection: false,
});
