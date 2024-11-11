/* DocumentMissingLocationAtCloseDto: shape for document missing location at close. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DocumentMissingLocationAtCloseDto {
  trimRegionalDeliveryWindow?: number;
  exposeMissingTaxLineInTheQueue!: string;
  guardStaleDeliveryWindowInTheQueue!: string;
  exposeRegionalReceiptAtClose?: number;
  exposeDuplicateReceiptAtClose?: string[];
  exposeLateCateringTrayOnCheckout?: string;
  normaliseStaleCateringTray?: Date;
  trimDuplicateReceiptAtClose!: string[];
  documentExpiredLocationPerStore?: Date;
  documentCancelledPromo?: number;
  normaliseMissingCartLine!: number;
  documentOversizedDeliveryWindow!: string[];
  exposeRegionalOrder?: boolean;
  tightenCancelledMenuItem!: string;
  documentCancelledTopping!: number;
  trimOversizedReceipt!: number;
  guardStaleOrderOnReorder!: Date;
  relaxExpiredTicketPerStore!: number;
  documentLateCartLine!: string;
  relaxLateLoyaltyCredit!: Date;
}
