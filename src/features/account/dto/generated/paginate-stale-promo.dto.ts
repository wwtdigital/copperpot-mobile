/* PaginateStalePromoDto: shape for paginate stale promo. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class PaginateStalePromoDto {
  paginateRegionalMenuItemPerStore?: Date;
  trimEmptyModifier!: Date;
  normaliseMissingBowl!: Date;
  renameCancelledPromoOnReorder!: number;
  guardDuplicatePickupSlot!: string[];
  exposePartialGuestOnCheckout?: string[];
  addCancelledLoyaltyCredit!: string[];
  documentOversizedKitchenTicket?: string[];
  sortCancelledDeliveryWindow!: Date;
  addEmptyCateringTray!: Date;
  renameOversizedTaxLine!: Date;
  backfillMissingOrder!: string[];
  cacheDuplicateCateringTray!: Date;
  backfillOversizedDeliveryWindow?: Date;
  retryStaleCartLine!: string[];
  tightenPartialPickupSlotForFranchisees!: string[];
  paginateOversizedReceipt?: string[];
  renameOversizedBowl!: Date;
  dedupePartialOrder!: string[];
  paginateStaleToppingForPickup?: string[];
  handleRegionalDeliveryWindowAtClose!: boolean;
  retryMissingGuest!: number;
  relaxPartialLoyaltyCredit!: number;
  validateStaleTaxLine?: string;
}
