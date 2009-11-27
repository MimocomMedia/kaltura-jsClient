/**
 * @param	password	string		 (readOnly).
 * @param	email	string		 (readOnly).
 * @param	screenName	string		.
 */
function KalturaAdminUser(){
	this.password = null;
	this.email = null;
	this.screenName = null;
}
KalturaAdminUser.prototype = new KalturaObjectBase();


/**
 * @param	id	string		Auto generated 10 characters alphanumeric string (readOnly).
 * @param	name	string		Entry name (Min 1 chars).
 * @param	description	string		Entry description.
 * @param	partnerId	int		 (readOnly).
 * @param	userId	string		The ID of the user who is the owner of this entry .
 * @param	tags	string		Entry tags.
 * @param	adminTags	string		Entry admin tags can be updated only by administrators.
 * @param	status	int		 (readOnly).
 * @param	type	int		The type of the entry, this is auto filled by the derived entry object (readOnly).
 * @param	createdAt	int		Entry creation date as Unix timestamp (In seconds) (readOnly).
 * @param	rank	float		Calculated rank (readOnly).
 * @param	totalRank	int		The total (sum) of all votes (readOnly).
 * @param	votes	int		Number of votes (readOnly).
 * @param	groupId	int		.
 * @param	partnerData	string		Can be used to store various partner related data as a string .
 * @param	downloadUrl	string		Download URL for the entry (readOnly).
 * @param	searchText	string		Indexed search text for full text search (readOnly).
 * @param	licenseType	int		License type used for this entry.
 * @param	version	int		Version of the entry data (readOnly).
 * @param	thumbnailUrl	string		Thumbnail URL (readOnly).
 */
function KalturaBaseEntry(){
	this.id = null;
	this.name = null;
	this.description = null;
	this.partnerId = null;
	this.userId = null;
	this.tags = null;
	this.adminTags = null;
	this.status = null;
	this.type = null;
	this.createdAt = null;
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
}
KalturaBaseEntry.prototype = new KalturaObjectBase();


/**
 * @param	idEqual	string		This filter should be in use for retrieving only a specific entry (identified by its entryId).
 * @param	idIn	string		This filter should be in use for retrieving few specific entries (string should include comma separated list of entryId strings).
 * @param	nameLike	string		This filter should be in use for retrieving specific entries while applying an SQL 'LIKE' pattern matching on entry names. It should include only one pattern for matching entry names against.
 * @param	nameMultiLikeOr	string		This filter should be in use for retrieving specific entries, while applying an SQL 'LIKE' pattern matching on entry names. It could include few (comma separated) patterns for matching entry names against, while applying an OR logic to retrieve entries that match at least one input pattern.
 * @param	nameMultiLikeAnd	string		This filter should be in use for retrieving specific entries, while applying an SQL 'LIKE' pattern matching on entry names. It could include few (comma separated) patterns for matching entry names against, while applying an AND logic to retrieve entries that match all input patterns.
 * @param	nameEqual	string		This filter should be in use for retrieving entries with a specific name.
 * @param	partnerIdEqual	int		This filter should be in use for retrieving only entries which were uploaded by/assigned to users of a specific Kaltura Partner (identified by Partner ID).
 * @param	partnerIdIn	string		This filter should be in use for retrieving only entries within Kaltura network which were uploaded by/assigned to users of few Kaltura Partners  (string should include comma separated list of PartnerIDs.
 * @param	userIdEqual	string		This filter parameter should be in use for retrieving only entries, uploaded by/assigned to a specific user (identified by user Id).
 * @param	tagsLike	string		This filter should be in use for retrieving specific entries while applying an SQL 'LIKE' pattern matching on entry tags. It should include only one pattern for matching entry tags against.
 * @param	tagsMultiLikeOr	string		This filter should be in use for retrieving specific entries, while applying an SQL 'LIKE' pattern matching on tags.  It could include few (comma separated) patterns for matching entry tags against, while applying an OR logic to retrieve entries that match at least one input pattern.
 * @param	tagsMultiLikeAnd	string		This filter should be in use for retrieving specific entries, while applying an SQL 'LIKE' pattern matching on tags.  It could include few (comma separated) patterns for matching entry tags against, while applying an AND logic to retrieve entries that match all input patterns.
 * @param	adminTagsLike	string		This filter should be in use for retrieving specific entries while applying an SQL 'LIKE' pattern matching on entry tags, set by an ADMIN user. It should include only one pattern for matching entry tags against.
 * @param	adminTagsMultiLikeOr	string		This filter should be in use for retrieving specific entries, while applying an SQL 'LIKE' pattern matching on tags, set by an ADMIN user.  It could include few (comma separated) patterns for matching entry tags against, while applying an OR logic to retrieve entries that match at least one input pattern.
 * @param	adminTagsMultiLikeAnd	string		This filter should be in use for retrieving specific entries, while applying an SQL 'LIKE' pattern matching on tags, set by an ADMIN user.  It could include few (comma separated) patterns for matching entry tags against, while applying an AND logic to retrieve entries that match all input patterns.
 * @param	statusEqual	int		This filter should be in use for retrieving only entries, at a specific {@link ?object=KalturaEntryStatus KalturaEntryStatus}.
 * @param	statusIn	string		This filter should be in use for retrieving only entries, at few specific {@link ?object=KalturaEntryStatus KalturaEntryStatus}.
 * @param	typeEqual	int		.
 * @param	typeIn	string		This filter should be in use for retrieving entries of few {@link ?object=KalturaEntryType KalturaEntryType} (string should include a comma separated list of {@link ?object=KalturaEntryType KalturaEntryType} enumerated parameters).
 * @param	createdAtGreaterThanOrEqual	int		This filter parameter should be in use for retrieving only entries which were created at Kaltura system after a specific time/date (standard timestamp format).
 * @param	createdAtLessThanOrEqual	int		This filter parameter should be in use for retrieving only entries which were created at Kaltura system before a specific time/date (standard timestamp format).
 * @param	groupIdEqual	int		.
 * @param	searchTextMatchAnd	string		This filter should be in use for retrieving specific entries while search match the input string within all of the following metadata attributes: name, description, tags, adminTags.
 * @param	searchTextMatchOr	string		This filter should be in use for retrieving specific entries while search match the input string within at least one of the following metadata attributes: name, description, tags, adminTags.
 * @param	tagsNameMultiLikeOr	string		.
 * @param	tagsAdminTagsMultiLikeOr	string		.
 * @param	tagsAdminTagsNameMultiLikeOr	string		.
 * @param	tagsNameMultiLikeAnd	string		.
 * @param	tagsAdminTagsMultiLikeAnd	string		.
 * @param	tagsAdminTagsNameMultiLikeAnd	string		.
 */
