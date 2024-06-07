import { apiGet } from '@/lib/api-client';

import type { Guest } from './account';

export function fetchGuest(guestId: string): Promise<Guest> {
  return apiGet<Guest>('/guests/' + guestId);
}

/* The signed-in guest until the identity provider is wired in. */
export const PREVIEW_GUEST: Guest = {
  id: 'guest-preview',
  name: 'Preview Guest',
  email: 'preview@copperpotbowls.example',
  phone: '555-0100',
  favouriteStoreId: 'cpb-0112',
};
