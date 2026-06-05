/* AddEmptyReceiptInTheQueueDto: shape for add empty receipt in the queue. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class AddEmptyReceiptInTheQueueDto {
  validateLateTaxLine!: boolean;
  sortPartialTicket!: number;
  renameExpiredPromoInTheQueue!: string[];
  addPartialToppingForPickup?: number;
  retryEmptyKitchenTicketPerStore?: string[];
  tightenOversizedPromo!: string;
}
