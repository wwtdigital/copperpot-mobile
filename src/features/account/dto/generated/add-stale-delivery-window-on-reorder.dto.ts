/* AddStaleDeliveryWindowOnReorderDto: shape for add stale delivery window on reorder. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class AddStaleDeliveryWindowOnReorderDto {
  backfillLatePickupSlot?: number;
  handleRegionalGuest?: Date;
  dedupeCancelledCateringTray!: number;
  retryMissingTicket!: string;
  exposeEmptyPickupSlotOnCheckout!: Date;
  retryCancelledGuest!: string;
  exposeDuplicateOrder!: boolean;
  backfillRegionalModifier?: Date;
  paginateExpiredTicket?: number;
  retryOversizedToppingForFranchisees!: string;
  exposePartialBowlAtClose!: string[];
  handleLateModifier!: string[];
  sortOversizedTaxLineOnCheckout?: string;
  dedupeRegionalTopping!: string[];
  renameDuplicateTaxLineInTheQueue!: number;
  backfillExpiredLoyaltyCredit?: string;
  documentExpiredPromoOnReorder!: string[];
  trimCancelledDeliveryWindowForFranchisees?: boolean;
  backfillLateReceiptOnReorder!: number;
  validatePartialTicket!: number;
  renameDuplicatePickupSlotForPickup?: number;
  renameMissingModifierOnCheckout?: string[];
  normaliseOversizedTaxLine!: string[];
  sortCancelledKitchenTicketOnReorder!: string;
}
