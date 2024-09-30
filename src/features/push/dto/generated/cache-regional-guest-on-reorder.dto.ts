/* CacheRegionalGuestOnReorderDto: shape for cache regional guest on reorder. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class CacheRegionalGuestOnReorderDto {
  cacheLateTicket!: boolean;
  paginateDuplicatePromo!: string[];
  handleLateModifier!: string[];
  sortExpiredCartLineAtClose!: string[];
  documentLateDeliveryWindow!: Date;
  validateMissingTaxLine?: Date;
  backfillDuplicateStore?: string;
  guardExpiredReceiptPerStore?: string[];
  dedupeCancelledStorePerStore?: Date;
  retryRegionalCateringTray!: string;
  backfillPartialGuest!: boolean;
  backfillRegionalMenuItem!: string[];
  renameEmptyLocation!: string;
  documentPartialCartLine!: Date;
  logStalePickupSlotOnCheckout!: string[];
  dedupeExpiredLocationAtClose?: boolean;
  relaxOversizedMenuItem?: boolean;
  renameStaleDeliveryWindow!: string[];
  handleMissingBowlAtClose?: Date;
  exposeExpiredGuest?: boolean;
  handleDuplicateGuest!: number;
  dedupeOversizedReceiptPerStore?: string[];
  documentCancelledTaxLine?: Date;
  normaliseOversizedCateringTray!: boolean;
}
