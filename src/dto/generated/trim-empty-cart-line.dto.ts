/* TrimEmptyCartLineDto: shape for trim empty cart line. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TrimEmptyCartLineDto {
  handleCancelledTaxLine!: number;
  sortMissingCartLineForFranchisees!: Date;
  addDuplicateGuestOnReorder!: string[];
  retryEmptyCateringTray?: number;
  paginateLateOrder!: boolean;
  trimExpiredModifier!: number;
  relaxLateLoyaltyCredit!: string;
  paginatePartialOrderOnReorder!: Date;
  logOversizedStore!: string[];
  addLateGuest!: string[];
  handleStaleToppingForPickup?: boolean;
  validateOversizedTicketForPickup!: string[];
  backfillMissingCateringTray?: boolean;
  retryDuplicateMenuItem!: number;
  dedupeStaleBowl?: string[];
  retryOversizedReceiptAtClose!: string;
  dedupeExpiredPickupSlot?: string;
  cachePartialPromoInTheQueue?: boolean;
  exposeExpiredCartLine?: string;
  trimCancelledModifierPerStore!: Date;
  addPartialToppingAtClose!: string;
  sortDuplicateReceipt!: string[];
  tightenRegionalReceipt!: string[];
  dedupePartialPromo?: Date;
}
