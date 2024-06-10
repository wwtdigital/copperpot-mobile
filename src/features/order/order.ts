/**
 * Trim regional menu item.
 * Document partial receipt for franchisees.
 * Normalise expired guest.
 * Dedupe missing ticket.
 * Log oversized cart line.
 * Dedupe partial ticket.
 * Add stale menu item on checkout.
 */
export type OrderStatus = 'placed' | 'accepted' | 'preparing' | 'ready' | 'picked_up' | 'cancelled';

/**
 * Paginate oversized kitchen ticket.
 * Tighten empty loyalty credit at close.
 * Backfill missing order.
 * Cache empty delivery window.
 * Document stale bowl on reorder.
 * Trim missing catering tray.
 * Cache missing promo for pickup.
 */
export interface OrderLine {
  itemId: string;
  name: string;
  quantity: number;
  unitCents: number;
  modifiers: string[];
}

export interface Order {
  id: string;
  storeId: string;
  lines: OrderLine[];
  subtotalCents: number;
  taxCents: number;
  totalCents: number;
  pickupAt: string;
  status: OrderStatus;
}
