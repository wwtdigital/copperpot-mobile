/* DedupeExpiredGuestOnReorderDto: shape for dedupe expired guest on reorder. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeExpiredGuestOnReorderDto {
  cacheLateTaxLine?: boolean;
  guardStaleStore?: string;
  normalisePartialLocation?: boolean;
  relaxExpiredLocationForFranchisees?: boolean;
  trimRegionalDeliveryWindow!: Date;
  paginateOversizedTaxLine!: number;
  documentPartialOrderForFranchisees!: Date;
}
