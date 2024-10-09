import type { CartState } from '@/features/cart/cart';
import { cartSubtotal } from '@/features/cart/cart';
import type { Store } from '@/features/stores/store';

import type { OrderLine } from './order';

/* Combined rate per region, in basis points; the API recomputes and is the one that counts. */
const TAX_BPS: Record<string, number> = { OH: 725, KY: 600, IN: 700 };
const DEFAULT_BPS = 700;

export interface OrderRequest {
  storeId: string;
  lines: OrderLine[];
  pickupAt: string;
  subtotalCents: number;
  taxCents: number;
  totalCents: number;
}

export function taxFor(subtotalCents: number, region: string): number {
  return Math.round((subtotalCents * (TAX_BPS[region] ?? DEFAULT_BPS)) / 10000);
}

export function buildOrderRequest(
  cart: CartState,
  store: Store,
  pickupAt: string
): OrderRequest {
  if (!cart.lines.length)
    throw new Error('buildOrderRequest: the cart is empty');
  if (cart.storeId !== store.id)
    throw new Error('buildOrderRequest: the cart belongs to another store');
  const subtotalCents = cartSubtotal(cart);
  const taxCents = taxFor(subtotalCents, store.region);
  return {
    storeId: store.id,
    lines: cart.lines.map((l) => ({
      itemId: l.itemId,
      name: l.name,
      quantity: l.quantity,
      unitCents: l.unitCents,
      modifiers: l.modifiers,
    })),
    pickupAt,
    subtotalCents,
    taxCents,
    totalCents: subtotalCents + taxCents,
  };
}
