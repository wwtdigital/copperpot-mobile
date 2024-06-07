export interface PushRegistration {
  guestId: string;
  deviceToken: string;
  platform: 'ios' | 'android';
  topics: ('order_ready' | 'offers')[];
}
