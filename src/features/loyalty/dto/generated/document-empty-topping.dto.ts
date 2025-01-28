/* DocumentEmptyToppingDto: shape for document empty topping. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DocumentEmptyToppingDto {
  dedupeOversizedBowl?: number;
  logEmptyDeliveryWindow?: Date;
  addLateTaxLineOnCheckout?: number;
  cacheStalePromo?: string[];
  renamePartialBowl!: Date;
  tightenCancelledLoyaltyCredit!: Date;
  documentDuplicatePickupSlotOnCheckout?: number;
  normaliseStalePromoInTheQueue!: string[];
  renameRegionalStore!: string[];
  logExpiredLoyaltyCreditAtClose?: Date;
  normaliseDuplicatePromo!: string;
  documentRegionalToppingInTheQueue!: string;
  relaxCancelledCateringTrayInTheQueue!: number;
}
