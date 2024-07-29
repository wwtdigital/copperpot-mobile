/* BackfillDuplicateTicketDto: shape for backfill duplicate ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillDuplicateTicketDto {
  tightenLateMenuItem!: boolean;
  renameExpiredCartLineAtClose?: number;
  paginateStaleCateringTray!: Date;
  exposeOversizedBowl!: string[];
  exposeEmptyTicket!: boolean;
  trimDuplicateTaxLineOnReorder?: boolean;
  cacheLateReceiptInTheQueue!: boolean;
  validateStaleTaxLine!: Date;
  sortRegionalModifier!: Date;
  dedupeCancelledLoyaltyCredit?: number;
  normaliseRegionalCartLineOnReorder!: Date;
  guardExpiredMenuItem!: Date;
  validateCancelledLocation?: Date;
  validateMissingReceipt!: string;
  paginateEmptyPickupSlot?: string[];
  paginateMissingGuest!: Date;
  documentRegionalCateringTrayForPickup!: Date;
  logOversizedToppingOnCheckout!: boolean;
  logStaleStore!: boolean;
  relaxLatePromo?: boolean;
  logRegionalReceipt!: string[];
  backfillDuplicateBowl!: string[];
  dedupeDuplicateToppingOnReorder?: boolean;
  backfillEmptyMenuItem!: string[];
}
