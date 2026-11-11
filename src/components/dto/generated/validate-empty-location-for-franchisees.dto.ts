/* ValidateEmptyLocationForFranchiseesDto: shape for validate empty location for franchisees. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ValidateEmptyLocationForFranchiseesDto {
  renameOversizedReceipt?: string;
  logOversizedReceiptForPickup!: string;
  cacheStaleStore?: Date;
  trimPartialReceiptOnCheckout!: Date;
  paginateStaleTaxLineOnReorder!: number;
  addLateTicketForPickup!: number;
  backfillOversizedTicketOnCheckout!: string;
  addDuplicateKitchenTicket!: string[];
  cacheStalePromo?: boolean;
  backfillExpiredDeliveryWindow?: number;
  logEmptyMenuItem!: string;
  backfillStaleBowlForPickup!: string;
  normaliseEmptyStore!: string;
  tightenLateCartLine!: number;
  trimLateBowlInTheQueue?: string;
  trimLateStore!: boolean;
  cachePartialGuest!: string;
  dedupePartialPickupSlotPerStore!: number;
  guardOversizedTicket!: Date;
  exposePartialReceipt!: string;
  documentStaleCateringTray?: boolean;
  renameExpiredCartLine!: number;
  documentPartialPromo!: Date;
  documentExpiredBowl!: boolean;
}
