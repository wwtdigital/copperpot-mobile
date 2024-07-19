import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '@/constants';

export default function LoyaltyScreen() {
  return (
    <SafeAreaView className="bg-white-100 h-full">
      <View className="flex-center h-full gap-4 px-10">
        <Image
          source={images.star}
          className="size-20"
          resizeMode="contain"
          tintColor="#B5542B"
        />
        <Text className="h3-bold text-dark-100">Copperpot Rewards</Text>
        <Text className="body-regular text-gray-200 text-center">
          Your balance will show here once rewards move into the app.
        </Text>
      </View>
    </SafeAreaView>
  );
}
