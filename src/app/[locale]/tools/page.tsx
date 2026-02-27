import { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Footer } from "@/components/layout/footer";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";

export interface ToolsPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({
  params,
}: ToolsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ToolsPage" });

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

const tools = [
  {
    key: "snippets",
    url: "https://webperf-snippets.nucliweb.net",
  },
  {
    key: "devtools",
    url: "https://developer.chrome.com/docs/devtools",
  },
  {
    key: "debugbear",
    url: "https://www.debugbear.com/",
  },
  {
    key: "speedcurve",
    url: "https://www.speedcurve.com/",
  },
  {
    key: "webperfreport",
    url: "https://webperformancereport.com/",
  },
];

export default async function ToolsPage({ params }: ToolsPageProps) {
  const { locale } = await params;
  const t = await getTranslations("ToolsPage");

  return (
    <>
      <Container className="py-8 space-y-10" asChild>
        <main>
          <div className="space-y-3">
            <h1 className="text-2xl md:text-3xl font-bold">{t("title")}</h1>
            <p className="text-lg text-muted-foreground">
              {t("description")}
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">
              {t("primary.title")}
            </h2>

            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-6">
              {tools.map((tool) => (
                <li key={tool.key}>
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div className="flex items-start gap-2">
                      <h3 className="text-base font-semibold group-hover:text-primary transition-colors">
                        {t(`primary.${tool.key}.title`)}
                      </h3>
                      <Icon
                        size="sm"
                        className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0"
                      >
                        <ExternalLink />
                      </Icon>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                      {t(`primary.${tool.key}.description`)}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-semibold">
              {t("secondary.title")}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {t.rich("secondary.description", {
                strong: (chunks) => (
                  <strong className="text-foreground font-semibold">
                    {chunks}
                  </strong>
                ),
              })}
            </p>
          </section>
        </main>
      </Container>

      <Footer />
    </>
  );
}
