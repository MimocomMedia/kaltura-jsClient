/**
 * Construct new Kaltura service action call, if params array contain sub-arrays (for objects), it will be flattened.
 * @param string	service		The Kaltura service to use.
 * @param string	action			The service action to execute.
 * @param array		params			The parameters to pass to the service action.
 * @param array 	files			Files to upload or manipulate.
 */
function KalturaServiceActionCall(service, action, params, files)
{
	if(!params)
		params = new Object();
	if(!files)
		files = new Object();

	this.service = service;
	this.action = action;
	this.params = this.parseParams(params);
	this.files = files;
}
/**
 * @param string	service		The Kaltura service to use.
 */
KalturaServiceActionCall.prototype.service = null;
/**
 * @param string	action			The service action to execute.
 */
KalturaServiceActionCall.prototype.action = null;
/**
 * @param array		params			The parameters to pass to the service action.
 */
KalturaServiceActionCall.prototype.params = null;
/**
 * @param array 	files			Files to upload or manipulate.
 */
KalturaServiceActionCall.prototype.files = null;
/**
 * Parse params array and sub arrays (clone objects)
 * @param array params	the object to clone.
 * @return the newly cloned object from the input object.
 */
KalturaServiceActionCall.prototype.parseParams = function(params)
{
	var newParams = new Object();
	for(var key in params) {
		var val = params[key];
		if (typeof(val) == 'object') {
			newParams[key] = this.parseParams(val);
		} else {
			newParams[key] = val;
		}
	}
	return newParams;
};

/**
 * Create params object for a multirequest call.
 * @param int multiRequestIndex		the index of the call inside the multirequest.
 */
KalturaServiceActionCall.prototype.getParamsForMultiRequest = function(multiRequestIndex)
{
	var multiRequestParams = new Object();
	multiRequestParams[multiRequestIndex + ":service"] = this.service;
	multiRequestParams[multiRequestIndex + ":action"] = this.action;
	for(var key in this.params) {
		var val = this.params[key];
		multiRequestParams[multiRequestIndex + ":" + key] = val;
	}
	return multiRequestParams;
};

/**
 * Implement to get Kaltura Client logs
 * 
 */
function IKalturaLogger() 
{
}
IKalturaLogger.prototype.log = function(msg){
	if (console.log){
		console.log(msg);
	}
};

/**
 * Kaltura client constructor
 * 
 */
function KalturaClientBase()
{
}

/**
 * Kaltura client init
 * @param KalturaConfiguration config
 */
KalturaClientBase.prototype.init = function(config)
{
    this.config = config;
    var logger = this.config.getLogger();
	if (logger) {
		this.shouldLog = true;	
	}
};

KalturaClientBase.prototype.KALTURA_API_VERSION = "3.0";
KalturaClientBase.prototype.KALTURA_SERVICE_FORMAT_JSON = 1;
KalturaClientBase.prototype.KALTURA_SERVICE_FORMAT_XML = 2;
KalturaClientBase.prototype.KALTURA_SERVICE_FORMAT_PHP = 3;

/**
 * @param KalturaConfiguration The Kaltura Client - this is the facade through which all service actions should be called.
 */
KalturaClientBase.prototype.config = null;
	
/**
 * @param string	the Kaltura session to use.
 */
KalturaClientBase.prototype.ks = null;
	
/**
 * @param boolean	should the client log all actions.
 */
KalturaClientBase.prototype.shouldLog = false;
	
/**
 * @param boolean	should the call be multirequest (set to true when creating multirequest calls).
 */
KalturaClientBase.prototype.useMultiRequest = false;
	
/**
 * @param Array 	queue of service action calls.
 */
KalturaClientBase.prototype.callsQueue = new Array();

/**
 * prepare a call for service action (queue the call and wait for doQueue).
 */
KalturaClientBase.prototype.queueServiceActionCall = function (service, action, params, files)
{
	// in start session partner id is optional (default -1). if partner id was not set, use the one in the config
	if (!params.hasOwnProperty("partnerId") || params["partnerId"] == -1)
		params["partnerId"] = this.config.partnerId;
	this.addParam(params, "ks", this.ks);
	var call = new KalturaServiceActionCall(service, action, params, files);
	this.callsQueue.push(call);
};

/**
 * executes the actions queue.
 */
