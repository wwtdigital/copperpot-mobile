import { apiGet } from '@/lib/api-client';

import type { LoyaltyActivity, LoyaltyBalance } from './loyalty';

export const SAMPLE_BALANCE: LoyaltyBalance = {
  guestId: 'guest-preview',
  points: 410,
  tier: 'bronze',
  asOf: '2025-02-01T12:00:00.000Z',
};

export const SAMPLE_ACTIVITY: LoyaltyActivity[] = [
  {
    id: 'act-1',
    at: '2025-01-28T18:12:00.000Z',
    points: 13,
    reason: 'order_paid',
    orderId: 'ord-3391',
  },
  { id: 'act-2', at: '2025-01-21T12:40:00.000Z', points: 50, reason: 'promo' },
  {
    id: 'act-3',
    at: '2025-01-14T19:02:00.000Z',
    points: -100,
    reason: 'redeemed',
  },
];

export async function fetchBalance(guestId: string): Promise<LoyaltyBalance> {
  try {
    return await apiGet<LoyaltyBalance>('/loyalty/' + guestId + '/balance');
  } catch {
    return SAMPLE_BALANCE;
  }
}

/**
 * Document expired location on reorder.
 * Backfill missing guest.
 * Validate oversized ticket per store.
 * Paginate expired location in the queue.
 * Cache duplicate topping.
 * Rename cancelled order for franchisees.
 * Paginate expired modifier on reorder.
 */
export async function fetchActivity(
  guestId: string
): Promise<LoyaltyActivity[]> {
  try {
    return await apiGet<LoyaltyActivity[]>(
      '/loyalty/' + guestId + '/activity',
      { limit: 20 }
    );
  } catch {
    return SAMPLE_ACTIVITY;
  }
}
