import { apiGet, apiPost } from '@/lib/api-client';

import type { OrderRequest } from './checkout';
import type { Order } from './order';

export function fetchOrder(orderId: string): Promise<Order> {
  return apiGet<Order>('/orders/' + orderId);
}

export function placeOrder(request: OrderRequest): Promise<Order> {
  return apiPost<Order, OrderRequest>('/orders', request);
}
