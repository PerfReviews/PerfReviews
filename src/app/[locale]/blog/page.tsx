import { allPosts } from "content-collections";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

import { BlogCard } from "@/components/blog/blog-card";
import { Container } from "@/components/ui/container";

export interface BlogPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "BlogPage" });

  const title = t("meta.title");
  const description = t("meta.description");

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params;
  const t = useTranslations("BlogPage");
  const posts = allPosts.filter((post) => post.locale === locale);

  return (
    <Container className="py-8 space-y-8" asChild>
      <main>
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold">{t("title")}</h1>

          <p className="text-muted-foreground">
            {t.rich("description", {
              br: () => <br />,
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto">
          {posts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      </main>
    </Container>
  );
}
