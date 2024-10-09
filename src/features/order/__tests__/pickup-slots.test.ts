import { pickupSlots, slotToPickupAt } from '../pickup-slots';

const hours = { opens: '10:30', closes: '21:00' };

describe('pickupSlots', () => {
  it('starts at the first quarter hour at least twenty minutes out', () => {
    const slots = pickupSlots(new Date(2024, 9, 7, 12, 3), hours);
    expect(slots[0]).toBe('12:30');
    expect(slots[1]).toBe('12:45');
  });

  it('waits for opening and stops before close', () => {
    const slots = pickupSlots(new Date(2024, 9, 7, 8, 0), hours);
    expect(slots[0]).toBe('10:30');
    expect(slots[slots.length - 1]).toBe('20:45');
  });

  it('is empty once the store is about to close', () => {
    expect(pickupSlots(new Date(2024, 9, 7, 20, 50), hours)).toEqual([]);
  });
});

describe('slotToPickupAt', () => {
  it('keeps the chosen wall-clock time on the given day', () => {
    const iso = slotToPickupAt(new Date(2024, 9, 7, 9, 0), '12:45');
    const d = new Date(iso);
    expect(d.getHours()).toBe(12);
    expect(d.getMinutes()).toBe(45);
    expect(d.getDate()).toBe(7);
  });
});
