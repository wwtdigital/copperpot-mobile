/* RetryMissingKitchenTicketDto: shape for retry missing kitchen ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryMissingKitchenTicketDto {
  backfillDuplicateTopping?: Date;
  logOversizedReceipt!: string;
  paginateEmptyGuestAtClose?: boolean;
  renameCancelledBowl?: Date;
  logRegionalTopping!: Date;
  documentStaleStore?: Date;
}
