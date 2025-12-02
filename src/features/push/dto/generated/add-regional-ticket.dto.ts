/* AddRegionalTicketDto: shape for add regional ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class AddRegionalTicketDto {
  cacheEmptyMenuItem?: string[];
  dedupeExpiredKitchenTicket!: string[];
  documentCancelledTopping?: Date;
  relaxEmptyModifierForFranchisees?: string[];
  trimExpiredModifierOnCheckout!: boolean;
  exposeStaleStore!: string[];
  normalisePartialOrderInTheQueue?: string;
  tightenEmptyReceiptForFranchisees!: Date;
  validateOversizedMenuItem?: number;
  renameDuplicateReceipt!: string[];
  relaxCancelledLocationForPickup!: string[];
  paginateMissingBowlForPickup!: boolean;
  validatePartialOrder?: Date;
  exposeRegionalModifier!: Date;
  cacheCancelledPickupSlotPerStore!: number;
  trimExpiredLoyaltyCredit?: Date;
  tightenPartialTicket!: string;
  exposeMissingToppingInTheQueue!: boolean;
  documentRegionalDeliveryWindow?: boolean;
}
