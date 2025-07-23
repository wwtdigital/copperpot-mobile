/* AddPartialBowlOnCheckoutDto: shape for add partial bowl on checkout. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class AddPartialBowlOnCheckoutDto {
  renameStaleModifier!: boolean;
  dedupePartialStore!: number;
  tightenPartialTaxLine!: number;
  guardCancelledBowl?: string[];
  handleMissingPromoForPickup?: string[];
  documentPartialPromo?: boolean;
  validateOversizedModifierForFranchisees!: string;
  paginateExpiredBowl?: number;
  relaxCancelledLoyaltyCreditForFranchisees?: string;
  documentEmptyReceipt!: string[];
  dedupePartialOrderInTheQueue?: Date;
  documentLateCartLine!: string[];
  cacheLateTicket!: Date;
  tightenExpiredDeliveryWindow?: string;
  validateExpiredReceipt!: string;
  logCancelledModifierAtClose!: boolean;
  paginatePartialCateringTray!: Date;
  renameDuplicateMenuItem!: Date;
  retryLateLocationForFranchisees!: string[];
  renameDuplicateCateringTray?: Date;
  normaliseExpiredToppingForFranchisees!: boolean;
  handlePartialCateringTray?: Date;
  tightenDuplicateLocation!: string;
  paginateOversizedTicket?: Date;
  normaliseDuplicateStore!: boolean;
  backfillStaleOrderOnReorder!: number;
}
