import { ComponentPropsWithoutRef } from "react";

import { PricingCard } from "./pricing-card";

export interface PricingCardGridProps extends ComponentPropsWithoutRef<"div"> {}

export const plans = [
  {
    id: "free",
    title: "payment.pricing.free.title",
    benefits: [
      "payment.pricing.free.item-1",
      "payment.pricing.free.item-2",
      "payment.pricing.free.item-3",
      "payment.pricing.free.item-4",
      "payment.pricing.free.item-5",
      "payment.pricing.free.item-6",
    ],
    price: 0,
  },
  {
    id: "explorer",
    title: "payment.pricing.pro.title",
    benefits: [
      "payment.pricing.pro.item-1",
      "payment.pricing.pro.item-2",
      "payment.pricing.pro.item-3",
      "payment.pricing.pro.item-4",
      "payment.pricing.pro.item-5",
      "payment.pricing.pro.item-6",
    ],
    original: 10,
    price: 5,
    credits: 35,
    stripeId: process.env.NEXT_PUBLIC_STRIPE_EXPLORER_PLAN_ID,
    isPopular: true,
  },
  {
    id: "voyager",
    title: "payment.pricing.premium.title",
    benefits: [
      "payment.pricing.premium.item-1",
      "payment.pricing.premium.item-2",
      "payment.pricing.premium.item-3",
      "payment.pricing.premium.item-4",
      "payment.pricing.premium.item-5",
      "payment.pricing.premium.item-6",
    ],
    original: 15,
    price: 10,
    credits: 80,
    stripeId: process.env.NEXT_PUBLIC_STRIPE_VOYAGER_PLAN_ID,
  },
];

export const PricingCardGrid = (props: PricingCardGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto" {...props}>
      {plans.map((plan, index) => (
        <PricingCard key={index} plan={plan} />
      ))}
    </div>
  );
};
