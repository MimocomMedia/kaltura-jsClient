/**
 *Class definition for the Kaltura service: media.
 * The available service actions:
 * @action	addFromUrl	Adds new media entry by importing an HTTP or FTP URL.
 *	The entry will be queued for import and then for conversion..
 * @action	addFromSearchResult	Adds new media entry by importing the media file from a search provider. 
 *	This action should be used with the search service result..
 * @action	addFromUploadedFile	Add new entry after the specific media file was uploaded and the upload token id exists.
 * @action	addFromRecordedWebcam	Add new entry after the file was recored on the server and the token id exists.
 * @action	get	Get media entry by ID..
 * @action	update	Update media entry. Only the properties that were set will be updated..
 * @action	delete	Delete a media entry..
 * @action	list	List media entries by filter with paging support..
 * @action	upload	Upload a media file to Kaltura, then the file can be used to create a media entry. .
 * @action	updateThumbnail	Update media entry thumbnail by a specified time offset (In seconds).
 * @action	updateThumbnailJpeg	Update media entry thumbnail using a raw jpeg file.
 * @action	requestConversion	Request a new conversion job, this can be used to convert the media entry to a different format.
 * @action	flag	Flag inappropriate media entry for moderation.
 * @action	reject	Reject the media entry and mark the pending flags (if any) as moderated (this will make the entry non playable).
 * @action	approve	Approve the media entry and mark the pending flags (if any) as moderated (this will make the entry playable) .
 * @action	listFlags	List all pending flags for the media entry.
 * @action	anonymousRank	Anonymously rank a media entry, no validation is done on duplicate rankings.
*/
function KalturaMediaService(client){
	this.init(client);
}
KalturaMediaService.inheritsFrom (KalturaServiceBase);
/**
 * Adds new media entry by importing an HTTP or FTP URL.
 *	The entry will be queued for import and then for conversion..
 * @param	mediaEntry	KalturaMediaEntry		Media entry metadata   (optional).
 * @param	url	string		An HTTP or FTP URL (optional).
 * @return	KalturaMediaEntry.
 */
