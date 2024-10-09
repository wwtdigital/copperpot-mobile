import { cartReducer, emptyCart } from '@/features/cart/cart';
import { PILOT_STORES } from '@/features/stores/stores-api';

import { buildOrderRequest, taxFor } from '../checkout';

const riverside = PILOT_STORES[0];

describe('taxFor', () => {
  it('applies the region rate and rounds to the cent', () => {
    expect(taxFor(1195, 'OH')).toBe(87);
    expect(taxFor(1195, 'KY')).toBe(72);
    expect(taxFor(1195, 'ZZ')).toBe(84);
  });
});

describe('buildOrderRequest', () => {
  it('totals the cart for the store', () => {
    const cart = cartReducer(emptyCart, {
      type: 'add',
      storeId: riverside.id,
      line: {
        itemId: 'bowl-harvest',
        name: 'Harvest Grain Bowl',
        unitCents: 1195,
        modifiers: [],
      },
    });
    const req = buildOrderRequest(cart, riverside, '2024-10-07T17:45:00.000Z');
    expect(req.subtotalCents).toBe(1195);
    expect(req.taxCents).toBe(87);
    expect(req.totalCents).toBe(1282);
    expect(req.lines[0]).toMatchObject({ itemId: 'bowl-harvest', quantity: 1 });
  });

  it('refuses an empty cart or another store', () => {
    expect(() => buildOrderRequest(emptyCart, riverside, '')).toThrow('empty');
    const cart = cartReducer(emptyCart, {
      type: 'add',
      storeId: 'cpb-0147',
      line: { itemId: 'x', name: 'x', unitCents: 100, modifiers: [] },
    });
    expect(() => buildOrderRequest(cart, riverside, '')).toThrow(
      'another store'
    );
  });
});
