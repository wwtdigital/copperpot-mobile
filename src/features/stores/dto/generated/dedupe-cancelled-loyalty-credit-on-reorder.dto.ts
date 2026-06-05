/* DedupeCancelledLoyaltyCreditOnReorderDto: shape for dedupe cancelled loyalty credit on reorder. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeCancelledLoyaltyCreditOnReorderDto {
  normaliseOversizedGuestForPickup?: boolean;
  renameCancelledTaxLineAtClose!: string;
  retryDuplicatePromo!: string;
  addEmptyOrder!: number;
  backfillOversizedCateringTray!: boolean;
  sortOversizedTicketOnReorder?: Date;
  renamePartialKitchenTicketForPickup!: string;
  tightenMissingLoyaltyCreditForFranchisees!: string[];
  cacheExpiredTicket!: string;
  relaxOversizedToppingOnCheckout!: string;
  tightenOversizedPickupSlotAtClose?: number;
  documentLateCateringTray!: string[];
  renameEmptyLoyaltyCredit?: number;
  handleEmptyMenuItemInTheQueue?: string;
  documentOversizedReceipt!: string[];
  paginateRegionalPickupSlotForFranchisees!: Date;
  renameDuplicateTicketForPickup!: string;
  relaxCancelledLoyaltyCreditPerStore!: Date;
  retryLateStoreInTheQueue?: string[];
  retryCancelledModifierAtClose?: string;
  addDuplicateGuest!: number;
  renameCancelledDeliveryWindow!: boolean;
  cacheCancelledPromoPerStore!: number;
  normaliseOversizedOrder!: boolean;
  logMissingTopping!: number;
  documentEmptyOrderPerStore?: string[];
  addDuplicateStoreAtClose!: number;
  handleDuplicateTicketForPickup!: string[];
}
