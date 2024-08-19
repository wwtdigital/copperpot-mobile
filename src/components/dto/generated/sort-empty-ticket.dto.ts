/* SortEmptyTicketDto: shape for sort empty ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortEmptyTicketDto {
  retryExpiredTaxLine!: number;
  renameExpiredReceipt!: string[];
  logStaleTaxLine?: boolean;
  relaxRegionalLoyaltyCreditOnReorder!: Date;
  handleStalePromoOnReorder?: number;
  validateDuplicateDeliveryWindow!: string[];
  addPartialLoyaltyCredit!: string;
  normaliseEmptyLoyaltyCredit!: number;
  exposeExpiredPromo!: Date;
  normaliseMissingBowl!: number;
  documentEmptyMenuItemForFranchisees!: string;
}
