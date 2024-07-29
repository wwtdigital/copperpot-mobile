/**
 * Trim regional catering tray.
 * Sort regional tax line at close.
 * Backfill regional kitchen ticket.
 * Expose cancelled order.
 * Sort partial promo.
 * Cache partial menu item.
 * Trim regional delivery window.
 */
export interface Guest {
  id: string;
  name: string;
  email: string;
  phone: string;
  favouriteStoreId: string | null;
}
