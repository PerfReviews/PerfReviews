import { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";

export interface AboutUsPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({
  params,
}: AboutUsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "AboutUsPage" });

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

export default async function AboutUsPage({ params }: AboutUsPageProps) {
  const { locale } = await params;
  const t = await getTranslations("AboutUsPage");

  return (
    <>
      <Container className="py-8 space-y-8" asChild>
        <main>
          <div className="space-y-4">
            <h1 className="text-2xl md:text-3xl font-bold">{t("title")}</h1>
          </div>

          <article className="space-y-6 max-w-4xl">
            <div className="flex gap-6 items-center flex-col md:flex-row">
              <Image
                className="rounded-full"
                src="https://res.cloudinary.com/nucliweb/image/upload/c_scale,f_auto,q_auto,w_200/v1755095339/JoanLeon-GDE.jpg"
                width={200}
                height={200}
                alt="Joan León"
              />

              <div>
                <h2 className="text-xl md:text-2xl font-semibold mb-2">
                  Joan León
                </h2>
                <p className="text-sm text-muted-foreground">
                  Web Performance Artisan • Google Developer Expert • Cloudinary Ambassador
                </p>
              </div>
            </div>

            <div className="text-muted-foreground leading-relaxed space-y-4">
              {t.rich("bio", {
                br: () => <br />,
                link: (chunks) => (
                  <a
                    href="https://joanleon.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    {chunks}
                  </a>
                ),
              })}
            </div>
          </article>
        </main>
      </Container>

      <Footer />
    </>
  );
}
