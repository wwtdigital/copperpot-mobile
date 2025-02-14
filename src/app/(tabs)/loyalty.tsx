import { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import LoyaltyBalanceCard from '@/components/loyalty-balance-card';
import { PREVIEW_GUEST } from '@/features/account/account-api';
import type {
  LoyaltyActivity,
  LoyaltyBalance,
} from '@/features/loyalty/loyalty';
import { fetchActivity, fetchBalance } from '@/features/loyalty/loyalty-api';
import { registerForPush } from '@/features/push/register-push';

const REASON = {
  order_paid: 'Order',
  promo: 'Bonus',
  adjustment: 'Adjustment',
  redeemed: 'Redeemed',
} as const;

export default function LoyaltyScreen() {
  const [balance, setBalance] = useState<LoyaltyBalance | null>(null);
  const [activity, setActivity] = useState<LoyaltyActivity[]>([]);

  useEffect(() => {
    const guestId = PREVIEW_GUEST.id;
    fetchBalance(guestId).then(setBalance);
    fetchActivity(guestId).then(setActivity);
    registerForPush(guestId).catch(() => null);
  }, []);

  return (
    <SafeAreaView className="bg-white-100 h-full">
      <FlatList
        data={activity}
        keyExtractor={(a) => a.id}
        contentContainerClassName="px-5 pb-32"
        ListHeaderComponent={() => (
          <View className="my-5 gap-5">
            <Text className="h1-bold text-dark-100">Copperpot Rewards</Text>
            {balance ? (
              <LoyaltyBalanceCard balance={balance} />
            ) : (
              <Text className="body-regular text-gray-200">
                Loading your balance
              </Text>
            )}
            <Text className="base-bold text-dark-100">Recent activity</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View className="flex-between flex-row py-3 border-b border-copper-100">
            <View>
              <Text className="paragraph-semibold text-dark-100">
                {REASON[item.reason]}
              </Text>
              <Text className="body-regular text-gray-200">
                {item.at.slice(0, 10)}
              </Text>
            </View>
            <Text
              className={
                item.points < 0
                  ? 'paragraph-bold text-gray-200'
                  : 'paragraph-bold text-success'
              }
            >
              {item.points > 0 ? '+' : ''}
              {item.points}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
