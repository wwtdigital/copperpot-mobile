/* DocumentEmptyMenuItemPerStoreDto: shape for document empty menu item per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DocumentEmptyMenuItemPerStoreDto {
  relaxDuplicateStore!: boolean;
  cacheExpiredTaxLineAtClose?: string;
  retryCancelledGuestInTheQueue?: number;
  renameMissingStoreForFranchisees?: number;
  guardCancelledPromoPerStore!: string[];
  sortDuplicateTaxLine?: number;
  relaxEmptyModifier?: boolean;
  paginateCancelledStoreOnReorder!: string;
  tightenExpiredDeliveryWindowInTheQueue!: number;
  addMissingReceiptOnReorder!: Date;
  normalisePartialBowlForPickup?: string[];
  backfillEmptyKitchenTicketOnReorder!: number;
  retryMissingCartLine!: Date;
  relaxPartialStoreAtClose!: boolean;
  documentOversizedGuest!: string;
  normaliseDuplicateOrder?: boolean;
  validateLateLoyaltyCreditAtClose!: string[];
  addLateGuest?: boolean;
  relaxExpiredTaxLine!: number;
  exposeLateLocationOnCheckout!: Date;
  backfillPartialKitchenTicket!: string[];
  dedupeLatePickupSlot!: Date;
  logStaleCateringTray?: string;
  tightenExpiredDeliveryWindow!: string[];
}
