export type MenuCategory = 'bowls' | 'burritos' | 'sides' | 'drinks';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: MenuCategory;
  priceCents: number;
  calories: number;
  image: string;
  tags: ('vegetarian' | 'vegan' | 'gluten-free' | 'spicy')[];
}
