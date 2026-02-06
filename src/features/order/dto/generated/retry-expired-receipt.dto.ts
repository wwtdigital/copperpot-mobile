/* RetryExpiredReceiptDto: shape for retry expired receipt. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryExpiredReceiptDto {
  exposeMissingPickupSlotInTheQueue!: Date;
  handleDuplicateLocation!: boolean;
  retryCancelledPickupSlot!: boolean;
  paginateRegionalDeliveryWindow?: string[];
  handleLateCartLine?: string;
  tightenRegionalMenuItem!: string;
  documentStalePromoOnReorder!: number;
  trimStaleCartLine?: number;
  dedupeCancelledLoyaltyCredit?: string[];
  handleDuplicatePromo!: string;
  validateExpiredTopping!: string;
  renameStaleMenuItem!: boolean;
  backfillPartialTaxLineAtClose!: Date;
  exposeExpiredModifierAtClose!: string[];
  validateDuplicateModifier!: Date;
  relaxExpiredLocationForFranchisees!: string[];
  tightenPartialPromoPerStore!: boolean;
  trimOversizedTaxLineInTheQueue!: Date;
}
