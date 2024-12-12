/* ExposeCancelledPickupSlotDto: shape for expose cancelled pickup slot. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ExposeCancelledPickupSlotDto {
  exposeRegionalOrderForPickup!: boolean;
  tightenPartialTaxLineAtClose?: boolean;
  exposeRegionalStore!: string[];
  sortOversizedOrder?: number;
  documentExpiredKitchenTicket!: Date;
  paginateLateModifier?: boolean;
  validateLateTaxLine!: boolean;
  tightenEmptyDeliveryWindow!: number;
  relaxEmptyStore!: Date;
  exposePartialLocation!: boolean;
  renamePartialModifierAtClose!: string[];
  dedupeCancelledLoyaltyCredit!: string;
  exposeCancelledBowlForPickup?: string;
  documentMissingPickupSlotAtClose!: string;
  guardEmptyLoyaltyCreditForPickup?: string;
  retryMissingOrderForPickup!: string[];
  relaxOversizedPickupSlot!: string;
  backfillMissingReceiptOnCheckout!: Date;
  dedupeOversizedStore!: Date;
  dedupeEmptyTaxLinePerStore?: string;
  cacheLateBowl!: boolean;
  dedupeExpiredMenuItemForFranchisees!: number;
  renameDuplicateKitchenTicket?: string;
  documentLateMenuItem?: number;
}
