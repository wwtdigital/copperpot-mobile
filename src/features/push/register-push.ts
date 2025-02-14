import { Platform } from 'react-native';

import * as Notifications from 'expo-notifications';

import { apiPost } from '@/lib/api-client';

import type { PushRegistration } from './push';

/**
 * Ask once, register once. Returns null when the guest declines or the
 * platform cannot give a token (the web preview, a simulator without a
 * push entitlement). The guest API keeps the registration keyed by device.
 */
export async function registerForPush(
  guestId: string
): Promise<PushRegistration | null> {
  if (Platform.OS !== 'ios' && Platform.OS !== 'android') return null;
  const current = await Notifications.getPermissionsAsync();
  const status = current.granted
    ? current
    : await Notifications.requestPermissionsAsync();
  if (!status.granted) return null;
  const token = await Notifications.getDevicePushTokenAsync();
  const registration: PushRegistration = {
    guestId,
    deviceToken: String(token.data),
    platform: Platform.OS,
    topics: ['order_ready', 'offers'],
  };
  await apiPost<unknown, PushRegistration>('/push/registrations', registration);
  return registration;
}