KalturaClientBase.prototype.doQueue = function(callback)
{
	if (this.callsQueue.length == 0)
		return null;
	var params = new Object();
	var files = new Object();
	this.log("service url: [" + this.config.serviceUrl + "]");
	// append the basic params
	this.addParam(params, "apiVersion", this.KALTURA_API_VERSION);
	this.addParam(params, "format", this.config.format);
	this.addParam(params, "clientTag", this.config.clientTag);
	var url = this.config.serviceUrl + "/api_v3/index.php?service=";
	var call = null;
	if (this.useMultiRequest){
		url += "multirequest";
		$i = 1;
		for(var v in this.callsQueue){
			call = this.callsQueue[v];
			var callParams = call.getParamsForMultiRequest($i++);
			for(var sv1 in callParams)
				params[sv1] = callParams[sv1];

			for(var sv2 in call.files)
				files[sv2] = call.files[sv2];
		}
	} else {
		call = this.callsQueue[0];
		url += call.service + "&action=" + call.action;
		for(var sv3 in call.params)
			params[sv3] = call.params[sv3];
		for(var sv4 in call.files)
			files[sv4] = call.files[sv4];
	}
	// reset
	this.callsQueue = new Array();
	this.useMultiRequest = false; 
	var signature = this.signature(params);
	this.addParam(params, "kalsig", signature);
	this.doHttpRequest(callback, url, params, files);
};

/**
 * Sign array of parameters for requests validation (CRC).
 * @param array params		service action call parameters that will be sent on the request.
 * @return string			a hashed signed signature that can identify the sent request parameters.
 */
KalturaClientBase.prototype.signature = function(params)
{
	ksort(params);
	var str = "";
	for(var v in params) {
		var k = params[v];
		str += k + v;
	}
	return md5(str);
};

/**
 * send the http request.
 * @param string url						the url to call.
 * @param parameters params					the parameters to pass.
 * @return array 							the results and errors inside an array.
 */
KalturaClientBase.prototype.doHttpRequest = function (callback, url, params, files)
{
	if(!params)
		params = new Object();
	if(!files)
		files = new Object();
	var data = params;
	//var enctype = "application/x-www-form-urlencoded";
	var enctype = "text/plain";
	if(files.length) {
		enctype = "multipart/form-data";
		for(var v in files)
		{
			var $file = files[v]; // must be a jquery object that points to a file input
			data[v] = $file.val();
		}
	}
	//fix a bug with the request handling:
	window.setTimeout(this.doAjax, 0, callback, url, data, enctype);
	console.log('after request: '+url, data);
};

KalturaClientBase.prototype.doAjax = function (callback, url, data, enctype) {
	console.log("before request: ", url, data);
	$.ajax({
        type: "POST",
        dataType: "text",
        aysnch:false,
		cache: false,
        url: url,
        enctype: enctype,
        data: data,
        error: function errorHandler(XHRobj,errtype,errObj) {
				if (errObj) {
		    		str = "Error: "+errObj.number
		    			+"\nType: "+errObj.name
		    			+"\nDescription: "+errObj.description
		    			+"\nSource Object Id: "+errObj.srcElement.instanceId;
		    		console.log(str);
				} else {
					console.log(XHRobj, errtype);
				}
        },
        complete: function (XHRobj, textStatus) {
        	console.log("complete?! ",XHRobj, textStatus, this);  
        },
        success: function successHandler(data,status,XHRobj) {
	    		if (XHRobj.readyState == 4) {
	    			str = "readyState:"+XHRobj.readyState
	    					+"\nresponseText:"+XHRobj.responseText
	    					+"\nstatus:"+XHRobj.status
	    					+"\nstatusText:"+XHRobj.statusText
	    					+"\nSource Object Id: "+XHRobj.instanceId;
    				resultObj = unserialize(XHRobj.responseText);
    				//console.log(resultObj);
    				if (resultObj === false) 
    					console.log("failed to serialize server result\n$postResult");
    				dumpRes = dump(resultObj);
    				console.log("result (object dump): " + dumpRes);
	    			callback(resultObj);
	    		}
	    	}
    });
};

/**
 * getter for the Kaltura session.
 * @return string	KS
 */
KalturaClientBase.prototype.getKs = function()
{
	return this.ks;
};

/**
 * @param string ks	setter for the Kaltura session.
 */
