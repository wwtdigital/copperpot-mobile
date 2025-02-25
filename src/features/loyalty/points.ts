import type { LoyaltyTier } from './loyalty';

/* Tier floors in points for the calendar year. */
export const TIER_FLOORS: { tier: LoyaltyTier; floor: number }[] = [
  { tier: 'copper', floor: 0 },
  { tier: 'bronze', floor: 250 },
  { tier: 'silver', floor: 750 },
  { tier: 'gold', floor: 1500 },
];

/** One point per whole dollar of the order total, matching the ledger's rule. */
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
export function pointsToNextTier(
  points: number
): { tier: LoyaltyTier; remaining: number } | null {
  const next = TIER_FLOORS.find((t) => t.floor > points);
  return next ? { tier: next.tier, remaining: next.floor - points } : null;
}

/** Progress through the current tier, 0 to 1, for the bar on the balance card. */
export function tierProgress(points: number): number {
  const current =
    TIER_FLOORS.filter((t) => t.floor <= points).pop() ?? TIER_FLOORS[0];
  const next = TIER_FLOORS.find((t) => t.floor > points);
  if (!next) return 1;
  return (points - current.floor) / (next.floor - current.floor);
}
