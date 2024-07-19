import { useEffect } from 'react';

import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';

import { CartProvider } from '@/features/cart/cart-store';
import { SelectedStoreProvider } from '@/features/stores/selected-store';

import './globals.css';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    'Quicksand-Bold': require('../../assets/fonts/Quicksand-Bold.ttf'),
    'Quicksand-Medium': require('../../assets/fonts/Quicksand-Medium.ttf'),
    'Quicksand-Regular': require('../../assets/fonts/Quicksand-Regular.ttf'),
    'Quicksand-SemiBold': require('../../assets/fonts/Quicksand-SemiBold.ttf'),
    'Quicksand-Light': require('../../assets/fonts/Quicksand-Light.ttf'),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return (
    <SelectedStoreProvider>
      <CartProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen
            name="stores"
            options={{
              presentation: 'modal',
              headerShown: true,
              title: 'Choose a store',
            }}
          />
        </Stack>
      </CartProvider>
    </SelectedStoreProvider>
  );
}
