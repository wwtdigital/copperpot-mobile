/* RelaxCancelledCateringTrayForPickupDto: shape for relax cancelled catering tray for pickup. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RelaxCancelledCateringTrayForPickupDto {
  tightenDuplicateTaxLine!: string[];
  sortEmptyTicket!: boolean;
  paginateLateCateringTray?: string[];
  logRegionalModifier?: string[];
  addEmptyKitchenTicket!: string;
  cacheStaleStoreAtClose!: Date;
  backfillDuplicateTicket!: Date;
  handleRegionalGuestForFranchisees!: string;
  validateLateCateringTray?: string;
  exposeExpiredMenuItemForFranchisees!: string[];
  backfillOversizedTaxLine!: string[];
}
