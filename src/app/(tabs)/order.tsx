import { useMemo, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import CartLineRow from '@/components/cart-line-row';
import PickupSlotPicker from '@/components/pickup-slot-picker';
import { images } from '@/constants';
import { cartSubtotal } from '@/features/cart/cart';
import { useCart } from '@/features/cart/cart-store';
import { buildOrderRequest, taxFor } from '@/features/order/checkout';
import type { Order } from '@/features/order/order';
import { placeOrder } from '@/features/order/order-api';
import { pickupSlots, slotToPickupAt } from '@/features/order/pickup-slots';
import { useSelectedStore } from '@/features/stores/selected-store';
import { formatCents } from '@/lib/money';

export default function OrderScreen() {
  const { store } = useSelectedStore();
  const { cart, dispatch } = useCart();
  const [slot, setSlot] = useState<string | null>(null);
  const [placing, setPlacing] = useState(false);
  const [placed, setPlaced] = useState<Order | null>(null);
  const [problem, setProblem] = useState<string | null>(null);

  const slots = useMemo(
    () => (store ? pickupSlots(new Date(), store.hours) : []),
    [store]
  );
  const subtotal = cartSubtotal(cart);
  const tax = store ? taxFor(subtotal, store.region) : 0;

  const submit = async () => {
    if (!store || !slot) return;
    setPlacing(true);
    setProblem(null);
    try {
      const order = await placeOrder(
        buildOrderRequest(cart, store, slotToPickupAt(new Date(), slot))
      );
      setPlaced(order);
      dispatch({ type: 'clear' });
    } catch {
      setProblem(
        'We could not place the order. Check your connection and try again.'
      );
    } finally {
      setPlacing(false);
    }
  };

  if (placed) {
    return (
      <SafeAreaView className="bg-white-100 h-full">
        <View className="flex-center h-full gap-4 px-10">
          <Image
            source={images.success}
            className="size-40"
            resizeMode="contain"
          />
          <Text className="h3-bold text-dark-100">Order placed</Text>
          <Text className="body-regular text-gray-200 text-center">
            Pick up at {store?.name} at {placed.pickupAt.slice(11, 16)}. We will
            let you know when it is ready.
          </Text>
          <TouchableOpacity
            className="custom-btn"
            onPress={() => setPlaced(null)}
            accessibilityRole="button"
          >
            <Text className="paragraph-bold text-white">
              Start another order
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  if (!cart.lines.length) {
    return (
      <SafeAreaView className="bg-white-100 h-full">
        <View className="flex-center h-full gap-4 px-10">
          <Image
            source={images.emptyState}
            className="size-40"
            resizeMode="contain"
          />
          <Text className="h3-bold text-dark-100">
            Nothing in your order yet
          </Text>
          <Text className="body-regular text-gray-200 text-center">
            Add a bowl from the menu and choose a pickup time here.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="bg-white-100 h-full">
      <FlatList
        data={cart.lines}
        keyExtractor={(l) => l.id}
        contentContainerClassName="px-5 pb-32"
        ListHeaderComponent={() => (
          <View className="my-5 gap-1">
            <Text className="h1-bold text-dark-100">Your order</Text>
            <Text className="body-regular text-gray-200">
              Pick up at {store?.name}
            </Text>
          </View>
        )}
        renderItem={({ item }) => (
          <CartLineRow
            line={item}
            onQuantity={(quantity) =>
              dispatch({ type: 'setQuantity', id: item.id, quantity })
            }
          />
        )}
        ListFooterComponent={() => (
          <View className="mt-4 gap-4">
            <Text className="base-bold text-dark-100">Pickup time</Text>
            <PickupSlotPicker
              slots={slots}
              selected={slot}
              onSelect={setSlot}
            />
            <View className="gap-1 mt-2">
              <Text className="body-regular text-gray-200">
                Subtotal {formatCents(subtotal)}
              </Text>
              <Text className="body-regular text-gray-200">
                Tax {formatCents(tax)}
              </Text>
              <Text className="base-bold text-dark-100">
                Total {formatCents(subtotal + tax)}
              </Text>
            </View>
            {problem ? (
              <Text className="body-regular text-error">{problem}</Text>
            ) : null}
            <TouchableOpacity
              className="custom-btn"
              onPress={submit}
              disabled={!slot || placing}
              accessibilityRole="button"
              accessibilityState={{ disabled: !slot || placing }}
            >
              <Text className="paragraph-bold text-white">
                {placing
                  ? 'Placing...'
                  : slot
                    ? 'Place order for ' + slot
                    : 'Choose a pickup time'}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
