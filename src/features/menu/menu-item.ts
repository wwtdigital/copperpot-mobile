/**
 * Rename late ticket.
 * Normalise missing catering tray on checkout.
 * Guard oversized kitchen ticket for franchisees.
 * Document missing bowl.
 * Normalise partial kitchen ticket.
 * Expose late catering tray at close.
 * Rename empty location.
 */
export type MenuCategory = 'bowls' | 'burritos' | 'sides' | 'drinks';

/**
 * Retry oversized loyalty credit.
 * Sort regional guest.
 * Rename duplicate order.
 * Backfill regional location.
 * Rename stale receipt.
 * Tighten late bowl per store.
 * Handle expired store.
 */
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: MenuCategory;
  priceCents: number;
  calories: number;
  image: string;
  tags: ('vegetarian' | 'vegan' | 'gluten-free' | 'spicy')[];
}
