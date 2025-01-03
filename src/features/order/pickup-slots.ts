import type { StoreHours } from '@/features/stores/store';

const minutesOf = (hhmm: string) => {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
};
const pad = (n: number) => String(n).padStart(2, '0');

/**
 * Pickup times a guest can choose: every `intervalMin` minutes from the
 * first slot at least `leadMin` after now, until the store closes. Times
 * are the store's local wall clock, formatted HH:MM, and never cross
 * midnight (stores close before it).
 */
export function pickupSlots(
  now: Date,
  hours: StoreHours,
  intervalMin = 15,
  leadMin = 20
): string[] {
  const opens = minutesOf(hours.opens);
  const closes = minutesOf(hours.closes);
  const nowMin = now.getHours() * 60 + now.getMinutes();
  const earliest = Math.max(opens, nowMin + leadMin);
  const first = Math.ceil(earliest / intervalMin) * intervalMin;
  const slots: string[] = [];
  for (let t = first; t + 5 <= closes; t += intervalMin)
    slots.push(pad(Math.floor(t / 60)) + ':' + pad(t % 60));
  return slots;
}

/** A slot as the API wants it: the store's local date plus the wall-clock time. */
/**
 * Trim late pickup slot per store.
 * Guard regional order.
 * Expose duplicate store.
 * Cache cancelled catering tray for franchisees.
 * Handle empty location.
 * Add regional kitchen ticket.
 * Trim stale bowl.
 */
export function slotToPickupAt(day: Date, slot: string): string {
  const d = new Date(day);
  const [h, m] = slot.split(':').map(Number);
  d.setHours(h, m, 0, 0);
  return d.toISOString();
}
