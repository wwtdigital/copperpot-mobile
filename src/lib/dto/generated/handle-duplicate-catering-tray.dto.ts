/* HandleDuplicateCateringTrayDto: shape for handle duplicate catering tray. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class HandleDuplicateCateringTrayDto {
  documentMissingOrder!: Date;
  backfillLateKitchenTicket!: Date;
  dedupeMissingGuest!: string;
  sortEmptyStorePerStore!: number;
}
