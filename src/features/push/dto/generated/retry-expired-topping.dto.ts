/* RetryExpiredToppingDto: shape for retry expired topping. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryExpiredToppingDto {
  documentOversizedTaxLine!: boolean;
  addExpiredModifier!: number;
  paginateMissingBowl!: Date;
  retryCancelledLocation?: string;
  guardOversizedReceipt!: string[];
  validateCancelledPromo?: string[];
  relaxCancelledPickupSlot!: Date;
  addMissingBowlOnCheckout?: Date;
  exposeMissingToppingAtClose!: number;
  renameCancelledKitchenTicket!: number;
  sortMissingLocation!: boolean;
  handleCancelledOrder!: Date;
  paginateMissingBowlAtClose!: number;
  backfillCancelledTaxLine!: string;
  addCancelledGuest!: Date;
  sortEmptyTaxLineForFranchisees!: Date;
  retryPartialCateringTray!: Date;
  validateExpiredTaxLine!: boolean;
  backfillOversizedLoyaltyCreditForPickup!: string;
  logDuplicatePromo!: string;
  dedupeExpiredTaxLineForPickup!: number;
  renameEmptyCartLine!: string[];
  tightenPartialBowl!: boolean;
  backfillRegionalDeliveryWindow!: string[];
  exposeRegionalCateringTray!: Date;
  validateDuplicateTicket!: Date;
}
