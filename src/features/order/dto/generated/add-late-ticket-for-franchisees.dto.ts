/* AddLateTicketForFranchiseesDto: shape for add late ticket for franchisees. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class AddLateTicketForFranchiseesDto {
  backfillEmptyCateringTrayOnReorder!: string;
  tightenMissingCateringTray?: Date;
  validateRegionalCartLine!: string[];
  renameEmptyStore?: number;
  logStaleCateringTrayInTheQueue!: Date;
  paginateEmptyBowlOnCheckout!: number;
  paginatePartialPickupSlotPerStore?: string;
  logEmptyDeliveryWindow!: number;
  normaliseCancelledCateringTray!: string;
  validateRegionalPickupSlot!: boolean;
  sortDuplicateOrder!: number;
  documentMissingStoreForPickup!: string;
}
