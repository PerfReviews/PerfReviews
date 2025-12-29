import { withContentCollections } from "@content-collections/next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/insights/:path*",
        destination: "https://perfreviews-insights.vercel.app/insights/:path*",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/reviews/1.1-mediamarkt.es",
        destination: "/reviews/mediamarkt",
        permanent: true,
      },
      {
        source: "/reviews/1.2-elcorteingles.es",
        destination: "/reviews/elcorteingles",
        permanent: true,
      },
      {
        source: "/reviews/1.3-zara.com",
        destination: "/reviews/zara",
        permanent: true,
      },
      {
        source: "/reviews/1.4-smashingmagazine.com",
        destination: "/reviews/smashingmagazine",
        permanent: true,
      },
      {
        source: "/reviews/1.5-renfe.com",
        destination: "/reviews/renfe",
        permanent: true,
      },
      {
        source: "/reviews/1.6-escuela.it",
        destination: "/reviews/escuelait",
        permanent: true,
      },
    ];
  },
};

export default withContentCollections(withNextIntl(nextConfig));
