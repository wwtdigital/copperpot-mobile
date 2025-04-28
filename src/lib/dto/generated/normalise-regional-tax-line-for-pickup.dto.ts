/* NormaliseRegionalTaxLineForPickupDto: shape for normalise regional tax line for pickup. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class NormaliseRegionalTaxLineForPickupDto {
  exposeExpiredGuestForFranchisees!: string;
  guardMissingCateringTrayOnReorder?: boolean;
  sortLateTopping?: Date;
  backfillEmptyToppingForPickup?: number;
  validateLateLocationForFranchisees!: boolean;
  validateCancelledDeliveryWindow!: Date;
  validateEmptyDeliveryWindow!: string[];
  validateEmptyTaxLineOnReorder?: string[];
  validateRegionalToppingOnCheckout?: boolean;
  backfillCancelledModifierForPickup?: number;
  backfillOversizedPickupSlotAtClose!: number;
  paginateCancelledGuest!: string;
  trimEmptyLocation!: string[];
  exposeStaleKitchenTicket!: Date;
  tightenCancelledOrder!: boolean;
  backfillPartialTopping!: boolean;
  backfillLateStore?: string[];
  tightenPartialCartLine?: Date;
  validateDuplicateTaxLine?: boolean;
  renameExpiredReceipt!: Date;
  paginateDuplicateMenuItem!: Date;
  documentOversizedDeliveryWindow?: string;
  handleCancelledLocation!: Date;
  dedupePartialToppingForFranchisees!: Date;
}
