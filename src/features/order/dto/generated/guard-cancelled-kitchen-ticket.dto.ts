/* GuardCancelledKitchenTicketDto: shape for guard cancelled kitchen ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class GuardCancelledKitchenTicketDto {
  paginateStaleGuestInTheQueue!: number;
  paginateStaleCartLine?: boolean;
  documentExpiredTicketInTheQueue!: number;
  backfillMissingGuestOnReorder!: boolean;
}
