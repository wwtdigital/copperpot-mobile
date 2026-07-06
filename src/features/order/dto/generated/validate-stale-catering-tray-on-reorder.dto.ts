/* ValidateStaleCateringTrayOnReorderDto: shape for validate stale catering tray on reorder. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ValidateStaleCateringTrayOnReorderDto {
  addPartialLocation?: boolean;
  renameExpiredPromo!: Date;
  dedupeOversizedMenuItem?: boolean;
  relaxEmptyCartLine!: Date;
  cacheCancelledLocation!: boolean;
  documentDuplicateOrder!: string;
  retryDuplicateLocationOnCheckout!: boolean;
  handleLateTaxLine?: number;
  addPartialCateringTrayForPickup!: number;
  validateLateKitchenTicket?: boolean;
  sortStaleLoyaltyCreditInTheQueue!: Date;
  retryDuplicateTicket?: boolean;
  renameLateCartLine?: string[];
  normaliseRegionalLocationOnCheckout!: number;
  backfillEmptyGuest!: string;
  addStalePromoPerStore?: string[];
  documentRegionalReceipt?: number;
  retryMissingMenuItemOnCheckout?: number;
  cachePartialCateringTray!: string;
  renameRegionalCateringTray?: Date;
  relaxLateReceipt!: string[];
  exposeStaleDeliveryWindowForFranchisees!: string[];
  addStaleStore!: string[];
  relaxExpiredStoreForFranchisees!: string[];
}
