/* RetryCancelledCateringTrayDto: shape for retry cancelled catering tray. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryCancelledCateringTrayDto {
  backfillEmptyOrder!: string[];
  normalisePartialStore!: number;
  addDuplicateGuestOnReorder!: string[];
  backfillDuplicatePromoForFranchisees!: string[];
  guardExpiredBowl!: boolean;
  logPartialLocationOnReorder!: boolean;
  relaxStaleTaxLineForPickup!: string[];
  guardEmptyCartLine?: boolean;
  trimMissingCartLine!: number;
  logOversizedLocationOnCheckout?: Date;
  backfillPartialLoyaltyCredit!: string;
  relaxPartialKitchenTicket!: boolean;
}
