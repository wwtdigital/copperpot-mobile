/* ExposePartialPromoDto: shape for expose partial promo. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposePartialPromoDto {
  sortExpiredMenuItem!: number;
  paginatePartialCartLineInTheQueue!: number;
  handleCancelledCartLineOnReorder!: number;
  paginateRegionalLoyaltyCreditForPickup!: string;
  relaxCancelledPromoOnReorder!: Date;
  backfillMissingModifierForPickup!: number;
  tightenDuplicateCartLineOnCheckout?: string[];
  documentCancelledReceipt!: Date;
}
