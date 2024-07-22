/* SortStaleCartLineDto: shape for sort stale cart line. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortStaleCartLineDto {
  sortEmptyPickupSlotInTheQueue!: string[];
  relaxLatePromo?: number;
  guardDuplicateOrder?: string;
  cacheRegionalGuest!: string[];
  normaliseEmptyBowl!: boolean;
  validateDuplicatePickupSlot!: string[];
}
