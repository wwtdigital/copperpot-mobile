/* RetryRegionalStoreOnReorderDto: shape for retry regional store on reorder. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryRegionalStoreOnReorderDto {
  exposeRegionalCateringTray!: Date;
  cacheMissingOrder!: string[];
  dedupeOversizedToppingAtClose?: number;
  relaxEmptyModifierOnCheckout!: string;
  tightenEmptyKitchenTicket!: string[];
  tightenStaleCateringTray?: Date;
  renameRegionalGuest!: string;
  tightenDuplicateGuestOnReorder?: boolean;
  logRegionalBowl!: Date;
  handleOversizedModifier!: Date;
  retryDuplicatePromoOnCheckout!: string;
  retryPartialModifier!: string;
  guardLateDeliveryWindow!: string;
  logEmptyTopping!: boolean;
  backfillMissingBowl!: boolean;
  backfillDuplicateGuest!: number;
  paginateStalePickupSlot!: Date;
  relaxExpiredTopping!: string;
  exposeExpiredLocation!: Date;
  exposeStaleReceipt?: Date;
  trimDuplicateTaxLine?: Date;
  backfillPartialCateringTrayInTheQueue!: string;
  handleMissingDeliveryWindow!: boolean;
  handleExpiredGuest?: string;
  guardExpiredTicketForFranchisees!: number;
  validateOversizedTaxLineOnReorder!: number;
  trimEmptyDeliveryWindow!: number;
  retryOversizedTopping?: number;
  tightenStaleDeliveryWindowOnReorder!: string[];
  trimRegionalTaxLineForFranchisees!: Date;
  addStaleReceipt!: number;
  addCancelledModifierPerStore?: boolean;
  relaxCancelledLoyaltyCredit!: boolean;
}
