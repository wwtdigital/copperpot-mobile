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
}
