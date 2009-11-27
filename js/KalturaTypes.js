
function KalturaAspectRatioType(){
}
KalturaAspectRatioType.KEEP_ORIG_RATIO = 1;
KalturaAspectRatioType.KEEP_ORIG_DIMENSIONS = 2;
KalturaAspectRatioType.ASPECT_4_3 = 3;
KalturaAspectRatioType.ASPECT_16_9 = 4;
KalturaAspectRatioType.KEEP_HEIGHT = 5;

function KalturaBatchJobStatus(){
}
KalturaBatchJobStatus.PENDING = 0;
KalturaBatchJobStatus.QUEUED = 1;
KalturaBatchJobStatus.PROCESSING = 2;
KalturaBatchJobStatus.PROCESSED = 3;
KalturaBatchJobStatus.MOVEFILE = 4;
KalturaBatchJobStatus.FINISHED = 5;
KalturaBatchJobStatus.FAILED = 6;
KalturaBatchJobStatus.ABORTED = 7;

function KalturaEditorType(){
}
KalturaEditorType.SIMPLE = 1;
KalturaEditorType.ADVANCED = 2;

function KalturaEntryStatus(){
}
KalturaEntryStatus.ERROR_CONVERTING = -1;
KalturaEntryStatus.IMPORT = 0;
KalturaEntryStatus.PRECONVERT = 1;
KalturaEntryStatus.READY = 2;
KalturaEntryStatus.DELETED = 3;
KalturaEntryStatus.PENDING = 4;
KalturaEntryStatus.MODERATE = 5;
KalturaEntryStatus.BLOCKED = 6;

function KalturaEntryType(){
}
KalturaEntryType.AUTOMATIC = -1;
KalturaEntryType.MEDIA_CLIP = 1;
KalturaEntryType.MIX = 2;
KalturaEntryType.PLAYLIST = 5;
KalturaEntryType.DATA = 6;
KalturaEntryType.DOCUMENT = 10;

function KalturaGender(){
}
KalturaGender.UNKNOWN = 0;
KalturaGender.MALE = 1;
KalturaGender.FEMALE = 2;

function KalturaLicenseType(){
}
KalturaLicenseType.UNKNOWN = -1;
KalturaLicenseType.NONE = 0;
KalturaLicenseType.COPYRIGHTED = 1;
KalturaLicenseType.PUBLIC_DOMAIN = 2;
KalturaLicenseType.CREATIVECOMMONS_ATTRIBUTION = 3;
KalturaLicenseType.CREATIVECOMMONS_ATTRIBUTION_SHARE_ALIKE = 4;
KalturaLicenseType.CREATIVECOMMONS_ATTRIBUTION_NO_DERIVATIVES = 5;
KalturaLicenseType.CREATIVECOMMONS_ATTRIBUTION_NON_COMMERCIAL = 6;
KalturaLicenseType.CREATIVECOMMONS_ATTRIBUTION_NON_COMMERCIAL_SHARE_ALIKE = 7;
KalturaLicenseType.CREATIVECOMMONS_ATTRIBUTION_NON_COMMERCIAL_NO_DERIVATIVES = 8;
KalturaLicenseType.GFDL = 9;
KalturaLicenseType.GPL = 10;
KalturaLicenseType.AFFERO_GPL = 11;
KalturaLicenseType.LGPL = 12;
KalturaLicenseType.BSD = 13;
KalturaLicenseType.APACHE = 14;
KalturaLicenseType.MOZILLA = 15;

function KalturaMediaType(){
}
KalturaMediaType.VIDEO = 1;
KalturaMediaType.IMAGE = 2;
KalturaMediaType.AUDIO = 5;

function KalturaModerationFlagStatus(){
}
KalturaModerationFlagStatus.PENDING = 1;
KalturaModerationFlagStatus.MODERATED = 2;

function KalturaModerationFlagType(){
}
KalturaModerationFlagType.SEXUAL_CONTENT = 1;
KalturaModerationFlagType.VIOLENT_REPULSIVE = 2;
KalturaModerationFlagType.HARMFUL_DANGEROUS = 3;
KalturaModerationFlagType.SPAM_COMMERCIALS = 4;

function KalturaModerationObjectType(){
}
KalturaModerationObjectType.ENTRY = 2;
KalturaModerationObjectType.USER = 3;

function KalturaNotificationType(){
}
KalturaNotificationType.ENTRY_ADD = 1;
KalturaNotificationType.ENTR_UPDATE_PERMISSIONS = 2;
KalturaNotificationType.ENTRY_DELETE = 3;
KalturaNotificationType.ENTRY_BLOCK = 4;
KalturaNotificationType.ENTRY_UPDATE = 5;
KalturaNotificationType.ENTRY_UPDATE_THUMBNAIL = 6;
KalturaNotificationType.ENTRY_UPDATE_MODERATION = 7;
KalturaNotificationType.USER_ADD = 21;
KalturaNotificationType.USER_BANNED = 26;

