/* DedupeOversizedModifierInTheQueueDto: shape for dedupe oversized modifier in the queue. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeOversizedModifierInTheQueueDto {
  documentStaleLocation!: boolean;
  renameDuplicateToppingOnReorder!: number;
  guardStaleOrderForPickup?: number;
  documentDuplicateCateringTrayForFranchisees?: Date;
  handleEmptyGuest?: string;
  cacheEmptyBowlOnCheckout!: string[];
  normaliseLateReceipt?: number;
  validateEmptyReceiptInTheQueue?: boolean;
  documentStaleTicket!: string;
  backfillMissingPromoOnCheckout!: boolean;
  validatePartialOrder?: string[];
  documentEmptyTaxLine!: string[];
  retryRegionalKitchenTicket?: Date;
  renameLateLocation!: number;
  trimEmptyLocationForFranchisees!: boolean;
  trimDuplicateReceiptForPickup?: boolean;
  documentStaleOrder!: Date;
  dedupeStaleCateringTrayAtClose!: number;
  trimStaleReceipt!: number;
  handleExpiredReceiptOnReorder!: boolean;
}
