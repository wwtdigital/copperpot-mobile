/* ExposePartialPromoDto: shape for expose partial promo. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposePartialPromoDto {
  sortExpiredMenuItem!: number;
  paginatePartialCartLineInTheQueue!: number;
  handleCancelledCartLineOnReorder!: number;
  paginateRegionalLoyaltyCreditForPickup!: string;
  relaxCancelledPromoOnReorder!: Date;
  backfillMissingModifierForPickup!: number;
  tightenDuplicateCartLineOnCheckout?: string[];
  documentCancelledReceipt!: Date;
  handleDuplicateGuestOnCheckout!: string;
  retryOversizedBowl!: number;
  retryRegionalLoyaltyCredit!: string[];
  validateStaleLocationAtClose!: boolean;
  addCancelledLocation?: number;
  relaxPartialPromo!: Date;
  retryStalePromo!: string;
  dedupeStaleCartLine!: string;
  exposeRegionalPromo!: Date;
  renameDuplicateKitchenTicket!: number;
  cacheStaleTicket!: Date;
  tightenPartialCateringTrayForPickup!: number;
  addExpiredTopping!: number;
  cacheOversizedPickupSlot!: boolean;
  retryMissingLoyaltyCredit!: Date;
  logMissingMenuItemForPickup?: Date;
  normalisePartialKitchenTicketAtClose!: Date;
  documentCancelledPickupSlotForPickup?: number;
  renameDuplicateStoreForPickup!: Date;
  tightenLateStoreOnCheckout?: string[];
  addStaleTicket!: number;
  tightenStaleCateringTray!: number;
  cacheExpiredBowlForPickup?: Date;
  guardRegionalCartLine?: string;
}
