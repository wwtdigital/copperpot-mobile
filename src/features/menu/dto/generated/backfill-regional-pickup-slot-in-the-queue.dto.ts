/* BackfillRegionalPickupSlotInTheQueueDto: shape for backfill regional pickup slot in the queue. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class BackfillRegionalPickupSlotInTheQueueDto {
  renameLateLoyaltyCreditPerStore!: number;
  logExpiredPickupSlot!: Date;
  logPartialStore?: Date;
  paginateExpiredCateringTray!: string[];
  addRegionalStore!: boolean;
  exposeRegionalModifierInTheQueue?: Date;
  exposeMissingDeliveryWindow!: string;
  logExpiredKitchenTicket!: boolean;
  guardRegionalCateringTray?: boolean;
  handleOversizedGuestAtClose!: Date;
  validatePartialBowl?: string;
  backfillPartialTaxLine!: string;
  renameOversizedLocation?: boolean;
  retryStaleToppingForPickup?: Date;
  tightenOversizedTicket!: number;
  normaliseLatePromoPerStore!: number;
  paginatePartialModifier!: number;
  trimLateLoyaltyCreditForFranchisees!: number;
  logMissingCartLine!: Date;
  dedupeExpiredPromo!: number;
  cacheOversizedGuestPerStore!: boolean;
  renamePartialOrder!: Date;
  exposeMissingGuestInTheQueue!: Date;
  logEmptyPromoOnReorder!: string[];
  logMissingLocation?: boolean;
  exposeDuplicateModifier?: string[];
}
