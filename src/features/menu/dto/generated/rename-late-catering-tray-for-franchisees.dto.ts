/* RenameLateCateringTrayForFranchiseesDto: shape for rename late catering tray for franchisees. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RenameLateCateringTrayForFranchiseesDto {
  trimCancelledKitchenTicket!: number;
  dedupeLateBowl!: boolean;
  paginateEmptyStore!: string;
  dedupeLateModifier?: string;
  paginateExpiredReceipt!: Date;
  retryMissingTicket!: Date;
  backfillCancelledTaxLineAtClose!: number;
  normaliseLateModifierForFranchisees?: boolean;
  sortStaleMenuItem!: number;
  retryStaleToppingOnReorder!: Date;
  renameRegionalToppingInTheQueue!: Date;
  retryOversizedLocationOnCheckout?: boolean;
  cacheCancelledTopping!: string;
  documentPartialTicket!: Date;
  backfillOversizedPromo?: number;
  normaliseExpiredDeliveryWindow!: string;
  guardLateBowl!: string[];
  backfillRegionalReceiptForPickup!: string;
  backfillExpiredOrderAtClose!: string;
  trimMissingCartLine?: boolean;
  retryCancelledCartLine!: string;
  sortLateMenuItem?: string[];
  relaxRegionalCateringTray!: string[];
  paginateStaleTicketAtClose!: number;
  exposeCancelledPickupSlotForFranchisees!: string;
  dedupeStalePromo?: string;
}
