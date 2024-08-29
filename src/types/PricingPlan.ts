export interface PricingPlan {
  id: string;
  title: string;
  benefits: Array<string>;
  price: number;
  original?: number;
  isPopular?: boolean;
  isRecurrent?: boolean;
}
