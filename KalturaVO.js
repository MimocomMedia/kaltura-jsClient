/**
 */
function KalturaSearchItem(){
}
KalturaSearchItem.inheritsFrom (KalturaObjectBase);


/**
 * @param	type	int		.
 * @param	items	array		.
 */
function KalturaSearchOperator(){
	this.type = null;
	this.items = null;
}
KalturaSearchOperator.inheritsFrom (KalturaSearchItem);


/**
 * @param	metadataProfileId	int		.
 */
function KalturaMetadataSearchItem(){
	this.metadataProfileId = null;
}
KalturaMetadataSearchItem.inheritsFrom (KalturaSearchOperator);


/**
 * @param	noDistributionProfiles	bool		.
 * @param	distributionProfileId	int		.
 * @param	distributionSunStatus	int		.
 * @param	entryDistributionFlag	int		.
 * @param	entryDistributionStatus	int		.
 * @param	hasEntryDistributionValidationErrors	bool		.
 * @param	entryDistributionValidationErrors	string		Comma seperated validation error types.
 */
function KalturaContentDistributionSearchItem(){
	this.noDistributionProfiles = null;
	this.distributionProfileId = null;
	this.distributionSunStatus = null;
	this.entryDistributionFlag = null;
	this.entryDistributionStatus = null;
	this.hasEntryDistributionValidationErrors = null;
	this.entryDistributionValidationErrors = null;
}
KalturaContentDistributionSearchItem.inheritsFrom (KalturaSearchItem);


/**
 */
function KalturaAuditTrailInfo(){
}
KalturaAuditTrailInfo.inheritsFrom (KalturaObjectBase);


/**
 * @param	descriptor	string		.
 * @param	oldValue	string		.
 * @param	newValue	string		.
 */
function KalturaAuditTrailChangeItem(){
	this.descriptor = null;
	this.oldValue = null;
	this.newValue = null;
}
KalturaAuditTrailChangeItem.inheritsFrom (KalturaObjectBase);


/**
 * @param	changedItems	array		.
 */
function KalturaAuditTrailChangeInfo(){
	this.changedItems = null;
}
KalturaAuditTrailChangeInfo.inheritsFrom (KalturaAuditTrailInfo);


/**
 * @param	version	string		.
 * @param	objectSubType	int		.
 * @param	dc	int		.
 * @param	original	bool		.
 * @param	fileType	int		.
 */
function KalturaAuditTrailFileSyncCreateInfo(){
	this.version = null;
	this.objectSubType = null;
	this.dc = null;
	this.original = null;
	this.fileType = null;
}
KalturaAuditTrailFileSyncCreateInfo.inheritsFrom (KalturaAuditTrailInfo);


/**
 * @param	info	string		.
 */
function KalturaAuditTrailTextInfo(){
	this.info = null;
}
KalturaAuditTrailTextInfo.inheritsFrom (KalturaAuditTrailInfo);


/**
 */
function KalturaDynamicEnum(){
}
KalturaDynamicEnum.inheritsFrom (KalturaObjectBase);


/**
 * @param	width	int		.
 * @param	height	int		.
 */
function KalturaDistributionThumbDimensions(){
	this.width = null;
	this.height = null;
}
KalturaDistributionThumbDimensions.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		Auto generated unique id
 *	 (readOnly).
 * @param	createdAt	int		Profile creation date as Unix timestamp (In seconds)
 *	 (readOnly).
 * @param	updatedAt	int		Profile last update date as Unix timestamp (In seconds)
 *	 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	providerType	string		 (insertOnly).
 * @param	name	string		.
 * @param	status	int		.
 * @param	submitEnabled	int		.
 * @param	updateEnabled	int		.
 * @param	deleteEnabled	int		.
 * @param	reportEnabled	int		.
 * @param	autoCreateFlavors	string		Comma separated flavor params ids that should be auto converted.
 * @param	autoCreateThumb	string		Comma separated thumbnail params ids that should be auto generated.
 * @param	optionalFlavorParamsIds	string		Comma separated flavor params ids that should be submitted if ready.
 * @param	requiredFlavorParamsIds	string		Comma separated flavor params ids that required to be readt before submission.
 * @param	optionalThumbDimensions	array		Thumbnail dimensions that should be submitted if ready.
 * @param	requiredThumbDimensions	array		Thumbnail dimensions that required to be readt before submission.
 * @param	sunriseDefaultOffset	int		If entry distribution sunrise not specified that will be the default since entry creation time, in seconds.
 * @param	sunsetDefaultOffset	int		If entry distribution sunset not specified that will be the default since entry creation time, in seconds.
 */
function KalturaDistributionProfile(){
	this.id = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.partnerId = null;
	this.providerType = null;
	this.name = null;
	this.status = null;
	this.submitEnabled = null;
	this.updateEnabled = null;
	this.deleteEnabled = null;
	this.reportEnabled = null;
	this.autoCreateFlavors = null;
	this.autoCreateThumb = null;
	this.optionalFlavorParamsIds = null;
	this.requiredFlavorParamsIds = null;
	this.optionalThumbDimensions = null;
	this.requiredThumbDimensions = null;
	this.sunriseDefaultOffset = null;
	this.sunsetDefaultOffset = null;
}
KalturaDistributionProfile.inheritsFrom (KalturaObjectBase);


/**
 * @param	username	string		.
 * @param	notificationEmail	string		.
 * @param	sftpHost	string		.
 * @param	sftpLogin	string		.
 * @param	sftpPublicKey	string		.
 * @param	sftpPrivateKey	string		.
 * @param	ownerName	string		.
 * @param	defaultCategory	string		.
 * @param	allowComments	string		.
 * @param	allowEmbedding	string		.
 * @param	allowRatings	string		.
 * @param	allowResponses	string		.
 * @param	commercialPolicy	string		.
 * @param	ugcPolicy	string		.
 * @param	target	string		.
 */
function KalturaYouTubeDistributionProfile(){
	this.username = null;
	this.notificationEmail = null;
	this.sftpHost = null;
	this.sftpLogin = null;
	this.sftpPublicKey = null;
	this.sftpPrivateKey = null;
	this.ownerName = null;
	this.defaultCategory = null;
	this.allowComments = null;
	this.allowEmbedding = null;
	this.allowRatings = null;
	this.allowResponses = null;
	this.commercialPolicy = null;
	this.ugcPolicy = null;
	this.target = null;
}
KalturaYouTubeDistributionProfile.inheritsFrom (KalturaDistributionProfile);


/**
 * @param	username	string		.
 * @param	password	string		.
 * @param	domain	string		.
 * @param	metadataProfileId	int		.
 */
function KalturaVerizonDistributionProfile(){
	this.username = null;
	this.password = null;
	this.domain = null;
	this.metadataProfileId = null;
}
KalturaVerizonDistributionProfile.inheritsFrom (KalturaDistributionProfile);


/**
 * @param	username	string		.
 * @param	password	string		.
 * @param	domain	string		.
 * @param	csId	string		.
 * @param	source	string		.
 * @param	metadataProfileId	int		.
 * @param	movFlavorParamsId	int		.
 * @param	flvFlavorParamsId	int		.
 * @param	wmvFlavorParamsId	int		.
 */
function KalturaMsnDistributionProfile(){
	this.username = null;
	this.password = null;
	this.domain = null;
	this.csId = null;
	this.source = null;
	this.metadataProfileId = null;
	this.movFlavorParamsId = null;
	this.flvFlavorParamsId = null;
	this.wmvFlavorParamsId = null;
}
KalturaMsnDistributionProfile.inheritsFrom (KalturaDistributionProfile);


/**
 * @param	username	string		.
 * @param	password	string		.
 * @param	metadataProfileId	int		.
 */
function KalturaHuluDistributionProfile(){
	this.username = null;
	this.password = null;
	this.metadataProfileId = null;
}
KalturaHuluDistributionProfile.inheritsFrom (KalturaDistributionProfile);


/**
 * @param	protocol	int		.
 * @param	serverUrl	string		.
 * @param	serverPath	string		.
 * @param	username	string		.
 * @param	password	string		.
 * @param	ftpPassiveMode	bool		.
 * @param	httpFieldName	string		.
 * @param	httpFileName	string		.
 */
function KalturaGenericDistributionProfileAction(){
	this.protocol = null;
	this.serverUrl = null;
	this.serverPath = null;
	this.username = null;
	this.password = null;
	this.ftpPassiveMode = null;
	this.httpFieldName = null;
	this.httpFileName = null;
}
KalturaGenericDistributionProfileAction.inheritsFrom (KalturaObjectBase);


/**
 * @param	genericProviderId	int		 (insertOnly).
 * @param	submitAction	KalturaGenericDistributionProfileAction		.
 * @param	updateAction	KalturaGenericDistributionProfileAction		.
 * @param	deleteAction	KalturaGenericDistributionProfileAction		.
 * @param	fetchReportAction	KalturaGenericDistributionProfileAction		.
 * @param	updateRequiredEntryFields	string		.
 * @param	updateRequiredMetadataXPaths	string		.
 */
function KalturaGenericDistributionProfile(){
	this.genericProviderId = null;
	this.submitAction = null;
	this.updateAction = null;
	this.deleteAction = null;
	this.fetchReportAction = null;
	this.updateRequiredEntryFields = null;
	this.updateRequiredMetadataXPaths = null;
}
KalturaGenericDistributionProfile.inheritsFrom (KalturaDistributionProfile);


/**
 * @param	email	string		.
 * @param	password	string		.
 * @param	account	string		.
 * @param	metadataProfileId	int		.
 * @param	keywords	string		.
 * @param	author	string		.
 * @param	album	string		.
 */
function KalturaComcastDistributionProfile(){
	this.email = null;
	this.password = null;
	this.account = null;
	this.metadataProfileId = null;
	this.keywords = null;
	this.author = null;
	this.album = null;
}
KalturaComcastDistributionProfile.inheritsFrom (KalturaDistributionProfile);


/**
 * @param	type	string		 (readOnly).
 * @param	name	string		.
 * @param	scheduleUpdateEnabled	bool		.
 * @param	deleteInsteadUpdate	bool		.
 * @param	intervalBeforeSunrise	int		.
 * @param	intervalBeforeSunset	int		.
 * @param	updateRequiredEntryFields	string		.
 * @param	updateRequiredMetadataXPaths	string		.
 */
function KalturaDistributionProvider(){
	this.type = null;
	this.name = null;
	this.scheduleUpdateEnabled = null;
	this.deleteInsteadUpdate = null;
	this.intervalBeforeSunrise = null;
	this.intervalBeforeSunset = null;
	this.updateRequiredEntryFields = null;
	this.updateRequiredMetadataXPaths = null;
}
KalturaDistributionProvider.inheritsFrom (KalturaObjectBase);


/**
 */
function KalturaYouTubeDistributionProvider(){
}
KalturaYouTubeDistributionProvider.inheritsFrom (KalturaDistributionProvider);


/**
 */
function KalturaVerizonDistributionProvider(){
}
KalturaVerizonDistributionProvider.inheritsFrom (KalturaDistributionProvider);


/**
 */
function KalturaMsnDistributionProvider(){
}
KalturaMsnDistributionProvider.inheritsFrom (KalturaDistributionProvider);


/**
 */
function KalturaHuluDistributionProvider(){
}
KalturaHuluDistributionProvider.inheritsFrom (KalturaDistributionProvider);


/**
 */
function KalturaComcastDistributionProvider(){
}
KalturaComcastDistributionProvider.inheritsFrom (KalturaDistributionProvider);


/**
 */
function KalturaBaseRestriction(){
}
KalturaBaseRestriction.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		The id of the Access Control Profile
 *	 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	name	string		The name of the Access Control Profile
 *	.
 * @param	description	string		The description of the Access Control Profile
 *	.
 * @param	createdAt	int		Creation date as Unix timestamp (In seconds) 
 *	 (readOnly).
 * @param	isDefault	int		True if this Conversion Profile is the default
 *	.
 * @param	restrictions	array		Array of Access Control Restrictions
 *	.
 */
function KalturaAccessControl(){
	this.id = null;
	this.partnerId = null;
	this.name = null;
	this.description = null;
	this.createdAt = null;
	this.isDefault = null;
	this.restrictions = null;
}
KalturaAccessControl.inheritsFrom (KalturaObjectBase);


/**
 * @param	orderBy	string		.
 * @param	advancedSearch	KalturaSearchItem		.
 */
function KalturaFilter(){
	this.orderBy = null;
	this.advancedSearch = null;
}
KalturaFilter.inheritsFrom (KalturaObjectBase);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 */
function KalturaAccessControlBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
}
KalturaAccessControlBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaAccessControlFilter(){
}
KalturaAccessControlFilter.inheritsFrom (KalturaAccessControlBaseFilter);


/**
 * @param	pageSize	int		The number of objects to retrieve. (Default is 30, maximum page size is 500).
 *	.
 * @param	pageIndex	int		The page number for which {pageSize} of objects should be retrieved (Default is 1).
 *	.
 */
function KalturaFilterPager(){
	this.pageSize = null;
	this.pageIndex = null;
}
KalturaFilterPager.inheritsFrom (KalturaObjectBase);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaAccessControlListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaAccessControlListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	string		.
 * @param	partnerId	int		 (readOnly).
 * @param	screenName	string		.
 * @param	fullName	string		.
 * @param	email	string		.
 * @param	dateOfBirth	int		.
 * @param	country	string		.
 * @param	state	string		.
 * @param	city	string		.
 * @param	zip	string		.
 * @param	thumbnailUrl	string		.
 * @param	description	string		.
 * @param	tags	string		.
 * @param	adminTags	string		Admin tags can be updated only by using an admin session.
 * @param	gender	int		.
 * @param	status	int		.
 * @param	createdAt	int		Creation date as Unix timestamp (In seconds) (readOnly).
 * @param	updatedAt	int		Last update date as Unix timestamp (In seconds) (readOnly).
 * @param	partnerData	string		Can be used to store various partner related data as a string .
 * @param	indexedPartnerDataInt	int		.
 * @param	indexedPartnerDataString	string		.
 * @param	storageSize	int		 (readOnly).
 * @param	password	string		 (insertOnly).
 * @param	firstName	string		.
 * @param	lastName	string		.
 * @param	isAdmin	bool		.
 * @param	lastLoginTime	int		 (readOnly).
 * @param	statusUpdatedAt	int		 (readOnly).
 * @param	deletedAt	int		 (readOnly).
 * @param	loginEnabled	bool		 (readOnly).
 * @param	roleIds	string		.
 * @param	roleNames	string		 (readOnly).
 * @param	isAccountOwner	bool		 (readOnly).
 */
function KalturaUser(){
	this.id = null;
	this.partnerId = null;
	this.screenName = null;
	this.fullName = null;
	this.email = null;
	this.dateOfBirth = null;
	this.country = null;
	this.state = null;
	this.city = null;
	this.zip = null;
	this.thumbnailUrl = null;
	this.description = null;
	this.tags = null;
	this.adminTags = null;
	this.gender = null;
	this.status = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.partnerData = null;
	this.indexedPartnerDataInt = null;
	this.indexedPartnerDataString = null;
	this.storageSize = null;
	this.password = null;
	this.firstName = null;
	this.lastName = null;
	this.isAdmin = null;
	this.lastLoginTime = null;
	this.statusUpdatedAt = null;
	this.deletedAt = null;
	this.loginEnabled = null;
	this.roleIds = null;
	this.roleNames = null;
	this.isAccountOwner = null;
}
KalturaUser.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	string		Auto generated 10 characters alphanumeric string
 *	 (readOnly).
 * @param	name	string		Entry name (Min 1 chars)
 *	.
 * @param	description	string		Entry description
 *	.
 * @param	partnerId	int		 (readOnly).
 * @param	userId	string		The ID of the user who is the owner of this entry 
 *	.
 * @param	tags	string		Entry tags
 *	.
 * @param	adminTags	string		Entry admin tags can be updated only by administrators
 *	.
 * @param	categories	string		.
 * @param	categoriesIds	string		.
 * @param	status	string		 (readOnly).
 * @param	moderationStatus	int		Entry moderation status
 *	 (readOnly).
 * @param	moderationCount	int		Number of moderation requests waiting for this entry
 *	 (readOnly).
 * @param	type	string		The type of the entry, this is auto filled by the derived entry object
 *	.
 * @param	createdAt	int		Entry creation date as Unix timestamp (In seconds)
 *	 (readOnly).
 * @param	updatedAt	int		Entry update date as Unix timestamp (In seconds)
 *	 (readOnly).
 * @param	rank	float		Calculated rank
 *	 (readOnly).
 * @param	totalRank	int		The total (sum) of all votes
 *	 (readOnly).
 * @param	votes	int		Number of votes
 *	 (readOnly).
 * @param	groupId	int		.
 * @param	partnerData	string		Can be used to store various partner related data as a string 
 *	.
 * @param	downloadUrl	string		Download URL for the entry
 *	 (readOnly).
 * @param	searchText	string		Indexed search text for full text search (readOnly).
 * @param	licenseType	int		License type used for this entry
 *	.
 * @param	version	int		Version of the entry data (readOnly).
 * @param	thumbnailUrl	string		Thumbnail URL
 *	 (insertOnly).
 * @param	accessControlId	int		The Access Control ID assigned to this entry (null when not set, send -1 to remove)  
 *	.
 * @param	startDate	int		Entry scheduling start date (null when not set, send -1 to remove)
 *	.
 * @param	endDate	int		Entry scheduling end date (null when not set, send -1 to remove)
 *	.
 */
