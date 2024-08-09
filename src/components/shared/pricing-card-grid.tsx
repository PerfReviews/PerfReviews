import { ComponentPropsWithoutRef } from "react";

import { PricingPlan } from "@/types/PricingPlan";

import { PricingCard } from "./pricing-card";

export interface PricingCardGridProps extends ComponentPropsWithoutRef<"div"> {
  plans: Array<PricingPlan>;
}

export const PricingCardGrid = ({ plans, ...others }: PricingCardGridProps) => {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-4 mx-auto"
      {...others}
    >
      {plans.map((plan, index) => (
        <PricingCard
          className="max-w-md w-full mx-auto"
          key={index}
          plan={plan}
        />
      ))}
    </div>
  );
};
