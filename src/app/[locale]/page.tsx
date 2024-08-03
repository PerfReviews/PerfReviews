import { allPosts } from "content-collections";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

import { FAQAccordion } from "@/components/shared/faq-accordion";
import { PricingCard } from "@/components/shared/pricing-card";
import { PricingCardGrid } from "@/components/shared/pricing-card-grid";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { LinkBox, LinkOverlay } from "@/components/ui/link-overlay";
import Ratings from "@/components/ui/ratings";

interface HomePageProps {
  params: { locale: string };
}

export async function generateMetadata({ params: { locale } }: HomePageProps) {
  const t = await getTranslations({ locale, namespace: "HomePage" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default function HomePage({ params: { locale } }: HomePageProps) {
  const t = useTranslations("HomePage");

  const clients = ["adevinta", "mediaset", "meta", "spotify"];
  const audit = {
    id: "audit",
    title: "audits.pricing.title",
    benefits: [
      "audits.pricing.item-1",
      "audits.pricing.item-2",
      "audits.pricing.item-3",
      "audits.pricing.item-4",
    ],
    price: 3000,
    isPopular: true,
  };
  const subscriptions = [
    {
      id: "basic",
      title: "subscriptions.pricing.basic.title",
      benefits: [
        "subscriptions.pricing.basic.item-1",
        "subscriptions.pricing.basic.item-2",
        "subscriptions.pricing.basic.item-3",
      ],
      price: 1400,
    },
    {
      id: "pro",
      title: "subscriptions.pricing.pro.title",
      benefits: [
        "subscriptions.pricing.pro.item-1",
        "subscriptions.pricing.pro.item-2",
        "subscriptions.pricing.pro.item-3",
        "subscriptions.pricing.pro.item-4",
        "subscriptions.pricing.pro.item-5",
      ],
      price: 2500,
      isPopular: true,
    },
    {
      id: "premium",
      title: "subscriptions.pricing.premium.title",
      benefits: [
        "subscriptions.pricing.premium.item-1",
        "subscriptions.pricing.premium.item-2",
        "subscriptions.pricing.premium.item-3",
        "subscriptions.pricing.premium.item-4",
        "subscriptions.pricing.premium.item-5",
        "subscriptions.pricing.premium.item-6",
      ],
      price: 3500,
    },
  ];

  console.log(
    allPosts
      .filter((post) => locale === post.locale)
      .filter((post, index) => index < 3)
  );

  return (
    <Container asChild>
      <main>
        <div className="max-w-lg space-y-4 py-8 text-center mx-auto">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold">{t("title")}</h1>

            <p className="text-md md:text-lg text-muted-foreground">
              {t("description")}
            </p>
          </div>

          <div className="space-y-8">
            <Button className="shadow-md" size="lg">
              {t("button")}
            </Button>

            <div className="flex flex-col gap-y-4 items-center">
              <div className="flex -space-x-1 *:ring *:ring-background">
                {clients.map((name) => (
                  <Avatar className="bg-muted w-12 h-12" key={name}>
                    <AvatarImage
                      className="object-contain"
                      src={`/images/${name}.svg`}
                    />
                  </Avatar>
                ))}
              </div>

              <div className="flex flex-col gap-2 items-center">
                <Ratings value={5} variant="yellow" />

                <p className="text-muted-foreground text-sm">{t("rating")}</p>
              </div>
            </div>
          </div>
        </div>

        <section className="py-8 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">{t("how.title")}</h2>

            <p className="text-muted-foreground">
              {t.rich("how.description", {
                br: () => <br />,
              })}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
            <div className="flex flex-col justify-center gap-2 items-center text-center">
              <Badge variant="secondary">{t("how.step-1.badge")}</Badge>

              <h3 className="text-xl md:text-2xl font-bold">
                {t("how.step-1.title")}
              </h3>

              <p className="text-muted-foreground">
                {t("how.step-1.description")}
              </p>
            </div>

            <div className="flex items-center justify-center">
              <Image
                className="rounded-xl rotate-2 shadow-md"
                src="/images/step-1.jpg"
                alt=""
                width={460}
                height={460}
              />
            </div>

            <div className="flex items-center justify-center order-1 md:order-none">
              <Image
                className="rounded-xl -rotate-2"
                src="/images/step-2.png"
                alt=""
                width={460}
                height={460}
              />
            </div>

            <div className="flex flex-col justify-center gap-2 items-center text-center">
              <Badge variant="secondary">{t("how.step-2.badge")}</Badge>

              <h3 className="text-xl md:text-2xl font-bold">
                {t("how.step-2.title")}
              </h3>

              <p className="text-muted-foreground">
                {t("how.step-2.description")}
              </p>
            </div>

            <div className="flex flex-col justify-center gap-2 items-center text-center">
              <Badge variant="secondary">{t("how.step-3.badge")}</Badge>

              <h3 className="text-xl md:text-2xl font-bold">
                {t("how.step-3.title")}
              </h3>

              <p className="text-muted-foreground">
                {t("how.step-3.description")}
              </p>
            </div>

            <div className="flex items-center justify-center">
              <Image
                className="rounded-xl rotate-2 shadow-md"
                src="/images/step-3.jpg"
                alt=""
                width={460}
                height={460}
              />
            </div>
          </div>
        </section>

        <section className="py-8 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              {t("audits.title")}
            </h2>

            <p className="text-muted-foreground">
              {t.rich("audits.description", {
                br: () => <br />,
              })}
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-full lg:w-1/3 lg:px-3">
              <PricingCard plan={audit} />
            </div>
          </div>
        </section>

        <section className="py-8 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              {t("subscriptions.title")}
            </h2>

            <p className="text-muted-foreground">
              {t.rich("subscriptions.description", {
                br: () => <br />,
              })}
            </p>
          </div>

          <PricingCardGrid plans={subscriptions} />
        </section>

        <section className="py-8 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              {t("blog.title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mx-auto">
            {allPosts
              .filter((post) => locale === post.locale)
              .filter((post, index) => index < 3)
              .map((post, index) => {
                return (
                  <LinkBox key={index} asChild>
                    <article className="space-y-4">
                      <div className="relative aspect-video shadow-md rounded-lg overflow-hidden">
                        <Image
                          className="object-cover"
                          src={post.featuredImage}
                          alt=""
                          fill
                        />
                      </div>

                      <div className="space-y-1 overflow-hidden max-w-full">
                        <h3 className="text-primary text-md font-semibold line-clamp-2">
                          <LinkOverlay href={`/blog/${post.slug}`}>
                            {post.title}
                          </LinkOverlay>
                        </h3>
                        <p className="text-sm line-clamp-2">{post.summary}</p>
                        <p className="text-muted-foreground text-xs">
                          {new Date(post.date).toLocaleDateString()}
                        </p>
                      </div>
                    </article>
                  </LinkBox>
                );
              })}
          </div>
        </section>

        <section className="py-8 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold">
              {t("faqs.title")}
            </h2>
          </div>

          <FAQAccordion />
        </section>
      </main>
    </Container>
  );
}