function KalturaBaseEntry(){
	this.id = null;
	this.name = null;
	this.description = null;
	this.partnerId = null;
	this.userId = null;
	this.tags = null;
	this.adminTags = null;
	this.categories = null;
	this.categoriesIds = null;
	this.status = null;
	this.moderationStatus = null;
	this.moderationCount = null;
	this.type = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.rank = null;
	this.totalRank = null;
	this.votes = null;
	this.groupId = null;
	this.partnerData = null;
	this.downloadUrl = null;
	this.searchText = null;
	this.licenseType = null;
	this.version = null;
	this.thumbnailUrl = null;
	this.accessControlId = null;
	this.startDate = null;
	this.endDate = null;
}
KalturaBaseEntry.inheritsFrom (KalturaObjectBase);


/**
 * @param	idEqual	string		This filter should be in use for retrieving only a specific entry (identified by its entryId).
 *	@var string.
 * @param	idIn	string		This filter should be in use for retrieving few specific entries (string should include comma separated list of entryId strings).
 *	@var string.
 * @param	nameLike	string		This filter should be in use for retrieving specific entries. It should include only one string to search for in entry names (no wildcards, spaces are treated as part of the string).
 *	@var string.
 * @param	nameMultiLikeOr	string		This filter should be in use for retrieving specific entries. It could include few (comma separated) strings for searching in entry names, while applying an OR logic to retrieve entries that contain at least one input string (no wildcards, spaces are treated as part of the string).
 *	@var string.
 * @param	nameMultiLikeAnd	string		This filter should be in use for retrieving specific entries. It could include few (comma separated) strings for searching in entry names, while applying an AND logic to retrieve entries that contain all input strings (no wildcards, spaces are treated as part of the string).
 *	@var string.
 * @param	nameEqual	string		This filter should be in use for retrieving entries with a specific name.
 *	@var string.
 * @param	partnerIdEqual	int		This filter should be in use for retrieving only entries which were uploaded by/assigned to users of a specific Kaltura Partner (identified by Partner ID).
 *	@var int.
 * @param	partnerIdIn	string		This filter should be in use for retrieving only entries within Kaltura network which were uploaded by/assigned to users of few Kaltura Partners  (string should include comma separated list of PartnerIDs)
 *	@var string.
 * @param	userIdEqual	string		This filter parameter should be in use for retrieving only entries, uploaded by/assigned to a specific user (identified by user Id).
 *	@var string.
 * @param	tagsLike	string		This filter should be in use for retrieving specific entries. It should include only one string to search for in entry tags (no wildcards, spaces are treated as part of the string).
 *	@var string.
 * @param	tagsMultiLikeOr	string		This filter should be in use for retrieving specific entries. It could include few (comma separated) strings for searching in entry tags, while applying an OR logic to retrieve entries that contain at least one input string (no wildcards, spaces are treated as part of the string).
 *	@var string.
 * @param	tagsMultiLikeAnd	string		This filter should be in use for retrieving specific entries. It could include few (comma separated) strings for searching in entry tags, while applying an AND logic to retrieve entries that contain all input strings (no wildcards, spaces are treated as part of the string).
 *	@var string.
 * @param	adminTagsLike	string		This filter should be in use for retrieving specific entries. It should include only one string to search for in entry tags set by an ADMIN user (no wildcards, spaces are treated as part of the string).
 *	@var string.
 * @param	adminTagsMultiLikeOr	string		This filter should be in use for retrieving specific entries. It could include few (comma separated) strings for searching in entry tags, set by an ADMIN user, while applying an OR logic to retrieve entries that contain at least one input string (no wildcards, spaces are treated as part of the string).
 *	@var string.
 * @param	adminTagsMultiLikeAnd	string		This filter should be in use for retrieving specific entries. It could include few (comma separated) strings for searching in entry tags, set by an ADMIN user, while applying an AND logic to retrieve entries that contain all input strings (no wildcards, spaces are treated as part of the string).
 *	@var string.
 * @param	categoriesMatchAnd	string		.
 * @param	categoriesMatchOr	string		.
 * @param	categoriesIdsMatchAnd	string		.
 * @param	categoriesIdsMatchOr	string		.
 * @param	statusEqual	string		This filter should be in use for retrieving only entries, at a specific {@link ?object=KalturaEntryStatus KalturaEntryStatus}.
 *	@var KalturaEntryStatus.
 * @param	statusNotEqual	string		This filter should be in use for retrieving only entries, not at a specific {@link ?object=KalturaEntryStatus KalturaEntryStatus}.
 *	@var KalturaEntryStatus.
 * @param	statusIn	string		This filter should be in use for retrieving only entries, at few specific {@link ?object=KalturaEntryStatus KalturaEntryStatus} (comma separated).
 *	@dynamicType KalturaEntryStatus.
 * @param	statusNotIn	string		This filter should be in use for retrieving only entries, not at few specific {@link ?object=KalturaEntryStatus KalturaEntryStatus} (comma separated).
 *	@dynamicType KalturaEntryStatus.
 * @param	moderationStatusEqual	int		.
 * @param	moderationStatusNotEqual	int		.
 * @param	moderationStatusIn	string		.
 * @param	moderationStatusNotIn	string		.
 * @param	typeEqual	string		.
 * @param	typeIn	string		This filter should be in use for retrieving entries of few {@link ?object=KalturaEntryType KalturaEntryType} (string should include a comma separated list of {@link ?object=KalturaEntryType KalturaEntryType} enumerated parameters).
 *	@dynamicType KalturaEntryType.
 * @param	createdAtGreaterThanOrEqual	int		This filter parameter should be in use for retrieving only entries which were created at Kaltura system after a specific time/date (standard timestamp format).
 *	@var int.
 * @param	createdAtLessThanOrEqual	int		This filter parameter should be in use for retrieving only entries which were created at Kaltura system before a specific time/date (standard timestamp format).
 *	@var int.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	groupIdEqual	int		.
 * @param	searchTextMatchAnd	string		This filter should be in use for retrieving specific entries while search match the input string within all of the following metadata attributes: name, description, tags, adminTags.
 *	@var string.
 * @param	searchTextMatchOr	string		This filter should be in use for retrieving specific entries while search match the input string within at least one of the following metadata attributes: name, description, tags, adminTags.
 *	@var string.
 * @param	accessControlIdEqual	int		.
 * @param	accessControlIdIn	string		.
 * @param	startDateGreaterThanOrEqual	int		.
 * @param	startDateLessThanOrEqual	int		.
 * @param	startDateGreaterThanOrEqualOrNull	int		.
 * @param	startDateLessThanOrEqualOrNull	int		.
 * @param	endDateGreaterThanOrEqual	int		.
 * @param	endDateLessThanOrEqual	int		.
 * @param	endDateGreaterThanOrEqualOrNull	int		.
 * @param	endDateLessThanOrEqualOrNull	int		.
 * @param	tagsNameMultiLikeOr	string		.
 * @param	tagsAdminTagsMultiLikeOr	string		.
 * @param	tagsAdminTagsNameMultiLikeOr	string		.
 * @param	tagsNameMultiLikeAnd	string		.
 * @param	tagsAdminTagsMultiLikeAnd	string		.
 * @param	tagsAdminTagsNameMultiLikeAnd	string		.
 */
function KalturaBaseEntryBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.nameLike = null;
	this.nameMultiLikeOr = null;
	this.nameMultiLikeAnd = null;
	this.nameEqual = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.userIdEqual = null;
	this.tagsLike = null;
	this.tagsMultiLikeOr = null;
	this.tagsMultiLikeAnd = null;
	this.adminTagsLike = null;
	this.adminTagsMultiLikeOr = null;
	this.adminTagsMultiLikeAnd = null;
	this.categoriesMatchAnd = null;
	this.categoriesMatchOr = null;
	this.categoriesIdsMatchAnd = null;
	this.categoriesIdsMatchOr = null;
	this.statusEqual = null;
	this.statusNotEqual = null;
	this.statusIn = null;
	this.statusNotIn = null;
	this.moderationStatusEqual = null;
	this.moderationStatusNotEqual = null;
	this.moderationStatusIn = null;
	this.moderationStatusNotIn = null;
	this.typeEqual = null;
	this.typeIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.groupIdEqual = null;
	this.searchTextMatchAnd = null;
	this.searchTextMatchOr = null;
	this.accessControlIdEqual = null;
	this.accessControlIdIn = null;
	this.startDateGreaterThanOrEqual = null;
	this.startDateLessThanOrEqual = null;
	this.startDateGreaterThanOrEqualOrNull = null;
	this.startDateLessThanOrEqualOrNull = null;
	this.endDateGreaterThanOrEqual = null;
	this.endDateLessThanOrEqual = null;
	this.endDateGreaterThanOrEqualOrNull = null;
	this.endDateLessThanOrEqualOrNull = null;
	this.tagsNameMultiLikeOr = null;
	this.tagsAdminTagsMultiLikeOr = null;
	this.tagsAdminTagsNameMultiLikeOr = null;
	this.tagsNameMultiLikeAnd = null;
	this.tagsAdminTagsMultiLikeAnd = null;
	this.tagsAdminTagsNameMultiLikeAnd = null;
}
KalturaBaseEntryBaseFilter.inheritsFrom (KalturaFilter);


/**
 * @param	freeText	string		.
 */
function KalturaBaseEntryFilter(){
	this.freeText = null;
}
KalturaBaseEntryFilter.inheritsFrom (KalturaBaseEntryBaseFilter);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaBaseEntryListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaBaseEntryListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		Moderation flag id (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	userId	string		The user id that added the moderation flag (readOnly).
 * @param	moderationObjectType	int		The type of the moderation flag (entry or user) (readOnly).
 * @param	flaggedEntryId	string		If moderation flag is set for entry, this is the flagged entry id.
 * @param	flaggedUserId	string		If moderation flag is set for user, this is the flagged user id.
 * @param	status	int		The moderation flag status (readOnly).
 * @param	comments	string		The comment that was added to the flag.
 * @param	flagType	int		.
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 */
function KalturaModerationFlag(){
	this.id = null;
	this.partnerId = null;
	this.userId = null;
	this.moderationObjectType = null;
	this.flaggedEntryId = null;
	this.flaggedUserId = null;
	this.status = null;
	this.comments = null;
	this.flagType = null;
	this.createdAt = null;
	this.updatedAt = null;
}
KalturaModerationFlag.inheritsFrom (KalturaObjectBase);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaModerationFlagListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaModerationFlagListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	referrer	string		.
 */
function KalturaEntryContextDataParams(){
	this.referrer = null;
}
KalturaEntryContextDataParams.inheritsFrom (KalturaObjectBase);


/**
 * @param	isSiteRestricted	bool		.
 * @param	isCountryRestricted	bool		.
 * @param	isSessionRestricted	bool		.
 * @param	previewLength	int		.
 * @param	isScheduledNow	bool		.
 * @param	isAdmin	bool		.
 */
function KalturaEntryContextDataResult(){
	this.isSiteRestricted = null;
	this.isCountryRestricted = null;
	this.isSessionRestricted = null;
	this.previewLength = null;
	this.isScheduledNow = null;
	this.isAdmin = null;
}
KalturaEntryContextDataResult.inheritsFrom (KalturaObjectBase);


/**
 * @param	field	string		.
 * @param	value	string		.
 */
function KalturaBulkUploadPluginData(){
	this.field = null;
	this.value = null;
}
KalturaBulkUploadPluginData.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		The id of the result
 *	 (readOnly).
 * @param	bulkUploadJobId	int		The id of the parent job
 *	.
 * @param	lineIndex	int		The index of the line in the CSV
 *	.
 * @param	partnerId	int		.
 * @param	entryId	string		.
 * @param	entryStatus	int		.
 * @param	rowData	string		The data as recieved in the csv
 *	.
 * @param	title	string		.
 * @param	description	string		.
 * @param	tags	string		.
 * @param	url	string		.
 * @param	contentType	string		.
 * @param	conversionProfileId	int		.
 * @param	accessControlProfileId	int		.
 * @param	category	string		.
 * @param	scheduleStartDate	int		.
 * @param	scheduleEndDate	int		.
 * @param	thumbnailUrl	string		.
 * @param	thumbnailSaved	bool		.
 * @param	partnerData	string		.
 * @param	errorDescription	string		.
 * @param	pluginsData	array		.
 */
function KalturaBulkUploadResult(){
	this.id = null;
	this.bulkUploadJobId = null;
	this.lineIndex = null;
	this.partnerId = null;
	this.entryId = null;
	this.entryStatus = null;
	this.rowData = null;
	this.title = null;
	this.description = null;
	this.tags = null;
	this.url = null;
	this.contentType = null;
	this.conversionProfileId = null;
	this.accessControlProfileId = null;
	this.category = null;
	this.scheduleStartDate = null;
	this.scheduleEndDate = null;
	this.thumbnailUrl = null;
	this.thumbnailSaved = null;
	this.partnerData = null;
	this.errorDescription = null;
	this.pluginsData = null;
}
KalturaBulkUploadResult.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		.
 * @param	uploadedBy	string		.
 * @param	uploadedByUserId	string		.
 * @param	uploadedOn	int		.
 * @param	numOfEntries	int		.
 * @param	status	int		.
 * @param	logFileUrl	string		.
 * @param	csvFileUrl	string		.
 * @param	results	array		.
 */
function KalturaBulkUpload(){
	this.id = null;
	this.uploadedBy = null;
	this.uploadedByUserId = null;
	this.uploadedOn = null;
	this.numOfEntries = null;
	this.status = null;
	this.logFileUrl = null;
	this.csvFileUrl = null;
	this.results = null;
}
KalturaBulkUpload.inheritsFrom (KalturaObjectBase);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaBulkUploadListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaBulkUploadListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		The id of the Category
 *	 (readOnly).
 * @param	parentId	int		.
 * @param	depth	int		 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	name	string		The name of the Category. 
 *	The following characters are not allowed: '<', '>', ','
 *	.
 * @param	fullName	string		The full name of the Category
 *	 (readOnly).
 * @param	entriesCount	int		Number of entries in this Category (including child categories)
 *	 (readOnly).
 * @param	createdAt	int		Creation date as Unix timestamp (In seconds)
 *	 (readOnly).
 */
function KalturaCategory(){
	this.id = null;
	this.parentId = null;
	this.depth = null;
	this.partnerId = null;
	this.name = null;
	this.fullName = null;
	this.entriesCount = null;
	this.createdAt = null;
}
KalturaCategory.inheritsFrom (KalturaObjectBase);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	parentIdEqual	int		.
 * @param	parentIdIn	string		.
 * @param	depthEqual	int		.
 * @param	fullNameEqual	string		.
 * @param	fullNameStartsWith	string		.
 */
function KalturaCategoryBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.parentIdEqual = null;
	this.parentIdIn = null;
	this.depthEqual = null;
	this.fullNameEqual = null;
	this.fullNameStartsWith = null;
}
KalturaCategoryBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaCategoryFilter(){
}
KalturaCategoryFilter.inheritsFrom (KalturaCategoryBaseFilter);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaCategoryListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaCategoryListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	left	int		Crop left point
 *	.
 * @param	top	int		Crop top point
 *	.
 * @param	width	int		Crop width
 *	.
 * @param	height	int		Crop height
 *	.
 */
function KalturaCropDimensions(){
	this.left = null;
	this.top = null;
	this.width = null;
	this.height = null;
}
KalturaCropDimensions.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		The id of the Conversion Profile
 *	 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	name	string		The name of the Conversion Profile
 *	.
 * @param	description	string		The description of the Conversion Profile
 *	.
 * @param	createdAt	int		Creation date as Unix timestamp (In seconds) 
 *	 (readOnly).
 * @param	flavorParamsIds	string		List of included flavor ids (comma separated)
 *	.
 * @param	isDefault	int		True if this Conversion Profile is the default
 *	.
 * @param	cropDimensions	KalturaCropDimensions		Cropping dimensions
 *	.
 * @param	clipStart	int		Clipping start position (in miliseconds)
 *	.
 * @param	clipDuration	int		Clipping duration (in miliseconds)
 *	.
 */
