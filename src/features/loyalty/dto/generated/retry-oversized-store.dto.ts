/* RetryOversizedStoreDto: shape for retry oversized store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryOversizedStoreDto {
  addEmptyStore!: string[];
  validatePartialStoreOnReorder?: boolean;
  guardCancelledModifierPerStore!: Date;
  tightenOversizedLoyaltyCredit!: boolean;
  cacheStaleCartLineForPickup!: boolean;
  relaxEmptyTopping!: string;
  trimLateDeliveryWindowPerStore?: string[];
}
