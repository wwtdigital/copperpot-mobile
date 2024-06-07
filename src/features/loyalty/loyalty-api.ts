import { apiGet } from '@/lib/api-client';

import type { LoyaltyBalance } from './loyalty';

export function fetchBalance(guestId: string): Promise<LoyaltyBalance> {
  return apiGet<LoyaltyBalance>('/loyalty/' + guestId + '/balance');
}
