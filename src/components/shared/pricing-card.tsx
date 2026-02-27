"use client";

import { CircleCheck } from "lucide-react";
import { useFormatter, useTranslations } from "next-intl";
import { ComponentPropsWithoutRef } from "react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/components/ui/core";
import { Icon } from "@/components/ui/icon";
import { PricingPlan } from "@/types/PricingPlan";

import { ContactButton } from "./contact-button";

export interface PricingCardProps extends ComponentPropsWithoutRef<"article"> {
  plan: PricingPlan;
}

export const PricingCard = ({
  plan,
  className,
  ...others
}: PricingCardProps) => {
  const format = useFormatter();
  const t = useTranslations();

  const variant = plan.isPopular ? "default" : "outline";
  const title = t(`HomePage.${plan.title}`);

  return (
    <article
      className={cn(
        "relative p-8 rounded-xl flex flex-col gap-4 bg-muted text-center",
        { ["border-2 border-muted-foreground"]: plan.isPopular },
        className
      )}
      {...others}
    >
      {plan.isPopular && (
        <Badge className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {t("Common.pricing.popular-badge")}
        </Badge>
      )}

      <h3 className="text-lg md:text-xl font-semibold">{title}</h3>

      <p className="text-3xl md:text-4xl font-bold">
        {format.number(plan.price, {
          style: "currency",
          currency: "EUR",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })}

        {plan.isRecurrent && (
          <>
            {" "}
            <span className="text-muted-foreground text-sm font-semibold">
              / {t("Common.pricing.monthly")}
            </span>
          </>
        )}
      </p>

      <ul className="flex flex-col gap-2 py-6 flex-1 text-left">
        {plan.benefits.map((value, index) => (
          <li className="flex gap-2 items-center" key={index}>
            <Icon className="text-green-600">
              <CircleCheck />
            </Icon>
            {t.rich(`HomePage.${value}`, {
              strong: (children) => <strong>{children}</strong>,
            })}
          </li>
        ))}
      </ul>

      <ContactButton variant={variant} subject={title}>
        {t("Common.pricing.button")}
      </ContactButton>
    </article>
  );
};
