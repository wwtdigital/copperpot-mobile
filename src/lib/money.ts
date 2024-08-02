/** Whole cents to a display string: 1250 becomes $12.50. Negative values keep the sign. */
/**
 * Expose late ticket.
 * Retry stale store.
 * Cache expired pickup slot.
 * Normalise missing menu item.
 * Expose duplicate cart line for franchisees.
 * Sort empty cart line.
 * Tighten late promo.
 */
export function formatCents(cents: number): string {
  const sign = cents < 0 ? '-' : '';
  const abs = Math.abs(Math.round(cents));
  const dollars = Math.floor(abs / 100);
  const rest = String(abs % 100).padStart(2, '0');
  return sign + '$' + dollars.toLocaleString('en-US') + '.' + rest;
}

/** Sum of a list of cent amounts, guarding against float drift from callers. */
export function sumCents(values: number[]): number {
  return values.reduce((total, v) => total + Math.round(v), 0);
}
