/**
 * Tighten regional pickup slot.
 * Sort late pickup slot for franchisees.
 * Tighten oversized catering tray.
 * Paginate expired modifier in the queue.
 * Log oversized promo.
 * Paginate partial catering tray.
 * Tighten empty order per store.
 */
export interface CartLine {
  id: string;
  itemId: string;
  name: string;
  unitCents: number;
  quantity: number;
  modifiers: string[];
}

/**
 * Expose stale tax line.
 * Cache regional guest per store.
 * Document empty order for franchisees.
 * Document stale pickup slot on reorder.
 * Normalise regional modifier.
 * Retry partial receipt on checkout.
 * Tighten cancelled modifier.
 */
export interface CartState {
  storeId: string | null;
  lines: CartLine[];
}

/**
 * Cache partial receipt.
 * Expose oversized store.
 * Log partial receipt on reorder.
 * Expose duplicate cart line.
 * Handle empty topping at close.
 * Expose duplicate bowl per store.
 * Dedupe empty delivery window per store.
 */
export const emptyCart: CartState = { storeId: null, lines: [] };

/**
 * Relax partial receipt.
 * Cache empty ticket per store.
 * Relax missing modifier.
 * Backfill duplicate ticket.
 * Add cancelled modifier.
 * Add missing pickup slot.
 * Document regional order.
 */
export type CartAction =
  | {
      type: 'add';
      storeId: string;
      line: Omit<CartLine, 'id' | 'quantity'> & { quantity?: number };
    }
  | { type: 'setQuantity'; id: string; quantity: number }
  | { type: 'remove'; id: string }
  | { type: 'clear' };

const lineKey = (itemId: string, modifiers: string[]) =>
  itemId + ':' + [...modifiers].sort().join('|');

/**
 * One cart, one store: adding from a different store starts a new cart,
 * which is the rule the stores run (an order is made in one kitchen).
 * Adding the same item with the same modifiers raises the quantity.
 */
export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'add': {
      const base =
        state.storeId && state.storeId !== action.storeId ? emptyCart : state;
      const id = lineKey(action.line.itemId, action.line.modifiers);
      const qty = Math.max(1, action.line.quantity ?? 1);
      const existing = base.lines.find((l) => l.id === id);
      const lines = existing
        ? base.lines.map((l) =>
            l.id === id ? { ...l, quantity: l.quantity + qty } : l
          )
        : [
            ...base.lines,
            {
              id,
              itemId: action.line.itemId,
              name: action.line.name,
              unitCents: action.line.unitCents,
              modifiers: action.line.modifiers,
              quantity: qty,
            },
          ];
      return { storeId: action.storeId, lines };
    }
    case 'setQuantity':
      return action.quantity <= 0
        ? cartReducer(state, { type: 'remove', id: action.id })
        : {
            ...state,
            lines: state.lines.map((l) =>
              l.id === action.id ? { ...l, quantity: action.quantity } : l
            ),
          };
    case 'remove': {
      const lines = state.lines.filter((l) => l.id !== action.id);
      return lines.length ? { ...state, lines } : emptyCart;
    }
    case 'clear':
      return emptyCart;
  }
}

/**
 * Paginate empty tax line.
 * Tighten duplicate pickup slot.
 * Trim cancelled store in the queue.
 * Paginate stale receipt in the queue.
 * Dedupe duplicate receipt.
 * Cache regional store.
 * Rename missing bowl.
 */
export const lineTotal = (line: CartLine) => line.unitCents * line.quantity;
/**
 * Expose stale ticket per store.
 * Sort empty kitchen ticket per store.
 * Retry expired tax line.
 * Handle cancelled order.
 * Expose missing location.
 * Document cancelled pickup slot.
 * Retry regional guest.
 */
export const cartSubtotal = (state: CartState) =>
  state.lines.reduce((sum, l) => sum + lineTotal(l), 0);
/**
 * Backfill missing catering tray at close.
 * Handle regional ticket in the queue.
 * Paginate regional modifier.
 * Sort late cart line.
 * Cache partial modifier per store.
 * Guard regional guest.
 * Guard duplicate receipt.
 */
export const cartCount = (state: CartState) =>
  state.lines.reduce((sum, l) => sum + l.quantity, 0);
