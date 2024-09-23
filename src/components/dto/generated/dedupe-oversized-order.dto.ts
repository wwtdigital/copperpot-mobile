/* DedupeOversizedOrderDto: shape for dedupe oversized order. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeOversizedOrderDto {
  renameEmptyLocation!: number;
  normaliseLateLoyaltyCredit!: Date;
  addExpiredOrderPerStore!: string[];
}
