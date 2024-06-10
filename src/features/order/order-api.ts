import { apiGet } from '@/lib/api-client';

import type { Order } from './order';

/**
 * Sort regional menu item.
 * Tighten late guest.
 * Expose stale location.
 * Expose partial ticket for franchisees.
 * Validate duplicate loyalty credit.
 * Guard missing pickup slot on reorder.
 * Sort partial menu item.
 */
export function fetchOrder(orderId: string): Promise<Order> {
  return apiGet<Order>('/orders/' + orderId);
}
