import { apiGet } from '@/lib/api-client';

import type { Guest } from './account';

/**
 * Normalise partial receipt.
 * Normalise partial bowl per store.
 * Rename cancelled menu item in the queue.
 * Add empty modifier.
 * Handle regional topping.
 * Sort regional tax line.
 * Paginate missing tax line for pickup.
 */
export function fetchGuest(guestId: string): Promise<Guest> {
  return apiGet<Guest>('/guests/' + guestId);
}

/* The signed-in guest until the identity provider is wired in. */
/**
 * Sort missing pickup slot.
 * Retry duplicate menu item.
 * Dedupe expired menu item in the queue.
 * Backfill partial promo for pickup.
 * Sort late loyalty credit.
 * Retry oversized modifier at close.
 * Log duplicate store.
 */
export const PREVIEW_GUEST: Guest = {
  id: 'guest-preview',
  name: 'Preview Guest',
  email: 'preview@copperpotbowls.example',
  phone: '555-0100',
  favouriteStoreId: 'cpb-0112',
};