KalturaMediaService.prototype.addFromUrl = function(callback, mediaEntry, url){
	var kparams = new Object();
	this.client.addParam(kparams, "mediaEntry", toParams(mediaEntry));
	this.client.addParam(kparams, "url", url);
	this.client.queueServiceActionCall("media", "addFromUrl", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Adds new media entry by importing the media file from a search provider. 
 *	This action should be used with the search service result..
 * @param	mediaEntry	KalturaMediaEntry		Media entry metadata (optional, default: null).
 * @param	searchResult	KalturaSearchResult		Result object from search service (optional, default: null).
 * @return	KalturaMediaEntry.
 */
KalturaMediaService.prototype.addFromSearchResult = function(callback, mediaEntry, searchResult){
	if(!mediaEntry)
		mediaEntry = null;
	if(!searchResult)
		searchResult = null;
	var kparams = new Object();
	if (mediaEntry != null)
		this.client.addParam(kparams, "mediaEntry", toParams(mediaEntry));
	if (searchResult != null)
		this.client.addParam(kparams, "searchResult", toParams(searchResult));
	this.client.queueServiceActionCall("media", "addFromSearchResult", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Add new entry after the specific media file was uploaded and the upload token id exists.
 * @param	mediaEntry	KalturaMediaEntry		Media entry metadata (optional).
 * @param	uploadTokenId	string		Upload token id (optional).
 * @return	KalturaMediaEntry.
 */
KalturaMediaService.prototype.addFromUploadedFile = function(callback, mediaEntry, uploadTokenId){
	var kparams = new Object();
	this.client.addParam(kparams, "mediaEntry", toParams(mediaEntry));
	this.client.addParam(kparams, "uploadTokenId", uploadTokenId);
	this.client.queueServiceActionCall("media", "addFromUploadedFile", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Add new entry after the file was recored on the server and the token id exists.
 * @param	mediaEntry	KalturaMediaEntry		Media entry metadata (optional).
 * @param	webcamTokenId	string		Token id for the recored webcam file  (optional).
 * @return	KalturaMediaEntry.
 */
KalturaMediaService.prototype.addFromRecordedWebcam = function(callback, mediaEntry, webcamTokenId){
	var kparams = new Object();
	this.client.addParam(kparams, "mediaEntry", toParams(mediaEntry));
	this.client.addParam(kparams, "webcamTokenId", webcamTokenId);
	this.client.queueServiceActionCall("media", "addFromRecordedWebcam", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get media entry by ID..
 * @param	entryId	string		Media entry id (optional).
 * @param	version	int		Desired version of the data (optional, default: -1).
 * @return	KalturaMediaEntry.
 */
KalturaMediaService.prototype.get = function(callback, entryId, version){
	if(!version)
		version = -1;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "version", version);
	this.client.queueServiceActionCall("media", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update media entry. Only the properties that were set will be updated..
 * @param	entryId	string		Media entry id to update (optional).
 * @param	mediaEntry	KalturaMediaEntry		Media entry metadata to update (optional).
 * @return	KalturaMediaEntry.
 */
KalturaMediaService.prototype.update = function(callback, entryId, mediaEntry){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "mediaEntry", toParams(mediaEntry));
	this.client.queueServiceActionCall("media", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete a media entry..
 * @param	entryId	string		Media entry id to delete (optional).
 * @return	.
 */
KalturaMediaService.prototype.deleteAction = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("media", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List media entries by filter with paging support..
 * @param	filter	KalturaMediaEntryFilter		Media entry filter (optional, default: null).
 * @param	pager	KalturaFilterPager		Pager (optional, default: null).
 * @return	KalturaMediaListResponse.
 */
KalturaMediaService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("media", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Upload a media file to Kaltura, then the file can be used to create a media entry. .
 * @param	fileData	file		The file data (optional).
 * @return	string.
 */
KalturaMediaService.prototype.upload = function(callback, fileData){
	var kparams = new Object();
	kfiles = new Object();
	this.client.addParam(kfiles, "fileData", fileData);
	this.client.queueServiceActionCall("media", "upload", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update media entry thumbnail by a specified time offset (In seconds).
 * @param	entryId	string		Media entry id (optional).
 * @param	timeOffset	int		Time offset (in seconds) (optional).
 * @return	KalturaMediaEntry.
 */
KalturaMediaService.prototype.updateThumbnail = function(callback, entryId, timeOffset){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "timeOffset", timeOffset);
	this.client.queueServiceActionCall("media", "updateThumbnail", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update media entry thumbnail using a raw jpeg file.
 * @param	entryId	string		Media entry id (optional).
 * @param	fileData	file		Jpeg file data (optional).
 * @return	KalturaMediaEntry.
 */
KalturaMediaService.prototype.updateThumbnailJpeg = function(callback, entryId, fileData){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	kfiles = new Object();
	this.client.addParam(kfiles, "fileData", fileData);
	this.client.queueServiceActionCall("media", "updateThumbnailJpeg", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Request a new conversion job, this can be used to convert the media entry to a different format.
 * @param	entryId	string		Media entry id (optional).
 * @param	fileFormat	string		Format to convert (optional).
 * @return	int.
 */
KalturaMediaService.prototype.requestConversion = function(callback, entryId, fileFormat){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "fileFormat", fileFormat);
	this.client.queueServiceActionCall("media", "requestConversion", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Flag inappropriate media entry for moderation.
 * @param	moderationFlag	KalturaModerationFlag		 (optional).
 * @return	.
 */
KalturaMediaService.prototype.flag = function(callback, moderationFlag){
	var kparams = new Object();
	this.client.addParam(kparams, "moderationFlag", toParams(moderationFlag));
	this.client.queueServiceActionCall("media", "flag", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Reject the media entry and mark the pending flags (if any) as moderated (this will make the entry non playable).
 * @param	entryId	string		 (optional).
 * @return	.
 */
KalturaMediaService.prototype.reject = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("media", "reject", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Approve the media entry and mark the pending flags (if any) as moderated (this will make the entry playable) .
 * @param	entryId	string		 (optional).
 * @return	.
 */
KalturaMediaService.prototype.approve = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("media", "approve", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List all pending flags for the media entry.
 * @param	entryId	string		 (optional).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaModerationFlagListResponse.
 */
KalturaMediaService.prototype.listFlags = function(callback, entryId, pager){
	if(!pager)
		pager = null;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("media", "listFlags", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Anonymously rank a media entry, no validation is done on duplicate rankings.
 * @param	entryId	string		 (optional).
 * @param	rank	int		 (optional).
 * @return	.
 */
KalturaMediaService.prototype.anonymousRank = function(callback, entryId, rank){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "rank", rank);
	this.client.queueServiceActionCall("media", "anonymousRank", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: mixing.
 * The available service actions:
 * @action	add	Adds a new mix.
 *	If the dataContent is null, a default timeline will be created..
 * @action	get	Get mix entry by id..
 * @action	update	Update mix entry. Only the properties that were set will be updated..
 * @action	delete	Delete a mix entry..
 * @action	list	List entries by filter with paging support.
 *	Return parameter is an array of mix entries..
 * @action	clone	Clones an existing mix..
 * @action	appendMediaEntry	Appends a media entry to a the end of the mix timeline, this will save the mix timeline as a new version..
 * @action	requestFlattening	Request a new flattening job, flattening is used to convert a video mix to a video file. .
 * @action	getMixesByMediaId	Get the mixes in which the media entry is included.
 * @action	getReadyMediaEntries	Get all ready media entries that exist in the given mix id.
 * @action	anonymousRank	Anonymously rank a mix entry, no validation is done on duplicate rankings.
*/
function KalturaMixingService(client){
	this.init(client);
}
KalturaMixingService.inheritsFrom (KalturaServiceBase);
/**
 * Adds a new mix.
 *	If the dataContent is null, a default timeline will be created..
 * @param	mixEntry	KalturaMixEntry		Mix entry metadata (optional).
 * @return	KalturaMixEntry.
 */
KalturaMixingService.prototype.add = function(callback, mixEntry){
	var kparams = new Object();
	this.client.addParam(kparams, "mixEntry", toParams(mixEntry));
	this.client.queueServiceActionCall("mixing", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get mix entry by id..
 * @param	entryId	string		Mix entry id (optional).
 * @param	version	int		Desired version of the data (optional, default: -1).
 * @return	KalturaMixEntry.
 */
KalturaMixingService.prototype.get = function(callback, entryId, version){
	if(!version)
		version = -1;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "version", version);
	this.client.queueServiceActionCall("mixing", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update mix entry. Only the properties that were set will be updated..
 * @param	entryId	string		Mix entry id to update (optional).
 * @param	mixEntry	KalturaMixEntry		Mix entry metadata to update (optional).
 * @return	KalturaMixEntry.
 */
KalturaMixingService.prototype.update = function(callback, entryId, mixEntry){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "mixEntry", toParams(mixEntry));
	this.client.queueServiceActionCall("mixing", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete a mix entry..
 * @param	entryId	string		Mix entry id to delete (optional).
 * @return	.
 */
KalturaMixingService.prototype.deleteAction = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("mixing", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List entries by filter with paging support.
 *	Return parameter is an array of mix entries..
 * @param	filter	KalturaMixEntryFilter		Mix entry filter (optional, default: null).
 * @param	pager	KalturaFilterPager		Pager (optional, default: null).
 * @return	KalturaMixListResponse.
 */
KalturaMixingService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("mixing", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Clones an existing mix..
 * @param	entryId	string		Mix entry id to clone (optional).
 * @return	KalturaMixEntry.
 */
KalturaMixingService.prototype.cloneAction = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("mixing", "clone", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Appends a media entry to a the end of the mix timeline, this will save the mix timeline as a new version..
 * @param	mixEntryId	string		Mix entry to append to its timeline (optional).
 * @param	mediaEntryId	string		Media entry to append to the timeline (optional).
 * @return	KalturaMixEntry.
 */
KalturaMixingService.prototype.appendMediaEntry = function(callback, mixEntryId, mediaEntryId){
	var kparams = new Object();
	this.client.addParam(kparams, "mixEntryId", mixEntryId);
	this.client.addParam(kparams, "mediaEntryId", mediaEntryId);
	this.client.queueServiceActionCall("mixing", "appendMediaEntry", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Request a new flattening job, flattening is used to convert a video mix to a video file. .
 * @param	entryId	string		Mix entry id (optional).
 * @param	fileFormat	string		Format to convert (optional).
 * @param	version	int		Version to flatten (If not set, latest will be used) (optional, default: -1).
 * @return	int.
 */
KalturaMixingService.prototype.requestFlattening = function(callback, entryId, fileFormat, version){
	if(!version)
		version = -1;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "fileFormat", fileFormat);
	this.client.addParam(kparams, "version", version);
	this.client.queueServiceActionCall("mixing", "requestFlattening", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get the mixes in which the media entry is included.
 * @param	mediaEntryId	string		 (optional).
 * @return	array.
 */
KalturaMixingService.prototype.getMixesByMediaId = function(callback, mediaEntryId){
	var kparams = new Object();
	this.client.addParam(kparams, "mediaEntryId", mediaEntryId);
	this.client.queueServiceActionCall("mixing", "getMixesByMediaId", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get all ready media entries that exist in the given mix id.
 * @param	mixId	string		 (optional).
 * @param	version	int		Desired version to get the data from (optional, default: -1).
 * @return	array.
 */
KalturaMixingService.prototype.getReadyMediaEntries = function(callback, mixId, version){
	if(!version)
		version = -1;
	var kparams = new Object();
	this.client.addParam(kparams, "mixId", mixId);
	this.client.addParam(kparams, "version", version);
	this.client.queueServiceActionCall("mixing", "getReadyMediaEntries", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Anonymously rank a mix entry, no validation is done on duplicate rankings.
 * @param	entryId	string		 (optional).
 * @param	rank	int		 (optional).
 * @return	.
 */
KalturaMixingService.prototype.anonymousRank = function(callback, entryId, rank){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "rank", rank);
	this.client.queueServiceActionCall("mixing", "anonymousRank", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: data.
 * The available service actions:
 * @action	add	Adds a new data entry.
 * @action	get	Get data entry by ID..
 * @action	update	Update data entry. Only the properties that were set will be updated..
 * @action	delete	Delete a data entry..
 * @action	list	List data entries by filter with paging support..
*/
function KalturaDataService(client){
	this.init(client);
}
KalturaDataService.inheritsFrom (KalturaServiceBase);
/**
 * Adds a new data entry.
 * @param	dataEntry	KalturaDataEntry		Data entry (optional).
 * @return	KalturaDataEntry.
 */
KalturaDataService.prototype.add = function(callback, dataEntry){
	var kparams = new Object();
	this.client.addParam(kparams, "dataEntry", toParams(dataEntry));
	this.client.queueServiceActionCall("data", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get data entry by ID..
 * @param	entryId	string		Data entry id (optional).
 * @param	version	int		Desired version of the data (optional, default: -1).
 * @return	KalturaDataEntry.
 */
KalturaDataService.prototype.get = function(callback, entryId, version){
	if(!version)
		version = -1;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "version", version);
	this.client.queueServiceActionCall("data", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update data entry. Only the properties that were set will be updated..
 * @param	entryId	string		Data entry id to update (optional).
 * @param	documentEntry	KalturaDataEntry		Data entry metadata to update (optional).
 * @return	KalturaDataEntry.
 */
KalturaDataService.prototype.update = function(callback, entryId, documentEntry){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "documentEntry", toParams(documentEntry));
	this.client.queueServiceActionCall("data", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete a data entry..
 * @param	entryId	string		Data entry id to delete (optional).
 * @return	.
 */
KalturaDataService.prototype.deleteAction = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("data", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List data entries by filter with paging support..
 * @param	filter	KalturaDataEntryFilter		Document entry filter (optional, default: null).
 * @param	pager	KalturaFilterPager		Pager (optional, default: null).
 * @return	KalturaDataListResponse.
 */
KalturaDataService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("data", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: baseEntry.
 * The available service actions:
 * @action	addFromUploadedFile	Generic add entry using an uploaded file, should be used when the uploaded entry type is not known.
 * @action	get	Get base entry by ID..
 * @action	getByIds	Get base entry by comma separated entry ids..
 * @action	delete	Delete an entry..
 * @action	list	List base entries by filter with paging support..
 * @action	upload	Upload a file to Kaltura, that can be used to create an entry. .
 * @action	updateThumbnailJpeg	Update entry thumbnail using a raw jpeg file.
 * @action	flag	Flag inappropriate entry for moderation.
 * @action	reject	Reject the entry and mark the pending flags (if any) as moderated (this will make the entry non playable).
 * @action	approve	Approve the entry and mark the pending flags (if any) as moderated (this will make the entry playable) .
 * @action	listFlags	List all pending flags for the entry.
 * @action	anonymousRank	Anonymously rank an entry, no validation is done on duplicate rankings.
*/
function KalturaBaseEntryService(client){
	this.init(client);
}
KalturaBaseEntryService.inheritsFrom (KalturaServiceBase);
/**
 * Generic add entry using an uploaded file, should be used when the uploaded entry type is not known.
 * @param	entry	KalturaBaseEntry		 (optional).
 * @param	uploadTokenId	string		 (optional).
 * @param	type	int		 (optional, enum: KalturaEntryType, default: -1).
 * @return	KalturaBaseEntry.
 */
KalturaBaseEntryService.prototype.addFromUploadedFile = function(callback, entry, uploadTokenId, type){
	if(!type)
		type = -1;
	var kparams = new Object();
	this.client.addParam(kparams, "entry", toParams(entry));
	this.client.addParam(kparams, "uploadTokenId", uploadTokenId);
	this.client.addParam(kparams, "type", type);
	this.client.queueServiceActionCall("baseEntry", "addFromUploadedFile", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get base entry by ID..
 * @param	entryId	string		Entry id (optional).
 * @param	version	int		Desired version of the data (optional, default: -1).
 * @return	KalturaBaseEntry.
 */
KalturaBaseEntryService.prototype.get = function(callback, entryId, version){
	if(!version)
		version = -1;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "version", version);
	this.client.queueServiceActionCall("baseEntry", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get base entry by comma separated entry ids..
 * @param	entryIds	string		Comma separated string of entry ids (optional).
 * @return	array.
 */
KalturaBaseEntryService.prototype.getByIds = function(callback, entryIds){
	var kparams = new Object();
	this.client.addParam(kparams, "entryIds", entryIds);
	this.client.queueServiceActionCall("baseEntry", "getByIds", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete an entry..
 * @param	entryId	string		Entry id to delete (optional).
 * @return	.
 */
KalturaBaseEntryService.prototype.deleteAction = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("baseEntry", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List base entries by filter with paging support..
 * @param	filter	KalturaBaseEntryFilter		Entry filter (optional, default: null).
 * @param	pager	KalturaFilterPager		Pager (optional, default: null).
 * @return	KalturaBaseEntryListResponse.
 */
KalturaBaseEntryService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("baseEntry", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Upload a file to Kaltura, that can be used to create an entry. .
 * @param	fileData	file		The file data (optional).
 * @return	string.
 */
KalturaBaseEntryService.prototype.upload = function(callback, fileData){
	var kparams = new Object();
	kfiles = new Object();
	this.client.addParam(kfiles, "fileData", fileData);
	this.client.queueServiceActionCall("baseEntry", "upload", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update entry thumbnail using a raw jpeg file.
 * @param	entryId	string		Media entry id (optional).
 * @param	fileData	file		Jpeg file data (optional).
 * @return	KalturaMediaEntry.
 */
KalturaBaseEntryService.prototype.updateThumbnailJpeg = function(callback, entryId, fileData){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	kfiles = new Object();
	this.client.addParam(kfiles, "fileData", fileData);
	this.client.queueServiceActionCall("baseEntry", "updateThumbnailJpeg", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Flag inappropriate entry for moderation.
 * @param	moderationFlag	KalturaModerationFlag		 (optional).
 * @return	.
 */
KalturaBaseEntryService.prototype.flag = function(callback, moderationFlag){
	var kparams = new Object();
	this.client.addParam(kparams, "moderationFlag", toParams(moderationFlag));
	this.client.queueServiceActionCall("baseEntry", "flag", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Reject the entry and mark the pending flags (if any) as moderated (this will make the entry non playable).
 * @param	entryId	string		 (optional).
 * @return	.
 */
KalturaBaseEntryService.prototype.reject = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("baseEntry", "reject", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Approve the entry and mark the pending flags (if any) as moderated (this will make the entry playable) .
 * @param	entryId	string		 (optional).
 * @return	.
 */
KalturaBaseEntryService.prototype.approve = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("baseEntry", "approve", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List all pending flags for the entry.
 * @param	entryId	string		 (optional).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaModerationFlagListResponse.
 */
KalturaBaseEntryService.prototype.listFlags = function(callback, entryId, pager){
	if(!pager)
		pager = null;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("baseEntry", "listFlags", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Anonymously rank an entry, no validation is done on duplicate rankings.
 * @param	entryId	string		 (optional).
 * @param	rank	int		 (optional).
 * @return	.
 */
KalturaBaseEntryService.prototype.anonymousRank = function(callback, entryId, rank){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "rank", rank);
	this.client.queueServiceActionCall("baseEntry", "anonymousRank", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: session.
 * The available service actions:
 * @action	start	Start a session with Kaltura's server.
 *	The result KS is the session key that you should pass to all services that requires a ticket..
 * @action	startWidgetSession	Start a session for Kaltura's flash widgets.
*/
function KalturaSessionService(client){
	this.init(client);
}
KalturaSessionService.inheritsFrom (KalturaServiceBase);
/**
 * Start a session with Kaltura's server.
 *	The result KS is the session key that you should pass to all services that requires a ticket..
 * @param	secret	string		Remember to provide the correct secret according to the sessionType you want (optional).
 * @param	userId	string		 (optional).
 * @param	type	int		Regular session or Admin session (optional, enum: KalturaSessionType).
 * @param	partnerId	int		 (optional, default: -1).
 * @param	expiry	int		KS expiry time in seconds (optional, default: 86400).
 * @param	privileges	string		 (optional).
 * @return	string.
 */
KalturaSessionService.prototype.start = function(callback, secret, userId, type, partnerId, expiry, privileges){
	if(!userId)
		userId = "";
	if(!type)
		type = 0;
	if(!partnerId)
		partnerId = -1;
	if(!expiry)
		expiry = 86400;
	if(!privileges)
		privileges = "";
	var kparams = new Object();
	this.client.addParam(kparams, "secret", secret);
	this.client.addParam(kparams, "userId", userId);
	this.client.addParam(kparams, "type", type);
	this.client.addParam(kparams, "partnerId", partnerId);
	this.client.addParam(kparams, "expiry", expiry);
	this.client.addParam(kparams, "privileges", privileges);
	this.client.queueServiceActionCall("session", "start", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Start a session for Kaltura's flash widgets.
 * @param	widgetId	string		 (optional).
 * @param	expiry	int		 (optional, default: 86400).
 * @return	KalturaStartWidgetSessionResponse.
 */
KalturaSessionService.prototype.startWidgetSession = function(callback, widgetId, expiry){
	if(!expiry)
		expiry = 86400;
	var kparams = new Object();
	this.client.addParam(kparams, "widgetId", widgetId);
	this.client.addParam(kparams, "expiry", expiry);
	this.client.queueServiceActionCall("session", "startWidgetSession", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: uiConf.
 * The available service actions:
 * @action	add	UIConf Add action allows you to add a UIConf to Kaltura DB.
 * @action	update	Update an existing UIConf.
 * @action	get	Retrieve a UIConf by id.
 * @action	delete	Delete an existing UIConf.
 * @action	clone	Clone an existing UIConf.
 * @action	list	Retrieve a list of available UIConfs.
*/
function KalturaUiConfService(client){
	this.init(client);
}
KalturaUiConfService.inheritsFrom (KalturaServiceBase);
/**
 * UIConf Add action allows you to add a UIConf to Kaltura DB.
 * @param	uiConf	KalturaUiConf		Mandatory input parameter of type KalturaUiConf (optional).
 * @return	KalturaUiConf.
 */
KalturaUiConfService.prototype.add = function(callback, uiConf){
	var kparams = new Object();
	this.client.addParam(kparams, "uiConf", toParams(uiConf));
	this.client.queueServiceActionCall("uiConf", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update an existing UIConf.
 * @param	id	int		 (optional).
 * @param	uiConf	KalturaUiConf		 (optional).
 * @return	KalturaUiConf.
 */
KalturaUiConfService.prototype.update = function(callback, id, uiConf){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "uiConf", toParams(uiConf));
	this.client.queueServiceActionCall("uiConf", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve a UIConf by id.
 * @param	id	int		 (optional).
 * @return	KalturaUiConf.
 */
KalturaUiConfService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("uiConf", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete an existing UIConf.
 * @param	id	int		 (optional).
 * @return	.
 */
KalturaUiConfService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("uiConf", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Clone an existing UIConf.
 * @param	id	int		 (optional).
 * @return	KalturaUiConf.
 */
KalturaUiConfService.prototype.cloneAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("uiConf", "clone", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve a list of available UIConfs.
 * @param	filter	KalturaUiConfFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaUiConfListResponse.
 */
KalturaUiConfService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("uiConf", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: playlist.
 * The available service actions:
 * @action	add	Add new playlist
 *	Note that all entries used in a playlist will become public and may appear in KalturaNetwork.
 * @action	get	Retrieve a playlist.
 * @action	update	Update existing playlist
 *	Note - you cannot change playlist type. updated playlist must be of the same type..
 * @action	delete	Delete existing playlist.
 * @action	list	List available playlists.
 * @action	execute	Retrieve playlist for playing purpose.
 * @action	executeFromContent	Revrieve playlist for playing purpose, based on content.
 * @action	getStatsFromContent	Retrieve playlist statistics.
*/
function KalturaPlaylistService(client){
	this.init(client);
}
KalturaPlaylistService.inheritsFrom (KalturaServiceBase);
/**
 * Add new playlist
 *	Note that all entries used in a playlist will become public and may appear in KalturaNetwork.
 * @param	playlist	KalturaPlaylist		 (optional).
 * @param	updateStats	bool		 (optional, default: false).
 * @return	KalturaPlaylist.
 */
KalturaPlaylistService.prototype.add = function(callback, playlist, updateStats){
	if(!updateStats)
		updateStats = false;
	var kparams = new Object();
	this.client.addParam(kparams, "playlist", toParams(playlist));
	this.client.addParam(kparams, "updateStats", updateStats);
	this.client.queueServiceActionCall("playlist", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve a playlist.
 * @param	id	string		 (optional).
 * @param	version	int		Desired version of the data (optional, default: -1).
 * @return	KalturaPlaylist.
 */
KalturaPlaylistService.prototype.get = function(callback, id, version){
	if(!version)
		version = -1;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "version", version);
	this.client.queueServiceActionCall("playlist", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update existing playlist
 *	Note - you cannot change playlist type. updated playlist must be of the same type..
 * @param	id	string		 (optional).
 * @param	playlist	KalturaPlaylist		 (optional).
 * @param	updateStats	bool		  (optional, default: false).
 * @return	KalturaPlaylist.
 */
KalturaPlaylistService.prototype.update = function(callback, id, playlist, updateStats){
	if(!updateStats)
		updateStats = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "playlist", toParams(playlist));
	this.client.addParam(kparams, "updateStats", updateStats);
	this.client.queueServiceActionCall("playlist", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete existing playlist.
 * @param	id	string		 (optional).
 * @return	.
 */
KalturaPlaylistService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("playlist", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List available playlists.
 * @param	filter	KalturaPlaylistFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaPlaylistListResponse.
 */
KalturaPlaylistService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("playlist", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve playlist for playing purpose.
 * @param	id	string		 (optional).
 * @param	detailed	string		 (optional).
 * @return	array.
 */
KalturaPlaylistService.prototype.execute = function(callback, id, detailed){
	if(!detailed)
		detailed = "";
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "detailed", detailed);
	this.client.queueServiceActionCall("playlist", "execute", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Revrieve playlist for playing purpose, based on content.
 * @param	playlistType	int		  (optional, enum: KalturaPlaylistType).
 * @param	playlistContent	string		 (optional).
 * @param	detailed	string		 (optional).
 * @return	array.
 */
KalturaPlaylistService.prototype.executeFromContent = function(callback, playlistType, playlistContent, detailed){
	if(!detailed)
		detailed = "";
	var kparams = new Object();
	this.client.addParam(kparams, "playlistType", playlistType);
	this.client.addParam(kparams, "playlistContent", playlistContent);
	this.client.addParam(kparams, "detailed", detailed);
	this.client.queueServiceActionCall("playlist", "executeFromContent", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve playlist statistics.
 * @param	playlistType	int		  (optional, enum: KalturaPlaylistType).
 * @param	playlistContent	string		 (optional).
 * @return	KalturaPlaylist.
 */
KalturaPlaylistService.prototype.getStatsFromContent = function(callback, playlistType, playlistContent){
	var kparams = new Object();
	this.client.addParam(kparams, "playlistType", playlistType);
	this.client.addParam(kparams, "playlistContent", playlistContent);
	this.client.queueServiceActionCall("playlist", "getStatsFromContent", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: user.
 * The available service actions:
 * @action	add	Adds a user to the Kaltura DB.
 *	Input param $id is the unique identifier in the partner's system.
 * @action	update	Update exisitng user, it is possible to update the user id too.
 * @action	get	Retrieve user.
 * @action	delete	Mark the user as deleted.
 * @action	list	List users (When not set in the filter, blocked and deleted users will be returned too).
*/
function KalturaUserService(client){
	this.init(client);
}
KalturaUserService.inheritsFrom (KalturaServiceBase);
/**
 * Adds a user to the Kaltura DB.
 *	Input param $id is the unique identifier in the partner's system.
 * @param	user	KalturaUser		 (optional).
 * @return	KalturaUser.
 */
KalturaUserService.prototype.add = function(callback, user){
	var kparams = new Object();
	this.client.addParam(kparams, "user", toParams(user));
	this.client.queueServiceActionCall("user", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update exisitng user, it is possible to update the user id too.
 * @param	userId	string		 (optional).
 * @param	user	KalturaUser		Id (optional).
 * @return	KalturaUser.
 */
KalturaUserService.prototype.update = function(callback, userId, user){
	var kparams = new Object();
	this.client.addParam(kparams, "userId", userId);
	this.client.addParam(kparams, "user", toParams(user));
	this.client.queueServiceActionCall("user", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve user.
 * @param	userId	string		 (optional).
 * @return	KalturaUser.
 */
KalturaUserService.prototype.get = function(callback, userId){
	var kparams = new Object();
	this.client.addParam(kparams, "userId", userId);
	this.client.queueServiceActionCall("user", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Mark the user as deleted.
 * @param	userId	string		 (optional).
 * @return	KalturaUser.
 */
KalturaUserService.prototype.deleteAction = function(callback, userId){
	var kparams = new Object();
	this.client.addParam(kparams, "userId", userId);
	this.client.queueServiceActionCall("user", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List users (When not set in the filter, blocked and deleted users will be returned too).
 * @param	filter	KalturaUserFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaUserListResponse.
 */
KalturaUserService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("user", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: widget.
 * The available service actions:
 * @action	add	Add new widget, can be attached to entry or kshow
 *	SourceWidget is ignored..
 * @action	update	Update exisiting widget.
 * @action	get	Get widget by id.
 * @action	clone	Add widget based on existing widget.
 *	Must provide valid sourceWidgetId.
 * @action	list	Retrieve a list of available widget depends on the filter given.
*/
function KalturaWidgetService(client){
	this.init(client);
}
KalturaWidgetService.inheritsFrom (KalturaServiceBase);
/**
 * Add new widget, can be attached to entry or kshow
 *	SourceWidget is ignored..
 * @param	widget	KalturaWidget		 (optional).
 * @return	KalturaWidget.
 */
KalturaWidgetService.prototype.add = function(callback, widget){
	var kparams = new Object();
	this.client.addParam(kparams, "widget", toParams(widget));
	this.client.queueServiceActionCall("widget", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update exisiting widget.
 * @param	id	string		 (optional).
 * @param	widget	KalturaWidget		 (optional).
 * @return	KalturaWidget.
 */
KalturaWidgetService.prototype.update = function(callback, id, widget){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "widget", toParams(widget));
	this.client.queueServiceActionCall("widget", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get widget by id.
 * @param	id	string		 (optional).
 * @return	KalturaWidget.
 */
KalturaWidgetService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("widget", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Add widget based on existing widget.
 *	Must provide valid sourceWidgetId.
 * @param	widget	KalturaWidget		 (optional).
 * @return	KalturaWidget.
 */
KalturaWidgetService.prototype.cloneAction = function(callback, widget){
	var kparams = new Object();
	this.client.addParam(kparams, "widget", toParams(widget));
	this.client.queueServiceActionCall("widget", "clone", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve a list of available widget depends on the filter given.
 * @param	filter	KalturaWidgetFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaWidgetListResponse.
 */
KalturaWidgetService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("widget", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: search.
 * The available service actions:
 * @action	search	Search for media in one of the supported media providers.
 * @action	getMediaInfo	Retrieve extra information about media found in search action
 *	Some providers return only part of the fields needed to create entry from, use this action to get the rest of the fields..
 * @action	searchUrl	Search for media given a specific URL
 *	Kaltura supports a searchURL action on some of the media providers.
 *	This action will return a KalturaSearchResult object based on a given URL (assuming the media provider is supported).
*/
function KalturaSearchService(client){
	this.init(client);
}
KalturaSearchService.inheritsFrom (KalturaServiceBase);
/**
 * Search for media in one of the supported media providers.
 * @param	search	KalturaSearch		A KalturaSearch object contains the search keywords, media provider and media type (optional).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaSearchResultResponse.
 */
KalturaSearchService.prototype.search = function(callback, search, pager){
	if(!pager)
		pager = null;
	var kparams = new Object();
	this.client.addParam(kparams, "search", toParams(search));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("search", "search", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve extra information about media found in search action
 *	Some providers return only part of the fields needed to create entry from, use this action to get the rest of the fields..
 * @param	searchResult	KalturaSearchResult		KalturaSearchResult object extends KalturaSearch and has all fields required for media:add (optional).
 * @return	KalturaSearchResult.
 */
KalturaSearchService.prototype.getMediaInfo = function(callback, searchResult){
	var kparams = new Object();
	this.client.addParam(kparams, "searchResult", toParams(searchResult));
	this.client.queueServiceActionCall("search", "getMediaInfo", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Search for media given a specific URL
 *	Kaltura supports a searchURL action on some of the media providers.
 *	This action will return a KalturaSearchResult object based on a given URL (assuming the media provider is supported).
 * @param	mediaType	int		 (optional, enum: KalturaMediaType).
 * @param	url	string		 (optional).
 * @return	KalturaSearchResult.
 */
KalturaSearchService.prototype.searchUrl = function(callback, mediaType, url){
	var kparams = new Object();
	this.client.addParam(kparams, "mediaType", mediaType);
	this.client.addParam(kparams, "url", url);
	this.client.queueServiceActionCall("search", "searchUrl", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: partner.
 * The available service actions:
 * @action	register	Register to Kaltura's partner program.
 * @action	update	Update details and settings of you existing partner.
 * @action	getSecrets	Retrieve partner secret and admin secret.
 * @action	getInfo	Retrieve all info about partner
 *	This service gets no parameters, and is using the KS to know which partnerId info should be returned.
 * @action	getUsage	Get usage statistics for a partner
 *	Calculation is done according to partner's package
 *	Additional data returned is a graph points of streaming usage in a timeframe
 *	The resolution can be "days" or "months".
*/
function KalturaPartnerService(client){
	this.init(client);
}
KalturaPartnerService.inheritsFrom (KalturaServiceBase);
/**
 * Register to Kaltura's partner program.
 * @param	partner	KalturaPartner		 (optional).
 * @param	cmsPassword	string		 (optional).
 * @return	KalturaPartner.
 */
KalturaPartnerService.prototype.register = function(callback, partner, cmsPassword){
	if(!cmsPassword)
		cmsPassword = "";
	var kparams = new Object();
	this.client.addParam(kparams, "partner", toParams(partner));
	this.client.addParam(kparams, "cmsPassword", cmsPassword);
	this.client.queueServiceActionCall("partner", "register", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update details and settings of you existing partner.
 * @param	partner	KalturaPartner		 (optional).
 * @param	allowEmpty	bool		 (optional, default: false).
 * @return	KalturaPartner.
 */
KalturaPartnerService.prototype.update = function(callback, partner, allowEmpty){
	if(!allowEmpty)
		allowEmpty = false;
	var kparams = new Object();
	this.client.addParam(kparams, "partner", toParams(partner));
	this.client.addParam(kparams, "allowEmpty", allowEmpty);
	this.client.queueServiceActionCall("partner", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve partner secret and admin secret.
 * @param	partnerId	int		 (optional).
 * @param	adminEmail	string		 (optional).
 * @param	cmsPassword	string		 (optional).
 * @return	KalturaPartner.
 */
KalturaPartnerService.prototype.getSecrets = function(callback, partnerId, adminEmail, cmsPassword){
	var kparams = new Object();
	this.client.addParam(kparams, "partnerId", partnerId);
	this.client.addParam(kparams, "adminEmail", adminEmail);
	this.client.addParam(kparams, "cmsPassword", cmsPassword);
	this.client.queueServiceActionCall("partner", "getSecrets", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve all info about partner
 *	This service gets no parameters, and is using the KS to know which partnerId info should be returned.
 * @return	KalturaPartner.
 */
KalturaPartnerService.prototype.getInfo = function(callback){
	var kparams = new Object();
	this.client.queueServiceActionCall("partner", "getInfo", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get usage statistics for a partner
 *	Calculation is done according to partner's package
 *	Additional data returned is a graph points of streaming usage in a timeframe
 *	The resolution can be "days" or "months".
 * @param	year	int		 (optional).
 * @param	month	int		 (optional, default: 1).
 * @param	resolution	string		accepted values are "days" or "months" (optional, default: days).
 * @return	KalturaPartnerUsage.
 */
KalturaPartnerService.prototype.getUsage = function(callback, year, month, resolution){
	if(!year)
		year = "";
	if(!month)
		month = 1;
	if(!resolution)
		resolution = "days";
	var kparams = new Object();
	this.client.addParam(kparams, "year", year);
	this.client.addParam(kparams, "month", month);
	this.client.addParam(kparams, "resolution", resolution);
	this.client.queueServiceActionCall("partner", "getUsage", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: adminUser.
 * The available service actions:
 * @action	updatepassword	Update admin user password and email.
 * @action	resetPassword	Reset admin user password and send it to the users email address.
 * @action	login	Get an admin session using admin email and password (Used for login to the KMC application).
*/
function KalturaAdminUserService(client){
	this.init(client);
}
KalturaAdminUserService.inheritsFrom (KalturaServiceBase);
/**
 * Update admin user password and email.
 * @param	email	string		 (optional).
 * @param	password	string		 (optional).
 * @param	newEmail	string		Optional, provide only when you want to update the email (optional).
 * @param	newPassword	string		 (optional).
 * @return	KalturaAdminUser.
 */
KalturaAdminUserService.prototype.updatepassword = function(callback, email, password, newEmail, newPassword){
	if(!newEmail)
		newEmail = "";
	if(!newPassword)
		newPassword = "";
	var kparams = new Object();
	this.client.addParam(kparams, "email", email);
	this.client.addParam(kparams, "password", password);
	this.client.addParam(kparams, "newEmail", newEmail);
	this.client.addParam(kparams, "newPassword", newPassword);
	this.client.queueServiceActionCall("adminUser", "updatepassword", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Reset admin user password and send it to the users email address.
 * @param	email	string		 (optional).
 * @return	.
 */
KalturaAdminUserService.prototype.resetPassword = function(callback, email){
	var kparams = new Object();
	this.client.addParam(kparams, "email", email);
	this.client.queueServiceActionCall("adminUser", "resetPassword", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get an admin session using admin email and password (Used for login to the KMC application).
 * @param	email	string		 (optional).
 * @param	password	string		 (optional).
 * @return	string.
 */
KalturaAdminUserService.prototype.login = function(callback, email, password){
	var kparams = new Object();
	this.client.addParam(kparams, "email", email);
	this.client.addParam(kparams, "password", password);
	this.client.queueServiceActionCall("adminUser", "login", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: system.
 * The available service actions:
 * @action	ping	.
*/
function KalturaSystemService(client){
	this.init(client);
}
KalturaSystemService.inheritsFrom (KalturaServiceBase);
/**
 * .
 * @return	bool.
 */
KalturaSystemService.prototype.ping = function(callback){
	var kparams = new Object();
	this.client.queueServiceActionCall("system", "ping", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: bulkUpload.
 * The available service actions:
 * @action	add	Add new bulk upload batch job.
 * @action	get	Get bulk upload batch job by id.
 * @action	list	List bulk upload batch jobs.
*/
function KalturaBulkUploadService(client){
	this.init(client);
}
KalturaBulkUploadService.inheritsFrom (KalturaServiceBase);
/**
 * Add new bulk upload batch job.
 * @param	conversionProfileId	int		Convertion profile id to use for converting the current bulk (optional).
 * @param	csvFileData	file		CSV File (optional).
 * @return	KalturaBulkUpload.
 */
KalturaBulkUploadService.prototype.add = function(callback, conversionProfileId, csvFileData){
	var kparams = new Object();
	this.client.addParam(kparams, "conversionProfileId", conversionProfileId);
	kfiles = new Object();
	this.client.addParam(kfiles, "csvFileData", csvFileData);
	this.client.queueServiceActionCall("bulkUpload", "add", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get bulk upload batch job by id.
 * @param	id	int		 (optional).
 * @return	KalturaBulkUpload.
 */
KalturaBulkUploadService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("bulkUpload", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List bulk upload batch jobs.
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaBulkUploadListResponse.
 */
KalturaBulkUploadService.prototype.listAction = function(callback, pager){
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("bulkUpload", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: notification.
 * The available service actions:
 * @action	getClientNotification	Return the entries for a specific entry id and type.
*/
function KalturaNotificationService(client){
	this.init(client);
}
KalturaNotificationService.inheritsFrom (KalturaServiceBase);
/**
 * Return the entries for a specific entry id and type.
 * @param	entryId	string		 (optional).
 * @param	type	int		 (optional, enum: KalturaNotificationType).
 * @return	KalturaClientNotification.
 */
KalturaNotificationService.prototype.getClientNotification = function(callback, entryId, type){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "type", type);
	this.client.queueServiceActionCall("notification", "getClientNotification", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: report.
 * The available service actions:
 * @action	getGraph	report getGraph action allows to get a graph data for a specific report. .
 * @action	getGraphs	report getGraphs action allows to get a graph data for a specific report. .
 * @action	getTotal	report getTotal action allows to get a graph data for a specific report. .
 * @action	getTable	report getTable action allows to get a graph data for a specific report. .
 * @action	getUrlForReportAsCsv	will create a Csv file for the given report and return the URL to access it.
*/
function KalturaReportService(client){
	this.init(client);
}
KalturaReportService.inheritsFrom (KalturaServiceBase);
/**
 * report getGraph action allows to get a graph data for a specific report. .
 * @return	KalturaReportGraph.
 */
KalturaReportService.prototype.getGraph = function(callback){
	var kparams = new Object();
	this.client.queueServiceActionCall("report", "getGraph", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * report getGraphs action allows to get a graph data for a specific report. .
 * @param	reportType	int		  (optional, enum: KalturaReportType).
 * @param	reportInputFilter	KalturaReportInputFilter		 (optional).
 * @param	dimension	string		 (optional).
 * @param	objectIds	string		- one ID or more (separated by ',') of specific objects to query (optional).
 * @return	array.
 */
KalturaReportService.prototype.getGraphs = function(callback, reportType, reportInputFilter, dimension, objectIds){
	if(!dimension)
		dimension = "";
	if(!objectIds)
		objectIds = "";
	var kparams = new Object();
	this.client.addParam(kparams, "reportType", reportType);
	this.client.addParam(kparams, "reportInputFilter", toParams(reportInputFilter));
	this.client.addParam(kparams, "dimension", dimension);
	this.client.addParam(kparams, "objectIds", objectIds);
	this.client.queueServiceActionCall("report", "getGraphs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * report getTotal action allows to get a graph data for a specific report. .
 * @param	reportType	int		  (optional, enum: KalturaReportType).
 * @param	reportInputFilter	KalturaReportInputFilter		 (optional).
 * @param	objectIds	string		- one ID or more (separated by ',') of specific objects to query (optional).
 * @return	KalturaReportTotal.
 */
KalturaReportService.prototype.getTotal = function(callback, reportType, reportInputFilter, objectIds){
	if(!objectIds)
		objectIds = "";
	var kparams = new Object();
	this.client.addParam(kparams, "reportType", reportType);
	this.client.addParam(kparams, "reportInputFilter", toParams(reportInputFilter));
	this.client.addParam(kparams, "objectIds", objectIds);
	this.client.queueServiceActionCall("report", "getTotal", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * report getTable action allows to get a graph data for a specific report. .
 * @param	reportType	int		  (optional, enum: KalturaReportType).
 * @param	reportInputFilter	KalturaReportInputFilter		 (optional).
 * @param	pager	KalturaFilterPager		 (optional).
 * @param	order	string		 (optional).
 * @param	objectIds	string		- one ID or more (separated by ',') of specific objects to query (optional).
 * @return	KalturaReportTable.
 */
KalturaReportService.prototype.getTable = function(callback, reportType, reportInputFilter, pager, order, objectIds){
	if(!order)
		order = "";
	if(!objectIds)
		objectIds = "";
	var kparams = new Object();
	this.client.addParam(kparams, "reportType", reportType);
	this.client.addParam(kparams, "reportInputFilter", toParams(reportInputFilter));
	this.client.addParam(kparams, "pager", toParams(pager));
	this.client.addParam(kparams, "order", order);
	this.client.addParam(kparams, "objectIds", objectIds);
	this.client.queueServiceActionCall("report", "getTable", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * will create a Csv file for the given report and return the URL to access it.
 * @param	reportTitle	string		The title of the report to display at top of CSV  (optional).
 * @param	reportText	string		The text of the filter of the report (optional).
 * @param	headers	string		The headers of the columns - a map between the enumerations on the server side and the their display text   (optional).
 * @param	reportType	int		  (optional, enum: KalturaReportType).
 * @param	reportInputFilter	KalturaReportInputFilter		 (optional).
 * @param	dimension	string			   (optional).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @param	order	string		 (optional).
 * @param	objectIds	string		- one ID or more (separated by ',') of specific objects to query (optional).
 * @return	string.
 */
KalturaReportService.prototype.getUrlForReportAsCsv = function(callback, reportTitle, reportText, headers, reportType, reportInputFilter, dimension, pager, order, objectIds){
	if(!dimension)
		dimension = "";
	if(!pager)
		pager = null;
	if(!order)
		order = "";
	if(!objectIds)
		objectIds = "";
	var kparams = new Object();
	this.client.addParam(kparams, "reportTitle", reportTitle);
	this.client.addParam(kparams, "reportText", reportText);
	this.client.addParam(kparams, "headers", headers);
	this.client.addParam(kparams, "reportType", reportType);
	this.client.addParam(kparams, "reportInputFilter", toParams(reportInputFilter));
	this.client.addParam(kparams, "dimension", dimension);
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.addParam(kparams, "order", order);
	this.client.addParam(kparams, "objectIds", objectIds);
	this.client.queueServiceActionCall("report", "getUrlForReportAsCsv", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: conversionProfile.
 * The available service actions:
 * @action	addCurrent	Add new conversion profile and set it as the current.
 * @action	getCurrent	Get the current used conversion profile.
*/
function KalturaConversionProfileService(client){
	this.init(client);
}
KalturaConversionProfileService.inheritsFrom (KalturaServiceBase);
/**
 * Add new conversion profile and set it as the current.
 * @param	conversionProfile	KalturaConversionProfile		 (optional).
 * @return	KalturaConversionProfile.
 */
KalturaConversionProfileService.prototype.addCurrent = function(callback, conversionProfile){
	var kparams = new Object();
	this.client.addParam(kparams, "conversionProfile", toParams(conversionProfile));
	this.client.queueServiceActionCall("conversionProfile", "addCurrent", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get the current used conversion profile.
 * @return	KalturaConversionProfile.
 */
KalturaConversionProfileService.prototype.getCurrent = function(callback){
	var kparams = new Object();
	this.client.queueServiceActionCall("conversionProfile", "getCurrent", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: stats.
 * The available service actions:
 * @action	collect	Will write to the event log a single line representing the event
 *	KalturaStatsEvent $event.
 * @action	reportKceError	.
*/
function KalturaStatsService(client){
	this.init(client);
}
KalturaStatsService.inheritsFrom (KalturaServiceBase);
/**
 * Will write to the event log a single line representing the event
 *	KalturaStatsEvent $event.
 * @param	event	KalturaStatsEvent		 (optional).
 * @return	.
 */
KalturaStatsService.prototype.collect = function(callback, event){
	var kparams = new Object();
	this.client.addParam(kparams, "event", toParams(event));
	this.client.queueServiceActionCall("stats", "collect", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	kalturaCEError	KalturaCEError		 (optional).
 * @return	KalturaCEError.
 */
KalturaStatsService.prototype.reportKceError = function(callback, kalturaCEError){
	var kparams = new Object();
	this.client.addParam(kparams, "kalturaCEError", toParams(kalturaCEError));
	this.client.queueServiceActionCall("stats", "reportKceError", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

