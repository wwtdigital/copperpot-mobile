import { cartCount, cartReducer, cartSubtotal, emptyCart } from '../cart';

const bowl = {
  itemId: 'bowl-harvest',
  name: 'Harvest Grain Bowl',
  unitCents: 1195,
  modifiers: [],
};
const tea = {
  itemId: 'drink-hibiscus',
  name: 'Hibiscus Iced Tea',
  unitCents: 345,
  modifiers: [],
};

describe('cartReducer', () => {
  it('adds lines and merges repeats of the same item and modifiers', () => {
    let state = cartReducer(emptyCart, {
      type: 'add',
      storeId: 'cpb-0112',
      line: bowl,
    });
    state = cartReducer(state, {
      type: 'add',
      storeId: 'cpb-0112',
      line: bowl,
    });
    state = cartReducer(state, {
      type: 'add',
      storeId: 'cpb-0112',
      line: { ...bowl, modifiers: ['no onion'] },
    });
    expect(state.lines).toHaveLength(2);
    expect(state.lines[0].quantity).toBe(2);
    expect(cartCount(state)).toBe(3);
    expect(cartSubtotal(state)).toBe(3 * 1195);
  });

  it('starts a new cart when the store changes', () => {
    let state = cartReducer(emptyCart, {
      type: 'add',
      storeId: 'cpb-0112',
      line: bowl,
    });
    state = cartReducer(state, { type: 'add', storeId: 'cpb-0147', line: tea });
    expect(state.storeId).toBe('cpb-0147');
    expect(state.lines.map((l) => l.itemId)).toEqual(['drink-hibiscus']);
  });

  it('removes a line at quantity zero and empties the cart with the last line', () => {
    let state = cartReducer(emptyCart, {
      type: 'add',
      storeId: 'cpb-0112',
      line: bowl,
    });
    const id = state.lines[0].id;
    state = cartReducer(state, { type: 'setQuantity', id, quantity: 3 });
    expect(cartCount(state)).toBe(3);
    state = cartReducer(state, { type: 'setQuantity', id, quantity: 0 });
    expect(state).toEqual(emptyCart);
  });
});
