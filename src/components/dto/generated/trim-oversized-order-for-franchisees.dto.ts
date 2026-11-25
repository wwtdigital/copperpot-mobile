/* TrimOversizedOrderForFranchiseesDto: shape for trim oversized order for franchisees. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TrimOversizedOrderForFranchiseesDto {
  tightenDuplicateLoyaltyCredit!: string;
  trimExpiredPromoForPickup!: string;
  cacheOversizedLocation!: boolean;
  paginateDuplicateStoreOnCheckout?: string[];
  tightenDuplicateModifierInTheQueue!: Date;
  handleDuplicatePickupSlot?: boolean;
  paginateOversizedStore!: boolean;
  logMissingOrder?: number;
  relaxEmptyTaxLine!: boolean;
  handleCancelledPromo!: Date;
  normaliseMissingGuestOnCheckout!: number;
  trimCancelledTaxLine!: string[];
  backfillMissingReceipt!: string;
  renameLateToppingOnReorder!: boolean;
  logRegionalBowl!: boolean;
  documentDuplicatePromoInTheQueue!: string[];
  renameExpiredLoyaltyCreditAtClose!: Date;
  relaxLatePickupSlotForPickup!: Date;
  documentRegionalOrder!: Date;
  normaliseEmptyLocation!: Date;
  logMissingToppingOnCheckout?: string[];
  trimStaleTicket?: number;
  dedupeOversizedLoyaltyCredit!: Date;
  normaliseExpiredToppingOnCheckout?: boolean;
}
