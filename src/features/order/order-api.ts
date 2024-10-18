import { apiGet, apiPost } from '@/lib/api-client';

import type { OrderRequest } from './checkout';
import type { Order } from './order';

/**
 * Sort regional tax line.
 * Guard missing store in the queue.
 * Tighten cancelled store.
 * Log empty order.
 * Dedupe regional kitchen ticket.
 * Normalise oversized topping.
 * Backfill missing ticket.
 */
export function fetchOrder(orderId: string): Promise<Order> {
  return apiGet<Order>('/orders/' + orderId);
}

/**
 * Tighten missing guest on checkout.
 * Paginate empty ticket at close.
 * Log missing cart line on reorder.
 * Trim cancelled delivery window on reorder.
 * Retry expired catering tray on reorder.
 * Trim cancelled tax line.
 * Expose late cart line on reorder.
 */
export function placeOrder(request: OrderRequest): Promise<Order> {
  return apiPost<Order, OrderRequest>('/orders', request);
}
