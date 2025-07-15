/* CacheOversizedLocationDto: shape for cache oversized location. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class CacheOversizedLocationDto {
  addDuplicateOrderOnReorder!: string;
  addOversizedStore!: number;
  addOversizedModifierPerStore!: string[];
  handleEmptyPromoInTheQueue!: number;
  renameMissingOrderInTheQueue?: string[];
  paginateOversizedDeliveryWindow!: string;
  relaxPartialOrderPerStore!: Date;
  backfillExpiredDeliveryWindowForPickup!: Date;
  relaxMissingBowl?: boolean;
  renameEmptyGuest?: Date;
  dedupeStaleBowl!: string;
  relaxEmptyReceipt!: string;
  trimLateGuestOnReorder!: Date;
  addMissingTopping?: string[];
  normaliseEmptyMenuItem!: boolean;
  handleMissingLocation?: Date;
  documentStaleCartLine!: string[];
  trimExpiredDeliveryWindowOnCheckout?: Date;
  validatePartialGuestForPickup!: number;
  handlePartialLoyaltyCredit!: boolean;
  paginatePartialOrder!: boolean;
  cacheMissingCateringTray?: Date;
  retryCancelledCartLineOnReorder?: string[];
  trimCancelledPromoAtClose!: boolean;
  sortDuplicateKitchenTicket!: Date;
  dedupeDuplicateModifier!: string;
  sortExpiredToppingOnReorder!: number;
  relaxEmptyBowlOnCheckout!: number;
  sortMissingBowlInTheQueue!: number;
  cacheStaleCartLine!: Date;
  validatePartialPromo!: number;
  exposeEmptyReceipt!: string;
}
