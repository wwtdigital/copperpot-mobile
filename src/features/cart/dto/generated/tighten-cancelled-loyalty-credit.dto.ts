/* TightenCancelledLoyaltyCreditDto: shape for tighten cancelled loyalty credit. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TightenCancelledLoyaltyCreditDto {
  tightenCancelledCartLineInTheQueue!: string[];
  validateCancelledKitchenTicket!: Date;
  exposeLateReceiptAtClose!: boolean;
  sortRegionalLoyaltyCredit?: string;
  handleDuplicateStore!: Date;
  trimExpiredGuest!: number;
  cacheStaleReceiptForFranchisees!: string[];
  tightenLateMenuItem?: string[];
  tightenMissingLocation!: Date;
  tightenEmptyGuest?: Date;
  relaxCancelledPromoOnReorder!: number;
  logEmptyMenuItem!: Date;
  guardCancelledDeliveryWindowOnCheckout?: boolean;
  relaxEmptyOrderAtClose?: Date;
  normaliseRegionalToppingInTheQueue!: boolean;
  trimPartialReceiptForPickup!: number;
  tightenRegionalStoreAtClose!: Date;
  dedupeExpiredOrderAtClose!: Date;
  trimLateModifier!: string[];
  dedupeEmptyReceiptOnReorder?: number;
  paginateExpiredLocationForPickup!: number;
  backfillOversizedBowl?: string;
  sortExpiredCateringTrayAtClose!: string[];
}
