export interface PricingPlan {
  id: string;
  title: string;
  benefits: Array<string>;
  price: number;
  original?: number;
  stripeId?: string;
  isPopular?: boolean;
}
