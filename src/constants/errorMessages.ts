export const ERROR_MESSAGES = {
  paginationMaxSize: (limit: number): string =>
    `The page size cannot be bigger then ${limit}`,
  notFound: 'Item does not exist',
  unknown: 'Unknown error',
  deleteEngagementWithReviewSheetsNotAllowed:
    'It is not possible to delete an engagement which has review sheets. Please delete all review sheets first.',
  duplicateTransaction: `There is already a transaction with the same data, please ensure this is not a duplicate.\n
  In case you need to add identical transactions change the engagement settings to ignore duplicate transactions.`,
  duplicateEngagement: (vatNumber: string): string =>
    `There is a already an engagement with VAT number '${vatNumber}'.`,
  duplicateAttachment: (filename: string): string =>
    `There is already an attachment with this name '${filename}'.`,
  duplicateUser: (emailOrClientid: string): string =>
    `The user '${emailOrClientid}' already exists.`,
  duplicateTenantUser: `The user already exists.`,
  duplicateAslEntry: (vatNumber: string): string =>
    `There is already an ASL entry with VAT number '${vatNumber}'.`,
  duplicateItem: (nonUniqueValue: string): string =>
    `There is already an item in the database which uses following value: '${nonUniqueValue}'.`,
  cannotEditTransactions:
    'It is only allowed to add or edit transactions when the review sheet is in created or rejected status',
  cannotEditAslEntries:
    'It is only allowed to add or edit ASL entries when the review sheet is in created or rejected status',
  noTransactionWithGuid: (transactionGuid: string): string =>
    `There is no transaction with GUID '${transactionGuid}'`,
  creatingDeliverablesNotAllowed:
    'It is not allowed to create deliverables, please use the dedicated review sheet mutation for this',
  deletingDeliverablesNotAllowed:
    'It is not allowed to delete deliverables, please use the dedicated review sheet mutation for this',
  reviewSheetStatusShouldBeLocked: 'Review sheet status should be Locked',
  deliverableAlreadySubmitted: `Deliverable is already Submitted`,
  deliverableStatusShouldBeSubmitted: `Deliverable status should be Submitted`,
  deliverableReceiptAlreadyExists: 'There is already an existing receipt',

  cannotDeleteDeliverables:
    'It is only allowed to delete deliverables when review sheet status is created, prepared or rejected',
  cannotUpdateLogicalChecksReport:
    'It is not allowed to updated the logical checks report of a review sheet which is in the Locked status',
  cannotDeleteLockedReviewSheet:
    'It is not allowed to delete locked review sheets',
  cannotDeleteReviewSheet:
    'It is not allowed to delete review sheets which are not in the created or rejected status',
  cannotDeleteReviewSheetWithSubmittedDeliverables:
    'It is not allowed to delete review sheets with submitted deliverables',
  cannotUploadDeliverable:
    'It is not allowed to upload deliverables to a review sheet which is Locked',
  cannotOverwriteSubmittedDeliverableWhenLocked:
    'It is not allowed to upload deliverables when a review sheet is Locked and the deliverable is Submitted',
  maxTransactionsUploadLimitExceeded: (max: number): string =>
    `Maximum ${max} can be uploaded per type (${max} AP, ${max} AR)`,
  maxAslEntriesUploadLimitExceeded: (max: number): string =>
    `Maximum ${max} can be uploaded`,
  reviewSheetForPeriodAlreadyExists: `There is already a review sheet for this period`,
  reviewSheetForPeriodAlreadyExistsNilAslDecember: `There is already an existing ASL declaration. As part of the december VAT return declaration a nihil ASL has been reported`,
  vatNumberDoesNotMatch: (vatNumber: string): string =>
    `VAT number from the XML file (${vatNumber}) does not match with the engagement VAT number`,
  periodDoesNotMatch: (
    periodMonth: number,
    periodYear: number,
    reviewSheetMonth: number,
    reviewSheetYear: number,
  ): string =>
    `Period from the XML file (${periodMonth}-${periodYear}) does not match with the review sheet period (${reviewSheetMonth}-${reviewSheetYear})`,
  invalidXml: `Invalid xml file`,
  saveConflict:
    'Somebody else made a change in the mean time. Please refresh the browser and apply your updates again.',
  workflowActionNotAllowed: (status: string): string =>
    `Review sheet is already in ${status} status`,
  clientConfirmationNotRequired:
    'Client confirmation should be received only when filing is done by EY after client approval',
  cannotRequestJustification:
    'It is not allowed to request justifications when review sheet is not in locked status',
  cannotResolveJustification:
    'It is not allowed to resolve justifications when review sheet is not in locked status',
  justificationsAlreadyResolved:
    'The justification results are already provided',
  reviewSheetAlreadyCreated: 'Review sheet is already created',
  cannotRestartCompliancePreparation:
    'It is only allowed to restart the compliance preparation when the review sheet is in created or rejected status',
  cannotRestartCompliancePreparationDueToSubmittedDeliverables:
    'It is not allowed to restart the compliance preparation when there are deliverables which are already submitted',
  cannotEditRequestRefundManualOverwrite:
    'It is only allowed to change the Refund Options when the review sheet is in created or rejected status',
  cannotEditVatBoxAmountCorrections:
    'It is only allowed to change VAT Corretions when the review sheet is in created or rejected status',
  cannotEditIsNilAsl:
    'It is only allowed to change Nil ASL when the review sheet is in created or rejected status',
  cannotEditTotalSalesOrPurchases:
    'It is only allowed to change the total sales and total purchases when the review sheet is in created or rejected status',
  userIsAlreadRegistered: 'User is already registered',
  deleteFailed: 'There was an issue with deleting the data, please try again',
  cannotSetSystemFields:
    'It is not allowed to set system fields (Created, Modified, AuthorID, EditorID, GUID)',
  incorrectPartner: 'You are not the assigned partner for this engagement',
  clientHandlerPermissionMissing: 'You do not have client handler permissions',
  executivePermissionMissing: 'You do not have executive permissions',
  rtfPermissionMissing: 'You do not have RTF permissions',
  xmlUploadPermissionMissing: 'You do not have XML Upload permissions',
  executiveOrPartnerPermissionMissing:
    'You do not have executive or partner permissions',
  cannotMakeCurrentUserInactive: 'It is not possible to make yourself inactive',
  unsupportedMimeType: (mimeType: string): string =>
    `It is not allowed to upload files of type '${mimeType}'. Supported types are: Word, Excel, PowerPoint, Outlook, PDF, jpg, gif, png, xml and json`,
  invalidJsonFile: (mimeType: string): string =>
    `It is not allowed to upload files of type '${mimeType}'. Supported types are: json`,
  invalidMimeType: (mimeType: string, allowedMimeTypes: string[]): string =>
    `It is not allowed to upload files of type '${mimeType}'. Supported types are: ${allowedMimeTypes.join(
      ', ',
    )}`,
  cannotRemoveYourselfFromTenant: "You can't remove yourself from a tenant",
  cannotUploadAslPreprationSummary:
    'It is not allowed to upload an ASL Preparation summary to a review sheet which is in the Locked status',
  noAslReviewSheet: 'The review sheet should be of type ASL',
  failedToReadCertificate:
    'Failed to read certificate, please ensure that the password is correct',
  engagementExecutiveAndOrPartnerNotAssigned:
    'There is no executive and/or partner assigned to the engagement. In order to proceed both roles need to be assigned first.',
  unableToAddManuallyCreatedDeliverables:
    'It is not possible to add manually created deliverables to a review sheet which is created using the regular compliance preparation flow.',
  xmlUploadDisabled: 'XML upload is disabled by the administrator.',
  xmlUploadPartnerMissing:
    'Unable to upload xml file, engagement has no partner.',
  xmlUploadExecutiveMissing:
    'Unable to upload xml file, engagement has no executive.',
  exactOnlineDisabled: 'Exact Online connection is not configured.',
  exactOnlineUnableToAuthenticate:
    'Exact Online connection cannot be established.',
  exactOnlineNoFinancialPeriods: 'No financial periods could be found.',
  notAnAslReviewSheet: `Review Sheet is not an ASL declaration`,
  cannotUpdateReviewSheetPeriodicity:
    'It is not allowed to update periodicity for a review sheet with submitted deliverables',
  noVatOrEslDeclarationFound:
    'It is not allowed to update periodicity for a review sheet with no VAT or ESL xml file',
  noDeliverablesFound:
    'There are no xml deliverables found for this review sheet',
  cannotUpdateReviewSheetXml:
    'It is not allowed to update submitted deliverables',
  cannotAddCommentToDeletedReviewSheet:
    'It is not possible to add a comment to review sheet that is already deleted.',
  foreignKeyConstraintFailed: (tableName: string): string =>
    `It is not possible to add an item, the parent ${tableName} does not exist.`,
  silverfinDisabled: 'Silverfin connection is not configured.',
  noSilverfinCompanyFound: 'Company could not be found in Silverfin',
  noSilverfinPeriodFound: 'Period could not be found in Silverfin',
  engagementNotFound: (vatNumber: string): string =>
    `No engagement with VAT number ${vatNumber} could be found in VAT@Work`,
  useCompliancePreparationToCreateNilReturn: (periodEndMonth: Date): string =>
    `Use the VAT Return / ESL Preparation wizard to create a Nil Return (period: ${periodEndMonth.toJSON()}) `,
  noDeclarationFoundInXml: (vatNumber: string): string =>
    `No declaration could be found for VAT number ${vatNumber} in the XML file`,
};
