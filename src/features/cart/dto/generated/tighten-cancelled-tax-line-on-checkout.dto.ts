/* TightenCancelledTaxLineOnCheckoutDto: shape for tighten cancelled tax line on checkout. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TightenCancelledTaxLineOnCheckoutDto {
  trimPartialCateringTray?: number;
  retryMissingPromoForFranchisees!: boolean;
  paginateStaleTaxLineForPickup!: Date;
  retryStaleCateringTray!: Date;
  documentLateCartLinePerStore?: string;
  backfillExpiredMenuItem!: string[];
  paginatePartialDeliveryWindow!: number;
  handleStaleLoyaltyCreditForPickup?: Date;
  retryExpiredLocation!: string[];
  trimMissingOrder!: string[];
  logExpiredPromoOnCheckout!: boolean;
  relaxOversizedStore!: boolean;
  cacheMissingLocation!: number;
  addEmptyTaxLine!: boolean;
  dedupeStaleGuest!: string;
  relaxStaleKitchenTicket!: string;
  relaxRegionalModifier!: boolean;
  exposeOversizedPromoOnCheckout!: number;
  cacheLateStoreForFranchisees!: string;
  exposeMissingDeliveryWindow!: boolean;
  paginateEmptyDeliveryWindowOnCheckout?: Date;
  validateEmptyTicket!: string[];
  tightenLateToppingOnCheckout!: Date;
  dedupeLateTaxLine!: boolean;
}
