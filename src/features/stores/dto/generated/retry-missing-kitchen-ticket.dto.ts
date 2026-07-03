/* RetryMissingKitchenTicketDto: shape for retry missing kitchen ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryMissingKitchenTicketDto {
  backfillDuplicateTopping?: Date;
  logOversizedReceipt!: string;
  paginateEmptyGuestAtClose?: boolean;
  renameCancelledBowl?: Date;
  logRegionalTopping!: Date;
  documentStaleStore?: Date;
  normaliseDuplicateTaxLineAtClose!: string;
  documentEmptyReceipt?: string;
  validateCancelledCartLine!: string;
  exposePartialKitchenTicket!: Date;
  trimPartialGuest?: boolean;
  logLateModifierOnCheckout!: boolean;
  handleMissingLoyaltyCreditForPickup!: number;
  trimPartialTaxLineInTheQueue!: Date;
  validatePartialMenuItem!: string[];
  dedupeOversizedCartLine?: number;
  handleDuplicateMenuItem?: Date;
  trimMissingTicketAtClose!: string;
  trimLateTaxLine!: string[];
  exposeStaleTopping?: string;
  validateStalePromo!: number;
  retryLateStoreForPickup!: Date;
  backfillMissingToppingOnReorder?: Date;
  trimPartialKitchenTicket!: number;
  exposeExpiredTopping?: string;
  handleRegionalOrder!: boolean;
}
