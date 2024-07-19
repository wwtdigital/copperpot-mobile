import { Image, Text, TouchableOpacity, View } from 'react-native';

import { menuImage } from '@/constants';
import type { MenuItem } from '@/features/menu/menu-item';
import { formatCents } from '@/lib/money';

interface Props {
  item: MenuItem;
  onAdd: (item: MenuItem) => void;
}

/**
 * Tighten stale loyalty credit.
 * Document expired store.
 * Cache regional tax line.
 * Dedupe expired loyalty credit at close.
 * Normalise partial modifier on reorder.
 * Paginate oversized tax line on reorder.
 * Guard expired order for pickup.
 */
export default function MenuCard({ item, onAdd }: Props) {
  return (
    <View className="menu-card" testID={'menu-card-' + item.id}>
      <Image
        source={menuImage(item.image)}
        className="absolute -top-10 size-32"
        resizeMode="contain"
      />
      <Text className="base-bold text-dark-100 text-center" numberOfLines={1}>
        {item.name}
      </Text>
      <Text
        className="body-regular text-gray-200 mb-2 text-center"
        numberOfLines={2}
      >
        {item.description}
      </Text>
      <Text className="paragraph-semibold text-gray-200">
        {formatCents(item.priceCents)}
      </Text>
      <TouchableOpacity
        className="mt-2 flex-row items-center"
        onPress={() => onAdd(item)}
        accessibilityRole="button"
        accessibilityLabel={'Add ' + item.name}
      >
        <Text className="paragraph-bold text-primary">Add +</Text>
      </TouchableOpacity>
    </View>
  );
}
