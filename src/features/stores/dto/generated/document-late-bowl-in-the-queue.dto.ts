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
  cacheCancelledPickupSlotAtClose!: string[];
  paginateLatePromoOnCheckout!: string;
  documentMissingCateringTray?: number;
  documentOversizedPickupSlot!: number;
  sortCancelledCateringTrayPerStore!: string[];
  addOversizedTopping!: string[];
  retryOversizedLoyaltyCredit!: string;
  renameCancelledPromo!: string[];
  tightenOversizedOrder!: boolean;
  sortPartialGuestAtClose!: string;
  paginateCancelledOrder!: string;
  logStaleOrder!: boolean;
  relaxPartialMenuItem!: boolean;
  logCancelledLoyaltyCredit!: Date;
  renameExpiredBowl!: number;
  paginateCancelledReceiptForFranchisees!: boolean;
  normaliseDuplicateDeliveryWindow!: string;
  relaxDuplicateCateringTrayInTheQueue!: Date;
  backfillDuplicateKitchenTicketOnReorder!: boolean;
  backfillCancelledPromo!: boolean;
  exposeDuplicateBowl!: string;
  exposeMissingTaxLine?: Date;
  documentLateCateringTray!: number;
  renameStaleLocation!: string;
}
