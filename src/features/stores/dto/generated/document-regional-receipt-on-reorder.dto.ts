/* DocumentRegionalReceiptOnReorderDto: shape for document regional receipt on reorder. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DocumentRegionalReceiptOnReorderDto {
  exposeOversizedPickupSlot!: string[];
  logLateTaxLine!: number;
  paginateRegionalLoyaltyCredit!: number;
  addCancelledPromo!: string;
  relaxRegionalTaxLineAtClose?: string;
  normaliseEmptyReceiptAtClose!: string;
  tightenEmptyLocationInTheQueue!: Date;
  addMissingStore!: string[];
  documentDuplicatePickupSlot!: string[];
  trimCancelledOrder!: boolean;
  trimOversizedModifier?: string[];
}
