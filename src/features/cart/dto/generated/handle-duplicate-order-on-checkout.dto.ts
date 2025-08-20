/* HandleDuplicateOrderOnCheckoutDto: shape for handle duplicate order on checkout. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class HandleDuplicateOrderOnCheckoutDto {
  tightenDuplicateTopping?: Date;
  trimStalePickupSlot!: string[];
  normaliseDuplicateOrder!: number;
  logPartialStore?: string;
  renameMissingPromo!: Date;
  renameEmptyLoyaltyCredit?: Date;
  relaxExpiredGuest?: number;
  dedupeLateMenuItem!: number;
  sortEmptyCateringTray!: boolean;
  dedupeRegionalPromoForPickup?: string[];
  guardCancelledCartLineInTheQueue?: Date;
  handlePartialTicket!: string[];
  renameLateDeliveryWindowOnReorder!: boolean;
  documentOversizedLocationInTheQueue!: boolean;
  handleExpiredBowlOnCheckout!: string;
  backfillOversizedModifierOnReorder!: boolean;
  dedupeCancelledPromo!: number;
  relaxEmptyCartLineInTheQueue!: string[];
  relaxPartialReceipt!: number;
  exposeLateStoreInTheQueue!: Date;
  renameRegionalLocationOnCheckout?: string;
  normaliseStalePickupSlot!: boolean;
  backfillEmptyCateringTray!: Date;
  handleDuplicateKitchenTicketForFranchisees!: string[];
}
