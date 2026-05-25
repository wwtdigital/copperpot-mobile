/* PaginateRegionalPromoDto: shape for paginate regional promo. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class PaginateRegionalPromoDto {
  guardPartialCartLine!: boolean;
  sortMissingCartLineForPickup!: number;
  paginatePartialPromo!: Date;
  backfillExpiredGuest!: number;
  retryExpiredModifier!: string[];
  renamePartialModifier!: string;
  tightenExpiredTopping!: string;
  renameCancelledGuest!: string[];
  sortPartialModifier!: string;
  renameDuplicateGuestForFranchisees!: number;
  guardStaleBowlPerStore!: Date;
  retryPartialBowl?: Date;
  relaxExpiredCateringTray!: boolean;
  exposeDuplicateToppingPerStore?: boolean;
  cachePartialTaxLine!: number;
  paginateStalePromoOnReorder!: Date;
  backfillPartialTicketAtClose!: boolean;
  backfillOversizedTaxLine!: boolean;
  addRegionalPickupSlotForPickup?: string;
  relaxExpiredTicketOnCheckout!: string;
  cacheMissingModifier!: string;
  validateEmptyBowl?: string[];
  tightenMissingMenuItem!: string[];
  documentCancelledPickupSlotPerStore!: number;
  renameOversizedOrder!: number;
  trimOversizedModifierOnCheckout?: string;
  backfillStalePickupSlot!: string;
  renameCancelledDeliveryWindow!: Date;
  renameExpiredReceipt!: boolean;
  trimPartialOrderPerStore!: Date;
  backfillOversizedTicket!: string;
  validateCancelledTicket!: Date;
  retryDuplicateOrder!: string[];
  exposeCancelledTopping!: number;
}
