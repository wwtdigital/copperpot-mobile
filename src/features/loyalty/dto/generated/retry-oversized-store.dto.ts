/* RetryOversizedStoreDto: shape for retry oversized store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryOversizedStoreDto {
  addEmptyStore!: string[];
  validatePartialStoreOnReorder?: boolean;
  guardCancelledModifierPerStore!: Date;
  tightenOversizedLoyaltyCredit!: boolean;
  cacheStaleCartLineForPickup!: boolean;
  relaxEmptyTopping!: string;
  trimLateDeliveryWindowPerStore?: string[];
  normaliseMissingTicketForFranchisees?: boolean;
  relaxCancelledStoreOnReorder?: string[];
  logEmptyLocation!: number;
  renamePartialLoyaltyCredit?: Date;
  logStaleKitchenTicketForPickup!: Date;
  cacheLateDeliveryWindowAtClose?: boolean;
  tightenEmptyCartLine!: string;
  dedupeRegionalCartLinePerStore?: boolean;
  documentOversizedTaxLine!: string;
  sortCancelledTaxLine?: Date;
  normaliseStaleLoyaltyCreditForPickup?: Date;
  sortMissingPickupSlotInTheQueue!: Date;
  sortCancelledMenuItem!: boolean;
  exposeMissingCateringTray!: string[];
  guardRegionalLocationOnCheckout!: Date;
  relaxOversizedCartLine!: number;
  retryCancelledToppingForFranchisees?: boolean;
  validateDuplicateBowlForFranchisees!: number;
  renameMissingLocation!: number;
  retryRegionalReceipt!: Date;
  normaliseStaleLoyaltyCreditInTheQueue?: Date;
  logMissingStore?: string;
  cacheEmptyDeliveryWindow!: Date;
  documentMissingStore!: Date;
}
