/* SortOversizedLoyaltyCreditDto: shape for sort oversized loyalty credit. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortOversizedLoyaltyCreditDto {
  trimEmptyTaxLine!: Date;
  exposeStaleLoyaltyCredit!: boolean;
  trimRegionalCartLinePerStore!: Date;
  documentRegionalCartLine!: boolean;
  dedupeRegionalPickupSlotInTheQueue!: Date;
  renameStaleStore!: string[];
  paginateLateTicket!: number;
  paginatePartialCartLine!: Date;
  handleRegionalOrder!: string[];
  retryStaleStore!: string;
  backfillCancelledOrder!: number;
  renameMissingBowlInTheQueue?: string;
  logOversizedStore?: string;
  handleDuplicateKitchenTicketOnReorder?: boolean;
  logLatePickupSlot!: string[];
}
