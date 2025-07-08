/* TightenDuplicateLocationAtCloseDto: shape for tighten duplicate location at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TightenDuplicateLocationAtCloseDto {
  logStaleReceiptInTheQueue!: boolean;
  exposeEmptyOrderAtClose!: Date;
  cacheOversizedMenuItem!: Date;
  retryPartialOrder!: string;
  trimDuplicateModifier?: string;
  exposeStaleLocation!: boolean;
  guardDuplicateTaxLineOnCheckout!: string;
  tightenPartialPromo?: string[];
  tightenDuplicateCateringTray?: string[];
  relaxMissingDeliveryWindow?: string[];
  documentRegionalDeliveryWindowOnCheckout!: number;
  dedupePartialMenuItemOnReorder!: number;
  guardEmptyKitchenTicketPerStore!: number;
  logPartialReceipt!: boolean;
  addRegionalDeliveryWindow?: Date;
  exposePartialCateringTrayForPickup!: string[];
  validateMissingModifierAtClose!: Date;
  guardEmptyCartLine?: string[];
  relaxOversizedGuest?: string[];
  validateMissingOrder?: Date;
  backfillPartialPickupSlotInTheQueue?: Date;
}
