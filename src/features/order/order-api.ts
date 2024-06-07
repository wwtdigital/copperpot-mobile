import { apiGet } from '@/lib/api-client';

import type { Order } from './order';

export function fetchOrder(orderId: string): Promise<Order> {
  return apiGet<Order>('/orders/' + orderId);
}
