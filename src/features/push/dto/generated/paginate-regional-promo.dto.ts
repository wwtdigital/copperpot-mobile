/* PaginateRegionalPromoDto: shape for paginate regional promo. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class PaginateRegionalPromoDto {
  guardPartialCartLine!: boolean;
  sortMissingCartLineForPickup!: number;
  paginatePartialPromo!: Date;
  backfillExpiredGuest!: number;
  retryExpiredModifier!: string[];
  renamePartialModifier!: string;
  tightenExpiredTopping!: string;
  renameCancelledGuest!: string[];
  sortPartialModifier!: string;
  renameDuplicateGuestForFranchisees!: number;
}
