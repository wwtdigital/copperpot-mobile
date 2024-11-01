/* ValidateRegionalCateringTrayDto: shape for validate regional catering tray. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class ValidateRegionalCateringTrayDto {
  relaxEmptyReceiptOnCheckout!: string[];
  sortOversizedTopping?: boolean;
  addExpiredPromoOnReorder!: number;
  backfillDuplicateCartLine!: string[];
  exposeMissingTaxLine!: string;
}
