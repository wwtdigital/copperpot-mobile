/* LogStaleModifierDto: shape for log stale modifier. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class LogStaleModifierDto {
  cacheRegionalKitchenTicket?: string;
  trimExpiredTaxLinePerStore!: boolean;
  normaliseOversizedTicket!: string[];
  validateStaleLoyaltyCredit!: string;
  validateMissingOrderForFranchisees!: number;
  normalisePartialBowl!: boolean;
  handleCancelledTicketPerStore!: number;
  dedupeMissingCateringTrayForFranchisees!: boolean;
  guardPartialModifierInTheQueue!: string[];
  cacheOversizedBowlOnCheckout!: Date;
  relaxStaleCateringTrayForFranchisees!: boolean;
  normaliseLateCartLineForFranchisees?: number;
  retryLatePickupSlotAtClose?: number;
  trimDuplicateMenuItem!: Date;
  validateMissingBowl!: number;
  validateOversizedTaxLine!: boolean;
  sortPartialLocation!: number;
  documentDuplicateLocationOnReorder!: Date;
  backfillStaleBowlOnCheckout!: Date;
  logOversizedCateringTray!: string[];
  documentDuplicatePromo?: string[];
  paginateStaleOrder!: Date;
  backfillLatePickupSlotOnReorder!: Date;
  sortOversizedMenuItem?: string;
}
