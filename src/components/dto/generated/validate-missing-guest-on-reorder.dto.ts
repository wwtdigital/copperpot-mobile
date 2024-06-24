/* ValidateMissingGuestOnReorderDto: shape for validate missing guest on reorder. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ValidateMissingGuestOnReorderDto {
  backfillRegionalLocationAtClose!: Date;
  guardLateOrderForFranchisees?: string[];
  addPartialDeliveryWindowForFranchisees?: boolean;
  exposeOversizedPromo!: string;
  documentDuplicateBowl!: boolean;
  trimEmptyMenuItem!: Date;
  dedupeLateCateringTrayAtClose!: Date;
  addExpiredPickupSlotOnCheckout?: string[];
  relaxPartialReceipt?: Date;
  relaxCancelledOrder!: Date;
  trimDuplicateStore!: boolean;
  relaxRegionalPromo!: string;
  documentOversizedModifier!: Date;
  exposeRegionalReceipt!: Date;
  exposeStaleToppingOnCheckout!: string[];
  normaliseCancelledTaxLine?: string;
  paginateCancelledModifier!: boolean;
  renameMissingOrder?: Date;
  cacheMissingTicket!: number;
  documentRegionalCartLine?: string;
  cachePartialTicket!: Date;
  logRegionalPickupSlotOnCheckout!: string[];
  paginateRegionalMenuItemForFranchisees!: string[];
  validateCancelledLoyaltyCredit!: number;
}