function KalturaBaseEntryFilter(){
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
	this.statusEqual = null;
	this.statusIn = null;
	this.typeEqual = null;
	this.typeIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.groupIdEqual = null;
	this.searchTextMatchAnd = null;
	this.searchTextMatchOr = null;
	this.tagsNameMultiLikeOr = null;
	this.tagsAdminTagsMultiLikeOr = null;
	this.tagsAdminTagsNameMultiLikeOr = null;
	this.tagsNameMultiLikeAnd = null;
	this.tagsAdminTagsMultiLikeAnd = null;
	this.tagsAdminTagsNameMultiLikeAnd = null;
}
KalturaBaseEntryFilter.prototype = new KalturaFilter();


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaBaseEntryListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaBaseEntryListResponse.prototype = new KalturaObjectBase();


/**
 */
function KalturaBaseEntryOrderBy(){
}
KalturaBaseEntryOrderBy.prototype = new KalturaObjectBase();


/**
 * @param	id	int		.
 * @param	uploadedBy	string		.
 * @param	uploadedOn	int		.
 * @param	numOfEntries	int		.
 * @param	status	int		.
 * @param	logFileUrl	string		.
 * @param	csvFileUrl	string		.
 */
function KalturaBulkUpload(){
	this.id = null;
	this.uploadedBy = null;
	this.uploadedOn = null;
	this.numOfEntries = null;
	this.status = null;
	this.logFileUrl = null;
	this.csvFileUrl = null;
}
KalturaBulkUpload.prototype = new KalturaObjectBase();


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaBulkUploadListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaBulkUploadListResponse.prototype = new KalturaObjectBase();


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
KalturaCEError.prototype = new KalturaObjectBase();


/**
 * @param	url	string		The URL where the notification should be sent to .
 * @param	data	string		The serialized notification data to send.
 */
function KalturaClientNotification(){
	this.url = null;
	this.data = null;
}
KalturaClientNotification.prototype = new KalturaObjectBase();


/**
 */
function KalturaCommercialUseType(){
}
KalturaCommercialUseType.prototype = new KalturaObjectBase();


/**
 * @param	id	int		 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	name	string		.
 * @param	profileType	string		.
 * @param	commercialTranscoder	bool		.
 * @param	width	int		.
 * @param	height	int		.
 * @param	aspectRatioType	int		.
 * @param	bypassFlv	bool		.
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 * @param	profileTypeSuffix	int		.
 */
