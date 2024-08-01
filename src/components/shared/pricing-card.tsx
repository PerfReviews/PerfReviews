import { CircleCheck } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ComponentPropsWithoutRef } from "react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/components/ui/core";
import { Icon } from "@/components/ui/icon";

import { Button } from "../ui/button";

export interface PricingCardProps extends ComponentPropsWithoutRef<"article"> {
  plan: {
    title: string;
    benefits: Array<string>;
    price: number;
    original?: number;
    stripeId?: string;
    isPopular?: boolean;
  };
}

export const PricingCard = ({ plan, ...others }: PricingCardProps) => {
  const t = useTranslations("common");

  const variant = plan.isPopular ? "default" : "outline";

  return (
    <article
      className={cn(
        "relative p-8 rounded-xl flex flex-col gap-4 bg-muted text-center",
        { ["border-2 border-muted-foreground"]: plan.isPopular }
      )}
      {...others}
    >
      {plan.isPopular && (
        <Badge className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {t("payment.pricing.popular-badge")}
        </Badge>
      )}

      <h3 className="text-lg md:text-xl font-semibold">{t(plan.title)}</h3>

      <p className="text-3xl md:text-4xl font-bold">
        {plan.original !== undefined && (
          <>
            <span className="text-muted-foreground text-lg md:text-xl line-through font-semibold">
              ${plan.original}
            </span>{" "}
          </>
        )}
        ${plan.price}
      </p>

      <ul className="flex flex-col gap-2 py-6 flex-1 text-left">
        {plan.benefits.map((key, index) => (
          <li className="flex gap-2 items-center" key={index}>
            <Icon className="text-green-600">
              <CircleCheck />
            </Icon>
            rewrewrrew
          </li>
        ))}
      </ul>

      <Button variant={variant} asChild>
        <Link href="/private">{t("payment.pricing.free-button")}</Link>
      </Button>
    </article>
  );
};
