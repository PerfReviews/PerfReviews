import { allPosts, allReviews } from "content-collections";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

import { BlogCard } from "@/components/blog/blog-card";
import { Container } from "@/components/ui/container";

export interface ReviewsPageProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({
  params: { locale },
}: ReviewsPageProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "ReviewsPage" });

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

export default function ReviewsPage({ params }: ReviewsPageProps) {
  const t = useTranslations("ReviewsPage");

  const { locale } = params;
  const reviews = allReviews.filter((review) => review.locale === locale);

  return (
    <Container className="py-8 space-y-8" asChild>
      <main>
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">{t("title")}</h2>

          <p className="text-muted-foreground">
            {t.rich("description", {
              br: () => <br />,
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto">
          {reviews.map((review, index) => (
            <BlogCard key={index} post={review} />
          ))}
        </div>
      </main>
    </Container>
  );
}
