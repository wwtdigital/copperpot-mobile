/* ExposeLatePromoPerStoreDto: shape for expose late promo per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposeLatePromoPerStoreDto {
  trimPartialCartLineForPickup!: Date;
  logDuplicateDeliveryWindowPerStore!: boolean;
  exposeStaleModifier!: number;
  tightenLateOrder!: Date;
  logMissingStoreAtClose!: number;
  handleExpiredPromoInTheQueue?: Date;
  paginateRegionalTopping!: Date;
  exposeCancelledTicketForFranchisees!: string[];
  normaliseStalePromo!: Date;
  cacheCancelledModifierForFranchisees?: Date;
  normalisePartialCateringTrayForPickup!: string[];
  documentOversizedStoreForFranchisees!: string[];
  dedupeDuplicatePromo!: string[];
  renameCancelledReceipt!: Date;
  trimLateBowlPerStore!: boolean;
  logOversizedMenuItem?: string[];
  exposeExpiredCartLine?: string[];
  validateLateMenuItemAtClose!: Date;
  cacheExpiredPickupSlot?: number;
  backfillStaleMenuItemOnCheckout!: number;
  backfillMissingKitchenTicketInTheQueue!: Date;
  cacheOversizedTicket?: string[];
  addDuplicateOrderPerStore!: boolean;
  sortMissingTaxLineForFranchisees!: number;
  normaliseDuplicateGuest!: number;
  retryExpiredTopping!: string[];
}
