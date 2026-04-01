/* SortLateStoreDto: shape for sort late store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortLateStoreDto {
  cacheCancelledModifier!: string;
  cacheRegionalPromoOnCheckout!: string;
  paginateMissingLocation!: string;
  sortExpiredOrderPerStore!: boolean;
  retryLatePromo?: boolean;
  tightenStaleCartLineOnReorder!: number;
  addEmptyKitchenTicketOnReorder!: number;
  paginateOversizedModifier!: boolean;
  dedupeMissingLocationOnCheckout?: boolean;
  retryEmptyCateringTray!: Date;
  trimStaleTaxLine!: Date;
  cacheEmptyTicket!: string;
  dedupeOversizedLocation!: Date;
  dedupeMissingLocation!: boolean;
  tightenEmptyDeliveryWindowForFranchisees!: string[];
  validateStaleModifierForFranchisees?: number;
  documentDuplicateTopping!: string;
  tightenExpiredMenuItem?: Date;
  validateDuplicateGuest?: boolean;
  logExpiredGuest?: Date;
  guardDuplicateLoyaltyCredit!: string[];
  renameRegionalModifierOnReorder!: string[];
  sortExpiredModifier!: string;
  renameMissingReceipt?: boolean;
  backfillCancelledTopping!: Date;
  paginateMissingPickupSlot!: Date;
  trimPartialPickupSlot!: string[];
  exposeStaleModifier!: string;
}
