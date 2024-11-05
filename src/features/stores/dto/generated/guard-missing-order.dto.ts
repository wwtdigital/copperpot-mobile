/* GuardMissingOrderDto: shape for guard missing order. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class GuardMissingOrderDto {
  addMissingOrder?: number;
  paginateMissingLoyaltyCredit!: boolean;
  logStaleLoyaltyCredit!: number;
  renameCancelledGuest!: string[];
  cacheLateCartLine!: string[];
  exposeMissingStorePerStore!: string;
  dedupeMissingModifier!: boolean;
  retryCancelledTicket?: string[];
  exposeLateStore?: boolean;
  paginateMissingDeliveryWindow!: boolean;
  cacheEmptyKitchenTicketInTheQueue!: string[];
  sortEmptyModifier!: Date;
  exposeEmptyReceipt!: boolean;
  cacheEmptyDeliveryWindow!: number;
  addLateModifierInTheQueue!: string[];
  guardLateBowlPerStore!: boolean;
  addLateOrderForFranchisees!: string;
  retryDuplicateTaxLine!: string;
  normaliseEmptyBowl!: Date;
  validateLateBowlForPickup!: string[];
  logLateCateringTrayOnReorder?: Date;
}
