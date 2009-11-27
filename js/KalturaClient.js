/**
 * The Kaltura Client - this is the facade through which all service actions should be called.
 * @param config the Kaltura configuration object holding partner credentials (type: KalturaConfiguration).
 */
function KalturaClient(config){
	this.init(config);
}
KalturaClient.prototype = new KalturaClientBase();
/**
 * 
 * @param KalturaMediaService
 */
KalturaClient.prototype.media = null;
/**
 * 
 * @param KalturaMixingService
 */
KalturaClient.prototype.mixing = null;
/**
 * 
 * @param KalturaDataService
 */
KalturaClient.prototype.data = null;
/**
 * 
 * @param KalturaBaseEntryService
 */
KalturaClient.prototype.baseEntry = null;
/**
 * 
 * @param KalturaSessionService
 */
KalturaClient.prototype.session = null;
/**
 * 
 * @param KalturaUiConfService
 */
KalturaClient.prototype.uiConf = null;
/**
 * 
 * @param KalturaPlaylistService
 */
KalturaClient.prototype.playlist = null;
/**
 * 
 * @param KalturaUserService
 */
KalturaClient.prototype.user = null;
/**
 * 
 * @param KalturaWidgetService
 */
KalturaClient.prototype.widget = null;
/**
 * 
 * @param KalturaSearchService
 */
KalturaClient.prototype.search = null;
/**
 * 
 * @param KalturaPartnerService
 */
KalturaClient.prototype.partner = null;
/**
 * 
 * @param KalturaAdminUserService
 */
KalturaClient.prototype.adminUser = null;
/**
 * 
 * @param KalturaSystemService
 */
KalturaClient.prototype.system = null;
/**
 * 
 * @param KalturaBulkUploadService
 */
KalturaClient.prototype.bulkUpload = null;
/**
 * 
 * @param KalturaNotificationService
 */
KalturaClient.prototype.notification = null;
/**
 * 
 * @param KalturaReportService
 */
KalturaClient.prototype.report = null;
/**
 * 
 * @param KalturaConversionProfileService
 */
KalturaClient.prototype.conversionProfile = null;
/**
 * 
 * @param KalturaStatsService
 */
KalturaClient.prototype.stats = null;
/**
 * The client constructor.
 * @param config the Kaltura configuration object holding partner credentials (type: KalturaConfiguration).
 */
KalturaClient.prototype.init = function(config){
	//call the super constructor:
	KalturaClientBase.prototype.init.apply(this, arguments);
	//initialize client services:
	this.media = new KalturaMediaService(this);
	this.mixing = new KalturaMixingService(this);
	this.data = new KalturaDataService(this);
	this.baseEntry = new KalturaBaseEntryService(this);
	this.session = new KalturaSessionService(this);
	this.uiConf = new KalturaUiConfService(this);
	this.playlist = new KalturaPlaylistService(this);
	this.user = new KalturaUserService(this);
	this.widget = new KalturaWidgetService(this);
	this.search = new KalturaSearchService(this);
	this.partner = new KalturaPartnerService(this);
	this.adminUser = new KalturaAdminUserService(this);
	this.system = new KalturaSystemService(this);
	this.bulkUpload = new KalturaBulkUploadService(this);
	this.notification = new KalturaNotificationService(this);
	this.report = new KalturaReportService(this);
	this.conversionProfile = new KalturaConversionProfileService(this);
	this.stats = new KalturaStatsService(this);
}
