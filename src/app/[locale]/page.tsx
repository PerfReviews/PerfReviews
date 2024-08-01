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

  return (
    <Container asChild>
      <main>
        <div className="max-w-2xl space-y-4 text-center mx-auto">
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
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-center">
              {t("pricing.title")}
            </h2>

            <p className="text-muted-foreground text-center">
              {t("pricing.description")}
            </p>
          </div>

          <PricingCardGrid />
        </section>

        <section className="py-10 space-y-10">
          <div className="space-y-2 text-center">
            <Badge variant="secondary">{t("faqs.badge")}</Badge>

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
