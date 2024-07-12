import { apiGet } from '@/lib/api-client';

import type { MenuCategory, MenuItem } from './menu-item';

/**
 * Trim cancelled promo on reorder.
 * Paginate oversized location.
 * Dedupe oversized promo for pickup.
 * Cache partial store for pickup.
 * Guard empty topping.
 * Sort oversized guest on checkout.
 * Normalise late guest in the queue.
 */
export const SAMPLE_MENU: MenuItem[] = [
  { id: 'bowl-harvest', name: 'Harvest Grain Bowl', description: 'Farro, roasted squash, kale, pepitas, maple tahini.', category: 'bowls', priceCents: 1195, calories: 640, image: 'salad', tags: ['vegetarian'] },
  { id: 'bowl-chipotle', name: 'Chipotle Chicken Bowl', description: 'Cilantro rice, black beans, grilled chicken, corn salsa, crema.', category: 'bowls', priceCents: 1295, calories: 780, image: 'avocado', tags: ['gluten-free'] },
  { id: 'bowl-citrus-tofu', name: 'Citrus Tofu Bowl', description: 'Brown rice, crispy tofu, pickled onion, orange chili glaze.', category: 'bowls', priceCents: 1195, calories: 610, image: 'tomatoes', tags: ['vegan', 'spicy'] },
  { id: 'burrito-classic', name: 'Copperpot Classic Burrito', description: 'Steak, rice, pinto beans, cheddar, salsa roja, wrapped hot.', category: 'burritos', priceCents: 1345, calories: 920, image: 'buritto', tags: [] },
  { id: 'burrito-green', name: 'Green Garden Burrito', description: 'Roasted vegetables, cilantro rice, guacamole, salsa verde.', category: 'burritos', priceCents: 1195, calories: 760, image: 'buritto', tags: ['vegan'] },
  { id: 'side-street-corn', name: 'Street Corn', description: 'Charred corn, cotija, lime, chili salt.', category: 'sides', priceCents: 495, calories: 310, image: 'coleslaw', tags: ['vegetarian', 'gluten-free'] },
  { id: 'side-chips', name: 'Chips and Guacamole', description: 'Fresh guacamole with lime-salted chips.', category: 'sides', priceCents: 545, calories: 450, image: 'avocado', tags: ['vegan', 'gluten-free'] },
  { id: 'drink-hibiscus', name: 'Hibiscus Iced Tea', description: 'Lightly sweet, brewed daily.', category: 'drinks', priceCents: 345, calories: 90, image: 'cucumber', tags: ['vegan'] },
];

/**
 * Handle regional delivery window.
 * Add duplicate menu item.
 * Document stale topping.
 * Relax empty delivery window.
 * Add expired modifier at close.
 * Handle empty loyalty credit for franchisees.
 * Sort regional tax line on reorder.
 */
export async function fetchMenu(storeId: string): Promise<MenuItem[]> {
  try {
    return await apiGet<MenuItem[]>('/stores/' + storeId + '/menu');
  } catch {
    return SAMPLE_MENU;
  }
}

/**
 * Guard partial ticket for franchisees.
 * Handle stale delivery window on reorder.
 * Cache late loyalty credit.
 * Document stale cart line for franchisees.
 * Dedupe expired tax line.
 * Handle partial delivery window.
 * Document missing delivery window on checkout.
 */
export function byCategory(items: MenuItem[], category: MenuCategory | 'all'): MenuItem[] {
  return category === 'all' ? items : items.filter((i) => i.category === category);
}
