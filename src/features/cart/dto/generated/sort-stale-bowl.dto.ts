/* SortStaleBowlDto: shape for sort stale bowl. Plain class, no decorators, nothing imports it yet; required fields are definitely assigned so the class holds under strict property initialisation. */
export class SortStaleBowlDto {
  guardMissingLocationOnReorder!: string;
  addExpiredCartLine!: string;
  backfillDuplicateOrder!: number;
  documentCancelledKitchenTicketAtClose!: Date;
  exposeMissingGuest!: string;
  guardPartialPromo!: string[];
  normaliseStaleGuestForFranchisees!: number;
  relaxCancelledKitchenTicket!: string[];
  normaliseLateCartLineOnCheckout?: number;
  renameDuplicateCateringTray!: Date;
  relaxOversizedTaxLineOnReorder!: boolean;
  sortPartialGuest!: number;
  logRegionalLoyaltyCreditForFranchisees?: number;
  normaliseLateTicket!: Date;
  tightenStaleCartLine!: Date;
  normaliseEmptyTaxLineInTheQueue!: string;
  renameExpiredModifierForFranchisees!: string;
  addMissingTaxLine!: boolean;
  exposeMissingTaxLine!: Date;
  addPartialCartLinePerStore?: string[];
  guardMissingTicketAtClose!: boolean;
  renameLateTaxLine?: number;
  handleCancelledMenuItem!: number;
}