KalturaClientBase.prototype.setKs = function(ks)
{
	this.ks = ks;
};

/**
 * getter for the referenced configuration object. 
 * @return KalturaConfiguration
 */
KalturaClientBase.prototype.getConfig = function()
{
	return this.config;
};

/**
 * @param KalturaConfiguration config	setter for the referenced configuration object.
 */
KalturaClientBase.prototype.setConfig = function(config)
{
	this.config = config;
	logger = this.config.getLogger();
	if (logger instanceof IKalturaLogger){
		this.shouldLog = true;	
	}
};

/**
 * Add parameter to array of parameters that is passed by reference
 * @param arrat params			array of parameters to pass to a call.
 * @param string paramName		the name of the new parameter to add.
 * @param string paramValue		the value of the new parameter to add.
 */
KalturaClientBase.prototype.addParam = function(params, paramName, paramValue)
{
	if (paramValue == null)
		return;
	if(typeof(paramValue) != 'object') {
		params[paramName] = paramValue;
		return;
	}
	for(var subParamName in paramValue) {
		var subParamValue = paramValue[subParamName];
		this.addParam(params, paramName + ":" + subParamName, subParamValue);
	}
};

/**
 * set to true to indicate a multirequest is being defined.
 */
KalturaClientBase.prototype.startMultiRequest = function()
{
	this.useMultiRequest = true;
};

/**
 * execute a multirequest.
 */
KalturaClientBase.prototype.doMultiRequest = function(callback)
{
	return this.doQueue(callback);
};

/**
 * indicate if current mode is constructing a multirequest or single requests.
 */
KalturaClientBase.prototype.isMultiRequest = function()
{
	return this.useMultiRequest;	
};

/**
 * @param string msg	client logging utility. 
 */
KalturaClientBase.prototype.log = function(msg)
{
	if (this.shouldLog)
		this.config.getLogger().log(msg);
};

/**
 * Abstract base class for all client services
 * Initialize the service keeping reference to the KalturaClient
 * @param KalturaClientm client
 */
function KalturaServiceBase()
{
}
KalturaServiceBase.prototype.init = function(client)
{
	this.client = client;
};

/**
 * @param KalturaClient
 */
KalturaServiceBase.prototype.client = null;
/**
 * Abstract base class for all client objects
 */
function KalturaObjectBase()
{
}
/**
 * validate a paramter's value is not null, if not null, add the parameter to the collection.
 * @param	params		the collection of parameters to send in a service action request.
 * @param	paramName	the new parameter name to add.
 * @param	paramValue	the new parameter value to add.
 */
KalturaServiceBase.prototype.addIfNotNull = function(params, paramName, paramValue)
{
	if (paramValue != null) {
		if(paramValue instanceof KalturaObjectBase) {
			params[paramName] = paramValue.toParams();
		} else {
			params[paramName] = paramValue;
		}
	}
};
/**
 * serializes new object's parameters.
 */
KalturaServiceBase.prototype.toParams = function()
{
	var params = new Object();
	params["objectType"] = getClass(this);
    for(var prop in this) {
    	var val = this[prop];
		this.addIfNotNull(params, prop, val);
	}
	return params;
};

/**
 * Constructs new Kaltura configuration object
 * @param partnerId		a valid Kaltura partner id.
 */
function KalturaConfiguration(partnerId)
{
	if(!partnerId)
		partnerId = -1;
    if (typeof(partnerId) != 'number')
        throw "Invalid partner id - partnerId must be numeric!";
    this.partnerId = partnerId;
}

KalturaConfiguration.prototype.logger		= null;
KalturaConfiguration.prototype.serviceUrl	= "http://www.kaltura.com";
KalturaConfiguration.prototype.partnerId	= null;
KalturaConfiguration.prototype.format		= KalturaClientBase.prototype.KALTURA_SERVICE_FORMAT_PHP;
KalturaConfiguration.prototype.clientTag	= "js";

/**
 * Set logger to get kaltura client debug logs.
 * @param IKalturaLogger log
 */
KalturaConfiguration.prototype.setLogger = function(log)
{
	this.logger = log;
};

/**
 * Gets the logger (Internal client use)
 * @return IKalturaLogger
 */
KalturaConfiguration.prototype.getLogger = function()
{
	return this.logger;
};
