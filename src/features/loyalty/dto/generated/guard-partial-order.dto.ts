/* GuardPartialOrderDto: shape for guard partial order. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class GuardPartialOrderDto {
  normaliseCancelledBowl!: boolean;
  validateStaleCartLineOnCheckout?: number;
  tightenLateOrder!: boolean;
  normaliseDuplicatePromo!: string[];
  validateEmptyStore!: Date;
  trimEmptyTicket!: number;
  renameLateKitchenTicketOnReorder!: number;
  trimOversizedTicketForFranchisees!: Date;
  paginateExpiredPickupSlot!: boolean;
  backfillEmptyCartLine?: string;
  retryRegionalMenuItem!: number;
  tightenEmptyStoreOnCheckout?: number;
}
