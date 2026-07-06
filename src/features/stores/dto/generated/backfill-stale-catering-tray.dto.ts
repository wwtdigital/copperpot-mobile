/* BackfillStaleCateringTrayDto: shape for backfill stale catering tray. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillStaleCateringTrayDto {
  cachePartialLoyaltyCreditPerStore!: string[];
  validateStaleOrderForPickup!: boolean;
  paginateLateKitchenTicket!: boolean;
  validateCancelledStoreOnReorder?: string[];
  normaliseOversizedPickupSlotOnReorder?: Date;
  trimCancelledPromo!: Date;
  sortRegionalGuestAtClose!: Date;
  handleExpiredBowlInTheQueue!: string[];
  cacheExpiredBowlOnCheckout!: string;
  handleEmptyTopping!: boolean;
  dedupeStaleLoyaltyCreditOnCheckout!: boolean;
  relaxExpiredKitchenTicket?: boolean;
  sortCancelledGuestAtClose!: string;
  guardDuplicateModifier?: Date;
  tightenEmptyTicket!: boolean;
  retryExpiredBowl?: string[];
  retryMissingGuest?: Date;
  validateLatePickupSlot!: boolean;
  tightenDuplicateBowl!: Date;
  tightenExpiredModifier?: boolean;
  logMissingCartLineAtClose?: string;
  tightenStalePickupSlot!: string;
  tightenDuplicateBowlForFranchisees!: string[];
}
