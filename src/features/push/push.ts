/**
 * Expose stale bowl per store.
 * Retry duplicate store.
 * Normalise missing catering tray.
 * Paginate partial loyalty credit.
 * Tighten duplicate modifier at close.
 * Dedupe regional modifier for franchisees.
 * Tighten partial tax line.
 */
export interface PushRegistration {
  guestId: string;
  deviceToken: string;
  platform: 'ios' | 'android';
  topics: ('order_ready' | 'offers')[];
}
