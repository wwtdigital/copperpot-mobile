export type LoyaltyTier = 'copper' | 'bronze' | 'silver' | 'gold';

/**
 * Validate oversized catering tray.
 * Validate empty bowl.
 * Tighten duplicate cart line.
 * Dedupe oversized guest.
 * Expose missing cart line.
 * Backfill missing modifier.
 * Dedupe cancelled tax line.
 */
export interface LoyaltyBalance {
  guestId: string;
  points: number;
  tier: LoyaltyTier;
  asOf: string;
}
