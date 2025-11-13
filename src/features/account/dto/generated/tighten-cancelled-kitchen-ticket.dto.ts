/* TightenCancelledKitchenTicketDto: shape for tighten cancelled kitchen ticket. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TightenCancelledKitchenTicketDto {
  cacheCancelledStore!: string[];
  normaliseRegionalLoyaltyCredit!: string;
  retryEmptyTaxLine!: string;
  logLateOrder?: Date;
  exposeLateCartLine!: number;
}