function KalturaConversionProfile(){
	this.id = null;
	this.partnerId = null;
	this.name = null;
	this.description = null;
	this.createdAt = null;
	this.flavorParamsIds = null;
	this.isDefault = null;
	this.cropDimensions = null;
	this.clipStart = null;
	this.clipDuration = null;
}
KalturaConversionProfile.inheritsFrom (KalturaObjectBase);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	nameEqual	string		.
 */
function KalturaConversionProfileBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.nameEqual = null;
}
KalturaConversionProfileBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaConversionProfileFilter(){
}
KalturaConversionProfileFilter.inheritsFrom (KalturaConversionProfileBaseFilter);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaConversionProfileListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaConversionProfileListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	dataContent	string		The data of the entry.
 * @param	retrieveDataContentByGet	bool		indicator whether to return the object for get action with the dataContent field. (insertOnly).
 */
function KalturaDataEntry(){
	this.dataContent = null;
	this.retrieveDataContentByGet = null;
}
KalturaDataEntry.inheritsFrom (KalturaBaseEntry);


/**
 */
function KalturaDataEntryBaseFilter(){
}
KalturaDataEntryBaseFilter.inheritsFrom (KalturaBaseEntryFilter);


/**
 */
function KalturaDataEntryFilter(){
}
KalturaDataEntryFilter.inheritsFrom (KalturaDataEntryBaseFilter);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaDataListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaDataListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	documentType	int		The type of the document (insertOnly).
 * @param	conversionProfileId	string		Conversion profile ID to override the default conversion profile
 *	 (insertOnly).
 */
function KalturaDocumentEntry(){
	this.documentType = null;
	this.conversionProfileId = null;
}
KalturaDocumentEntry.inheritsFrom (KalturaBaseEntry);


/**
 * @param	flavorParamsId	int		The id of the flavor params, set to null for source flavor
 *	.
 * @param	name	string		Attribute name  
 *	.
 * @param	value	string		Attribute value  
 *	.
 */
function KalturaConversionAttribute(){
	this.flavorParamsId = null;
	this.name = null;
	this.value = null;
}
KalturaConversionAttribute.inheritsFrom (KalturaObjectBase);


/**
 * @param	documentTypeEqual	int		.
 * @param	documentTypeIn	string		.
 */
function KalturaDocumentEntryBaseFilter(){
	this.documentTypeEqual = null;
	this.documentTypeIn = null;
}
KalturaDocumentEntryBaseFilter.inheritsFrom (KalturaBaseEntryFilter);


/**
 */
function KalturaDocumentEntryFilter(){
}
KalturaDocumentEntryFilter.inheritsFrom (KalturaDocumentEntryBaseFilter);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaDocumentListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaDocumentListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		 (readOnly).
 * @param	name	string		.
 * @param	description	string		.
 * @param	emailAddress	string		.
 * @param	mailboxId	string		.
 * @param	partnerId	int		 (readOnly).
 * @param	conversionProfile2Id	int		.
 * @param	moderationStatus	int		.
 * @param	status	int		 (readOnly).
 * @param	createdAt	string		 (readOnly).
 * @param	defaultCategory	string		.
 * @param	defaultUserId	string		.
 * @param	defaultTags	string		.
 * @param	defaultAdminTags	string		.
 * @param	maxAttachmentSizeKbytes	int		.
 * @param	maxAttachmentsPerMail	int		.
 */
function KalturaEmailIngestionProfile(){
	this.id = null;
	this.name = null;
	this.description = null;
	this.emailAddress = null;
	this.mailboxId = null;
	this.partnerId = null;
	this.conversionProfile2Id = null;
	this.moderationStatus = null;
	this.status = null;
	this.createdAt = null;
	this.defaultCategory = null;
	this.defaultUserId = null;
	this.defaultTags = null;
	this.defaultAdminTags = null;
	this.maxAttachmentSizeKbytes = null;
	this.maxAttachmentsPerMail = null;
}
KalturaEmailIngestionProfile.inheritsFrom (KalturaObjectBase);


/**
 * @param	plays	int		Number of plays
 *	 (readOnly).
 * @param	views	int		Number of views
 *	 (readOnly).
 * @param	width	int		The width in pixels
 *	 (readOnly).
 * @param	height	int		The height in pixels
 *	 (readOnly).
 * @param	duration	int		The duration in seconds
 *	 (readOnly).
 * @param	msDuration	int		The duration in miliseconds
 *	 (readOnly).
 * @param	durationType	string		The duration type (short for 0-4 mins, medium for 4-20 mins, long for 20+ mins)
 *	 (readOnly).
 */
function KalturaPlayableEntry(){
	this.plays = null;
	this.views = null;
	this.width = null;
	this.height = null;
	this.duration = null;
	this.msDuration = null;
	this.durationType = null;
}
KalturaPlayableEntry.inheritsFrom (KalturaBaseEntry);


/**
 * @param	mediaType	int		The media type of the entry
 *	 (insertOnly).
 * @param	conversionQuality	string		Override the default conversion quality  
 *	 (insertOnly).
 * @param	sourceType	int		The source type of the entry  (insertOnly).
 * @param	searchProviderType	int		The search provider type used to import this entry (insertOnly).
 * @param	searchProviderId	string		The ID of the media in the importing site (insertOnly).
 * @param	creditUserName	string		The user name used for credits.
 * @param	creditUrl	string		The URL for credits.
 * @param	mediaDate	int		The media date extracted from EXIF data (For images) as Unix timestamp (In seconds) (readOnly).
 * @param	dataUrl	string		The URL used for playback. This is not the download URL. (readOnly).
 * @param	flavorParamsIds	string		Comma separated flavor params ids that exists for this media entry
 *	 (readOnly).
 */
function KalturaMediaEntry(){
	this.mediaType = null;
	this.conversionQuality = null;
	this.sourceType = null;
	this.searchProviderType = null;
	this.searchProviderId = null;
	this.creditUserName = null;
	this.creditUrl = null;
	this.mediaDate = null;
	this.dataUrl = null;
	this.flavorParamsIds = null;
}
KalturaMediaEntry.inheritsFrom (KalturaPlayableEntry);


/**
 * @param	id	string		The ID of the Flavor Asset
 *	 (readOnly).
 * @param	entryId	string		The entry ID of the Flavor Asset
 *	 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	status	int		The status of the Flavor Asset
 *	 (readOnly).
 * @param	version	int		The version of the Flavor Asset
 *	 (readOnly).
 * @param	size	int		The size (in KBytes) of the Flavor Asset
 *	 (readOnly).
 * @param	tags	string		Tags used to identify the Flavor Asset in various scenarios
 *	.
 * @param	fileExt	string		The file extension
 *	.
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 * @param	deletedAt	int		 (readOnly).
 * @param	description	string		 (readOnly).
 */
function KalturaAsset(){
	this.id = null;
	this.entryId = null;
	this.partnerId = null;
	this.status = null;
	this.version = null;
	this.size = null;
	this.tags = null;
	this.fileExt = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.deletedAt = null;
	this.description = null;
}
KalturaAsset.inheritsFrom (KalturaObjectBase);


/**
 * @param	flavorParamsId	int		The Flavor Params used to create this Flavor Asset
 *	.
 * @param	width	int		The width of the Flavor Asset 
 *	 (readOnly).
 * @param	height	int		The height of the Flavor Asset
 *	 (readOnly).
 * @param	bitrate	int		The overall bitrate (in KBits) of the Flavor Asset 
 *	 (readOnly).
 * @param	frameRate	int		The frame rate (in FPS) of the Flavor Asset
 *	 (readOnly).
 * @param	isOriginal	bool		True if this Flavor Asset is the original source
 *	.
 * @param	isWeb	bool		True if this Flavor Asset is playable in KDP
 *	 (readOnly).
 * @param	containerFormat	string		The container format
 *	 (readOnly).
 * @param	videoCodecId	string		The video codec
 *	 (readOnly).
 */
function KalturaFlavorAsset(){
	this.flavorParamsId = null;
	this.width = null;
	this.height = null;
	this.bitrate = null;
	this.frameRate = null;
	this.isOriginal = null;
	this.isWeb = null;
	this.containerFormat = null;
	this.videoCodecId = null;
}
KalturaFlavorAsset.inheritsFrom (KalturaAsset);


/**
 * @param	idEqual	string		.
 * @param	idIn	string		.
 * @param	entryIdEqual	string		.
 * @param	entryIdIn	string		.
 * @param	partnerIdEqual	int		.
 * @param	partnerIdIn	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	statusNotIn	string		.
 * @param	sizeGreaterThanOrEqual	int		.
 * @param	sizeLessThanOrEqual	int		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	deletedAtGreaterThanOrEqual	int		.
 * @param	deletedAtLessThanOrEqual	int		.
 */
function KalturaAssetBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.entryIdEqual = null;
	this.entryIdIn = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.statusNotIn = null;
	this.sizeGreaterThanOrEqual = null;
	this.sizeLessThanOrEqual = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.deletedAtGreaterThanOrEqual = null;
	this.deletedAtLessThanOrEqual = null;
}
KalturaAssetBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaAssetFilter(){
}
KalturaAssetFilter.inheritsFrom (KalturaAssetBaseFilter);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaFlavorAssetListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaFlavorAssetListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		The id of the Flavor Params
 *	 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	name	string		The name of the Flavor Params
 *	.
 * @param	description	string		The description of the Flavor Params
 *	.
 * @param	createdAt	int		Creation date as Unix timestamp (In seconds)
 *	 (readOnly).
 * @param	isSystemDefault	int		True if those Flavor Params are part of system defaults
 *	 (readOnly).
 * @param	tags	string		The Flavor Params tags are used to identify the flavor for different usage (e.g. web, hd, mobile)
 *	.
 * @param	format	string		The container format of the Flavor Params
 *	.
 */
function KalturaAssetParams(){
	this.id = null;
	this.partnerId = null;
	this.name = null;
	this.description = null;
	this.createdAt = null;
	this.isSystemDefault = null;
	this.tags = null;
	this.format = null;
}
KalturaAssetParams.inheritsFrom (KalturaObjectBase);


/**
 * @param	videoCodec	string		The video codec of the Flavor Params
 *	.
 * @param	videoBitrate	int		The video bitrate (in KBits) of the Flavor Params
 *	.
 * @param	audioCodec	string		The audio codec of the Flavor Params
 *	.
 * @param	audioBitrate	int		The audio bitrate (in KBits) of the Flavor Params
 *	.
 * @param	audioChannels	int		The number of audio channels for "downmixing"
 *	.
 * @param	audioSampleRate	int		The audio sample rate of the Flavor Params
 *	.
 * @param	width	int		The desired width of the Flavor Params
 *	.
 * @param	height	int		The desired height of the Flavor Params
 *	.
 * @param	frameRate	int		The frame rate of the Flavor Params
 *	.
 * @param	gopSize	int		The gop size of the Flavor Params
 *	.
 * @param	conversionEngines	string		The list of conversion engines (comma separated)
 *	.
 * @param	conversionEnginesExtraParams	string		The list of conversion engines extra params (separated with "|")
 *	.
 * @param	twoPass	bool		.
 * @param	deinterlice	int		.
 * @param	rotate	int		.
 * @param	operators	string		.
 * @param	engineVersion	int		.
 */
function KalturaFlavorParams(){
	this.videoCodec = null;
	this.videoBitrate = null;
	this.audioCodec = null;
	this.audioBitrate = null;
	this.audioChannels = null;
	this.audioSampleRate = null;
	this.width = null;
	this.height = null;
	this.frameRate = null;
	this.gopSize = null;
	this.conversionEngines = null;
	this.conversionEnginesExtraParams = null;
	this.twoPass = null;
	this.deinterlice = null;
	this.rotate = null;
	this.operators = null;
	this.engineVersion = null;
}
KalturaFlavorParams.inheritsFrom (KalturaAssetParams);


/**
 * @param	flavorAsset	KalturaFlavorAsset		The Flavor Asset (Can be null when there are params without asset)
 *	.
 * @param	flavorParams	KalturaFlavorParams		The Flavor Params
 *	.
 * @param	entryId	string		The entry id
 *	.
 */
function KalturaFlavorAssetWithParams(){
	this.flavorAsset = null;
	this.flavorParams = null;
	this.entryId = null;
}
KalturaFlavorAssetWithParams.inheritsFrom (KalturaObjectBase);


/**
 * @param	isSystemDefaultEqual	int		.
 * @param	formatEqual	string		.
 * @param	tagsEqual	string		.
 */
function KalturaAssetParamsBaseFilter(){
	this.isSystemDefaultEqual = null;
	this.formatEqual = null;
	this.tagsEqual = null;
}
KalturaAssetParamsBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaAssetParamsFilter(){
}
KalturaAssetParamsFilter.inheritsFrom (KalturaAssetParamsBaseFilter);


/**
 */
function KalturaFlavorParamsBaseFilter(){
}
KalturaFlavorParamsBaseFilter.inheritsFrom (KalturaAssetParamsFilter);


/**
 */
function KalturaFlavorParamsFilter(){
}
KalturaFlavorParamsFilter.inheritsFrom (KalturaFlavorParamsBaseFilter);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaFlavorParamsListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaFlavorParamsListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	bitrate	int		.
 * @param	width	int		.
 * @param	height	int		.
 */
function KalturaLiveStreamBitrate(){
	this.bitrate = null;
	this.width = null;
	this.height = null;
}
KalturaLiveStreamBitrate.inheritsFrom (KalturaObjectBase);


/**
 * @param	offlineMessage	string		The message to be presented when the stream is offline
 *	.
 * @param	streamRemoteId	string		The stream id as provided by the provider
 *	 (readOnly).
 * @param	streamRemoteBackupId	string		The backup stream id as provided by the provider
 *	 (readOnly).
 * @param	bitrates	array		Array of supported bitrates
 *	.
 * @param	primaryBroadcastingUrl	string		.
 * @param	secondaryBroadcastingUrl	string		.
 * @param	streamName	string		.
 */
function KalturaLiveStreamEntry(){
	this.offlineMessage = null;
	this.streamRemoteId = null;
	this.streamRemoteBackupId = null;
	this.bitrates = null;
	this.primaryBroadcastingUrl = null;
	this.secondaryBroadcastingUrl = null;
	this.streamName = null;
}
KalturaLiveStreamEntry.inheritsFrom (KalturaMediaEntry);


/**
 * @param	encodingIP1	string		The broadcast primary ip
 *	.
 * @param	encodingIP2	string		The broadcast secondary ip
 *	.
 * @param	streamPassword	string		The broadcast password
 *	.
 * @param	streamUsername	string		The broadcast username
 *	 (readOnly).
 */
function KalturaLiveStreamAdminEntry(){
	this.encodingIP1 = null;
	this.encodingIP2 = null;
	this.streamPassword = null;
	this.streamUsername = null;
}
KalturaLiveStreamAdminEntry.inheritsFrom (KalturaLiveStreamEntry);


/**
 * @param	durationLessThan	int		.
 * @param	durationGreaterThan	int		.
 * @param	durationLessThanOrEqual	int		.
 * @param	durationGreaterThanOrEqual	int		.
 * @param	msDurationLessThan	int		.
 * @param	msDurationGreaterThan	int		.
 * @param	msDurationLessThanOrEqual	int		.
 * @param	msDurationGreaterThanOrEqual	int		.
 * @param	durationTypeMatchOr	string		.
 */
function KalturaPlayableEntryBaseFilter(){
	this.durationLessThan = null;
	this.durationGreaterThan = null;
	this.durationLessThanOrEqual = null;
	this.durationGreaterThanOrEqual = null;
	this.msDurationLessThan = null;
	this.msDurationGreaterThan = null;
	this.msDurationLessThanOrEqual = null;
	this.msDurationGreaterThanOrEqual = null;
	this.durationTypeMatchOr = null;
}
KalturaPlayableEntryBaseFilter.inheritsFrom (KalturaBaseEntryFilter);


/**
 */
function KalturaPlayableEntryFilter(){
}
KalturaPlayableEntryFilter.inheritsFrom (KalturaPlayableEntryBaseFilter);


/**
 * @param	mediaTypeEqual	int		.
 * @param	mediaTypeIn	string		.
 * @param	mediaDateGreaterThanOrEqual	int		.
 * @param	mediaDateLessThanOrEqual	int		.
 * @param	flavorParamsIdsMatchOr	string		.
 * @param	flavorParamsIdsMatchAnd	string		.
 */
