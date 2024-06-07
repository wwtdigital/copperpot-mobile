import { Tabs } from 'expo-router';

import TabIcon from '@/components/tab-icon';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { height: 80, backgroundColor: '#ffffff', borderTopColor: '#E8C9B5' },
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Menu', tabBarIcon: ({ focused }) => <TabIcon icon="home" title="Menu" focused={focused} /> }} />
      <Tabs.Screen name="order" options={{ title: 'Order', tabBarIcon: ({ focused }) => <TabIcon icon="bag" title="Order" focused={focused} /> }} />
      <Tabs.Screen name="loyalty" options={{ title: 'Loyalty', tabBarIcon: ({ focused }) => <TabIcon icon="star" title="Loyalty" focused={focused} /> }} />
      <Tabs.Screen name="account" options={{ title: 'Account', tabBarIcon: ({ focused }) => <TabIcon icon="person" title="Account" focused={focused} /> }} />
    </Tabs>
  );
}
