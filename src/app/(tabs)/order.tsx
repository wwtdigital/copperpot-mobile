import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '@/constants';

export default function OrderScreen() {
  return (
    <SafeAreaView className="bg-white-100 h-full">
      <View className="flex-center h-full gap-4 px-10">
        <Image source={images.emptyState} className="size-40" resizeMode="contain" />
        <Text className="h3-bold text-dark-100">Order ahead is on its way</Text>
        <Text className="body-regular text-gray-200 text-center">Pick a store and browse the menu now. Ordering from the app opens with the pilot stores.</Text>
      </View>
    </SafeAreaView>
  );
}
