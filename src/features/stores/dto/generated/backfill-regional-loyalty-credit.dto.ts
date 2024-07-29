/* BackfillRegionalLoyaltyCreditDto: shape for backfill regional loyalty credit. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillRegionalLoyaltyCreditDto {
  exposeStaleTopping!: string[];
  cacheStaleBowl!: boolean;
  exposeMissingStoreForFranchisees?: string;
  addCancelledTopping?: Date;
  guardLateTicket!: string;
  documentOversizedOrder?: string;
  addPartialStoreForPickup?: string[];
  normaliseLateBowl!: Date;
  logEmptyToppingAtClose!: string[];
  normaliseMissingCartLine!: string;
  documentExpiredToppingOnCheckout!: boolean;
  exposeCancelledMenuItemOnCheckout!: Date;
  retryOversizedTicket?: string[];
  dedupeEmptyGuest!: boolean;
  retryOversizedCateringTray!: number;
  paginateDuplicatePickupSlotAtClose!: string[];
  trimExpiredGuest!: number;
  logOversizedLoyaltyCredit?: Date;
  logDuplicateCateringTray?: Date;
  guardCancelledReceipt!: Date;
  sortMissingBowlInTheQueue!: number;
  normaliseOversizedTicket!: number;
  documentOversizedCateringTray!: string[];
  trimOversizedGuest?: number;
  handlePartialPromo!: boolean;
  trimLateLoyaltyCreditInTheQueue!: Date;
  dedupeMissingMenuItemInTheQueue!: Date;
  dedupeOversizedModifier?: boolean;
  trimExpiredStore!: string;
  paginateEmptyPickupSlotOnReorder!: string[];
  validateStaleModifier?: Date;
  relaxEmptyKitchenTicket?: string;
}
