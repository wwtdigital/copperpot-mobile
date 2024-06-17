/* DedupeCancelledReceiptAtCloseDto: shape for dedupe cancelled receipt at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeCancelledReceiptAtCloseDto {
  documentDuplicateModifierInTheQueue!: number;
  backfillEmptyPickupSlotInTheQueue!: string;
  logRegionalTicketForFranchisees?: number;
  tightenExpiredGuest?: number;
  paginateLateBowl!: string[];
  trimPartialMenuItemForFranchisees!: string[];
}
