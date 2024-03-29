<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
	<head>
		<title>JavaScript client library sandbox</title>
		<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"></script>
		<script type="text/javascript" src="kaltura.min.js.php"></script>

		<link rel="stylesheet" type="text/css" href="playground_libs/flexigrid/css/flexigrid/flexigrid.css">
		<script type="text/javascript" src="playground_libs/flexigrid/flexigrid.js"></script>

		<script type="text/javascript">
			/**
			* Prepare the JQuery for cross-domain ajax requests via flXHRproxy and register the ajax start and end events to the loading gif.
			*/
			function onerrorH (info) {
				try {
					if (console)
						console.log("Error: ", onerrorH)
				} catch (e) {}
			}
		</script>	
	</head>
	<body style="font-family:arial;">
		<div id="outputBlock" class="output" ></div>
		<!-- define the JS <body> playground -->
		<script type="text/javascript">
			//utility for output
			function writeLog(msg, raw) {
				//$('#outputBlock').append(msg+'<br />');
				try {
					if (console)
						console.log(raw);
				} catch (e) {}
			}

			var secret = "";
			
			var kConfig;
			var kClient;

			function startSession(){
				$('#loadericon').show('slow');
				secret = $('#adminsecret').val();
				partnerid = $('#partnerid').val();
				kConfig = new KalturaConfiguration(parseInt(partnerid));
				kClient = new KalturaClient(kConfig);
				kClient.session.start(sessionStarted, secret, "test_js_kcl", KalturaSessionType.ADMIN);
			}
			function sessionStarted(success, data) {
				kClient.setKs(data);
				writeLog('new KS created: ' + data, data);
				listEntries();
				listuiConfs();
			}

			function listEntries(page, filterKey, filterValue, sortOrder, success, error) {
				var entryFilter = new KalturaBaseEntryFilter();
				if (filterKey && filterKey != '' && filterValue != '')
					entryFilter[filterKey] = filterValue;
				entryFilter.statusEqual = KalturaEntryStatus.READY;
				if (sortOrder != 'desc')
					entryFilter.orderBy = '+name';
				else
					entryFilter.orderBy = '-name';
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
				$('#applicationdiv').show('normal');
				$('#loadericon').hide('fast');
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
				var sortKey = data[2].value;
				var sortOrder = data[3].value;
				writeLog('get new data: ', data);
				if (kClient && kClient.ks) {
					listEntries(currentPage, filterKey, filterValue, sortOrder, success, error);
				}
			}

			var selectedEntryId = 'bnmdraxxu0';
			function cellClick (e) {
				//e.target = the cell that was clicked
				//e.target.textContent = the content of the cell that was clicked
				//e.currentTarget = the row that was clicked
				//e.currentTarget.cells = the cells array of the clicked row
				//e.currentTarget.cells[i].textContent = the content of the cell i in the clicked row
				selectedEntryId = e.currentTarget.cells[0].textContent;
				$('span#selectedEntryId').html('  ' + selectedEntryId);
				$('span#selectedEntryName').html('  ' + e.currentTarget.cells[1].textContent);
				$('span#selectedEntryTags').html('  ' + e.currentTarget.cells[2].textContent);
				var thumb = '<img src="'+e.currentTarget.cells[3].textContent+'" alt="Selected Entry Thumbnail..."/>';
				$('span#selectedEntryThumbnail').html('  ' + thumb);
				//my_kdp = document.getElementById("kaltura_player");
				$('#kaltura_player').get(0).sendNotification("changeMedia",{entryId:selectedEntryId});
			}

			function listuiConfs(page, filterKey, filterValue, sortOrder, success, error) {
				var uiConfFilter = new KalturaUiConfFilter();
				uiConfFilter.objTypeEqual = 1;
				uiConfFilter.tagsMultiLikeOr = 'kdp3';
				uiConfFilter.ignoreNull = 1;
				uiConfFilter.orderBy = '-updatedAt';
				uiConfFilter.creationModeIn = 2;
				var kalturaPager = new KalturaFilterPager();
				kalturaPager.pageSize = 10;
				if (page)
					kalturaPager.pageIndex = page;
				else 
					kalturaPager.pageIndex = 0;
				kClient.uiConf.listAction(getUiConfListHandler, uiConfFilter, kalturaPager);
			}
			function getUiConfListHandler (success, data) {
				var p = currentPage2;
				writeLog('List uiconfs: ', data);
				var d = buildGridDataProvider(p, data.totalCount, data.objects, 'id', ['id', 'name', 'width', 'height', 'tags']);
				writeLog('Grid populate: ' + d, d);
				flexirep2.flexAddData(d);
				$('#applicationdiv').show('normal');
				$('#loadericon').hide('fast');
			}
			
			var currentPage2 = 1;
			function getDataProvider2 (data, success, error) {
				currentPage2 = parseInt(data[0].value);
				var filterValue = data[4].value;
				var filterKey = data[5].value;
				var sortKey = data[2].value;
				var sortOrder = data[3].value;
				writeLog('get new data2: ', data);
				if (kClient && kClient.ks) {
					listuiConfs(currentPage2, filterKey, filterValue, sortOrder, success, error);
				}
			}

			function cellClick2 (e) {
				var uiConfId = e.currentTarget.cells[0].textContent;
				writeLog('Clicked uiConf: ', uiConfId);
				$('#playercontainer').html(
						'<object style="float:left;margin-right:25px;" id="kaltura_player" name="kaltura_player"' + 
							'type="application/x-shockwave-flash" allowFullScreen="true" allowNetworking="all"' +  
							'allowScriptAccess="always" height="330" width="400"' +  
							'data="http://www.kaltura.com/index.php/kwidget/cache_st/1266281114/wid/_7463/uiconf_id/'+uiConfId+'/">' + 
							'<param name="allowFullScreen" value="true" />' +
							'<param name="allowNetworking" value="all" />' +
							'<param name="allowScriptAccess" value="always" />' +
							'<param name="bgcolor" value="#000000" />' +
							'<param name="flashVars" value="&externalInterfaceDisabled=false&autoPlay=true&entryId='+selectedEntryId+'" />' +
							'<param name="movie" value="http://www.kaltura.com/index.php/kwidget/cache_st/1266281114/wid/_7463/uiconf_id/'+uiConfId+'/" />' +
						'</object>');
			}
			
		</script>
		<h2 style="color:#3300DD;">Kaltura JavaScript API Client Library playground</h2>
		This is a sample usage of the Kaltura JavaScript client library.<br />
		To use the JS client library in production, it is recommended that the KS (Kaltura Session) will be generated at the server side.<br /><br />
		Enter your partner id and admin secret below and click "Start" to test the client:<br /><br />
		<strong><label for="adminsecret">Partner ID: </label></strong><input type="text" id="partnerid" value=""></input><br />
		<strong><label for="adminsecret">Admin Secret: </label></strong><input type="text" id="adminsecret" value=""></input><br />
		<button style="float:left;" onclick="startSession();return false;">Start</button><img id="loadericon" style="display:none;" src="load.gif"/>
		<div style="clear:both"></div>
		<div id="applicationdiv" style="display:none;">	
			<div id="selectEntryDetails">
				<h3 style="text-decoration: underline;">Selected Entry Details:</h3>
				<strong><label for="selectedEntryId">Entry Id:</label></strong><span id="selectedEntryId"></span><br />
				<strong><label for="selectedEntryName">Entry Name:</label></strong><span id="selectedEntryName"></span><br />
				<strong><label for="selectedEntryTags">Tags:</label></strong><span id="selectedEntryTags"></span><br />
				<strong><label for="selectedEntryThumbnail">Thumbnail:</label></strong><span id="selectedEntryThumbnail"></span>
			</div>
		
			<div style="float:left;width:410px;" id="wrapper" name="wrapper">
				<div id="playercontainer" name="playercontainer">
					<object style="margin-right:25px;" id="kaltura_player" name="kaltura_player" 
						type="application/x-shockwave-flash" allowFullScreen="true" allowNetworking="all" 
						allowScriptAccess="always" height="330" width="400" 
						data="http://www.kaltura.com/index.php/kwidget/cache_st/1266281114/wid/_7463/uiconf_id/48501/">
						<param name="allowFullScreen" value="true" />
						<param name="allowNetworking" value="all" />
						<param name="allowScriptAccess" value="always" />
						<param name="bgcolor" value="#000000" />
						<param name="flashVars" value="&externalInterfaceDisabled=false&autoPlay=true&entryId=bnmdraxxu0" />
						<param name="movie" value="http://www.kaltura.com/index.php/kwidget/cache_st/1266281114/wid/_7463/uiconf_id/48501/" />
					</object>
				</div>
				<div style="width:410px;height: 500px;"></div>
			</div>
			<table id="flex1" style="display:none"></table>
			<table id="flex2" style="display:none"></table>
			<script type="text/javascript">
				var flexirep = $("#flex1").flexigrid
				({
					dataType: 'json',
					url: 'a',
					colModel : [
						{display: 'Id', name : 'id', sortable : false, align: 'center', width:'80'},
						{display: 'Name', name : 'name', sortable : true, align: 'center', width:'160'},
						{display: 'Tags', name : 'tags', sortable : false, align: 'center', width:'120'},
						{display: 'Thumbnail', name : 'thumbnailUrl', sortable : false, align: 'center', width:'200'}
						],
					searchitems : [
						{display: 'Id', name : 'idIn'},
						{display: 'Name', name : 'nameLike'},
						{display: 'Entry Type', name : 'typeEqual', isdefault: true}
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
					getDataProvider: getDataProvider,
					singleSelect: true,
					cellClick: cellClick
				});	
			</script>
			<script type="text/javascript">
				var flexirep2 = $("#flex2").flexigrid
				({
					dataType: 'json',
					url: 'a',
					colModel : [
						{display: 'Id', name : 'id', sortable : false, align: 'center', width:'80'},
						{display: 'Name', name : 'name', sortable : true, align: 'center', width:'160'},
						{display: 'Width', name : 'width', sortable : false, align: 'center', width:'120'},
						{display: 'Height', name : 'height', sortable : false, align: 'center', width:'120'},
						{display: 'Tags', name : 'tags', sortable : false, align: 'center', width:'200'}
						],
					searchitems : [
						{display: 'Id', name : 'idIn'},
						{display: 'Name', name : 'nameLike', isdefault: true}
						],
					sortname: "name",
					sortorder: "asc",
					usepager: true,
					showTableToggleBtn: true,
					title: 'Widgets',
					useRp: false,
					rp: 10,
					width: 700,
					height: 200,
					getDataProvider: getDataProvider2,
					singleSelect: true,
					cellClick: cellClick2
				});	
			</script>
		</div>
	</body>
</html>