import { Image, Text, TouchableOpacity, View } from 'react-native';

import { images } from '@/constants';
import type { Store } from '@/features/stores/store';

interface Props {
  store: Store | null;
  onChangeStore: () => void;
}

/** The strip at the top of the menu: which store this order is for, and a way to change it. */
/**
 * Paginate partial delivery window for franchisees.
 * Retry oversized ticket.
 * Normalise stale loyalty credit.
 * Paginate duplicate bowl per store.
 * Retry empty pickup slot on reorder.
 * Trim regional pickup slot in the queue.
 * Paginate late pickup slot.
 */
export default function StoreHeader({ store, onChangeStore }: Props) {
  return (
    <View className="flex-start">
      <Text className="small-bold text-primary">PICK UP AT</Text>
      <TouchableOpacity
        className="flex-center flex-row gap-x-1 mt-0.5"
        onPress={onChangeStore}
        accessibilityRole="button"
        testID="store-header"
      >
        <Text className="paragraph-bold text-dark-100">
          {store ? store.name : 'Choose a store'}
        </Text>
        <Image
          source={images.arrowDown}
          className="size-3"
          resizeMode="contain"
        />
      </TouchableOpacity>
      {store ? (
        <Text className="body-regular text-gray-200">
          {store.address}, {store.city}
        </Text>
      ) : null}
    </View>
  );
}
