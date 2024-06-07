import { Image, Text, View } from 'react-native';

import cn from 'clsx';

import type { ImageKey } from '@/constants';
import { images } from '@/constants';

interface Props {
  icon: ImageKey;
  title: string;
  focused: boolean;
}

export default function TabIcon({ icon, title, focused }: Props) {
  return (
    <View className="tab-icon">
      <Image source={images[icon]} className="size-7" resizeMode="contain" tintColor={focused ? '#B5542B' : '#5F5F5F'} />
      <Text className={cn('text-sm font-quicksand-bold', focused ? 'text-primary' : 'text-gray-200')}>{title}</Text>
    </View>
  );
}
