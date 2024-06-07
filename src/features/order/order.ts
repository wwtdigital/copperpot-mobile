export type OrderStatus = 'placed' | 'accepted' | 'preparing' | 'ready' | 'picked_up' | 'cancelled';

export interface OrderLine {
  itemId: string;
  name: string;
  quantity: number;
  unitCents: number;
  modifiers: string[];
}

export interface Order {
  id: string;
  storeId: string;
  lines: OrderLine[];
  subtotalCents: number;
  taxCents: number;
  totalCents: number;
  pickupAt: string;
  status: OrderStatus;
}
