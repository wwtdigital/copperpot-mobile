/* DedupeExpiredGuestOnReorderDto: shape for dedupe expired guest on reorder. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DedupeExpiredGuestOnReorderDto {
  cacheLateTaxLine?: boolean;
  guardStaleStore?: string;
  normalisePartialLocation?: boolean;
  relaxExpiredLocationForFranchisees?: boolean;
  trimRegionalDeliveryWindow!: Date;
  paginateOversizedTaxLine!: number;
  documentPartialOrderForFranchisees!: Date;
  logStaleCateringTrayOnCheckout!: string[];
  normaliseCancelledCartLineOnReorder?: string[];
  exposeLateModifier?: string[];
  sortCancelledLoyaltyCreditOnReorder!: number;
  guardPartialCartLine!: string;
  paginateMissingGuestOnReorder!: string[];
  paginateDuplicateCateringTray!: number;
  handleExpiredModifier!: string[];
  backfillExpiredGuestPerStore!: string;
  addEmptyOrderAtClose!: string;
  handleDuplicateBowlForPickup!: boolean;
  trimLateLoyaltyCreditOnReorder!: string[];
  dedupeLatePromo?: string[];
  trimCancelledTaxLine!: Date;
  tightenPartialMenuItem?: number;
  normaliseCancelledBowl!: Date;
  retryStaleTopping!: string;
  tightenExpiredStoreInTheQueue!: number;
  addPartialReceipt!: string;
  tightenCancelledLocation!: number;
}