function KalturaMediaEntryBaseFilter(){
	this.mediaTypeEqual = null;
	this.mediaTypeIn = null;
	this.mediaDateGreaterThanOrEqual = null;
	this.mediaDateLessThanOrEqual = null;
	this.flavorParamsIdsMatchOr = null;
	this.flavorParamsIdsMatchAnd = null;
}
KalturaMediaEntryBaseFilter.inheritsFrom (KalturaPlayableEntryFilter);


/**
 */
function KalturaMediaEntryFilter(){
}
KalturaMediaEntryFilter.inheritsFrom (KalturaMediaEntryBaseFilter);


/**
 */
function KalturaLiveStreamEntryBaseFilter(){
}
KalturaLiveStreamEntryBaseFilter.inheritsFrom (KalturaMediaEntryFilter);


/**
 */
function KalturaLiveStreamEntryFilter(){
}
KalturaLiveStreamEntryFilter.inheritsFrom (KalturaLiveStreamEntryBaseFilter);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaLiveStreamListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaLiveStreamListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	keyWords	string		.
 * @param	searchSource	int		.
 * @param	mediaType	int		.
 * @param	extraData	string		Use this field to pass dynamic data for searching
 *	For example - if you set this field to "mymovies_$partner_id"
 *	The $partner_id will be automatically replcaed with your real partner Id
 *	.
 * @param	authData	string		.
 */
function KalturaSearch(){
	this.keyWords = null;
	this.searchSource = null;
	this.mediaType = null;
	this.extraData = null;
	this.authData = null;
}
KalturaSearch.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	string		.
 * @param	title	string		.
 * @param	thumbUrl	string		.
 * @param	description	string		.
 * @param	tags	string		.
 * @param	url	string		.
 * @param	sourceLink	string		.
 * @param	credit	string		.
 * @param	licenseType	int		.
 * @param	flashPlaybackType	string		.
 */
function KalturaSearchResult(){
	this.id = null;
	this.title = null;
	this.thumbUrl = null;
	this.description = null;
	this.tags = null;
	this.url = null;
	this.sourceLink = null;
	this.credit = null;
	this.licenseType = null;
	this.flashPlaybackType = null;
}
KalturaSearchResult.inheritsFrom (KalturaSearch);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaMediaListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaMediaListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	hasRealThumbnail	bool		Indicates whether the user has submited a real thumbnail to the mix (Not the one that was generated automaticaly)
 *	 (readOnly).
 * @param	editorType	int		The editor type used to edit the metadata
 *	.
 * @param	dataContent	string		The xml data of the mix.
 */
function KalturaMixEntry(){
	this.hasRealThumbnail = null;
	this.editorType = null;
	this.dataContent = null;
}
KalturaMixEntry.inheritsFrom (KalturaPlayableEntry);


/**
 */
function KalturaMixEntryBaseFilter(){
}
KalturaMixEntryBaseFilter.inheritsFrom (KalturaPlayableEntryFilter);


/**
 */
function KalturaMixEntryFilter(){
}
KalturaMixEntryFilter.inheritsFrom (KalturaMixEntryBaseFilter);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaMixListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaMixListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	url	string		The URL where the notification should be sent to .
 * @param	data	string		The serialized notification data to send.
 */
function KalturaClientNotification(){
	this.url = null;
	this.data = null;
}
KalturaClientNotification.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		 (readOnly).
 * @param	name	string		.
 * @param	website	string		.
 * @param	notificationUrl	string		.
 * @param	appearInSearch	int		.
 * @param	createdAt	string		 (readOnly).
 * @param	adminName	string		.
 * @param	adminEmail	string		.
 * @param	description	string		.
 * @param	commercialUse	int		.
 * @param	landingPage	string		.
 * @param	userLandingPage	string		.
 * @param	contentCategories	string		.
 * @param	type	int		.
 * @param	phone	string		.
 * @param	describeYourself	string		.
 * @param	adultContent	bool		.
 * @param	defConversionProfileType	string		.
 * @param	notify	int		.
 * @param	status	int		 (readOnly).
 * @param	allowQuickEdit	int		.
 * @param	mergeEntryLists	int		.
 * @param	notificationsConfig	string		.
 * @param	maxUploadSize	int		.
 * @param	partnerPackage	int		 (readOnly).
 * @param	secret	string		 (readOnly).
 * @param	adminSecret	string		 (readOnly).
 * @param	cmsPassword	string		 (readOnly).
 * @param	allowMultiNotification	int		 (readOnly).
 * @param	adminLoginUsersQuota	int		 (readOnly).
 * @param	adminUserId	string		.
 */
function KalturaPartner(){
	this.id = null;
	this.name = null;
	this.website = null;
	this.notificationUrl = null;
	this.appearInSearch = null;
	this.createdAt = null;
	this.adminName = null;
	this.adminEmail = null;
	this.description = null;
	this.commercialUse = null;
	this.landingPage = null;
	this.userLandingPage = null;
	this.contentCategories = null;
	this.type = null;
	this.phone = null;
	this.describeYourself = null;
	this.adultContent = null;
	this.defConversionProfileType = null;
	this.notify = null;
	this.status = null;
	this.allowQuickEdit = null;
	this.mergeEntryLists = null;
	this.notificationsConfig = null;
	this.maxUploadSize = null;
	this.partnerPackage = null;
	this.secret = null;
	this.adminSecret = null;
	this.cmsPassword = null;
	this.allowMultiNotification = null;
	this.adminLoginUsersQuota = null;
	this.adminUserId = null;
}
KalturaPartner.inheritsFrom (KalturaObjectBase);


/**
 * @param	hostingGB	float		 (readOnly).
 * @param	Percent	float		 (readOnly).
 * @param	packageBW	int		 (readOnly).
 * @param	usageGB	int		 (readOnly).
 * @param	reachedLimitDate	int		 (readOnly).
 * @param	usageGraph	string		 (readOnly).
 */
function KalturaPartnerUsage(){
	this.hostingGB = null;
	this.Percent = null;
	this.packageBW = null;
	this.usageGB = null;
	this.reachedLimitDate = null;
	this.usageGraph = null;
}
KalturaPartnerUsage.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		 (readOnly).
 * @param	type	string		 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	tags	string		.
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 */
function KalturaPermissionItem(){
	this.id = null;
	this.type = null;
	this.partnerId = null;
	this.tags = null;
	this.createdAt = null;
	this.updatedAt = null;
}
KalturaPermissionItem.inheritsFrom (KalturaObjectBase);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	typeEqual	string		.
 * @param	typeIn	string		.
 * @param	partnerIdEqual	int		.
 * @param	partnerIdIn	string		.
 * @param	tagsMultiLikeOr	string		.
 * @param	tagsMultiLikeAnd	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 */
function KalturaPermissionItemBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.typeEqual = null;
	this.typeIn = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.tagsMultiLikeOr = null;
	this.tagsMultiLikeAnd = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
}
KalturaPermissionItemBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaPermissionItemFilter(){
}
KalturaPermissionItemFilter.inheritsFrom (KalturaPermissionItemBaseFilter);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaPremissionItemListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaPremissionItemListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		 (readOnly).
 * @param	type	int		 (readOnly).
 * @param	name	string		.
 * @param	friendlyName	string		.
 * @param	description	string		.
 * @param	status	int		.
 * @param	partnerId	int		 (readOnly).
 * @param	dependsOnPermissionNames	string		.
 * @param	tags	string		.
 * @param	permissionItemsIds	string		.
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 * @param	partnerGroup	string		.
 */
function KalturaPermission(){
	this.id = null;
	this.type = null;
	this.name = null;
	this.friendlyName = null;
	this.description = null;
	this.status = null;
	this.partnerId = null;
	this.dependsOnPermissionNames = null;
	this.tags = null;
	this.permissionItemsIds = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.partnerGroup = null;
}
KalturaPermission.inheritsFrom (KalturaObjectBase);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	typeEqual	int		.
 * @param	typeIn	string		.
 * @param	nameEqual	string		.
 * @param	nameIn	string		.
 * @param	friendlyNameLike	string		.
 * @param	descriptionLike	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	partnerIdEqual	int		.
 * @param	partnerIdIn	string		.
 * @param	dependsOnPermissionNamesMultiLikeOr	string		.
 * @param	dependsOnPermissionNamesMultiLikeAnd	string		.
 * @param	tagsMultiLikeOr	string		.
 * @param	tagsMultiLikeAnd	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 */
function KalturaPermissionBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.typeEqual = null;
	this.typeIn = null;
	this.nameEqual = null;
	this.nameIn = null;
	this.friendlyNameLike = null;
	this.descriptionLike = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.dependsOnPermissionNamesMultiLikeOr = null;
	this.dependsOnPermissionNamesMultiLikeAnd = null;
	this.tagsMultiLikeOr = null;
	this.tagsMultiLikeAnd = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
}
KalturaPermissionBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaPermissionFilter(){
}
KalturaPermissionFilter.inheritsFrom (KalturaPermissionBaseFilter);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaPermissionListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaPermissionListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	limit	int		.
 */
function KalturaMediaEntryFilterForPlaylist(){
	this.limit = null;
}
KalturaMediaEntryFilterForPlaylist.inheritsFrom (KalturaMediaEntryFilter);


/**
 * @param	playlistContent	string		Content of the playlist - 
 *	XML if the playlistType is dynamic 
 *	text if the playlistType is static 
 *	url if the playlistType is mRss .
 * @param	filters	array		.
 * @param	totalResults	int		.
 * @param	playlistType	int		Type of playlist  .
 * @param	plays	int		Number of plays (readOnly).
 * @param	views	int		Number of views (readOnly).
 * @param	duration	int		The duration in seconds (readOnly).
 */
function KalturaPlaylist(){
	this.playlistContent = null;
	this.filters = null;
	this.totalResults = null;
	this.playlistType = null;
	this.plays = null;
	this.views = null;
	this.duration = null;
}
KalturaPlaylist.inheritsFrom (KalturaBaseEntry);


/**
 */
function KalturaPlaylistBaseFilter(){
}
KalturaPlaylistBaseFilter.inheritsFrom (KalturaBaseEntryFilter);


/**
 */
function KalturaPlaylistFilter(){
}
KalturaPlaylistFilter.inheritsFrom (KalturaPlaylistBaseFilter);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaPlaylistListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaPlaylistListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	fromDate	int		.
 * @param	toDate	int		.
 * @param	keywords	string		.
 * @param	searchInTags	bool		.
 * @param	searchInAdminTags	bool		.
 * @param	categories	string		.
 * @param	timeZoneOffset	int		time zone offset in minutes.
 */
function KalturaReportInputFilter(){
	this.fromDate = null;
	this.toDate = null;
	this.keywords = null;
	this.searchInTags = null;
	this.searchInAdminTags = null;
	this.categories = null;
	this.timeZoneOffset = null;
}
KalturaReportInputFilter.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	string		.
 * @param	data	string		.
 */
function KalturaReportGraph(){
	this.id = null;
	this.data = null;
}
KalturaReportGraph.inheritsFrom (KalturaObjectBase);


/**
 * @param	header	string		.
 * @param	data	string		.
 */
function KalturaReportTotal(){
	this.header = null;
	this.data = null;
}
KalturaReportTotal.inheritsFrom (KalturaObjectBase);


/**
 * @param	header	string		 (readOnly).
 * @param	data	string		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaReportTable(){
	this.header = null;
	this.data = null;
	this.totalCount = null;
}
KalturaReportTable.inheritsFrom (KalturaObjectBase);


/**
 * @param	objects	array		 (readOnly).
 * @param	needMediaInfo	bool		 (readOnly).
 */
function KalturaSearchResultResponse(){
	this.objects = null;
	this.needMediaInfo = null;
}
KalturaSearchResultResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	authData	string		The authentication data that further should be used for search
 *	.
 * @param	loginUrl	string		Login URL when user need to sign-in and authorize the search.
 * @param	message	string		Information when there was an error.
 */
function KalturaSearchAuthData(){
	this.authData = null;
	this.loginUrl = null;
	this.message = null;
}
KalturaSearchAuthData.inheritsFrom (KalturaObjectBase);


/**
 * @param	partnerId	int		 (readOnly).
 * @param	ks	string		 (readOnly).
 * @param	userId	string		 (readOnly).
 */
function KalturaStartWidgetSessionResponse(){
	this.partnerId = null;
	this.ks = null;
	this.userId = null;
}
KalturaStartWidgetSessionResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	clientVer	string		.
 * @param	eventType	int		.
 * @param	eventTimestamp	float		the client's timestamp of this event
 *	.
 * @param	sessionId	string		a unique string generated by the client that will represent the client-side session: the primary component will pass it on to other components that sprout from it.
 * @param	partnerId	int		.
 * @param	entryId	string		.
 * @param	uniqueViewer	string		the UV cookie - creates in the operational system and should be passed on ofr every event .
 * @param	widgetId	string		.
 * @param	uiconfId	int		.
 * @param	userId	string		the partner's user id .
 * @param	currentPoint	int		the timestamp along the video when the event happend .
 * @param	duration	int		the duration of the video in milliseconds - will make it much faster than quering the db for each entry .
 * @param	userIp	string		will be retrieved from the request of the user  (readOnly).
 * @param	processDuration	int		the time in milliseconds the event took.
 * @param	controlId	string		the id of the GUI control - will be used in the future to better understand what the user clicked.
 * @param	seek	bool		true if the user ever used seek in this session .
 * @param	newPoint	int		timestamp of the new point on the timeline of the video after the user seeks .
 * @param	referrer	string		the referrer of the client.
 * @param	isFirstInSession	bool		will indicate if the event is thrown for the first video in the session.
 */
function KalturaStatsEvent(){
	this.clientVer = null;
	this.eventType = null;
	this.eventTimestamp = null;
	this.sessionId = null;
	this.partnerId = null;
	this.entryId = null;
	this.uniqueViewer = null;
	this.widgetId = null;
	this.uiconfId = null;
	this.userId = null;
	this.currentPoint = null;
	this.duration = null;
	this.userIp = null;
	this.processDuration = null;
	this.controlId = null;
	this.seek = null;
	this.newPoint = null;
	this.referrer = null;
	this.isFirstInSession = null;
}
KalturaStatsEvent.inheritsFrom (KalturaObjectBase);


/**
 * @param	clientVer	string		.
 * @param	kmcEventActionPath	string		.
 * @param	kmcEventType	int		.
 * @param	eventTimestamp	float		the client's timestamp of this event
 *	.
 * @param	sessionId	string		a unique string generated by the client that will represent the client-side session: the primary component will pass it on to other components that sprout from it.
 * @param	partnerId	int		.
 * @param	entryId	string		.
 * @param	widgetId	string		.
 * @param	uiconfId	int		.
 * @param	userId	string		the partner's user id .
 * @param	userIp	string		will be retrieved from the request of the user  (readOnly).
 */
function KalturaStatsKmcEvent(){
	this.clientVer = null;
	this.kmcEventActionPath = null;
	this.kmcEventType = null;
	this.eventTimestamp = null;
	this.sessionId = null;
	this.partnerId = null;
	this.entryId = null;
	this.widgetId = null;
	this.uiconfId = null;
	this.userId = null;
	this.userIp = null;
}
KalturaStatsKmcEvent.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	string		 (readOnly).
 * @param	partnerId	int		.
 * @param	browser	string		.
 * @param	serverIp	string		.
 * @param	serverOs	string		.
 * @param	phpVersion	string		.
 * @param	ceAdminEmail	string		.
 * @param	type	string		.
 * @param	description	string		.
 * @param	data	string		.
 */
function KalturaCEError(){
	this.id = null;
	this.partnerId = null;
	this.browser = null;
	this.serverIp = null;
	this.serverOs = null;
	this.phpVersion = null;
	this.ceAdminEmail = null;
	this.type = null;
	this.description = null;
	this.data = null;
}
KalturaCEError.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	string		 (readOnly).
 * @param	feedUrl	string		 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	playlistId	string		link a playlist that will set what content the feed will include
 *	if empty, all content will be included in feed
 *	.
 * @param	name	string		feed name
 *	.
 * @param	status	int		feed status
 *	 (readOnly).
 * @param	type	int		feed type
 *	 (readOnly).
 * @param	landingPage	string		Base URL for each video, on the partners site
 *	This is required by all syndication types..
 * @param	createdAt	int		Creation date as Unix timestamp (In seconds)
 *	 (readOnly).
 * @param	allowEmbed	bool		allow_embed tells google OR yahoo weather to allow embedding the video on google OR yahoo video results
 *	or just to provide a link to the landing page.
 *	it is applied on the video-player_loc property in the XML (google)
 *	and addes media-player tag (yahoo).
 * @param	playerUiconfId	int		Select a uiconf ID as player skin to include in the kwidget url.
 * @param	flavorParamId	int		.
 * @param	transcodeExistingContent	bool		.
 * @param	addToDefaultConversionProfile	bool		.
 * @param	categories	string		.
 */
