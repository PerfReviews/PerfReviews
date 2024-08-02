import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

import { FAQAccordion } from "@/components/shared/faq-accordion";
import { PricingCardGrid } from "@/components/shared/pricing-card-grid";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
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

export default function HomePage() {
  const t = useTranslations("HomePage");

  const clients = ["adevinta", "mediaset", "meta", "spotify"];
  const audits = [
    {
      id: "basic",
      title: "audits.pricing.basic.title",
      benefits: [
        "audits.pricing.basic.item-1",
        "audits.pricing.basic.item-2",
        "audits.pricing.basic.item-3",
        "audits.pricing.basic.item-4",
        "audits.pricing.basic.item-5",
        "audits.pricing.basic.item-6",
      ],
      price: 0,
    },
    {
      id: "pro",
      title: "audits.pricing.pro.title",
      benefits: [
        "audits.pricing.pro.item-1",
        "audits.pricing.pro.item-2",
        "audits.pricing.pro.item-3",
        "audits.pricing.pro.item-4",
        "audits.pricing.pro.item-5",
        "audits.pricing.pro.item-6",
      ],
      original: 10,
      price: 5,
      credits: 35,
      stripeId: process.env.NEXT_PUBLIC_STRIPE_EXPLORER_PLAN_ID,
      isPopular: true,
    },
    {
      id: "premium",
      title: "audits.pricing.premium.title",
      benefits: [
        "audits.pricing.premium.item-1",
        "audits.pricing.premium.item-2",
        "audits.pricing.premium.item-3",
        "audits.pricing.premium.item-4",
        "audits.pricing.premium.item-5",
        "audits.pricing.premium.item-6",
      ],
      original: 15,
      price: 10,
      credits: 80,
      stripeId: process.env.NEXT_PUBLIC_STRIPE_VOYAGER_PLAN_ID,
    },
  ];
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

  return (
    <Container asChild>
      <main>
        <div className="max-w-lg space-y-4 text-center mx-auto">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold">{t("title")}</h1>

            <p className="text-md md:text-lg text-muted-foreground">
              {t("description")}
            </p>
          </div>

          <div className="space-y-4">
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

        <section className="py-10 space-y-10">
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

          <PricingCardGrid plans={audits} />
        </section>

        <section className="py-10 space-y-10">
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

        <section className="py-10 space-y-10">
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
