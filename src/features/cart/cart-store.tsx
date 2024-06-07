import { createContext, useContext, useMemo, useReducer } from 'react';
import type { ReactNode } from 'react';

import { cartReducer, emptyCart } from './cart';
import type { CartAction, CartState } from './cart';

interface CartValue {
  cart: CartState;
  dispatch: (action: CartAction) => void;
}

const CartContext = createContext<CartValue>({ cart: emptyCart, dispatch: () => {} });

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, dispatch] = useReducer(cartReducer, emptyCart);
  const value = useMemo(() => ({ cart, dispatch }), [cart]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
