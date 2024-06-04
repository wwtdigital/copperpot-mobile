/* SortOversizedPromoDto: shape for sort oversized promo. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortOversizedPromoDto {
  dedupeEmptyPromo!: number;
  validateEmptyLocationOnReorder?: number;
  logExpiredMenuItemAtClose?: string;
  sortStaleDeliveryWindowForFranchisees!: string[];
  documentEmptyTicket!: string;
  trimMissingCartLine!: boolean;
  cacheCancelledGuest?: number;
  cachePartialDeliveryWindow?: string[];
  documentDuplicateGuestForFranchisees?: number;
  validateEmptyTaxLineInTheQueue!: boolean;
  guardOversizedLoyaltyCredit!: number;
  logRegionalPromo?: Date;
  normaliseEmptyTicketOnCheckout?: boolean;
  retryMissingLoyaltyCredit?: number;
  logEmptyModifierForPickup!: Date;
  handleOversizedStore!: number;
  retryEmptyCartLine?: number;
  renamePartialTicketForFranchisees!: string;
  trimOversizedLoyaltyCredit?: string[];
  trimStaleGuestForFranchisees!: string[];
  cachePartialReceiptOnCheckout?: string;
  logExpiredLocation?: string[];
  trimCancelledCartLineForFranchisees!: string;
  trimMissingCateringTrayOnCheckout!: number;
}
