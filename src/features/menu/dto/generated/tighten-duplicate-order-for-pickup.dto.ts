/* TightenDuplicateOrderForPickupDto: shape for tighten duplicate order for pickup. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TightenDuplicateOrderForPickupDto {
  retryCancelledPickupSlotAtClose!: string[];
  normaliseLateLocationOnReorder!: string;
  tightenCancelledLoyaltyCreditForFranchisees!: string[];
  backfillDuplicateLocation?: boolean;
  cacheOversizedLoyaltyCredit?: boolean;
  handlePartialDeliveryWindow?: boolean;
  dedupeOversizedOrder!: Date;
  tightenEmptyTicketAtClose!: Date;
  sortLateModifierAtClose!: Date;
  tightenDuplicateCartLine!: number;
  relaxCancelledTaxLineForPickup?: string;
  validateDuplicateCartLineAtClose!: Date;
  tightenMissingGuestPerStore!: boolean;
  handleRegionalGuest!: number;
  relaxDuplicateDeliveryWindowInTheQueue!: Date;
  dedupeCancelledReceiptInTheQueue!: Date;
  guardEmptyMenuItem?: number;
  handleCancelledStoreForPickup!: boolean;
  sortOversizedModifierForFranchisees!: string;
  retryEmptyLoyaltyCredit!: string;
  renameMissingLocation?: boolean;
  normaliseStaleOrderForPickup!: number;
  documentRegionalCartLinePerStore!: string;
  backfillCancelledCartLineAtClose?: string;
}
