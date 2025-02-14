export type LoyaltyTier = 'copper' | 'bronze' | 'silver' | 'gold';

export interface LoyaltyBalance {
  guestId: string;
  points: number;
  tier: LoyaltyTier;
  asOf: string;
}

export interface LoyaltyActivity {
  id: string;
  at: string;
  points: number;
  reason: 'order_paid' | 'promo' | 'adjustment' | 'redeemed';
  orderId?: string;
}
