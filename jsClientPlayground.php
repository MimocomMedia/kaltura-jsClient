<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
	<head>
		<title>JavaScript client library sandbox</title>
		<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"></script>
		<!-- <script type="text/javascript" src="http://dev.kcl_js/generator/output/jsClient/combine.php?type=javascript&files=KalturaJsUtils.js,KalturaClientBase.js,KalturaTypes.js,KalturaVO.js,KalturaClient.js,KalturaServices.js,ox.ajast.js"></script> -->
		<script type="text/javascript" src="http://dev.kcl_js/generator/output/jsClient/js/KalturaJsUtils.js"></script>
		<script type="text/javascript" src="http://dev.kcl_js/generator/output/jsClient/js/KalturaClientBase.js"></script>
		<script type="text/javascript" src="http://dev.kcl_js/generator/output/jsClient/js/KalturaTypes.js"></script>
		<script type="text/javascript" src="http://dev.kcl_js/generator/output/jsClient/js/KalturaVO.js"></script>
		<script type="text/javascript" src="http://dev.kcl_js/generator/output/jsClient/js/KalturaClient.js"></script>
		<script type="text/javascript" src="http://dev.kcl_js/generator/output/jsClient/js/KalturaServices.js"></script>
		<script type="text/javascript" src="http://dev.kcl_js/generator/output/jsClient/js/ox.ajast.js"></script>
		<script type="text/javascript">
			/**
			* Prepare the JQuery for cross-domain ajax requests via flXHRproxy and register the ajax start and end events to the loading gif.
			*/
			function onerrorH (info) {
				console.log("Error: ", onerrorH)
			}
		</script>	
	</head>
	<body style="font-family:arial;">
		<h2>JavaScript Kcl playground</h2>
		<div id="outputBlock" class="output" ></div>
		<!-- define the JS <body> playground -->
		<script type="text/javascript">
			//utility for output
			function writeLog(msg, raw) {
				$('#outputBlock').append(msg+'<br />');
				console.log(raw);
			}

			var secret = "5678";
			var kConfig = new KalturaConfiguration(1);
			var kClient = new KalturaClient(kConfig);

			function startSession(){
				kClient.session.start(sessionStarted, secret, "test_js_kcl", KalturaSessionType.ADMIN);
			}
			function sessionStarted(success, data) {
				kClient.setKs(data);
				writeLog('new KS created: ' + data, data);
				listEntries();
			}

			function listEntries() {
				var entryFilter = new KalturaBaseEntryFilter();
				console.log(getClass(entryFilter));
				if ($('#inputType').val() != '')
					entryFilter.typeEqual = $('#inputType').val();
				entryFilter.statusEqual = KalturaEntryStatus.READY;
				entryFilter.orderBy = KalturaBaseEntryOrderBy.CREATED_AT_DESC;
				var kalturaPager = new KalturaFilterPager();
				kalturaPager.pageSize = 10;
				kalturaPager.pageIndex = $('#inputPageNum').val();
				kClient.baseEntry.listAction(getEntrieListHandler, entryFilter, kalturaPager);
			}
			function getEntrieListHandler (success, data) {
				writeLog('List entries:' + data, data);
			}
			
		</script>
		<a href="#" onclick="startSession();return false;">Start session!</a>
		<label for="inputPageNum">Page number: </label><input id="inputPageNum" value="1" />
		<label for="inputType">Entry type: </label><input id="inputType" />
		<!-- <img style="border:none; " src="/flxhr/ajax-loader.gif" id="loadingImg"/> -->
	</body>
</html>