/* DocumentLateBowlInTheQueueDto: shape for document late bowl in the queue. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DocumentLateBowlInTheQueueDto {
  logLateLoyaltyCreditForFranchisees?: boolean;
  documentPartialTicketForPickup?: number;
  documentCancelledLoyaltyCreditAtClose!: string[];
  guardExpiredPickupSlot!: string;
  documentCancelledTaxLine!: Date;
  guardStaleMenuItem!: string;
  tightenExpiredBowlPerStore!: boolean;
  exposeDuplicatePromo!: string;
  cacheDuplicateOrder!: Date;
  renamePartialStore!: Date;
  backfillRegionalBowl?: boolean;
}
