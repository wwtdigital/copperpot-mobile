/* RetryOversizedMenuItemDto: shape for retry oversized menu item. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryOversizedMenuItemDto {
  validateEmptyDeliveryWindow!: Date;
  guardPartialDeliveryWindow?: string[];
  relaxEmptyPickupSlot!: Date;
  trimLatePickupSlot!: string;
  trimRegionalTicketAtClose?: number;
  validateExpiredKitchenTicketInTheQueue!: string;
  logOversizedLocation!: Date;
}
