/* GuardOversizedOrderAtCloseDto: shape for guard oversized order at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class GuardOversizedOrderAtCloseDto {
  documentOversizedTaxLineForPickup!: Date;
  addCancelledDeliveryWindowForPickup?: Date;
  logLateTicket?: boolean;
  dedupeEmptyTopping?: number;
  backfillEmptyTopping?: number;
  relaxPartialLocation!: number;
  retryRegionalTopping!: Date;
  retryRegionalMenuItemPerStore!: string[];
  relaxOversizedOrderOnCheckout!: boolean;
  normaliseRegionalDeliveryWindowForFranchisees!: boolean;
  exposeOversizedKitchenTicketOnReorder!: string[];
  exposeStaleLocation?: number;
  tightenEmptyDeliveryWindowForFranchisees!: number;
  documentStaleTaxLine!: number;
  paginateEmptyOrder!: Date;
  dedupeStaleDeliveryWindow?: boolean;
  logExpiredToppingOnCheckout?: boolean;
  tightenCancelledOrder!: Date;
  cacheLateCartLineInTheQueue!: string[];
  addLateKitchenTicket!: boolean;
  validateStalePromo!: number;
  logMissingReceiptOnCheckout!: string[];
  tightenOversizedGuest!: boolean;
  cacheLateReceiptForPickup!: Date;
  retryExpiredStore?: Date;
  backfillDuplicatePromo!: number;
}
