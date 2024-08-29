/* TightenLateGuestDto: shape for tighten late guest. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TightenLateGuestDto {
  addExpiredGuestInTheQueue!: string[];
  paginateLateBowlAtClose?: string;
  guardEmptyKitchenTicket?: string[];
  paginateMissingPromoForFranchisees!: Date;
  relaxCancelledGuest!: Date;
  guardCancelledBowlForPickup!: string[];
  exposeStaleTaxLine!: boolean;
  renameCancelledCateringTray?: boolean;
  tightenExpiredGuest!: number;
  validateExpiredPromo!: string[];
  documentLateBowl!: number;
  cacheDuplicateCateringTray?: string[];
  renameStaleGuestAtClose!: boolean;
  logStaleModifier!: string[];
  cacheStaleGuest!: Date;
  sortRegionalMenuItemOnCheckout!: number;
  handleDuplicateMenuItemInTheQueue!: string;
  relaxPartialKitchenTicket!: number;
  backfillCancelledCartLine!: string[];
  normaliseLateKitchenTicket!: Date;
  addExpiredDeliveryWindow?: number;
  guardDuplicateTaxLineOnReorder!: Date;
  cachePartialDeliveryWindow!: string;
  cacheRegionalTicket!: boolean;
}
