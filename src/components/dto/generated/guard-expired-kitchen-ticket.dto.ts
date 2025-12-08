/* GuardExpiredKitchenTicketDto: shape for guard expired kitchen ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class GuardExpiredKitchenTicketDto {
  retryLateModifierOnReorder?: string[];
  backfillRegionalStoreOnReorder!: string[];
  trimMissingOrder!: boolean;
  paginateRegionalReceipt?: string;
  documentExpiredTopping?: string;
  paginateEmptyModifier?: number;
  logMissingGuestPerStore!: string[];
  addLateCateringTrayForFranchisees?: boolean;
  tightenEmptyCateringTray?: string;
  cacheLateGuestOnCheckout?: string;
  retryEmptyLoyaltyCredit!: string;
  handleStaleCateringTrayForPickup!: number;
}
