import { allPosts, allReviews } from "content-collections";
import { MetadataRoute } from "next";

import { defaultLocale, locales } from "@/i18n.config";

type ChangeFrequency =
  | "daily"
  | "always"
  | "hourly"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never"
  | undefined;

const getSitemapFile = ({ pathname }: { pathname: string }) => {
  const siteURL = process.env.SITE_URL as string;
  const languages = locales
    .filter((locale) => locale !== defaultLocale)
    .reduce((alternates, locale) => {
      const current = [siteURL, locale, pathname].filter(Boolean).join("/");

      return {
        ...alternates,
        [locale]: current,
      };
    }, {});

  return {
    url: [siteURL, pathname].filter(Boolean).join("/"),
    lastModified: new Date(),
    changeFrequency: "daily" as ChangeFrequency,
    priority: 0.7,
    alternates: { languages },
  };
};

export default function sitemap(): MetadataRoute.Sitemap {
  const urls = ["", "blog", "reviews"].map((pathname) =>
    getSitemapFile({ pathname })
  );

  const posts = allPosts
    .filter((post) => post.locale === defaultLocale)
    .map((post) =>
      getSitemapFile({
        pathname: ["blog", post.slug].filter(Boolean).join("/"),
      })
    );

  const reviews = allReviews
    .filter((review) => review.locale === defaultLocale)
    .map((review) =>
      getSitemapFile({
        pathname: ["reviews", review.slug].filter(Boolean).join("/"),
      })
    );

  return [...urls, ...posts, ...reviews];
}
