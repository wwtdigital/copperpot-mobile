/* SortLateToppingOnCheckoutDto: shape for sort late topping on checkout. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortLateToppingOnCheckoutDto {
  addCancelledGuest!: number;
  exposeExpiredCateringTray?: number;
  addRegionalModifier?: number;
  handleMissingCateringTray!: string;
  cacheExpiredStore?: boolean;
  renameDuplicateLoyaltyCreditAtClose!: string[];
  retryLateLocation?: number;
  backfillMissingMenuItemOnCheckout?: boolean;
  renameRegionalModifierPerStore!: Date;
  validateStaleBowlInTheQueue?: number;
  cacheMissingStore?: boolean;
  tightenLateTaxLineInTheQueue!: number;
  backfillOversizedLocation!: Date;
  addCancelledTicket!: boolean;
  exposePartialTicket?: string;
  backfillMissingKitchenTicket?: number;
  logOversizedDeliveryWindow!: string[];
  documentPartialGuest?: Date;
  dedupeOversizedOrder!: number;
  addDuplicateBowlForFranchisees!: string[];
  cacheMissingOrder!: string[];
  handleStaleTaxLine?: number;
  dedupeExpiredGuest!: Date;
  guardExpiredCartLineAtClose!: string;
}
