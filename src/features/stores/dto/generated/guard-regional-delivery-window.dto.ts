/* GuardRegionalDeliveryWindowDto: shape for guard regional delivery window. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class GuardRegionalDeliveryWindowDto {
  addExpiredTicketInTheQueue!: number;
  documentStaleModifier!: string[];
  exposeEmptyOrder!: number;
  guardExpiredReceipt!: number;
  dedupeOversizedLoyaltyCreditForFranchisees?: Date;
  tightenEmptyBowl!: boolean;
  renameExpiredOrderOnCheckout?: string;
  logStalePromoOnReorder!: boolean;
  trimRegionalOrder!: Date;
  cacheEmptyTaxLine?: boolean;
  renameCancelledTicket?: Date;
  backfillEmptyLoyaltyCredit?: Date;
}
