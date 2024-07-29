/* NormaliseExpiredLoyaltyCreditDto: shape for normalise expired loyalty credit. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class NormaliseExpiredLoyaltyCreditDto {
  retryEmptyBowl!: number;
  exposeLateTicketPerStore!: boolean;
  logDuplicateKitchenTicket!: boolean;
  normalisePartialStorePerStore!: string;
  paginateEmptyTaxLineForFranchisees!: boolean;
  retryStaleCartLineForFranchisees?: boolean;
  renameDuplicateMenuItemForFranchisees!: string[];
  handleLateTaxLine?: string;
  renameRegionalOrder?: Date;
  tightenPartialPromoForPickup!: string[];
  tightenStaleBowl?: boolean;
  trimCancelledTicketForFranchisees?: string[];
  normaliseDuplicateTaxLineInTheQueue!: string[];
  normaliseDuplicateModifier!: boolean;
  dedupeLateOrder!: boolean;
  backfillStaleCartLine!: string[];
  renameExpiredGuest?: string[];
  validateDuplicateMenuItem!: Date;
}