function KalturaConversionProfile(){
	this.id = null;
	this.partnerId = null;
	this.name = null;
	this.profileType = null;
	this.commercialTranscoder = null;
	this.width = null;
	this.height = null;
	this.aspectRatioType = null;
	this.bypassFlv = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.profileTypeSuffix = null;
}
KalturaConversionProfile.prototype = new KalturaObjectBase();


/**
 * @param	dataContent	string		The data of the entry.
 */
function KalturaDataEntry(){
	this.dataContent = null;
}
KalturaDataEntry.prototype = new KalturaBaseEntry();


/**
 */
function KalturaDataEntryFilter(){
}
KalturaDataEntryFilter.prototype = new KalturaBaseEntryFilter();


/**
 */
function KalturaDataEntryOrderBy(){
}
KalturaDataEntryOrderBy.prototype = new KalturaBaseEntryOrderBy();


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaDataListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaDataListResponse.prototype = new KalturaObjectBase();


/**
 * @param	orderBy	string		.
 */
function KalturaFilter(){
	this.orderBy = null;
}
KalturaFilter.prototype = new KalturaObjectBase();


/**
 * @param	pageSize	int		The number of objects to retrieve. Maximum page size is 50..
 * @param	pageIndex	int		The page number for which {pageSize} of objects should be retrieved..
 */
function KalturaFilterPager(){
	this.pageSize = null;
	this.pageIndex = null;
}
KalturaFilterPager.prototype = new KalturaObjectBase();


/**
 * @param	mediaType	int		The media type of the entry (insertOnly).
 * @param	conversionQuality	string		Override the default conversion quality   (insertOnly).
 * @param	sourceType	int		The source type of the entry  (readOnly).
 * @param	searchProviderType	int		The search provider type used to import this entry (readOnly).
 * @param	searchProviderId	string		The ID of the media in the importing site (readOnly).
 * @param	creditUserName	string		The user name used for credits.
 * @param	creditUrl	string		The URL for credits.
 * @param	mediaDate	int		The media date extracted from EXIF data (For images) as Unix timestamp (In seconds) (readOnly).
 * @param	dataUrl	string		The URL used for playback. This is not the download URL. (readOnly).
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
}
KalturaMediaEntry.prototype = new KalturaPlayableEntry();


/**
 * @param	mediaTypeEqual	int		.
 * @param	mediaTypeIn	string		.
 * @param	mediaDateGreaterThanOrEqual	int		.
 * @param	mediaDateLessThanOrEqual	int		.
 */
function KalturaMediaEntryFilter(){
	this.mediaTypeEqual = null;
	this.mediaTypeIn = null;
	this.mediaDateGreaterThanOrEqual = null;
	this.mediaDateLessThanOrEqual = null;
}
KalturaMediaEntryFilter.prototype = new KalturaPlayableEntryFilter();


/**
 */
function KalturaMediaEntryOrderBy(){
}
KalturaMediaEntryOrderBy.prototype = new KalturaPlayableEntryOrderBy();


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaMediaListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaMediaListResponse.prototype = new KalturaObjectBase();


/**
 * @param	hasRealThumbnail	bool		Indicates whether the user has submited a real thumbnail to the mix (Not the one that was generated automaticaly) (readOnly).
 * @param	editorType	int		The editor type used to edit the metadata.
 * @param	dataContent	string		The xml data of the mix.
 */
function KalturaMixEntry(){
	this.hasRealThumbnail = null;
	this.editorType = null;
	this.dataContent = null;
}
KalturaMixEntry.prototype = new KalturaPlayableEntry();


/**
 */
function KalturaMixEntryFilter(){
}
KalturaMixEntryFilter.prototype = new KalturaPlayableEntryFilter();


/**
 */
function KalturaMixEntryOrderBy(){
}
KalturaMixEntryOrderBy.prototype = new KalturaPlayableEntryOrderBy();


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaMixListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaMixListResponse.prototype = new KalturaObjectBase();


