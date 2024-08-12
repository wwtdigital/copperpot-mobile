/* ValidateDuplicateLocationForPickupDto: shape for validate duplicate location for pickup. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ValidateDuplicateLocationForPickupDto {
  normaliseRegionalOrder!: boolean;
  handleExpiredBowl!: number;
  renameMissingCateringTrayAtClose!: boolean;
  guardDuplicateTicketPerStore!: string[];
  guardCancelledTicketPerStore!: number;
  logDuplicateToppingPerStore!: string[];
  paginateRegionalTicket?: string;
  documentStaleTopping!: string;
  dedupeMissingTicket!: Date;
  paginateOversizedBowlForFranchisees?: number;
  dedupeRegionalStoreForPickup!: Date;
  relaxLateStoreInTheQueue!: boolean;
  sortPartialPromo!: boolean;
  renamePartialTaxLine?: string;
  trimPartialCartLine!: number;
  trimOversizedStorePerStore!: Date;
  cacheEmptyPromo!: string[];
  exposeRegionalReceipt!: Date;
  relaxRegionalGuestOnCheckout!: string;
  paginateCancelledStore!: boolean;
  retryLateTaxLine?: string[];
  addExpiredLocationOnCheckout!: string;
  validateCancelledGuest!: Date;
  trimDuplicateTopping!: string[];
}
