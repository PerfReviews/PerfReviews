import { allPosts } from "content-collections";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArchivedNotice } from "@/components/shared/archived-notice";
import { JsonLd } from "@/components/shared/json-ld";
import { MDX } from "@/components/shared/mdx";
import { Container } from "@/components/ui/container";
import { absoluteURL, localeURL } from "@/site";

export interface PostPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = allPosts.find((post) => {
    if (post.locale === locale && post.slug === slug) {
      return post;
    }
  });

  if (!post) {
    return {};
  }

  const { title, summary: description, featuredImage } = post;
  const images = featuredImage ? [absoluteURL(featuredImage)] : undefined;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { locale, slug } = await params;

  const post = allPosts.find((post) => {
    if (post.locale === locale && post.slug === slug) {
      return post;
    }
  });

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    description: post.summary,
    image: post.featuredImage,
    url: localeURL(locale, `/blog/${post.slug}`),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Container className="my-6" asChild>
        <main>
          {post.archived && <ArchivedNotice date={post.date} />}
          <MDX source={post.content} />
        </main>
      </Container>
    </>
  );
}

export async function generateStaticParams() {
  return allPosts.map((post) => {
    return { locale: post.locale, slug: post.slug };
  });
}
