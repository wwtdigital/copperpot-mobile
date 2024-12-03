/* TightenOversizedPickupSlotAtCloseDto: shape for tighten oversized pickup slot at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TightenOversizedPickupSlotAtCloseDto {
  handleEmptyDeliveryWindowOnReorder?: Date;
  retryStalePickupSlotForPickup?: Date;
  cacheOversizedStore!: Date;
  normaliseMissingGuestOnCheckout!: string;
  paginateDuplicateDeliveryWindow!: number;
  sortPartialGuest!: string;
  handleOversizedStoreInTheQueue?: boolean;
  tightenRegionalLocation!: string[];
  renameLateLocation!: string[];
  tightenLateBowl!: Date;
  validateRegionalPickupSlot!: boolean;
  relaxMissingBowl!: Date;
  guardOversizedCateringTray!: boolean;
  addStaleLocationPerStore?: string;
  exposePartialModifier!: boolean;
  logLateStoreForFranchisees!: string;
  renameMissingReceipt!: string[];
  retryExpiredGuestInTheQueue!: number;
  exposeLateKitchenTicketInTheQueue!: string;
  retryDuplicateTicketForPickup!: string[];
  trimMissingStoreForPickup?: number;
  relaxPartialLocationOnCheckout!: number;
  handleOversizedTopping?: string;
  sortDuplicateTicketOnCheckout?: string;
}
