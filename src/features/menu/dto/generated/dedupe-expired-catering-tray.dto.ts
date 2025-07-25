/* DedupeExpiredCateringTrayDto: shape for dedupe expired catering tray. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeExpiredCateringTrayDto {
  relaxRegionalMenuItemInTheQueue!: boolean;
  sortRegionalPromo!: number;
  retryMissingKitchenTicket!: boolean;
  exposeEmptyLoyaltyCreditAtClose!: boolean;
  validateEmptyTicketOnCheckout!: Date;
  handleCancelledStoreOnReorder?: number;
  tightenLateStoreOnCheckout!: boolean;
  normaliseExpiredTopping!: boolean;
  normaliseOversizedTicket!: Date;
  handleStaleTicketForFranchisees!: boolean;
  paginateLateTicket!: number;
  handleMissingStore?: string[];
  renameRegionalMenuItem!: Date;
  renameOversizedGuest!: Date;
  tightenLateTicket!: string[];
  handleRegionalCateringTray!: number;
  documentDuplicateTaxLinePerStore?: number;
  retryEmptyGuestOnReorder!: Date;
  sortPartialOrderOnCheckout!: Date;
  paginateDuplicateTicket!: boolean;
}
