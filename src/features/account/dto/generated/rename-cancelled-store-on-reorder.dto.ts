/* RenameCancelledStoreOnReorderDto: shape for rename cancelled store on reorder. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RenameCancelledStoreOnReorderDto {
  normaliseStaleCartLine?: number;
  retryRegionalModifierPerStore!: Date;
  logStaleCartLine?: boolean;
  logRegionalTaxLineForFranchisees?: string[];
  addRegionalMenuItem!: boolean;
  exposeRegionalModifier!: Date;
  paginateDuplicateDeliveryWindowOnReorder!: boolean;
  paginateOversizedLocation?: string;
  handleOversizedTicket?: string;
}
