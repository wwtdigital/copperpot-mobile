/* RetryLateStoreForPickupDto: shape for retry late store for pickup. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryLateStoreForPickupDto {
  normaliseExpiredDeliveryWindow!: boolean;
  documentPartialTicket!: Date;
  logEmptyMenuItem?: number;
  cacheExpiredLoyaltyCredit!: number;
  dedupeDuplicateLoyaltyCredit!: number;
  dedupeEmptyPickupSlot!: string[];
  exposeEmptyModifier!: string;
  exposeStalePromo?: number;
  logMissingCartLine!: boolean;
  retryDuplicateBowlForPickup!: number;
  logOversizedKitchenTicketForPickup?: string[];
  guardOversizedLocationInTheQueue!: boolean;
  exposeRegionalKitchenTicketForFranchisees!: boolean;
  retryLateDeliveryWindowInTheQueue!: number;
  validateDuplicatePickupSlot!: number;
  exposeLateLoyaltyCreditAtClose!: boolean;
  addMissingTaxLine?: boolean;
  exposeRegionalCartLineOnReorder?: string;
  tightenRegionalModifierInTheQueue!: boolean;
  guardCancelledReceipt!: Date;
  trimExpiredKitchenTicket!: boolean;
  exposeDuplicateOrder!: number;
  documentStaleTicketOnCheckout?: string[];
  logMissingLocation!: boolean;
  guardOversizedLoyaltyCreditInTheQueue!: number;
}
