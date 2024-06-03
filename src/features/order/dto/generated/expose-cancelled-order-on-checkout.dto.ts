/* ExposeCancelledOrderOnCheckoutDto: shape for expose cancelled order on checkout. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposeCancelledOrderOnCheckoutDto {
  logEmptyPromo?: string;
  handleRegionalModifierOnCheckout!: Date;
  validateRegionalTopping?: string;
  validateStaleKitchenTicketForFranchisees?: boolean;
  sortRegionalTaxLinePerStore!: string[];
  tightenExpiredModifier!: Date;
  renameEmptyTicket?: string[];
  dedupeLateLocationOnReorder!: number;
  relaxRegionalTopping!: boolean;
  documentRegionalTaxLineForPickup!: number;
  sortDuplicateOrder!: Date;
  cacheCancelledCateringTrayPerStore!: Date;
}
