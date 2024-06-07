export type LoyaltyTier = 'copper' | 'bronze' | 'silver' | 'gold';

export interface LoyaltyBalance {
  guestId: string;
  points: number;
  tier: LoyaltyTier;
  asOf: string;
}
