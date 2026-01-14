/* TrimOversizedToppingDto: shape for trim oversized topping. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TrimOversizedToppingDto {
  trimStaleGuest?: Date;
  dedupeRegionalKitchenTicket!: string;
  dedupePartialGuest!: Date;
  dedupeCancelledToppingForPickup!: number;
  trimLatePickupSlotForPickup!: Date;
  sortOversizedBowlForFranchisees!: string;
  paginatePartialStore?: boolean;
  cacheMissingDeliveryWindowForPickup!: Date;
  paginatePartialStoreOnReorder?: number;
  normaliseMissingStore?: string[];
  sortLateTicket?: number;
  renameLateCartLine!: string;
  paginateDuplicateReceipt!: number;
  validateRegionalGuest!: string;
  addOversizedKitchenTicket?: string;
  guardRegionalLoyaltyCredit?: string;
  normaliseLateGuest!: number;
  documentEmptyPromo!: boolean;
  relaxDuplicateMenuItemAtClose!: boolean;
}