function KalturaPartnerType(){
}
KalturaPartnerType.KMC = 1;
KalturaPartnerType.WIKI = 100;
KalturaPartnerType.WORDPRESS = 101;
KalturaPartnerType.DRUPAL = 102;
KalturaPartnerType.DEKIWIKI = 103;
KalturaPartnerType.MOODLE = 104;
KalturaPartnerType.COMMUNITY_EDITION = 105;

function KalturaPlaylistType(){
}
KalturaPlaylistType.DYNAMIC = 10;
KalturaPlaylistType.STATIC_LIST = 3;
KalturaPlaylistType.EXTERNAL = 101;

function KalturaReportType(){
}
KalturaReportType.TOP_CONTENT = 1;
KalturaReportType.CONTENT_DROPOFF = 2;
KalturaReportType.CONTENT_INTERACTIONS = 3;
KalturaReportType.MAP_OVERLAY = 4;
KalturaReportType.TOP_CONTRIBUTORS = 5;
KalturaReportType.TOP_SYNDICATION = 6;
KalturaReportType.CONTENT_CONTRIBUTIONS = 7;

function KalturaSearchProviderType(){
}
KalturaSearchProviderType.FLICKR = 3;
KalturaSearchProviderType.YOUTUBE = 4;
KalturaSearchProviderType.MYSPACE = 7;
KalturaSearchProviderType.PHOTOBUCKET = 8;
KalturaSearchProviderType.JAMENDO = 9;
KalturaSearchProviderType.CCMIXTER = 10;
KalturaSearchProviderType.NYPL = 11;
KalturaSearchProviderType.CURRENT = 12;
KalturaSearchProviderType.MEDIA_COMMONS = 13;
KalturaSearchProviderType.KALTURA = 20;
KalturaSearchProviderType.KALTURA_USER_CLIPS = 21;
KalturaSearchProviderType.ARCHIVE_ORG = 22;
KalturaSearchProviderType.KALTURA_PARTNER = 23;
KalturaSearchProviderType.METACAFE = 24;
KalturaSearchProviderType.SEARCH_PROXY = 28;

function KalturaSessionType(){
}
KalturaSessionType.USER = 0;
KalturaSessionType.ADMIN = 2;

function KalturaSourceType(){
}
KalturaSourceType.FILE = 1;
KalturaSourceType.WEBCAM = 2;
KalturaSourceType.URL = 5;
KalturaSourceType.SEARCH_PROVIDER = 6;

function KalturaStatsEventType(){
}
KalturaStatsEventType.WIDGET_LOADED = 1;
KalturaStatsEventType.MEDIA_LOADED = 2;
KalturaStatsEventType.PLAY = 3;
KalturaStatsEventType.PLAY_REACHED_25 = 4;
KalturaStatsEventType.PLAY_REACHED_50 = 5;
KalturaStatsEventType.PLAY_REACHED_75 = 6;
KalturaStatsEventType.PLAY_REACHED_100 = 7;
KalturaStatsEventType.OPEN_EDIT = 8;
KalturaStatsEventType.OPEN_VIRAL = 9;
KalturaStatsEventType.OPEN_DOWNLOAD = 10;
KalturaStatsEventType.OPEN_REPORT = 11;
KalturaStatsEventType.BUFFER_START = 12;
KalturaStatsEventType.BUFFER_END = 13;
KalturaStatsEventType.OPEN_FULL_SCREEN = 14;
KalturaStatsEventType.CLOSE_FULL_SCREEN = 15;
KalturaStatsEventType.REPLAY = 16;
KalturaStatsEventType.SEEK = 17;
KalturaStatsEventType.OPEN_UPLOAD = 18;
KalturaStatsEventType.SAVE_PUBLISH = 19;
KalturaStatsEventType.CLOSE_EDITOR = 20;
KalturaStatsEventType.PRE_BUMPER_PLAYED = 21;
KalturaStatsEventType.POST_BUMPER_PLAYED = 22;
KalturaStatsEventType.BUMPER_CLICKED = 23;
KalturaStatsEventType.FUTURE_USE_1 = 24;
KalturaStatsEventType.FUTURE_USE_2 = 25;
KalturaStatsEventType.FUTURE_USE_3 = 26;

function KalturaUiConfCreationMode(){
}
KalturaUiConfCreationMode.WIZARD = 2;
KalturaUiConfCreationMode.ADVANCED = 3;

function KalturaUiConfObjType(){
}
KalturaUiConfObjType.PLAYER = 1;
KalturaUiConfObjType.CONTRIBUTION_WIZARD = 2;
KalturaUiConfObjType.SIMPLE_EDITOR = 3;
KalturaUiConfObjType.ADVANCED_EDITOR = 4;
KalturaUiConfObjType.PLAYLIST = 5;
KalturaUiConfObjType.APP_STUDIO = 6;

function KalturaUserStatus(){
}
KalturaUserStatus.BLOCKED = 0;
KalturaUserStatus.ACTIVE = 1;
KalturaUserStatus.DELETED = 2;

function KalturaWidgetSecurityType(){
}
KalturaWidgetSecurityType.NONE = 1;
KalturaWidgetSecurityType.TIMEHASH = 2;
