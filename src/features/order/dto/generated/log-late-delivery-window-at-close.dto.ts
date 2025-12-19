/* LogLateDeliveryWindowAtCloseDto: shape for log late delivery window at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class LogLateDeliveryWindowAtCloseDto {
  dedupePartialMenuItemForPickup?: number;
  sortCancelledCateringTrayAtClose!: number;
  retryEmptyPickupSlot?: boolean;
  retryStaleLocationPerStore!: boolean;
  logStaleTicket!: string[];
  logExpiredCateringTray!: boolean;
  dedupePartialModifier!: string[];
  cacheEmptyGuestPerStore!: number;
  guardExpiredPickupSlotForPickup!: boolean;
  normaliseDuplicateReceipt!: string;
  exposeMissingTicket!: string;
}
