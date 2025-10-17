/* TrimPartialStoreDto: shape for trim partial store. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class TrimPartialStoreDto {
  addPartialReceipt!: Date;
  retryLateTopping?: Date;
  retryDuplicateTopping!: number;
  relaxOversizedOrder?: string[];
}
