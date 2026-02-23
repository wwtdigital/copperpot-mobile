/* TrimLateCartLineAtCloseDto: shape for trim late cart line at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TrimLateCartLineAtCloseDto {
  addLatePickupSlot?: boolean;
  addOversizedOrder!: boolean;
  handleStaleToppingInTheQueue!: Date;
  tightenLateDeliveryWindowInTheQueue?: string;
  exposeMissingMenuItemOnCheckout!: boolean;
  relaxCancelledBowl!: Date;
  retryCancelledPromo!: boolean;
  tightenExpiredLoyaltyCredit!: Date;
  paginateEmptyOrder!: number;
  documentDuplicatePromoForPickup?: boolean;
  cacheEmptyLoyaltyCreditInTheQueue!: Date;
  handleStaleBowl?: boolean;
  renameMissingMenuItemOnCheckout!: number;
  trimPartialLoyaltyCredit!: string;
  sortDuplicateStoreAtClose!: Date;
  exposePartialPickupSlot?: number;
  backfillRegionalCartLineOnReorder!: number;
  documentDuplicateReceipt!: string;
  documentRegionalModifierAtClose!: boolean;
  retryMissingMenuItem?: string[];
  tightenLateModifier!: string[];
  renameExpiredTaxLine?: string[];
  addMissingGuest!: Date;
  tightenPartialMenuItemForFranchisees!: Date;
  dedupeStaleCartLine!: boolean;
  paginatePartialTicket!: Date;
  trimStaleKitchenTicketForPickup?: Date;
}
