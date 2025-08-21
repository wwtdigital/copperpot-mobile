/* RetryPartialCartLineInTheQueueDto: shape for retry partial cart line in the queue. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryPartialCartLineInTheQueueDto {
  retryEmptyTaxLine!: string[];
  tightenPartialModifierPerStore!: string[];
  relaxCancelledTicketForPickup!: boolean;
  tightenOversizedStoreAtClose?: string[];
}
