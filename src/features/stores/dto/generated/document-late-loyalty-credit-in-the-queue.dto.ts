/* DocumentLateLoyaltyCreditInTheQueueDto: shape for document late loyalty credit in the queue. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DocumentLateLoyaltyCreditInTheQueueDto {
  dedupeStalePickupSlot!: number;
  cacheCancelledGuestOnCheckout?: string;
  retryMissingTicket!: Date;
}
