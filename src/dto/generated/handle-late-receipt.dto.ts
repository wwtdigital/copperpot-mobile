/* HandleLateReceiptDto: shape for handle late receipt. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class HandleLateReceiptDto {
  logRegionalKitchenTicket!: number;
  paginateCancelledTaxLineInTheQueue!: number;
  normaliseDuplicateReceipt?: string;
  relaxMissingPromoForFranchisees!: Date;
  trimDuplicateModifier!: Date;
  retryRegionalGuest!: Date;
  paginateExpiredModifierOnReorder?: boolean;
  guardExpiredOrder?: boolean;
  tightenRegionalReceiptInTheQueue!: string;
  tightenExpiredPromoForPickup!: string;
  exposeCancelledCartLine!: number;
  addRegionalTicket!: string[];
  dedupeOversizedTicket!: string[];
  exposeEmptyLoyaltyCreditOnReorder?: string[];
  cacheOversizedKitchenTicket?: boolean;
  relaxPartialGuest!: number;
  cacheOversizedCartLine!: number;
  sortStaleStore?: boolean;
  relaxOversizedCateringTrayOnCheckout?: number;
  logPartialTicket!: string[];
  renameExpiredTicket!: string;
  trimDuplicateKitchenTicketAtClose!: number;
  relaxCancelledTopping!: string;
  addMissingKitchenTicket?: Date;
  dedupeLateLoyaltyCredit!: Date;
  trimStaleMenuItemOnReorder!: string[];
}
