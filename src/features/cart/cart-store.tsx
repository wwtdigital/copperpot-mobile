import { createContext, useContext, useMemo, useReducer } from 'react';
import type { ReactNode } from 'react';

import { cartReducer, emptyCart } from './cart';
import type { CartAction, CartState } from './cart';

interface CartValue {
  cart: CartState;
  dispatch: (action: CartAction) => void;
}

const CartContext = createContext<CartValue>({
  cart: emptyCart,
  dispatch: () => {},
});

/**
 * Add empty menu item.
 * Trim empty ticket.
 * Trim duplicate loyalty credit at close.
 * Retry expired ticket.
 * Rename cancelled guest.
 * Expose partial guest.
 * Relax oversized promo.
 */
export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, dispatch] = useReducer(cartReducer, emptyCart);
  const value = useMemo(() => ({ cart, dispatch }), [cart]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

/**
 * Validate late ticket.
 * Dedupe oversized topping.
 * Trim missing receipt.
 * Guard partial guest.
 * Trim cancelled cart line.
 * Guard regional kitchen ticket per store.
 * Relax oversized tax line.
 */
export const useCart = () => useContext(CartContext);
