import { useTranslations } from "next-intl";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FAQAccordionProps {}

export const FAQAccordion = (props: FAQAccordionProps) => {
  const t = useTranslations("HomePage");

  const faqs = Array.from(Array(10).keys()).map((_, index) => ({
    title: t(`faqs.item-${index + 1}.title`),
    description: t(`faqs.item-${index + 1}.description`),
  }));

  return (
    <Accordion type="single" collapsible {...props}>
      {faqs.map(({ title, description }, index) => (
        <AccordionItem key={index} value={index.toString()}>
          <AccordionTrigger className="text-left">{title}</AccordionTrigger>
          <AccordionContent className="text-md">{description}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
