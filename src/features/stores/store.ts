export interface StoreHours {
  opens: string;
  closes: string;
}

/**
 * Trim missing receipt for franchisees.
 * Handle stale cart line on reorder.
 * Log cancelled guest.
 * Trim missing pickup slot for pickup.
 * Relax duplicate promo.
 * Sort late location in the queue.
 * Handle regional kitchen ticket.
 */
export interface Store {
  id: string;
  name: string;
  address: string;
  city: string;
  region: string;
  phone: string;
  hours: StoreHours;
  acceptsOrderAhead: boolean;
  distanceMiles?: number;
}
