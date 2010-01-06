<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
	<head>
		<title>JavaScript client library sandbox</title>
		<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"></script>
		<!-- <script type="text/javascript" src="http://dev.kcl_js/generator/output/jsClient/combine.php?type=javascript&files=KalturaJsUtils.js,KalturaClientBase.js,KalturaTypes.js,KalturaVO.js,KalturaClient.js,KalturaServices.js,ox.ajast.js"></script> -->
		<script type="text/javascript" src="http://dev.kcl_js/generator/output/jsClient/js/webtoolkit.md5.js"></script>
		<script type="text/javascript" src="http://dev.kcl_js/generator/output/jsClient/js/ox.ajast.js"></script>
		<script type="text/javascript" src="http://dev.kcl_js/generator/output/jsClient/js/KalturaClientBase.js"></script>
		<script type="text/javascript" src="http://dev.kcl_js/generator/output/jsClient/js/KalturaClient.js"></script>
		<script type="text/javascript" src="http://dev.kcl_js/generator/output/jsClient/js/KalturaTypes.js"></script>
		<script type="text/javascript" src="http://dev.kcl_js/generator/output/jsClient/js/KalturaVO.js"></script>
		<script type="text/javascript" src="http://dev.kcl_js/generator/output/jsClient/js/KalturaServices.js"></script>
		
		<link rel="stylesheet" type="text/css" href="playground_libs/flexigrid/css/flexigrid/flexigrid.css">
		<script type="text/javascript" src="playground_libs/flexigrid/flexigrid.js"></script>

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
				//$('#outputBlock').append(msg+'<br />');
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

			function listEntries(page, filterKey, filterValue, success, error) {
				var entryFilter = new KalturaBaseEntryFilter();
				if ($('#inputType').val() != '')
					entryFilter.typeEqual = $('#inputType').val();
				if (filterKey && filterKey != '')
					entryFilter[filterKey] = filterValue;
				entryFilter.statusEqual = KalturaEntryStatus.READY;
				entryFilter.orderBy = KalturaBaseEntryOrderBy.CREATED_AT_DESC;
				var kalturaPager = new KalturaFilterPager();
				kalturaPager.pageSize = 10;
				kalturaPager.pageIndex = page;
				kClient.baseEntry.listAction(getEntrieListHandler, entryFilter, kalturaPager);
			}
			function getEntrieListHandler (success, data) {
				var p = currentPage;
				writeLog('List entries: ', data);
				var d = buildGridDataProvider(p, data.totalCount, data.objects, 'id', ['id', 'name', 'tags', 'thumbnailUrl']);
				writeLog('Grid populate: ' + d, d);
				flexirep.flexAddData(d);
			}

			var gridData = null;
			function buildGridDataProvider (pageNumber, totalPages, dataItems, idfield, fields) {
				gridData = {
					page: parseInt(pageNumber),
					total: parseInt(totalPages),
					rows: []
				};
				var data = {};
				var key = '';
				for (var i = 0; i < dataItems.length; ++i) {
					data = dataItems[i];
					gridData.rows.push ({id:data[idfield], cell:[]});
					if (!fields) {
						for(key in data) {
							gridData.rows[i].cell.push(data[key]);
						}
					} else {
						for (var j = 0; j < fields.length; ++j) {
							key = fields[j];
							gridData.rows[i].cell.push(data[key]);
						}
					}
				}
				return gridData;
			}

			var currentPage = 1;
			function getDataProvider (data, success, error) {
				currentPage = parseInt(data[0].value);
				var filterValue = data[4].value;
				var filterKey = data[5].value;
				writeLog('get new data: ', data);
				if (kClient.ks) {
					listEntries(currentPage, filterKey, filterValue, success, error);
				} else {
					startSession();
				}
			}
			
		</script>
		<table id="flex1" style="display:none"></table>
		<script type="text/javascript">
			var flexirep = $("#flex1").flexigrid
			({
				dataType: 'json',
				url: 'a',
				colModel : [
					{display: 'Id', name : 'id', sortable : true, align: 'center', width:'80'},
					{display: 'Name', name : 'name', sortable : true, align: 'center', width:'160'},
					{display: 'Tags', name : 'tags', sortable : true, align: 'center', width:'120'},
					{display: 'Thumbnail', name : 'thumbnailUrl', sortable : true, align: 'center', width:'200'}
					],
				searchitems : [
					{display: 'Id', name : 'idIn', isdefault: true},
					{display: 'Name', name : 'nameLike'},
					{display: 'Entry Type', name : 'typeEqual'}
					],
				sortname: "name",
				sortorder: "asc",
				usepager: true,
				showTableToggleBtn: true,
				title: 'Entries',
				useRp: false,
				rp: 10,
				width: 700,
				height: 200,
				getDataProvider: getDataProvider
			});			
		</script>
	</body>
</html>