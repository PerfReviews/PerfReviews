import { allReviews } from "content-collections";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArchivedNotice } from "@/components/shared/archived-notice";
import { MDX } from "@/components/shared/mdx";
import { Container } from "@/components/ui/container";

export interface ReviewPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: ReviewPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const review = allReviews.find((review) => {
    if (review.locale === locale && review.slug === slug) {
      return review;
    }
  });

  if (!review) {
    return {};
  }

  const { title, summary: description } = review;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ReviewPage({ params }: ReviewPageProps) {
  const { locale, slug } = await params;

  const review = allReviews.find((post) => {
    if (post.locale === locale && post.slug === slug) {
      return post;
    }
  });

  if (!review) {
    notFound();
  }

  const siteURL = process.env.SITE_URL;
  const prefix = locale === "en" ? "" : `/${locale}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: review.title,
    datePublished: review.date,
    dateModified: review.date,
    description: review.summary,
    image: review.featuredImage,
    url: `${siteURL}${prefix}/reviews/${review.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <Container className="my-6" asChild>
        <main>
          {review.archived && <ArchivedNotice date={review.date} />}
          <MDX source={review.content} />
        </main>
      </Container>
    </>
  );
}

export function generateStaticParams() {
  return allReviews.map((review) => {
    return { locale: review.locale, slug: review.slug };
  });
}