/**
 * @param	id	int		Moderation flag id (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	userId	string		The user id that added the moderation flag (readOnly).
 * @param	objectType	int		The type of the moderation flag (entry or user) (readOnly).
 * @param	flaggedEntryId	string		If moderation flag is set for entry, this is the flagged entry id.
 * @param	flaggedUserId	string		If moderation flag is set for user, this is the flagged user id.
 * @param	status	int		The moderation flag status (readOnly).
 * @param	comments	string		The comment that was added to the flag.
 * @param	flagType	int		.
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 */
function KalturaModerationFlag(){
	this.id = null;
	this.partnerId = null;
	this.userId = null;
	this.objectType = null;
	this.flaggedEntryId = null;
	this.flaggedUserId = null;
	this.status = null;
	this.comments = null;
	this.flagType = null;
	this.createdAt = null;
	this.updatedAt = null;
}
KalturaModerationFlag.prototype = new KalturaObjectBase();


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaModerationFlagListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaModerationFlagListResponse.prototype = new KalturaObjectBase();


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
 * @param	commercialUse	KalturaCommercialUseType		.
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
 * @param	partnerPackage	int		readonly.
 * @param	secret	string		readonly.
 * @param	adminSecret	string		readonly.
 * @param	cmsPassword	string		 (readOnly).
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
}
KalturaPartner.prototype = new KalturaObjectBase();


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
KalturaPartnerUsage.prototype = new KalturaObjectBase();


/**
 * @param	plays	int		Number of plays (readOnly).
 * @param	views	int		Number of views (readOnly).
 * @param	width	int		The width in pixels (readOnly).
 * @param	height	int		The height in pixels (readOnly).
 * @param	duration	int		The duration in seconds (readOnly).
 */
function KalturaPlayableEntry(){
	this.plays = null;
	this.views = null;
	this.width = null;
	this.height = null;
	this.duration = null;
}
KalturaPlayableEntry.prototype = new KalturaBaseEntry();


/**
 */
function KalturaPlayableEntryFilter(){
}
KalturaPlayableEntryFilter.prototype = new KalturaBaseEntryFilter();


/**
 */
function KalturaPlayableEntryOrderBy(){
}
KalturaPlayableEntryOrderBy.prototype = new KalturaBaseEntryOrderBy();


/**
 * @param	playlistContent	string		Content of the playlist - 
 *	XML if the playlistType is dynamic 
 *	text if the playlistType is static 
 *	url if the playlistType is mRss .
 * @param	playlistType	int		Type of playlist  .
 * @param	plays	int		Number of plays (readOnly).
 * @param	views	int		Number of views (readOnly).
 * @param	duration	int		The duration in seconds (readOnly).
 */
function KalturaPlaylist(){
	this.playlistContent = null;
	this.playlistType = null;
	this.plays = null;
	this.views = null;
	this.duration = null;
}
KalturaPlaylist.prototype = new KalturaBaseEntry();


/**
 */
function KalturaPlaylistFilter(){
}
KalturaPlaylistFilter.prototype = new KalturaBaseEntryFilter();


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaPlaylistListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaPlaylistListResponse.prototype = new KalturaObjectBase();


/**
 */
function KalturaPlaylistOrderBy(){
}
KalturaPlaylistOrderBy.prototype = new KalturaBaseEntryOrderBy();


/**
 * @param	id	string		.
 * @param	data	string		.
 */
function KalturaReportGraph(){
	this.id = null;
	this.data = null;
}
KalturaReportGraph.prototype = new KalturaObjectBase();


/**
 * @param	fromDate	int		.
 * @param	toDate	int		.
 * @param	keywords	string		.
 * @param	searchInTags	bool		.
 * @param	searchInAdminTags	bool		.
 */
function KalturaReportInputFilter(){
	this.fromDate = null;
	this.toDate = null;
	this.keywords = null;
	this.searchInTags = null;
	this.searchInAdminTags = null;
}
KalturaReportInputFilter.prototype = new KalturaObjectBase();


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
KalturaReportTable.prototype = new KalturaObjectBase();


/**
 * @param	header	string		.
 * @param	data	string		.
 */
function KalturaReportTotal(){
	this.header = null;
	this.data = null;
}
KalturaReportTotal.prototype = new KalturaObjectBase();


/**
 * @param	keyWords	string		.
 * @param	searchSource	int		.
 * @param	mediaType	int		.
 * @param	extraData	string		Use this field to pass dynamic data for searching
 *	For example - if you set this field to "mymovies_$partner_id"
 *	The $partner_id will be automatically replcaed with your real partner Id.
 */
function KalturaSearch(){
	this.keyWords = null;
	this.searchSource = null;
	this.mediaType = null;
	this.extraData = null;
}
KalturaSearch.prototype = new KalturaObjectBase();


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
KalturaSearchResult.prototype = new KalturaSearch();


/**
 * @param	objects	array		 (readOnly).
 * @param	needMediaInfo	bool		 (readOnly).
 */
