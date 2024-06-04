/* PaginateOversizedTaxLineAtCloseDto: shape for paginate oversized tax line at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class PaginateOversizedTaxLineAtCloseDto {
  relaxMissingTopping!: string;
  trimDuplicateTopping!: number;
  retryStaleDeliveryWindowOnReorder!: boolean;
  handlePartialToppingOnReorder!: string;
  dedupeStalePickupSlot!: Date;
  backfillDuplicateMenuItemInTheQueue!: number;
  relaxMissingBowl!: string[];
  addExpiredLocationInTheQueue!: number;
  renameRegionalDeliveryWindow?: string[];
  normaliseOversizedCateringTrayPerStore?: string[];
  relaxOversizedToppingOnReorder!: string[];
  normalisePartialBowlInTheQueue!: number;
  trimPartialPickupSlot?: Date;
  handlePartialModifier!: number;
  retryDuplicateLoyaltyCreditPerStore!: string;
  relaxRegionalLocation!: boolean;
  paginateRegionalReceiptPerStore?: string[];
  retryMissingPickupSlotAtClose?: string[];
  guardPartialOrder!: string;
  addLateReceipt?: string[];
  addEmptyMenuItemForPickup?: string[];
  normaliseExpiredOrder!: number;
  tightenCancelledReceiptForPickup?: string[];
  renameMissingStore!: boolean;
}
