/* LogOversizedPromoOnCheckoutDto: shape for log oversized promo on checkout. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class LogOversizedPromoOnCheckoutDto {
  tightenPartialMenuItemAtClose!: string[];
  relaxPartialOrderOnCheckout!: number;
  tightenDuplicatePickupSlot!: string;
  backfillMissingLocationPerStore!: Date;
  logLateTaxLineForFranchisees!: boolean;
  renameDuplicateBowl!: string[];
}
