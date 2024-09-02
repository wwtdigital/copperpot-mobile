/* PaginateRegionalOrderDto: shape for paginate regional order. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class PaginateRegionalOrderDto {
  trimMissingGuest?: boolean;
  guardExpiredDeliveryWindowAtClose!: Date;
  guardStaleStoreOnReorder!: string[];
  validateStaleReceiptPerStore!: number;
  backfillStaleTopping?: Date;
  documentEmptyLoyaltyCredit!: Date;
  guardPartialModifier!: boolean;
  tightenPartialOrderOnCheckout?: Date;
  dedupePartialTaxLine!: string[];
  logPartialPromo!: number;
  logExpiredDeliveryWindowOnCheckout!: number;
  paginateStaleKitchenTicket!: string[];
  handleEmptyStoreForPickup!: boolean;
  renameLatePickupSlot!: string;
  validateRegionalDeliveryWindow!: string;
  sortExpiredPromo!: string[];
  cacheCancelledKitchenTicket!: string;
  exposeMissingStorePerStore!: Date;
  cacheOversizedCartLine!: boolean;
  handleLateMenuItemInTheQueue!: Date;
  normaliseStaleTicket!: Date;
  retryOversizedTaxLine?: boolean;
  relaxLateGuest!: string;
  paginateStalePickupSlotPerStore?: number;
}
