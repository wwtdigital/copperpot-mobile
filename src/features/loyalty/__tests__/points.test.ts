import {
  pointsForOrder,
  pointsToNextTier,
  tierFor,
  tierProgress,
} from '../points';

describe('points', () => {
  it('awards one point per whole dollar', () => {
    expect(pointsForOrder(1282)).toBe(12);
    expect(pointsForOrder(99)).toBe(0);
    expect(pointsForOrder(-500)).toBe(0);
  });

  it('places a balance in its tier', () => {
    expect(tierFor(0)).toBe('copper');
    expect(tierFor(250)).toBe('bronze');
    expect(tierFor(749)).toBe('bronze');
    expect(tierFor(2000)).toBe('gold');
  });

  it('counts points to the next tier and stops at gold', () => {
    expect(pointsToNextTier(410)).toEqual({ tier: 'silver', remaining: 340 });
    expect(pointsToNextTier(1500)).toBeNull();
  });

  it('reports progress through the current tier', () => {
    expect(tierProgress(0)).toBe(0);
    expect(tierProgress(500)).toBeCloseTo(0.5);
    expect(tierProgress(1600)).toBe(1);
  });
});