function KalturaBaseSyndicationFeed(){
	this.id = null;
	this.feedUrl = null;
	this.partnerId = null;
	this.playlistId = null;
	this.name = null;
	this.status = null;
	this.type = null;
	this.landingPage = null;
	this.createdAt = null;
	this.allowEmbed = null;
	this.playerUiconfId = null;
	this.flavorParamId = null;
	this.transcodeExistingContent = null;
	this.addToDefaultConversionProfile = null;
	this.categories = null;
}
KalturaBaseSyndicationFeed.inheritsFrom (KalturaObjectBase);


/**
 */
function KalturaBaseSyndicationFeedBaseFilter(){
}
KalturaBaseSyndicationFeedBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaBaseSyndicationFeedFilter(){
}
KalturaBaseSyndicationFeedFilter.inheritsFrom (KalturaBaseSyndicationFeedBaseFilter);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaBaseSyndicationFeedListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaBaseSyndicationFeedListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	totalEntryCount	int		the total count of entries that should appear in the feed without flavor filtering.
 * @param	actualEntryCount	int		count of entries that will appear in the feed (including all relevant filters).
 * @param	requireTranscodingCount	int		count of entries that requires transcoding in order to be included in feed.
 */
function KalturaSyndicationFeedEntryCount(){
	this.totalEntryCount = null;
	this.actualEntryCount = null;
	this.requireTranscodingCount = null;
}
KalturaSyndicationFeedEntryCount.inheritsFrom (KalturaObjectBase);


/**
 * @param	thumbParamsId	int		The Flavor Params used to create this Flavor Asset
 *	.
 * @param	width	int		The width of the Flavor Asset 
 *	 (readOnly).
 * @param	height	int		The height of the Flavor Asset
 *	 (readOnly).
 */
function KalturaThumbAsset(){
	this.thumbParamsId = null;
	this.width = null;
	this.height = null;
}
KalturaThumbAsset.inheritsFrom (KalturaAsset);


/**
 * @param	cropType	int		.
 * @param	quality	int		.
 * @param	cropX	int		.
 * @param	cropY	int		.
 * @param	cropWidth	int		.
 * @param	cropHeight	int		.
 * @param	videoOffset	int		.
 * @param	width	int		.
 * @param	height	int		.
 * @param	scaleWidth	float		.
 * @param	scaleHeight	float		.
 * @param	backgroundColor	string		Hexadecimal value.
 * @param	sourceParamsId	int		Id of the flavor params or the thumbnail params to be used as source for the thumbnail creation.
 */
function KalturaThumbParams(){
	this.cropType = null;
	this.quality = null;
	this.cropX = null;
	this.cropY = null;
	this.cropWidth = null;
	this.cropHeight = null;
	this.videoOffset = null;
	this.width = null;
	this.height = null;
	this.scaleWidth = null;
	this.scaleHeight = null;
	this.backgroundColor = null;
	this.sourceParamsId = null;
}
KalturaThumbParams.inheritsFrom (KalturaAssetParams);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaThumbAssetListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaThumbAssetListResponse.inheritsFrom (KalturaObjectBase);


/**
 */
function KalturaThumbParamsBaseFilter(){
}
KalturaThumbParamsBaseFilter.inheritsFrom (KalturaAssetParamsFilter);


/**
 */
function KalturaThumbParamsFilter(){
}
KalturaThumbParamsFilter.inheritsFrom (KalturaThumbParamsBaseFilter);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaThumbParamsListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaThumbParamsListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		 (readOnly).
 * @param	name	string		Name of the uiConf, this is not a primary key.
 * @param	description	string		.
 * @param	partnerId	int		 (readOnly).
 * @param	objType	int		.
 * @param	objTypeAsString	string		 (readOnly).
 * @param	width	int		.
 * @param	height	int		.
 * @param	htmlParams	string		.
 * @param	swfUrl	string		.
 * @param	confFilePath	string		 (readOnly).
 * @param	confFile	string		.
 * @param	confFileFeatures	string		.
 * @param	confVars	string		.
 * @param	useCdn	bool		.
 * @param	tags	string		.
 * @param	swfUrlVersion	string		.
 * @param	createdAt	int		Entry creation date as Unix timestamp (In seconds) (readOnly).
 * @param	updatedAt	int		Entry creation date as Unix timestamp (In seconds) (readOnly).
 * @param	creationMode	int		.
 */
function KalturaUiConf(){
	this.id = null;
	this.name = null;
	this.description = null;
	this.partnerId = null;
	this.objType = null;
	this.objTypeAsString = null;
	this.width = null;
	this.height = null;
	this.htmlParams = null;
	this.swfUrl = null;
	this.confFilePath = null;
	this.confFile = null;
	this.confFileFeatures = null;
	this.confVars = null;
	this.useCdn = null;
	this.tags = null;
	this.swfUrlVersion = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.creationMode = null;
}
KalturaUiConf.inheritsFrom (KalturaObjectBase);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	nameLike	string		.
 * @param	partnerIdEqual	int		.
 * @param	partnerIdIn	string		.
 * @param	objTypeEqual	int		.
 * @param	tagsMultiLikeOr	string		.
 * @param	tagsMultiLikeAnd	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	creationModeEqual	int		.
 * @param	creationModeIn	string		.
 */
function KalturaUiConfBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.nameLike = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.objTypeEqual = null;
	this.tagsMultiLikeOr = null;
	this.tagsMultiLikeAnd = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.creationModeEqual = null;
	this.creationModeIn = null;
}
KalturaUiConfBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaUiConfFilter(){
}
KalturaUiConfFilter.inheritsFrom (KalturaUiConfBaseFilter);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaUiConfListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaUiConfListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	uploadTokenId	string		.
 * @param	fileSize	int		.
 * @param	errorCode	int		.
 * @param	errorDescription	string		.
 */
function KalturaUploadResponse(){
	this.uploadTokenId = null;
	this.fileSize = null;
	this.errorCode = null;
	this.errorDescription = null;
}
KalturaUploadResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	string		Upload token unique ID (readOnly).
 * @param	partnerId	int		Partner ID of the upload token (readOnly).
 * @param	userId	string		User id for the upload token (readOnly).
 * @param	status	int		Status of the upload token (readOnly).
 * @param	fileName	string		Name of the file for the upload token, can be empty when the upload token is created and will be updated internally after the file is uploaded (insertOnly).
 * @param	fileSize	float		File size in bytes, can be empty when the upload token is created and will be updated internally after the file is uploaded (insertOnly).
 * @param	uploadedFileSize	float		Uploaded file size in bytes, can be used to identify how many bytes were uploaded before resuming (readOnly).
 * @param	createdAt	int		Creation date as Unix timestamp (In seconds) (readOnly).
 * @param	updatedAt	int		Last update date as Unix timestamp (In seconds) (readOnly).
 */
function KalturaUploadToken(){
	this.id = null;
	this.partnerId = null;
	this.userId = null;
	this.status = null;
	this.fileName = null;
	this.fileSize = null;
	this.uploadedFileSize = null;
	this.createdAt = null;
	this.updatedAt = null;
}
KalturaUploadToken.inheritsFrom (KalturaObjectBase);


/**
 * @param	idEqual	string		.
 * @param	idIn	string		.
 * @param	userIdEqual	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 */
function KalturaUploadTokenBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.userIdEqual = null;
	this.statusEqual = null;
	this.statusIn = null;
}
KalturaUploadTokenBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaUploadTokenFilter(){
}
KalturaUploadTokenFilter.inheritsFrom (KalturaUploadTokenBaseFilter);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaUploadTokenListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaUploadTokenListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		 (readOnly).
 * @param	name	string		.
 * @param	description	string		.
 * @param	status	int		.
 * @param	partnerId	int		 (readOnly).
 * @param	permissionNames	string		.
 * @param	tags	string		.
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 */
function KalturaUserRole(){
	this.id = null;
	this.name = null;
	this.description = null;
	this.status = null;
	this.partnerId = null;
	this.permissionNames = null;
	this.tags = null;
	this.createdAt = null;
	this.updatedAt = null;
}
KalturaUserRole.inheritsFrom (KalturaObjectBase);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	nameEqual	string		.
 * @param	nameIn	string		.
 * @param	descriptionLike	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	partnerIdEqual	int		.
 * @param	partnerIdIn	string		.
 * @param	tagsMultiLikeOr	string		.
 * @param	tagsMultiLikeAnd	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 */
function KalturaUserRoleBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.nameEqual = null;
	this.nameIn = null;
	this.descriptionLike = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.tagsMultiLikeOr = null;
	this.tagsMultiLikeAnd = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
}
KalturaUserRoleBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaUserRoleFilter(){
}
KalturaUserRoleFilter.inheritsFrom (KalturaUserRoleBaseFilter);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaUserRoleListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaUserRoleListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	partnerIdEqual	int		.
 * @param	screenNameLike	string		.
 * @param	screenNameStartsWith	string		.
 * @param	emailLike	string		.
 * @param	emailStartsWith	string		.
 * @param	tagsMultiLikeOr	string		.
 * @param	tagsMultiLikeAnd	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	isAdminEqual	bool		.
 */
function KalturaUserBaseFilter(){
	this.partnerIdEqual = null;
	this.screenNameLike = null;
	this.screenNameStartsWith = null;
	this.emailLike = null;
	this.emailStartsWith = null;
	this.tagsMultiLikeOr = null;
	this.tagsMultiLikeAnd = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.isAdminEqual = null;
}
KalturaUserBaseFilter.inheritsFrom (KalturaFilter);


/**
 * @param	idEqual	string		.
 * @param	idIn	string		.
 * @param	loginEnabledEqual	bool		.
 */
function KalturaUserFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.loginEnabledEqual = null;
}
KalturaUserFilter.inheritsFrom (KalturaUserBaseFilter);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaUserListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaUserListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	string		 (readOnly).
 * @param	sourceWidgetId	string		.
 * @param	rootWidgetId	string		 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	entryId	string		.
 * @param	uiConfId	int		.
 * @param	securityType	int		.
 * @param	securityPolicy	int		.
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 * @param	partnerData	string		Can be used to store various partner related data as a string .
 * @param	widgetHTML	string		 (readOnly).
 */
function KalturaWidget(){
	this.id = null;
	this.sourceWidgetId = null;
	this.rootWidgetId = null;
	this.partnerId = null;
	this.entryId = null;
	this.uiConfId = null;
	this.securityType = null;
	this.securityPolicy = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.partnerData = null;
	this.widgetHTML = null;
}
KalturaWidget.inheritsFrom (KalturaObjectBase);


/**
 * @param	idEqual	string		.
 * @param	idIn	string		.
 * @param	sourceWidgetIdEqual	string		.
 * @param	rootWidgetIdEqual	string		.
 * @param	partnerIdEqual	int		.
 * @param	entryIdEqual	string		.
 * @param	uiConfIdEqual	int		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	partnerDataLike	string		.
 */
function KalturaWidgetBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.sourceWidgetIdEqual = null;
	this.rootWidgetIdEqual = null;
	this.partnerIdEqual = null;
	this.entryIdEqual = null;
	this.uiConfIdEqual = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.partnerDataLike = null;
}
KalturaWidgetBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaWidgetFilter(){
}
KalturaWidgetFilter.inheritsFrom (KalturaWidgetBaseFilter);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaWidgetListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaWidgetListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	partnerIdEqual	int		.
 * @param	metadataProfileIdEqual	int		.
 * @param	metadataProfileVersionEqual	int		.
 * @param	metadataProfileVersionGreaterThanOrEqual	int		.
 * @param	metadataProfileVersionLessThanOrEqual	int		.
 * @param	metadataObjectTypeEqual	int		.
 * @param	objectIdEqual	string		.
 * @param	objectIdIn	string		.
 * @param	versionEqual	int		.
 * @param	versionGreaterThanOrEqual	int		.
 * @param	versionLessThanOrEqual	int		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 */
function KalturaMetadataBaseFilter(){
	this.partnerIdEqual = null;
	this.metadataProfileIdEqual = null;
	this.metadataProfileVersionEqual = null;
	this.metadataProfileVersionGreaterThanOrEqual = null;
	this.metadataProfileVersionLessThanOrEqual = null;
	this.metadataObjectTypeEqual = null;
	this.objectIdEqual = null;
	this.objectIdIn = null;
	this.versionEqual = null;
	this.versionGreaterThanOrEqual = null;
	this.versionLessThanOrEqual = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.statusEqual = null;
	this.statusIn = null;
}
KalturaMetadataBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaMetadataFilter(){
}
KalturaMetadataFilter.inheritsFrom (KalturaMetadataBaseFilter);


/**
 * @param	id	int		 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	metadataProfileId	int		 (readOnly).
 * @param	metadataProfileVersion	int		 (readOnly).
 * @param	metadataObjectType	int		 (readOnly).
 * @param	objectId	string		 (readOnly).
 * @param	version	int		 (readOnly).
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 * @param	status	int		 (readOnly).
 * @param	xml	string		 (readOnly).
 */
function KalturaMetadata(){
	this.id = null;
	this.partnerId = null;
	this.metadataProfileId = null;
	this.metadataProfileVersion = null;
	this.metadataObjectType = null;
	this.objectId = null;
	this.version = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.status = null;
	this.xml = null;
}
KalturaMetadata.inheritsFrom (KalturaObjectBase);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaMetadataListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaMetadataListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	idEqual	int		.
 * @param	partnerIdEqual	int		.
 * @param	metadataObjectTypeEqual	int		.
 * @param	versionEqual	int		.
 * @param	nameEqual	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 */
function KalturaMetadataProfileBaseFilter(){
	this.idEqual = null;
	this.partnerIdEqual = null;
	this.metadataObjectTypeEqual = null;
	this.versionEqual = null;
	this.nameEqual = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.statusEqual = null;
	this.statusIn = null;
}
KalturaMetadataProfileBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaMetadataProfileFilter(){
}
KalturaMetadataProfileFilter.inheritsFrom (KalturaMetadataProfileBaseFilter);


/**
 * @param	id	int		 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	metadataObjectType	int		.
 * @param	version	int		 (readOnly).
 * @param	name	string		.
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 * @param	status	int		 (readOnly).
 * @param	xsd	string		 (readOnly).
 * @param	views	string		 (readOnly).
 */
function KalturaMetadataProfile(){
	this.id = null;
	this.partnerId = null;
	this.metadataObjectType = null;
	this.version = null;
	this.name = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.status = null;
	this.xsd = null;
	this.views = null;
}
KalturaMetadataProfile.inheritsFrom (KalturaObjectBase);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaMetadataProfileListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaMetadataProfileListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		 (readOnly).
 * @param	xPath	string		 (readOnly).
 * @param	key	string		 (readOnly).
 * @param	label	string		 (readOnly).
 */
function KalturaMetadataProfileField(){
	this.id = null;
	this.xPath = null;
	this.key = null;
	this.label = null;
}
KalturaMetadataProfileField.inheritsFrom (KalturaObjectBase);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaMetadataProfileFieldListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaMetadataProfileFieldListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	nameLike	string		.
 * @param	nameMultiLikeOr	string		.
 * @param	nameMultiLikeAnd	string		.
 * @param	nameEqual	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	partnerNameDescriptionWebsiteAdminNameAdminEmailLike	string		.
 */
function KalturaPartnerBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.nameLike = null;
	this.nameMultiLikeOr = null;
	this.nameMultiLikeAnd = null;
	this.nameEqual = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.partnerNameDescriptionWebsiteAdminNameAdminEmailLike = null;
}
KalturaPartnerBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaPartnerFilter(){
}
KalturaPartnerFilter.inheritsFrom (KalturaPartnerBaseFilter);


/**
 * @param	id	int		 (readOnly).
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	name	string		.
 * @param	desciption	string		.
 * @param	status	int		.
 * @param	protocol	int		.
 * @param	storageUrl	string		.
 * @param	storageBaseDir	string		.
 * @param	storageUsername	string		.
 * @param	storagePassword	string		.
 * @param	storageFtpPassiveMode	bool		.
 * @param	deliveryHttpBaseUrl	string		.
 * @param	deliveryRmpBaseUrl	string		.
 * @param	deliveryIisBaseUrl	string		.
 * @param	minFileSize	int		.
 * @param	maxFileSize	int		.
 * @param	flavorParamsIds	string		.
 * @param	maxConcurrentConnections	int		.
 * @param	pathManagerClass	string		.
 * @param	urlManagerClass	string		.
 * @param	trigger	int		TODO - remove after events manager is implemented
 *	No need to create enum for temp field
 *	.
 */
