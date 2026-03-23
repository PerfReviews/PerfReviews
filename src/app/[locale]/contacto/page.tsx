import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { Footer } from "@/components/layout/footer";
import { ContactForm } from "@/components/shared/contact-form";
import { Container } from "@/components/ui/container";

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ContactPage" });

  const title = t("meta.title");
  const description = t("meta.description");

  return {
    title,
    description,
    openGraph: { title, description },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function ContactPage() {
  const t = await getTranslations("ContactPage");

  return (
    <>
      <Container className="py-8 space-y-8" asChild>
        <main>
          <div className="space-y-4 max-w-2xl">
            <h1 className="text-2xl md:text-3xl font-bold">{t("title")}</h1>
            <p className="text-muted-foreground">{t("description")}</p>
          </div>

          <div className="max-w-2xl">
            <ContactForm />
          </div>
        </main>
      </Container>

      <Footer />
    </>
  );
}
