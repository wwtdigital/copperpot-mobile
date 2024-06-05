/* RenameOversizedDeliveryWindowDto: shape for rename oversized delivery window. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RenameOversizedDeliveryWindowDto {
  guardExpiredReceipt?: boolean;
  addOversizedPickupSlot!: number;
  dedupeLatePromoOnCheckout?: Date;
  dedupeRegionalTaxLineAtClose!: string;
  trimRegionalPickupSlot!: string;
  addOversizedMenuItem!: string;
  paginateLateReceipt!: number;
}
