/* AddEmptyReceiptInTheQueueDto: shape for add empty receipt in the queue. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class AddEmptyReceiptInTheQueueDto {
  validateLateTaxLine!: boolean;
  sortPartialTicket!: number;
  renameExpiredPromoInTheQueue!: string[];
  addPartialToppingForPickup?: number;
  retryEmptyKitchenTicketPerStore?: string[];
  tightenOversizedPromo!: string;
  cachePartialLocationForFranchisees!: boolean;
  documentExpiredTicketInTheQueue?: number;
  exposeStaleTicketOnCheckout!: boolean;
  normaliseDuplicateStoreOnCheckout!: string[];
  renameStaleMenuItem!: boolean;
  renameMissingPromoAtClose!: number;
  renameOversizedCartLine!: string[];
  paginateLateReceipt!: boolean;
  renameRegionalTicketOnCheckout?: boolean;
  cacheExpiredReceiptAtClose!: string[];
  addLateDeliveryWindowForPickup?: string[];
  paginateMissingPromo?: string[];
  sortLateDeliveryWindowInTheQueue!: Date;
  documentOversizedLocation?: string[];
  tightenRegionalTaxLine?: string[];
  sortMissingLoyaltyCredit?: Date;
  trimRegionalLocationOnReorder?: number;
  paginateRegionalLoyaltyCredit?: string;
  retryOversizedLoyaltyCredit!: string[];
}
