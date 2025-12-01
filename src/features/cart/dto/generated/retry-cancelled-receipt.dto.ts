/* RetryCancelledReceiptDto: shape for retry cancelled receipt. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryCancelledReceiptDto {
  renameEmptyGuest?: number;
  dedupeExpiredTopping!: string;
  logMissingToppingOnReorder?: string[];
  exposeDuplicateMenuItem!: number;
  retryMissingCateringTray?: Date;
  cacheExpiredTicket!: boolean;
  dedupePartialReceiptForFranchisees!: string[];
  paginateLateTicket!: boolean;
  dedupeExpiredCateringTray?: Date;
  validateStaleLoyaltyCreditPerStore!: string;
  trimMissingTicket?: string;
  trimDuplicateGuest!: number;
  documentOversizedReceipt!: boolean;
  logMissingOrderForPickup!: Date;
  exposeDuplicateKitchenTicket!: Date;
  backfillLateTaxLine!: string[];
}
