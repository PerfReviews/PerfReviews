import { allPosts } from "content-collections";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

import { BlogCard } from "@/components/blog/blog-card";
import { Footer } from "@/components/layout/footer";
import { ContactButton } from "@/components/shared/contact-button";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { PricingCardGrid } from "@/components/shared/pricing-card-grid";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Ratings } from "@/components/ui/ratings";

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
  const plans = [
    {
      id: "audit",
      title: "pricing.plans.audit.title",
      benefits: [
        "pricing.plans.audit.item-1",
        "pricing.plans.audit.item-2",
        "pricing.plans.audit.item-3",
        "pricing.plans.audit.item-4",
        "pricing.plans.audit.item-5",
      ],
      price: 2400,
    },
    {
      id: "business",
      title: "pricing.plans.business.title",
      benefits: [
        "pricing.plans.business.item-1",
        "pricing.plans.business.item-2",
        "pricing.plans.business.item-3",
        "pricing.plans.business.item-4",
        "pricing.plans.business.item-5",
        "pricing.plans.business.item-6",
        "pricing.plans.business.item-7",
        "pricing.plans.business.item-8",
      ],
      price: 1800,
      isPopular: true,
      isRecurrent: true,
    },
    {
      id: "enterprise",
      title: "pricing.plans.enterprise.title",
      benefits: [
        "pricing.plans.enterprise.item-1",
        "pricing.plans.enterprise.item-2",
        "pricing.plans.enterprise.item-3",
        "pricing.plans.enterprise.item-4",
        "pricing.plans.enterprise.item-5",
        "pricing.plans.enterprise.item-6",
        "pricing.plans.enterprise.item-7",
        "pricing.plans.enterprise.item-8",
      ],
      price: 2800,
      isRecurrent: true,
    },
  ];

  return (
    <>
      <Container asChild>
        <main>
          <div className="max-w-lg space-y-4 py-8 text-center mx-auto">
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-bold">{t("title")}</h1>

              <p className="text-md md:text-lg text-muted-foreground">
                {t("description")}
              </p>
            </div>

            <div className="space-y-4">
              <Button className="shadow-md" size="lg" asChild>
                <Link href="#pricing">{t("button")}</Link>
              </Button>

              <div className="flex flex-col gap-y-1 items-center">
                <Ratings value={5} variant="yellow" />

                <p className="text-muted-foreground text-sm">{t("rating")}</p>
              </div>
            </div>
          </div>

          <section className="py-8 space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold">{t("how.title")}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
              <div className="flex flex-col justify-center gap-2 items-center text-center order-1 md:order-none">
                <h3 className="text-xl md:text-2xl font-bold">
                  {t("how.step-1.title")}
                </h3>

                <p className="text-muted-foreground">
                  {t.rich("how.step-1.description", {
                    strong: (children) => <strong>{children}</strong>,
                  })}
                </p>
              </div>

              <div className="flex items-center justify-center order-2 md:order-none">
                <div className="relative aspect-video size-full">
                  <Image
                    className="object-contain rounded-xl shadow-md bg-muted"
                    src="/images/home/step-1.png"
                    alt={t("how.step-1.alt")}
                    fill
                  />
                </div>
              </div>

              <div className="flex items-center justify-center order-4 md:order-none">
                <div className="relative aspect-video size-full">
                  <Image
                    className="object-contain rounded-xl shadow-md bg-muted"
                    src="/images/home/step-2.png"
                    alt={t("how.step-2.alt")}
                    fill
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center gap-2 items-center text-center order-3 md:order-none">
                <h3 className="text-xl md:text-2xl font-bold">
                  {t("how.step-2.title")}
                </h3>

                <p className="text-muted-foreground">
                  {t("how.step-2.description")}
                </p>
              </div>

              <div className="flex flex-col justify-center gap-2 items-center text-center order-5 md:order-none">
                <h3 className="text-xl md:text-2xl font-bold">
                  {t("how.step-3.title")}
                </h3>

                <p className="text-muted-foreground">
                  {t("how.step-3.description")}
                </p>
              </div>

              <div className="flex items-center justify-center order-6 md:order-none">
                <div className="relative aspect-video size-full">
                  <Image
                    className="object-cover rounded-xl shadow-md bg-muted"
                    src="/images/home/step-3.png"
                    alt={t("how.step-3.alt")}
                    fill
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="py-8 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">
                {t("why.title")}
              </h2>

              <p className="text-muted-foreground">
                {t.rich("why.description", {
                  strong: (children) => <strong>{children}</strong>,
                })}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
              {clients.map((name, index) => (
                <div key={index} className="flex items-center justify-center">
                  <Image
                    src={`/images/${name}.svg`}
                    alt={name}
                    width={84}
                    height={84}
                  />
                </div>
              ))}
            </div>
          </section>

          <section id="pricing" className="py-8 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">
                {t("pricing.title")}
              </h2>

              <p className="text-muted-foreground">
                {t.rich("pricing.description", {
                  strong: (children) => <strong>{children}</strong>,
                })}
              </p>
            </div>

            <PricingCardGrid plans={plans} />
          </section>

          <section className="py-16 space-y-8 text-center max-w-xl mx-auto">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">
                {t("workshops.title")}
              </h2>

              <p className="text-muted-foreground">
                {t.rich("workshops.description", {
                  strong: (children) => <strong>{children}</strong>,
                })}
              </p>
            </div>

            <ContactButton subject={t("workshops.subject")}>
              {t("workshops.button")}
            </ContactButton>
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
                .map((post, index) => (
                  <BlogCard key={index} post={post} />
                ))}
            </div>

            <div className="flex justify-center">
              <Button asChild>
                <Link href="/blog">{t("blog.button")}</Link>
              </Button>
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

      <Footer className="mt-12" />
    </>
  );
}
