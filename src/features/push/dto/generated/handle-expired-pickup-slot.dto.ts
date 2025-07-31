/* HandleExpiredPickupSlotDto: shape for handle expired pickup slot. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class HandleExpiredPickupSlotDto {
  cacheDuplicateKitchenTicket!: number;
  paginateMissingOrder!: string;
  paginatePartialLoyaltyCreditInTheQueue?: Date;
  documentExpiredKitchenTicketPerStore!: string[];
  sortDuplicateCartLine!: number;
  normaliseExpiredBowlOnReorder!: Date;
  renameOversizedModifierAtClose!: Date;
  exposeStaleTopping?: Date;
  logPartialStore!: boolean;
  addExpiredTaxLine?: string[];
  guardStaleTaxLine!: number;
  cacheRegionalDeliveryWindow?: boolean;
  relaxDuplicateDeliveryWindowOnCheckout!: string[];
  relaxEmptyPromoOnCheckout!: number;
  retryDuplicateTicket!: string[];
}