function KalturaStorageProfile(){
	this.id = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.partnerId = null;
	this.name = null;
	this.desciption = null;
	this.status = null;
	this.protocol = null;
	this.storageUrl = null;
	this.storageBaseDir = null;
	this.storageUsername = null;
	this.storagePassword = null;
	this.storageFtpPassiveMode = null;
	this.deliveryHttpBaseUrl = null;
	this.deliveryRmpBaseUrl = null;
	this.deliveryIisBaseUrl = null;
	this.minFileSize = null;
	this.maxFileSize = null;
	this.flavorParamsIds = null;
	this.maxConcurrentConnections = null;
	this.pathManagerClass = null;
	this.urlManagerClass = null;
	this.trigger = null;
}
KalturaStorageProfile.inheritsFrom (KalturaObjectBase);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaStorageProfileListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaStorageProfileListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	fromDate	int		Date range from
 *	.
 * @param	toDate	int		Date range to
 *	.
 */
function KalturaSystemPartnerUsageFilter(){
	this.fromDate = null;
	this.toDate = null;
}
KalturaSystemPartnerUsageFilter.inheritsFrom (KalturaFilter);


/**
 * @param	partnerId	int		Partner ID
 *	.
 * @param	partnerName	string		Partner name
 *	.
 * @param	partnerStatus	int		Partner status
 *	.
 * @param	partnerPackage	int		Partner package
 *	.
 * @param	partnerCreatedAt	int		Partner creation date (Unix timestamp)
 *	.
 * @param	views	int		Number of player loads in the specific date range
 *	.
 * @param	plays	int		Number of plays in the specific date range
 *	.
 * @param	entriesCount	int		Number of new entries created during specific date range
 *	.
 * @param	totalEntriesCount	int		Total number of entries
 *	.
 * @param	videoEntriesCount	int		Number of new video entries created during specific date range
 *	.
 * @param	imageEntriesCount	int		Number of new image entries created during specific date range
 *	.
 * @param	audioEntriesCount	int		Number of new audio entries created during specific date range
 *	.
 * @param	mixEntriesCount	int		Number of new mix entries created during specific date range
 *	.
 * @param	bandwidth	float		The total bandwidth usage during the given date range (in MB)
 *	.
 * @param	totalStorage	float		The total storage consumption (in MB)
 *	.
 * @param	storage	float		The change in storage consumption (new uploads) during the given date range (in MB)
 *	.
 */
function KalturaSystemPartnerUsageItem(){
	this.partnerId = null;
	this.partnerName = null;
	this.partnerStatus = null;
	this.partnerPackage = null;
	this.partnerCreatedAt = null;
	this.views = null;
	this.plays = null;
	this.entriesCount = null;
	this.totalEntriesCount = null;
	this.videoEntriesCount = null;
	this.imageEntriesCount = null;
	this.audioEntriesCount = null;
	this.mixEntriesCount = null;
	this.bandwidth = null;
	this.totalStorage = null;
	this.storage = null;
}
KalturaSystemPartnerUsageItem.inheritsFrom (KalturaObjectBase);


/**
 * @param	objects	array		.
 * @param	totalCount	int		.
 */
function KalturaSystemPartnerUsageListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaSystemPartnerUsageListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaPartnerListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaPartnerListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	partnerName	string		.
 * @param	description	string		.
 * @param	adminName	string		.
 * @param	adminEmail	string		.
 * @param	host	string		.
 * @param	cdnHost	string		.
 * @param	maxBulkSize	int		.
 * @param	partnerPackage	int		.
 * @param	monitorUsage	int		.
 * @param	liveStreamEnabled	bool		.
 * @param	moderateContent	bool		.
 * @param	rtmpUrl	string		.
 * @param	storageDeleteFromKaltura	bool		.
 * @param	storageServePriority	int		.
 * @param	kmcVersion	int		.
 * @param	enableAnalyticsTab	bool		.
 * @param	enableSilverLight	bool		.
 * @param	enableVast	bool		.
 * @param	enable508Players	bool		.
 * @param	enableMetadata	bool		.
 * @param	enableContentDistribution	bool		.
 * @param	enableAuditTrail	bool		.
 * @param	enableAnnotation	bool		.
 * @param	enablePs2PermissionValidation	bool		.
 * @param	defThumbOffset	int		.
 * @param	adminLoginUsersQuota	int		.
 * @param	userSessionRoleId	int		.
 * @param	adminSessionRoleId	int		.
 * @param	alwaysAllowedPermissionNames	string		.
 */
function KalturaSystemPartnerConfiguration(){
	this.partnerName = null;
	this.description = null;
	this.adminName = null;
	this.adminEmail = null;
	this.host = null;
	this.cdnHost = null;
	this.maxBulkSize = null;
	this.partnerPackage = null;
	this.monitorUsage = null;
	this.liveStreamEnabled = null;
	this.moderateContent = null;
	this.rtmpUrl = null;
	this.storageDeleteFromKaltura = null;
	this.storageServePriority = null;
	this.kmcVersion = null;
	this.enableAnalyticsTab = null;
	this.enableSilverLight = null;
	this.enableVast = null;
	this.enable508Players = null;
	this.enableMetadata = null;
	this.enableContentDistribution = null;
	this.enableAuditTrail = null;
	this.enableAnnotation = null;
	this.enablePs2PermissionValidation = null;
	this.defThumbOffset = null;
	this.adminLoginUsersQuota = null;
	this.userSessionRoleId = null;
	this.adminSessionRoleId = null;
	this.alwaysAllowedPermissionNames = null;
}
KalturaSystemPartnerConfiguration.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		.
 * @param	name	string		.
 */
function KalturaSystemPartnerPackage(){
	this.id = null;
	this.name = null;
}
KalturaSystemPartnerPackage.inheritsFrom (KalturaObjectBase);


/**
 * @param	flavorParamsIdEqual	int		.
 * @param	flavorParamsVersionEqual	string		.
 * @param	flavorAssetIdEqual	string		.
 * @param	flavorAssetVersionEqual	string		.
 */
function KalturaFlavorParamsOutputBaseFilter(){
	this.flavorParamsIdEqual = null;
	this.flavorParamsVersionEqual = null;
	this.flavorAssetIdEqual = null;
	this.flavorAssetVersionEqual = null;
}
KalturaFlavorParamsOutputBaseFilter.inheritsFrom (KalturaFlavorParamsFilter);


/**
 */
function KalturaFlavorParamsOutputFilter(){
}
KalturaFlavorParamsOutputFilter.inheritsFrom (KalturaFlavorParamsOutputBaseFilter);


/**
 * @param	flavorParamsId	int		.
 * @param	commandLinesStr	string		.
 * @param	flavorParamsVersion	string		.
 * @param	flavorAssetId	string		.
 * @param	flavorAssetVersion	string		.
 * @param	readyBehavior	int		.
 */
function KalturaFlavorParamsOutput(){
	this.flavorParamsId = null;
	this.commandLinesStr = null;
	this.flavorParamsVersion = null;
	this.flavorAssetId = null;
	this.flavorAssetVersion = null;
	this.readyBehavior = null;
}
KalturaFlavorParamsOutput.inheritsFrom (KalturaFlavorParams);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaFlavorParamsOutputListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaFlavorParamsOutputListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	thumbParamsIdEqual	int		.
 * @param	thumbParamsVersionEqual	string		.
 * @param	thumbAssetIdEqual	string		.
 * @param	thumbAssetVersionEqual	string		.
 */
function KalturaThumbParamsOutputBaseFilter(){
	this.thumbParamsIdEqual = null;
	this.thumbParamsVersionEqual = null;
	this.thumbAssetIdEqual = null;
	this.thumbAssetVersionEqual = null;
}
KalturaThumbParamsOutputBaseFilter.inheritsFrom (KalturaThumbParamsFilter);


/**
 */
function KalturaThumbParamsOutputFilter(){
}
KalturaThumbParamsOutputFilter.inheritsFrom (KalturaThumbParamsOutputBaseFilter);


/**
 * @param	thumbParamsId	int		.
 * @param	thumbParamsVersion	string		.
 * @param	thumbAssetId	string		.
 * @param	thumbAssetVersion	string		.
 */
function KalturaThumbParamsOutput(){
	this.thumbParamsId = null;
	this.thumbParamsVersion = null;
	this.thumbAssetId = null;
	this.thumbAssetVersion = null;
}
KalturaThumbParamsOutput.inheritsFrom (KalturaThumbParams);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaThumbParamsOutputListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaThumbParamsOutputListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	flavorAssetIdEqual	string		.
 */
function KalturaMediaInfoBaseFilter(){
	this.flavorAssetIdEqual = null;
}
KalturaMediaInfoBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaMediaInfoFilter(){
}
KalturaMediaInfoFilter.inheritsFrom (KalturaMediaInfoBaseFilter);


/**
 * @param	id	int		The id of the media info
 *	 (readOnly).
 * @param	flavorAssetId	string		The id of the related flavor asset
 *	.
 * @param	fileSize	int		The file size
 *	.
 * @param	containerFormat	string		The container format
 *	.
 * @param	containerId	string		The container id
 *	.
 * @param	containerProfile	string		The container profile
 *	.
 * @param	containerDuration	int		The container duration
 *	.
 * @param	containerBitRate	int		The container bit rate
 *	.
 * @param	videoFormat	string		The video format
 *	.
 * @param	videoCodecId	string		The video codec id
 *	.
 * @param	videoDuration	int		The video duration
 *	.
 * @param	videoBitRate	int		The video bit rate
 *	.
 * @param	videoBitRateMode	int		The video bit rate mode
 *	.
 * @param	videoWidth	int		The video width
 *	.
 * @param	videoHeight	int		The video height
 *	.
 * @param	videoFrameRate	float		The video frame rate
 *	.
 * @param	videoDar	float		The video display aspect ratio (dar)
 *	.
 * @param	videoRotation	int		.
 * @param	audioFormat	string		The audio format
 *	.
 * @param	audioCodecId	string		The audio codec id
 *	.
 * @param	audioDuration	int		The audio duration
 *	.
 * @param	audioBitRate	int		The audio bit rate
 *	.
 * @param	audioBitRateMode	int		The audio bit rate mode
 *	.
 * @param	audioChannels	int		The number of audio channels
 *	.
 * @param	audioSamplingRate	int		The audio sampling rate
 *	.
 * @param	audioResolution	int		The audio resolution
 *	.
 * @param	writingLib	string		The writing library
 *	.
 * @param	rawData	string		The data as returned by the mediainfo command line
 *	.
 * @param	multiStreamInfo	string		.
 * @param	scanType	int		.
 * @param	multiStream	string		.
 */
function KalturaMediaInfo(){
	this.id = null;
	this.flavorAssetId = null;
	this.fileSize = null;
	this.containerFormat = null;
	this.containerId = null;
	this.containerProfile = null;
	this.containerDuration = null;
	this.containerBitRate = null;
	this.videoFormat = null;
	this.videoCodecId = null;
	this.videoDuration = null;
	this.videoBitRate = null;
	this.videoBitRateMode = null;
	this.videoWidth = null;
	this.videoHeight = null;
	this.videoFrameRate = null;
	this.videoDar = null;
	this.videoRotation = null;
	this.audioFormat = null;
	this.audioCodecId = null;
	this.audioDuration = null;
	this.audioBitRate = null;
	this.audioBitRateMode = null;
	this.audioChannels = null;
	this.audioSamplingRate = null;
	this.audioResolution = null;
	this.writingLib = null;
	this.rawData = null;
	this.multiStreamInfo = null;
	this.scanType = null;
	this.multiStream = null;
}
KalturaMediaInfo.inheritsFrom (KalturaObjectBase);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaMediaInfoListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaMediaInfoListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		.
 * @param	trackEventType	int		.
 * @param	psVersion	string		.
 * @param	context	string		.
 * @param	partnerId	int		.
 * @param	entryId	string		.
 * @param	hostName	string		.
 * @param	userId	string		.
 * @param	changedProperties	string		.
 * @param	paramStr1	string		.
 * @param	paramStr2	string		.
 * @param	paramStr3	string		.
 * @param	ks	string		.
 * @param	description	string		.
 * @param	createdAt	int		.
 * @param	updatedAt	int		.
 * @param	userIp	string		.
 */
function KalturaTrackEntry(){
	this.id = null;
	this.trackEventType = null;
	this.psVersion = null;
	this.context = null;
	this.partnerId = null;
	this.entryId = null;
	this.hostName = null;
	this.userId = null;
	this.changedProperties = null;
	this.paramStr1 = null;
	this.paramStr2 = null;
	this.paramStr3 = null;
	this.ks = null;
	this.description = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.userIp = null;
}
KalturaTrackEntry.inheritsFrom (KalturaObjectBase);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaTrackEntryListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaTrackEntryListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	partner_id	int		.
 * @param	valid_until	int		.
 * @param	partner_pattern	string		.
 * @param	type	int		.
 * @param	error	string		.
 * @param	rand	int		.
 * @param	user	string		.
 * @param	privileges	string		.
 */
function KalturaInternalToolsSession(){
	this.partner_id = null;
	this.valid_until = null;
	this.partner_pattern = null;
	this.type = null;
	this.error = null;
	this.rand = null;
	this.user = null;
	this.privileges = null;
}
KalturaInternalToolsSession.inheritsFrom (KalturaObjectBase);


/**
 * @param	idEqual	int		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	parsedAtGreaterThanOrEqual	int		.
 * @param	parsedAtLessThanOrEqual	int		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	auditObjectTypeEqual	string		.
 * @param	auditObjectTypeIn	string		.
 * @param	objectIdEqual	string		.
 * @param	objectIdIn	string		.
 * @param	relatedObjectIdEqual	string		.
 * @param	relatedObjectIdIn	string		.
 * @param	relatedObjectTypeEqual	string		.
 * @param	relatedObjectTypeIn	string		.
 * @param	entryIdEqual	string		.
 * @param	entryIdIn	string		.
 * @param	masterPartnerIdEqual	int		.
 * @param	masterPartnerIdIn	string		.
 * @param	partnerIdEqual	int		.
 * @param	partnerIdIn	string		.
 * @param	requestIdEqual	string		.
 * @param	requestIdIn	string		.
 * @param	userIdEqual	string		.
 * @param	userIdIn	string		.
 * @param	actionEqual	string		.
 * @param	actionIn	string		.
 * @param	ksEqual	string		.
 * @param	contextEqual	int		.
 * @param	contextIn	string		.
 * @param	entryPointEqual	string		.
 * @param	entryPointIn	string		.
 * @param	serverNameEqual	string		.
 * @param	serverNameIn	string		.
 * @param	ipAddressEqual	string		.
 * @param	ipAddressIn	string		.
 * @param	clientTagEqual	string		.
 */
function KalturaAuditTrailBaseFilter(){
	this.idEqual = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.parsedAtGreaterThanOrEqual = null;
	this.parsedAtLessThanOrEqual = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.auditObjectTypeEqual = null;
	this.auditObjectTypeIn = null;
	this.objectIdEqual = null;
	this.objectIdIn = null;
	this.relatedObjectIdEqual = null;
	this.relatedObjectIdIn = null;
	this.relatedObjectTypeEqual = null;
	this.relatedObjectTypeIn = null;
	this.entryIdEqual = null;
	this.entryIdIn = null;
	this.masterPartnerIdEqual = null;
	this.masterPartnerIdIn = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.requestIdEqual = null;
	this.requestIdIn = null;
	this.userIdEqual = null;
	this.userIdIn = null;
	this.actionEqual = null;
	this.actionIn = null;
	this.ksEqual = null;
	this.contextEqual = null;
	this.contextIn = null;
	this.entryPointEqual = null;
	this.entryPointIn = null;
	this.serverNameEqual = null;
	this.serverNameIn = null;
	this.ipAddressEqual = null;
	this.ipAddressIn = null;
	this.clientTagEqual = null;
}
KalturaAuditTrailBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaAuditTrailFilter(){
}
KalturaAuditTrailFilter.inheritsFrom (KalturaAuditTrailBaseFilter);


