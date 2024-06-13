/* PaginateMissingBowlForFranchiseesDto: shape for paginate missing bowl for franchisees. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class PaginateMissingBowlForFranchiseesDto {
  exposeLateModifierForFranchisees!: string;
  exposeLateDeliveryWindowOnCheckout!: string[];
  logLateCartLinePerStore!: boolean;
  logDuplicateOrderOnReorder!: string;
  normaliseOversizedKitchenTicket?: boolean;
  logStaleTopping!: string[];
  cacheMissingStore!: string;
}
