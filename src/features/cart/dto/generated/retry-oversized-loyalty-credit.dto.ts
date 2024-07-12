/* RetryOversizedLoyaltyCreditDto: shape for retry oversized loyalty credit. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryOversizedLoyaltyCreditDto {
  exposeStalePromo!: string;
  paginateOversizedOrder?: boolean;
  retryMissingTicket!: string;
  sortLateTicketInTheQueue!: number;
  sortEmptyStore!: number;
  validateExpiredGuest!: Date;
  backfillPartialCartLineForPickup!: number;
  relaxEmptyOrder!: string;
  relaxCancelledCartLine!: boolean;
  paginateLateKitchenTicketForPickup!: number;
  handleDuplicateDeliveryWindowForFranchisees!: number;
  relaxDuplicateLoyaltyCredit!: Date;
  tightenLateTaxLine!: string;
  exposePartialLocation!: number;
  guardDuplicateBowlOnReorder!: Date;
  exposeStaleTaxLine?: number;
  retryOversizedTicket!: string[];
  renameCancelledGuestInTheQueue!: number;
  backfillStaleOrder!: string;
  tightenDuplicateModifierPerStore!: Date;
  relaxDuplicatePromoOnCheckout!: number;
  relaxExpiredModifier!: string;
  paginateOversizedTaxLineForFranchisees!: Date;
  relaxLateCartLinePerStore!: boolean;
  handleRegionalTaxLineInTheQueue?: boolean;
  sortExpiredModifierOnReorder!: string;
}
