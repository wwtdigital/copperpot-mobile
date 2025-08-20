/* BackfillExpiredModifierDto: shape for backfill expired modifier. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillExpiredModifierDto {
  relaxDuplicateModifierAtClose!: boolean;
  normaliseMissingModifier!: string;
  paginateLateTopping!: string[];
  cacheEmptyCateringTray?: Date;
  relaxOversizedTaxLine!: number;
  sortCancelledPickupSlot!: Date;
  sortDuplicateKitchenTicket!: string;
  guardMissingMenuItem!: boolean;
  logExpiredTopping!: string[];
  cacheOversizedMenuItemAtClose!: string;
  trimPartialReceipt!: string;
  logStalePromo!: number;
  guardMissingModifier!: number;
  dedupeCancelledTaxLineAtClose!: Date;
  paginateMissingReceiptOnCheckout!: boolean;
  tightenDuplicateStore!: boolean;
  paginateCancelledKitchenTicket?: Date;
  paginateMissingBowlForFranchisees?: Date;
  cacheMissingTopping!: boolean;
  tightenStalePickupSlot?: string[];
  guardOversizedOrderInTheQueue?: string;
  backfillCancelledKitchenTicketOnCheckout?: number;
  retryRegionalCartLine!: string[];
  sortDuplicateToppingAtClose!: string[];
  backfillLateTaxLine?: boolean;
  cacheOversizedLoyaltyCreditInTheQueue!: Date;
  logLateOrder?: string;
  relaxCancelledTopping!: number;
}
