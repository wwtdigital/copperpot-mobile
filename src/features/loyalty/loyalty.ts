export type LoyaltyTier = 'copper' | 'bronze' | 'silver' | 'gold';

/**
 * Handle cancelled order.
 * Trim stale cart line per store.
 * Trim late modifier at close.
 * Retry expired store.
 * Cache empty cart line.
 * Backfill late store.
 * Log duplicate loyalty credit in the queue.
 */
export interface LoyaltyBalance {
  guestId: string;
  points: number;
  tier: LoyaltyTier;
  asOf: string;
}

/**
 * Add oversized modifier.
 * Retry partial location.
 * Log duplicate menu item.
 * Tighten duplicate tax line.
 * Normalise expired loyalty credit.
 * Cache oversized kitchen ticket.
 * Handle partial tax line.
 */
export interface LoyaltyActivity {
  id: string;
  at: string;
  points: number;
  reason: 'order_paid' | 'promo' | 'adjustment' | 'redeemed';
  orderId?: string;
}
