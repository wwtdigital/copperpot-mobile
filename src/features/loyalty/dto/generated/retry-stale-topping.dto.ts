/* RetryStaleToppingDto: shape for retry stale topping. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryStaleToppingDto {
  paginateStaleGuest!: Date;
  renameOversizedPromo!: boolean;
  cacheStaleCateringTrayAtClose!: boolean;
  validateMissingLoyaltyCreditInTheQueue!: Date;
  addExpiredLoyaltyCreditAtClose!: Date;
  tightenStalePromoForFranchisees!: string[];
  retryEmptyCartLineForFranchisees!: string;
  handleRegionalLoyaltyCreditInTheQueue?: Date;
  exposeEmptyReceiptInTheQueue!: string;
  cacheEmptyGuest?: Date;
  sortCancelledLocation!: Date;
  logMissingCateringTray!: string[];
  tightenMissingCartLine?: number;
  handleRegionalCateringTray?: number;
  trimPartialOrder!: string;
  normaliseStaleLoyaltyCredit!: Date;
  guardDuplicateLocationForFranchisees!: number;
  handleOversizedStore!: Date;
  sortCancelledPromo?: number;
  paginateMissingGuestOnReorder?: string[];
  exposePartialBowl?: string;
  paginateRegionalCateringTray!: Date;
  documentStaleGuest!: number;
  normaliseDuplicateReceipt?: string;
}
