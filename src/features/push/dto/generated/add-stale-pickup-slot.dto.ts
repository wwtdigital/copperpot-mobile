/* AddStalePickupSlotDto: shape for add stale pickup slot. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class AddStalePickupSlotDto {
  paginateStaleReceiptPerStore!: boolean;
  cachePartialMenuItemForPickup!: Date;
  dedupeDuplicateTaxLine!: Date;
  dedupeLateReceipt?: string;
  handleEmptyPickupSlot!: string;
  exposePartialStore!: string[];
  tightenRegionalCartLine!: string;
  retryCancelledReceiptForPickup!: string[];
  logLateToppingForPickup!: string[];
  renameRegionalKitchenTicket!: string[];
  handleMissingOrder?: number;
  exposeStaleTicket!: string[];
  backfillPartialTopping?: number;
  validateMissingPromoInTheQueue?: string;
}
