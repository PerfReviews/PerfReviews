import { CircleCheck } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ComponentPropsWithoutRef } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/components/ui/core";
import { Icon } from "@/components/ui/icon";
import { PricingPlan } from "@/types/PricingPlan";

export interface PricingCardProps extends ComponentPropsWithoutRef<"article"> {
  plan: PricingPlan;
}

export const PricingCard = ({ plan, ...others }: PricingCardProps) => {
  const t = useTranslations("HomePage");

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
          {t("pricing.popular-badge")}
        </Badge>
      )}

      <h3 className="text-lg md:text-xl font-semibold">{t(plan.title)}</h3>

      <p className="text-3xl md:text-4xl font-bold">{plan.price}€</p>

      <ul className="flex flex-col gap-2 py-6 flex-1 text-left">
        {plan.benefits.map((key, index) => (
          <li className="flex gap-2 items-center" key={index}>
            <Icon className="text-green-600">
              <CircleCheck />
            </Icon>
            {t(key)}
          </li>
        ))}
      </ul>

      <Button variant={variant} asChild>
        <Link href="/private">{t("pricing.button")}</Link>
      </Button>
    </article>
  );
};
