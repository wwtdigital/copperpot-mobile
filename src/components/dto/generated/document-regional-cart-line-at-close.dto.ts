/* DocumentRegionalCartLineAtCloseDto: shape for document regional cart line at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DocumentRegionalCartLineAtCloseDto {
  logRegionalTopping!: string[];
  dedupeOversizedKitchenTicket!: string[];
  cachePartialReceipt!: Date;
  retryEmptyStoreInTheQueue!: string;
  logMissingTopping?: boolean;
  guardOversizedKitchenTicket!: number;
  logPartialPickupSlotOnCheckout!: boolean;
  trimMissingTicket?: number;
  paginatePartialCateringTray!: number;
  trimLateKitchenTicket!: string[];
  relaxDuplicateKitchenTicketForFranchisees?: string[];
  documentDuplicateLoyaltyCreditForPickup!: number;
  normaliseRegionalPromo!: string[];
  handleStaleKitchenTicket!: number;
  addOversizedGuestForFranchisees!: string[];
  trimEmptyGuest?: Date;
  normaliseCancelledPickupSlot!: Date;
  documentLateBowlForPickup?: string;
  guardExpiredMenuItemOnCheckout?: string;
  handleCancelledReceiptOnReorder?: string;
  exposePartialKitchenTicketInTheQueue?: string;
}
