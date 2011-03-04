/**
 *Class definition for the Kaltura service: accessControl.
 * The available service actions:
 * @action	add	Add new Access Control Profile
 *	.
 * @action	get	Get Access Control Profile by id
 *	.
 * @action	update	Update Access Control Profile by id
 *	.
 * @action	delete	Delete Access Control Profile by id
 *	.
 * @action	list	List Access Control Profiles by filter and pager
 *	.
*/
function KalturaAccessControlService(client){
	this.init(client);
}
KalturaAccessControlService.inheritsFrom (KalturaServiceBase);
/**
 * Add new Access Control Profile
 *	.
 * @param	accessControl	KalturaAccessControl		 (optional).
 * @return	KalturaAccessControl.
 */
KalturaAccessControlService.prototype.add = function(callback, accessControl){
	var kparams = new Object();
	this.client.addParam(kparams, "accessControl", toParams(accessControl));
	this.client.queueServiceActionCall("accessControl", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get Access Control Profile by id
 *	.
 * @param	id	int		 (optional).
 * @return	KalturaAccessControl.
 */
KalturaAccessControlService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("accessControl", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update Access Control Profile by id
 *	.
 * @param	id	int		 (optional).
 * @param	accessControl	KalturaAccessControl		 (optional).
 * @return	KalturaAccessControl.
 */
KalturaAccessControlService.prototype.update = function(callback, id, accessControl){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "accessControl", toParams(accessControl));
	this.client.queueServiceActionCall("accessControl", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete Access Control Profile by id
 *	.
 * @param	id	int		 (optional).
 * @return	.
 */
KalturaAccessControlService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("accessControl", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List Access Control Profiles by filter and pager
 *	.
 * @param	filter	KalturaAccessControlFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaAccessControlListResponse.
 */
KalturaAccessControlService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("accessControl", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: adminUser.
 * The available service actions:
 * @action	updatePassword	Update admin user password and email
 *	.
 * @action	resetPassword	Reset admin user password and send it to the users email address
 *	.
 * @action	login	Get an admin session using admin email and password (Used for login to the KMC application)
 *	.
 * @action	setInitialPassword	Set initial users password
 *	.
*/
function KalturaAdminUserService(client){
	this.init(client);
}
KalturaAdminUserService.inheritsFrom (KalturaServiceBase);
/**
 * Update admin user password and email
 *	.
 * @param	email	string		 (optional).
 * @param	password	string		 (optional).
 * @param	newEmail	string		Optional, provide only when you want to update the email (optional).
 * @param	newPassword	string		 (optional).
 * @return	KalturaAdminUser.
 */
KalturaAdminUserService.prototype.updatePassword = function(callback, email, password, newEmail, newPassword){
	if(!newEmail)
		newEmail = "";
	if(!newPassword)
		newPassword = "";
	var kparams = new Object();
	this.client.addParam(kparams, "email", email);
	this.client.addParam(kparams, "password", password);
	this.client.addParam(kparams, "newEmail", newEmail);
	this.client.addParam(kparams, "newPassword", newPassword);
	this.client.queueServiceActionCall("adminUser", "updatePassword", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Reset admin user password and send it to the users email address
 *	.
 * @param	email	string		 (optional).
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
 * Get an admin session using admin email and password (Used for login to the KMC application)
 *	.
 * @param	email	string		 (optional).
 * @param	password	string		 (optional).
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
 * Set initial users password
 *	.
 * @param	hashKey	string		 (optional).
 * @param	newPassword	string		new password to set (optional).
 * @return	.
 */
KalturaAdminUserService.prototype.setInitialPassword = function(callback, hashKey, newPassword){
	var kparams = new Object();
	this.client.addParam(kparams, "hashKey", hashKey);
	this.client.addParam(kparams, "newPassword", newPassword);
	this.client.queueServiceActionCall("adminUser", "setInitialPassword", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: baseEntry.
 * The available service actions:
 * @action	addFromUploadedFile	Generic add entry using an uploaded file, should be used when the uploaded entry type is not known.
 * @action	get	Get base entry by ID.
 *	.
 * @action	update	Update base entry. Only the properties that were set will be updated.
 *	.
 * @action	getByIds	Get base entry by comma separated entry ids.
 *	.
 * @action	delete	Delete an entry..
 * @action	list	List base entries by filter with paging support.
 *	.
 * @action	count	Count base entries by filter.
 *	.
 * @action	upload	Upload a file to Kaltura, that can be used to create an entry. 
 *	.
 * @action	updateThumbnailJpeg	Update entry thumbnail using a raw jpeg file
 *	.
 * @action	updateThumbnailFromUrl	Update entry thumbnail using url
 *	.
 * @action	updateThumbnailFromSourceEntry	Update entry thumbnail from a different entry by a specified time offset (In seconds)
 *	.
 * @action	flag	Flag inappropriate entry for moderation
 *	.
 * @action	reject	Reject the entry and mark the pending flags (if any) as moderated (this will make the entry non playable)
 *	.
 * @action	approve	Approve the entry and mark the pending flags (if any) as moderated (this will make the entry playable) 
 *	.
 * @action	listFlags	List all pending flags for the entry
 *	.
 * @action	anonymousRank	Anonymously rank an entry, no validation is done on duplicate rankings
 *	.
 * @action	getContextData	.
*/
function KalturaBaseEntryService(client){
	this.init(client);
}
KalturaBaseEntryService.inheritsFrom (KalturaServiceBase);
/**
 * Generic add entry using an uploaded file, should be used when the uploaded entry type is not known.
 * @param	entry	KalturaBaseEntry		 (optional).
 * @param	uploadTokenId	string		 (optional).
 * @param	type	string		 (optional, enum: KalturaEntryType, default: null).
 * @return	KalturaBaseEntry.
 */
KalturaBaseEntryService.prototype.addFromUploadedFile = function(callback, entry, uploadTokenId, type){
	if(!type)
		type = null;
	var kparams = new Object();
	this.client.addParam(kparams, "entry", toParams(entry));
	this.client.addParam(kparams, "uploadTokenId", uploadTokenId);
	this.client.addParam(kparams, "type", type);
	this.client.queueServiceActionCall("baseEntry", "addFromUploadedFile", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get base entry by ID.
 *	.
 * @param	entryId	string		Entry id (optional).
 * @param	version	int		Desired version of the data (optional, default: -1).
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
 * Update base entry. Only the properties that were set will be updated.
 *	.
 * @param	entryId	string		Entry id to update (optional).
 * @param	baseEntry	KalturaBaseEntry		Base entry metadata to update (optional).
 * @return	KalturaBaseEntry.
 */
KalturaBaseEntryService.prototype.update = function(callback, entryId, baseEntry){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "baseEntry", toParams(baseEntry));
	this.client.queueServiceActionCall("baseEntry", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get base entry by comma separated entry ids.
 *	.
 * @param	entryIds	string		Comma separated string of entry ids (optional).
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
 * Delete an entry..
 * @param	entryId	string		Entry id to delete (optional).
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
 * List base entries by filter with paging support.
 *	.
 * @param	filter	KalturaBaseEntryFilter		Entry filter (optional, default: null).
 * @param	pager	KalturaFilterPager		Pager (optional, default: null).
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
 * Count base entries by filter.
 *	.
 * @param	filter	KalturaBaseEntryFilter		Entry filter (optional, default: null).
 * @return	int.
 */
KalturaBaseEntryService.prototype.count = function(callback, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("baseEntry", "count", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Upload a file to Kaltura, that can be used to create an entry. 
 *	.
 * @param	fileData	file		The file data (optional).
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
 * Update entry thumbnail using a raw jpeg file
 *	.
 * @param	entryId	string		Media entry id (optional).
 * @param	fileData	file		Jpeg file data (optional).
 * @return	KalturaBaseEntry.
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
 * Update entry thumbnail using url
 *	.
 * @param	entryId	string		Media entry id (optional).
 * @param	url	string		file url (optional).
 * @return	KalturaBaseEntry.
 */
KalturaBaseEntryService.prototype.updateThumbnailFromUrl = function(callback, entryId, url){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "url", url);
	this.client.queueServiceActionCall("baseEntry", "updateThumbnailFromUrl", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update entry thumbnail from a different entry by a specified time offset (In seconds)
 *	.
 * @param	entryId	string		Media entry id (optional).
 * @param	sourceEntryId	string		Media entry id (optional).
 * @param	timeOffset	int		Time offset (in seconds) (optional).
 * @return	KalturaBaseEntry.
 */
KalturaBaseEntryService.prototype.updateThumbnailFromSourceEntry = function(callback, entryId, sourceEntryId, timeOffset){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "sourceEntryId", sourceEntryId);
	this.client.addParam(kparams, "timeOffset", timeOffset);
	this.client.queueServiceActionCall("baseEntry", "updateThumbnailFromSourceEntry", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Flag inappropriate entry for moderation
 *	.
 * @param	moderationFlag	KalturaModerationFlag		 (optional).
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
 * Reject the entry and mark the pending flags (if any) as moderated (this will make the entry non playable)
 *	.
 * @param	entryId	string		 (optional).
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
 * Approve the entry and mark the pending flags (if any) as moderated (this will make the entry playable) 
 *	.
 * @param	entryId	string		 (optional).
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
 * List all pending flags for the entry
 *	.
 * @param	entryId	string		 (optional).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
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
 * Anonymously rank an entry, no validation is done on duplicate rankings
 *	.
 * @param	entryId	string		 (optional).
 * @param	rank	int		 (optional).
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
 * .
 * @param	entryId	string		 (optional).
 * @param	contextDataParams	KalturaEntryContextDataParams		 (optional).
 * @return	KalturaEntryContextDataResult.
 */
KalturaBaseEntryService.prototype.getContextData = function(callback, entryId, contextDataParams){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "contextDataParams", toParams(contextDataParams));
	this.client.queueServiceActionCall("baseEntry", "getContextData", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: bulkUpload.
 * The available service actions:
 * @action	add	Add new bulk upload batch job
 *	Conversion profile id can be specified in the API or in the CSV file, the one in the CSV file will be stronger.
 *	If no conversion profile was specified, partner's default will be used
 *	.
 * @action	get	Get bulk upload batch job by id.
 * @action	list	List bulk upload batch jobs.
*/
function KalturaBulkUploadService(client){
	this.init(client);
}
KalturaBulkUploadService.inheritsFrom (KalturaServiceBase);
/**
 * Add new bulk upload batch job
 *	Conversion profile id can be specified in the API or in the CSV file, the one in the CSV file will be stronger.
 *	If no conversion profile was specified, partner's default will be used
 *	.
 * @param	conversionProfileId	int		Convertion profile id to use for converting the current bulk (-1 to use partner's default) (optional).
 * @param	csvFileData	file		CSV File (optional).
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
 * Get bulk upload batch job by id.
 * @param	id	int		 (optional).
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
 * List bulk upload batch jobs.
 * @param	pager	KalturaFilterPager		 (optional, default: null).
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
 *Class definition for the Kaltura service: category.
 * The available service actions:
 * @action	add	Add new Category
 *	.
 * @action	get	Get Category by id
 *	.
 * @action	update	Update Category
 *	.
 * @action	delete	Delete a Category
 *	.
 * @action	list	List all categories
 *	.
*/
function KalturaCategoryService(client){
	this.init(client);
}
KalturaCategoryService.inheritsFrom (KalturaServiceBase);
/**
 * Add new Category
 *	.
 * @param	category	KalturaCategory		 (optional).
 * @return	KalturaCategory.
 */
KalturaCategoryService.prototype.add = function(callback, category){
	var kparams = new Object();
	this.client.addParam(kparams, "category", toParams(category));
	this.client.queueServiceActionCall("category", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get Category by id
 *	.
 * @param	id	int		 (optional).
 * @return	KalturaCategory.
 */
KalturaCategoryService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("category", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update Category
 *	.
 * @param	id	int		 (optional).
 * @param	category	KalturaCategory		 (optional).
 * @return	KalturaCategory.
 */
KalturaCategoryService.prototype.update = function(callback, id, category){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "category", toParams(category));
	this.client.queueServiceActionCall("category", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete a Category
 *	.
 * @param	id	int		 (optional).
 * @return	.
 */
KalturaCategoryService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("category", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List all categories
 *	.
 * @param	filter	KalturaCategoryFilter		 (optional, default: null).
 * @return	KalturaCategoryListResponse.
 */
KalturaCategoryService.prototype.listAction = function(callback, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("category", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: conversionProfile.
 * The available service actions:
 * @action	add	Add new Conversion Profile
 *	.
 * @action	get	Get Conversion Profile by ID
 *	.
 * @action	update	Update Conversion Profile by ID
 *	.
 * @action	delete	Delete Conversion Profile by ID
 *	.
 * @action	list	List Conversion Profiles by filter with paging support
 *	.
*/
function KalturaConversionProfileService(client){
	this.init(client);
}
KalturaConversionProfileService.inheritsFrom (KalturaServiceBase);
/**
 * Add new Conversion Profile
 *	.
 * @param	conversionProfile	KalturaConversionProfile		 (optional).
 * @return	KalturaConversionProfile.
 */
KalturaConversionProfileService.prototype.add = function(callback, conversionProfile){
	var kparams = new Object();
	this.client.addParam(kparams, "conversionProfile", toParams(conversionProfile));
	this.client.queueServiceActionCall("conversionProfile", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get Conversion Profile by ID
 *	.
 * @param	id	int		 (optional).
 * @return	KalturaConversionProfile.
 */
KalturaConversionProfileService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("conversionProfile", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update Conversion Profile by ID
 *	.
 * @param	id	int		 (optional).
 * @param	conversionProfile	KalturaConversionProfile		 (optional).
 * @return	KalturaConversionProfile.
 */
KalturaConversionProfileService.prototype.update = function(callback, id, conversionProfile){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "conversionProfile", toParams(conversionProfile));
	this.client.queueServiceActionCall("conversionProfile", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete Conversion Profile by ID
 *	.
 * @param	id	int		 (optional).
 * @return	.
 */
KalturaConversionProfileService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("conversionProfile", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List Conversion Profiles by filter with paging support
 *	.
 * @param	filter	KalturaConversionProfileFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaConversionProfileListResponse.
 */
KalturaConversionProfileService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("conversionProfile", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: data.
 * The available service actions:
 * @action	add	Adds a new data entry
 *	.
 * @action	get	Get data entry by ID.
 *	.
 * @action	update	Update data entry. Only the properties that were set will be updated.
 *	.
 * @action	delete	Delete a data entry.
 *	.
 * @action	list	List data entries by filter with paging support.
 *	.
*/
function KalturaDataService(client){
	this.init(client);
}
KalturaDataService.inheritsFrom (KalturaServiceBase);
/**
 * Adds a new data entry
 *	.
 * @param	dataEntry	KalturaDataEntry		Data entry (optional).
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
 * Get data entry by ID.
 *	.
 * @param	entryId	string		Data entry id (optional).
 * @param	version	int		Desired version of the data (optional, default: -1).
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
 * Update data entry. Only the properties that were set will be updated.
 *	.
 * @param	entryId	string		Data entry id to update (optional).
 * @param	documentEntry	KalturaDataEntry		Data entry metadata to update (optional).
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
 * Delete a data entry.
 *	.
 * @param	entryId	string		Data entry id to delete (optional).
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
 * List data entries by filter with paging support.
 *	.
 * @param	filter	KalturaDataEntryFilter		Document entry filter (optional, default: null).
 * @param	pager	KalturaFilterPager		Pager (optional, default: null).
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
 *Class definition for the Kaltura service: EmailIngestionProfile.
 * The available service actions:
 * @action	add	EmailIngestionProfile Add action allows you to add a EmailIngestionProfile to Kaltura DB.
 * @action	getByEmailAddress	Retrieve a EmailIngestionProfile by email address.
 * @action	get	Retrieve a EmailIngestionProfile by id.
 * @action	update	Update an existing EmailIngestionProfile.
 * @action	delete	Delete an existing EmailIngestionProfile.
 * @action	addMediaEntry	add KalturaMediaEntry from email ingestion.
*/
function KalturaEmailIngestionProfileService(client){
	this.init(client);
}
KalturaEmailIngestionProfileService.inheritsFrom (KalturaServiceBase);
/**
 * EmailIngestionProfile Add action allows you to add a EmailIngestionProfile to Kaltura DB.
 * @param	EmailIP	KalturaEmailIngestionProfile		Mandatory input parameter of type KalturaEmailIngestionProfile (optional).
 * @return	KalturaEmailIngestionProfile.
 */
KalturaEmailIngestionProfileService.prototype.add = function(callback, EmailIP){
	var kparams = new Object();
	this.client.addParam(kparams, "EmailIP", toParams(EmailIP));
	this.client.queueServiceActionCall("EmailIngestionProfile", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve a EmailIngestionProfile by email address.
 * @param	emailAddress	string		 (optional).
 * @return	KalturaEmailIngestionProfile.
 */
KalturaEmailIngestionProfileService.prototype.getByEmailAddress = function(callback, emailAddress){
	var kparams = new Object();
	this.client.addParam(kparams, "emailAddress", emailAddress);
	this.client.queueServiceActionCall("EmailIngestionProfile", "getByEmailAddress", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve a EmailIngestionProfile by id.
 * @param	id	int		 (optional).
 * @return	KalturaEmailIngestionProfile.
 */
KalturaEmailIngestionProfileService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("EmailIngestionProfile", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update an existing EmailIngestionProfile.
 * @param	id	int		 (optional).
 * @param	EmailIP	KalturaEmailIngestionProfile		 (optional).
 * @return	KalturaEmailIngestionProfile.
 */
KalturaEmailIngestionProfileService.prototype.update = function(callback, id, EmailIP){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "EmailIP", toParams(EmailIP));
	this.client.queueServiceActionCall("EmailIngestionProfile", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete an existing EmailIngestionProfile.
 * @param	id	int		 (optional).
 * @return	.
 */
KalturaEmailIngestionProfileService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("EmailIngestionProfile", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * add KalturaMediaEntry from email ingestion.
 * @param	mediaEntry	KalturaMediaEntry		Media entry metadata (optional).
 * @param	uploadTokenId	string		Upload token id (optional).
 * @param	emailProfId	int		 (optional).
 * @param	fromAddress	string		 (optional).
 * @param	emailMsgId	string		 (optional).
 * @return	KalturaMediaEntry.
 */
KalturaEmailIngestionProfileService.prototype.addMediaEntry = function(callback, mediaEntry, uploadTokenId, emailProfId, fromAddress, emailMsgId){
	var kparams = new Object();
	this.client.addParam(kparams, "mediaEntry", toParams(mediaEntry));
	this.client.addParam(kparams, "uploadTokenId", uploadTokenId);
	this.client.addParam(kparams, "emailProfId", emailProfId);
	this.client.addParam(kparams, "fromAddress", fromAddress);
	this.client.addParam(kparams, "emailMsgId", emailMsgId);
	this.client.queueServiceActionCall("EmailIngestionProfile", "addMediaEntry", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: flavorAsset.
 * The available service actions:
 * @action	get	Get Flavor Asset by ID
 *	.
 * @action	getByEntryId	Get Flavor Assets for Entry
 *	.
 * @action	getWebPlayableByEntryId	Get web playable Flavor Assets for Entry
 *	.
 * @action	convert	Add and convert new Flavor Asset for Entry with specific Flavor Params
 *	.
 * @action	reconvert	Reconvert Flavor Asset by ID
 *	.
 * @action	delete	Delete Flavor Asset by ID
 *	.
 * @action	getDownloadUrl	Get download URL for the Flavor Asset
 *	.
 * @action	getFlavorAssetsWithParams	Get Flavor Asset with the relevant Flavor Params (Flavor Params can exist without Flavor Asset & vice versa)
 *	.
*/
function KalturaFlavorAssetService(client){
	this.init(client);
}
KalturaFlavorAssetService.inheritsFrom (KalturaServiceBase);
/**
 * Get Flavor Asset by ID
 *	.
 * @param	id	string		 (optional).
 * @return	KalturaFlavorAsset.
 */
KalturaFlavorAssetService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("flavorAsset", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get Flavor Assets for Entry
 *	.
 * @param	entryId	string		 (optional).
 * @return	array.
 */
KalturaFlavorAssetService.prototype.getByEntryId = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("flavorAsset", "getByEntryId", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get web playable Flavor Assets for Entry
 *	.
 * @param	entryId	string		 (optional).
 * @return	array.
 */
KalturaFlavorAssetService.prototype.getWebPlayableByEntryId = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("flavorAsset", "getWebPlayableByEntryId", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Add and convert new Flavor Asset for Entry with specific Flavor Params
 *	.
 * @param	entryId	string		 (optional).
 * @param	flavorParamsId	int		 (optional).
 * @return	.
 */
KalturaFlavorAssetService.prototype.convert = function(callback, entryId, flavorParamsId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "flavorParamsId", flavorParamsId);
	this.client.queueServiceActionCall("flavorAsset", "convert", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Reconvert Flavor Asset by ID
 *	.
 * @param	id	string		Flavor Asset ID (optional).
 * @return	.
 */
KalturaFlavorAssetService.prototype.reconvert = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("flavorAsset", "reconvert", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete Flavor Asset by ID
 *	.
 * @param	id	string		 (optional).
 * @return	.
 */
KalturaFlavorAssetService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("flavorAsset", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get download URL for the Flavor Asset
 *	.
 * @param	id	string		 (optional).
 * @return	string.
 */
KalturaFlavorAssetService.prototype.getDownloadUrl = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("flavorAsset", "getDownloadUrl", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get Flavor Asset with the relevant Flavor Params (Flavor Params can exist without Flavor Asset & vice versa)
 *	.
 * @param	entryId	string		 (optional).
 * @return	array.
 */
KalturaFlavorAssetService.prototype.getFlavorAssetsWithParams = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("flavorAsset", "getFlavorAssetsWithParams", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: flavorParams.
 * The available service actions:
 * @action	add	Add new Flavor Params
 *	.
 * @action	get	Get Flavor Params by ID
 *	.
 * @action	update	Update Flavor Params by ID
 *	.
 * @action	delete	Delete Flavor Params by ID
 *	.
 * @action	list	List Flavor Params by filter with paging support (By default - all system default params will be listed too)
 *	.
 * @action	getByConversionProfileId	Get Flavor Params by Conversion Profile ID
 *	.
*/
function KalturaFlavorParamsService(client){
	this.init(client);
}
KalturaFlavorParamsService.inheritsFrom (KalturaServiceBase);
/**
 * Add new Flavor Params
 *	.
 * @param	flavorParams	KalturaFlavorParams		 (optional).
 * @return	KalturaFlavorParams.
 */
KalturaFlavorParamsService.prototype.add = function(callback, flavorParams){
	var kparams = new Object();
	this.client.addParam(kparams, "flavorParams", toParams(flavorParams));
	this.client.queueServiceActionCall("flavorParams", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get Flavor Params by ID
 *	.
 * @param	id	int		 (optional).
 * @return	KalturaFlavorParams.
 */
KalturaFlavorParamsService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("flavorParams", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update Flavor Params by ID
 *	.
 * @param	id	int		 (optional).
 * @param	flavorParams	KalturaFlavorParams		 (optional).
 * @return	KalturaFlavorParams.
 */
KalturaFlavorParamsService.prototype.update = function(callback, id, flavorParams){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "flavorParams", toParams(flavorParams));
	this.client.queueServiceActionCall("flavorParams", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete Flavor Params by ID
 *	.
 * @param	id	int		 (optional).
 * @return	.
 */
KalturaFlavorParamsService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("flavorParams", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List Flavor Params by filter with paging support (By default - all system default params will be listed too)
 *	.
 * @param	filter	KalturaFlavorParamsFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaFlavorParamsListResponse.
 */
KalturaFlavorParamsService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("flavorParams", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get Flavor Params by Conversion Profile ID
 *	.
 * @param	conversionProfileId	int		 (optional).
 * @return	array.
 */
KalturaFlavorParamsService.prototype.getByConversionProfileId = function(callback, conversionProfileId){
	var kparams = new Object();
	this.client.addParam(kparams, "conversionProfileId", conversionProfileId);
	this.client.queueServiceActionCall("flavorParams", "getByConversionProfileId", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: liveStream.
 * The available service actions:
 * @action	add	Adds new live stream entry.
 *	The entry will be queued for provision.
 *	.
 * @action	get	Get live stream entry by ID.
 *	.
 * @action	update	Update live stream entry. Only the properties that were set will be updated.
 *	.
 * @action	delete	Delete a live stream entry.
 *	.
 * @action	list	List live stream entries by filter with paging support.
 *	.
 * @action	updateOfflineThumbnailJpeg	Update live stream entry thumbnail using a raw jpeg file
 *	.
 * @action	updateOfflineThumbnailFromUrl	Update entry thumbnail using url
 *	.
*/
function KalturaLiveStreamService(client){
	this.init(client);
}
KalturaLiveStreamService.inheritsFrom (KalturaServiceBase);
/**
 * Adds new live stream entry.
 *	The entry will be queued for provision.
 *	.
 * @param	liveStreamEntry	KalturaLiveStreamAdminEntry		Live stream entry metadata   (optional).
 * @param	sourceType	int		 Live stream source type (optional, enum: KalturaSourceType).
 * @return	KalturaLiveStreamAdminEntry.
 */
KalturaLiveStreamService.prototype.add = function(callback, liveStreamEntry, sourceType){
	if(!sourceType)
		sourceType = "";
	var kparams = new Object();
	this.client.addParam(kparams, "liveStreamEntry", toParams(liveStreamEntry));
	this.client.addParam(kparams, "sourceType", sourceType);
	this.client.queueServiceActionCall("liveStream", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get live stream entry by ID.
 *	.
 * @param	entryId	string		Live stream entry id (optional).
 * @param	version	int		Desired version of the data (optional, default: -1).
 * @return	KalturaLiveStreamEntry.
 */
KalturaLiveStreamService.prototype.get = function(callback, entryId, version){
	if(!version)
		version = -1;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "version", version);
	this.client.queueServiceActionCall("liveStream", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update live stream entry. Only the properties that were set will be updated.
 *	.
 * @param	entryId	string		Live stream entry id to update (optional).
 * @param	liveStreamEntry	KalturaLiveStreamAdminEntry		Live stream entry metadata to update (optional).
 * @return	KalturaLiveStreamAdminEntry.
 */
KalturaLiveStreamService.prototype.update = function(callback, entryId, liveStreamEntry){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "liveStreamEntry", toParams(liveStreamEntry));
	this.client.queueServiceActionCall("liveStream", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete a live stream entry.
 *	.
 * @param	entryId	string		Live stream entry id to delete (optional).
 * @return	.
 */
KalturaLiveStreamService.prototype.deleteAction = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("liveStream", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List live stream entries by filter with paging support.
 *	.
 * @param	filter	KalturaLiveStreamEntryFilter		live stream entry filter (optional, default: null).
 * @param	pager	KalturaFilterPager		Pager (optional, default: null).
 * @return	KalturaLiveStreamListResponse.
 */
KalturaLiveStreamService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("liveStream", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update live stream entry thumbnail using a raw jpeg file
 *	.
 * @param	entryId	string		live stream entry id (optional).
 * @param	fileData	file		Jpeg file data (optional).
 * @return	KalturaLiveStreamEntry.
 */
KalturaLiveStreamService.prototype.updateOfflineThumbnailJpeg = function(callback, entryId, fileData){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	kfiles = new Object();
	this.client.addParam(kfiles, "fileData", fileData);
	this.client.queueServiceActionCall("liveStream", "updateOfflineThumbnailJpeg", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update entry thumbnail using url
 *	.
 * @param	entryId	string		live stream entry id (optional).
 * @param	url	string		file url (optional).
 * @return	KalturaLiveStreamEntry.
 */
KalturaLiveStreamService.prototype.updateOfflineThumbnailFromUrl = function(callback, entryId, url){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "url", url);
	this.client.queueServiceActionCall("liveStream", "updateOfflineThumbnailFromUrl", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: media.
 * The available service actions:
 * @action	addFromBulk	Adds new media entry by importing an HTTP or FTP URL.
 *	The entry will be queued for import and then for conversion.
 *	This action should be exposed only to the batches
 *	.
 * @action	addFromUrl	Adds new media entry by importing an HTTP or FTP URL.
 *	The entry will be queued for import and then for conversion.
 *	.
 * @action	addFromSearchResult	Adds new media entry by importing the media file from a search provider. 
 *	This action should be used with the search service result.
 *	.
 * @action	addFromUploadedFile	Add new entry after the specific media file was uploaded and the upload token id exists
 *	.
 * @action	addFromRecordedWebcam	Add new entry after the file was recored on the server and the token id exists
 *	.
 * @action	addFromEntry	Copy entry into new entry
 *	.
 * @action	addFromFlavorAsset	Copy flavor asset into new entry
 *	.
 * @action	convert	Convert entry
 *	.
 * @action	get	Get media entry by ID.
 *	.
 * @action	update	Update media entry. Only the properties that were set will be updated.
 *	.
 * @action	delete	Delete a media entry.
 *	.
 * @action	list	List media entries by filter with paging support.
 *	.
 * @action	count	Count media entries by filter.
 *	.
 * @action	upload	Upload a media file to Kaltura, then the file can be used to create a media entry. 
 *	.
 * @action	updateThumbnail	Update media entry thumbnail by a specified time offset (In seconds)
 *	If flavor params id not specified, source flavor will be used by default
 *	.
 * @action	updateThumbnailFromSourceEntry	Update media entry thumbnail from a different entry by a specified time offset (In seconds)
 *	If flavor params id not specified, source flavor will be used by default
 *	.
 * @action	updateThumbnailJpeg	Update media entry thumbnail using a raw jpeg file
 *	.
 * @action	updateThumbnailFromUrl	Update entry thumbnail using url
 *	.
 * @action	requestConversion	Request a new conversion job, this can be used to convert the media entry to a different format
 *	.
 * @action	flag	Flag inappropriate media entry for moderation
 *	.
 * @action	reject	Reject the media entry and mark the pending flags (if any) as moderated (this will make the entry non playable)
 *	.
 * @action	approve	Approve the media entry and mark the pending flags (if any) as moderated (this will make the entry playable) 
 *	.
 * @action	listFlags	List all pending flags for the media entry.
 * @action	anonymousRank	Anonymously rank a media entry, no validation is done on duplicate rankings
 *	.
*/
function KalturaMediaService(client){
	this.init(client);
}
KalturaMediaService.inheritsFrom (KalturaServiceBase);
/**
 * Adds new media entry by importing an HTTP or FTP URL.
 *	The entry will be queued for import and then for conversion.
 *	This action should be exposed only to the batches
 *	.
 * @param	mediaEntry	KalturaMediaEntry		Media entry metadata   (optional).
 * @param	url	string		An HTTP or FTP URL (optional).
 * @param	bulkUploadId	int		The id of the bulk upload job (optional).
 * @return	KalturaMediaEntry.
 */
KalturaMediaService.prototype.addFromBulk = function(callback, mediaEntry, url, bulkUploadId){
	var kparams = new Object();
	this.client.addParam(kparams, "mediaEntry", toParams(mediaEntry));
	this.client.addParam(kparams, "url", url);
	this.client.addParam(kparams, "bulkUploadId", bulkUploadId);
	this.client.queueServiceActionCall("media", "addFromBulk", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Adds new media entry by importing an HTTP or FTP URL.
 *	The entry will be queued for import and then for conversion.
 *	.
 * @param	mediaEntry	KalturaMediaEntry		Media entry metadata   (optional).
 * @param	url	string		An HTTP or FTP URL (optional).
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
 *	This action should be used with the search service result.
 *	.
 * @param	mediaEntry	KalturaMediaEntry		Media entry metadata (optional, default: null).
 * @param	searchResult	KalturaSearchResult		Result object from search service (optional, default: null).
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
 * Add new entry after the specific media file was uploaded and the upload token id exists
 *	.
 * @param	mediaEntry	KalturaMediaEntry		Media entry metadata (optional).
 * @param	uploadTokenId	string		Upload token id (optional).
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
 * Add new entry after the file was recored on the server and the token id exists
 *	.
 * @param	mediaEntry	KalturaMediaEntry		Media entry metadata (optional).
 * @param	webcamTokenId	string		Token id for the recored webcam file  (optional).
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
 * Copy entry into new entry
 *	.
 * @param	sourceEntryId	string		Media entry id to copy from (optional).
 * @param	mediaEntry	KalturaMediaEntry		Media entry metadata (optional, default: null).
 * @param	sourceFlavorParamsId	int		The flavor to be used as the new entry source, source flavor will be used if not specified (optional).
 * @return	KalturaMediaEntry.
 */
KalturaMediaService.prototype.addFromEntry = function(callback, sourceEntryId, mediaEntry, sourceFlavorParamsId){
	if(!mediaEntry)
		mediaEntry = null;
	if(!sourceFlavorParamsId)
		sourceFlavorParamsId = "";
	var kparams = new Object();
	this.client.addParam(kparams, "sourceEntryId", sourceEntryId);
	if (mediaEntry != null)
		this.client.addParam(kparams, "mediaEntry", toParams(mediaEntry));
	this.client.addParam(kparams, "sourceFlavorParamsId", sourceFlavorParamsId);
	this.client.queueServiceActionCall("media", "addFromEntry", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Copy flavor asset into new entry
 *	.
 * @param	sourceFlavorAssetId	string		Flavor asset id to be used as the new entry source (optional).
 * @param	mediaEntry	KalturaMediaEntry		Media entry metadata (optional, default: null).
 * @return	KalturaMediaEntry.
 */
KalturaMediaService.prototype.addFromFlavorAsset = function(callback, sourceFlavorAssetId, mediaEntry){
	if(!mediaEntry)
		mediaEntry = null;
	var kparams = new Object();
	this.client.addParam(kparams, "sourceFlavorAssetId", sourceFlavorAssetId);
	if (mediaEntry != null)
		this.client.addParam(kparams, "mediaEntry", toParams(mediaEntry));
	this.client.queueServiceActionCall("media", "addFromFlavorAsset", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Convert entry
 *	.
 * @param	entryId	string		Media entry id (optional).
 * @param	conversionProfileId	int		 (optional).
 * @param	dynamicConversionAttributes	array		 (optional, default: null).
 * @return	int.
 */
KalturaMediaService.prototype.convert = function(callback, entryId, conversionProfileId, dynamicConversionAttributes){
	if(!conversionProfileId)
		conversionProfileId = "";
	if(!dynamicConversionAttributes)
		dynamicConversionAttributes = null;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "conversionProfileId", conversionProfileId);
	if(dynamicConversionAttributes != null)
	for(var index in dynamicConversionAttributes)
	{
		var obj = dynamicConversionAttributes[index];
		this.client.addParam(kparams, "dynamicConversionAttributes:" + index, toParams(obj));
	}
	this.client.queueServiceActionCall("media", "convert", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get media entry by ID.
 *	.
 * @param	entryId	string		Media entry id (optional).
 * @param	version	int		Desired version of the data (optional, default: -1).
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
 * Update media entry. Only the properties that were set will be updated.
 *	.
 * @param	entryId	string		Media entry id to update (optional).
 * @param	mediaEntry	KalturaMediaEntry		Media entry metadata to update (optional).
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
 * Delete a media entry.
 *	.
 * @param	entryId	string		Media entry id to delete (optional).
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
 * List media entries by filter with paging support.
 *	.
 * @param	filter	KalturaMediaEntryFilter		Media entry filter (optional, default: null).
 * @param	pager	KalturaFilterPager		Pager (optional, default: null).
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
 * Count media entries by filter.
 *	.
 * @param	filter	KalturaMediaEntryFilter		Media entry filter (optional, default: null).
 * @return	int.
 */
KalturaMediaService.prototype.count = function(callback, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("media", "count", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Upload a media file to Kaltura, then the file can be used to create a media entry. 
 *	.
 * @param	fileData	file		The file data (optional).
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
 * Update media entry thumbnail by a specified time offset (In seconds)
 *	If flavor params id not specified, source flavor will be used by default
 *	.
 * @param	entryId	string		Media entry id (optional).
 * @param	timeOffset	int		Time offset (in seconds) (optional).
 * @param	flavorParamsId	int		The flavor params id to be used (optional).
 * @return	KalturaMediaEntry.
 */
KalturaMediaService.prototype.updateThumbnail = function(callback, entryId, timeOffset, flavorParamsId){
	if(!flavorParamsId)
		flavorParamsId = "";
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "timeOffset", timeOffset);
	this.client.addParam(kparams, "flavorParamsId", flavorParamsId);
	this.client.queueServiceActionCall("media", "updateThumbnail", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update media entry thumbnail from a different entry by a specified time offset (In seconds)
 *	If flavor params id not specified, source flavor will be used by default
 *	.
 * @param	entryId	string		Media entry id (optional).
 * @param	sourceEntryId	string		Media entry id (optional).
 * @param	timeOffset	int		Time offset (in seconds) (optional).
 * @param	flavorParamsId	int		The flavor params id to be used (optional).
 * @return	KalturaMediaEntry.
 */
KalturaMediaService.prototype.updateThumbnailFromSourceEntry = function(callback, entryId, sourceEntryId, timeOffset, flavorParamsId){
	if(!flavorParamsId)
		flavorParamsId = "";
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "sourceEntryId", sourceEntryId);
	this.client.addParam(kparams, "timeOffset", timeOffset);
	this.client.addParam(kparams, "flavorParamsId", flavorParamsId);
	this.client.queueServiceActionCall("media", "updateThumbnailFromSourceEntry", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update media entry thumbnail using a raw jpeg file
 *	.
 * @param	entryId	string		Media entry id (optional).
 * @param	fileData	file		Jpeg file data (optional).
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
 * Update entry thumbnail using url
 *	.
 * @param	entryId	string		Media entry id (optional).
 * @param	url	string		file url (optional).
 * @return	KalturaBaseEntry.
 */
KalturaMediaService.prototype.updateThumbnailFromUrl = function(callback, entryId, url){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "url", url);
	this.client.queueServiceActionCall("media", "updateThumbnailFromUrl", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Request a new conversion job, this can be used to convert the media entry to a different format
 *	.
 * @param	entryId	string		Media entry id (optional).
 * @param	fileFormat	string		Format to convert (optional).
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
 * Flag inappropriate media entry for moderation
 *	.
 * @param	moderationFlag	KalturaModerationFlag		 (optional).
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
 * Reject the media entry and mark the pending flags (if any) as moderated (this will make the entry non playable)
 *	.
 * @param	entryId	string		 (optional).
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
 * Approve the media entry and mark the pending flags (if any) as moderated (this will make the entry playable) 
 *	.
 * @param	entryId	string		 (optional).
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
 * List all pending flags for the media entry.
 * @param	entryId	string		 (optional).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
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
 * Anonymously rank a media entry, no validation is done on duplicate rankings
 *	.
 * @param	entryId	string		 (optional).
 * @param	rank	int		 (optional).
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
 *	If the dataContent is null, a default timeline will be created.
 *	.
 * @action	get	Get mix entry by id.
 *	.
 * @action	update	Update mix entry. Only the properties that were set will be updated.
 *	.
 * @action	delete	Delete a mix entry..
 * @action	list	List entries by filter with paging support.
 *	Return parameter is an array of mix entries.
 *	.
 * @action	count	Count mix entries by filter.
 *	.
 * @action	clone	Clones an existing mix..
 * @action	appendMediaEntry	Appends a media entry to a the end of the mix timeline, this will save the mix timeline as a new version.
 *	.
 * @action	requestFlattening	Request a new flattening job, flattening is used to convert a video mix to a video file. 
 *	.
 * @action	getMixesByMediaId	Get the mixes in which the media entry is included.
 * @action	getReadyMediaEntries	Get all ready media entries that exist in the given mix id.
 * @action	anonymousRank	Anonymously rank a mix entry, no validation is done on duplicate rankings
 *	.
*/
function KalturaMixingService(client){
	this.init(client);
}
KalturaMixingService.inheritsFrom (KalturaServiceBase);
/**
 * Adds a new mix.
 *	If the dataContent is null, a default timeline will be created.
 *	.
 * @param	mixEntry	KalturaMixEntry		Mix entry metadata (optional).
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
 * Get mix entry by id.
 *	.
 * @param	entryId	string		Mix entry id (optional).
 * @param	version	int		Desired version of the data (optional, default: -1).
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
 * Update mix entry. Only the properties that were set will be updated.
 *	.
 * @param	entryId	string		Mix entry id to update (optional).
 * @param	mixEntry	KalturaMixEntry		Mix entry metadata to update (optional).
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
 * Delete a mix entry..
 * @param	entryId	string		Mix entry id to delete (optional).
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
 *	Return parameter is an array of mix entries.
 *	.
 * @param	filter	KalturaMixEntryFilter		Mix entry filter (optional, default: null).
 * @param	pager	KalturaFilterPager		Pager (optional, default: null).
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
 * Count mix entries by filter.
 *	.
 * @param	filter	KalturaMediaEntryFilter		Media entry filter (optional, default: null).
 * @return	int.
 */
KalturaMixingService.prototype.count = function(callback, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("mixing", "count", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Clones an existing mix..
 * @param	entryId	string		Mix entry id to clone (optional).
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
 * Appends a media entry to a the end of the mix timeline, this will save the mix timeline as a new version.
 *	.
 * @param	mixEntryId	string		Mix entry to append to its timeline (optional).
 * @param	mediaEntryId	string		Media entry to append to the timeline (optional).
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
 * Request a new flattening job, flattening is used to convert a video mix to a video file. 
 *	.
 * @param	entryId	string		Mix entry id (optional).
 * @param	fileFormat	string		Format to convert (optional).
 * @param	version	int		Version to flatten (If not set, latest will be used) (optional, default: -1).
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
 * Get the mixes in which the media entry is included.
 * @param	mediaEntryId	string		 (optional).
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
 * Get all ready media entries that exist in the given mix id.
 * @param	mixId	string		 (optional).
 * @param	version	int		Desired version to get the data from (optional, default: -1).
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
 * Anonymously rank a mix entry, no validation is done on duplicate rankings
 *	.
 * @param	entryId	string		 (optional).
 * @param	rank	int		 (optional).
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
 *Class definition for the Kaltura service: notification.
 * The available service actions:
 * @action	getClientNotification	Return the notifications for a specific entry id and type
 *	.
*/
function KalturaNotificationService(client){
	this.init(client);
}
KalturaNotificationService.inheritsFrom (KalturaServiceBase);
/**
 * Return the notifications for a specific entry id and type
 *	.
 * @param	entryId	string		 (optional).
 * @param	type	int		 (optional, enum: KalturaNotificationType).
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
 *Class definition for the Kaltura service: partner.
 * The available service actions:
 * @action	register	Register to Kaltura's partner program
 *	.
 * @action	update	Update details and settings of you existing partner
 *	.
 * @action	getSecrets	Retrieve partner secret and admin secret
 *	.
 * @action	getInfo	Retrieve all info about partner
 *	This service gets no parameters, and is using the KS to know which partnerId info should be returned
 *	.
 * @action	getUsage	Get usage statistics for a partner
 *	Calculation is done according to partner's package
 *	Additional data returned is a graph points of streaming usage in a timeframe
 *	The resolution can be "days" or "months"
 *	.
*/
function KalturaPartnerService(client){
	this.init(client);
}
KalturaPartnerService.inheritsFrom (KalturaServiceBase);
/**
 * Register to Kaltura's partner program
 *	.
 * @param	partner	KalturaPartner		 (optional).
 * @param	cmsPassword	string		 (optional).
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
 * Update details and settings of you existing partner
 *	.
 * @param	partner	KalturaPartner		 (optional).
 * @param	allowEmpty	bool		 (optional, default: false).
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
 * Retrieve partner secret and admin secret
 *	.
 * @param	partnerId	int		 (optional).
 * @param	adminEmail	string		 (optional).
 * @param	cmsPassword	string		 (optional).
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
 *	This service gets no parameters, and is using the KS to know which partnerId info should be returned
 *	.
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
 *	The resolution can be "days" or "months"
 *	.
 * @param	year	int		 (optional).
 * @param	month	int		 (optional, default: 1).
 * @param	resolution	string		accepted values are "days" or "months" (optional, default: days).
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
 *Class definition for the Kaltura service: playlist.
 * The available service actions:
 * @action	add	Add new playlist
 *	Note that all entries used in a playlist will become public and may appear in KalturaNetwork
 *	.
 * @action	get	Retrieve a playlist
 *	.
 * @action	update	Update existing playlist
 *	Note - you cannot change playlist type. updated playlist must be of the same type.
 *	.
 * @action	delete	Delete existing playlist
 *	.
 * @action	clone	Clone an existing playlist
 *	.
 * @action	list	List available playlists
 *	.
 * @action	execute	Retrieve playlist for playing purpose
 *	.
 * @action	executeFromContent	Retrieve playlist for playing purpose, based on content
 *	.
 * @action	executeFromFilters	Revrieve playlist for playing purpose, based on media entry filters
 *	.
 * @action	getStatsFromContent	Retrieve playlist statistics
 *	.
*/
function KalturaPlaylistService(client){
	this.init(client);
}
KalturaPlaylistService.inheritsFrom (KalturaServiceBase);
/**
 * Add new playlist
 *	Note that all entries used in a playlist will become public and may appear in KalturaNetwork
 *	.
 * @param	playlist	KalturaPlaylist		 (optional).
 * @param	updateStats	bool		 (optional, default: false).
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
 * Retrieve a playlist
 *	.
 * @param	id	string		 (optional).
 * @param	version	int		Desired version of the data (optional, default: -1).
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
 *	Note - you cannot change playlist type. updated playlist must be of the same type.
 *	.
 * @param	id	string		 (optional).
 * @param	playlist	KalturaPlaylist		 (optional).
 * @param	updateStats	bool		  (optional, default: false).
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
 * Delete existing playlist
 *	.
 * @param	id	string		 (optional).
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
 * Clone an existing playlist
 *	.
 * @param	id	string		 Id of the playlist to clone (optional).
 * @param	newPlaylist	KalturaPlaylist		Parameters defined here will override the ones in the cloned playlist (optional, default: null).
 * @return	KalturaPlaylist.
 */
KalturaPlaylistService.prototype.cloneAction = function(callback, id, newPlaylist){
	if(!newPlaylist)
		newPlaylist = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	if (newPlaylist != null)
		this.client.addParam(kparams, "newPlaylist", toParams(newPlaylist));
	this.client.queueServiceActionCall("playlist", "clone", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List available playlists
 *	.
 * @param	filter	KalturaPlaylistFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
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
 * Retrieve playlist for playing purpose
 *	.
 * @param	id	string		 (optional).
 * @param	detailed	string		 (optional).
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
 * Retrieve playlist for playing purpose, based on content
 *	.
 * @param	playlistType	int		  (optional, enum: KalturaPlaylistType).
 * @param	playlistContent	string		 (optional).
 * @param	detailed	string		 (optional).
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
 * Revrieve playlist for playing purpose, based on media entry filters
 *	.
 * @param	filters	array		 (optional).
 * @param	totalResults	int		 (optional).
 * @param	detailed	string		 (optional).
 * @return	array.
 */
KalturaPlaylistService.prototype.executeFromFilters = function(callback, filters, totalResults, detailed){
	if(!detailed)
		detailed = "";
	var kparams = new Object();
for(var index in filters)
{
	var obj = filters[index];
	this.client.addParam(kparams, "filters:" + index, toParams(obj));
}
	this.client.addParam(kparams, "totalResults", totalResults);
	this.client.addParam(kparams, "detailed", detailed);
	this.client.queueServiceActionCall("playlist", "executeFromFilters", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve playlist statistics
 *	.
 * @param	playlistType	int		  (optional, enum: KalturaPlaylistType).
 * @param	playlistContent	string		 (optional).
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
 *Class definition for the Kaltura service: report.
 * The available service actions:
 * @action	getGraphs	report getGraphs action allows to get a graph data for a specific report. 
 *	.
 * @action	getTotal	report getTotal action allows to get a graph data for a specific report. 
 *	.
 * @action	getTable	report getTable action allows to get a graph data for a specific report. 
 *	.
 * @action	getUrlForReportAsCsv	will create a Csv file for the given report and return the URL to access it
 *	.
*/
function KalturaReportService(client){
	this.init(client);
}
KalturaReportService.inheritsFrom (KalturaServiceBase);
/**
 * report getGraphs action allows to get a graph data for a specific report. 
 *	.
 * @param	reportType	int		  (optional, enum: KalturaReportType).
 * @param	reportInputFilter	KalturaReportInputFilter		 (optional).
 * @param	dimension	string		 (optional).
 * @param	objectIds	string		- one ID or more (separated by ',') of specific objects to query (optional).
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
 * report getTotal action allows to get a graph data for a specific report. 
 *	.
 * @param	reportType	int		  (optional, enum: KalturaReportType).
 * @param	reportInputFilter	KalturaReportInputFilter		 (optional).
 * @param	objectIds	string		- one ID or more (separated by ',') of specific objects to query (optional).
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
 * report getTable action allows to get a graph data for a specific report. 
 *	.
 * @param	reportType	int		  (optional, enum: KalturaReportType).
 * @param	reportInputFilter	KalturaReportInputFilter		 (optional).
 * @param	pager	KalturaFilterPager		 (optional).
 * @param	order	string		 (optional).
 * @param	objectIds	string		- one ID or more (separated by ',') of specific objects to query (optional).
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
 * will create a Csv file for the given report and return the URL to access it
 *	.
 * @param	reportTitle	string		The title of the report to display at top of CSV  (optional).
 * @param	reportText	string		The text of the filter of the report (optional).
 * @param	headers	string		The headers of the columns - a map between the enumerations on the server side and the their display text   (optional).
 * @param	reportType	int		  (optional, enum: KalturaReportType).
 * @param	reportInputFilter	KalturaReportInputFilter		 (optional).
 * @param	dimension	string			   (optional).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @param	order	string		 (optional).
 * @param	objectIds	string		- one ID or more (separated by ',') of specific objects to query (optional).
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
 *Class definition for the Kaltura service: search.
 * The available service actions:
 * @action	search	Search for media in one of the supported media providers
 *	.
 * @action	getMediaInfo	Retrieve extra information about media found in search action
 *	Some providers return only part of the fields needed to create entry from, use this action to get the rest of the fields.
 *	.
 * @action	searchUrl	Search for media given a specific URL
 *	Kaltura supports a searchURL action on some of the media providers.
 *	This action will return a KalturaSearchResult object based on a given URL (assuming the media provider is supported)
 *	.
 * @action	externalLogin	.
*/
function KalturaSearchService(client){
	this.init(client);
}
KalturaSearchService.inheritsFrom (KalturaServiceBase);
/**
 * Search for media in one of the supported media providers
 *	.
 * @param	search	KalturaSearch		A KalturaSearch object contains the search keywords, media provider and media type (optional).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
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
 *	Some providers return only part of the fields needed to create entry from, use this action to get the rest of the fields.
 *	.
 * @param	searchResult	KalturaSearchResult		KalturaSearchResult object extends KalturaSearch and has all fields required for media:add (optional).
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
 *	This action will return a KalturaSearchResult object based on a given URL (assuming the media provider is supported)
 *	.
 * @param	mediaType	int		 (optional, enum: KalturaMediaType).
 * @param	url	string		 (optional).
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
 * .
 * @param	searchSource	int		 (optional, enum: KalturaSearchProviderType).
 * @param	userName	string		 (optional).
 * @param	password	string		 (optional).
 * @return	KalturaSearchAuthData.
 */
KalturaSearchService.prototype.externalLogin = function(callback, searchSource, userName, password){
	var kparams = new Object();
	this.client.addParam(kparams, "searchSource", searchSource);
	this.client.addParam(kparams, "userName", userName);
	this.client.addParam(kparams, "password", password);
	this.client.queueServiceActionCall("search", "externalLogin", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: session.
 * The available service actions:
 * @action	start	Start a session with Kaltura's server.
 *	The result KS is the session key that you should pass to all services that requires a ticket.
 *	.
 * @action	end	End a session with the Kaltura server, making the current KS invalid.
 *	.
 * @action	impersonate	Start an impersonated session with Kaltura's server.
 *	The result KS is the session key that you should pass to all services that requires a ticket.
 *	.
 * @action	startWidgetSession	Start a session for Kaltura's flash widgets
 *	.
*/
function KalturaSessionService(client){
	this.init(client);
}
KalturaSessionService.inheritsFrom (KalturaServiceBase);
/**
 * Start a session with Kaltura's server.
 *	The result KS is the session key that you should pass to all services that requires a ticket.
 *	.
 * @param	secret	string		Remember to provide the correct secret according to the sessionType you want (optional).
 * @param	userId	string		 (optional).
 * @param	type	int		Regular session or Admin session (optional, enum: KalturaSessionType).
 * @param	partnerId	int		 (optional, default: -1).
 * @param	expiry	int		KS expiry time in seconds (optional, default: 86400).
 * @param	privileges	string		 (optional).
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
 * End a session with the Kaltura server, making the current KS invalid.
 *	.
 * @return	.
 */
KalturaSessionService.prototype.end = function(callback){
	var kparams = new Object();
	this.client.queueServiceActionCall("session", "end", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Start an impersonated session with Kaltura's server.
 *	The result KS is the session key that you should pass to all services that requires a ticket.
 *	.
 * @param	secret	string		Remember to provide the correct secret according to the sessionType you want (optional).
 * @param	impersonatedPartnerId	int		 (optional).
 * @param	userId	string		 (optional).
 * @param	type	int		Regular session or Admin session (optional, enum: KalturaSessionType).
 * @param	partnerId	int		 (optional, default: -1).
 * @param	expiry	int		KS expiry time in seconds (optional, default: 86400).
 * @param	privileges	string		 (optional).
 * @return	string.
 */
KalturaSessionService.prototype.impersonate = function(callback, secret, impersonatedPartnerId, userId, type, partnerId, expiry, privileges){
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
	this.client.addParam(kparams, "impersonatedPartnerId", impersonatedPartnerId);
	this.client.addParam(kparams, "userId", userId);
	this.client.addParam(kparams, "type", type);
	this.client.addParam(kparams, "partnerId", partnerId);
	this.client.addParam(kparams, "expiry", expiry);
	this.client.addParam(kparams, "privileges", privileges);
	this.client.queueServiceActionCall("session", "impersonate", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Start a session for Kaltura's flash widgets
 *	.
 * @param	widgetId	string		 (optional).
 * @param	expiry	int		 (optional, default: 86400).
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
 *Class definition for the Kaltura service: stats.
 * The available service actions:
 * @action	collect	Will write to the event log a single line representing the event
 *	KalturaStatsEvent $event
 *	.
 * @action	kmcCollect	Will collect the kmcEvent sent form the KMC client
 *	.
 * @action	reportKceError	.
*/
function KalturaStatsService(client){
	this.init(client);
}
KalturaStatsService.inheritsFrom (KalturaServiceBase);
/**
 * Will write to the event log a single line representing the event
 *	KalturaStatsEvent $event
 *	.
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
 * Will collect the kmcEvent sent form the KMC client
 *	.
 * @param	kmcEvent	KalturaStatsKmcEvent		 (optional).
 * @return	.
 */
KalturaStatsService.prototype.kmcCollect = function(callback, kmcEvent){
	var kparams = new Object();
	this.client.addParam(kparams, "kmcEvent", toParams(kmcEvent));
	this.client.queueServiceActionCall("stats", "kmcCollect", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	kalturaCEError	KalturaCEError		 (optional).
 * @return	KalturaCEError.
 */
KalturaStatsService.prototype.reportKceError = function(callback, kalturaCEError){
	var kparams = new Object();
	this.client.addParam(kparams, "kalturaCEError", toParams(kalturaCEError));
	this.client.queueServiceActionCall("stats", "reportKceError", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: syndicationFeed.
 * The available service actions:
 * @action	add	Add new Syndication Feed
 *	.
 * @action	get	Get Syndication Feed by ID
 *	.
 * @action	update	Update Syndication Feed by ID
 *	.
 * @action	delete	Delete Syndication Feed by ID
 *	.
 * @action	list	List Syndication Feeds by filter with paging support
 *	.
 * @action	getEntryCount	get entry count for a syndication feed.
 * @action	requestConversion	request conversion for all entries that doesnt have the required flavor param
 *	returns a comma-separated ids of conversion jobs
 *	@action requestConversion
 *	@param string $feedId
 *	@return string.
*/
function KalturaSyndicationFeedService(client){
	this.init(client);
}
KalturaSyndicationFeedService.inheritsFrom (KalturaServiceBase);
/**
 * Add new Syndication Feed
 *	.
 * @param	syndicationFeed	KalturaBaseSyndicationFeed		 (optional).
 * @return	KalturaBaseSyndicationFeed.
 */
KalturaSyndicationFeedService.prototype.add = function(callback, syndicationFeed){
	var kparams = new Object();
	this.client.addParam(kparams, "syndicationFeed", toParams(syndicationFeed));
	this.client.queueServiceActionCall("syndicationFeed", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get Syndication Feed by ID
 *	.
 * @param	id	string		 (optional).
 * @return	KalturaBaseSyndicationFeed.
 */
KalturaSyndicationFeedService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("syndicationFeed", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update Syndication Feed by ID
 *	.
 * @param	id	string		 (optional).
 * @param	syndicationFeed	KalturaBaseSyndicationFeed		 (optional).
 * @return	KalturaBaseSyndicationFeed.
 */
KalturaSyndicationFeedService.prototype.update = function(callback, id, syndicationFeed){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "syndicationFeed", toParams(syndicationFeed));
	this.client.queueServiceActionCall("syndicationFeed", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete Syndication Feed by ID
 *	.
 * @param	id	string		 (optional).
 * @return	.
 */
KalturaSyndicationFeedService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("syndicationFeed", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List Syndication Feeds by filter with paging support
 *	.
 * @param	filter	KalturaBaseSyndicationFeedFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaBaseSyndicationFeedListResponse.
 */
KalturaSyndicationFeedService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("syndicationFeed", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * get entry count for a syndication feed.
 * @param	feedId	string		 (optional).
 * @return	KalturaSyndicationFeedEntryCount.
 */
KalturaSyndicationFeedService.prototype.getEntryCount = function(callback, feedId){
	var kparams = new Object();
	this.client.addParam(kparams, "feedId", feedId);
	this.client.queueServiceActionCall("syndicationFeed", "getEntryCount", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * request conversion for all entries that doesnt have the required flavor param
 *	returns a comma-separated ids of conversion jobs
 *	@action requestConversion
 *	@param string $feedId
 *	@return string.
 * @param	feedId	string		 (optional).
 * @return	string.
 */
KalturaSyndicationFeedService.prototype.requestConversion = function(callback, feedId){
	var kparams = new Object();
	this.client.addParam(kparams, "feedId", feedId);
	this.client.queueServiceActionCall("syndicationFeed", "requestConversion", kparams);
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
 *Class definition for the Kaltura service: uiConf.
 * The available service actions:
 * @action	add	UIConf Add action allows you to add a UIConf to Kaltura DB
 *	.
 * @action	update	Update an existing UIConf
 *	.
 * @action	get	Retrieve a UIConf by id
 *	.
 * @action	delete	Delete an existing UIConf
 *	.
 * @action	clone	Clone an existing UIConf
 *	.
 * @action	listTemplates	retrieve a list of available template UIConfs.
 * @action	list	Retrieve a list of available UIConfs
 *	.
*/
function KalturaUiConfService(client){
	this.init(client);
}
KalturaUiConfService.inheritsFrom (KalturaServiceBase);
/**
 * UIConf Add action allows you to add a UIConf to Kaltura DB
 *	.
 * @param	uiConf	KalturaUiConf		Mandatory input parameter of type KalturaUiConf (optional).
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
 * Update an existing UIConf
 *	.
 * @param	id	int		 (optional).
 * @param	uiConf	KalturaUiConf		 (optional).
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
 * Retrieve a UIConf by id
 *	.
 * @param	id	int		 (optional).
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
 * Delete an existing UIConf
 *	.
 * @param	id	int		 (optional).
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
 * Clone an existing UIConf
 *	.
 * @param	id	int		 (optional).
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
 * retrieve a list of available template UIConfs.
 * @param	filter	KalturaUiConfFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaUiConfListResponse.
 */
KalturaUiConfService.prototype.listTemplates = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("uiConf", "listTemplates", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve a list of available UIConfs
 *	.
 * @param	filter	KalturaUiConfFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
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
 *Class definition for the Kaltura service: upload.
 * The available service actions:
 * @action	upload	.
 * @action	getUploadedFileTokenByFileName	.
*/
function KalturaUploadService(client){
	this.init(client);
}
KalturaUploadService.inheritsFrom (KalturaServiceBase);
/**
 * .
 * @param	fileData	file		The file data (optional).
 * @return	string.
 */
KalturaUploadService.prototype.upload = function(callback, fileData){
	var kparams = new Object();
	kfiles = new Object();
	this.client.addParam(kfiles, "fileData", fileData);
	this.client.queueServiceActionCall("upload", "upload", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	fileName	string		 (optional).
 * @return	KalturaUploadResponse.
 */
KalturaUploadService.prototype.getUploadedFileTokenByFileName = function(callback, fileName){
	var kparams = new Object();
	this.client.addParam(kparams, "fileName", fileName);
	this.client.queueServiceActionCall("upload", "getUploadedFileTokenByFileName", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: uploadToken.
 * The available service actions:
 * @action	add	Adds new upload token to upload a file
 *	.
 * @action	get	Get upload token by id
 *	.
 * @action	upload	Upload a file using the upload token id, returns an error on failure (an exception will be thrown when using one of the Kaltura clients) 
 *	.
 * @action	delete	Deletes the upload token by upload token id
 *	.
 * @action	list	List upload token by filter with pager support. 
 *	When using a user session the service will be restricted to users objects only.
 *	.
*/
function KalturaUploadTokenService(client){
	this.init(client);
}
KalturaUploadTokenService.inheritsFrom (KalturaServiceBase);
/**
 * Adds new upload token to upload a file
 *	.
 * @param	uploadToken	KalturaUploadToken		 (optional, default: null).
 * @return	KalturaUploadToken.
 */
KalturaUploadTokenService.prototype.add = function(callback, uploadToken){
	if(!uploadToken)
		uploadToken = null;
	var kparams = new Object();
	if (uploadToken != null)
		this.client.addParam(kparams, "uploadToken", toParams(uploadToken));
	this.client.queueServiceActionCall("uploadToken", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get upload token by id
 *	.
 * @param	uploadTokenId	string		 (optional).
 * @return	KalturaUploadToken.
 */
KalturaUploadTokenService.prototype.get = function(callback, uploadTokenId){
	var kparams = new Object();
	this.client.addParam(kparams, "uploadTokenId", uploadTokenId);
	this.client.queueServiceActionCall("uploadToken", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Upload a file using the upload token id, returns an error on failure (an exception will be thrown when using one of the Kaltura clients) 
 *	.
 * @param	uploadTokenId	string		 (optional).
 * @param	fileData	file		 (optional).
 * @param	resume	bool		 (optional, default: false).
 * @param	finalChunk	bool		 (optional, default: true).
 * @param	resumeAt	int		 (optional, default: -1).
 * @return	KalturaUploadToken.
 */
KalturaUploadTokenService.prototype.upload = function(callback, uploadTokenId, fileData, resume, finalChunk, resumeAt){
	if(!resume)
		resume = false;
	if(!finalChunk)
		finalChunk = true;
	if(!resumeAt)
		resumeAt = -1;
	var kparams = new Object();
	this.client.addParam(kparams, "uploadTokenId", uploadTokenId);
	kfiles = new Object();
	this.client.addParam(kfiles, "fileData", fileData);
	this.client.addParam(kparams, "resume", resume);
	this.client.addParam(kparams, "finalChunk", finalChunk);
	this.client.addParam(kparams, "resumeAt", resumeAt);
	this.client.queueServiceActionCall("uploadToken", "upload", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Deletes the upload token by upload token id
 *	.
 * @param	uploadTokenId	string		 (optional).
 * @return	.
 */
KalturaUploadTokenService.prototype.deleteAction = function(callback, uploadTokenId){
	var kparams = new Object();
	this.client.addParam(kparams, "uploadTokenId", uploadTokenId);
	this.client.queueServiceActionCall("uploadToken", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List upload token by filter with pager support. 
 *	When using a user session the service will be restricted to users objects only.
 *	.
 * @param	filter	KalturaUploadTokenFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaUploadTokenListResponse.
 */
KalturaUploadTokenService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("uploadToken", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: user.
 * The available service actions:
 * @action	add	Adds a user to the Kaltura DB.
 *	Input param $id is the unique identifier in the partner's system.
 * @action	update	Update exisitng user, it is possible to update the user id too
 *	.
 * @action	get	Retrieve user
 *	.
 * @action	delete	Mark the user as deleted
 *	.
 * @action	list	List users (When not set in the filter, blocked and deleted users will be returned too)
 *	.
 * @action	notifyBan	Notify about user ban
 *	.
 * @action	login	Get a session using user email and password
 *	.
*/
function KalturaUserService(client){
	this.init(client);
}
KalturaUserService.inheritsFrom (KalturaServiceBase);
/**
 * Adds a user to the Kaltura DB.
 *	Input param $id is the unique identifier in the partner's system.
 * @param	user	KalturaUser		 (optional).
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
 * Update exisitng user, it is possible to update the user id too
 *	.
 * @param	userId	string		 (optional).
 * @param	user	KalturaUser		Id (optional).
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
 * Retrieve user
 *	.
 * @param	userId	string		 (optional).
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
 * Mark the user as deleted
 *	.
 * @param	userId	string		 (optional).
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
 * List users (When not set in the filter, blocked and deleted users will be returned too)
 *	.
 * @param	filter	KalturaUserFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
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
 * Notify about user ban
 *	.
 * @param	userId	string		 (optional).
 * @return	.
 */
KalturaUserService.prototype.notifyBan = function(callback, userId){
	var kparams = new Object();
	this.client.addParam(kparams, "userId", userId);
	this.client.queueServiceActionCall("user", "notifyBan", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get a session using user email and password
 *	.
 * @param	partnerId	int		 (optional).
 * @param	userId	string		 (optional).
 * @param	password	string		 (optional).
 * @param	expiry	int		 (optional, default: 86400).
 * @param	privileges	string		 (optional, default: *).
 * @return	string.
 */
KalturaUserService.prototype.login = function(callback, partnerId, userId, password, expiry, privileges){
	if(!expiry)
		expiry = 86400;
	if(!privileges)
		privileges = "*";
	var kparams = new Object();
	this.client.addParam(kparams, "partnerId", partnerId);
	this.client.addParam(kparams, "userId", userId);
	this.client.addParam(kparams, "password", password);
	this.client.addParam(kparams, "expiry", expiry);
	this.client.addParam(kparams, "privileges", privileges);
	this.client.queueServiceActionCall("user", "login", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: widget.
 * The available service actions:
 * @action	add	Add new widget, can be attached to entry or kshow
 *	SourceWidget is ignored.
 *	.
 * @action	update	Update exisiting widget
 *	.
 * @action	get	Get widget by id
 *	.
 * @action	clone	Add widget based on existing widget.
 *	Must provide valid sourceWidgetId
 *	.
 * @action	list	Retrieve a list of available widget depends on the filter given
 *	.
*/
function KalturaWidgetService(client){
	this.init(client);
}
KalturaWidgetService.inheritsFrom (KalturaServiceBase);
/**
 * Add new widget, can be attached to entry or kshow
 *	SourceWidget is ignored.
 *	.
 * @param	widget	KalturaWidget		 (optional).
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
 * Update exisiting widget
 *	.
 * @param	id	string		 (optional).
 * @param	widget	KalturaWidget		 (optional).
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
 * Get widget by id
 *	.
 * @param	id	string		 (optional).
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
 *	Must provide valid sourceWidgetId
 *	.
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
 * Retrieve a list of available widget depends on the filter given
 *	.
 * @param	filter	KalturaWidgetFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
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
 *Class definition for the Kaltura service: xInternal.
 * The available service actions:
 * @action	xAddBulkDownload	Creates new download job for multiple entry ids (comma separated), an email will be sent when the job is done
 *	This sevice support the following entries: 
 *	- MediaEntry
 *	- Video will be converted using the flavor params id
 *	- Audio will be downloaded as MP3
 *	- Image will be downloaded as Jpeg
 *	- MixEntry will be flattend using the flavor params id
 *	- Other entry types are not supported
 *	Returns the admin email that the email message will be sent to 
 *	.
*/
function KalturaXInternalService(client){
	this.init(client);
}
KalturaXInternalService.inheritsFrom (KalturaServiceBase);
/**
 * Creates new download job for multiple entry ids (comma separated), an email will be sent when the job is done
 *	This sevice support the following entries: 
 *	- MediaEntry
 *	- Video will be converted using the flavor params id
 *	- Audio will be downloaded as MP3
 *	- Image will be downloaded as Jpeg
 *	- MixEntry will be flattend using the flavor params id
 *	- Other entry types are not supported
 *	Returns the admin email that the email message will be sent to 
 *	.
 * @param	entryIds	string		Comma separated list of entry ids (optional).
 * @param	flavorParamsId	string		 (optional).
 * @return	string.
 */
KalturaXInternalService.prototype.xAddBulkDownload = function(callback, entryIds, flavorParamsId){
	if(!flavorParamsId)
		flavorParamsId = "";
	var kparams = new Object();
	this.client.addParam(kparams, "entryIds", entryIds);
	this.client.addParam(kparams, "flavorParamsId", flavorParamsId);
	this.client.queueServiceActionCall("xInternal", "xAddBulkDownload", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: fileSync.
 * The available service actions:
 * @action	list	List file syce objects by filter and pager
 *	.
 * @action	sync	.
*/
function KalturaFileSyncService(client){
	this.init(client);
}
KalturaFileSyncService.inheritsFrom (KalturaServiceBase);
/**
 * List file syce objects by filter and pager
 *	.
 * @param	filter	KalturaFileSyncFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaFileSyncListResponse.
 */
KalturaFileSyncService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("fileSync", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	fileSyncId	int		 (optional).
 * @param	fileData	file		 (optional).
 * @return	KalturaFileSync.
 */
KalturaFileSyncService.prototype.sync = function(callback, fileSyncId, fileData){
	var kparams = new Object();
	this.client.addParam(kparams, "fileSyncId", fileSyncId);
	kfiles = new Object();
	this.client.addParam(kfiles, "fileData", fileData);
	this.client.queueServiceActionCall("fileSync", "sync", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: systemUser.
 * The available service actions:
 * @action	verifyPassword	Verify password for email address
 *	.
 * @action	generateNewPassword	Generate new random password
 *	.
 * @action	setNewPassword	Set new password for user by email address
 *	.
 * @action	add	Add new system administrative user
 *	.
 * @action	get	Get system administrative user by id
 *	.
 * @action	getByEmail	Get system administrative user by email
 *	.
 * @action	update	Update system administrative user by id 
 *	.
 * @action	delete	Delete system administrative user by id
 *	.
 * @action	list	List system administrative users by filter and pager
 *	.
*/
function KalturaSystemUserService(client){
	this.init(client);
}
KalturaSystemUserService.inheritsFrom (KalturaServiceBase);
/**
 * Verify password for email address
 *	.
 * @param	email	string		 (optional).
 * @param	password	string		 (optional).
 * @return	KalturaSystemUser.
 */
KalturaSystemUserService.prototype.verifyPassword = function(callback, email, password){
	var kparams = new Object();
	this.client.addParam(kparams, "email", email);
	this.client.addParam(kparams, "password", password);
	this.client.queueServiceActionCall("systemUser", "verifyPassword", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Generate new random password
 *	.
 * @return	string.
 */
KalturaSystemUserService.prototype.generateNewPassword = function(callback){
	var kparams = new Object();
	this.client.queueServiceActionCall("systemUser", "generateNewPassword", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Set new password for user by email address
 *	.
 * @param	userId	int		 (optional).
 * @param	password	string		 (optional).
 * @return	.
 */
KalturaSystemUserService.prototype.setNewPassword = function(callback, userId, password){
	var kparams = new Object();
	this.client.addParam(kparams, "userId", userId);
	this.client.addParam(kparams, "password", password);
	this.client.queueServiceActionCall("systemUser", "setNewPassword", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Add new system administrative user
 *	.
 * @param	systemUser	KalturaSystemUser		 (optional).
 * @return	KalturaSystemUser.
 */
KalturaSystemUserService.prototype.add = function(callback, systemUser){
	var kparams = new Object();
	this.client.addParam(kparams, "systemUser", toParams(systemUser));
	this.client.queueServiceActionCall("systemUser", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get system administrative user by id
 *	.
 * @param	userId	int		 (optional).
 * @return	KalturaSystemUser.
 */
KalturaSystemUserService.prototype.get = function(callback, userId){
	var kparams = new Object();
	this.client.addParam(kparams, "userId", userId);
	this.client.queueServiceActionCall("systemUser", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get system administrative user by email
 *	.
 * @param	email	string		 (optional).
 * @return	KalturaSystemUser.
 */
KalturaSystemUserService.prototype.getByEmail = function(callback, email){
	var kparams = new Object();
	this.client.addParam(kparams, "email", email);
	this.client.queueServiceActionCall("systemUser", "getByEmail", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update system administrative user by id 
 *	.
 * @param	userId	int		 (optional).
 * @param	systemUser	KalturaSystemUser		 (optional).
 * @return	KalturaSystemUser.
 */
KalturaSystemUserService.prototype.update = function(callback, userId, systemUser){
	var kparams = new Object();
	this.client.addParam(kparams, "userId", userId);
	this.client.addParam(kparams, "systemUser", toParams(systemUser));
	this.client.queueServiceActionCall("systemUser", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete system administrative user by id
 *	.
 * @param	userId	int		 (optional).
 * @return	.
 */
KalturaSystemUserService.prototype.deleteAction = function(callback, userId){
	var kparams = new Object();
	this.client.addParam(kparams, "userId", userId);
	this.client.queueServiceActionCall("systemUser", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List system administrative users by filter and pager
 *	.
 * @param	filter	KalturaSystemUserFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaSystemUserListResponse.
 */
KalturaSystemUserService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("systemUser", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: systemPartner.
 * The available service actions:
 * @action	get	Retrieve all info about partner
 *	This service gets partner id as parameter and accessable to the admin console partner only
 *	.
 * @action	getUsage	.
 * @action	list	.
 * @action	updateStatus	.
 * @action	getAdminSession	.
 * @action	updateConfiguration	.
 * @action	getConfiguration	.
 * @action	getPackages	.
*/
function KalturaSystemPartnerService(client){
	this.init(client);
}
KalturaSystemPartnerService.inheritsFrom (KalturaServiceBase);
/**
 * Retrieve all info about partner
 *	This service gets partner id as parameter and accessable to the admin console partner only
 *	.
 * @param	partnerId	int		X (optional).
 * @return	KalturaPartner.
 */
KalturaSystemPartnerService.prototype.get = function(callback, partnerId){
	var kparams = new Object();
	this.client.addParam(kparams, "partnerId", partnerId);
	this.client.queueServiceActionCall("systemPartner", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	partnerFilter	KalturaPartnerFilter		 (optional, default: null).
 * @param	usageFilter	KalturaSystemPartnerUsageFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaSystemPartnerUsageListResponse.
 */
KalturaSystemPartnerService.prototype.getUsage = function(callback, partnerFilter, usageFilter, pager){
	if(!partnerFilter)
		partnerFilter = null;
	if(!usageFilter)
		usageFilter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (partnerFilter != null)
		this.client.addParam(kparams, "partnerFilter", toParams(partnerFilter));
	if (usageFilter != null)
		this.client.addParam(kparams, "usageFilter", toParams(usageFilter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("systemPartner", "getUsage", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	filter	KalturaPartnerFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaPartnerListResponse.
 */
KalturaSystemPartnerService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("systemPartner", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	partnerId	int		 (optional).
 * @param	status	int		 (optional, enum: KalturaPartnerStatus).
 * @return	.
 */
KalturaSystemPartnerService.prototype.updateStatus = function(callback, partnerId, status){
	var kparams = new Object();
	this.client.addParam(kparams, "partnerId", partnerId);
	this.client.addParam(kparams, "status", status);
	this.client.queueServiceActionCall("systemPartner", "updateStatus", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	partnerId	int		 (optional).
 * @return	string.
 */
KalturaSystemPartnerService.prototype.getAdminSession = function(callback, partnerId){
	var kparams = new Object();
	this.client.addParam(kparams, "partnerId", partnerId);
	this.client.queueServiceActionCall("systemPartner", "getAdminSession", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	partnerId	int		 (optional).
 * @param	configuration	KalturaSystemPartnerConfiguration		 (optional).
 * @return	.
 */
KalturaSystemPartnerService.prototype.updateConfiguration = function(callback, partnerId, configuration){
	var kparams = new Object();
	this.client.addParam(kparams, "partnerId", partnerId);
	this.client.addParam(kparams, "configuration", toParams(configuration));
	this.client.queueServiceActionCall("systemPartner", "updateConfiguration", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	partnerId	int		 (optional).
 * @return	KalturaSystemPartnerConfiguration.
 */
KalturaSystemPartnerService.prototype.getConfiguration = function(callback, partnerId){
	var kparams = new Object();
	this.client.addParam(kparams, "partnerId", partnerId);
	this.client.queueServiceActionCall("systemPartner", "getConfiguration", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @return	array.
 */
KalturaSystemPartnerService.prototype.getPackages = function(callback){
	var kparams = new Object();
	this.client.queueServiceActionCall("systemPartner", "getPackages", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: flavorParamsOutput.
 * The available service actions:
 * @action	list	List flavor params output objects by filter and pager
 *	.
*/
function KalturaFlavorParamsOutputService(client){
	this.init(client);
}
KalturaFlavorParamsOutputService.inheritsFrom (KalturaServiceBase);
/**
 * List flavor params output objects by filter and pager
 *	.
 * @param	filter	KalturaFlavorParamsOutputFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaFlavorParamsOutputListResponse.
 */
KalturaFlavorParamsOutputService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("flavorParamsOutput", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: mediaInfo.
 * The available service actions:
 * @action	list	List media info objects by filter and pager
 *	.
*/
function KalturaMediaInfoService(client){
	this.init(client);
}
KalturaMediaInfoService.inheritsFrom (KalturaServiceBase);
/**
 * List media info objects by filter and pager
 *	.
 * @param	filter	KalturaMediaInfoFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaMediaInfoListResponse.
 */
KalturaMediaInfoService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("mediaInfo", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: entryAdmin.
 * The available service actions:
 * @action	get	Get base entry by ID with no filters.
 *	.
*/
function KalturaEntryAdminService(client){
	this.init(client);
}
KalturaEntryAdminService.inheritsFrom (KalturaServiceBase);
/**
 * Get base entry by ID with no filters.
 *	.
 * @param	entryId	string		Entry id (optional).
 * @param	version	int		Desired version of the data (optional, default: -1).
 * @return	KalturaBaseEntry.
 */
KalturaEntryAdminService.prototype.get = function(callback, entryId, version){
	if(!version)
		version = -1;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "version", version);
	this.client.queueServiceActionCall("entryAdmin", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: storageProfile.
 * The available service actions:
 * @action	listByPartner	.
 * @action	updateStatus	.
 * @action	get	Get storage profile by id
 *	.
 * @action	update	Update storage profile by id 
 *	.
 * @action	add	Adds a storage profile to the Kaltura DB..
*/
function KalturaStorageProfileService(client){
	this.init(client);
}
KalturaStorageProfileService.inheritsFrom (KalturaServiceBase);
/**
 * .
 * @param	filter	KalturaPartnerFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaStorageProfileListResponse.
 */
KalturaStorageProfileService.prototype.listByPartner = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("storageProfile", "listByPartner", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	storageId	int		 (optional).
 * @param	status	int		 (optional, enum: KalturaStorageProfileStatus).
 * @return	.
 */
KalturaStorageProfileService.prototype.updateStatus = function(callback, storageId, status){
	var kparams = new Object();
	this.client.addParam(kparams, "storageId", storageId);
	this.client.addParam(kparams, "status", status);
	this.client.queueServiceActionCall("storageProfile", "updateStatus", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get storage profile by id
 *	.
 * @param	storageProfileId	int		 (optional).
 * @return	KalturaStorageProfile.
 */
KalturaStorageProfileService.prototype.get = function(callback, storageProfileId){
	var kparams = new Object();
	this.client.addParam(kparams, "storageProfileId", storageProfileId);
	this.client.queueServiceActionCall("storageProfile", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update storage profile by id 
 *	.
 * @param	storageProfileId	int		 (optional).
 * @param	storageProfile	KalturaStorageProfile		Id (optional).
 * @return	KalturaStorageProfile.
 */
KalturaStorageProfileService.prototype.update = function(callback, storageProfileId, storageProfile){
	var kparams = new Object();
	this.client.addParam(kparams, "storageProfileId", storageProfileId);
	this.client.addParam(kparams, "storageProfile", toParams(storageProfile));
	this.client.queueServiceActionCall("storageProfile", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Adds a storage profile to the Kaltura DB..
 * @param	storageProfile	KalturaStorageProfile		 (optional).
 * @return	KalturaStorageProfile.
 */
KalturaStorageProfileService.prototype.add = function(callback, storageProfile){
	var kparams = new Object();
	this.client.addParam(kparams, "storageProfile", toParams(storageProfile));
	this.client.queueServiceActionCall("storageProfile", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: metadata.
 * The available service actions:
 * @action	list	List metadata objects by filter and pager
 *	.
 * @action	add	Allows you to add a metadata object and metadata content associated with Kaltura object
 *	.
 * @action	addFromFile	Allows you to add a metadata object and metadata file associated with Kaltura object
 *	.
 * @action	addFromUrl	Allows you to add a metadata xml data from remote URL
 *	.
 * @action	addFromBulk	Allows you to add a metadata xml data from remote URL.
 *	Enables different permissions than addFromUrl action.
 *	.
 * @action	delete	Delete an existing metadata
 *	.
 * @action	invalidate	Mark existing metadata as invalid
 *	Used by batch metadata transform
 *	.
 * @action	get	Retrieve a metadata object by id
 *	.
 * @action	update	Update an existing metadata object with new XML content
 *	.
 * @action	updateFromFile	Update an existing metadata object with new XML file
 *	.
*/
function KalturaMetadataService(client){
	this.init(client);
}
KalturaMetadataService.inheritsFrom (KalturaServiceBase);
/**
 * List metadata objects by filter and pager
 *	.
 * @param	filter	KalturaMetadataFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaMetadataListResponse.
 */
KalturaMetadataService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("metadata", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Allows you to add a metadata object and metadata content associated with Kaltura object
 *	.
 * @param	metadataProfileId	int		 (optional).
 * @param	objectType	int		 (optional, enum: KalturaMetadataObjectType).
 * @param	objectId	string		 (optional).
 * @param	xmlData	string		XML metadata (optional).
 * @return	KalturaMetadata.
 */
KalturaMetadataService.prototype.add = function(callback, metadataProfileId, objectType, objectId, xmlData){
	var kparams = new Object();
	this.client.addParam(kparams, "metadataProfileId", metadataProfileId);
	this.client.addParam(kparams, "objectType", objectType);
	this.client.addParam(kparams, "objectId", objectId);
	this.client.addParam(kparams, "xmlData", xmlData);
	this.client.queueServiceActionCall("metadata", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Allows you to add a metadata object and metadata file associated with Kaltura object
 *	.
 * @param	metadataProfileId	int		 (optional).
 * @param	objectType	int		 (optional, enum: KalturaMetadataObjectType).
 * @param	objectId	string		 (optional).
 * @param	xmlFile	file		XML metadata (optional).
 * @return	KalturaMetadata.
 */
KalturaMetadataService.prototype.addFromFile = function(callback, metadataProfileId, objectType, objectId, xmlFile){
	var kparams = new Object();
	this.client.addParam(kparams, "metadataProfileId", metadataProfileId);
	this.client.addParam(kparams, "objectType", objectType);
	this.client.addParam(kparams, "objectId", objectId);
	kfiles = new Object();
	this.client.addParam(kfiles, "xmlFile", xmlFile);
	this.client.queueServiceActionCall("metadata", "addFromFile", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Allows you to add a metadata xml data from remote URL
 *	.
 * @param	metadataProfileId	int		 (optional).
 * @param	objectType	int		 (optional, enum: KalturaMetadataObjectType).
 * @param	objectId	string		 (optional).
 * @param	url	string		XML metadata remote url (optional).
 * @return	KalturaMetadata.
 */
KalturaMetadataService.prototype.addFromUrl = function(callback, metadataProfileId, objectType, objectId, url){
	var kparams = new Object();
	this.client.addParam(kparams, "metadataProfileId", metadataProfileId);
	this.client.addParam(kparams, "objectType", objectType);
	this.client.addParam(kparams, "objectId", objectId);
	this.client.addParam(kparams, "url", url);
	this.client.queueServiceActionCall("metadata", "addFromUrl", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Allows you to add a metadata xml data from remote URL.
 *	Enables different permissions than addFromUrl action.
 *	.
 * @param	metadataProfileId	int		 (optional).
 * @param	objectType	int		 (optional, enum: KalturaMetadataObjectType).
 * @param	objectId	string		 (optional).
 * @param	url	string		XML metadata remote url (optional).
 * @return	KalturaMetadata.
 */
KalturaMetadataService.prototype.addFromBulk = function(callback, metadataProfileId, objectType, objectId, url){
	var kparams = new Object();
	this.client.addParam(kparams, "metadataProfileId", metadataProfileId);
	this.client.addParam(kparams, "objectType", objectType);
	this.client.addParam(kparams, "objectId", objectId);
	this.client.addParam(kparams, "url", url);
	this.client.queueServiceActionCall("metadata", "addFromBulk", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete an existing metadata
 *	.
 * @param	id	int		 (optional).
 * @return	.
 */
KalturaMetadataService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("metadata", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Mark existing metadata as invalid
 *	Used by batch metadata transform
 *	.
 * @param	id	int		 (optional).
 * @return	.
 */
KalturaMetadataService.prototype.invalidate = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("metadata", "invalidate", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve a metadata object by id
 *	.
 * @param	id	int		 (optional).
 * @return	KalturaMetadata.
 */
KalturaMetadataService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("metadata", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update an existing metadata object with new XML content
 *	.
 * @param	id	int		 (optional).
 * @param	xmlData	string		XML metadata (optional).
 * @return	KalturaMetadata.
 */
KalturaMetadataService.prototype.update = function(callback, id, xmlData){
	if(!xmlData)
		xmlData = "";
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "xmlData", xmlData);
	this.client.queueServiceActionCall("metadata", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update an existing metadata object with new XML file
 *	.
 * @param	id	int		 (optional).
 * @param	xmlFile	file		XML metadata (optional, default: null).
 * @return	KalturaMetadata.
 */
KalturaMetadataService.prototype.updateFromFile = function(callback, id, xmlFile){
	if(!xmlFile)
		xmlFile = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	kfiles = new Object();
	this.client.addParam(kfiles, "xmlFile", xmlFile);
	this.client.queueServiceActionCall("metadata", "updateFromFile", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: metadataProfile.
 * The available service actions:
 * @action	list	List metadata profile objects by filter and pager
 *	.
 * @action	listFields	List metadata profile fields by metadata profile id
 *	.
 * @action	add	Allows you to add a metadata profile object and metadata profile content associated with Kaltura object type
 *	.
 * @action	addFromFile	Allows you to add a metadata profile object and metadata profile file associated with Kaltura object type
 *	.
 * @action	delete	Delete an existing metadata profile
 *	.
 * @action	get	Retrieve a metadata profile object by id
 *	.
 * @action	update	Update an existing metadata object
 *	.
 * @action	updateDefinitionFromFile	Update an existing metadata object definition file
 *	.
 * @action	updateViewsFromFile	Update an existing metadata object views file
 *	.
*/
function KalturaMetadataProfileService(client){
	this.init(client);
}
KalturaMetadataProfileService.inheritsFrom (KalturaServiceBase);
/**
 * List metadata profile objects by filter and pager
 *	.
 * @param	filter	KalturaMetadataProfileFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaMetadataProfileListResponse.
 */
KalturaMetadataProfileService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("metadataProfile", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List metadata profile fields by metadata profile id
 *	.
 * @param	metadataProfileId	int		 (optional).
 * @return	KalturaMetadataProfileFieldListResponse.
 */
KalturaMetadataProfileService.prototype.listFields = function(callback, metadataProfileId){
	var kparams = new Object();
	this.client.addParam(kparams, "metadataProfileId", metadataProfileId);
	this.client.queueServiceActionCall("metadataProfile", "listFields", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Allows you to add a metadata profile object and metadata profile content associated with Kaltura object type
 *	.
 * @param	metadataProfile	KalturaMetadataProfile		 (optional).
 * @param	xsdData	string		XSD metadata definition (optional).
 * @param	viewsData	string		UI views definition (optional).
 * @return	KalturaMetadataProfile.
 */
KalturaMetadataProfileService.prototype.add = function(callback, metadataProfile, xsdData, viewsData){
	if(!viewsData)
		viewsData = "";
	var kparams = new Object();
	this.client.addParam(kparams, "metadataProfile", toParams(metadataProfile));
	this.client.addParam(kparams, "xsdData", xsdData);
	this.client.addParam(kparams, "viewsData", viewsData);
	this.client.queueServiceActionCall("metadataProfile", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Allows you to add a metadata profile object and metadata profile file associated with Kaltura object type
 *	.
 * @param	metadataProfile	KalturaMetadataProfile		 (optional).
 * @param	xsdFile	file		XSD metadata definition (optional).
 * @param	viewsFile	file		UI views definition (optional, default: null).
 * @return	KalturaMetadataProfile.
 */
KalturaMetadataProfileService.prototype.addFromFile = function(callback, metadataProfile, xsdFile, viewsFile){
	if(!viewsFile)
		viewsFile = null;
	var kparams = new Object();
	this.client.addParam(kparams, "metadataProfile", toParams(metadataProfile));
	kfiles = new Object();
	this.client.addParam(kfiles, "xsdFile", xsdFile);
	this.client.addParam(kfiles, "viewsFile", viewsFile);
	this.client.queueServiceActionCall("metadataProfile", "addFromFile", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete an existing metadata profile
 *	.
 * @param	id	int		 (optional).
 * @return	.
 */
KalturaMetadataProfileService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("metadataProfile", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve a metadata profile object by id
 *	.
 * @param	id	int		 (optional).
 * @return	KalturaMetadataProfile.
 */
KalturaMetadataProfileService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("metadataProfile", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update an existing metadata object
 *	.
 * @param	id	int		 (optional).
 * @param	metadataProfile	KalturaMetadataProfile		 (optional).
 * @param	xsdData	string		XSD metadata definition (optional).
 * @param	viewsData	string		UI views definition (optional).
 * @return	KalturaMetadataProfile.
 */
KalturaMetadataProfileService.prototype.update = function(callback, id, metadataProfile, xsdData, viewsData){
	if(!xsdData)
		xsdData = "";
	if(!viewsData)
		viewsData = "";
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "metadataProfile", toParams(metadataProfile));
	this.client.addParam(kparams, "xsdData", xsdData);
	this.client.addParam(kparams, "viewsData", viewsData);
	this.client.queueServiceActionCall("metadataProfile", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update an existing metadata object definition file
 *	.
 * @param	id	int		 (optional).
 * @param	xsdFile	file		XSD metadata definition (optional).
 * @return	KalturaMetadataProfile.
 */
KalturaMetadataProfileService.prototype.updateDefinitionFromFile = function(callback, id, xsdFile){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	kfiles = new Object();
	this.client.addParam(kfiles, "xsdFile", xsdFile);
	this.client.queueServiceActionCall("metadataProfile", "updateDefinitionFromFile", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update an existing metadata object views file
 *	.
 * @param	id	int		 (optional).
 * @param	viewsFile	file		UI views file (optional).
 * @return	KalturaMetadataProfile.
 */
KalturaMetadataProfileService.prototype.updateViewsFromFile = function(callback, id, viewsFile){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	kfiles = new Object();
	this.client.addParam(kfiles, "viewsFile", viewsFile);
	this.client.queueServiceActionCall("metadataProfile", "updateViewsFromFile", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: metadataBatch.
 * The available service actions:
 * @action	getExclusiveImportMetadataJobs	batch getExclusiveImportMetadataJob action allows to get a BatchJob of type METADATA_IMPORT 
 *	.
 * @action	updateExclusiveImportMetadataJob	batch updateExclusiveImportMetadataJob action updates a BatchJob of type METADATA_IMPORT that was claimed using the getExclusiveImportMetadataJobs
 *	.
 * @action	freeExclusiveImportMetadataJob	batch freeExclusiveImportMetadataJob action frees a BatchJob of type ImportMetadata that was claimed using the getExclusiveImportMetadataJobs
 *	.
 * @action	getExclusiveTransformMetadataJobs	batch getExclusiveTransformMetadataJob action allows to get a BatchJob of type METADATA_TRANSFORM 
 *	.
 * @action	updateExclusiveTransformMetadataJob	batch updateExclusiveTransformMetadataJob action updates a BatchJob of type METADATA_TRANSFORM that was claimed using the getExclusiveTransformMetadataJobs
 *	.
 * @action	freeExclusiveTransformMetadataJob	batch freeExclusiveTransformMetadataJob action frees a BatchJob of type TransformMetadata that was claimed using the getExclusiveTransformMetadataJobs
 *	.
 * @action	getTransformMetadataObjects	batch getTransformMetadataObjects action retrieve all metadata objects that requires upgrade and the total count 
 *	.
 * @action	upgradeMetadataObjects	batch getTransformMetadataObjects action retrieve all metadata objects that requires upgrade and the total count 
 *	.
 * @action	getExclusiveImportJobs	batch getExclusiveImportJob action allows to get a BatchJob of type IMPORT 
 *	.
 * @action	updateExclusiveImportJob	batch updateExclusiveImportJob action updates a BatchJob of type IMPORT that was claimed using the getExclusiveImportJobs
 *	.
 * @action	freeExclusiveImportJob	batch freeExclusiveImportJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveImportJobs
 *	.
 * @action	getExclusiveBulkUploadJobs	batch getExclusiveBulkUploadJob action allows to get a BatchJob of type BULKUPLOAD 
 *	.
 * @action	getExclusiveAlmostDoneBulkUploadJobs	batch getExclusiveAlmostDoneBulkUploadJobs action allows to get a BatchJob of type BULKUPLOAD that wait for remote closure 
 *	.
 * @action	updateExclusiveBulkUploadJob	batch updateExclusiveBulkUploadJob action updates a BatchJob of type BULKUPLOAD that was claimed using the getExclusiveBulkUploadJobs
 *	.
 * @action	freeExclusiveBulkUploadJob	batch freeExclusiveBulkUploadJob action frees a BatchJob of type BULKUPLOAD that was claimed using the getExclusiveBulkUploadJobs
 *	.
 * @action	addBulkUploadResult	batch addBulkUploadResultAction action adds KalturaBulkUploadResult to the DB
 *	.
 * @action	getBulkUploadLastResult	batch getBulkUploadLastResultAction action returns the last result of the bulk upload
 *	.
 * @action	updateBulkUploadResults	batch updateBulkUploadResults action adds KalturaBulkUploadResult to the DB
 *	.
 * @action	getExclusiveAlmostDoneRemoteConvertJobs	batch getExclusiveAlmostDoneRemoteConvertJobsAction action allows to get a BatchJob of type REMOTE_CONVERT that wait for remote closure 
 *	.
 * @action	updateExclusiveRemoteConvertJob	batch updateExclusiveRemoteConvertJobAction action updates a BatchJob of type REMOTE_CONVERT that was claimed using the getExclusiveConvertJobs
 *	.
 * @action	freeExclusiveRemoteConvertJob	batch freeExclusiveRemoteConvertJobAction action frees a BatchJob of type REMOTE_CONVERT that was claimed using the getExclusiveConvertJobs
 *	.
 * @action	getExclusiveAlmostDoneConvertCollectionJobs	batch getExclusiveAlmostDoneConvertCollectionJobs action allows to get a BatchJob of type CONVERT_COLLECTION that wait for remote closure 
 *	.
 * @action	getExclusiveAlmostDoneConvertProfileJobs	batch getExclusiveAlmostDoneConvertProfileJobs action allows to get a BatchJob of type CONVERT_PROFILE that wait for remote closure 
 *	.
 * @action	updateExclusiveConvertCollectionJob	batch updateExclusiveConvertCollectionJobAction action updates a BatchJob of type CONVERT_PROFILE that was claimed using the getExclusiveConvertJobs
 *	.
 * @action	updateExclusiveConvertProfileJob	batch updateExclusiveConvertProfileJobAction action updates a BatchJob of type CONVERT_PROFILE that was claimed using the getExclusiveConvertJobs
 *	.
 * @action	freeExclusiveConvertCollectionJob	batch freeExclusiveConvertCollectionJobAction action frees a BatchJob of type CONVERT_COLLECTION that was claimed using the getExclusiveConvertJobs
 *	.
 * @action	freeExclusiveConvertProfileJob	batch freeExclusiveConvertProfileJobAction action frees a BatchJob of type CONVERT_PROFILE that was claimed using the getExclusiveConvertJobs
 *	.
 * @action	getExclusiveConvertCollectionJobs	batch getExclusiveConvertCollectionJob action allows to get a BatchJob of type CONVERT_COLLECTION 
 *	.
 * @action	getExclusiveConvertJobs	batch getExclusiveConvertJob action allows to get a BatchJob of type CONVERT 
 *	.
 * @action	getExclusiveAlmostDoneConvertJobs	batch getExclusiveAlmostDoneConvertJobsAction action allows to get a BatchJob of type CONVERT that wait for remote closure 
 *	.
 * @action	updateExclusiveConvertJob	batch updateExclusiveConvertJob action updates a BatchJob of type CONVERT that was claimed using the getExclusiveConvertJobs
 *	.
 * @action	updateExclusiveConvertJobSubType	batch updateExclusiveConvertJobSubType action updates the sub type for a BatchJob of type CONVERT that was claimed using the getExclusiveConvertJobs
 *	.
 * @action	freeExclusiveConvertJob	batch freeExclusiveConvertJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveConvertJobs
 *	.
 * @action	getExclusivePostConvertJobs	batch getExclusivePostConvertJob action allows to get a BatchJob of type POSTCONVERT 
 *	.
 * @action	updateExclusivePostConvertJob	batch updateExclusivePostConvertJob action updates a BatchJob of type POSTCONVERT that was claimed using the getExclusivePostConvertJobs
 *	.
 * @action	freeExclusivePostConvertJob	batch freeExclusivePostConvertJob action frees a BatchJob of type IMPORT that was claimed using the getExclusivePostConvertJobs
 *	.
 * @action	getExclusivePullJobs	batch getExclusivePullJob action allows to get a BatchJob of type PULL 
 *	.
 * @action	updateExclusivePullJob	batch updateExclusivePullJob action updates a BatchJob of type PULL that was claimed using the getExclusivePullJobs
 *	.
 * @action	freeExclusivePullJob	batch freeExclusivePullJob action frees a BatchJob of type IMPORT that was claimed using the getExclusivePullJobs
 *	.
 * @action	getExclusiveExtractMediaJobs	batch getExclusiveExtractMediaJob action allows to get a BatchJob of type EXTRACT_MEDIA 
 *	.
 * @action	updateExclusiveExtractMediaJob	batch updateExclusiveExtractMediaJob action updates a BatchJob of type EXTRACT_MEDIA that was claimed using the getExclusiveExtractMediaJobs
 *	.
 * @action	addMediaInfo	batch addMediaInfoAction action saves a media info object
 *	.
 * @action	freeExclusiveExtractMediaJob	batch freeExclusiveExtractMediaJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveExtractMediaJobs
 *	.
 * @action	getExclusiveStorageExportJobs	batch getExclusiveStorageExportJob action allows to get a BatchJob of type STORAGE_EXPORT 
 *	.
 * @action	updateExclusiveStorageExportJob	batch updateExclusiveStorageExportJob action updates a BatchJob of type STORAGE_EXPORT that was claimed using the getExclusiveStorageExportJobs
 *	.
 * @action	freeExclusiveStorageExportJob	batch freeExclusiveStorageExportJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveStorageExportJobs
 *	.
 * @action	getExclusiveStorageDeleteJobs	batch getExclusiveStorageDeleteJob action allows to get a BatchJob of type STORAGE_DELETE 
 *	.
 * @action	updateExclusiveStorageDeleteJob	batch updateExclusiveStorageDeleteJob action updates a BatchJob of type StorageDelete that was claimed using the getExclusiveStorageDeleteJobs
 *	.
 * @action	freeExclusiveStorageDeleteJob	batch freeExclusiveStorageDeleteJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveStorageDeleteJobs
 *	.
 * @action	getExclusiveNotificationJobs	batch getExclusiveNotificationJob action allows to get a BatchJob of type NOTIFICATION 
 *	.
 * @action	updateExclusiveNotificationJob	batch updateExclusiveNotificationJob action updates a BatchJob of type NOTIFICATION that was claimed using the getExclusiveNotificationJobs
 *	.
 * @action	freeExclusiveNotificationJob	batch freeExclusiveNotificationJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveNotificationJobs
 *	.
 * @action	getExclusiveMailJobs	batch getExclusiveMailJob action allows to get a BatchJob of type MAIL 
 *	.
 * @action	updateExclusiveMailJob	batch updateExclusiveMailJob action updates a BatchJob of type MAIL that was claimed using the getExclusiveMailJobs
 *	.
 * @action	freeExclusiveMailJob	batch freeExclusiveMailJob action frees a BatchJob of type MAIL that was claimed using the getExclusiveMailJobs
 *	.
 * @action	getExclusiveBulkDownloadJobs	batch getExclusiveBulkDownloadJobs action allows to get a BatchJob of type BULKDOWNLOAD
 *	.
 * @action	getExclusiveAlmostDoneBulkDownloadJobs	batch getExclusiveAlmostDoneBulkDownloadJobs action allows to get a BatchJob of type BULKDOWNLOAD that wait for remote closure 
 *	.
 * @action	updateExclusiveBulkDownloadJob	batch updateExclusiveBulkDownloadJob action updates a BatchJob of type BULKDOWNLOAD that was claimed using the getExclusiveBulkDownloadJobs
 *	.
 * @action	freeExclusiveBulkDownloadJob	batch freeExclusiveBulkDownloadJob action frees a BatchJob of type BULKDOWNLOAD that was claimed using the getExclusiveBulkDownloadJobs
 *	.
 * @action	getExclusiveProvisionProvideJobs	batch getExclusiveProvisionProvideJobs action allows to get a BatchJob of type ProvisionProvide
 *	.
 * @action	getExclusiveAlmostDoneProvisionProvideJobs	batch getExclusiveAlmostDoneProvisionProvideJobs action allows to get a BatchJob of type ProvisionProvide that wait for remote closure 
 *	.
 * @action	updateExclusiveProvisionProvideJob	batch updateExclusiveProvisionProvideJob action updates a BatchJob of type ProvisionProvide that was claimed using the getExclusiveProvisionProvideJobs
 *	.
 * @action	freeExclusiveProvisionProvideJob	batch freeExclusiveProvisionProvideJob action frees a BatchJob of type ProvisionProvide that was claimed using the getExclusiveProvisionProvideJobs
 *	.
 * @action	getExclusiveProvisionDeleteJobs	batch getExclusiveProvisionDeleteJobs action allows to get a BatchJob of type ProvisionDelete
 *	.
 * @action	getExclusiveAlmostDoneProvisionDeleteJobs	batch getExclusiveAlmostDoneProvisionDeleteJobs action allows to get a BatchJob of type ProvisionDelete that wait for remote closure 
 *	.
 * @action	updateExclusiveProvisionDeleteJob	batch updateExclusiveProvisionDeleteJob action updates a BatchJob of type ProvisionDelete that was claimed using the getExclusiveProvisionDeleteJobs
 *	.
 * @action	freeExclusiveProvisionDeleteJob	batch freeExclusiveProvisionDeleteJob action frees a BatchJob of type ProvisionDelete that was claimed using the getExclusiveProvisionDeleteJobs
 *	.
 * @action	resetJobExecutionAttempts	batch resetJobExecutionAttempts action resets the execution attempts of the job 
 *	.
 * @action	freeExclusiveJob	batch freeExclusiveJobAction action allows to get a generic BatchJob 
 *	.
 * @action	getQueueSize	batch getQueueSize action get the queue size for job type 
 *	.
 * @action	getExclusiveJobs	batch getExclusiveJobsAction action allows to get a BatchJob 
 *	.
 * @action	getExclusiveAlmostDone	batch getExclusiveAlmostDone action allows to get a BatchJob that wait for remote closure 
 *	.
 * @action	updateExclusiveJob	batch updateExclusiveJobAction action updates a BatchJob of extended type that was claimed using the getExclusiveJobs
 *	.
 * @action	cleanExclusiveJobs	batch cleanExclusiveJobs action mark as fatal error all expired jobs
 *	.
 * @action	logConversion	Add the data to the flavor asset conversion log, creates it if doesn't exists
 *	.
 * @action	checkFileExists	batch checkFileExists action check if the file exists
 *	.
*/
function KalturaMetadataBatchService(client){
	this.init(client);
}
KalturaMetadataBatchService.inheritsFrom (KalturaServiceBase);
/**
 * batch getExclusiveImportMetadataJob action allows to get a BatchJob of type METADATA_IMPORT 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaMetadataBatchService.prototype.getExclusiveImportMetadataJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("metadataBatch", "getExclusiveImportMetadataJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusiveImportMetadataJob action updates a BatchJob of type METADATA_IMPORT that was claimed using the getExclusiveImportMetadataJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @return	KalturaBatchJob.
 */
KalturaMetadataBatchService.prototype.updateExclusiveImportMetadataJob = function(callback, id, lockKey, job){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.queueServiceActionCall("metadataBatch", "updateExclusiveImportMetadataJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusiveImportMetadataJob action frees a BatchJob of type ImportMetadata that was claimed using the getExclusiveImportMetadataJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism (optional).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaMetadataBatchService.prototype.freeExclusiveImportMetadataJob = function(callback, id, lockKey, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("metadataBatch", "freeExclusiveImportMetadataJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveTransformMetadataJob action allows to get a BatchJob of type METADATA_TRANSFORM 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaMetadataBatchService.prototype.getExclusiveTransformMetadataJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("metadataBatch", "getExclusiveTransformMetadataJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusiveTransformMetadataJob action updates a BatchJob of type METADATA_TRANSFORM that was claimed using the getExclusiveTransformMetadataJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @return	KalturaBatchJob.
 */
KalturaMetadataBatchService.prototype.updateExclusiveTransformMetadataJob = function(callback, id, lockKey, job){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.queueServiceActionCall("metadataBatch", "updateExclusiveTransformMetadataJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusiveTransformMetadataJob action frees a BatchJob of type TransformMetadata that was claimed using the getExclusiveTransformMetadataJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism (optional).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaMetadataBatchService.prototype.freeExclusiveTransformMetadataJob = function(callback, id, lockKey, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("metadataBatch", "freeExclusiveTransformMetadataJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getTransformMetadataObjects action retrieve all metadata objects that requires upgrade and the total count 
 *	.
 * @param	metadataProfileId	int		The id of the metadata profile (optional).
 * @param	srcVersion	int		The old metadata profile version (optional).
 * @param	destVersion	int		The new metadata profile version (optional).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaTransformMetadataResponse.
 */
KalturaMetadataBatchService.prototype.getTransformMetadataObjects = function(callback, metadataProfileId, srcVersion, destVersion, pager){
	if(!pager)
		pager = null;
	var kparams = new Object();
	this.client.addParam(kparams, "metadataProfileId", metadataProfileId);
	this.client.addParam(kparams, "srcVersion", srcVersion);
	this.client.addParam(kparams, "destVersion", destVersion);
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("metadataBatch", "getTransformMetadataObjects", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getTransformMetadataObjects action retrieve all metadata objects that requires upgrade and the total count 
 *	.
 * @param	metadataProfileId	int		The id of the metadata profile (optional).
 * @param	srcVersion	int		The old metadata profile version (optional).
 * @param	destVersion	int		The new metadata profile version (optional).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaUpgradeMetadataResponse.
 */
KalturaMetadataBatchService.prototype.upgradeMetadataObjects = function(callback, metadataProfileId, srcVersion, destVersion, pager){
	if(!pager)
		pager = null;
	var kparams = new Object();
	this.client.addParam(kparams, "metadataProfileId", metadataProfileId);
	this.client.addParam(kparams, "srcVersion", srcVersion);
	this.client.addParam(kparams, "destVersion", destVersion);
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("metadataBatch", "upgradeMetadataObjects", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveImportJob action allows to get a BatchJob of type IMPORT 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaMetadataBatchService.prototype.getExclusiveImportJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("metadataBatch", "getExclusiveImportJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusiveImportJob action updates a BatchJob of type IMPORT that was claimed using the getExclusiveImportJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @param	entryStatus	string		Optional parameter if the entry of the batch should change  (optional, enum: KalturaEntryStatus, default: null).
 * @return	KalturaBatchJob.
 */
KalturaMetadataBatchService.prototype.updateExclusiveImportJob = function(callback, id, lockKey, job, entryStatus){
	if(!entryStatus)
		entryStatus = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.addParam(kparams, "entryStatus", entryStatus);
	this.client.queueServiceActionCall("metadataBatch", "updateExclusiveImportJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusiveImportJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveImportJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism (optional).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaMetadataBatchService.prototype.freeExclusiveImportJob = function(callback, id, lockKey, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("metadataBatch", "freeExclusiveImportJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveBulkUploadJob action allows to get a BatchJob of type BULKUPLOAD 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaMetadataBatchService.prototype.getExclusiveBulkUploadJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("metadataBatch", "getExclusiveBulkUploadJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDoneBulkUploadJobs action allows to get a BatchJob of type BULKUPLOAD that wait for remote closure 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaMetadataBatchService.prototype.getExclusiveAlmostDoneBulkUploadJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("metadataBatch", "getExclusiveAlmostDoneBulkUploadJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusiveBulkUploadJob action updates a BatchJob of type BULKUPLOAD that was claimed using the getExclusiveBulkUploadJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @return	KalturaBatchJob.
 */
KalturaMetadataBatchService.prototype.updateExclusiveBulkUploadJob = function(callback, id, lockKey, job){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.queueServiceActionCall("metadataBatch", "updateExclusiveBulkUploadJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusiveBulkUploadJob action frees a BatchJob of type BULKUPLOAD that was claimed using the getExclusiveBulkUploadJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaMetadataBatchService.prototype.freeExclusiveBulkUploadJob = function(callback, id, lockKey, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("metadataBatch", "freeExclusiveBulkUploadJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch addBulkUploadResultAction action adds KalturaBulkUploadResult to the DB
 *	.
 * @param	bulkUploadResult	KalturaBulkUploadResult		The results to save to the DB (optional).
 * @param	pluginDataArray	array		 (optional, default: null).
 * @return	KalturaBulkUploadResult.
 */
KalturaMetadataBatchService.prototype.addBulkUploadResult = function(callback, bulkUploadResult, pluginDataArray){
	if(!pluginDataArray)
		pluginDataArray = null;
	var kparams = new Object();
	this.client.addParam(kparams, "bulkUploadResult", toParams(bulkUploadResult));
	if(pluginDataArray != null)
	for(var index in pluginDataArray)
	{
		var obj = pluginDataArray[index];
		this.client.addParam(kparams, "pluginDataArray:" + index, toParams(obj));
	}
	this.client.queueServiceActionCall("metadataBatch", "addBulkUploadResult", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getBulkUploadLastResultAction action returns the last result of the bulk upload
 *	.
 * @param	bulkUploadJobId	int		The id of the bulk upload job (optional).
 * @return	KalturaBulkUploadResult.
 */
KalturaMetadataBatchService.prototype.getBulkUploadLastResult = function(callback, bulkUploadJobId){
	var kparams = new Object();
	this.client.addParam(kparams, "bulkUploadJobId", bulkUploadJobId);
	this.client.queueServiceActionCall("metadataBatch", "getBulkUploadLastResult", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateBulkUploadResults action adds KalturaBulkUploadResult to the DB
 *	.
 * @param	bulkUploadJobId	int		The id of the bulk upload job (optional).
 * @return	int.
 */
KalturaMetadataBatchService.prototype.updateBulkUploadResults = function(callback, bulkUploadJobId){
	var kparams = new Object();
	this.client.addParam(kparams, "bulkUploadJobId", bulkUploadJobId);
	this.client.queueServiceActionCall("metadataBatch", "updateBulkUploadResults", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDoneRemoteConvertJobsAction action allows to get a BatchJob of type REMOTE_CONVERT that wait for remote closure 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaMetadataBatchService.prototype.getExclusiveAlmostDoneRemoteConvertJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("metadataBatch", "getExclusiveAlmostDoneRemoteConvertJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusiveRemoteConvertJobAction action updates a BatchJob of type REMOTE_CONVERT that was claimed using the getExclusiveConvertJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @param	entryStatus	string		Optional parameter if the entry of the batch should change  (optional, enum: KalturaEntryStatus, default: null).
 * @return	KalturaBatchJob.
 */
KalturaMetadataBatchService.prototype.updateExclusiveRemoteConvertJob = function(callback, id, lockKey, job, entryStatus){
	if(!entryStatus)
		entryStatus = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.addParam(kparams, "entryStatus", entryStatus);
	this.client.queueServiceActionCall("metadataBatch", "updateExclusiveRemoteConvertJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusiveRemoteConvertJobAction action frees a BatchJob of type REMOTE_CONVERT that was claimed using the getExclusiveConvertJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaMetadataBatchService.prototype.freeExclusiveRemoteConvertJob = function(callback, id, lockKey, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("metadataBatch", "freeExclusiveRemoteConvertJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDoneConvertCollectionJobs action allows to get a BatchJob of type CONVERT_COLLECTION that wait for remote closure 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaMetadataBatchService.prototype.getExclusiveAlmostDoneConvertCollectionJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("metadataBatch", "getExclusiveAlmostDoneConvertCollectionJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDoneConvertProfileJobs action allows to get a BatchJob of type CONVERT_PROFILE that wait for remote closure 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaMetadataBatchService.prototype.getExclusiveAlmostDoneConvertProfileJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("metadataBatch", "getExclusiveAlmostDoneConvertProfileJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusiveConvertCollectionJobAction action updates a BatchJob of type CONVERT_PROFILE that was claimed using the getExclusiveConvertJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @param	entryStatus	string		Optional parameter if the entry of the batch should change (optional, enum: KalturaEntryStatus, default: null).
 * @param	flavorsData	array		 (optional, default: null).
 * @return	KalturaBatchJob.
 */
KalturaMetadataBatchService.prototype.updateExclusiveConvertCollectionJob = function(callback, id, lockKey, job, entryStatus, flavorsData){
	if(!entryStatus)
		entryStatus = null;
	if(!flavorsData)
		flavorsData = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.addParam(kparams, "entryStatus", entryStatus);
	if(flavorsData != null)
	for(var index in flavorsData)
	{
		var obj = flavorsData[index];
		this.client.addParam(kparams, "flavorsData:" + index, toParams(obj));
	}
	this.client.queueServiceActionCall("metadataBatch", "updateExclusiveConvertCollectionJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusiveConvertProfileJobAction action updates a BatchJob of type CONVERT_PROFILE that was claimed using the getExclusiveConvertJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @param	entryStatus	string		Optional parameter if the entry of the batch should change  (optional, enum: KalturaEntryStatus, default: null).
 * @return	KalturaBatchJob.
 */
KalturaMetadataBatchService.prototype.updateExclusiveConvertProfileJob = function(callback, id, lockKey, job, entryStatus){
	if(!entryStatus)
		entryStatus = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.addParam(kparams, "entryStatus", entryStatus);
	this.client.queueServiceActionCall("metadataBatch", "updateExclusiveConvertProfileJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusiveConvertCollectionJobAction action frees a BatchJob of type CONVERT_COLLECTION that was claimed using the getExclusiveConvertJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaMetadataBatchService.prototype.freeExclusiveConvertCollectionJob = function(callback, id, lockKey, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("metadataBatch", "freeExclusiveConvertCollectionJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusiveConvertProfileJobAction action frees a BatchJob of type CONVERT_PROFILE that was claimed using the getExclusiveConvertJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaMetadataBatchService.prototype.freeExclusiveConvertProfileJob = function(callback, id, lockKey, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("metadataBatch", "freeExclusiveConvertProfileJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveConvertCollectionJob action allows to get a BatchJob of type CONVERT_COLLECTION 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaMetadataBatchService.prototype.getExclusiveConvertCollectionJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("metadataBatch", "getExclusiveConvertCollectionJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveConvertJob action allows to get a BatchJob of type CONVERT 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaMetadataBatchService.prototype.getExclusiveConvertJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("metadataBatch", "getExclusiveConvertJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDoneConvertJobsAction action allows to get a BatchJob of type CONVERT that wait for remote closure 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaMetadataBatchService.prototype.getExclusiveAlmostDoneConvertJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("metadataBatch", "getExclusiveAlmostDoneConvertJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusiveConvertJob action updates a BatchJob of type CONVERT that was claimed using the getExclusiveConvertJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @param	entryStatus	string		Optional parameter if the entry of the batch should change  (optional, enum: KalturaEntryStatus, default: null).
 * @return	KalturaBatchJob.
 */
KalturaMetadataBatchService.prototype.updateExclusiveConvertJob = function(callback, id, lockKey, job, entryStatus){
	if(!entryStatus)
		entryStatus = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.addParam(kparams, "entryStatus", entryStatus);
	this.client.queueServiceActionCall("metadataBatch", "updateExclusiveConvertJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusiveConvertJobSubType action updates the sub type for a BatchJob of type CONVERT that was claimed using the getExclusiveConvertJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	subType	int		 (optional).
 * @return	KalturaBatchJob.
 */
KalturaMetadataBatchService.prototype.updateExclusiveConvertJobSubType = function(callback, id, lockKey, subType){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "subType", subType);
	this.client.queueServiceActionCall("metadataBatch", "updateExclusiveConvertJobSubType", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusiveConvertJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveConvertJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaMetadataBatchService.prototype.freeExclusiveConvertJob = function(callback, id, lockKey, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("metadataBatch", "freeExclusiveConvertJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusivePostConvertJob action allows to get a BatchJob of type POSTCONVERT 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaMetadataBatchService.prototype.getExclusivePostConvertJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("metadataBatch", "getExclusivePostConvertJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusivePostConvertJob action updates a BatchJob of type POSTCONVERT that was claimed using the getExclusivePostConvertJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @param	entryStatus	string		Optional parameter if the entry of the batch should change  (optional, enum: KalturaEntryStatus, default: null).
 * @return	KalturaBatchJob.
 */
KalturaMetadataBatchService.prototype.updateExclusivePostConvertJob = function(callback, id, lockKey, job, entryStatus){
	if(!entryStatus)
		entryStatus = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.addParam(kparams, "entryStatus", entryStatus);
	this.client.queueServiceActionCall("metadataBatch", "updateExclusivePostConvertJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusivePostConvertJob action frees a BatchJob of type IMPORT that was claimed using the getExclusivePostConvertJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaMetadataBatchService.prototype.freeExclusivePostConvertJob = function(callback, id, lockKey, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("metadataBatch", "freeExclusivePostConvertJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusivePullJob action allows to get a BatchJob of type PULL 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaMetadataBatchService.prototype.getExclusivePullJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("metadataBatch", "getExclusivePullJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusivePullJob action updates a BatchJob of type PULL that was claimed using the getExclusivePullJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @return	KalturaBatchJob.
 */
KalturaMetadataBatchService.prototype.updateExclusivePullJob = function(callback, id, lockKey, job){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.queueServiceActionCall("metadataBatch", "updateExclusivePullJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusivePullJob action frees a BatchJob of type IMPORT that was claimed using the getExclusivePullJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaMetadataBatchService.prototype.freeExclusivePullJob = function(callback, id, lockKey, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("metadataBatch", "freeExclusivePullJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveExtractMediaJob action allows to get a BatchJob of type EXTRACT_MEDIA 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaMetadataBatchService.prototype.getExclusiveExtractMediaJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("metadataBatch", "getExclusiveExtractMediaJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusiveExtractMediaJob action updates a BatchJob of type EXTRACT_MEDIA that was claimed using the getExclusiveExtractMediaJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @param	entryStatus	string		Optional parameter if the entry of the batch should change  (optional, enum: KalturaEntryStatus, default: null).
 * @return	KalturaBatchJob.
 */
KalturaMetadataBatchService.prototype.updateExclusiveExtractMediaJob = function(callback, id, lockKey, job, entryStatus){
	if(!entryStatus)
		entryStatus = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.addParam(kparams, "entryStatus", entryStatus);
	this.client.queueServiceActionCall("metadataBatch", "updateExclusiveExtractMediaJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch addMediaInfoAction action saves a media info object
 *	.
 * @param	mediaInfo	KalturaMediaInfo		 (optional).
 * @return	KalturaMediaInfo.
 */
KalturaMetadataBatchService.prototype.addMediaInfo = function(callback, mediaInfo){
	var kparams = new Object();
	this.client.addParam(kparams, "mediaInfo", toParams(mediaInfo));
	this.client.queueServiceActionCall("metadataBatch", "addMediaInfo", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusiveExtractMediaJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveExtractMediaJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaMetadataBatchService.prototype.freeExclusiveExtractMediaJob = function(callback, id, lockKey, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("metadataBatch", "freeExclusiveExtractMediaJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveStorageExportJob action allows to get a BatchJob of type STORAGE_EXPORT 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaMetadataBatchService.prototype.getExclusiveStorageExportJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("metadataBatch", "getExclusiveStorageExportJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusiveStorageExportJob action updates a BatchJob of type STORAGE_EXPORT that was claimed using the getExclusiveStorageExportJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @param	entryStatus	string		Optional parameter if the entry of the batch should change  (optional, enum: KalturaEntryStatus, default: null).
 * @return	KalturaBatchJob.
 */
KalturaMetadataBatchService.prototype.updateExclusiveStorageExportJob = function(callback, id, lockKey, job, entryStatus){
	if(!entryStatus)
		entryStatus = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.addParam(kparams, "entryStatus", entryStatus);
	this.client.queueServiceActionCall("metadataBatch", "updateExclusiveStorageExportJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusiveStorageExportJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveStorageExportJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaMetadataBatchService.prototype.freeExclusiveStorageExportJob = function(callback, id, lockKey, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("metadataBatch", "freeExclusiveStorageExportJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveStorageDeleteJob action allows to get a BatchJob of type STORAGE_DELETE 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaMetadataBatchService.prototype.getExclusiveStorageDeleteJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("metadataBatch", "getExclusiveStorageDeleteJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusiveStorageDeleteJob action updates a BatchJob of type StorageDelete that was claimed using the getExclusiveStorageDeleteJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @param	entryStatus	string		Optional parameter if the entry of the batch should change  (optional, enum: KalturaEntryStatus, default: null).
 * @return	KalturaBatchJob.
 */
KalturaMetadataBatchService.prototype.updateExclusiveStorageDeleteJob = function(callback, id, lockKey, job, entryStatus){
	if(!entryStatus)
		entryStatus = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.addParam(kparams, "entryStatus", entryStatus);
	this.client.queueServiceActionCall("metadataBatch", "updateExclusiveStorageDeleteJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusiveStorageDeleteJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveStorageDeleteJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaMetadataBatchService.prototype.freeExclusiveStorageDeleteJob = function(callback, id, lockKey, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("metadataBatch", "freeExclusiveStorageDeleteJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveNotificationJob action allows to get a BatchJob of type NOTIFICATION 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	KalturaBatchGetExclusiveNotificationJobsResponse.
 */
KalturaMetadataBatchService.prototype.getExclusiveNotificationJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("metadataBatch", "getExclusiveNotificationJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusiveNotificationJob action updates a BatchJob of type NOTIFICATION that was claimed using the getExclusiveNotificationJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @param	entryStatus	string		Optional parameter if the entry of the batch should change  (optional, enum: KalturaEntryStatus, default: null).
 * @return	KalturaBatchJob.
 */
KalturaMetadataBatchService.prototype.updateExclusiveNotificationJob = function(callback, id, lockKey, job, entryStatus){
	if(!entryStatus)
		entryStatus = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.addParam(kparams, "entryStatus", entryStatus);
	this.client.queueServiceActionCall("metadataBatch", "updateExclusiveNotificationJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusiveNotificationJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveNotificationJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaMetadataBatchService.prototype.freeExclusiveNotificationJob = function(callback, id, lockKey, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("metadataBatch", "freeExclusiveNotificationJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveMailJob action allows to get a BatchJob of type MAIL 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaMetadataBatchService.prototype.getExclusiveMailJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("metadataBatch", "getExclusiveMailJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusiveMailJob action updates a BatchJob of type MAIL that was claimed using the getExclusiveMailJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @param	entryStatus	string		Optional parameter if the entry of the batch should change  (optional, enum: KalturaEntryStatus, default: null).
 * @return	KalturaBatchJob.
 */
KalturaMetadataBatchService.prototype.updateExclusiveMailJob = function(callback, id, lockKey, job, entryStatus){
	if(!entryStatus)
		entryStatus = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.addParam(kparams, "entryStatus", entryStatus);
	this.client.queueServiceActionCall("metadataBatch", "updateExclusiveMailJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusiveMailJob action frees a BatchJob of type MAIL that was claimed using the getExclusiveMailJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaMetadataBatchService.prototype.freeExclusiveMailJob = function(callback, id, lockKey, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("metadataBatch", "freeExclusiveMailJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveBulkDownloadJobs action allows to get a BatchJob of type BULKDOWNLOAD
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaMetadataBatchService.prototype.getExclusiveBulkDownloadJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("metadataBatch", "getExclusiveBulkDownloadJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDoneBulkDownloadJobs action allows to get a BatchJob of type BULKDOWNLOAD that wait for remote closure 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaMetadataBatchService.prototype.getExclusiveAlmostDoneBulkDownloadJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("metadataBatch", "getExclusiveAlmostDoneBulkDownloadJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusiveBulkDownloadJob action updates a BatchJob of type BULKDOWNLOAD that was claimed using the getExclusiveBulkDownloadJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @return	KalturaBatchJob.
 */
KalturaMetadataBatchService.prototype.updateExclusiveBulkDownloadJob = function(callback, id, lockKey, job){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.queueServiceActionCall("metadataBatch", "updateExclusiveBulkDownloadJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusiveBulkDownloadJob action frees a BatchJob of type BULKDOWNLOAD that was claimed using the getExclusiveBulkDownloadJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaMetadataBatchService.prototype.freeExclusiveBulkDownloadJob = function(callback, id, lockKey, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("metadataBatch", "freeExclusiveBulkDownloadJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveProvisionProvideJobs action allows to get a BatchJob of type ProvisionProvide
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaMetadataBatchService.prototype.getExclusiveProvisionProvideJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("metadataBatch", "getExclusiveProvisionProvideJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDoneProvisionProvideJobs action allows to get a BatchJob of type ProvisionProvide that wait for remote closure 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaMetadataBatchService.prototype.getExclusiveAlmostDoneProvisionProvideJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("metadataBatch", "getExclusiveAlmostDoneProvisionProvideJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusiveProvisionProvideJob action updates a BatchJob of type ProvisionProvide that was claimed using the getExclusiveProvisionProvideJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @return	KalturaBatchJob.
 */
KalturaMetadataBatchService.prototype.updateExclusiveProvisionProvideJob = function(callback, id, lockKey, job){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.queueServiceActionCall("metadataBatch", "updateExclusiveProvisionProvideJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusiveProvisionProvideJob action frees a BatchJob of type ProvisionProvide that was claimed using the getExclusiveProvisionProvideJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaMetadataBatchService.prototype.freeExclusiveProvisionProvideJob = function(callback, id, lockKey, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("metadataBatch", "freeExclusiveProvisionProvideJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveProvisionDeleteJobs action allows to get a BatchJob of type ProvisionDelete
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaMetadataBatchService.prototype.getExclusiveProvisionDeleteJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("metadataBatch", "getExclusiveProvisionDeleteJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDoneProvisionDeleteJobs action allows to get a BatchJob of type ProvisionDelete that wait for remote closure 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaMetadataBatchService.prototype.getExclusiveAlmostDoneProvisionDeleteJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("metadataBatch", "getExclusiveAlmostDoneProvisionDeleteJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusiveProvisionDeleteJob action updates a BatchJob of type ProvisionDelete that was claimed using the getExclusiveProvisionDeleteJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @return	KalturaBatchJob.
 */
KalturaMetadataBatchService.prototype.updateExclusiveProvisionDeleteJob = function(callback, id, lockKey, job){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.queueServiceActionCall("metadataBatch", "updateExclusiveProvisionDeleteJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusiveProvisionDeleteJob action frees a BatchJob of type ProvisionDelete that was claimed using the getExclusiveProvisionDeleteJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaMetadataBatchService.prototype.freeExclusiveProvisionDeleteJob = function(callback, id, lockKey, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("metadataBatch", "freeExclusiveProvisionDeleteJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch resetJobExecutionAttempts action resets the execution attempts of the job 
 *	.
 * @param	id	int		The id of the job (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism (optional).
 * @param	jobType	string		The type of the job   (optional, enum: KalturaBatchJobType).
 * @return	.
 */
KalturaMetadataBatchService.prototype.resetJobExecutionAttempts = function(callback, id, lockKey, jobType){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "jobType", jobType);
	this.client.queueServiceActionCall("metadataBatch", "resetJobExecutionAttempts", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusiveJobAction action allows to get a generic BatchJob 
 *	.
 * @param	id	int		The id of the job (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism (optional).
 * @param	jobType	string		The type of the job   (optional, enum: KalturaBatchJobType).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaMetadataBatchService.prototype.freeExclusiveJob = function(callback, id, lockKey, jobType, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "jobType", jobType);
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("metadataBatch", "freeExclusiveJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getQueueSize action get the queue size for job type 
 *	.
 * @param	workerQueueFilter	KalturaWorkerQueueFilter		The worker filter   (optional).
 * @return	int.
 */
KalturaMetadataBatchService.prototype.getQueueSize = function(callback, workerQueueFilter){
	var kparams = new Object();
	this.client.addParam(kparams, "workerQueueFilter", toParams(workerQueueFilter));
	this.client.queueServiceActionCall("metadataBatch", "getQueueSize", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveJobsAction action allows to get a BatchJob 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @param	jobType	string		The type of the job - could be a custom extended type (optional, enum: KalturaBatchJobType, default: null).
 * @return	array.
 */
KalturaMetadataBatchService.prototype.getExclusiveJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter, jobType){
	if(!filter)
		filter = null;
	if(!jobType)
		jobType = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.addParam(kparams, "jobType", jobType);
	this.client.queueServiceActionCall("metadataBatch", "getExclusiveJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDone action allows to get a BatchJob that wait for remote closure 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @param	jobType	string		The type of the job - could be a custom extended type (optional, enum: KalturaBatchJobType, default: null).
 * @return	array.
 */
KalturaMetadataBatchService.prototype.getExclusiveAlmostDone = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter, jobType){
	if(!filter)
		filter = null;
	if(!jobType)
		jobType = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.addParam(kparams, "jobType", jobType);
	this.client.queueServiceActionCall("metadataBatch", "getExclusiveAlmostDone", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusiveJobAction action updates a BatchJob of extended type that was claimed using the getExclusiveJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @param	entryStatus	string		Optional parameter if the entry of the batch should change  (optional, enum: KalturaEntryStatus, default: null).
 * @return	KalturaBatchJob.
 */
KalturaMetadataBatchService.prototype.updateExclusiveJob = function(callback, id, lockKey, job, entryStatus){
	if(!entryStatus)
		entryStatus = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.addParam(kparams, "entryStatus", entryStatus);
	this.client.queueServiceActionCall("metadataBatch", "updateExclusiveJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch cleanExclusiveJobs action mark as fatal error all expired jobs
 *	.
 * @return	int.
 */
KalturaMetadataBatchService.prototype.cleanExclusiveJobs = function(callback){
	var kparams = new Object();
	this.client.queueServiceActionCall("metadataBatch", "cleanExclusiveJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Add the data to the flavor asset conversion log, creates it if doesn't exists
 *	.
 * @param	flavorAssetId	string		 (optional).
 * @param	data	string		 (optional).
 * @return	.
 */
KalturaMetadataBatchService.prototype.logConversion = function(callback, flavorAssetId, data){
	var kparams = new Object();
	this.client.addParam(kparams, "flavorAssetId", flavorAssetId);
	this.client.addParam(kparams, "data", data);
	this.client.queueServiceActionCall("metadataBatch", "logConversion", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch checkFileExists action check if the file exists
 *	.
 * @param	localPath	string		 (optional).
 * @param	size	int		 (optional).
 * @return	KalturaFileExistsResponse.
 */
KalturaMetadataBatchService.prototype.checkFileExists = function(callback, localPath, size){
	var kparams = new Object();
	this.client.addParam(kparams, "localPath", localPath);
	this.client.addParam(kparams, "size", size);
	this.client.queueServiceActionCall("metadataBatch", "checkFileExists", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: filesyncImportBatch.
 * The available service actions:
 * @action	getExclusiveFileSyncImportJobs	batch getExclusiveFileSyncImportJob action allows to get a BatchJob of type FILESYNC_IMPORT 
 *	.
 * @action	updateExclusiveFileSyncImportJob	batch updateExclusiveFileSyncImportJob action updates a BatchJob of type FILESYNC_IMPORT that was claimed using the getExclusiveFileSyncImportJobs
 *	.
 * @action	freeExclusiveFileSyncImportJob	batch freeExclusiveFileSyncImportJob action frees a BatchJob of type FILESYNC_IMPORT that was claimed using the getExclusiveFileSyncImportJobs
 *	.
 * @action	getExclusiveAlmostDoneFileSyncImportJobs	batch getExclusiveAlmostDoneFileSyncImportJobs action allows to get a BatchJob of type BULKUPLOAD that wait for remote closure 
 *	.
 * @action	getExclusiveImportJobs	batch getExclusiveImportJob action allows to get a BatchJob of type IMPORT 
 *	.
 * @action	updateExclusiveImportJob	batch updateExclusiveImportJob action updates a BatchJob of type IMPORT that was claimed using the getExclusiveImportJobs
 *	.
 * @action	freeExclusiveImportJob	batch freeExclusiveImportJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveImportJobs
 *	.
 * @action	getExclusiveBulkUploadJobs	batch getExclusiveBulkUploadJob action allows to get a BatchJob of type BULKUPLOAD 
 *	.
 * @action	getExclusiveAlmostDoneBulkUploadJobs	batch getExclusiveAlmostDoneBulkUploadJobs action allows to get a BatchJob of type BULKUPLOAD that wait for remote closure 
 *	.
 * @action	updateExclusiveBulkUploadJob	batch updateExclusiveBulkUploadJob action updates a BatchJob of type BULKUPLOAD that was claimed using the getExclusiveBulkUploadJobs
 *	.
 * @action	freeExclusiveBulkUploadJob	batch freeExclusiveBulkUploadJob action frees a BatchJob of type BULKUPLOAD that was claimed using the getExclusiveBulkUploadJobs
 *	.
 * @action	addBulkUploadResult	batch addBulkUploadResultAction action adds KalturaBulkUploadResult to the DB
 *	.
 * @action	getBulkUploadLastResult	batch getBulkUploadLastResultAction action returns the last result of the bulk upload
 *	.
 * @action	updateBulkUploadResults	batch updateBulkUploadResults action adds KalturaBulkUploadResult to the DB
 *	.
 * @action	getExclusiveAlmostDoneRemoteConvertJobs	batch getExclusiveAlmostDoneRemoteConvertJobsAction action allows to get a BatchJob of type REMOTE_CONVERT that wait for remote closure 
 *	.
 * @action	updateExclusiveRemoteConvertJob	batch updateExclusiveRemoteConvertJobAction action updates a BatchJob of type REMOTE_CONVERT that was claimed using the getExclusiveConvertJobs
 *	.
 * @action	freeExclusiveRemoteConvertJob	batch freeExclusiveRemoteConvertJobAction action frees a BatchJob of type REMOTE_CONVERT that was claimed using the getExclusiveConvertJobs
 *	.
 * @action	getExclusiveAlmostDoneConvertCollectionJobs	batch getExclusiveAlmostDoneConvertCollectionJobs action allows to get a BatchJob of type CONVERT_COLLECTION that wait for remote closure 
 *	.
 * @action	getExclusiveAlmostDoneConvertProfileJobs	batch getExclusiveAlmostDoneConvertProfileJobs action allows to get a BatchJob of type CONVERT_PROFILE that wait for remote closure 
 *	.
 * @action	updateExclusiveConvertCollectionJob	batch updateExclusiveConvertCollectionJobAction action updates a BatchJob of type CONVERT_PROFILE that was claimed using the getExclusiveConvertJobs
 *	.
 * @action	updateExclusiveConvertProfileJob	batch updateExclusiveConvertProfileJobAction action updates a BatchJob of type CONVERT_PROFILE that was claimed using the getExclusiveConvertJobs
 *	.
 * @action	freeExclusiveConvertCollectionJob	batch freeExclusiveConvertCollectionJobAction action frees a BatchJob of type CONVERT_COLLECTION that was claimed using the getExclusiveConvertJobs
 *	.
 * @action	freeExclusiveConvertProfileJob	batch freeExclusiveConvertProfileJobAction action frees a BatchJob of type CONVERT_PROFILE that was claimed using the getExclusiveConvertJobs
 *	.
 * @action	getExclusiveConvertCollectionJobs	batch getExclusiveConvertCollectionJob action allows to get a BatchJob of type CONVERT_COLLECTION 
 *	.
 * @action	getExclusiveConvertJobs	batch getExclusiveConvertJob action allows to get a BatchJob of type CONVERT 
 *	.
 * @action	getExclusiveAlmostDoneConvertJobs	batch getExclusiveAlmostDoneConvertJobsAction action allows to get a BatchJob of type CONVERT that wait for remote closure 
 *	.
 * @action	updateExclusiveConvertJob	batch updateExclusiveConvertJob action updates a BatchJob of type CONVERT that was claimed using the getExclusiveConvertJobs
 *	.
 * @action	updateExclusiveConvertJobSubType	batch updateExclusiveConvertJobSubType action updates the sub type for a BatchJob of type CONVERT that was claimed using the getExclusiveConvertJobs
 *	.
 * @action	freeExclusiveConvertJob	batch freeExclusiveConvertJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveConvertJobs
 *	.
 * @action	getExclusivePostConvertJobs	batch getExclusivePostConvertJob action allows to get a BatchJob of type POSTCONVERT 
 *	.
 * @action	updateExclusivePostConvertJob	batch updateExclusivePostConvertJob action updates a BatchJob of type POSTCONVERT that was claimed using the getExclusivePostConvertJobs
 *	.
 * @action	freeExclusivePostConvertJob	batch freeExclusivePostConvertJob action frees a BatchJob of type IMPORT that was claimed using the getExclusivePostConvertJobs
 *	.
 * @action	getExclusivePullJobs	batch getExclusivePullJob action allows to get a BatchJob of type PULL 
 *	.
 * @action	updateExclusivePullJob	batch updateExclusivePullJob action updates a BatchJob of type PULL that was claimed using the getExclusivePullJobs
 *	.
 * @action	freeExclusivePullJob	batch freeExclusivePullJob action frees a BatchJob of type IMPORT that was claimed using the getExclusivePullJobs
 *	.
 * @action	getExclusiveExtractMediaJobs	batch getExclusiveExtractMediaJob action allows to get a BatchJob of type EXTRACT_MEDIA 
 *	.
 * @action	updateExclusiveExtractMediaJob	batch updateExclusiveExtractMediaJob action updates a BatchJob of type EXTRACT_MEDIA that was claimed using the getExclusiveExtractMediaJobs
 *	.
 * @action	addMediaInfo	batch addMediaInfoAction action saves a media info object
 *	.
 * @action	freeExclusiveExtractMediaJob	batch freeExclusiveExtractMediaJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveExtractMediaJobs
 *	.
 * @action	getExclusiveStorageExportJobs	batch getExclusiveStorageExportJob action allows to get a BatchJob of type STORAGE_EXPORT 
 *	.
 * @action	updateExclusiveStorageExportJob	batch updateExclusiveStorageExportJob action updates a BatchJob of type STORAGE_EXPORT that was claimed using the getExclusiveStorageExportJobs
 *	.
 * @action	freeExclusiveStorageExportJob	batch freeExclusiveStorageExportJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveStorageExportJobs
 *	.
 * @action	getExclusiveStorageDeleteJobs	batch getExclusiveStorageDeleteJob action allows to get a BatchJob of type STORAGE_DELETE 
 *	.
 * @action	updateExclusiveStorageDeleteJob	batch updateExclusiveStorageDeleteJob action updates a BatchJob of type StorageDelete that was claimed using the getExclusiveStorageDeleteJobs
 *	.
 * @action	freeExclusiveStorageDeleteJob	batch freeExclusiveStorageDeleteJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveStorageDeleteJobs
 *	.
 * @action	getExclusiveNotificationJobs	batch getExclusiveNotificationJob action allows to get a BatchJob of type NOTIFICATION 
 *	.
 * @action	updateExclusiveNotificationJob	batch updateExclusiveNotificationJob action updates a BatchJob of type NOTIFICATION that was claimed using the getExclusiveNotificationJobs
 *	.
 * @action	freeExclusiveNotificationJob	batch freeExclusiveNotificationJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveNotificationJobs
 *	.
 * @action	getExclusiveMailJobs	batch getExclusiveMailJob action allows to get a BatchJob of type MAIL 
 *	.
 * @action	updateExclusiveMailJob	batch updateExclusiveMailJob action updates a BatchJob of type MAIL that was claimed using the getExclusiveMailJobs
 *	.
 * @action	freeExclusiveMailJob	batch freeExclusiveMailJob action frees a BatchJob of type MAIL that was claimed using the getExclusiveMailJobs
 *	.
 * @action	getExclusiveBulkDownloadJobs	batch getExclusiveBulkDownloadJobs action allows to get a BatchJob of type BULKDOWNLOAD
 *	.
 * @action	getExclusiveAlmostDoneBulkDownloadJobs	batch getExclusiveAlmostDoneBulkDownloadJobs action allows to get a BatchJob of type BULKDOWNLOAD that wait for remote closure 
 *	.
 * @action	updateExclusiveBulkDownloadJob	batch updateExclusiveBulkDownloadJob action updates a BatchJob of type BULKDOWNLOAD that was claimed using the getExclusiveBulkDownloadJobs
 *	.
 * @action	freeExclusiveBulkDownloadJob	batch freeExclusiveBulkDownloadJob action frees a BatchJob of type BULKDOWNLOAD that was claimed using the getExclusiveBulkDownloadJobs
 *	.
 * @action	getExclusiveProvisionProvideJobs	batch getExclusiveProvisionProvideJobs action allows to get a BatchJob of type ProvisionProvide
 *	.
 * @action	getExclusiveAlmostDoneProvisionProvideJobs	batch getExclusiveAlmostDoneProvisionProvideJobs action allows to get a BatchJob of type ProvisionProvide that wait for remote closure 
 *	.
 * @action	updateExclusiveProvisionProvideJob	batch updateExclusiveProvisionProvideJob action updates a BatchJob of type ProvisionProvide that was claimed using the getExclusiveProvisionProvideJobs
 *	.
 * @action	freeExclusiveProvisionProvideJob	batch freeExclusiveProvisionProvideJob action frees a BatchJob of type ProvisionProvide that was claimed using the getExclusiveProvisionProvideJobs
 *	.
 * @action	getExclusiveProvisionDeleteJobs	batch getExclusiveProvisionDeleteJobs action allows to get a BatchJob of type ProvisionDelete
 *	.
 * @action	getExclusiveAlmostDoneProvisionDeleteJobs	batch getExclusiveAlmostDoneProvisionDeleteJobs action allows to get a BatchJob of type ProvisionDelete that wait for remote closure 
 *	.
 * @action	updateExclusiveProvisionDeleteJob	batch updateExclusiveProvisionDeleteJob action updates a BatchJob of type ProvisionDelete that was claimed using the getExclusiveProvisionDeleteJobs
 *	.
 * @action	freeExclusiveProvisionDeleteJob	batch freeExclusiveProvisionDeleteJob action frees a BatchJob of type ProvisionDelete that was claimed using the getExclusiveProvisionDeleteJobs
 *	.
 * @action	resetJobExecutionAttempts	batch resetJobExecutionAttempts action resets the execution attempts of the job 
 *	.
 * @action	freeExclusiveJob	batch freeExclusiveJobAction action allows to get a generic BatchJob 
 *	.
 * @action	getQueueSize	batch getQueueSize action get the queue size for job type 
 *	.
 * @action	getExclusiveJobs	batch getExclusiveJobsAction action allows to get a BatchJob 
 *	.
 * @action	getExclusiveAlmostDone	batch getExclusiveAlmostDone action allows to get a BatchJob that wait for remote closure 
 *	.
 * @action	updateExclusiveJob	batch updateExclusiveJobAction action updates a BatchJob of extended type that was claimed using the getExclusiveJobs
 *	.
 * @action	cleanExclusiveJobs	batch cleanExclusiveJobs action mark as fatal error all expired jobs
 *	.
 * @action	logConversion	Add the data to the flavor asset conversion log, creates it if doesn't exists
 *	.
 * @action	checkFileExists	batch checkFileExists action check if the file exists
 *	.
*/
function KalturaFilesyncImportBatchService(client){
	this.init(client);
}
KalturaFilesyncImportBatchService.inheritsFrom (KalturaServiceBase);
/**
 * batch getExclusiveFileSyncImportJob action allows to get a BatchJob of type FILESYNC_IMPORT 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaFilesyncImportBatchService.prototype.getExclusiveFileSyncImportJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("filesyncImportBatch", "getExclusiveFileSyncImportJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusiveFileSyncImportJob action updates a BatchJob of type FILESYNC_IMPORT that was claimed using the getExclusiveFileSyncImportJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @return	KalturaBatchJob.
 */
KalturaFilesyncImportBatchService.prototype.updateExclusiveFileSyncImportJob = function(callback, id, lockKey, job){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.queueServiceActionCall("filesyncImportBatch", "updateExclusiveFileSyncImportJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusiveFileSyncImportJob action frees a BatchJob of type FILESYNC_IMPORT that was claimed using the getExclusiveFileSyncImportJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism (optional).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaFilesyncImportBatchService.prototype.freeExclusiveFileSyncImportJob = function(callback, id, lockKey, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("filesyncImportBatch", "freeExclusiveFileSyncImportJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDoneFileSyncImportJobs action allows to get a BatchJob of type BULKUPLOAD that wait for remote closure 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaFilesyncImportBatchService.prototype.getExclusiveAlmostDoneFileSyncImportJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("filesyncImportBatch", "getExclusiveAlmostDoneFileSyncImportJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveImportJob action allows to get a BatchJob of type IMPORT 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaFilesyncImportBatchService.prototype.getExclusiveImportJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("filesyncImportBatch", "getExclusiveImportJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusiveImportJob action updates a BatchJob of type IMPORT that was claimed using the getExclusiveImportJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @param	entryStatus	string		Optional parameter if the entry of the batch should change  (optional, enum: KalturaEntryStatus, default: null).
 * @return	KalturaBatchJob.
 */
KalturaFilesyncImportBatchService.prototype.updateExclusiveImportJob = function(callback, id, lockKey, job, entryStatus){
	if(!entryStatus)
		entryStatus = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.addParam(kparams, "entryStatus", entryStatus);
	this.client.queueServiceActionCall("filesyncImportBatch", "updateExclusiveImportJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusiveImportJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveImportJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism (optional).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaFilesyncImportBatchService.prototype.freeExclusiveImportJob = function(callback, id, lockKey, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("filesyncImportBatch", "freeExclusiveImportJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveBulkUploadJob action allows to get a BatchJob of type BULKUPLOAD 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaFilesyncImportBatchService.prototype.getExclusiveBulkUploadJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("filesyncImportBatch", "getExclusiveBulkUploadJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDoneBulkUploadJobs action allows to get a BatchJob of type BULKUPLOAD that wait for remote closure 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaFilesyncImportBatchService.prototype.getExclusiveAlmostDoneBulkUploadJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("filesyncImportBatch", "getExclusiveAlmostDoneBulkUploadJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusiveBulkUploadJob action updates a BatchJob of type BULKUPLOAD that was claimed using the getExclusiveBulkUploadJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @return	KalturaBatchJob.
 */
KalturaFilesyncImportBatchService.prototype.updateExclusiveBulkUploadJob = function(callback, id, lockKey, job){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.queueServiceActionCall("filesyncImportBatch", "updateExclusiveBulkUploadJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusiveBulkUploadJob action frees a BatchJob of type BULKUPLOAD that was claimed using the getExclusiveBulkUploadJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaFilesyncImportBatchService.prototype.freeExclusiveBulkUploadJob = function(callback, id, lockKey, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("filesyncImportBatch", "freeExclusiveBulkUploadJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch addBulkUploadResultAction action adds KalturaBulkUploadResult to the DB
 *	.
 * @param	bulkUploadResult	KalturaBulkUploadResult		The results to save to the DB (optional).
 * @param	pluginDataArray	array		 (optional, default: null).
 * @return	KalturaBulkUploadResult.
 */
KalturaFilesyncImportBatchService.prototype.addBulkUploadResult = function(callback, bulkUploadResult, pluginDataArray){
	if(!pluginDataArray)
		pluginDataArray = null;
	var kparams = new Object();
	this.client.addParam(kparams, "bulkUploadResult", toParams(bulkUploadResult));
	if(pluginDataArray != null)
	for(var index in pluginDataArray)
	{
		var obj = pluginDataArray[index];
		this.client.addParam(kparams, "pluginDataArray:" + index, toParams(obj));
	}
	this.client.queueServiceActionCall("filesyncImportBatch", "addBulkUploadResult", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getBulkUploadLastResultAction action returns the last result of the bulk upload
 *	.
 * @param	bulkUploadJobId	int		The id of the bulk upload job (optional).
 * @return	KalturaBulkUploadResult.
 */
KalturaFilesyncImportBatchService.prototype.getBulkUploadLastResult = function(callback, bulkUploadJobId){
	var kparams = new Object();
	this.client.addParam(kparams, "bulkUploadJobId", bulkUploadJobId);
	this.client.queueServiceActionCall("filesyncImportBatch", "getBulkUploadLastResult", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateBulkUploadResults action adds KalturaBulkUploadResult to the DB
 *	.
 * @param	bulkUploadJobId	int		The id of the bulk upload job (optional).
 * @return	int.
 */
KalturaFilesyncImportBatchService.prototype.updateBulkUploadResults = function(callback, bulkUploadJobId){
	var kparams = new Object();
	this.client.addParam(kparams, "bulkUploadJobId", bulkUploadJobId);
	this.client.queueServiceActionCall("filesyncImportBatch", "updateBulkUploadResults", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDoneRemoteConvertJobsAction action allows to get a BatchJob of type REMOTE_CONVERT that wait for remote closure 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaFilesyncImportBatchService.prototype.getExclusiveAlmostDoneRemoteConvertJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("filesyncImportBatch", "getExclusiveAlmostDoneRemoteConvertJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusiveRemoteConvertJobAction action updates a BatchJob of type REMOTE_CONVERT that was claimed using the getExclusiveConvertJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @param	entryStatus	string		Optional parameter if the entry of the batch should change  (optional, enum: KalturaEntryStatus, default: null).
 * @return	KalturaBatchJob.
 */
KalturaFilesyncImportBatchService.prototype.updateExclusiveRemoteConvertJob = function(callback, id, lockKey, job, entryStatus){
	if(!entryStatus)
		entryStatus = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.addParam(kparams, "entryStatus", entryStatus);
	this.client.queueServiceActionCall("filesyncImportBatch", "updateExclusiveRemoteConvertJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusiveRemoteConvertJobAction action frees a BatchJob of type REMOTE_CONVERT that was claimed using the getExclusiveConvertJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaFilesyncImportBatchService.prototype.freeExclusiveRemoteConvertJob = function(callback, id, lockKey, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("filesyncImportBatch", "freeExclusiveRemoteConvertJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDoneConvertCollectionJobs action allows to get a BatchJob of type CONVERT_COLLECTION that wait for remote closure 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaFilesyncImportBatchService.prototype.getExclusiveAlmostDoneConvertCollectionJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("filesyncImportBatch", "getExclusiveAlmostDoneConvertCollectionJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDoneConvertProfileJobs action allows to get a BatchJob of type CONVERT_PROFILE that wait for remote closure 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaFilesyncImportBatchService.prototype.getExclusiveAlmostDoneConvertProfileJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("filesyncImportBatch", "getExclusiveAlmostDoneConvertProfileJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusiveConvertCollectionJobAction action updates a BatchJob of type CONVERT_PROFILE that was claimed using the getExclusiveConvertJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @param	entryStatus	string		Optional parameter if the entry of the batch should change (optional, enum: KalturaEntryStatus, default: null).
 * @param	flavorsData	array		 (optional, default: null).
 * @return	KalturaBatchJob.
 */
KalturaFilesyncImportBatchService.prototype.updateExclusiveConvertCollectionJob = function(callback, id, lockKey, job, entryStatus, flavorsData){
	if(!entryStatus)
		entryStatus = null;
	if(!flavorsData)
		flavorsData = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.addParam(kparams, "entryStatus", entryStatus);
	if(flavorsData != null)
	for(var index in flavorsData)
	{
		var obj = flavorsData[index];
		this.client.addParam(kparams, "flavorsData:" + index, toParams(obj));
	}
	this.client.queueServiceActionCall("filesyncImportBatch", "updateExclusiveConvertCollectionJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusiveConvertProfileJobAction action updates a BatchJob of type CONVERT_PROFILE that was claimed using the getExclusiveConvertJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @param	entryStatus	string		Optional parameter if the entry of the batch should change  (optional, enum: KalturaEntryStatus, default: null).
 * @return	KalturaBatchJob.
 */
KalturaFilesyncImportBatchService.prototype.updateExclusiveConvertProfileJob = function(callback, id, lockKey, job, entryStatus){
	if(!entryStatus)
		entryStatus = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.addParam(kparams, "entryStatus", entryStatus);
	this.client.queueServiceActionCall("filesyncImportBatch", "updateExclusiveConvertProfileJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusiveConvertCollectionJobAction action frees a BatchJob of type CONVERT_COLLECTION that was claimed using the getExclusiveConvertJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaFilesyncImportBatchService.prototype.freeExclusiveConvertCollectionJob = function(callback, id, lockKey, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("filesyncImportBatch", "freeExclusiveConvertCollectionJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusiveConvertProfileJobAction action frees a BatchJob of type CONVERT_PROFILE that was claimed using the getExclusiveConvertJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaFilesyncImportBatchService.prototype.freeExclusiveConvertProfileJob = function(callback, id, lockKey, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("filesyncImportBatch", "freeExclusiveConvertProfileJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveConvertCollectionJob action allows to get a BatchJob of type CONVERT_COLLECTION 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaFilesyncImportBatchService.prototype.getExclusiveConvertCollectionJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("filesyncImportBatch", "getExclusiveConvertCollectionJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveConvertJob action allows to get a BatchJob of type CONVERT 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaFilesyncImportBatchService.prototype.getExclusiveConvertJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("filesyncImportBatch", "getExclusiveConvertJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDoneConvertJobsAction action allows to get a BatchJob of type CONVERT that wait for remote closure 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaFilesyncImportBatchService.prototype.getExclusiveAlmostDoneConvertJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("filesyncImportBatch", "getExclusiveAlmostDoneConvertJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusiveConvertJob action updates a BatchJob of type CONVERT that was claimed using the getExclusiveConvertJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @param	entryStatus	string		Optional parameter if the entry of the batch should change  (optional, enum: KalturaEntryStatus, default: null).
 * @return	KalturaBatchJob.
 */
KalturaFilesyncImportBatchService.prototype.updateExclusiveConvertJob = function(callback, id, lockKey, job, entryStatus){
	if(!entryStatus)
		entryStatus = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.addParam(kparams, "entryStatus", entryStatus);
	this.client.queueServiceActionCall("filesyncImportBatch", "updateExclusiveConvertJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusiveConvertJobSubType action updates the sub type for a BatchJob of type CONVERT that was claimed using the getExclusiveConvertJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	subType	int		 (optional).
 * @return	KalturaBatchJob.
 */
KalturaFilesyncImportBatchService.prototype.updateExclusiveConvertJobSubType = function(callback, id, lockKey, subType){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "subType", subType);
	this.client.queueServiceActionCall("filesyncImportBatch", "updateExclusiveConvertJobSubType", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusiveConvertJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveConvertJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaFilesyncImportBatchService.prototype.freeExclusiveConvertJob = function(callback, id, lockKey, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("filesyncImportBatch", "freeExclusiveConvertJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusivePostConvertJob action allows to get a BatchJob of type POSTCONVERT 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaFilesyncImportBatchService.prototype.getExclusivePostConvertJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("filesyncImportBatch", "getExclusivePostConvertJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusivePostConvertJob action updates a BatchJob of type POSTCONVERT that was claimed using the getExclusivePostConvertJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @param	entryStatus	string		Optional parameter if the entry of the batch should change  (optional, enum: KalturaEntryStatus, default: null).
 * @return	KalturaBatchJob.
 */
KalturaFilesyncImportBatchService.prototype.updateExclusivePostConvertJob = function(callback, id, lockKey, job, entryStatus){
	if(!entryStatus)
		entryStatus = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.addParam(kparams, "entryStatus", entryStatus);
	this.client.queueServiceActionCall("filesyncImportBatch", "updateExclusivePostConvertJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusivePostConvertJob action frees a BatchJob of type IMPORT that was claimed using the getExclusivePostConvertJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaFilesyncImportBatchService.prototype.freeExclusivePostConvertJob = function(callback, id, lockKey, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("filesyncImportBatch", "freeExclusivePostConvertJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusivePullJob action allows to get a BatchJob of type PULL 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaFilesyncImportBatchService.prototype.getExclusivePullJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("filesyncImportBatch", "getExclusivePullJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusivePullJob action updates a BatchJob of type PULL that was claimed using the getExclusivePullJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @return	KalturaBatchJob.
 */
KalturaFilesyncImportBatchService.prototype.updateExclusivePullJob = function(callback, id, lockKey, job){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.queueServiceActionCall("filesyncImportBatch", "updateExclusivePullJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusivePullJob action frees a BatchJob of type IMPORT that was claimed using the getExclusivePullJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaFilesyncImportBatchService.prototype.freeExclusivePullJob = function(callback, id, lockKey, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("filesyncImportBatch", "freeExclusivePullJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveExtractMediaJob action allows to get a BatchJob of type EXTRACT_MEDIA 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaFilesyncImportBatchService.prototype.getExclusiveExtractMediaJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("filesyncImportBatch", "getExclusiveExtractMediaJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusiveExtractMediaJob action updates a BatchJob of type EXTRACT_MEDIA that was claimed using the getExclusiveExtractMediaJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @param	entryStatus	string		Optional parameter if the entry of the batch should change  (optional, enum: KalturaEntryStatus, default: null).
 * @return	KalturaBatchJob.
 */
KalturaFilesyncImportBatchService.prototype.updateExclusiveExtractMediaJob = function(callback, id, lockKey, job, entryStatus){
	if(!entryStatus)
		entryStatus = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.addParam(kparams, "entryStatus", entryStatus);
	this.client.queueServiceActionCall("filesyncImportBatch", "updateExclusiveExtractMediaJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch addMediaInfoAction action saves a media info object
 *	.
 * @param	mediaInfo	KalturaMediaInfo		 (optional).
 * @return	KalturaMediaInfo.
 */
KalturaFilesyncImportBatchService.prototype.addMediaInfo = function(callback, mediaInfo){
	var kparams = new Object();
	this.client.addParam(kparams, "mediaInfo", toParams(mediaInfo));
	this.client.queueServiceActionCall("filesyncImportBatch", "addMediaInfo", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusiveExtractMediaJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveExtractMediaJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaFilesyncImportBatchService.prototype.freeExclusiveExtractMediaJob = function(callback, id, lockKey, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("filesyncImportBatch", "freeExclusiveExtractMediaJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveStorageExportJob action allows to get a BatchJob of type STORAGE_EXPORT 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaFilesyncImportBatchService.prototype.getExclusiveStorageExportJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("filesyncImportBatch", "getExclusiveStorageExportJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusiveStorageExportJob action updates a BatchJob of type STORAGE_EXPORT that was claimed using the getExclusiveStorageExportJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @param	entryStatus	string		Optional parameter if the entry of the batch should change  (optional, enum: KalturaEntryStatus, default: null).
 * @return	KalturaBatchJob.
 */
KalturaFilesyncImportBatchService.prototype.updateExclusiveStorageExportJob = function(callback, id, lockKey, job, entryStatus){
	if(!entryStatus)
		entryStatus = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.addParam(kparams, "entryStatus", entryStatus);
	this.client.queueServiceActionCall("filesyncImportBatch", "updateExclusiveStorageExportJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusiveStorageExportJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveStorageExportJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaFilesyncImportBatchService.prototype.freeExclusiveStorageExportJob = function(callback, id, lockKey, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("filesyncImportBatch", "freeExclusiveStorageExportJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveStorageDeleteJob action allows to get a BatchJob of type STORAGE_DELETE 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaFilesyncImportBatchService.prototype.getExclusiveStorageDeleteJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("filesyncImportBatch", "getExclusiveStorageDeleteJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusiveStorageDeleteJob action updates a BatchJob of type StorageDelete that was claimed using the getExclusiveStorageDeleteJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @param	entryStatus	string		Optional parameter if the entry of the batch should change  (optional, enum: KalturaEntryStatus, default: null).
 * @return	KalturaBatchJob.
 */
KalturaFilesyncImportBatchService.prototype.updateExclusiveStorageDeleteJob = function(callback, id, lockKey, job, entryStatus){
	if(!entryStatus)
		entryStatus = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.addParam(kparams, "entryStatus", entryStatus);
	this.client.queueServiceActionCall("filesyncImportBatch", "updateExclusiveStorageDeleteJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusiveStorageDeleteJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveStorageDeleteJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaFilesyncImportBatchService.prototype.freeExclusiveStorageDeleteJob = function(callback, id, lockKey, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("filesyncImportBatch", "freeExclusiveStorageDeleteJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveNotificationJob action allows to get a BatchJob of type NOTIFICATION 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	KalturaBatchGetExclusiveNotificationJobsResponse.
 */
KalturaFilesyncImportBatchService.prototype.getExclusiveNotificationJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("filesyncImportBatch", "getExclusiveNotificationJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusiveNotificationJob action updates a BatchJob of type NOTIFICATION that was claimed using the getExclusiveNotificationJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @param	entryStatus	string		Optional parameter if the entry of the batch should change  (optional, enum: KalturaEntryStatus, default: null).
 * @return	KalturaBatchJob.
 */
KalturaFilesyncImportBatchService.prototype.updateExclusiveNotificationJob = function(callback, id, lockKey, job, entryStatus){
	if(!entryStatus)
		entryStatus = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.addParam(kparams, "entryStatus", entryStatus);
	this.client.queueServiceActionCall("filesyncImportBatch", "updateExclusiveNotificationJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusiveNotificationJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveNotificationJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaFilesyncImportBatchService.prototype.freeExclusiveNotificationJob = function(callback, id, lockKey, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("filesyncImportBatch", "freeExclusiveNotificationJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveMailJob action allows to get a BatchJob of type MAIL 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaFilesyncImportBatchService.prototype.getExclusiveMailJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("filesyncImportBatch", "getExclusiveMailJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusiveMailJob action updates a BatchJob of type MAIL that was claimed using the getExclusiveMailJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @param	entryStatus	string		Optional parameter if the entry of the batch should change  (optional, enum: KalturaEntryStatus, default: null).
 * @return	KalturaBatchJob.
 */
KalturaFilesyncImportBatchService.prototype.updateExclusiveMailJob = function(callback, id, lockKey, job, entryStatus){
	if(!entryStatus)
		entryStatus = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.addParam(kparams, "entryStatus", entryStatus);
	this.client.queueServiceActionCall("filesyncImportBatch", "updateExclusiveMailJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusiveMailJob action frees a BatchJob of type MAIL that was claimed using the getExclusiveMailJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaFilesyncImportBatchService.prototype.freeExclusiveMailJob = function(callback, id, lockKey, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("filesyncImportBatch", "freeExclusiveMailJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveBulkDownloadJobs action allows to get a BatchJob of type BULKDOWNLOAD
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaFilesyncImportBatchService.prototype.getExclusiveBulkDownloadJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("filesyncImportBatch", "getExclusiveBulkDownloadJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDoneBulkDownloadJobs action allows to get a BatchJob of type BULKDOWNLOAD that wait for remote closure 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaFilesyncImportBatchService.prototype.getExclusiveAlmostDoneBulkDownloadJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("filesyncImportBatch", "getExclusiveAlmostDoneBulkDownloadJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusiveBulkDownloadJob action updates a BatchJob of type BULKDOWNLOAD that was claimed using the getExclusiveBulkDownloadJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @return	KalturaBatchJob.
 */
KalturaFilesyncImportBatchService.prototype.updateExclusiveBulkDownloadJob = function(callback, id, lockKey, job){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.queueServiceActionCall("filesyncImportBatch", "updateExclusiveBulkDownloadJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusiveBulkDownloadJob action frees a BatchJob of type BULKDOWNLOAD that was claimed using the getExclusiveBulkDownloadJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaFilesyncImportBatchService.prototype.freeExclusiveBulkDownloadJob = function(callback, id, lockKey, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("filesyncImportBatch", "freeExclusiveBulkDownloadJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveProvisionProvideJobs action allows to get a BatchJob of type ProvisionProvide
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaFilesyncImportBatchService.prototype.getExclusiveProvisionProvideJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("filesyncImportBatch", "getExclusiveProvisionProvideJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDoneProvisionProvideJobs action allows to get a BatchJob of type ProvisionProvide that wait for remote closure 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaFilesyncImportBatchService.prototype.getExclusiveAlmostDoneProvisionProvideJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("filesyncImportBatch", "getExclusiveAlmostDoneProvisionProvideJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusiveProvisionProvideJob action updates a BatchJob of type ProvisionProvide that was claimed using the getExclusiveProvisionProvideJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @return	KalturaBatchJob.
 */
KalturaFilesyncImportBatchService.prototype.updateExclusiveProvisionProvideJob = function(callback, id, lockKey, job){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.queueServiceActionCall("filesyncImportBatch", "updateExclusiveProvisionProvideJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusiveProvisionProvideJob action frees a BatchJob of type ProvisionProvide that was claimed using the getExclusiveProvisionProvideJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaFilesyncImportBatchService.prototype.freeExclusiveProvisionProvideJob = function(callback, id, lockKey, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("filesyncImportBatch", "freeExclusiveProvisionProvideJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveProvisionDeleteJobs action allows to get a BatchJob of type ProvisionDelete
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaFilesyncImportBatchService.prototype.getExclusiveProvisionDeleteJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("filesyncImportBatch", "getExclusiveProvisionDeleteJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDoneProvisionDeleteJobs action allows to get a BatchJob of type ProvisionDelete that wait for remote closure 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaFilesyncImportBatchService.prototype.getExclusiveAlmostDoneProvisionDeleteJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("filesyncImportBatch", "getExclusiveAlmostDoneProvisionDeleteJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusiveProvisionDeleteJob action updates a BatchJob of type ProvisionDelete that was claimed using the getExclusiveProvisionDeleteJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @return	KalturaBatchJob.
 */
KalturaFilesyncImportBatchService.prototype.updateExclusiveProvisionDeleteJob = function(callback, id, lockKey, job){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.queueServiceActionCall("filesyncImportBatch", "updateExclusiveProvisionDeleteJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusiveProvisionDeleteJob action frees a BatchJob of type ProvisionDelete that was claimed using the getExclusiveProvisionDeleteJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaFilesyncImportBatchService.prototype.freeExclusiveProvisionDeleteJob = function(callback, id, lockKey, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("filesyncImportBatch", "freeExclusiveProvisionDeleteJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch resetJobExecutionAttempts action resets the execution attempts of the job 
 *	.
 * @param	id	int		The id of the job (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism (optional).
 * @param	jobType	string		The type of the job   (optional, enum: KalturaBatchJobType).
 * @return	.
 */
KalturaFilesyncImportBatchService.prototype.resetJobExecutionAttempts = function(callback, id, lockKey, jobType){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "jobType", jobType);
	this.client.queueServiceActionCall("filesyncImportBatch", "resetJobExecutionAttempts", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusiveJobAction action allows to get a generic BatchJob 
 *	.
 * @param	id	int		The id of the job (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism (optional).
 * @param	jobType	string		The type of the job   (optional, enum: KalturaBatchJobType).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaFilesyncImportBatchService.prototype.freeExclusiveJob = function(callback, id, lockKey, jobType, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "jobType", jobType);
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("filesyncImportBatch", "freeExclusiveJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getQueueSize action get the queue size for job type 
 *	.
 * @param	workerQueueFilter	KalturaWorkerQueueFilter		The worker filter   (optional).
 * @return	int.
 */
KalturaFilesyncImportBatchService.prototype.getQueueSize = function(callback, workerQueueFilter){
	var kparams = new Object();
	this.client.addParam(kparams, "workerQueueFilter", toParams(workerQueueFilter));
	this.client.queueServiceActionCall("filesyncImportBatch", "getQueueSize", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveJobsAction action allows to get a BatchJob 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @param	jobType	string		The type of the job - could be a custom extended type (optional, enum: KalturaBatchJobType, default: null).
 * @return	array.
 */
KalturaFilesyncImportBatchService.prototype.getExclusiveJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter, jobType){
	if(!filter)
		filter = null;
	if(!jobType)
		jobType = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.addParam(kparams, "jobType", jobType);
	this.client.queueServiceActionCall("filesyncImportBatch", "getExclusiveJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDone action allows to get a BatchJob that wait for remote closure 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @param	jobType	string		The type of the job - could be a custom extended type (optional, enum: KalturaBatchJobType, default: null).
 * @return	array.
 */
KalturaFilesyncImportBatchService.prototype.getExclusiveAlmostDone = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter, jobType){
	if(!filter)
		filter = null;
	if(!jobType)
		jobType = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.addParam(kparams, "jobType", jobType);
	this.client.queueServiceActionCall("filesyncImportBatch", "getExclusiveAlmostDone", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusiveJobAction action updates a BatchJob of extended type that was claimed using the getExclusiveJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @param	entryStatus	string		Optional parameter if the entry of the batch should change  (optional, enum: KalturaEntryStatus, default: null).
 * @return	KalturaBatchJob.
 */
KalturaFilesyncImportBatchService.prototype.updateExclusiveJob = function(callback, id, lockKey, job, entryStatus){
	if(!entryStatus)
		entryStatus = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.addParam(kparams, "entryStatus", entryStatus);
	this.client.queueServiceActionCall("filesyncImportBatch", "updateExclusiveJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch cleanExclusiveJobs action mark as fatal error all expired jobs
 *	.
 * @return	int.
 */
KalturaFilesyncImportBatchService.prototype.cleanExclusiveJobs = function(callback){
	var kparams = new Object();
	this.client.queueServiceActionCall("filesyncImportBatch", "cleanExclusiveJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Add the data to the flavor asset conversion log, creates it if doesn't exists
 *	.
 * @param	flavorAssetId	string		 (optional).
 * @param	data	string		 (optional).
 * @return	.
 */
KalturaFilesyncImportBatchService.prototype.logConversion = function(callback, flavorAssetId, data){
	var kparams = new Object();
	this.client.addParam(kparams, "flavorAssetId", flavorAssetId);
	this.client.addParam(kparams, "data", data);
	this.client.queueServiceActionCall("filesyncImportBatch", "logConversion", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch checkFileExists action check if the file exists
 *	.
 * @param	localPath	string		 (optional).
 * @param	size	int		 (optional).
 * @return	KalturaFileExistsResponse.
 */
KalturaFilesyncImportBatchService.prototype.checkFileExists = function(callback, localPath, size){
	var kparams = new Object();
	this.client.addParam(kparams, "localPath", localPath);
	this.client.addParam(kparams, "size", size);
	this.client.queueServiceActionCall("filesyncImportBatch", "checkFileExists", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: documents.
 * The available service actions:
 * @action	addFromUploadedFile	Add new document entry after the specific document file was uploaded and the upload token id exists
 *	.
 * @action	addFromEntry	Copy entry into new entry
 *	.
 * @action	addFromFlavorAsset	Copy flavor asset into new entry
 *	.
 * @action	convert	Convert entry
 *	.
 * @action	get	Get document entry by ID.
 *	.
 * @action	update	Update document entry. Only the properties that were set will be updated.
 *	.
 * @action	delete	Delete a document entry.
 *	.
 * @action	list	List document entries by filter with paging support.
 *	.
 * @action	upload	Upload a document file to Kaltura, then the file can be used to create a document entry. 
 *	.
 * @action	convertPptToSwf	This will queue a batch job for converting the document file to swf
 *	Returns the URL where the new swf will be available 
 *	.
*/
function KalturaDocumentsService(client){
	this.init(client);
}
KalturaDocumentsService.inheritsFrom (KalturaServiceBase);
/**
 * Add new document entry after the specific document file was uploaded and the upload token id exists
 *	.
 * @param	documentEntry	KalturaDocumentEntry		Document entry metadata (optional).
 * @param	uploadTokenId	string		Upload token id (optional).
 * @return	KalturaDocumentEntry.
 */
KalturaDocumentsService.prototype.addFromUploadedFile = function(callback, documentEntry, uploadTokenId){
	var kparams = new Object();
	this.client.addParam(kparams, "documentEntry", toParams(documentEntry));
	this.client.addParam(kparams, "uploadTokenId", uploadTokenId);
	this.client.queueServiceActionCall("documents", "addFromUploadedFile", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Copy entry into new entry
 *	.
 * @param	sourceEntryId	string		Document entry id to copy from (optional).
 * @param	documentEntry	KalturaDocumentEntry		Document entry metadata (optional, default: null).
 * @param	sourceFlavorParamsId	int		The flavor to be used as the new entry source, source flavor will be used if not specified (optional).
 * @return	KalturaDocumentEntry.
 */
KalturaDocumentsService.prototype.addFromEntry = function(callback, sourceEntryId, documentEntry, sourceFlavorParamsId){
	if(!documentEntry)
		documentEntry = null;
	if(!sourceFlavorParamsId)
		sourceFlavorParamsId = "";
	var kparams = new Object();
	this.client.addParam(kparams, "sourceEntryId", sourceEntryId);
	if (documentEntry != null)
		this.client.addParam(kparams, "documentEntry", toParams(documentEntry));
	this.client.addParam(kparams, "sourceFlavorParamsId", sourceFlavorParamsId);
	this.client.queueServiceActionCall("documents", "addFromEntry", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Copy flavor asset into new entry
 *	.
 * @param	sourceFlavorAssetId	string		Flavor asset id to be used as the new entry source (optional).
 * @param	documentEntry	KalturaDocumentEntry		Document entry metadata (optional, default: null).
 * @return	KalturaDocumentEntry.
 */
KalturaDocumentsService.prototype.addFromFlavorAsset = function(callback, sourceFlavorAssetId, documentEntry){
	if(!documentEntry)
		documentEntry = null;
	var kparams = new Object();
	this.client.addParam(kparams, "sourceFlavorAssetId", sourceFlavorAssetId);
	if (documentEntry != null)
		this.client.addParam(kparams, "documentEntry", toParams(documentEntry));
	this.client.queueServiceActionCall("documents", "addFromFlavorAsset", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Convert entry
 *	.
 * @param	entryId	string		Document entry id (optional).
 * @param	conversionProfileId	int		 (optional).
 * @param	dynamicConversionAttributes	array		 (optional, default: null).
 * @return	int.
 */
KalturaDocumentsService.prototype.convert = function(callback, entryId, conversionProfileId, dynamicConversionAttributes){
	if(!conversionProfileId)
		conversionProfileId = "";
	if(!dynamicConversionAttributes)
		dynamicConversionAttributes = null;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "conversionProfileId", conversionProfileId);
	if(dynamicConversionAttributes != null)
	for(var index in dynamicConversionAttributes)
	{
		var obj = dynamicConversionAttributes[index];
		this.client.addParam(kparams, "dynamicConversionAttributes:" + index, toParams(obj));
	}
	this.client.queueServiceActionCall("documents", "convert", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get document entry by ID.
 *	.
 * @param	entryId	string		Document entry id (optional).
 * @param	version	int		Desired version of the data (optional, default: -1).
 * @return	KalturaDocumentEntry.
 */
KalturaDocumentsService.prototype.get = function(callback, entryId, version){
	if(!version)
		version = -1;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "version", version);
	this.client.queueServiceActionCall("documents", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update document entry. Only the properties that were set will be updated.
 *	.
 * @param	entryId	string		Document entry id to update (optional).
 * @param	documentEntry	KalturaDocumentEntry		Document entry metadata to update (optional).
 * @return	KalturaDocumentEntry.
 */
KalturaDocumentsService.prototype.update = function(callback, entryId, documentEntry){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "documentEntry", toParams(documentEntry));
	this.client.queueServiceActionCall("documents", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete a document entry.
 *	.
 * @param	entryId	string		Document entry id to delete (optional).
 * @return	.
 */
KalturaDocumentsService.prototype.deleteAction = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("documents", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List document entries by filter with paging support.
 *	.
 * @param	filter	KalturaDocumentEntryFilter		Document entry filter (optional, default: null).
 * @param	pager	KalturaFilterPager		Pager (optional, default: null).
 * @return	KalturaDocumentListResponse.
 */
KalturaDocumentsService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("documents", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Upload a document file to Kaltura, then the file can be used to create a document entry. 
 *	.
 * @param	fileData	file		The file data (optional).
 * @return	string.
 */
KalturaDocumentsService.prototype.upload = function(callback, fileData){
	var kparams = new Object();
	kfiles = new Object();
	this.client.addParam(kfiles, "fileData", fileData);
	this.client.queueServiceActionCall("documents", "upload", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * This will queue a batch job for converting the document file to swf
 *	Returns the URL where the new swf will be available 
 *	.
 * @param	entryId	string		 (optional).
 * @return	string.
 */
KalturaDocumentsService.prototype.convertPptToSwf = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("documents", "convertPptToSwf", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: auditTrail.
 * The available service actions:
 * @action	list	List audit trail objects by filter and pager
 *	.
 * @action	add	Allows you to add an audit trail object and audit trail content associated with Kaltura object
 *	.
 * @action	get	Retrieve an audit trail object by id
 *	.
*/
function KalturaAuditTrailService(client){
	this.init(client);
}
KalturaAuditTrailService.inheritsFrom (KalturaServiceBase);
/**
 * List audit trail objects by filter and pager
 *	.
 * @param	filter	KalturaAuditTrailFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaAuditTrailListResponse.
 */
KalturaAuditTrailService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("auditTrail", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Allows you to add an audit trail object and audit trail content associated with Kaltura object
 *	.
 * @param	auditTrail	KalturaAuditTrail		 (optional).
 * @return	KalturaAuditTrail.
 */
KalturaAuditTrailService.prototype.add = function(callback, auditTrail){
	var kparams = new Object();
	this.client.addParam(kparams, "auditTrail", toParams(auditTrail));
	this.client.queueServiceActionCall("auditTrail", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve an audit trail object by id
 *	.
 * @param	id	int		 (optional).
 * @return	KalturaAuditTrail.
 */
KalturaAuditTrailService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("auditTrail", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: annotation.
 * The available service actions:
 * @action	list	List annotation objects by filter and pager
 *	.
 * @action	add	Allows you to add an annotation object and Annotation content associated with Kaltura object
 *	.
 * @action	get	Retrieve an Annotation object by id
 *	.
 * @action	delete	delete annotation by id, and delete all children annotations
 *	.
 * @action	update	Update annotation by id 
 *	.
*/
function KalturaAnnotationService(client){
	this.init(client);
}
KalturaAnnotationService.inheritsFrom (KalturaServiceBase);
/**
 * List annotation objects by filter and pager
 *	.
 * @param	filter	KalturaAnnotationFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaAnnotationListResponse.
 */
KalturaAnnotationService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("annotation", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Allows you to add an annotation object and Annotation content associated with Kaltura object
 *	.
 * @param	annotation	KalturaAnnotation		 (optional).
 * @return	KalturaAnnotation.
 */
KalturaAnnotationService.prototype.add = function(callback, annotation){
	var kparams = new Object();
	this.client.addParam(kparams, "annotation", toParams(annotation));
	this.client.queueServiceActionCall("annotation", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve an Annotation object by id
 *	.
 * @param	id	string		 (optional).
 * @return	KalturaAnnotation.
 */
KalturaAnnotationService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("annotation", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * delete annotation by id, and delete all children annotations
 *	.
 * @param	id	string		 (optional).
 * @return	.
 */
KalturaAnnotationService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("annotation", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update annotation by id 
 *	.
 * @param	id	string		 (optional).
 * @param	annotation	KalturaAnnotation		 (optional).
 * @return	KalturaAnnotation.
 */
KalturaAnnotationService.prototype.update = function(callback, id, annotation){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "annotation", toParams(annotation));
	this.client.queueServiceActionCall("annotation", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: virusScanProfile.
 * The available service actions:
 * @action	list	List virus scan profile objects by filter and pager
 *	.
 * @action	add	Allows you to add an virus scan profile object and virus scan profile content associated with Kaltura object
 *	.
 * @action	get	Retrieve an virus scan profile object by id
 *	.
 * @action	update	Update exisitng virus scan profile, it is possible to update the virus scan profile id too
 *	.
 * @action	delete	Mark the virus scan profile as deleted
 *	.
 * @action	scan	Scan flavor asset according to virus scan profile
 *	.
*/
function KalturaVirusScanProfileService(client){
	this.init(client);
}
KalturaVirusScanProfileService.inheritsFrom (KalturaServiceBase);
/**
 * List virus scan profile objects by filter and pager
 *	.
 * @param	filter	KalturaVirusScanProfileFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaVirusScanProfileListResponse.
 */
KalturaVirusScanProfileService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("virusScanProfile", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Allows you to add an virus scan profile object and virus scan profile content associated with Kaltura object
 *	.
 * @param	virusScanProfile	KalturaVirusScanProfile		 (optional).
 * @return	KalturaVirusScanProfile.
 */
KalturaVirusScanProfileService.prototype.add = function(callback, virusScanProfile){
	var kparams = new Object();
	this.client.addParam(kparams, "virusScanProfile", toParams(virusScanProfile));
	this.client.queueServiceActionCall("virusScanProfile", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve an virus scan profile object by id
 *	.
 * @param	virusScanProfileId	int		 (optional).
 * @return	KalturaVirusScanProfile.
 */
KalturaVirusScanProfileService.prototype.get = function(callback, virusScanProfileId){
	var kparams = new Object();
	this.client.addParam(kparams, "virusScanProfileId", virusScanProfileId);
	this.client.queueServiceActionCall("virusScanProfile", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update exisitng virus scan profile, it is possible to update the virus scan profile id too
 *	.
 * @param	virusScanProfileId	int		 (optional).
 * @param	virusScanProfile	KalturaVirusScanProfile		Id (optional).
 * @return	KalturaVirusScanProfile.
 */
KalturaVirusScanProfileService.prototype.update = function(callback, virusScanProfileId, virusScanProfile){
	var kparams = new Object();
	this.client.addParam(kparams, "virusScanProfileId", virusScanProfileId);
	this.client.addParam(kparams, "virusScanProfile", toParams(virusScanProfile));
	this.client.queueServiceActionCall("virusScanProfile", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Mark the virus scan profile as deleted
 *	.
 * @param	virusScanProfileId	int		 (optional).
 * @return	KalturaVirusScanProfile.
 */
KalturaVirusScanProfileService.prototype.deleteAction = function(callback, virusScanProfileId){
	var kparams = new Object();
	this.client.addParam(kparams, "virusScanProfileId", virusScanProfileId);
	this.client.queueServiceActionCall("virusScanProfile", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Scan flavor asset according to virus scan profile
 *	.
 * @param	flavorAssetId	string		 (optional).
 * @param	virusScanProfileId	int		 (optional).
 * @return	int.
 */
KalturaVirusScanProfileService.prototype.scan = function(callback, flavorAssetId, virusScanProfileId){
	if(!virusScanProfileId)
		virusScanProfileId = "";
	var kparams = new Object();
	this.client.addParam(kparams, "flavorAssetId", flavorAssetId);
	this.client.addParam(kparams, "virusScanProfileId", virusScanProfileId);
	this.client.queueServiceActionCall("virusScanProfile", "scan", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: virusScanBatch.
 * The available service actions:
 * @action	getExclusiveVirusScanJobs	batch getExclusiveVirusScanJob action allows to get a BatchJob of type VIRUS_SCAN 
 *	.
 * @action	updateExclusiveVirusScanJob	batch updateExclusiveVirusScanJob action updates a BatchJob of type VIRUS_SCAN that was claimed using the getExclusiveVirusScanJobs
 *	.
 * @action	freeExclusiveVirusScanJob	batch freeExclusiveVirusScanJob action frees a BatchJob of type VirusScan that was claimed using the getExclusiveVirusScanJobs
 *	.
 * @action	getExclusiveImportJobs	batch getExclusiveImportJob action allows to get a BatchJob of type IMPORT 
 *	.
 * @action	updateExclusiveImportJob	batch updateExclusiveImportJob action updates a BatchJob of type IMPORT that was claimed using the getExclusiveImportJobs
 *	.
 * @action	freeExclusiveImportJob	batch freeExclusiveImportJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveImportJobs
 *	.
 * @action	getExclusiveBulkUploadJobs	batch getExclusiveBulkUploadJob action allows to get a BatchJob of type BULKUPLOAD 
 *	.
 * @action	getExclusiveAlmostDoneBulkUploadJobs	batch getExclusiveAlmostDoneBulkUploadJobs action allows to get a BatchJob of type BULKUPLOAD that wait for remote closure 
 *	.
 * @action	updateExclusiveBulkUploadJob	batch updateExclusiveBulkUploadJob action updates a BatchJob of type BULKUPLOAD that was claimed using the getExclusiveBulkUploadJobs
 *	.
 * @action	freeExclusiveBulkUploadJob	batch freeExclusiveBulkUploadJob action frees a BatchJob of type BULKUPLOAD that was claimed using the getExclusiveBulkUploadJobs
 *	.
 * @action	addBulkUploadResult	batch addBulkUploadResultAction action adds KalturaBulkUploadResult to the DB
 *	.
 * @action	getBulkUploadLastResult	batch getBulkUploadLastResultAction action returns the last result of the bulk upload
 *	.
 * @action	updateBulkUploadResults	batch updateBulkUploadResults action adds KalturaBulkUploadResult to the DB
 *	.
 * @action	getExclusiveAlmostDoneRemoteConvertJobs	batch getExclusiveAlmostDoneRemoteConvertJobsAction action allows to get a BatchJob of type REMOTE_CONVERT that wait for remote closure 
 *	.
 * @action	updateExclusiveRemoteConvertJob	batch updateExclusiveRemoteConvertJobAction action updates a BatchJob of type REMOTE_CONVERT that was claimed using the getExclusiveConvertJobs
 *	.
 * @action	freeExclusiveRemoteConvertJob	batch freeExclusiveRemoteConvertJobAction action frees a BatchJob of type REMOTE_CONVERT that was claimed using the getExclusiveConvertJobs
 *	.
 * @action	getExclusiveAlmostDoneConvertCollectionJobs	batch getExclusiveAlmostDoneConvertCollectionJobs action allows to get a BatchJob of type CONVERT_COLLECTION that wait for remote closure 
 *	.
 * @action	getExclusiveAlmostDoneConvertProfileJobs	batch getExclusiveAlmostDoneConvertProfileJobs action allows to get a BatchJob of type CONVERT_PROFILE that wait for remote closure 
 *	.
 * @action	updateExclusiveConvertCollectionJob	batch updateExclusiveConvertCollectionJobAction action updates a BatchJob of type CONVERT_PROFILE that was claimed using the getExclusiveConvertJobs
 *	.
 * @action	updateExclusiveConvertProfileJob	batch updateExclusiveConvertProfileJobAction action updates a BatchJob of type CONVERT_PROFILE that was claimed using the getExclusiveConvertJobs
 *	.
 * @action	freeExclusiveConvertCollectionJob	batch freeExclusiveConvertCollectionJobAction action frees a BatchJob of type CONVERT_COLLECTION that was claimed using the getExclusiveConvertJobs
 *	.
 * @action	freeExclusiveConvertProfileJob	batch freeExclusiveConvertProfileJobAction action frees a BatchJob of type CONVERT_PROFILE that was claimed using the getExclusiveConvertJobs
 *	.
 * @action	getExclusiveConvertCollectionJobs	batch getExclusiveConvertCollectionJob action allows to get a BatchJob of type CONVERT_COLLECTION 
 *	.
 * @action	getExclusiveConvertJobs	batch getExclusiveConvertJob action allows to get a BatchJob of type CONVERT 
 *	.
 * @action	getExclusiveAlmostDoneConvertJobs	batch getExclusiveAlmostDoneConvertJobsAction action allows to get a BatchJob of type CONVERT that wait for remote closure 
 *	.
 * @action	updateExclusiveConvertJob	batch updateExclusiveConvertJob action updates a BatchJob of type CONVERT that was claimed using the getExclusiveConvertJobs
 *	.
 * @action	updateExclusiveConvertJobSubType	batch updateExclusiveConvertJobSubType action updates the sub type for a BatchJob of type CONVERT that was claimed using the getExclusiveConvertJobs
 *	.
 * @action	freeExclusiveConvertJob	batch freeExclusiveConvertJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveConvertJobs
 *	.
 * @action	getExclusivePostConvertJobs	batch getExclusivePostConvertJob action allows to get a BatchJob of type POSTCONVERT 
 *	.
 * @action	updateExclusivePostConvertJob	batch updateExclusivePostConvertJob action updates a BatchJob of type POSTCONVERT that was claimed using the getExclusivePostConvertJobs
 *	.
 * @action	freeExclusivePostConvertJob	batch freeExclusivePostConvertJob action frees a BatchJob of type IMPORT that was claimed using the getExclusivePostConvertJobs
 *	.
 * @action	getExclusivePullJobs	batch getExclusivePullJob action allows to get a BatchJob of type PULL 
 *	.
 * @action	updateExclusivePullJob	batch updateExclusivePullJob action updates a BatchJob of type PULL that was claimed using the getExclusivePullJobs
 *	.
 * @action	freeExclusivePullJob	batch freeExclusivePullJob action frees a BatchJob of type IMPORT that was claimed using the getExclusivePullJobs
 *	.
 * @action	getExclusiveExtractMediaJobs	batch getExclusiveExtractMediaJob action allows to get a BatchJob of type EXTRACT_MEDIA 
 *	.
 * @action	updateExclusiveExtractMediaJob	batch updateExclusiveExtractMediaJob action updates a BatchJob of type EXTRACT_MEDIA that was claimed using the getExclusiveExtractMediaJobs
 *	.
 * @action	addMediaInfo	batch addMediaInfoAction action saves a media info object
 *	.
 * @action	freeExclusiveExtractMediaJob	batch freeExclusiveExtractMediaJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveExtractMediaJobs
 *	.
 * @action	getExclusiveStorageExportJobs	batch getExclusiveStorageExportJob action allows to get a BatchJob of type STORAGE_EXPORT 
 *	.
 * @action	updateExclusiveStorageExportJob	batch updateExclusiveStorageExportJob action updates a BatchJob of type STORAGE_EXPORT that was claimed using the getExclusiveStorageExportJobs
 *	.
 * @action	freeExclusiveStorageExportJob	batch freeExclusiveStorageExportJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveStorageExportJobs
 *	.
 * @action	getExclusiveStorageDeleteJobs	batch getExclusiveStorageDeleteJob action allows to get a BatchJob of type STORAGE_DELETE 
 *	.
 * @action	updateExclusiveStorageDeleteJob	batch updateExclusiveStorageDeleteJob action updates a BatchJob of type StorageDelete that was claimed using the getExclusiveStorageDeleteJobs
 *	.
 * @action	freeExclusiveStorageDeleteJob	batch freeExclusiveStorageDeleteJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveStorageDeleteJobs
 *	.
 * @action	getExclusiveNotificationJobs	batch getExclusiveNotificationJob action allows to get a BatchJob of type NOTIFICATION 
 *	.
 * @action	updateExclusiveNotificationJob	batch updateExclusiveNotificationJob action updates a BatchJob of type NOTIFICATION that was claimed using the getExclusiveNotificationJobs
 *	.
 * @action	freeExclusiveNotificationJob	batch freeExclusiveNotificationJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveNotificationJobs
 *	.
 * @action	getExclusiveMailJobs	batch getExclusiveMailJob action allows to get a BatchJob of type MAIL 
 *	.
 * @action	updateExclusiveMailJob	batch updateExclusiveMailJob action updates a BatchJob of type MAIL that was claimed using the getExclusiveMailJobs
 *	.
 * @action	freeExclusiveMailJob	batch freeExclusiveMailJob action frees a BatchJob of type MAIL that was claimed using the getExclusiveMailJobs
 *	.
 * @action	getExclusiveBulkDownloadJobs	batch getExclusiveBulkDownloadJobs action allows to get a BatchJob of type BULKDOWNLOAD
 *	.
 * @action	getExclusiveAlmostDoneBulkDownloadJobs	batch getExclusiveAlmostDoneBulkDownloadJobs action allows to get a BatchJob of type BULKDOWNLOAD that wait for remote closure 
 *	.
 * @action	updateExclusiveBulkDownloadJob	batch updateExclusiveBulkDownloadJob action updates a BatchJob of type BULKDOWNLOAD that was claimed using the getExclusiveBulkDownloadJobs
 *	.
 * @action	freeExclusiveBulkDownloadJob	batch freeExclusiveBulkDownloadJob action frees a BatchJob of type BULKDOWNLOAD that was claimed using the getExclusiveBulkDownloadJobs
 *	.
 * @action	getExclusiveProvisionProvideJobs	batch getExclusiveProvisionProvideJobs action allows to get a BatchJob of type ProvisionProvide
 *	.
 * @action	getExclusiveAlmostDoneProvisionProvideJobs	batch getExclusiveAlmostDoneProvisionProvideJobs action allows to get a BatchJob of type ProvisionProvide that wait for remote closure 
 *	.
 * @action	updateExclusiveProvisionProvideJob	batch updateExclusiveProvisionProvideJob action updates a BatchJob of type ProvisionProvide that was claimed using the getExclusiveProvisionProvideJobs
 *	.
 * @action	freeExclusiveProvisionProvideJob	batch freeExclusiveProvisionProvideJob action frees a BatchJob of type ProvisionProvide that was claimed using the getExclusiveProvisionProvideJobs
 *	.
 * @action	getExclusiveProvisionDeleteJobs	batch getExclusiveProvisionDeleteJobs action allows to get a BatchJob of type ProvisionDelete
 *	.
 * @action	getExclusiveAlmostDoneProvisionDeleteJobs	batch getExclusiveAlmostDoneProvisionDeleteJobs action allows to get a BatchJob of type ProvisionDelete that wait for remote closure 
 *	.
 * @action	updateExclusiveProvisionDeleteJob	batch updateExclusiveProvisionDeleteJob action updates a BatchJob of type ProvisionDelete that was claimed using the getExclusiveProvisionDeleteJobs
 *	.
 * @action	freeExclusiveProvisionDeleteJob	batch freeExclusiveProvisionDeleteJob action frees a BatchJob of type ProvisionDelete that was claimed using the getExclusiveProvisionDeleteJobs
 *	.
 * @action	resetJobExecutionAttempts	batch resetJobExecutionAttempts action resets the execution attempts of the job 
 *	.
 * @action	freeExclusiveJob	batch freeExclusiveJobAction action allows to get a generic BatchJob 
 *	.
 * @action	getQueueSize	batch getQueueSize action get the queue size for job type 
 *	.
 * @action	getExclusiveJobs	batch getExclusiveJobsAction action allows to get a BatchJob 
 *	.
 * @action	getExclusiveAlmostDone	batch getExclusiveAlmostDone action allows to get a BatchJob that wait for remote closure 
 *	.
 * @action	updateExclusiveJob	batch updateExclusiveJobAction action updates a BatchJob of extended type that was claimed using the getExclusiveJobs
 *	.
 * @action	cleanExclusiveJobs	batch cleanExclusiveJobs action mark as fatal error all expired jobs
 *	.
 * @action	logConversion	Add the data to the flavor asset conversion log, creates it if doesn't exists
 *	.
*/
function KalturaVirusScanBatchService(client){
	this.init(client);
}
KalturaVirusScanBatchService.inheritsFrom (KalturaServiceBase);
/**
 * batch getExclusiveVirusScanJob action allows to get a BatchJob of type VIRUS_SCAN 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaVirusScanBatchService.prototype.getExclusiveVirusScanJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("virusScanBatch", "getExclusiveVirusScanJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusiveVirusScanJob action updates a BatchJob of type VIRUS_SCAN that was claimed using the getExclusiveVirusScanJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @return	KalturaBatchJob.
 */
KalturaVirusScanBatchService.prototype.updateExclusiveVirusScanJob = function(callback, id, lockKey, job){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.queueServiceActionCall("virusScanBatch", "updateExclusiveVirusScanJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusiveVirusScanJob action frees a BatchJob of type VirusScan that was claimed using the getExclusiveVirusScanJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism (optional).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaVirusScanBatchService.prototype.freeExclusiveVirusScanJob = function(callback, id, lockKey, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("virusScanBatch", "freeExclusiveVirusScanJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveImportJob action allows to get a BatchJob of type IMPORT 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaVirusScanBatchService.prototype.getExclusiveImportJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("virusScanBatch", "getExclusiveImportJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusiveImportJob action updates a BatchJob of type IMPORT that was claimed using the getExclusiveImportJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @param	entryStatus	string		Optional parameter if the entry of the batch should change  (optional, enum: KalturaEntryStatus, default: null).
 * @return	KalturaBatchJob.
 */
KalturaVirusScanBatchService.prototype.updateExclusiveImportJob = function(callback, id, lockKey, job, entryStatus){
	if(!entryStatus)
		entryStatus = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.addParam(kparams, "entryStatus", entryStatus);
	this.client.queueServiceActionCall("virusScanBatch", "updateExclusiveImportJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusiveImportJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveImportJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism (optional).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaVirusScanBatchService.prototype.freeExclusiveImportJob = function(callback, id, lockKey, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("virusScanBatch", "freeExclusiveImportJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveBulkUploadJob action allows to get a BatchJob of type BULKUPLOAD 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaVirusScanBatchService.prototype.getExclusiveBulkUploadJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("virusScanBatch", "getExclusiveBulkUploadJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDoneBulkUploadJobs action allows to get a BatchJob of type BULKUPLOAD that wait for remote closure 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaVirusScanBatchService.prototype.getExclusiveAlmostDoneBulkUploadJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("virusScanBatch", "getExclusiveAlmostDoneBulkUploadJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusiveBulkUploadJob action updates a BatchJob of type BULKUPLOAD that was claimed using the getExclusiveBulkUploadJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @return	KalturaBatchJob.
 */
KalturaVirusScanBatchService.prototype.updateExclusiveBulkUploadJob = function(callback, id, lockKey, job){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.queueServiceActionCall("virusScanBatch", "updateExclusiveBulkUploadJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusiveBulkUploadJob action frees a BatchJob of type BULKUPLOAD that was claimed using the getExclusiveBulkUploadJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaVirusScanBatchService.prototype.freeExclusiveBulkUploadJob = function(callback, id, lockKey, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("virusScanBatch", "freeExclusiveBulkUploadJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch addBulkUploadResultAction action adds KalturaBulkUploadResult to the DB
 *	.
 * @param	bulkUploadResult	KalturaBulkUploadResult		The results to save to the DB (optional).
 * @param	pluginDataArray	array		 (optional, default: null).
 * @return	KalturaBulkUploadResult.
 */
KalturaVirusScanBatchService.prototype.addBulkUploadResult = function(callback, bulkUploadResult, pluginDataArray){
	if(!pluginDataArray)
		pluginDataArray = null;
	var kparams = new Object();
	this.client.addParam(kparams, "bulkUploadResult", toParams(bulkUploadResult));
	if(pluginDataArray != null)
	for(var index in pluginDataArray)
	{
		var obj = pluginDataArray[index];
		this.client.addParam(kparams, "pluginDataArray:" + index, toParams(obj));
	}
	this.client.queueServiceActionCall("virusScanBatch", "addBulkUploadResult", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getBulkUploadLastResultAction action returns the last result of the bulk upload
 *	.
 * @param	bulkUploadJobId	int		The id of the bulk upload job (optional).
 * @return	KalturaBulkUploadResult.
 */
KalturaVirusScanBatchService.prototype.getBulkUploadLastResult = function(callback, bulkUploadJobId){
	var kparams = new Object();
	this.client.addParam(kparams, "bulkUploadJobId", bulkUploadJobId);
	this.client.queueServiceActionCall("virusScanBatch", "getBulkUploadLastResult", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateBulkUploadResults action adds KalturaBulkUploadResult to the DB
 *	.
 * @param	bulkUploadJobId	int		The id of the bulk upload job (optional).
 * @return	int.
 */
KalturaVirusScanBatchService.prototype.updateBulkUploadResults = function(callback, bulkUploadJobId){
	var kparams = new Object();
	this.client.addParam(kparams, "bulkUploadJobId", bulkUploadJobId);
	this.client.queueServiceActionCall("virusScanBatch", "updateBulkUploadResults", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDoneRemoteConvertJobsAction action allows to get a BatchJob of type REMOTE_CONVERT that wait for remote closure 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaVirusScanBatchService.prototype.getExclusiveAlmostDoneRemoteConvertJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("virusScanBatch", "getExclusiveAlmostDoneRemoteConvertJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusiveRemoteConvertJobAction action updates a BatchJob of type REMOTE_CONVERT that was claimed using the getExclusiveConvertJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @param	entryStatus	string		Optional parameter if the entry of the batch should change  (optional, enum: KalturaEntryStatus, default: null).
 * @return	KalturaBatchJob.
 */
KalturaVirusScanBatchService.prototype.updateExclusiveRemoteConvertJob = function(callback, id, lockKey, job, entryStatus){
	if(!entryStatus)
		entryStatus = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.addParam(kparams, "entryStatus", entryStatus);
	this.client.queueServiceActionCall("virusScanBatch", "updateExclusiveRemoteConvertJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusiveRemoteConvertJobAction action frees a BatchJob of type REMOTE_CONVERT that was claimed using the getExclusiveConvertJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaVirusScanBatchService.prototype.freeExclusiveRemoteConvertJob = function(callback, id, lockKey, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("virusScanBatch", "freeExclusiveRemoteConvertJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDoneConvertCollectionJobs action allows to get a BatchJob of type CONVERT_COLLECTION that wait for remote closure 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaVirusScanBatchService.prototype.getExclusiveAlmostDoneConvertCollectionJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("virusScanBatch", "getExclusiveAlmostDoneConvertCollectionJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDoneConvertProfileJobs action allows to get a BatchJob of type CONVERT_PROFILE that wait for remote closure 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaVirusScanBatchService.prototype.getExclusiveAlmostDoneConvertProfileJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("virusScanBatch", "getExclusiveAlmostDoneConvertProfileJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusiveConvertCollectionJobAction action updates a BatchJob of type CONVERT_PROFILE that was claimed using the getExclusiveConvertJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @param	entryStatus	string		Optional parameter if the entry of the batch should change (optional, enum: KalturaEntryStatus, default: null).
 * @param	flavorsData	array		 (optional, default: null).
 * @return	KalturaBatchJob.
 */
KalturaVirusScanBatchService.prototype.updateExclusiveConvertCollectionJob = function(callback, id, lockKey, job, entryStatus, flavorsData){
	if(!entryStatus)
		entryStatus = null;
	if(!flavorsData)
		flavorsData = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.addParam(kparams, "entryStatus", entryStatus);
	if(flavorsData != null)
	for(var index in flavorsData)
	{
		var obj = flavorsData[index];
		this.client.addParam(kparams, "flavorsData:" + index, toParams(obj));
	}
	this.client.queueServiceActionCall("virusScanBatch", "updateExclusiveConvertCollectionJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusiveConvertProfileJobAction action updates a BatchJob of type CONVERT_PROFILE that was claimed using the getExclusiveConvertJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @param	entryStatus	string		Optional parameter if the entry of the batch should change  (optional, enum: KalturaEntryStatus, default: null).
 * @return	KalturaBatchJob.
 */
KalturaVirusScanBatchService.prototype.updateExclusiveConvertProfileJob = function(callback, id, lockKey, job, entryStatus){
	if(!entryStatus)
		entryStatus = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.addParam(kparams, "entryStatus", entryStatus);
	this.client.queueServiceActionCall("virusScanBatch", "updateExclusiveConvertProfileJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusiveConvertCollectionJobAction action frees a BatchJob of type CONVERT_COLLECTION that was claimed using the getExclusiveConvertJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaVirusScanBatchService.prototype.freeExclusiveConvertCollectionJob = function(callback, id, lockKey, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("virusScanBatch", "freeExclusiveConvertCollectionJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusiveConvertProfileJobAction action frees a BatchJob of type CONVERT_PROFILE that was claimed using the getExclusiveConvertJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaVirusScanBatchService.prototype.freeExclusiveConvertProfileJob = function(callback, id, lockKey, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("virusScanBatch", "freeExclusiveConvertProfileJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveConvertCollectionJob action allows to get a BatchJob of type CONVERT_COLLECTION 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaVirusScanBatchService.prototype.getExclusiveConvertCollectionJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("virusScanBatch", "getExclusiveConvertCollectionJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveConvertJob action allows to get a BatchJob of type CONVERT 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaVirusScanBatchService.prototype.getExclusiveConvertJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("virusScanBatch", "getExclusiveConvertJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDoneConvertJobsAction action allows to get a BatchJob of type CONVERT that wait for remote closure 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaVirusScanBatchService.prototype.getExclusiveAlmostDoneConvertJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("virusScanBatch", "getExclusiveAlmostDoneConvertJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusiveConvertJob action updates a BatchJob of type CONVERT that was claimed using the getExclusiveConvertJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @param	entryStatus	string		Optional parameter if the entry of the batch should change  (optional, enum: KalturaEntryStatus, default: null).
 * @return	KalturaBatchJob.
 */
KalturaVirusScanBatchService.prototype.updateExclusiveConvertJob = function(callback, id, lockKey, job, entryStatus){
	if(!entryStatus)
		entryStatus = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.addParam(kparams, "entryStatus", entryStatus);
	this.client.queueServiceActionCall("virusScanBatch", "updateExclusiveConvertJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusiveConvertJobSubType action updates the sub type for a BatchJob of type CONVERT that was claimed using the getExclusiveConvertJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	subType	int		 (optional).
 * @return	KalturaBatchJob.
 */
KalturaVirusScanBatchService.prototype.updateExclusiveConvertJobSubType = function(callback, id, lockKey, subType){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "subType", subType);
	this.client.queueServiceActionCall("virusScanBatch", "updateExclusiveConvertJobSubType", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusiveConvertJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveConvertJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaVirusScanBatchService.prototype.freeExclusiveConvertJob = function(callback, id, lockKey, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("virusScanBatch", "freeExclusiveConvertJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusivePostConvertJob action allows to get a BatchJob of type POSTCONVERT 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaVirusScanBatchService.prototype.getExclusivePostConvertJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("virusScanBatch", "getExclusivePostConvertJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusivePostConvertJob action updates a BatchJob of type POSTCONVERT that was claimed using the getExclusivePostConvertJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @param	entryStatus	string		Optional parameter if the entry of the batch should change  (optional, enum: KalturaEntryStatus, default: null).
 * @return	KalturaBatchJob.
 */
KalturaVirusScanBatchService.prototype.updateExclusivePostConvertJob = function(callback, id, lockKey, job, entryStatus){
	if(!entryStatus)
		entryStatus = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.addParam(kparams, "entryStatus", entryStatus);
	this.client.queueServiceActionCall("virusScanBatch", "updateExclusivePostConvertJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusivePostConvertJob action frees a BatchJob of type IMPORT that was claimed using the getExclusivePostConvertJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaVirusScanBatchService.prototype.freeExclusivePostConvertJob = function(callback, id, lockKey, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("virusScanBatch", "freeExclusivePostConvertJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusivePullJob action allows to get a BatchJob of type PULL 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaVirusScanBatchService.prototype.getExclusivePullJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("virusScanBatch", "getExclusivePullJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusivePullJob action updates a BatchJob of type PULL that was claimed using the getExclusivePullJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @return	KalturaBatchJob.
 */
KalturaVirusScanBatchService.prototype.updateExclusivePullJob = function(callback, id, lockKey, job){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.queueServiceActionCall("virusScanBatch", "updateExclusivePullJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusivePullJob action frees a BatchJob of type IMPORT that was claimed using the getExclusivePullJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaVirusScanBatchService.prototype.freeExclusivePullJob = function(callback, id, lockKey, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("virusScanBatch", "freeExclusivePullJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveExtractMediaJob action allows to get a BatchJob of type EXTRACT_MEDIA 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaVirusScanBatchService.prototype.getExclusiveExtractMediaJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("virusScanBatch", "getExclusiveExtractMediaJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusiveExtractMediaJob action updates a BatchJob of type EXTRACT_MEDIA that was claimed using the getExclusiveExtractMediaJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @param	entryStatus	string		Optional parameter if the entry of the batch should change  (optional, enum: KalturaEntryStatus, default: null).
 * @return	KalturaBatchJob.
 */
KalturaVirusScanBatchService.prototype.updateExclusiveExtractMediaJob = function(callback, id, lockKey, job, entryStatus){
	if(!entryStatus)
		entryStatus = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.addParam(kparams, "entryStatus", entryStatus);
	this.client.queueServiceActionCall("virusScanBatch", "updateExclusiveExtractMediaJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch addMediaInfoAction action saves a media info object
 *	.
 * @param	mediaInfo	KalturaMediaInfo		 (optional).
 * @return	KalturaMediaInfo.
 */
KalturaVirusScanBatchService.prototype.addMediaInfo = function(callback, mediaInfo){
	var kparams = new Object();
	this.client.addParam(kparams, "mediaInfo", toParams(mediaInfo));
	this.client.queueServiceActionCall("virusScanBatch", "addMediaInfo", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusiveExtractMediaJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveExtractMediaJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaVirusScanBatchService.prototype.freeExclusiveExtractMediaJob = function(callback, id, lockKey, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("virusScanBatch", "freeExclusiveExtractMediaJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveStorageExportJob action allows to get a BatchJob of type STORAGE_EXPORT 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaVirusScanBatchService.prototype.getExclusiveStorageExportJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("virusScanBatch", "getExclusiveStorageExportJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusiveStorageExportJob action updates a BatchJob of type STORAGE_EXPORT that was claimed using the getExclusiveStorageExportJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @param	entryStatus	string		Optional parameter if the entry of the batch should change  (optional, enum: KalturaEntryStatus, default: null).
 * @return	KalturaBatchJob.
 */
KalturaVirusScanBatchService.prototype.updateExclusiveStorageExportJob = function(callback, id, lockKey, job, entryStatus){
	if(!entryStatus)
		entryStatus = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.addParam(kparams, "entryStatus", entryStatus);
	this.client.queueServiceActionCall("virusScanBatch", "updateExclusiveStorageExportJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusiveStorageExportJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveStorageExportJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaVirusScanBatchService.prototype.freeExclusiveStorageExportJob = function(callback, id, lockKey, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("virusScanBatch", "freeExclusiveStorageExportJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveStorageDeleteJob action allows to get a BatchJob of type STORAGE_DELETE 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaVirusScanBatchService.prototype.getExclusiveStorageDeleteJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("virusScanBatch", "getExclusiveStorageDeleteJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusiveStorageDeleteJob action updates a BatchJob of type StorageDelete that was claimed using the getExclusiveStorageDeleteJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @param	entryStatus	string		Optional parameter if the entry of the batch should change  (optional, enum: KalturaEntryStatus, default: null).
 * @return	KalturaBatchJob.
 */
KalturaVirusScanBatchService.prototype.updateExclusiveStorageDeleteJob = function(callback, id, lockKey, job, entryStatus){
	if(!entryStatus)
		entryStatus = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.addParam(kparams, "entryStatus", entryStatus);
	this.client.queueServiceActionCall("virusScanBatch", "updateExclusiveStorageDeleteJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusiveStorageDeleteJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveStorageDeleteJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaVirusScanBatchService.prototype.freeExclusiveStorageDeleteJob = function(callback, id, lockKey, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("virusScanBatch", "freeExclusiveStorageDeleteJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveNotificationJob action allows to get a BatchJob of type NOTIFICATION 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	KalturaBatchGetExclusiveNotificationJobsResponse.
 */
KalturaVirusScanBatchService.prototype.getExclusiveNotificationJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("virusScanBatch", "getExclusiveNotificationJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusiveNotificationJob action updates a BatchJob of type NOTIFICATION that was claimed using the getExclusiveNotificationJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @param	entryStatus	string		Optional parameter if the entry of the batch should change  (optional, enum: KalturaEntryStatus, default: null).
 * @return	KalturaBatchJob.
 */
KalturaVirusScanBatchService.prototype.updateExclusiveNotificationJob = function(callback, id, lockKey, job, entryStatus){
	if(!entryStatus)
		entryStatus = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.addParam(kparams, "entryStatus", entryStatus);
	this.client.queueServiceActionCall("virusScanBatch", "updateExclusiveNotificationJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusiveNotificationJob action frees a BatchJob of type IMPORT that was claimed using the getExclusiveNotificationJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaVirusScanBatchService.prototype.freeExclusiveNotificationJob = function(callback, id, lockKey, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("virusScanBatch", "freeExclusiveNotificationJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveMailJob action allows to get a BatchJob of type MAIL 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaVirusScanBatchService.prototype.getExclusiveMailJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("virusScanBatch", "getExclusiveMailJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusiveMailJob action updates a BatchJob of type MAIL that was claimed using the getExclusiveMailJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @param	entryStatus	string		Optional parameter if the entry of the batch should change  (optional, enum: KalturaEntryStatus, default: null).
 * @return	KalturaBatchJob.
 */
KalturaVirusScanBatchService.prototype.updateExclusiveMailJob = function(callback, id, lockKey, job, entryStatus){
	if(!entryStatus)
		entryStatus = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.addParam(kparams, "entryStatus", entryStatus);
	this.client.queueServiceActionCall("virusScanBatch", "updateExclusiveMailJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusiveMailJob action frees a BatchJob of type MAIL that was claimed using the getExclusiveMailJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaVirusScanBatchService.prototype.freeExclusiveMailJob = function(callback, id, lockKey, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("virusScanBatch", "freeExclusiveMailJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveBulkDownloadJobs action allows to get a BatchJob of type BULKDOWNLOAD
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaVirusScanBatchService.prototype.getExclusiveBulkDownloadJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("virusScanBatch", "getExclusiveBulkDownloadJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDoneBulkDownloadJobs action allows to get a BatchJob of type BULKDOWNLOAD that wait for remote closure 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaVirusScanBatchService.prototype.getExclusiveAlmostDoneBulkDownloadJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("virusScanBatch", "getExclusiveAlmostDoneBulkDownloadJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusiveBulkDownloadJob action updates a BatchJob of type BULKDOWNLOAD that was claimed using the getExclusiveBulkDownloadJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @return	KalturaBatchJob.
 */
KalturaVirusScanBatchService.prototype.updateExclusiveBulkDownloadJob = function(callback, id, lockKey, job){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.queueServiceActionCall("virusScanBatch", "updateExclusiveBulkDownloadJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusiveBulkDownloadJob action frees a BatchJob of type BULKDOWNLOAD that was claimed using the getExclusiveBulkDownloadJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaVirusScanBatchService.prototype.freeExclusiveBulkDownloadJob = function(callback, id, lockKey, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("virusScanBatch", "freeExclusiveBulkDownloadJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveProvisionProvideJobs action allows to get a BatchJob of type ProvisionProvide
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaVirusScanBatchService.prototype.getExclusiveProvisionProvideJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("virusScanBatch", "getExclusiveProvisionProvideJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDoneProvisionProvideJobs action allows to get a BatchJob of type ProvisionProvide that wait for remote closure 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaVirusScanBatchService.prototype.getExclusiveAlmostDoneProvisionProvideJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("virusScanBatch", "getExclusiveAlmostDoneProvisionProvideJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusiveProvisionProvideJob action updates a BatchJob of type ProvisionProvide that was claimed using the getExclusiveProvisionProvideJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @return	KalturaBatchJob.
 */
KalturaVirusScanBatchService.prototype.updateExclusiveProvisionProvideJob = function(callback, id, lockKey, job){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.queueServiceActionCall("virusScanBatch", "updateExclusiveProvisionProvideJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusiveProvisionProvideJob action frees a BatchJob of type ProvisionProvide that was claimed using the getExclusiveProvisionProvideJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaVirusScanBatchService.prototype.freeExclusiveProvisionProvideJob = function(callback, id, lockKey, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("virusScanBatch", "freeExclusiveProvisionProvideJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveProvisionDeleteJobs action allows to get a BatchJob of type ProvisionDelete
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaVirusScanBatchService.prototype.getExclusiveProvisionDeleteJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("virusScanBatch", "getExclusiveProvisionDeleteJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDoneProvisionDeleteJobs action allows to get a BatchJob of type ProvisionDelete that wait for remote closure 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @return	array.
 */
KalturaVirusScanBatchService.prototype.getExclusiveAlmostDoneProvisionDeleteJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("virusScanBatch", "getExclusiveAlmostDoneProvisionDeleteJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusiveProvisionDeleteJob action updates a BatchJob of type ProvisionDelete that was claimed using the getExclusiveProvisionDeleteJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @return	KalturaBatchJob.
 */
KalturaVirusScanBatchService.prototype.updateExclusiveProvisionDeleteJob = function(callback, id, lockKey, job){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.queueServiceActionCall("virusScanBatch", "updateExclusiveProvisionDeleteJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusiveProvisionDeleteJob action frees a BatchJob of type ProvisionDelete that was claimed using the getExclusiveProvisionDeleteJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaVirusScanBatchService.prototype.freeExclusiveProvisionDeleteJob = function(callback, id, lockKey, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("virusScanBatch", "freeExclusiveProvisionDeleteJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch resetJobExecutionAttempts action resets the execution attempts of the job 
 *	.
 * @param	id	int		The id of the job (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism (optional).
 * @param	jobType	string		The type of the job   (optional, enum: KalturaBatchJobType).
 * @return	.
 */
KalturaVirusScanBatchService.prototype.resetJobExecutionAttempts = function(callback, id, lockKey, jobType){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "jobType", jobType);
	this.client.queueServiceActionCall("virusScanBatch", "resetJobExecutionAttempts", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch freeExclusiveJobAction action allows to get a generic BatchJob 
 *	.
 * @param	id	int		The id of the job (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism (optional).
 * @param	jobType	string		The type of the job   (optional, enum: KalturaBatchJobType).
 * @param	resetExecutionAttempts	bool		Resets the job execution attampts to zero   (optional, default: false).
 * @return	KalturaFreeJobResponse.
 */
KalturaVirusScanBatchService.prototype.freeExclusiveJob = function(callback, id, lockKey, jobType, resetExecutionAttempts){
	if(!resetExecutionAttempts)
		resetExecutionAttempts = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "jobType", jobType);
	this.client.addParam(kparams, "resetExecutionAttempts", resetExecutionAttempts);
	this.client.queueServiceActionCall("virusScanBatch", "freeExclusiveJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getQueueSize action get the queue size for job type 
 *	.
 * @param	workerQueueFilter	KalturaWorkerQueueFilter		The worker filter   (optional).
 * @return	int.
 */
KalturaVirusScanBatchService.prototype.getQueueSize = function(callback, workerQueueFilter){
	var kparams = new Object();
	this.client.addParam(kparams, "workerQueueFilter", toParams(workerQueueFilter));
	this.client.queueServiceActionCall("virusScanBatch", "getQueueSize", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveJobsAction action allows to get a BatchJob 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @param	jobType	string		The type of the job - could be a custom extended type (optional, enum: KalturaBatchJobType, default: null).
 * @return	array.
 */
KalturaVirusScanBatchService.prototype.getExclusiveJobs = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter, jobType){
	if(!filter)
		filter = null;
	if(!jobType)
		jobType = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.addParam(kparams, "jobType", jobType);
	this.client.queueServiceActionCall("virusScanBatch", "getExclusiveJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch getExclusiveAlmostDone action allows to get a BatchJob that wait for remote closure 
 *	.
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	maxExecutionTime	int		The maximum time in seconds the job reguarly take. Is used for the locking mechanism when determining an unexpected termination of a batch-process. (optional).
 * @param	numberOfJobs	int		The maximum number of jobs to return.  (optional).
 * @param	filter	KalturaBatchJobFilter		Set of rules to fetch only rartial list of jobs   (optional, default: null).
 * @param	jobType	string		The type of the job - could be a custom extended type (optional, enum: KalturaBatchJobType, default: null).
 * @return	array.
 */
KalturaVirusScanBatchService.prototype.getExclusiveAlmostDone = function(callback, lockKey, maxExecutionTime, numberOfJobs, filter, jobType){
	if(!filter)
		filter = null;
	if(!jobType)
		jobType = null;
	var kparams = new Object();
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "maxExecutionTime", maxExecutionTime);
	this.client.addParam(kparams, "numberOfJobs", numberOfJobs);
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.addParam(kparams, "jobType", jobType);
	this.client.queueServiceActionCall("virusScanBatch", "getExclusiveAlmostDone", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch updateExclusiveJobAction action updates a BatchJob of extended type that was claimed using the getExclusiveJobs
 *	.
 * @param	id	int		The id of the job to free (optional).
 * @param	lockKey	KalturaExclusiveLockKey		The unique lock key from the batch-process. Is used for the locking mechanism   (optional).
 * @param	job	KalturaBatchJob		 (optional).
 * @param	entryStatus	string		Optional parameter if the entry of the batch should change  (optional, enum: KalturaEntryStatus, default: null).
 * @return	KalturaBatchJob.
 */
KalturaVirusScanBatchService.prototype.updateExclusiveJob = function(callback, id, lockKey, job, entryStatus){
	if(!entryStatus)
		entryStatus = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "lockKey", toParams(lockKey));
	this.client.addParam(kparams, "job", toParams(job));
	this.client.addParam(kparams, "entryStatus", entryStatus);
	this.client.queueServiceActionCall("virusScanBatch", "updateExclusiveJob", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * batch cleanExclusiveJobs action mark as fatal error all expired jobs
 *	.
 * @return	int.
 */
KalturaVirusScanBatchService.prototype.cleanExclusiveJobs = function(callback){
	var kparams = new Object();
	this.client.queueServiceActionCall("virusScanBatch", "cleanExclusiveJobs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Add the data to the flavor asset conversion log, creates it if doesn't exists
 *	.
 * @param	flavorAssetId	string		 (optional).
 * @param	data	string		 (optional).
 * @return	.
 */
KalturaVirusScanBatchService.prototype.logConversion = function(callback, flavorAssetId, data){
	var kparams = new Object();
	this.client.addParam(kparams, "flavorAssetId", flavorAssetId);
	this.client.addParam(kparams, "data", data);
	this.client.queueServiceActionCall("virusScanBatch", "logConversion", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

