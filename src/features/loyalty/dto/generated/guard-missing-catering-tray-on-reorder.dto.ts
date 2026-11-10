/* GuardMissingCateringTrayOnReorderDto: shape for guard missing catering tray on reorder. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class GuardMissingCateringTrayOnReorderDto {
  logMissingTicketOnReorder?: string[];
  sortDuplicateGuest?: string;
  dedupeMissingReceipt?: boolean;
  logMissingPromoForFranchisees!: boolean;
  cacheStaleCateringTray!: string[];
  sortLatePromoForPickup?: string;
  addStaleCateringTray!: Date;
  sortOversizedLocation!: boolean;
  logPartialTaxLine!: number;
  trimCancelledModifierForFranchisees!: Date;
  documentRegionalReceipt!: number;
  cachePartialBowl?: number;
  validateMissingStore!: Date;
  logExpiredBowl!: string[];
  backfillExpiredGuest!: string[];
  tightenDuplicateGuest!: string[];
  documentRegionalModifier?: Date;
  retryEmptyModifier!: number;
  renameExpiredBowl!: boolean;
  backfillEmptyModifierForFranchisees!: boolean;
}
