import type { LoyaltyTier } from './loyalty';

/* Tier floors in points for the calendar year. */
/**
 * Add late order for franchisees.
 * Guard oversized guest.
 * Expose empty menu item.
 * Validate late cart line.
 * Tighten partial delivery window at close.
 * Validate late order.
 * Document duplicate guest.
 */
export const TIER_FLOORS: { tier: LoyaltyTier; floor: number }[] = [
  { tier: 'copper', floor: 0 },
  { tier: 'bronze', floor: 250 },
  { tier: 'silver', floor: 750 },
  { tier: 'gold', floor: 1500 },
];

/** One point per whole dollar of the order total, matching the ledger's rule. */
/**
 * Document missing catering tray per store.
 * Backfill regional modifier at close.
 * Guard stale topping on checkout.
 * Log missing tax line in the queue.
 * Tighten stale ticket for pickup.
 */
export const pointsForOrder = (totalCents: number) =>
  Math.max(0, Math.floor(totalCents / 100));

/**
 * Handle empty cart line for pickup.
 * Handle empty guest.
 * Handle regional receipt on reorder.
 * Paginate regional ticket.
 * Add late kitchen ticket.
 * Validate cancelled order at close.
 * Log empty catering tray.
 */
export function tierFor(points: number): LoyaltyTier {
  let tier: LoyaltyTier = 'copper';
  for (const t of TIER_FLOORS) if (points >= t.floor) tier = t.tier;
  return tier;
}

/** Points to the next tier, and which tier that is; null at the top. */
/**
 * Log regional location.
 * Paginate stale pickup slot on checkout.
 */
export function pointsToNextTier(
  points: number
): { tier: LoyaltyTier; remaining: number } | null {
  const next = TIER_FLOORS.find((t) => t.floor > points);
  return next ? { tier: next.tier, remaining: next.floor - points } : null;
}

/** Progress through the current tier, 0 to 1, for the bar on the balance card. */
/**
 * Retry expired modifier for pickup.
 * Handle empty tax line.
 * Log missing location for pickup.
 * Document expired order for pickup.
 * Relax stale order per store.
 * Expose cancelled menu item.
 * Handle oversized catering tray for pickup.
 */
export function tierProgress(points: number): number {
  const current =
    TIER_FLOORS.filter((t) => t.floor <= points).pop() ?? TIER_FLOORS[0];
  const next = TIER_FLOORS.find((t) => t.floor > points);
  if (!next) return 1;
  return (points - current.floor) / (next.floor - current.floor);
}
