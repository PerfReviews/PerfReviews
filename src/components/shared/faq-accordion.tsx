"use client";

import { useLocale, useTranslations } from "next-intl";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FAQAccordionProps {}

export const FAQAccordion = (props: FAQAccordionProps) => {
  const t = useTranslations("HomePage");
  const locale = useLocale();

  const sampleReportPath = locale === "es" ? "/informe-ejemplo" : "/sample-report";

  const faqs = Array.from(Array(10).keys()).map((_, index) => ({
    title: t(`faqs.item-${index + 1}.title`),
    description: t.rich(`faqs.item-${index + 1}.description`, {
      link: (children) => (
        <a
          className="underline underline-offset-4 hover:text-foreground"
          href={sampleReportPath}
        >
          {children}
        </a>
      ),
    }),
  }));

  return (
    <Accordion type="single" collapsible {...props}>
      {faqs.map(({ title, description }, index) => (
        <AccordionItem key={index} value={index.toString()}>
          <AccordionTrigger className="text-left">{title}</AccordionTrigger>
          <AccordionContent className="text-md" forceMount>
            {description}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
