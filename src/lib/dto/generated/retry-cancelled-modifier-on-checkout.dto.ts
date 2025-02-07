/* RetryCancelledModifierOnCheckoutDto: shape for retry cancelled modifier on checkout. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RetryCancelledModifierOnCheckoutDto {
  sortDuplicateKitchenTicketOnReorder!: Date;
  guardEmptyOrderPerStore!: Date;
  validateEmptyLocation!: Date;
  dedupeMissingStore?: boolean;
  sortLateMenuItem!: string[];
  relaxPartialCartLineInTheQueue!: string;
  exposeLateModifierAtClose?: Date;
  backfillPartialBowlOnCheckout!: boolean;
  handleEmptyModifierOnCheckout!: string;
  paginatePartialGuest?: string[];
  renamePartialTopping?: boolean;
  relaxMissingDeliveryWindow!: string[];
  normaliseCancelledCartLine!: string[];
  renameRegionalOrderForPickup!: number;
  renameEmptyMenuItemAtClose!: boolean;
  documentOversizedPromo?: boolean;
  validateRegionalBowl?: Date;
  documentCancelledTicket?: Date;
  dedupeMissingLocationOnCheckout!: number;
  tightenDuplicateDeliveryWindowForFranchisees!: boolean;
  logDuplicateModifierForFranchisees!: boolean;
  renameStaleModifier?: Date;
  backfillExpiredMenuItem?: number;
  relaxMissingTicket!: number;
  paginateExpiredLoyaltyCredit?: string[];
  exposeCancelledLocationAtClose?: string;
  backfillMissingBowl?: boolean;
  documentOversizedDeliveryWindowForPickup!: number;
  handleLateDeliveryWindow!: boolean;
  dedupeDuplicateDeliveryWindowForPickup?: number;
  relaxOversizedPickupSlot!: string;
  backfillDuplicateStore!: number;
  addEmptyOrderPerStore!: number;
  exposeLateLocationOnCheckout!: Date;
}
