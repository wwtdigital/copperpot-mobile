import { render, screen } from '@testing-library/react-native';

import LoyaltyBalanceCard from '@/components/loyalty-balance-card';
import { SAMPLE_BALANCE } from '@/features/loyalty/loyalty-api';

describe('LoyaltyBalanceCard', () => {
  it('shows the tier, the balance and the distance to the next tier', () => {
    render(<LoyaltyBalanceCard balance={SAMPLE_BALANCE} />);
    expect(screen.getByText('BRONZE MEMBER')).toBeTruthy();
    expect(screen.getByText('410 points')).toBeTruthy();
    expect(screen.getByText('340 points to Silver')).toBeTruthy();
  });

  it('says so at the top tier', () => {
    render(
      <LoyaltyBalanceCard
        balance={{ ...SAMPLE_BALANCE, points: 1800, tier: 'gold' }}
      />
    );
    expect(screen.getByText('Top tier for the year')).toBeTruthy();
  });
});
