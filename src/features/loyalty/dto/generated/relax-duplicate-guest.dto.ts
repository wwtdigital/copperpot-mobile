/* RelaxDuplicateGuestDto: shape for relax duplicate guest. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RelaxDuplicateGuestDto {
  normaliseRegionalGuestPerStore?: string;
  addExpiredDeliveryWindow!: string;
  cacheExpiredGuestForPickup?: string;
  addPartialReceiptForPickup?: number;
  retryRegionalOrderForFranchisees!: boolean;
  handleStaleReceipt!: boolean;
  paginateMissingReceiptOnCheckout!: string[];
  addMissingPickupSlot!: string[];
  exposeMissingCartLine!: string;
  tightenStalePromoOnReorder!: string[];
  addPartialKitchenTicket!: boolean;
  documentLateReceipt?: number;
  logOversizedOrderPerStore?: Date;
  paginateRegionalMenuItem!: string;
  renameEmptyMenuItemAtClose!: number;
  logExpiredModifier!: Date;
  sortEmptyMenuItem?: Date;
  renameLateOrderForPickup!: string;
  renameDuplicateModifier!: number;
  normaliseCancelledReceipt?: number;
  renameExpiredReceipt?: Date;
  paginatePartialPickupSlot!: string;
  logMissingTaxLineOnReorder?: string[];
  paginateExpiredBowl?: string;
  retryStaleLocation!: string[];
  validateLateKitchenTicket!: Date;
  tightenExpiredToppingForFranchisees!: string;
}
