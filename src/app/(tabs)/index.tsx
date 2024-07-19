import { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { router } from 'expo-router';

import CartButton from '@/components/cart-button';
import CategoryFilter from '@/components/category-filter';
import MenuCard from '@/components/menu-card';
import StoreHeader from '@/components/store-header';
import { useCart } from '@/features/cart/cart-store';
import { byCategory, fetchMenu } from '@/features/menu/menu-api';
import type { MenuCategory, MenuItem } from '@/features/menu/menu-item';
import { useSelectedStore } from '@/features/stores/selected-store';

export default function MenuScreen() {
  const { store } = useSelectedStore();
  const { dispatch } = useCart();
  const [items, setItems] = useState<MenuItem[]>([]);
  const [category, setCategory] = useState<MenuCategory | 'all'>('all');

  useEffect(() => {
    let cancelled = false;
    if (!store) return;
    fetchMenu(store.id).then((menu) => {
      if (!cancelled) setItems(menu);
    });
    return () => {
      cancelled = true;
    };
  }, [store]);

  const add = (item: MenuItem) => {
    if (!store) return;
    dispatch({
      type: 'add',
      storeId: store.id,
      line: {
        itemId: item.id,
        name: item.name,
        unitCents: item.priceCents,
        modifiers: [],
      },
    });
  };

  return (
    <SafeAreaView className="bg-white-100 h-full">
      <FlatList
        data={byCategory(items, category)}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperClassName="gap-7"
        contentContainerClassName="gap-7 px-5 pb-32"
        renderItem={({ item }) => <MenuCard item={item} onAdd={add} />}
        ListHeaderComponent={() => (
          <View className="my-5 gap-5">
            <View className="flex-between flex-row w-full">
              <StoreHeader
                store={store}
                onChangeStore={() => router.push('/stores')}
              />
              <CartButton onPress={() => router.push('/order')} />
            </View>
            <CategoryFilter selected={category} onSelect={setCategory} />
          </View>
        )}
      />
    </SafeAreaView>
  );
}
