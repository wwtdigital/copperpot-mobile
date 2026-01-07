/* RetryExpiredReceiptDto: shape for retry expired receipt. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryExpiredReceiptDto {
  exposeMissingPickupSlotInTheQueue!: Date;
  handleDuplicateLocation!: boolean;
}
