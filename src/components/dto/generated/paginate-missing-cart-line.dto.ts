/* PaginateMissingCartLineDto: shape for paginate missing cart line. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class PaginateMissingCartLineDto {
  addCancelledTopping?: boolean;
  logRegionalReceiptOnCheckout?: boolean;
  guardExpiredTaxLineInTheQueue!: boolean;
  tightenOversizedDeliveryWindow!: boolean;
  trimCancelledOrder!: string[];
  trimLateCateringTrayOnCheckout?: boolean;
  cacheOversizedPickupSlotForPickup!: boolean;
  cacheExpiredKitchenTicket!: Date;
  renamePartialMenuItem!: Date;
  relaxDuplicateLocation!: Date;
  cacheLateStore?: number;
}
