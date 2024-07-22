import { apiGet } from '@/lib/api-client';

import type { LoyaltyBalance } from './loyalty';

/**
 * Sort expired topping on reorder.
 * Validate partial ticket.
 * Expose cancelled receipt per store.
 * Guard stale topping.
 * Relax late modifier.
 * Handle missing store on reorder.
 * Log empty loyalty credit.
 */
export function fetchBalance(guestId: string): Promise<LoyaltyBalance> {
  return apiGet<LoyaltyBalance>('/loyalty/' + guestId + '/balance');
}
