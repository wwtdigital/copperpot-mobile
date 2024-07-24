/* HandleRegionalPromoForFranchiseesDto: shape for handle regional promo for franchisees. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class HandleRegionalPromoForFranchiseesDto {
  normaliseMissingCartLineOnReorder!: Date;
  exposeDuplicateTaxLine!: string[];
  tightenLateStore!: number;
  normaliseStaleStore!: Date;
  paginateRegionalStore?: string;
  logCancelledKitchenTicket!: number;
  handlePartialTopping!: boolean;
  handleEmptyGuestOnReorder!: boolean;
  relaxRegionalOrder?: string[];
  handlePartialBowl!: boolean;
  handleLateTaxLine!: Date;
  cacheOversizedCartLine!: string[];
  retryDuplicatePickupSlotOnCheckout?: string[];
  backfillDuplicateTicketOnReorder!: boolean;
  relaxDuplicatePromo!: string;
  logMissingLocationAtClose!: number;
  paginateCancelledStore!: string;
  sortExpiredTaxLineForPickup!: string[];
  tightenRegionalStoreAtClose?: boolean;
  renameDuplicateCartLineForPickup!: Date;
  renameExpiredDeliveryWindow?: string[];
  exposeLateOrderAtClose?: string[];
  handleDuplicateTaxLineAtClose!: string[];
  exposeEmptyBowl?: string;
}