/**
 * @param	id	int		 (readOnly).
 * @param	createdAt	int		 (readOnly).
 * @param	parsedAt	int		Indicates when the data was parsed (readOnly).
 * @param	status	int		 (readOnly).
 * @param	auditObjectType	string		.
 * @param	objectId	string		.
 * @param	relatedObjectId	string		.
 * @param	relatedObjectType	string		.
 * @param	entryId	string		.
 * @param	masterPartnerId	int		 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	requestId	string		 (readOnly).
 * @param	userId	string		.
 * @param	action	string		.
 * @param	data	KalturaAuditTrailInfo		.
 * @param	ks	string		 (readOnly).
 * @param	context	int		 (readOnly).
 * @param	entryPoint	string		The API service and action that called and caused this audit (readOnly).
 * @param	serverName	string		 (readOnly).
 * @param	ipAddress	string		 (readOnly).
 * @param	userAgent	string		 (readOnly).
 * @param	clientTag	string		.
 * @param	description	string		.
 * @param	errorDescription	string		 (readOnly).
 */
function KalturaAuditTrail(){
	this.id = null;
	this.createdAt = null;
	this.parsedAt = null;
	this.status = null;
	this.auditObjectType = null;
	this.objectId = null;
	this.relatedObjectId = null;
	this.relatedObjectType = null;
	this.entryId = null;
	this.masterPartnerId = null;
	this.partnerId = null;
	this.requestId = null;
	this.userId = null;
	this.action = null;
	this.data = null;
	this.ks = null;
	this.context = null;
	this.entryPoint = null;
	this.serverName = null;
	this.ipAddress = null;
	this.userAgent = null;
	this.clientTag = null;
	this.description = null;
	this.errorDescription = null;
}
KalturaAuditTrail.inheritsFrom (KalturaObjectBase);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaAuditTrailListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaAuditTrailListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	partnerIdEqual	int		.
 * @param	partnerIdIn	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	engineTypeEqual	string		.
 * @param	engineTypeIn	string		.
 */
function KalturaVirusScanProfileBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.engineTypeEqual = null;
	this.engineTypeIn = null;
}
KalturaVirusScanProfileBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaVirusScanProfileFilter(){
}
KalturaVirusScanProfileFilter.inheritsFrom (KalturaVirusScanProfileBaseFilter);


/**
 * @param	id	int		 (readOnly).
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	name	string		.
 * @param	status	int		.
 * @param	engineType	string		.
 * @param	entryFilter	KalturaBaseEntryFilter		.
 * @param	actionIfInfected	int		.
 */
function KalturaVirusScanProfile(){
	this.id = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.partnerId = null;
	this.name = null;
	this.status = null;
	this.engineType = null;
	this.entryFilter = null;
	this.actionIfInfected = null;
}
KalturaVirusScanProfile.inheritsFrom (KalturaObjectBase);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaVirusScanProfileListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaVirusScanProfileListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 */
function KalturaDistributionProfileBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
}
KalturaDistributionProfileBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaDistributionProfileFilter(){
}
KalturaDistributionProfileFilter.inheritsFrom (KalturaDistributionProfileBaseFilter);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaDistributionProfileListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaDistributionProfileListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	action	int		.
 * @param	errorType	int		.
 * @param	description	string		.
 */
function KalturaDistributionValidationError(){
	this.action = null;
	this.errorType = null;
	this.description = null;
}
KalturaDistributionValidationError.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		Auto generated unique id
 *	 (readOnly).
 * @param	createdAt	int		Entry distribution creation date as Unix timestamp (In seconds)
 *	 (readOnly).
 * @param	updatedAt	int		Entry distribution last update date as Unix timestamp (In seconds)
 *	 (readOnly).
 * @param	submittedAt	int		Entry distribution submission date as Unix timestamp (In seconds)
 *	 (readOnly).
 * @param	entryId	string		 (insertOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	distributionProfileId	int		 (insertOnly).
 * @param	status	int		 (readOnly).
 * @param	dirtyStatus	int		 (readOnly).
 * @param	thumbAssetIds	string		Comma separated thumbnail asset ids.
 * @param	flavorAssetIds	string		Comma separated flavor asset ids.
 * @param	sunrise	int		Entry distribution publish time as Unix timestamp (In seconds)
 *	.
 * @param	sunset	int		Entry distribution un-publish time as Unix timestamp (In seconds)
 *	.
 * @param	remoteId	string		The id as returned from the distributed destination (readOnly).
 * @param	plays	int		The plays as retrieved from the remote destination reports (readOnly).
 * @param	views	int		The views as retrieved from the remote destination reports (readOnly).
 * @param	validationErrors	array		 (readOnly).
 * @param	errorType	int		 (readOnly).
 * @param	errorNumber	int		 (readOnly).
 * @param	errorDescription	string		 (readOnly).
 * @param	hasSubmitResultsLog	int		 (readOnly).
 * @param	hasSubmitSentDataLog	int		 (readOnly).
 * @param	hasUpdateResultsLog	int		 (readOnly).
 * @param	hasUpdateSentDataLog	int		 (readOnly).
 * @param	hasDeleteResultsLog	int		 (readOnly).
 * @param	hasDeleteSentDataLog	int		 (readOnly).
 */
function KalturaEntryDistribution(){
	this.id = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.submittedAt = null;
	this.entryId = null;
	this.partnerId = null;
	this.distributionProfileId = null;
	this.status = null;
	this.dirtyStatus = null;
	this.thumbAssetIds = null;
	this.flavorAssetIds = null;
	this.sunrise = null;
	this.sunset = null;
	this.remoteId = null;
	this.plays = null;
	this.views = null;
	this.validationErrors = null;
	this.errorType = null;
	this.errorNumber = null;
	this.errorDescription = null;
	this.hasSubmitResultsLog = null;
	this.hasSubmitSentDataLog = null;
	this.hasUpdateResultsLog = null;
	this.hasUpdateSentDataLog = null;
	this.hasDeleteResultsLog = null;
	this.hasDeleteSentDataLog = null;
}
KalturaEntryDistribution.inheritsFrom (KalturaObjectBase);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	submittedAtGreaterThanOrEqual	int		.
 * @param	submittedAtLessThanOrEqual	int		.
 * @param	entryIdEqual	string		.
 * @param	entryIdIn	string		.
 * @param	distributionProfileIdEqual	int		.
 * @param	distributionProfileIdIn	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	dirtyStatusEqual	int		.
 * @param	dirtyStatusIn	string		.
 * @param	sunriseGreaterThanOrEqual	int		.
 * @param	sunriseLessThanOrEqual	int		.
 * @param	sunsetGreaterThanOrEqual	int		.
 * @param	sunsetLessThanOrEqual	int		.
 */
function KalturaEntryDistributionBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.submittedAtGreaterThanOrEqual = null;
	this.submittedAtLessThanOrEqual = null;
	this.entryIdEqual = null;
	this.entryIdIn = null;
	this.distributionProfileIdEqual = null;
	this.distributionProfileIdIn = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.dirtyStatusEqual = null;
	this.dirtyStatusIn = null;
	this.sunriseGreaterThanOrEqual = null;
	this.sunriseLessThanOrEqual = null;
	this.sunsetGreaterThanOrEqual = null;
	this.sunsetLessThanOrEqual = null;
}
KalturaEntryDistributionBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaEntryDistributionFilter(){
}
KalturaEntryDistributionFilter.inheritsFrom (KalturaEntryDistributionBaseFilter);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaEntryDistributionListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaEntryDistributionListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	typeEqual	string		.
 * @param	typeIn	string		.
 */
function KalturaDistributionProviderBaseFilter(){
	this.typeEqual = null;
	this.typeIn = null;
}
KalturaDistributionProviderBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaDistributionProviderFilter(){
}
KalturaDistributionProviderFilter.inheritsFrom (KalturaDistributionProviderBaseFilter);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaDistributionProviderListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaDistributionProviderListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		Auto generated
 *	 (readOnly).
 * @param	createdAt	int		Generic distribution provider creation date as Unix timestamp (In seconds)
 *	 (readOnly).
 * @param	updatedAt	int		Generic distribution provider last update date as Unix timestamp (In seconds)
 *	 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	isDefault	bool		.
 * @param	status	int		 (readOnly).
 * @param	optionalFlavorParamsIds	string		.
 * @param	requiredFlavorParamsIds	string		.
 * @param	optionalThumbDimensions	array		.
 * @param	requiredThumbDimensions	array		.
 * @param	editableFields	string		.
 * @param	mandatoryFields	string		.
 */
function KalturaGenericDistributionProvider(){
	this.id = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.partnerId = null;
	this.isDefault = null;
	this.status = null;
	this.optionalFlavorParamsIds = null;
	this.requiredFlavorParamsIds = null;
	this.optionalThumbDimensions = null;
	this.requiredThumbDimensions = null;
	this.editableFields = null;
	this.mandatoryFields = null;
}
KalturaGenericDistributionProvider.inheritsFrom (KalturaDistributionProvider);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	partnerIdEqual	int		.
 * @param	partnerIdIn	string		.
 * @param	isDefaultEqual	bool		.
 * @param	isDefaultIn	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 */
function KalturaGenericDistributionProviderBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.isDefaultEqual = null;
	this.isDefaultIn = null;
	this.statusEqual = null;
	this.statusIn = null;
}
KalturaGenericDistributionProviderBaseFilter.inheritsFrom (KalturaDistributionProviderFilter);


/**
 */
function KalturaGenericDistributionProviderFilter(){
}
KalturaGenericDistributionProviderFilter.inheritsFrom (KalturaGenericDistributionProviderBaseFilter);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaGenericDistributionProviderListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaGenericDistributionProviderListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		Auto generated
 *	 (readOnly).
 * @param	createdAt	int		Generic distribution provider action creation date as Unix timestamp (In seconds)
 *	 (readOnly).
 * @param	updatedAt	int		Generic distribution provider action last update date as Unix timestamp (In seconds)
 *	 (readOnly).
 * @param	genericDistributionProviderId	int		 (insertOnly).
 * @param	action	int		 (insertOnly).
 * @param	status	int		 (readOnly).
 * @param	resultsParser	int		.
 * @param	protocol	int		.
 * @param	serverAddress	string		.
 * @param	remotePath	string		.
 * @param	remoteUsername	string		.
 * @param	remotePassword	string		.
 * @param	editableFields	string		.
 * @param	mandatoryFields	string		.
 * @param	mrssTransformer	string		 (readOnly).
 * @param	mrssValidator	string		 (readOnly).
 * @param	resultsTransformer	string		 (readOnly).
 */
function KalturaGenericDistributionProviderAction(){
	this.id = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.genericDistributionProviderId = null;
	this.action = null;
	this.status = null;
	this.resultsParser = null;
	this.protocol = null;
	this.serverAddress = null;
	this.remotePath = null;
	this.remoteUsername = null;
	this.remotePassword = null;
	this.editableFields = null;
	this.mandatoryFields = null;
	this.mrssTransformer = null;
	this.mrssValidator = null;
	this.resultsTransformer = null;
}
KalturaGenericDistributionProviderAction.inheritsFrom (KalturaObjectBase);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	genericDistributionProviderIdEqual	int		.
 * @param	genericDistributionProviderIdIn	string		.
 * @param	actionEqual	int		.
 * @param	actionIn	string		.
 */
function KalturaGenericDistributionProviderActionBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.genericDistributionProviderIdEqual = null;
	this.genericDistributionProviderIdIn = null;
	this.actionEqual = null;
	this.actionIn = null;
}
KalturaGenericDistributionProviderActionBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaGenericDistributionProviderActionFilter(){
}
KalturaGenericDistributionProviderActionFilter.inheritsFrom (KalturaGenericDistributionProviderActionBaseFilter);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaGenericDistributionProviderActionListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaGenericDistributionProviderActionListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	idEqual	string		.
 * @param	entryIdEqual	string		.
 * @param	parentIdEqual	string		.
 * @param	parentIdIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	userIdEqual	string		.
 * @param	userIdIn	string		.
 */
function KalturaAnnotationBaseFilter(){
	this.idEqual = null;
	this.entryIdEqual = null;
	this.parentIdEqual = null;
	this.parentIdIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.userIdEqual = null;
	this.userIdIn = null;
}
KalturaAnnotationBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaAnnotationFilter(){
}
KalturaAnnotationFilter.inheritsFrom (KalturaAnnotationBaseFilter);


/**
 * @param	id	string		 (readOnly).
 * @param	entryId	string		.
 * @param	partnerId	int		 (readOnly).
 * @param	parentId	string		.
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 * @param	text	string		.
 * @param	tags	string		.
 * @param	startTime	int		.
 * @param	endTime	int		.
 * @param	userId	string		 (readOnly).
 * @param	partnerData	string		.
 */
function KalturaAnnotation(){
	this.id = null;
	this.entryId = null;
	this.partnerId = null;
	this.parentId = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.text = null;
	this.tags = null;
	this.startTime = null;
	this.endTime = null;
	this.userId = null;
	this.partnerData = null;
}
KalturaAnnotation.inheritsFrom (KalturaObjectBase);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaAnnotationListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaAnnotationListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	expiresAtGreaterThanOrEqual	int		.
 * @param	expiresAtLessThanOrEqual	int		.
 * @param	partnerIdEqual	int		.
 * @param	partnerIdIn	string		.
 * @param	userIdEqual	string		.
 * @param	userIdIn	string		.
 * @param	systemNameEqual	string		.
 * @param	systemNameIn	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 */
function KalturaShortLinkBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.expiresAtGreaterThanOrEqual = null;
	this.expiresAtLessThanOrEqual = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.userIdEqual = null;
	this.userIdIn = null;
	this.systemNameEqual = null;
	this.systemNameIn = null;
	this.statusEqual = null;
	this.statusIn = null;
}
KalturaShortLinkBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaShortLinkFilter(){
}
KalturaShortLinkFilter.inheritsFrom (KalturaShortLinkBaseFilter);


/**
 * @param	id	int		 (readOnly).
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 * @param	expiresAt	int		.
 * @param	partnerId	int		 (readOnly).
 * @param	userId	string		.
 * @param	name	string		.
 * @param	systemName	string		.
 * @param	fullUrl	string		.
 * @param	status	int		.
 */
function KalturaShortLink(){
	this.id = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.expiresAt = null;
	this.partnerId = null;
	this.userId = null;
	this.name = null;
	this.systemName = null;
	this.fullUrl = null;
	this.status = null;
}
KalturaShortLink.inheritsFrom (KalturaObjectBase);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaShortLinkListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaShortLinkListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	field	string		.
 * @param	value	string		.
 */
function KalturaSearchCondition(){
	this.field = null;
	this.value = null;
}
KalturaSearchCondition.inheritsFrom (KalturaSearchItem);


/**
 * @param	comparison	int		.
 */
function KalturaSearchComparableCondition(){
	this.comparison = null;
}
KalturaSearchComparableCondition.inheritsFrom (KalturaSearchCondition);


/**
 * @param	countryRestrictionType	int		Country restriction type (Allow or deny)
 *	.
 * @param	countryList	string		Comma separated list of country codes to allow to deny 
 *	.
 */
function KalturaCountryRestriction(){
	this.countryRestrictionType = null;
	this.countryList = null;
}
KalturaCountryRestriction.inheritsFrom (KalturaBaseRestriction);


/**
 * @param	directoryRestrictionType	int		Kaltura directory restriction type
 *	.
 */
function KalturaDirectoryRestriction(){
	this.directoryRestrictionType = null;
}
KalturaDirectoryRestriction.inheritsFrom (KalturaBaseRestriction);


/**
 */
function KalturaSessionRestriction(){
}
KalturaSessionRestriction.inheritsFrom (KalturaBaseRestriction);


/**
 * @param	previewLength	int		The preview restriction length 
 *	.
 */
function KalturaPreviewRestriction(){
	this.previewLength = null;
}
KalturaPreviewRestriction.inheritsFrom (KalturaSessionRestriction);


/**
 * @param	siteRestrictionType	int		The site restriction type (allow or deny)
 *	.
 * @param	siteList	string		Comma separated list of sites (domains) to allow or deny
 *	.
 */
function KalturaSiteRestriction(){
	this.siteRestrictionType = null;
	this.siteList = null;
}
KalturaSiteRestriction.inheritsFrom (KalturaBaseRestriction);


/**
 * @param	idEqual	int		.
 * @param	idGreaterThanOrEqual	int		.
 * @param	partnerIdEqual	int		.
 * @param	partnerIdIn	string		.
 * @param	partnerIdNotIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	processorExpirationGreaterThanOrEqual	int		.
 * @param	processorExpirationLessThanOrEqual	int		.
 * @param	executionAttemptsGreaterThanOrEqual	int		.
 * @param	executionAttemptsLessThanOrEqual	int		.
 * @param	lockVersionGreaterThanOrEqual	int		.
 * @param	lockVersionLessThanOrEqual	int		.
 */
