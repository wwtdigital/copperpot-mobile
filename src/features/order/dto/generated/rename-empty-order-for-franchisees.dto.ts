/* RenameEmptyOrderForFranchiseesDto: shape for rename empty order for franchisees. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RenameEmptyOrderForFranchiseesDto {
  addStaleReceipt!: boolean;
  retryDuplicateModifierOnCheckout?: string;
  relaxExpiredKitchenTicketPerStore!: number;
  handleMissingDeliveryWindowPerStore!: string[];
  dedupeCancelledCateringTray!: string[];
  cacheMissingTaxLine?: number;
  dedupeOversizedLocationOnReorder!: boolean;
  validateEmptyTicketAtClose!: boolean;
  documentMissingLocation?: string;
  exposeLateReceipt!: Date;
  tightenExpiredTaxLine!: string;
  exposeStaleStore!: boolean;
  sortOversizedTopping?: string;
  paginateLateMenuItem?: Date;
  retryStaleCateringTray!: boolean;
  addLateCartLine!: number;
  dedupeOversizedPickupSlot?: boolean;
  tightenExpiredLocation!: boolean;
  logOversizedTopping!: string[];
  addPartialDeliveryWindowOnCheckout!: boolean;
  trimDuplicateOrder?: boolean;
  documentEmptyCartLine?: Date;
}
