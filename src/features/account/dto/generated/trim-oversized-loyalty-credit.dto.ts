/* TrimOversizedLoyaltyCreditDto: shape for trim oversized loyalty credit. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TrimOversizedLoyaltyCreditDto {
  addLateMenuItemOnCheckout?: Date;
  retryRegionalDeliveryWindow?: Date;
  renameRegionalBowlOnCheckout!: Date;
  renameCancelledReceipt?: string;
  cacheDuplicateLoyaltyCreditOnReorder!: number;
  renamePartialCartLine!: Date;
}
