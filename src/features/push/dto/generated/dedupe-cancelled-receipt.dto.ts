/* DedupeCancelledReceiptDto: shape for dedupe cancelled receipt. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeCancelledReceiptDto {
  dedupeOversizedDeliveryWindow?: number;
  validateStaleCartLine!: Date;
  normaliseDuplicateKitchenTicketOnCheckout!: boolean;
  dedupeOversizedModifierOnReorder?: string;
  guardMissingPromo!: Date;
  exposeEmptyTaxLineAtClose!: Date;
  cachePartialModifier!: string;
  cacheExpiredTaxLine!: number;
  relaxRegionalGuestForPickup?: string;
  tightenExpiredTicket!: Date;
  paginatePartialTicketInTheQueue!: string;
  sortPartialBowlAtClose!: boolean;
}