function KalturaSearchResultResponse(){
	this.objects = null;
	this.needMediaInfo = null;
}
KalturaSearchResultResponse.prototype = new KalturaObjectBase();


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
KalturaStartWidgetSessionResponse.prototype = new KalturaObjectBase();


/**
 * @param	clientVer	string		.
 * @param	eventType	int		.
 * @param	eventTimestamp	float		the client's timestamp of this event.
 * @param	sessionId	string		a unique string generated by the client that will represent the client-side session: the primary component will pass it on to other components that sprout from it.
 * @param	partnerId	int		.
 * @param	entryId	string		.
 * @param	uniqueViewer	string		the UV cookie - creates in the operational system and should be passed on ofr every event .
 * @param	widgetId	string		.
 * @param	uiconfId	int		.
 * @param	userId	string		the partner's user id .
 * @param	currentPoint	int		the timestamp along the video when the event happend .
 * @param	duration	int		the duration of the video in milliseconds - will make it much faster than quering the db for each entry .
 * @param	userIp	string		will be retrieved from the request of the user  (readOnly).
 * @param	processDuration	int		the time in milliseconds the event took.
 * @param	controlId	string		the id of the GUI control - will be used in the future to better understand what the user clicked.
 * @param	seek	bool		true if the user ever used seek in this session .
 * @param	newPoint	int		timestamp of the new point on the timeline of the video after the user seeks .
 * @param	referrer	string		the referrer of the client.
 * @param	isFirstInSession	bool		will indicate if the event is thrown for the first video in the session.
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
KalturaStatsEvent.prototype = new KalturaObjectBase();


/**
 * @param	id	string		 (readOnly).
 * @param	name	string		Name of the uiConf, this is not a primary key.
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
 * @param	createdAt	int		Entry creation date as Unix timestamp (In seconds) (readOnly).
 * @param	updatedAt	int		Entry creation date as Unix timestamp (In seconds) (readOnly).
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
KalturaUiConf.prototype = new KalturaObjectBase();


/**
 * @param	idEqual	string		.
 * @param	idIn	string		.
 * @param	nameLike	string		.
 * @param	tagsMultiLikeOr	string		.
 * @param	tagsMultiLikeAnd	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 */
function KalturaUiConfFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.nameLike = null;
	this.tagsMultiLikeOr = null;
	this.tagsMultiLikeAnd = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
}
KalturaUiConfFilter.prototype = new KalturaFilter();


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaUiConfListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaUiConfListResponse.prototype = new KalturaObjectBase();


/**
 */
function KalturaUiConfOrderBy(){
}
KalturaUiConfOrderBy.prototype = new KalturaObjectBase();


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
 * @param	adminTags	string		Admin tags can be updated only by using an admin session.
 * @param	gender	int		.
 * @param	status	int		.
 * @param	createdAt	int		Creation date as Unix timestamp (In seconds) (readOnly).
 * @param	updatedAt	int		Last update date as Unix timestamp (In seconds) (readOnly).
 * @param	partnerData	string		Can be used to store various partner related data as a string .
 * @param	indexedPartnerDataInt	int		.
 * @param	indexedPartnerDataString	string		.
 * @param	storageSize	int		 (readOnly).
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
}
KalturaUser.prototype = new KalturaObjectBase();


/**
 * @param	idEqual	string		.
 * @param	idIn	string		.
 * @param	partnerIdEqual	int		.
 * @param	screenNameLike	string		.
 * @param	screenNameStartsWith	string		.
 * @param	emailLike	string		.
 * @param	emailStartsWith	string		.
 * @param	tagsMultiLikeOr	string		.
 * @param	tagsMultiLikeAnd	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 */
function KalturaUserFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.partnerIdEqual = null;
	this.screenNameLike = null;
	this.screenNameStartsWith = null;
	this.emailLike = null;
	this.emailStartsWith = null;
	this.tagsMultiLikeOr = null;
	this.tagsMultiLikeAnd = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
}
KalturaUserFilter.prototype = new KalturaFilter();


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaUserListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaUserListResponse.prototype = new KalturaObjectBase();


/**
 */
function KalturaUserOrderBy(){
}
KalturaUserOrderBy.prototype = new KalturaObjectBase();


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
 * @param	partnerData	string		Can be used to store various partner related data as a string .
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
KalturaWidget.prototype = new KalturaObjectBase();


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
function KalturaWidgetFilter(){
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
KalturaWidgetFilter.prototype = new KalturaFilter();


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaWidgetListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaWidgetListResponse.prototype = new KalturaObjectBase();


/**
 */
function KalturaWidgetOrderBy(){
}
KalturaWidgetOrderBy.prototype = new KalturaObjectBase();


