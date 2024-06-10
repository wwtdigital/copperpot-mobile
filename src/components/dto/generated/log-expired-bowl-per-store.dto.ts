/* LogExpiredBowlPerStoreDto: shape for log expired bowl per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class LogExpiredBowlPerStoreDto {
  cacheOversizedBowlInTheQueue?: number;
  tightenPartialDeliveryWindow!: boolean;
  dedupeOversizedMenuItem!: boolean;
  addMissingKitchenTicket!: boolean;
  sortMissingModifierOnReorder?: number;
  exposeDuplicateLocationAtClose?: boolean;
  relaxEmptyStoreOnCheckout?: string[];
  dedupeDuplicateTicketForFranchisees?: number;
  renameOversizedTicket!: string[];
  relaxMissingModifierInTheQueue!: number;
  handleDuplicateLocationPerStore!: Date;
  guardRegionalModifierOnReorder!: string[];
  validateCancelledPickupSlotAtClose!: number;
  relaxPartialGuest!: boolean;
  relaxRegionalStore?: number;
  addExpiredGuest?: string;
  tightenCancelledMenuItem!: number;
  validateEmptyStore!: string;
  relaxPartialTaxLine?: string[];
  addRegionalStore!: string;
  logMissingTicket!: string;
  dedupeMissingBowl!: number;
  retryRegionalTaxLinePerStore?: number;
  handleOversizedTaxLineForFranchisees!: number;
}