function KalturaBaseJobBaseFilter(){
	this.idEqual = null;
	this.idGreaterThanOrEqual = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.partnerIdNotIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.processorExpirationGreaterThanOrEqual = null;
	this.processorExpirationLessThanOrEqual = null;
	this.executionAttemptsGreaterThanOrEqual = null;
	this.executionAttemptsLessThanOrEqual = null;
	this.lockVersionGreaterThanOrEqual = null;
	this.lockVersionLessThanOrEqual = null;
}
KalturaBaseJobBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaBaseJobFilter(){
}
KalturaBaseJobFilter.inheritsFrom (KalturaBaseJobBaseFilter);


/**
 * @param	entryIdEqual	string		.
 * @param	jobTypeEqual	string		.
 * @param	jobTypeIn	string		.
 * @param	jobTypeNotIn	string		.
 * @param	jobSubTypeEqual	int		.
 * @param	jobSubTypeIn	string		.
 * @param	jobSubTypeNotIn	string		.
 * @param	onStressDivertToEqual	int		.
 * @param	onStressDivertToIn	string		.
 * @param	onStressDivertToNotIn	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	statusNotIn	string		.
 * @param	abortEqual	int		.
 * @param	checkAgainTimeoutGreaterThanOrEqual	int		.
 * @param	checkAgainTimeoutLessThanOrEqual	int		.
 * @param	progressGreaterThanOrEqual	int		.
 * @param	progressLessThanOrEqual	int		.
 * @param	updatesCountGreaterThanOrEqual	int		.
 * @param	updatesCountLessThanOrEqual	int		.
 * @param	priorityGreaterThanOrEqual	int		.
 * @param	priorityLessThanOrEqual	int		.
 * @param	priorityEqual	int		.
 * @param	priorityIn	string		.
 * @param	priorityNotIn	string		.
 * @param	twinJobIdEqual	int		.
 * @param	twinJobIdIn	string		.
 * @param	twinJobIdNotIn	string		.
 * @param	bulkJobIdEqual	int		.
 * @param	bulkJobIdIn	string		.
 * @param	bulkJobIdNotIn	string		.
 * @param	parentJobIdEqual	int		.
 * @param	parentJobIdIn	string		.
 * @param	parentJobIdNotIn	string		.
 * @param	rootJobIdEqual	int		.
 * @param	rootJobIdIn	string		.
 * @param	rootJobIdNotIn	string		.
 * @param	queueTimeGreaterThanOrEqual	int		.
 * @param	queueTimeLessThanOrEqual	int		.
 * @param	finishTimeGreaterThanOrEqual	int		.
 * @param	finishTimeLessThanOrEqual	int		.
 * @param	errTypeEqual	int		.
 * @param	errTypeIn	string		.
 * @param	errTypeNotIn	string		.
 * @param	errNumberEqual	int		.
 * @param	errNumberIn	string		.
 * @param	errNumberNotIn	string		.
 * @param	fileSizeLessThan	int		.
 * @param	fileSizeGreaterThan	int		.
 * @param	lastWorkerRemoteEqual	bool		.
 * @param	schedulerIdEqual	int		.
 * @param	schedulerIdIn	string		.
 * @param	schedulerIdNotIn	string		.
 * @param	workerIdEqual	int		.
 * @param	workerIdIn	string		.
 * @param	workerIdNotIn	string		.
 * @param	batchIndexEqual	int		.
 * @param	batchIndexIn	string		.
 * @param	batchIndexNotIn	string		.
 * @param	lastSchedulerIdEqual	int		.
 * @param	lastSchedulerIdIn	string		.
 * @param	lastSchedulerIdNotIn	string		.
 * @param	lastWorkerIdEqual	int		.
 * @param	lastWorkerIdIn	string		.
 * @param	lastWorkerIdNotIn	string		.
 * @param	dcEqual	int		.
 * @param	dcIn	string		.
 * @param	dcNotIn	string		.
 */
function KalturaBatchJobBaseFilter(){
	this.entryIdEqual = null;
	this.jobTypeEqual = null;
	this.jobTypeIn = null;
	this.jobTypeNotIn = null;
	this.jobSubTypeEqual = null;
	this.jobSubTypeIn = null;
	this.jobSubTypeNotIn = null;
	this.onStressDivertToEqual = null;
	this.onStressDivertToIn = null;
	this.onStressDivertToNotIn = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.statusNotIn = null;
	this.abortEqual = null;
	this.checkAgainTimeoutGreaterThanOrEqual = null;
	this.checkAgainTimeoutLessThanOrEqual = null;
	this.progressGreaterThanOrEqual = null;
	this.progressLessThanOrEqual = null;
	this.updatesCountGreaterThanOrEqual = null;
	this.updatesCountLessThanOrEqual = null;
	this.priorityGreaterThanOrEqual = null;
	this.priorityLessThanOrEqual = null;
	this.priorityEqual = null;
	this.priorityIn = null;
	this.priorityNotIn = null;
	this.twinJobIdEqual = null;
	this.twinJobIdIn = null;
	this.twinJobIdNotIn = null;
	this.bulkJobIdEqual = null;
	this.bulkJobIdIn = null;
	this.bulkJobIdNotIn = null;
	this.parentJobIdEqual = null;
	this.parentJobIdIn = null;
	this.parentJobIdNotIn = null;
	this.rootJobIdEqual = null;
	this.rootJobIdIn = null;
	this.rootJobIdNotIn = null;
	this.queueTimeGreaterThanOrEqual = null;
	this.queueTimeLessThanOrEqual = null;
	this.finishTimeGreaterThanOrEqual = null;
	this.finishTimeLessThanOrEqual = null;
	this.errTypeEqual = null;
	this.errTypeIn = null;
	this.errTypeNotIn = null;
	this.errNumberEqual = null;
	this.errNumberIn = null;
	this.errNumberNotIn = null;
	this.fileSizeLessThan = null;
	this.fileSizeGreaterThan = null;
	this.lastWorkerRemoteEqual = null;
	this.schedulerIdEqual = null;
	this.schedulerIdIn = null;
	this.schedulerIdNotIn = null;
	this.workerIdEqual = null;
	this.workerIdIn = null;
	this.workerIdNotIn = null;
	this.batchIndexEqual = null;
	this.batchIndexIn = null;
	this.batchIndexNotIn = null;
	this.lastSchedulerIdEqual = null;
	this.lastSchedulerIdIn = null;
	this.lastSchedulerIdNotIn = null;
	this.lastWorkerIdEqual = null;
	this.lastWorkerIdIn = null;
	this.lastWorkerIdNotIn = null;
	this.dcEqual = null;
	this.dcIn = null;
	this.dcNotIn = null;
}
KalturaBatchJobBaseFilter.inheritsFrom (KalturaBaseJobFilter);


/**
 */
function KalturaBatchJobFilter(){
}
KalturaBatchJobFilter.inheritsFrom (KalturaBatchJobBaseFilter);


/**
 * @param	jobTypeAndSubTypeIn	string		.
 */
function KalturaBatchJobFilterExt(){
	this.jobTypeAndSubTypeIn = null;
}
KalturaBatchJobFilterExt.inheritsFrom (KalturaBatchJobFilter);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	createdByIdEqual	int		.
 * @param	typeEqual	int		.
 * @param	typeIn	string		.
 * @param	targetTypeEqual	int		.
 * @param	targetTypeIn	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 */
function KalturaControlPanelCommandBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.createdByIdEqual = null;
	this.typeEqual = null;
	this.typeIn = null;
	this.targetTypeEqual = null;
	this.targetTypeIn = null;
	this.statusEqual = null;
	this.statusIn = null;
}
KalturaControlPanelCommandBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaControlPanelCommandFilter(){
}
KalturaControlPanelCommandFilter.inheritsFrom (KalturaControlPanelCommandBaseFilter);


/**
 */
function KalturaMailJobBaseFilter(){
}
KalturaMailJobBaseFilter.inheritsFrom (KalturaBaseJobFilter);


/**
 */
function KalturaMailJobFilter(){
}
KalturaMailJobFilter.inheritsFrom (KalturaMailJobBaseFilter);


/**
 */
function KalturaNotificationBaseFilter(){
}
KalturaNotificationBaseFilter.inheritsFrom (KalturaBaseJobFilter);


/**
 */
function KalturaNotificationFilter(){
}
KalturaNotificationFilter.inheritsFrom (KalturaNotificationBaseFilter);


/**
 * @param	assetParamsIdEqual	int		.
 * @param	assetParamsVersionEqual	string		.
 * @param	assetIdEqual	string		.
 * @param	assetVersionEqual	string		.
 */
function KalturaAssetParamsOutputBaseFilter(){
	this.assetParamsIdEqual = null;
	this.assetParamsVersionEqual = null;
	this.assetIdEqual = null;
	this.assetVersionEqual = null;
}
KalturaAssetParamsOutputBaseFilter.inheritsFrom (KalturaAssetParamsFilter);


/**
 */
function KalturaAssetParamsOutputFilter(){
}
KalturaAssetParamsOutputFilter.inheritsFrom (KalturaAssetParamsOutputBaseFilter);


/**
 */
function KalturaFlavorAssetBaseFilter(){
}
KalturaFlavorAssetBaseFilter.inheritsFrom (KalturaAssetFilter);


/**
 */
function KalturaFlavorAssetFilter(){
}
KalturaFlavorAssetFilter.inheritsFrom (KalturaFlavorAssetBaseFilter);


/**
 */
function KalturaMediaFlavorParamsBaseFilter(){
}
KalturaMediaFlavorParamsBaseFilter.inheritsFrom (KalturaFlavorParamsFilter);


/**
 */
function KalturaMediaFlavorParamsFilter(){
}
KalturaMediaFlavorParamsFilter.inheritsFrom (KalturaMediaFlavorParamsBaseFilter);


/**
 */
function KalturaMediaFlavorParamsOutputBaseFilter(){
}
KalturaMediaFlavorParamsOutputBaseFilter.inheritsFrom (KalturaFlavorParamsOutputFilter);


/**
 */
function KalturaMediaFlavorParamsOutputFilter(){
}
KalturaMediaFlavorParamsOutputFilter.inheritsFrom (KalturaMediaFlavorParamsOutputBaseFilter);


/**
 */
function KalturaThumbAssetBaseFilter(){
}
KalturaThumbAssetBaseFilter.inheritsFrom (KalturaAssetFilter);


/**
 */
function KalturaThumbAssetFilter(){
}
KalturaThumbAssetFilter.inheritsFrom (KalturaThumbAssetBaseFilter);


/**
 */
function KalturaLiveStreamAdminEntryBaseFilter(){
}
KalturaLiveStreamAdminEntryBaseFilter.inheritsFrom (KalturaLiveStreamEntryFilter);


/**
 */
function KalturaLiveStreamAdminEntryFilter(){
}
KalturaLiveStreamAdminEntryFilter.inheritsFrom (KalturaLiveStreamAdminEntryBaseFilter);


/**
 */
function KalturaAdminUserBaseFilter(){
}
KalturaAdminUserBaseFilter.inheritsFrom (KalturaUserFilter);


/**
 */
function KalturaAdminUserFilter(){
}
KalturaAdminUserFilter.inheritsFrom (KalturaAdminUserBaseFilter);


/**
 */
function KalturaGoogleVideoSyndicationFeedBaseFilter(){
}
KalturaGoogleVideoSyndicationFeedBaseFilter.inheritsFrom (KalturaBaseSyndicationFeedFilter);


/**
 */
function KalturaGoogleVideoSyndicationFeedFilter(){
}
KalturaGoogleVideoSyndicationFeedFilter.inheritsFrom (KalturaGoogleVideoSyndicationFeedBaseFilter);


/**
 */
function KalturaITunesSyndicationFeedBaseFilter(){
}
KalturaITunesSyndicationFeedBaseFilter.inheritsFrom (KalturaBaseSyndicationFeedFilter);


/**
 */
function KalturaITunesSyndicationFeedFilter(){
}
KalturaITunesSyndicationFeedFilter.inheritsFrom (KalturaITunesSyndicationFeedBaseFilter);


/**
 */
function KalturaTubeMogulSyndicationFeedBaseFilter(){
}
KalturaTubeMogulSyndicationFeedBaseFilter.inheritsFrom (KalturaBaseSyndicationFeedFilter);


/**
 */
function KalturaTubeMogulSyndicationFeedFilter(){
}
KalturaTubeMogulSyndicationFeedFilter.inheritsFrom (KalturaTubeMogulSyndicationFeedBaseFilter);


/**
 */
function KalturaYahooSyndicationFeedBaseFilter(){
}
KalturaYahooSyndicationFeedBaseFilter.inheritsFrom (KalturaBaseSyndicationFeedFilter);


/**
 */
function KalturaYahooSyndicationFeedFilter(){
}
KalturaYahooSyndicationFeedFilter.inheritsFrom (KalturaYahooSyndicationFeedBaseFilter);


/**
 */
function KalturaApiActionPermissionItemBaseFilter(){
}
KalturaApiActionPermissionItemBaseFilter.inheritsFrom (KalturaPermissionItemFilter);


/**
 */
function KalturaApiActionPermissionItemFilter(){
}
KalturaApiActionPermissionItemFilter.inheritsFrom (KalturaApiActionPermissionItemBaseFilter);


/**
 */
function KalturaApiParameterPermissionItemBaseFilter(){
}
KalturaApiParameterPermissionItemBaseFilter.inheritsFrom (KalturaPermissionItemFilter);


/**
 */
function KalturaApiParameterPermissionItemFilter(){
}
KalturaApiParameterPermissionItemFilter.inheritsFrom (KalturaApiParameterPermissionItemBaseFilter);


/**
 * @param	assetParamsId	int		.
 * @param	assetParamsVersion	string		.
 * @param	assetId	string		.
 * @param	assetVersion	string		.
 * @param	readyBehavior	int		.
 */
function KalturaAssetParamsOutput(){
	this.assetParamsId = null;
	this.assetParamsVersion = null;
	this.assetId = null;
	this.assetVersion = null;
	this.readyBehavior = null;
}
KalturaAssetParamsOutput.inheritsFrom (KalturaAssetParams);


/**
 */
function KalturaMediaFlavorParams(){
}
KalturaMediaFlavorParams.inheritsFrom (KalturaFlavorParams);


/**
 */
function KalturaMediaFlavorParamsOutput(){
}
KalturaMediaFlavorParamsOutput.inheritsFrom (KalturaFlavorParamsOutput);


/**
 * @param	service	string		.
 * @param	action	string		.
 */
function KalturaApiActionPermissionItem(){
	this.service = null;
	this.action = null;
}
KalturaApiActionPermissionItem.inheritsFrom (KalturaPermissionItem);


/**
 * @param	object	string		.
 * @param	parameter	string		.
 * @param	action	string		.
 */
function KalturaApiParameterPermissionItem(){
	this.object = null;
	this.parameter = null;
	this.action = null;
}
KalturaApiParameterPermissionItem.inheritsFrom (KalturaPermissionItem);


/**
 * @param	adultContent	string		.
 */
function KalturaGoogleVideoSyndicationFeed(){
	this.adultContent = null;
}
KalturaGoogleVideoSyndicationFeed.inheritsFrom (KalturaBaseSyndicationFeed);


/**
 * @param	feedDescription	string		feed description
 *	.
 * @param	language	string		feed language
 *	.
 * @param	feedLandingPage	string		feed landing page (i.e publisher website)
 *	.
 * @param	ownerName	string		author/publisher name
 *	.
 * @param	ownerEmail	string		publisher email
 *	.
 * @param	feedImageUrl	string		podcast thumbnail
 *	.
 * @param	category	string		 (readOnly).
 * @param	adultContent	string		.
 * @param	feedAuthor	string		.
 */
function KalturaITunesSyndicationFeed(){
	this.feedDescription = null;
	this.language = null;
	this.feedLandingPage = null;
	this.ownerName = null;
	this.ownerEmail = null;
	this.feedImageUrl = null;
	this.category = null;
	this.adultContent = null;
	this.feedAuthor = null;
}
KalturaITunesSyndicationFeed.inheritsFrom (KalturaBaseSyndicationFeed);


/**
 * @param	category	string		 (readOnly).
 */
function KalturaTubeMogulSyndicationFeed(){
	this.category = null;
}
KalturaTubeMogulSyndicationFeed.inheritsFrom (KalturaBaseSyndicationFeed);


/**
 * @param	category	string		 (readOnly).
 * @param	adultContent	string		.
 * @param	feedDescription	string		feed description
 *	.
 * @param	feedLandingPage	string		feed landing page (i.e publisher website)
 *	.
 */
function KalturaYahooSyndicationFeed(){
	this.category = null;
	this.adultContent = null;
	this.feedDescription = null;
	this.feedLandingPage = null;
}
KalturaYahooSyndicationFeed.inheritsFrom (KalturaBaseSyndicationFeed);


