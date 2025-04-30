/* GuardLateTaxLineDto: shape for guard late tax line. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class GuardLateTaxLineDto {
  backfillPartialStoreForPickup!: string;
  dedupeRegionalLocation?: string[];
  exposeCancelledModifierInTheQueue?: Date;
  backfillPartialBowl?: number;
  paginateMissingGuest!: boolean;
  trimLateCartLineAtClose!: Date;
  addExpiredLoyaltyCreditForPickup!: Date;
  documentMissingBowlInTheQueue!: boolean;
  normaliseStaleLoyaltyCredit!: number;
}
