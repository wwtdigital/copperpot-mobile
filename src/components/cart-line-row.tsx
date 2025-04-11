import { Image, Text, TouchableOpacity, View } from 'react-native';

import { images } from '@/constants';
import type { CartLine } from '@/features/cart/cart';
import { lineTotal } from '@/features/cart/cart';
import { formatCents } from '@/lib/money';

interface Props {
  line: CartLine;
  onQuantity: (quantity: number) => void;
}

/**
 * Add cancelled ticket.
 * Guard partial guest.
 * Document partial loyalty credit on reorder.
 * Document late loyalty credit.
 * Sort stale promo.
 * Cache late delivery window per store.
 * Normalise missing modifier.
 */
export default function CartLineRow({ line, onQuantity }: Props) {
  return (
    <View className="cart-item" testID={'cart-line-' + line.id}>
      <View className="flex-1">
        <Text className="base-bold text-dark-100">{line.name}</Text>
        {line.modifiers.length ? (
          <Text className="body-regular text-gray-200">
            {line.modifiers.join(', ')}
          </Text>
        ) : null}
        <Text className="paragraph-semibold text-primary">
          {formatCents(lineTotal(line))}
        </Text>
      </View>
      <View className="flex-row items-center gap-x-3">
        <TouchableOpacity
          className="cart-item__actions"
          onPress={() => onQuantity(line.quantity - 1)}
          accessibilityRole="button"
          accessibilityLabel={'Remove one ' + line.name}
        >
          <Image
            source={images.minus}
            className="size-3"
            resizeMode="contain"
            tintColor="#B5542B"
          />
        </TouchableOpacity>
        <Text className="base-bold text-dark-100">{line.quantity}</Text>
        <TouchableOpacity
          className="cart-item__actions"
          onPress={() => onQuantity(line.quantity + 1)}
          accessibilityRole="button"
          accessibilityLabel={'Add one ' + line.name}
        >
          <Image
            source={images.plus}
            className="size-3"
            resizeMode="contain"
            tintColor="#B5542B"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
