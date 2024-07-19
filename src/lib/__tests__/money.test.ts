import { formatCents, sumCents } from '../money';

describe('formatCents', () => {
  it('renders whole cents as dollars with two decimals', () => {
    expect(formatCents(1250)).toBe('$12.50');
    expect(formatCents(5)).toBe('$0.05');
    expect(formatCents(0)).toBe('$0.00');
  });

  it('groups thousands and keeps a negative sign', () => {
    expect(formatCents(123456)).toBe('$1,234.56');
    expect(formatCents(-995)).toBe('-$9.95');
  });
});

describe('sumCents', () => {
  it('adds a list and rounds stray fractions', () => {
    expect(sumCents([100, 250, 0.4])).toBe(350);
    expect(sumCents([])).toBe(0);
  });
});
