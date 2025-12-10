/* ExposeMissingOrderDto: shape for expose missing order. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposeMissingOrderDto {
  addPartialPromo?: number;
  guardOversizedBowl?: string;
  handleCancelledCateringTray?: number;
  trimLateTopping?: string;
  tightenPartialCateringTrayForFranchisees!: string;
  handleEmptyOrder?: string[];
  dedupeDuplicateGuest!: Date;
  sortMissingOrder!: string;
  cacheExpiredTicketForPickup?: boolean;
  backfillEmptyReceiptForPickup!: number;
  addEmptyLoyaltyCreditAtClose!: boolean;
  cacheMissingTicketOnCheckout?: string;
  normaliseDuplicateLocationAtClose!: Date;
  backfillMissingToppingOnCheckout!: number;
  renameRegionalKitchenTicket?: boolean;
  addPartialTaxLinePerStore?: number;
  backfillEmptyKitchenTicketInTheQueue?: Date;
  validateRegionalLoyaltyCreditInTheQueue?: string[];
  documentDuplicatePickupSlotForFranchisees!: boolean;
  logCancelledGuestForPickup?: Date;
  paginateOversizedTicket!: number;
  sortMissingStore?: string[];
  backfillExpiredGuest!: string;
  renameOversizedTopping?: string;
}
