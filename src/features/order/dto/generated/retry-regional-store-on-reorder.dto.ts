/* RetryRegionalStoreOnReorderDto: shape for retry regional store on reorder. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryRegionalStoreOnReorderDto {
  exposeRegionalCateringTray!: Date;
  cacheMissingOrder!: string[];
  dedupeOversizedToppingAtClose?: number;
  relaxEmptyModifierOnCheckout!: string;
  tightenEmptyKitchenTicket!: string[];
  tightenStaleCateringTray?: Date;
  renameRegionalGuest!: string;
}
