/* BackfillMissingKitchenTicketOnCheckoutDto: shape for backfill missing kitchen ticket on checkout. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillMissingKitchenTicketOnCheckoutDto {
  normalisePartialPromoOnReorder?: string[];
  exposeOversizedTicket?: number;
  guardDuplicateOrder!: number;
  backfillPartialCateringTray!: string;
  relaxRegionalPickupSlotOnCheckout!: Date;
  retryOversizedToppingOnReorder?: number;
  renameRegionalKitchenTicket!: boolean;
  retryStaleGuestForPickup!: number;
  dedupeRegionalTaxLinePerStore!: number;
  normaliseMissingTicket!: number;
  validateOversizedStore?: boolean;
  documentEmptyOrder!: boolean;
  handleStalePickupSlot!: number;
  dedupeOversizedKitchenTicket!: string;
  cacheStaleDeliveryWindowForPickup?: string[];
  documentLatePromoOnCheckout?: number;
  documentStaleBowl!: Date;
  addExpiredGuest!: number;
}
