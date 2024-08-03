import { allPosts } from "content-collections";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { Markdown } from "@/components/shared/markdown";
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
    const [locale, slug] = post._meta.path.split("/");

    if (locale === params.locale && slug === params.slug) {
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
  const post = allPosts.find((post) => {
    const [locale, slug] = post._meta.path.split("/");

    if (locale === params.locale && slug === params.slug) {
      return post;
    }
  });

  if (!post) {
    notFound();
  }

  return (
    <main>
      <Container className="my-6">
        <Markdown>{post.content}</Markdown>
      </Container>
    </main>
  );
}

export async function generateStaticParams() {
  return allPosts.map((post) => {
    const [locale, slug] = post._meta.path.split("/");

    return { locale, slug };
  });
}
