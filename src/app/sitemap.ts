import { allPosts, allReviews } from "content-collections";
import { MetadataRoute } from "next";

import { defaultLocale, locales } from "@/i18n.config";

const getLocale = (locale: string) => {
  if (locale === defaultLocale) {
    return "";
  }

  return locale;
};

type ChangeFrequency =
  | "daily"
  | "always"
  | "hourly"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never"
  | undefined;

export default function sitemap(): MetadataRoute.Sitemap {
  const siteURL = process.env.SITE_URL as string;

  const urls = locales
    .reduce((urls: Array<string>, locale: string) => {
      const current = ["blog", "reviews"].map((value) => {
        const current = getLocale(locale);
        const pathname = [current, value].filter(Boolean).join("/");

        return `${siteURL}/${pathname}`;
      });

      return [...urls, ...current];
    }, [])
    .map((url) => ({
      url,
      lastModified: new Date(),
      changeFrequency: "daily" as ChangeFrequency,
      priority: 0.7,
    }));

  const posts = allPosts.map((post) => {
    const locale = getLocale(post.locale);
    const pathname = [locale, "blog", post.slug].filter(Boolean).join("/");

    return {
      url: `${siteURL}/${pathname}`,
      lastModified: new Date(),
      changeFrequency: "daily" as ChangeFrequency,
      priority: 0.7,
    };
  });

  const reviews = allReviews.map((review) => {
    const locale = getLocale(review.locale);
    const pathname = [locale, "reviews", review.slug].filter(Boolean).join("/");

    return {
      url: `${siteURL}/${pathname}`,
      lastModified: new Date(),
      changeFrequency: "daily" as ChangeFrequency,
      priority: 0.7,
    };
  });

  return [
    {
      url: siteURL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    ...urls,
    ...posts,
    ...reviews,
  ];
}
