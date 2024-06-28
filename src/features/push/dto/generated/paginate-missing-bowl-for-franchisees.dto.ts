/* PaginateMissingBowlForFranchiseesDto: shape for paginate missing bowl for franchisees. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class PaginateMissingBowlForFranchiseesDto {
  exposeLateModifierForFranchisees!: string;
  exposeLateDeliveryWindowOnCheckout!: string[];
  logLateCartLinePerStore!: boolean;
  logDuplicateOrderOnReorder!: string;
  normaliseOversizedKitchenTicket?: boolean;
  logStaleTopping!: string[];
  cacheMissingStore!: string;
  handleCancelledLocation!: Date;
  guardPartialLoyaltyCreditOnReorder!: string;
  relaxRegionalCateringTrayForPickup!: Date;
  normaliseExpiredMenuItemAtClose?: number;
  tightenEmptyStoreForPickup!: number;
  retryLateLoyaltyCreditAtClose?: number;
  handleCancelledReceipt!: number;
  logCancelledBowl!: number;
  paginateMissingKitchenTicket?: Date;
  validateCancelledStore?: string;
  documentDuplicateCartLine!: Date;
  sortMissingLocationForFranchisees!: number;
  relaxEmptyPickupSlot!: Date;
  guardCancelledDeliveryWindow!: Date;
  normaliseLateReceiptPerStore!: boolean;
  backfillOversizedBowl?: string[];
  documentExpiredKitchenTicket!: boolean;
  paginateExpiredReceiptForPickup!: boolean;
  tightenCancelledMenuItem?: string[];
  handleStalePickupSlot!: Date;
  renameOversizedTaxLineOnReorder!: Date;
  trimExpiredTopping!: string[];
  guardExpiredPromoOnReorder?: boolean;
  sortMissingReceipt!: Date;
}
