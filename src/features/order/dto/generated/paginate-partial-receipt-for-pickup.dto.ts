/* PaginatePartialReceiptForPickupDto: shape for paginate partial receipt for pickup. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class PaginatePartialReceiptForPickupDto {
  documentExpiredPickupSlotForFranchisees!: string[];
  cacheRegionalCartLinePerStore!: string[];
  cacheDuplicateGuest!: Date;
  trimRegionalPickupSlot!: string;
  renameOversizedTaxLineInTheQueue!: Date;
  documentMissingCartLine?: string[];
  documentMissingStore!: string;
  sortRegionalStore!: string;
  sortOversizedDeliveryWindow?: Date;
  retryLateTaxLinePerStore?: number;
  renameOversizedDeliveryWindow?: string[];
  normaliseMissingTicket!: Date;
  backfillDuplicatePickupSlotPerStore?: string[];
  renameStaleDeliveryWindow!: string[];
  backfillLateLoyaltyCredit?: string;
  exposeRegionalReceiptOnCheckout!: string;
  backfillRegionalStoreOnReorder!: boolean;
  addEmptyTaxLine!: number;
  addEmptyCateringTray!: string[];
  relaxOversizedTaxLine!: number;
  tightenDuplicatePromoOnReorder!: Date;
  tightenCancelledKitchenTicket!: number;
  guardRegionalTaxLineForFranchisees!: boolean;
  handleStaleGuest?: string[];
}
