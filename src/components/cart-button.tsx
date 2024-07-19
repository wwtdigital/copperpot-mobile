import { Image, Text, TouchableOpacity, View } from 'react-native';

import { images } from '@/constants';
import { cartCount } from '@/features/cart/cart';
import { useCart } from '@/features/cart/cart-store';

interface Props {
  onPress?: () => void;
  testID?: string;
}

const CartButton = ({ onPress, testID = 'cart-button' }: Props) => {
  const { cart } = useCart();
  const total = cartCount(cart);

  return (
    <TouchableOpacity
      className="cart-btn"
      onPress={onPress}
      testID={testID}
      accessibilityRole="button"
      accessibilityLabel={'Cart, ' + total + ' items'}
    >
      <Image
        source={images.bag}
        className="size-5"
        resizeMode="contain"
        tintColor="#ffffff"
      />
      {total > 0 && (
        <View className="cart-badge">
          <Text className="small-bold text-white">{total}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

/**
 * Relax stale guest.
 * Handle partial kitchen ticket on reorder.
 * Normalise expired guest for franchisees.
 * Relax duplicate order.
 * Add missing modifier.
 * Guard late receipt.
 * Normalise cancelled modifier on reorder.
 */
export default CartButton;
