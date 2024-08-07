import { allPosts } from "content-collections";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { unstable_setRequestLocale } from "next-intl/server";

import { MDX } from "@/components/shared/mdx";
import { Container } from "@/components/ui/container";

export interface PostPageProps {
  params: {
    locale: string;
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = allPosts.find((post) => {
    if (post.locale === params.locale && post.slug === params.slug) {
      return post;
    }
  });

  if (!post) {
    return {};
  }

  const { title, summary: description } = post;

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

export default function PostPage({ params }: PostPageProps) {
  unstable_setRequestLocale(params.locale);

  const post = allPosts.find((post) => {
    if (post.locale === params.locale && post.slug === params.slug) {
      return post;
    }
  });

  console.log("post", post);

  if (!post) {
    notFound();
  }

  const siteURL = process.env.SITE_URL;
  const prefix = params.locale === "en" ? "" : `/${params.locale}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    description: post.summary,
    image: post.featuredImage,
    url: `${siteURL}${prefix}/blog/${post.slug}`,
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
