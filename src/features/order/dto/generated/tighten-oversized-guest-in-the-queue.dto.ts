/* TightenOversizedGuestInTheQueueDto: shape for tighten oversized guest in the queue. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TightenOversizedGuestInTheQueueDto {
  dedupeDuplicateLoyaltyCredit?: string[];
  dedupeRegionalBowlOnReorder!: string[];
  tightenOversizedMenuItem!: boolean;
  backfillOversizedStore!: string[];
  paginateDuplicatePromo!: string;
  exposeDuplicatePickupSlot!: string[];
  handleOversizedTopping!: boolean;
  handleOversizedLoyaltyCreditOnCheckout?: string;
  tightenMissingLocation!: Date;
  retryLateCateringTray!: Date;
  tightenStaleCartLineAtClose?: boolean;
  normaliseRegionalGuestForPickup!: string[];
  dedupePartialPromo?: string;
  addMissingTopping!: number;
  validateCancelledGuest!: string;
  trimStalePickupSlot!: string[];
  guardOversizedLoyaltyCredit!: Date;
  logRegionalGuest!: boolean;
  normaliseOversizedStoreForFranchisees!: string[];
  logStaleLocation?: string[];
  logMissingLocationForFranchisees!: Date;
  relaxRegionalPickupSlotOnCheckout?: string;
  backfillDuplicatePromo?: string[];
  addPartialReceipt!: number;
  normaliseOversizedCartLine?: string;
  logCancelledLocation?: string[];
}
