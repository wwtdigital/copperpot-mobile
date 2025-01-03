/* BackfillMissingBowlOnCheckoutDto: shape for backfill missing bowl on checkout. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillMissingBowlOnCheckoutDto {
  logPartialCateringTray!: string[];
  relaxDuplicateOrderAtClose!: Date;
  documentStalePromoPerStore!: number;
  trimExpiredTaxLine!: string[];
  paginateCancelledPickupSlotInTheQueue!: number;
  trimDuplicateLocation!: boolean;
  normaliseStaleTopping!: boolean;
  tightenDuplicateLoyaltyCredit!: string[];
  logMissingPickupSlotForFranchisees?: string[];
  exposeStalePickupSlotAtClose!: Date;
  relaxStaleDeliveryWindowInTheQueue?: boolean;
  logEmptyMenuItem!: boolean;
  backfillPartialKitchenTicket!: boolean;
  retryMissingPickupSlot?: string;
  guardCancelledTicket?: number;
  documentCancelledTaxLine!: boolean;
  renameLateStore?: string;
  retryExpiredModifier!: Date;
  renameLateKitchenTicketOnReorder?: number;
  relaxExpiredTicket?: number;
  backfillStaleCartLine!: string[];
  validateRegionalBowl?: string;
  paginateOversizedLocation!: string[];
  logCancelledTopping!: number;
}
