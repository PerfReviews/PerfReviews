import { allPosts, allReviews } from "content-collections";
import { MetadataRoute } from "next";

import { defaultLocale, locales } from "@/i18n.config";
import { siteURL } from "@/site";

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
    // the root keeps its trailing slash; every other path joins onto the origin
    url: pathname ? [siteURL, pathname].join("/") : `${siteURL}/`,
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

  const sampleReportLanguages = {
    es: [siteURL, "informe-ejemplo"].join("/"),
    en: [siteURL, "sample-report"].join("/"),
  };

  const sampleReports = ["informe-ejemplo", "sample-report"].map((pathname) => ({
    url: [siteURL, pathname].join("/"),
    lastModified: new Date(),
    changeFrequency: "yearly" as ChangeFrequency,
    priority: 0.8,
    alternates: { languages: sampleReportLanguages },
  }));

  return [...urls, ...posts, ...reviews, ...sampleReports];
}
