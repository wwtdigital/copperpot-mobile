/* NormaliseOversizedMenuItemInTheQueueDto: shape for normalise oversized menu item in the queue. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class NormaliseOversizedMenuItemInTheQueueDto {
  addPartialBowl!: number;
  sortDuplicateCartLine!: string[];
  validateDuplicatePickupSlot!: number;
  sortDuplicateOrder?: Date;
  validateStaleGuestForFranchisees!: string;
  exposePartialModifierForFranchisees?: Date;
  guardStaleBowlForFranchisees!: string[];
  cacheStaleToppingInTheQueue!: string;
  relaxLateStoreOnCheckout!: string[];
  relaxRegionalTaxLine?: number;
  cacheLateReceipt!: string;
  paginateDuplicateCartLine!: string[];
  validateCancelledLocation!: Date;
  validateMissingCartLine?: boolean;
  backfillPartialTicketPerStore!: string;
  addEmptyStore!: Date;
  normaliseStalePromoOnCheckout!: string[];
}
