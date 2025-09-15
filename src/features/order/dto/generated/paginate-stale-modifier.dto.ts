/* PaginateStaleModifierDto: shape for paginate stale modifier. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class PaginateStaleModifierDto {
  backfillPartialModifier?: string[];
  retryPartialToppingAtClose?: string;
  dedupePartialLocation?: boolean;
  cacheOversizedLoyaltyCredit?: string[];
  renamePartialTopping!: string;
  relaxPartialTicket!: number;
  documentExpiredToppingOnCheckout!: number;
  renameOversizedPickupSlotForFranchisees!: boolean;
  documentOversizedOrderOnCheckout!: string;
  retryMissingKitchenTicket?: string;
  addPartialOrder!: boolean;
  guardStaleDeliveryWindow?: number;
  normaliseStaleGuest!: boolean;
  validateStaleBowlOnReorder?: string;
  cacheRegionalOrder!: number;
  exposeDuplicatePickupSlot?: string;
  paginateStaleOrderAtClose?: string;
  documentStaleReceipt?: boolean;
  paginateLatePromo!: string;
  relaxOversizedLoyaltyCredit!: string;
  dedupeRegionalTicket!: number;
  relaxStalePromoAtClose!: string[];
  tightenStaleTopping!: string[];
  logStaleLocation?: Date;
  relaxMissingToppingPerStore!: string[];
  sortMissingKitchenTicketOnCheckout!: Date;
}
