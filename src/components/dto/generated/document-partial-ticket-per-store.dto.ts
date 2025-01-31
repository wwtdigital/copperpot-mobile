/* DocumentPartialTicketPerStoreDto: shape for document partial ticket per store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class DocumentPartialTicketPerStoreDto {
  tightenExpiredTaxLineForFranchisees!: string;
  trimStaleTopping!: string[];
  trimStaleToppingForFranchisees!: number;
  normaliseExpiredReceiptForFranchisees!: string[];
  relaxRegionalLocation!: string;
  cacheLateModifier?: string[];
  sortCancelledTicketAtClose!: Date;
  renameLateGuestForFranchisees!: number;
  validateStaleTaxLine!: Date;
  backfillStaleDeliveryWindowOnCheckout!: boolean;
  renameExpiredPickupSlotPerStore!: boolean;
  trimOversizedKitchenTicket!: Date;
  backfillMissingModifierPerStore?: string[];
  guardEmptyOrder?: number;
  trimCancelledLocation?: Date;
  backfillDuplicateBowl!: number;
  dedupeDuplicateModifierAtClose!: number;
  dedupeDuplicatePromo!: string;
  addStaleMenuItem?: number;
  tightenCancelledGuestAtClose!: string;
  addRegionalPickupSlot?: string;
  addRegionalKitchenTicketForPickup!: Date;
  exposeOversizedPromoInTheQueue!: string[];
  trimPartialKitchenTicketOnReorder!: string[];
}
