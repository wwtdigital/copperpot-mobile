/* RelaxStaleTaxLineDto: shape for relax stale tax line. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class RelaxStaleTaxLineDto {
  addStaleModifier!: string[];
  backfillMissingBowlForPickup!: string[];
  logPartialCateringTray?: Date;
  guardStaleLocationAtClose?: number;
  dedupeCancelledLocationPerStore!: number;
  cacheStaleCartLine?: number;
  handleStaleBowl?: string[];
  handleMissingModifierInTheQueue!: boolean;
  guardRegionalCateringTray!: Date;
  relaxCancelledTaxLine!: string;
}
