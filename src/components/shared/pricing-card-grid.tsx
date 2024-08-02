import { ComponentPropsWithoutRef } from "react";

import { PricingPlan } from "@/types/PricingPlan";

import { PricingCard } from "./pricing-card";

export interface PricingCardGridProps extends ComponentPropsWithoutRef<"div"> {
  plans: Array<PricingPlan>;
}

export const PricingCardGrid = ({ plans, ...others }: PricingCardGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto" {...others}>
      {plans.map((plan, index) => (
        <PricingCard key={index} plan={plan} />
      ))}
    </div>
  );
};
