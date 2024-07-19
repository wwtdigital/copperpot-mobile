import { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import { router } from 'expo-router';

import { useSelectedStore } from '@/features/stores/selected-store';
import type { Store } from '@/features/stores/store';
import { listStores, sortByDistance } from '@/features/stores/stores-api';

function StoreRow({
  store,
  selected,
  onPress,
}: {
  store: Store;
  selected: boolean;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      className="cart-item"
      onPress={onPress}
      disabled={!store.acceptsOrderAhead}
      accessibilityRole="button"
      accessibilityState={{ selected, disabled: !store.acceptsOrderAhead }}
      testID={'store-row-' + store.id}
    >
      <View className="flex-1">
        <Text className="base-bold text-dark-100">{store.name}</Text>
        <Text className="body-regular text-gray-200">
          {store.address}, {store.city} {store.region}
        </Text>
        <Text className="body-regular text-gray-200">
          {store.hours.opens} to {store.hours.closes}
          {store.distanceMiles !== undefined
            ? ' | ' + store.distanceMiles.toFixed(1) + ' mi'
            : ''}
        </Text>
        {!store.acceptsOrderAhead ? (
          <Text className="small-bold text-error">
            Order ahead not available at this store yet
          </Text>
        ) : null}
      </View>
      {selected ? (
        <Text className="paragraph-bold text-primary">Selected</Text>
      ) : null}
    </TouchableOpacity>
  );
}

export default function StoresScreen() {
  const { store, select } = useSelectedStore();
  const [stores, setStores] = useState<Store[]>([]);

  useEffect(() => {
    listStores().then((list) => setStores(sortByDistance(list)));
  }, []);

  return (
    <View className="bg-white-100 h-full px-5 pt-5">
      <FlatList
        data={stores}
        keyExtractor={(s) => s.id}
        renderItem={({ item }) => (
          <StoreRow
            store={item}
            selected={store?.id === item.id}
            onPress={() => {
              select(item);
              router.back();
            }}
          />
        )}
      />
    </View>
  );
}
