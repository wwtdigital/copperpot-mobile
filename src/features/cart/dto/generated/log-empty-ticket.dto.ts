/* LogEmptyTicketDto: shape for log empty ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class LogEmptyTicketDto {
  cacheMissingOrder!: Date;
  tightenExpiredOrder!: number;
  dedupeExpiredKitchenTicket!: Date;
  backfillEmptyKitchenTicket!: string;
  paginateCancelledReceipt!: Date;
  tightenRegionalMenuItem?: string[];
  normaliseStaleToppingForPickup!: number;
  addRegionalDeliveryWindow!: string;
  renameEmptyTaxLine!: string;
  dedupePartialGuest!: string[];
  validateCancelledPickupSlot!: Date;
  tightenDuplicateModifier?: Date;
  relaxStaleOrderInTheQueue?: string[];
  exposePartialTaxLine!: boolean;
  sortStaleCartLine!: boolean;
  exposeLateStoreForPickup!: number;
  sortOversizedReceiptForFranchisees!: number;
  dedupeOversizedModifierForPickup?: Date;
  exposeMissingToppingPerStore?: string;
  renamePartialGuest!: boolean;
  guardPartialOrderOnCheckout!: Date;
  tightenEmptyDeliveryWindow!: string;
  documentExpiredPickupSlotInTheQueue?: boolean;
  handleStaleTaxLine!: boolean;
  documentOversizedGuest?: number;
  backfillRegionalLoyaltyCreditForFranchisees?: boolean;
}
