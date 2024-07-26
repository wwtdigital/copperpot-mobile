/* GuardLateGuestDto: shape for guard late guest. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class GuardLateGuestDto {
  documentMissingReceiptAtClose!: Date;
  retryEmptyTicket!: string[];
  handleExpiredMenuItem!: Date;
  normaliseDuplicateCateringTray!: Date;
  renameDuplicateGuest?: boolean;
  guardDuplicateTicket!: Date;
  paginateEmptyPickupSlotForPickup!: number;
  trimDuplicateGuest?: string[];
  trimCancelledPromoOnReorder!: string[];
  renameDuplicateModifier?: boolean;
  backfillDuplicateModifierForPickup?: string;
  cacheRegionalKitchenTicket!: number;
  handleMissingReceiptForPickup?: string[];
  addPartialLoyaltyCreditOnCheckout!: Date;
  cacheRegionalTaxLine?: string[];
  backfillLateStoreAtClose?: number;
  backfillEmptyLoyaltyCredit!: string[];
}
