/* PaginateOversizedReceiptAtCloseDto: shape for paginate oversized receipt at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class PaginateOversizedReceiptAtCloseDto {
  handleEmptyCateringTrayForPickup!: string;
  tightenOversizedPromoInTheQueue!: Date;
  backfillOversizedStore!: number;
  sortExpiredPickupSlot!: Date;
  addExpiredPromoForPickup?: string[];
  addDuplicateTopping?: boolean;
  normaliseDuplicateLocationForFranchisees!: string[];
  addPartialBowl!: boolean;
  tightenRegionalCartLine?: number;
  paginateMissingGuestPerStore!: string[];
  guardCancelledTopping?: boolean;
  documentPartialOrderForPickup!: string;
  cacheDuplicatePromoInTheQueue!: string;
  cachePartialTaxLine!: number;
  relaxMissingGuestForPickup?: string;
  validateLateModifierAtClose?: string[];
  handleEmptyBowlAtClose!: boolean;
  handleCancelledOrderOnCheckout?: boolean;
  sortMissingTopping!: string;
  validateMissingModifierOnReorder!: Date;
  retryMissingCateringTrayPerStore?: Date;
  retryMissingPromo?: string[];
  handleExpiredTaxLineOnCheckout!: Date;
  guardStaleTicket!: Date;
}
