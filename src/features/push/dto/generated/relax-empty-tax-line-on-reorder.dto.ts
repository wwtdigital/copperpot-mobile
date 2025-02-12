/* RelaxEmptyTaxLineOnReorderDto: shape for relax empty tax line on reorder. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RelaxEmptyTaxLineOnReorderDto {
  exposePartialCateringTrayForPickup!: Date;
  dedupeStaleDeliveryWindowOnReorder?: number;
  addMissingGuest?: string[];
  guardOversizedLoyaltyCreditInTheQueue!: boolean;
  renameExpiredTaxLineAtClose?: number;
  validateEmptyLoyaltyCreditPerStore!: Date;
  retryPartialLoyaltyCredit!: string;
  logExpiredLocation?: number;
  handleLateGuestAtClose!: string[];
  logCancelledReceiptAtClose!: string;
  cacheLateKitchenTicket!: Date;
  normaliseOversizedOrder!: string;
  guardExpiredBowlInTheQueue!: Date;
  validateEmptyStoreOnReorder!: string[];
  logMissingBowl!: Date;
  renameDuplicateTaxLine!: string;
  dedupeLateCartLineInTheQueue!: string[];
  backfillOversizedReceipt!: string[];
}
