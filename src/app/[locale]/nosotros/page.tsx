import { Metadata } from "next";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

import { Container } from "@/components/ui/container";

export interface AboutUsPageProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({
  params: { locale },
}: AboutUsPageProps): Promise<Metadata> {
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

export default function AboutUsPage({ params }: AboutUsPageProps) {
  const t = useTranslations("AboutUsPage");

  const { locale } = params;

  const team = [
    {
      name: "team.joan.name",
      description: "team.joan.description",
      image: "/images/about-us/joan.jpg",
    },
    {
      name: "team.andres.name",
      description: "team.andres.description",
      image: "/images/about-us/andres.jpg",
    },
    {
      name: "team.jose.name",
      description: "team.jose.description",
      image: "/images/about-us/jose.jpg",
    },
  ];

  return (
    <Container className="py-8 space-y-8" asChild>
      <main>
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold">{t("title")}</h1>
        </div>

        <div className="space-y-8">
          {team.map((member, index) => (
            <article className="space-y-4" key={index}>
              <div className="flex gap-4 items-center">
                <Image
                  className="rounded-full"
                  src={member.image}
                  width={90}
                  height={90}
                  alt={member.name}
                />

                <h2 className="text-xl md:text-2xl font-semibold">
                  {t(member.name)}
                </h2>
              </div>
              <p className="text-muted-foreground">
                {t.rich(member.description, {
                  br: () => <br />,
                })}
              </p>
            </article>
          ))}
        </div>
      </main>
    </Container>
  );
}
