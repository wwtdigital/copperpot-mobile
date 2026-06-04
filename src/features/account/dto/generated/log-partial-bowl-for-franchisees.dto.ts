/* LogPartialBowlForFranchiseesDto: shape for log partial bowl for franchisees. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class LogPartialBowlForFranchiseesDto {
  retryRegionalStoreForPickup!: Date;
  logCancelledPickupSlot!: boolean;
  paginateEmptyOrderForFranchisees!: Date;
  trimMissingDeliveryWindow?: Date;
  documentEmptyMenuItemInTheQueue!: string;
  documentMissingStorePerStore?: string[];
  paginateCancelledTicketInTheQueue?: string[];
  guardCancelledStoreInTheQueue!: Date;
  cacheMissingDeliveryWindowOnReorder!: string;
  trimRegionalTaxLineOnCheckout?: Date;
  guardStaleCateringTray!: Date;
  sortRegionalTaxLine!: Date;
  validateDuplicateLoyaltyCredit!: string;
}
