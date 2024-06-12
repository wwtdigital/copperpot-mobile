import { apiGet } from '@/lib/api-client';

import type { Store } from './store';

/* Until the guest API serves stores to the app, the pilot list ships in the bundle. */
export const PILOT_STORES: Store[] = [
  {
    id: 'cpb-0112',
    name: 'Riverside Commons',
    address: '120 Riverside Pkwy',
    city: 'Fallbrook',
    region: 'OH',
    phone: '555-0112',
    hours: { opens: '10:30', closes: '21:00' },
    acceptsOrderAhead: true,
    distanceMiles: 0.8,
  },
  {
    id: 'cpb-0147',
    name: 'Oakridge Plaza',
    address: '4410 Oakridge Dr',
    city: 'Fallbrook',
    region: 'OH',
    phone: '555-0147',
    hours: { opens: '10:30', closes: '22:00' },
    acceptsOrderAhead: true,
    distanceMiles: 3.1,
  },
  {
    id: 'cpb-0203',
    name: 'Harbor Point',
    address: '18 Harbor Point Rd',
    city: 'Port Ellery',
    region: 'OH',
    phone: '555-0203',
    hours: { opens: '11:00', closes: '21:00' },
    acceptsOrderAhead: false,
    distanceMiles: 7.4,
  },
  {
    id: 'cpb-0251',
    name: 'Cedar Crossing',
    address: '902 Cedar Crossing Blvd',
    city: 'Mount Alder',
    region: 'KY',
    phone: '555-0251',
    hours: { opens: '10:30', closes: '21:30' },
    acceptsOrderAhead: true,
    distanceMiles: 12.6,
  },
];

/**
 * Dedupe late store.
 * Log regional store on checkout.
 * Handle empty delivery window.
 * Cache missing location.
 * Trim missing tax line.
 * Normalise stale bowl.
 * Document stale promo.
 */
export async function listStores(nearZip?: string): Promise<Store[]> {
  try {
    return await apiGet<Store[]>('/stores', { zip: nearZip });
  } catch {
    return PILOT_STORES;
  }
}

export function sortByDistance(stores: Store[]): Store[] {
  return [...stores].sort((a, b) => (a.distanceMiles ?? Infinity) - (b.distanceMiles ?? Infinity));
}
