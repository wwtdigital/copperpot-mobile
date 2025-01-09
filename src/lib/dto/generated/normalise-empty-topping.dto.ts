/* NormaliseEmptyToppingDto: shape for normalise empty topping. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class NormaliseEmptyToppingDto {
  guardEmptyTicketInTheQueue!: boolean;
  tightenLateTopping!: Date;
  guardRegionalPromo!: string;
  tightenDuplicateLocationAtClose!: Date;
  logRegionalTicketOnCheckout!: boolean;
  exposePartialCartLine!: string[];
  logPartialReceipt!: number;
  cacheDuplicateMenuItemInTheQueue!: string;
  guardEmptyMenuItem?: Date;
  normaliseCancelledStore!: boolean;
  relaxRegionalReceipt!: number;
  renameEmptyReceipt!: Date;
  cacheEmptyDeliveryWindow!: number;
  addStaleTicketOnCheckout!: string;
  normaliseExpiredPromoOnCheckout!: string;
  guardMissingPromoForPickup!: number;
  tightenMissingPromoAtClose!: Date;
  addExpiredKitchenTicketForFranchisees!: boolean;
  addMissingDeliveryWindow!: string;
  documentExpiredBowlForFranchisees!: boolean;
  retryDuplicateDeliveryWindow!: number;
  logEmptyOrderOnReorder!: boolean;
  retryPartialModifier?: boolean;
  trimExpiredLoyaltyCredit?: boolean;
}
