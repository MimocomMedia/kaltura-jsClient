<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
	<head>
		<title>JavaScript client library sandbox</title>
		<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"></script>
		<script type="text/javascript" src="http://dev.kcl_js/generator/output/jsClient/combine.php?type=javascript&files=KalturaJsUtils.js,KalturaClientBase.js,KalturaTypes.js,KalturaVO.js,KalturaClient.js,KalturaServices.js"></script>
		<script type="text/javascript" src="/flxhr/jquery.xhr.js"></script>
		<script type="text/javascript" src="/flxhr/flXHR.js"></script>
		<script type="text/javascript" src="/flxhr/jquery.flXHRproxy.js"></script>
		<script type="text/javascript">
			/**
			* Prepare the JQuery for cross-domain ajax requests via flXHRproxy and register the ajax start and end events to the loading gif.
			*/
			function onerrorH (info) {
				console.log("Errorrr: ", onerrorH)
			}
			jQuery(document).ready(function() {
				jQuery.flXHRproxy.registerOptions('http://www.kaltura.com/',{xmlResponseText:false});
				jQuery.ajaxSetup({transport:'flXHRproxy'});
				$("#loading").hide();
				$("#loading").ajaxStart(function(){
				   $(this).show();
				});
				$("#loading").ajaxStop(function(){
				   $(this).hide();
				}); 
			});
		</script>	
	</head>
	<body style="font-family:arial;">
		<h2>JavaScript Kcl playground</h2>
		<div id="outputBlock" class="output" ></div>
		<!-- define the JS <body> playgrounf -->
		<script type="text/javascript">
			//utility for output
			function writeLog(msg) {
				$('#outputBlock').append(msg+'<br />');
			}

			var dummyKs = "MjhkYmZiMjAzOTJmOWM3NmU1N2VmYTNhMDJmNWVjOTg4NjgyZWQ3ZHwxOzE7MTI1OTI0MzE2NDsyOzEyNTkxNTY3NjQuODkxODt0ZXN0X2pzX2tjbDs=";
			var secret = "5678";
			var kConfig = new KalturaConfiguration(1);
			var kClient = new KalturaClient(kConfig);
			
			function sessionStarted(ks) {
				kClient.setKs(ks);
				writeLog('new KS created: ' + ks);
				kClient.media.get(getEntryHandler, '877820');
				//kClient.media.listAction(getEntryHandler);
			}
			function getEntryHandler (entry) {
				writeLog(entry);
			}
			function startSession(){
				kClient.session.start(sessionStarted, secret, "test_js_kcl", KalturaSessionType.ADMIN);
				//kClient.setKs(dummyKs);
				//kClient.media.listAction(getEntryHandler);
			}

			function lista (){
				kClient.media.listAction(getEntryHandler);
			}
						
		</script>
		<a href="#" onclick="startSession();return false;">Start session!</a>
		<a href="#" onclick="lista();return false;">list!</a>
		<img style="border:none; " src="/flxhr/ajax-loader.gif" id="loading"/>
	</body>
</html>