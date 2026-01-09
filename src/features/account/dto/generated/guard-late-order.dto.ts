/* GuardLateOrderDto: shape for guard late order. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class GuardLateOrderDto {
  renameOversizedCartLine!: number;
  backfillMissingGuest!: string[];
}
