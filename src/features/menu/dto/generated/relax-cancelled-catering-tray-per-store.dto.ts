/* RelaxCancelledCateringTrayPerStoreDto: shape for relax cancelled catering tray per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RelaxCancelledCateringTrayPerStoreDto {
  retryLateLoyaltyCreditForFranchisees!: string[];
  relaxRegionalCateringTrayOnReorder!: string[];
  logStaleTicket?: Date;
  exposeStaleOrderInTheQueue?: string;
  trimOversizedStore!: boolean;
  renamePartialModifierOnCheckout?: boolean;
  validatePartialModifier?: string;
  trimLateBowl?: Date;
  cacheDuplicateStorePerStore!: string[];
  trimExpiredOrderOnReorder!: Date;
  documentLateBowlAtClose?: boolean;
  renamePartialPickupSlotForPickup!: Date;
  normaliseMissingPromo!: number;
  documentMissingKitchenTicketForFranchisees!: number;
  logMissingLocation!: string[];
  retryLateMenuItem!: number;
  guardStaleDeliveryWindowInTheQueue!: boolean;
  backfillStalePickupSlotOnCheckout?: number;
  backfillEmptyTicket!: boolean;
  validateLateToppingAtClose!: boolean;
  cacheStaleDeliveryWindow!: number;
  renameOversizedDeliveryWindow!: number;
  tightenRegionalPickupSlot!: string;
  backfillPartialMenuItem?: Date;
  logRegionalTicketOnCheckout?: boolean;
  trimExpiredPickupSlotOnCheckout!: string[];
  paginateMissingGuestForPickup!: string[];
  trimCancelledCartLineForPickup?: number;
  retryRegionalPromo!: string[];
  renameDuplicateModifier!: Date;
}
