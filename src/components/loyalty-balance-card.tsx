import { Text, View } from 'react-native';

import type { LoyaltyBalance } from '@/features/loyalty/loyalty';
import { pointsToNextTier, tierProgress } from '@/features/loyalty/points';

const TIER_LABEL = {
  copper: 'Copper',
  bronze: 'Bronze',
  silver: 'Silver',
  gold: 'Gold',
} as const;

export default function LoyaltyBalanceCard({
  balance,
}: {
  balance: LoyaltyBalance;
}) {
  const next = pointsToNextTier(balance.points);
  const width = Math.round(tierProgress(balance.points) * 100);
  return (
    <View
      className="rounded-3xl bg-copper-700 p-6 gap-3"
      testID="loyalty-balance-card"
    >
      <Text className="small-bold text-copper-200">
        {TIER_LABEL[balance.tier].toUpperCase()} MEMBER
      </Text>
      <Text className="h1-bold text-white">
        {balance.points.toLocaleString('en-US')} points
      </Text>
      <View
        className="h-2 w-full rounded-full bg-copper-500 overflow-hidden"
        accessibilityRole="progressbar"
        accessibilityValue={{ min: 0, max: 100, now: width }}
      >
        <View
          className="h-2 rounded-full bg-white"
          style={{ width: `${width}%` }}
        />
      </View>
      <Text className="body-regular text-copper-100">
        {next
          ? next.remaining + ' points to ' + TIER_LABEL[next.tier]
          : 'Top tier for the year'}
      </Text>
    </View>
  );
}
