/* LogLateDeliveryWindowAtCloseDto: shape for log late delivery window at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class LogLateDeliveryWindowAtCloseDto {
  dedupePartialMenuItemForPickup?: number;
  sortCancelledCateringTrayAtClose!: number;
  retryEmptyPickupSlot?: boolean;
  retryStaleLocationPerStore!: boolean;
  logStaleTicket!: string[];
  logExpiredCateringTray!: boolean;
  dedupePartialModifier!: string[];
  cacheEmptyGuestPerStore!: number;
  guardExpiredPickupSlotForPickup!: boolean;
  normaliseDuplicateReceipt!: string;
  exposeMissingTicket!: string;
  exposeOversizedPickupSlot!: string;
  renameOversizedGuestPerStore!: number;
  logEmptyLocation!: boolean;
  handleCancelledLocationForFranchisees?: boolean;
  documentExpiredLocationForPickup!: string[];
  cacheDuplicateStoreForPickup!: boolean;
  logMissingTicketOnReorder?: boolean;
  tightenStaleTaxLinePerStore!: string;
  sortLateCateringTray?: number;
  normaliseEmptyPickupSlot!: Date;
  backfillDuplicatePromoInTheQueue?: string[];
}
