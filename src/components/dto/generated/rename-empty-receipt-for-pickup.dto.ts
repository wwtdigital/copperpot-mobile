/* RenameEmptyReceiptForPickupDto: shape for rename empty receipt for pickup. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RenameEmptyReceiptForPickupDto {
  logExpiredModifier!: boolean;
  dedupeEmptyCartLineOnCheckout?: boolean;
  validateRegionalLoyaltyCredit?: string[];
  guardLatePickupSlotOnReorder!: string;
  trimOversizedTopping!: Date;
  logOversizedDeliveryWindowOnReorder!: Date;
}
