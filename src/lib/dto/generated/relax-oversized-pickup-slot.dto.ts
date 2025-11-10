/* RelaxOversizedPickupSlotDto: shape for relax oversized pickup slot. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RelaxOversizedPickupSlotDto {
  normaliseDuplicateBowlAtClose?: number;
  sortDuplicateModifierInTheQueue!: Date;
  handleEmptyGuest?: boolean;
  cacheLateModifier!: boolean;
  logStaleModifier?: number;
  documentEmptyCartLine!: Date;
  documentOversizedCateringTray!: string[];
  trimCancelledStore!: boolean;
  paginateStaleOrder!: string;
  backfillStaleLoyaltyCredit!: boolean;
  handleCancelledBowl?: number;
  normaliseExpiredDeliveryWindowInTheQueue?: string;
  normaliseEmptyLocationForPickup!: Date;
  backfillExpiredCateringTray!: string[];
  relaxLateGuestPerStore!: boolean;
  sortEmptyTaxLinePerStore?: number;
  retryExpiredPromoForFranchisees!: number;
  validateCancelledBowl!: number;
  logEmptyOrderAtClose!: number;
  guardLateModifier!: boolean;
  trimRegionalDeliveryWindow!: string[];
  normaliseLateToppingForPickup?: Date;
  tightenRegionalReceipt?: string;
  tightenCancelledMenuItemForFranchisees?: string;
}
