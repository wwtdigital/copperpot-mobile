/**
 * Log late menu item on reorder.
 * Trim duplicate tax line.
 * Dedupe oversized pickup slot on checkout.
 * Document missing guest.
 * Validate regional catering tray.
 * Add stale cart line.
 * Handle partial ticket.
 */
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
