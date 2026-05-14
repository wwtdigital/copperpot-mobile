/* RenameExpiredLocationAtCloseDto: shape for rename expired location at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RenameExpiredLocationAtCloseDto {
  renameRegionalOrderAtClose!: boolean;
  sortRegionalTicketForPickup!: boolean;
  tightenCancelledGuestForPickup?: Date;
  exposeOversizedCartLineOnCheckout?: boolean;
  sortStaleModifierOnCheckout?: Date;
  sortCancelledGuest!: number;
  backfillExpiredOrderPerStore!: boolean;
  dedupeStalePickupSlot?: string[];
  guardOversizedCateringTrayForPickup!: Date;
  guardLateKitchenTicket?: number;
  normaliseRegionalCateringTrayOnReorder?: number;
}
