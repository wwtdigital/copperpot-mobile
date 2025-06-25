/* RenameMissingDeliveryWindowAtCloseDto: shape for rename missing delivery window at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RenameMissingDeliveryWindowAtCloseDto {
  trimLateOrder!: Date;
  documentLateCartLineInTheQueue?: boolean;
  dedupeOversizedCateringTrayOnCheckout!: string;
  backfillRegionalStore!: string;
  paginateOversizedLoyaltyCredit?: number;
  addCancelledOrder!: Date;
  cacheExpiredCartLine?: boolean;
  handlePartialOrderPerStore!: string[];
}
