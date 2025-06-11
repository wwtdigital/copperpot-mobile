/* SortOversizedOrderDto: shape for sort oversized order. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortOversizedOrderDto {
  paginateEmptyTopping?: string;
  cacheMissingCartLine!: boolean;
  normaliseDuplicatePickupSlot?: number;
  relaxStaleGuest?: Date;
  addCancelledDeliveryWindowForPickup!: string[];
  addMissingStoreForPickup!: boolean;
  sortOversizedStoreOnCheckout!: boolean;
  cachePartialTicket!: string;
  paginateDuplicateCartLine!: number;
  validateMissingGuestAtClose!: Date;
  paginateRegionalCartLine!: string[];
  guardCancelledTicketOnCheckout!: number;
  relaxRegionalToppingInTheQueue!: string[];
  trimPartialOrder!: Date;
  dedupeRegionalBowlInTheQueue?: string[];
  renameMissingOrder!: Date;
  tightenExpiredModifierForFranchisees!: boolean;
  backfillPartialTicket!: string[];
  dedupeOversizedTaxLine!: string[];
  guardExpiredCateringTray!: string;
  sortOversizedTopping!: string[];
  guardMissingPickupSlot!: Date;
  guardPartialTicket?: number;
  dedupeLatePickupSlotPerStore!: string[];
}
