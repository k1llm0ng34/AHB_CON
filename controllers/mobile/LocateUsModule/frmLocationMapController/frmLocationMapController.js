define({
  timerCounter : 0,
  isFromBack : false,
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  frmLocationPreshow: function () {
    
    this.isFromBack = true;
    this.setFlowActions();
    this.hideFlxInfo();
	this.view.AlertPopup.setVisibility(false);
    this.setPreshowData();
    var LocateUs = applicationManager.getLoggerManager();                       
    LocateUs.setCustomMetrics(this, false, "Locations");
    var navManager = applicationManager.getNavigationManager();
	var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  setPreshowData: function () {
        this.view.customSearch.tbxSearch.text = "";
   
    this.view.lblSeparator.setVisibility(false);
    this.view.flxMap.setVisibility(true);
    this.view.flxCurrentLocation.setVisibility(true);
 //   this.view.flxFilters.isVisible = false;
  //  this.view.flxMapButtons.setVisibility(true);
    this.view.customSearch.tbxSearch.skin = "sknAHBTbxSearchRounded22pxBffffff";
    this.view.customSearch.tbxSearch.focusSkin = "sknAHBTbxSearchRounded22pxBffffff";
    this.view.customSearch.tbxSearch.placeholderSkin = "sknAHBTbxSearchRounded22pxBffffff";
    this.view.flxBranchesList.setVisibility(false);
    this.view.btnView.text = kony.i18n.getLocalizedString("kony.mb.Location.ListView");
    
    this.view.flxDetailsMain.isVisible = false;
  },
  setFlowActions: function () {
    var scopeObj = this;
    //     this.view.flxMainContainer.onClick = function() {
    //       scopeObj.hideFlxInfo();
    //     };
    this.view.btnDriveme.onClick = function(){
      scopeObj.navigateToMaps();
    };
    this.view.MainHeader.flxBack.onClick = function(){
      var listView = kony.i18n.getLocalizedString("kony.mb.Location.ListView");
            if (scopeObj.view.btnView.text === listView) {
                scopeObj.navigateBack();
            } else {
                scopeObj.setPreshowData();
    }
    };
        this.view.MainHeader.flxBack.btnBack.onClick = function(){
           var listView = kony.i18n.getLocalizedString("kony.mb.Location.ListView");
            if (scopeObj.view.btnView.text === listView) {
                scopeObj.navigateBack();
            } else {
                scopeObj.setPreshowData();
            }
        };

    this.view.segBranchList.onRowClick = function() {
      scopeObj.setPreshowData();
      scopeObj.setListToMapUI(scopeObj.view.segBranchList.selectedItems[0])
      
    };
    this.view.imgCancel.onTouchEnd = function(){
      scopeObj.onCancelClick();
    };
    //     this.view.flxMap.onClick=function(){
    //       scopeObj.hideFlxInfo(); 
    //     };
    //     this.view.customSearch.tbxSearch.onTouchEnd = function () {
    //       if(kony.os.deviceInfo().name === "iPhone"){
    //         scopeObj.view.flxHeaderAndSearch.isVisible = false;
    //         scopeObj.view.flxHeaderSearchbox.isVisible = true;
    //         scopeObj.view.flxHeaderSearchbox.top="0dp";
    //         scopeObj.view.customSearchbox.tbxSearch.text = scopeObj.view.customSearch.tbxSearch.text;
    //         scopeObj.view.customSearch.tbxSearch.setFocus(false);
    //         scopeObj.view.customSearchbox.tbxSearch.setFocus(true);
    //       }
    //       if(kony.os.deviceInfo().name !== "iPhone"){
    //         scopeObj.view.flxHeaderAndSearch.isVisible = false;
    //         scopeObj.view.flxHeaderSearchbox.isVisible = true;
    //         scopeObj.view.flxHeaderSearchbox.top="0dp";
    //         scopeObj.view.customSearchbox.tbxSearch.text = scopeObj.view.customSearch.tbxSearch.text;
    // 		scopeObj.view.customSearch.tbxSearch.setEnabled(false);
    //         scopeObj.view.customSearch.tbxSearch.setFocus(false);
    //         scopeObj.view.customSearchbox.tbxSearch.setEnabled(true);
    //         scopeObj.view.customSearchbox.tbxSearch.setFocus(true);
    //       }
    //       scopeObj.view.forceLayout();
    //     };
    
        this.view.customSearch.tbxSearch.onDone = function(){
          scopeObj.onSearch(scopeObj.view.customSearch.tbxSearch.text);
        };

    this.view.flxCurrentLocation.onClick = function(){
      scopeObj.onClickOfCurrentLocation();
    };
    this.view.mapLocation.onPinClick = function (mapId,response) {
      scopeObj.onPinClickHandler(mapId,response);
      
    };

  
    this.view.btnView.onClick = function () {
      var listView = kony.i18n.getLocalizedString("kony.mb.Location.ListView");
      if (scopeObj.view.btnView.text === listView) {
        scopeObj.view.lblSeparator.setVisibility(true);
        scopeObj.showListView();
      } else{
        scopeObj.setPreshowData();
      }
    };
    this.view.flxBtnFilters.onClick = function () {
      scopeObj.showFilters();
    };
    this.view.flxFilterClose.onClick = function () {
      scopeObj.view.flxFilters.setVisibility(false);
    };
    this.view.btnApply.onClick = function () {
      //scopeObj.setPreshowData();
      scopeObj.onApplyFilter();
    };
    var self = this.view;
    this.view.segServicesFilter.onRowClick = function(){
      
      var rowNumber = self.segServicesFilter.selectedRowIndex[1];
      var indices = self.segServicesFilter.selectedRowIndices;
      scopeObj.onRowClickOfSegServicesFilter(indices,rowNumber);
    //   var rowNumber = self.segServicesFilter.selectedRowIndex[1];
    //   var indices = self.segServicesFilter.selectedRowIndices;
    //   scopeObj.onRowClickOfSegServicesFilter(indices,rowNumber);
    };
  },

  navigateToMaps:function(){
    if(sourcelatitude && sourcelongitude && destinationlatitude && destinationlongitude){
    kony.application.openURL("https://www.google.com/maps/dir/?api=1&origin=" + sourcelatitude + "," + sourcelongitude + "&destination=" + destinationlatitude + "," + destinationlongitude);
    }   
  },
  showFullDirections: function () {
    this.view.customSearch.lblLocateUs.text = "GET DIRECTIONS";
    this.view.flxDummy2.setVisibility(true);
    this.view.imgDirections.src = "carddown.png";
    this.view.flxBranchesList.setVisibility(false);
    if(kony.os.deviceInfo().name !== "iPhone"){
        this.view.flxDirections.top = "40dp";
    }
    else{
      this.view.flxDirections.top = "0dp";
     }
    this.view.flxDirections.bottom="0dp"; 
    this.view.flxDirections.setVisibility(true);
    this.view.flxHeaderAndSearch.height = "40dp";
    this.view.flxMapButtons.setVisibility(false);
  },
  showgetDirections: function () {
    this.hideAll();
    this.view.customSearch.lblLocateUs.text = "GET DIRECTIONS";
    this.view.flxHeaderAndSearch.setVisibility(true);
    this.view.flxMap.setVisibility(true);
    this.view.flxDirections.top = "81%";
    this.view.flxDirections.bottom="-70%";
    this.view.imgDirections.src = "cardup.png";
    this.view.flxDirections.setVisibility(true);
    this.view.flxHeaderAndSearch.height = "40dp";
    this.view.flxCurrentLocation.isVisible = false;
    this.view.forceLayout();
  },
  showListView: function () {
    //this.view.imgListView.src = "mapviewicon.png";
    this.view.btnView.text = kony.i18n.getLocalizedString("kony.ahb.settings.mapView");
    this.view.customSearch.tbxSearch.skin = "sknAHBTbx16pt858886";
    this.view.customSearch.tbxSearch.focusSkin = "sknAHBTbx16pt858886";
   	this.view.customSearch.tbxSearch.placeholderSkin = "sknAHBTbx16pt858886";
    //this.view.flxMapButtons.setVisibility(true);
  //  this.view.flxHeaderSearchbox.setVisibility(false);
   // this.view.flxHeaderAndSearch.setVisibility(true);
   // this.setBranchListData();
   // this.view.flxMapButtons.bottom = "6%";
   // this.view.flxBranchesList.top = "95dp";
    this.view.flxBranchesList.setVisibility(true);
    this.view.flxMap.isVisible = false;
    this.readDataFromNavigatorAndPresentView();
  },
  onCancelClick:function(){
    this.view.flxInfo.setVisibility(false);
    var locData = this.getSelectedPinDetails();
        
        var latLongObj = {};
        latLongObj.lat = locData.lat;
        latLongObj.lon = locData.lon;
        latLongObj.image = locData.locImages.unselectImg;
        this.navigateToGivenLocation(latLongObj);
  },

  showFilters: function () {
    this.view.flxFilters.setVisibility(true);
    //this.setShowFilterData();
    applicationManager.getPresentationUtility().showLoadingScreen();
    this.setDataToServices();
    this.setDataToShow();
    this.setDataToRange();
    this.view.flxFilters.setVisibility(true);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  showFullDetails: function () {
    this.view.flxMapButtons.setVisibility(false);
    this.view.flxDummy.setVisibility(true);
    this.view.flxHeaderAndSearch.height = "40dp"
    this.view.flxDetails.setVisibility(true);
    if(kony.os.deviceInfo().name !== "iPhone"){
    	this.view.flxDetails.top = "40dp";
    }
    else{
    	this.view.flxDetails.top = "0dp";
    }
    this.view.flxDetails.bottom="0dp"
    this.view.imgDetails.src = "carddown.png";
    //this.setOperationalHoursData();
    //this.setServicesData();
  },
//   setGesture: function () {
//     var scopeObj = this;
//     this.view.flxDirections.setGestureRecognizer(constants.GESTURE_TYPE_SWIPE, {
//       fingers: 1
//     },
//     function (widgetRef, gestureInfo) {
//       if (gestureInfo.swipeDirection === 3) {
//         scopeObj.animateFlxUp();
//       } else if (gestureInfo.swipeDirection === 4) {
//         scopeObj.animateFlxDown();
//       }
//     }.bind(this));
//   },
//   animateFlxUp: function () {
//     var flx;
//     if (this.view.flxDetails.isVisible)
//       flx = this.view.flxDetails;
//     else if (this.view.flxDirections.isVisible)
//       flx = this.view.flxDirections;
//     else flx = null;
//     if (flx !== null) {
//       flx.animate(
//         kony.ui.createAnimation({
//           "100": {
//             "top": "7%",
//             "stepConfig": {
//               "timingFunction": kony.anim.EASE
//             },
//             "rectified": true
//           }
//         }), {
//           "delay": 0,
//           "iterationCount": 1,
//           "fillMode": kony.anim.FILL_MODE_FORWARDS,
//           "duration": 0.5
//         }, {});
//       if (this.view.flxDetails.isVisible)
//         this.showFullDetails();
//       else if (this.view.flxDirections.isVisible)
//         this.showFullDirections();
//     }
//   },
//   animateFlxDown: function () {
//     var flx;
//     if (this.view.flxDetails.isVisible)
//       flx = this.view.flxDetails;
//     else if (this.view.flxDirections.isVisible)
//       flx = this.view.flxDirections;
//     else flx = null;
//     if (flx !== null) {
//       flx.animate(
//         kony.ui.createAnimation({
//           "100": {
//             "top": "81%",
//             "stepConfig": {
//               "timingFunction": kony.anim.EASE
//             },
//             "rectified": true
//           }
//         }), {
//           "delay": 0,
//           "iterationCount": 1,
//           "fillMode": kony.anim.FILL_MODE_FORWARDS,
//           "duration": 0.5
//         }, {});

//       if (this.view.flxDetails.isVisible)
//         this.showSelectedLocation();
//       else if (this.view.flxDirections.isVisible)
//         this.showgetDirections();
//     }
//   },
  
  bindLocations : function(navigationData){
    var isUserLoggedIn = navigationData.isUserLoggedIn;
    var data = navigationData.data;
    this.setPreshowData();
    this.enableOrDisableHamburger(isUserLoggedIn);
    this.setDataToMapView(data);
    this.setDataToListSegView(data);
  },
  readDataFromNavigatorAndPresentView : function(){
    var navigationManager = applicationManager.getNavigationManager();
    var navigationData = navigationManager.getCustomInfo("frmLocationMap");
    var isUserLoggedIn = navigationData.isUserLoggedIn;
    var data = navigationData.data;
    //this.enableOrDisableHamburger(isUserLoggedIn);
    this.setDataToMapView(data);
    this.setDataToListSegView(data);
  },

  hideFlxInfo:function(){
    kony.print("flxInfoHide");
    this.view.flxInfo.setVisibility(false);
  },

  enableOrDisableHamburger :function(isUserLoggedIn){
    isUserLoggedIn = false;
    if(isUserLoggedIn){
      this.view.customSearch.flxBack.imgBack.src = "hamburger.png";
      var configManager = applicationManager.getConfigurationManager(); 
      var MenuHandler =  applicationManager.getMenuHandler();
      MenuHandler.setUpHamburgerForForm(this,configManager.constants.MENULOCATE);
      if(kony.os.deviceInfo().name === "iPhone"){
        this.view.flxMap.bottom = "60dp";
      }
      else{
        this.view.flxMap.bottom = "0dp";
        //this.view.flxFooter.isVisible = false;
      }
    }else{
      var scope = this;
      //this.view.flxFooter.isVisible = false;
      this.view.flxMap.bottom = "0dp";
      this.view.customSearch.flxBack.imgBack.src = "backbutton.png";
      this.view.customSearch.flxBack.onClick = function(){
        scope.navigateBack();
      };
    }
  },
  navigateBack : function(){
    var navManager = applicationManager.getNavigationManager();
    navManager.goBack();
  },
  setDataToMapView:function(data){
    try{
      
      if(data && data.length >0){
        var locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
        var zoomLevel = locateUsModule.presentationController.getMapZoomLevel();  
        this.oldLocationData = data;
        this.setDataToMapViewHelper(data,zoomLevel);
      }
      else{
        this.view.mapLocation.locationData=[];
      }
      
    }catch(err){
      kony.print(err+JSON.stringify(err));
    }
  },
  
  setDataToMapViewHelper : function(data,zoomLevel){
    this.view.mapLocation.zoomLevel = 15;
        this.view.mapLocation.locationData=data;
        this.view.forceLayout();
       // this.navigateToFirstLocationInMap();
  },
  
  setDataToListSegView : function(data){
    try{
      
      if(data && data.length > 0){
        this.view.segBranchList.widgetDataMap = {
          imgBank : "listViewImage",
          lblName : "name",
          lblAddress : "desc",
          lblSatus : "listViewStatus"		  
        };
        this.view.segBranchList.setData(data.slice(0,-1));
        
      }
    }catch(err){
      kony.print(err+JSON.stringify(err));
    }
  },
  
  noRecordsFound:function(){
  
    this.view.lblNoRecords.setVisibility(true);
   // this.onClickOfCurrentLocation();
},
  
  navigateToFirstLocationInMap : function(){
    this.view.mapLocation.navigateTo(0,false);
  },
  
  onListViewRowClickHandler : function(locationDetails){
    //this.getLocationDetails(locationDetails);
    this.getDirections(locationDetails);
  },
  
  getLocationDetails : function(selectedLocation){
    var locationId = selectedLocation.locationId;
    var locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
    locateUsModule.presentationController.getLocationDetails(locationId,selectedLocation);
  },
  
  onSearch : function(searchStr){
    this.view.flxInfo.setVisibility(false);
    if(searchStr === null || searchStr === undefined || searchStr === ""){
      return;
    }
    this.searchString = "";
    this.searchString = searchStr.trim();
    var locationsObj={}
    var locDetails = this.view.mapLocation.locationData;
        
        locationsObj.latitude = locDetails.latitude;
        locationsObj.longitude = locDetails.longitude;
    locationsObj.searchString=this.searchString;
    var locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
    locateUsModule.presentationController.getNearByLocations(locationsObj);
  },
  
  searchLocationsSuccess : function(data){
    var locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
    var processedData = locateUsModule.presentationController.ProcessDataForView(data);
    var state = locateUsModule.presentationController.getMapState();
    //this.setPreshowData();
    if(state === locateUsModule.presentationController.SEARCH || state === locateUsModule.presentationController.SEARCH_FILTER){
      this.view.customSearch.tbxSearch.text = this.searchString;
    }
    this.setDataToMapView(processedData);
    this.setDataToListSegView(processedData);
  },
  
  bindError : function(err){
    applicationManager.getDataProcessorUtility().showToastMessageError(this,err);
  },
  
  setDataToServices : function(){
    var locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
    var mapState = locateUsModule.presentationController.getMapState();
    if(mapState === locateUsModule.presentationController.CURRENTLOCATION_FILTER || mapState === locateUsModule.presentationController.SEARCH_FILTER){
      /* if form is already in filtered state(if filter already applied) then preserve the filter data*/
      this.setSelectedDataToServices();
      return;
    }
    var self = this;
    var services = this.getServicesMasterData();
    var data = [];
    var dataMap = {
      "flxCheckbox": "flxCheckbox",
      "flxRange": "flxRange",
      "imgCheckbox": "imgCheckbox",
      "lblRange": "lblRange",
      "lblSeparator": "lblSeparator",
    };
    var defaultSelectedRowIndices = [];
    for(var i=0;i<services.length;i++){
      defaultSelectedRowIndices.push(i);
      var dataElement = {
        "imgCheckbox": {
          "src": "radiobuttonactive.png"
        },
        "lblRange":services[i],
        "lblSeparator": ".",
        "flxCheckbox": {
          onClick: function () {
            //self.toggleCheckbox(self.view.segServicesFilter.id);
          }
        },
        "template": "flxRange"
      };
      data.push(dataElement);
    }

    this.view.segServicesFilter.widgetDataMap = dataMap;
    this.view.segServicesFilter.setData(data);
    this.view.segServicesFilter.selectedRowIndices = [[0,defaultSelectedRowIndices]];
    this.view.forceLayout();
  },
  
  
  setSelectedDataToServices : function(){
    var selectedServices = this.selectedServices;
    this.view.segServicesFilter.selectedRowIndices = selectedServices;
    this.view.forceLayout();
  },

  /**
  *this function preserves the range selection segment in filter
  */
  setSelectedDataToRange : function(){
    var selectedRange = this.selectedRange;
    this.view.segSelectSearchRange.selectedRowIndices = selectedRange;
    this.view.forceLayout();
  },
  
  
   /**
  * it send the master data for range selection segment
  */
  getServicesMasterData : function(){
    var services = [
      "All",
      "Make an Appointment",
      "On-site Relationship Manager",
      "Home Loan Specialists",
      "Financial Advisors",
      "Investment Services",
      "Foreign Currency Exchange",
      "Retail Branch",
      "Wealth Branch",
      "Business Banking",
      "International Banking Center",
      "Commercial Deposits",
      "Night Deposits",
      "Safe Deposit Box",
      "Handicap Access",
      "ATM - Full Service",
      "ATM - Cash withdrawal Only",
      "ATM - Check Deposits",
      "ATM - Cash Deposits",
      "ATM - Cardless Cash Withdrawal",
      "ATM - Drive Up"
    ];
    return services;
  },
  
  setDataToShow : function(){
    var locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
    var mapState = locateUsModule.presentationController.getMapState();
    if(mapState === locateUsModule.presentationController.CURRENTLOCATION_FILTER || mapState === locateUsModule.presentationController.SEARCH_FILTER){
      this.view.segShow.selectedRowIndices = this.selectedType;
      return;
    }
    else{
      this.view.segShow.selectedRowIndices = [[0,[2]]];
    }
  },
  
  
  /**
  * it will assign the master data of range to segment
  */
  setDataToRange : function(){
    var locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
    var mapState = locateUsModule.presentationController.getMapState();
    if(mapState === locateUsModule.presentationController.CURRENTLOCATION_FILTER || mapState === locateUsModule.presentationController.SEARCH_FILTER){
      this.setSelectedDataToRange();
      return;
    }
    var rangeData = this.getRangeMasterData();
    var self = this;
    var dataMap = {
      "flxCheckbox": "flxCheckbox",
      "flxRange": "flxRange",
      "imgCheckbox": "imgCheckbox",
      "lblRange": "lblRange",
      "lblSeparator": "lblSeparator",
    };
    var data = [];
    for(var i=0;i<rangeData.length;i++){
      var dataElt = {
        "imgCheckbox": {
          "src": "radiobuttonactive.png"
        },
        "lblRange": rangeData[i],
        "lblSeparator": ".",
        "flxCheckbox": {
          onClick: function () {
            //self.toggleCheckbox(self.view.segSelectSearchRange.id);
          }
        },
        "template": "flxRange"
      };
      data.push(dataElt);
    }

    this.view.segSelectSearchRange.onRowClick = function(){
      // self.toggleCheckbox(self.view.segSelectSearchRange.id);
    };
    this.view.segSelectSearchRange.widgetDataMap = dataMap;
    this.view.segSelectSearchRange.setData(data);
    this.view.segSelectSearchRange.selectedRowIndices = [[0,[0]]];
    this.view.forceLayout();
  },
  
  
   /**
  * it send the master data for range selection segment
  */
  getRangeMasterData : function(){
    var data = ["5 Miles","10 Miles","25 Miles","50 Miles","100 Miles"];
    return data;
  },
 
   /**
  * it send the mapper for services
  */
  getServicesMasterDataMapper : function(){
    var mapper = {
      "All" : "All",
      "Make an Appointment" : "",
      "On-site Relationship Manager" : "",
      "Home Loan Specialists" : "finance",
      "Financial Advisors" : "finance",
      "Investment Services" : "",
      "Foreign Currency Exchange" : "finance",
      "Retail Branch" : "bank",
      "Wealth Branch" : "",
      "Business Banking" : "bank",
      "International Banking Center" : "bank",
      "Commercial Deposits" : "bank",
      "Night Deposits" : "bank",
      "Safe Deposit Box" : "bank",
      "Handicap Access" : "",
      "ATM - Full Service" : "atm",
      "ATM - Cash withdrawal Only" : "atm",
      "ATM - Check Deposits" : "atm",
      "ATM - Cash Deposits" : "atm",
      "ATM - Cardless Cash Withdrawal" : "atm",
      "ATM - Drive Up" : "atm"
    };
    return mapper;
  },
  
  
  /**
  *it calls the presentation controller method to filter the locations with selected services
  */
  applyFilterToData : function(data){
    var selectedType = this.view.segShow.selectedRowIndices[0][1];
    var locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
    var selectedServices = this.view.segServicesFilter.selectedRowIndices[0][1];
    var mappedSelectedServices = this.getMappedSelectedServices(selectedServices);
    var i18n_noResults = applicationManager.getPresentationUtility().getStringFromi18n("i18n.maps.NoResultsFound","No Results Found");
    if(mappedSelectedServices === null || mappedSelectedServices.length === 0){
      this.bindGenericError(i18n_noResults);
      return;
    }
    var type = this.getSegShowMapper(selectedType[0]);
    var filteredData = locateUsModule.presentationController.filterLocationsWithServices(data,mappedSelectedServices,type);
    if(filteredData.length > 0){
      this.setFilteredDataToView(filteredData);
    }else{
      this.bindGenericError(i18n_noResults);
    }
  },

   /**
  *it maps the view segment selected services to backed services with mapper
  */
  getMappedSelectedServices : function(serviceIndexes){
    var mapper = this.getServicesMasterDataMapper();
    var services = this.getServicesMasterData();
    var result = [];
    for(var i=0;i<serviceIndexes.length;i++){
      var mapedElt = mapper[services[serviceIndexes[i]]];
      if(mapedElt !== null && mapedElt !== undefined)
        result.push(mapedElt);
    }
    return result;
  },

  /**
  *it will set the filtered data to view
  */
  setFilteredDataToView : function(data){
    var locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
    var processedData = locateUsModule.presentationController.ProcessDataForView(data);
    var state = locateUsModule.presentationController.getMapState();
    this.setPreshowData();
    this.setDataToMapView(processedData);
    this.setDataToListSegView(processedData);
    if(state === locateUsModule.presentationController.SEARCH || state === locateUsModule.presentationController.SEARCH_FILTER){
      this.view.customSearch.tbxSearch.text = this.searchString;
    }
  },
  
   getSegShowMapper : function(number){
    if(number === 0){
      return "branch";
    }
    if(number === 1){
      return "atm";
    }
    if(number === 2){
      return "both";
    }
  },
  
   /**
  *on click of filter it call presentation method to make a service call with range
  */
  onApplyFilter : function(){
    this.selectedType = this.view.segShow.selectedRowIndices;
    this.selectedServices = this.view.segServicesFilter.selectedRowIndices;
    this.selectedRange = this.view.segSelectSearchRange.selectedRowIndices;
    if(this.selectedServices === null || this.selectedRange === null){
      var i18nErrmsg = applicationManager.getPresentationUtility().getStringFromi18n("i18n.maps.selectService","Please select a service.");
      this.bindError(i18nErrmsg);
      return;
    }
    var range = this.getSelectedRangeData();
    applicationManager.getPresentationUtility().showLoadingScreen();
    var locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
    var polylineData = locateUsModule.presentationController.getLocationsNearFirstLocationWithRange(range);
  },

  /**
  *it returns the selected range in filter Ex: 5
  */
  getSelectedRangeData : function(){
    var filterRange = this.view.segSelectSearchRange.selectedRowIndices;
    var index = filterRange[0][1][0];
    var data = this.getRangeMasterData()[index].split(" ");
    return data[0];
  },
  
  bindGenericError : function(err){
    applicationManager.getDataProcessorUtility().showToastMessageError(this,err);
  },
  
  onRowClickOfSegServicesFilter : function(indices,rowNumber){
    if(indices === null){
      return;
    }
    if(rowNumber === 0){
      var keys = indices;
      var indexes = keys[0][1];
      if(indexes[0] === 0){
        var length = this.getServicesMasterData().length;
        var res = [];
        for(var i=0;i<length;i++){
          res.push(i);
        }
        this.view.segServicesFilter.selectedRowIndices = [[0,res]];
      }
      else{
        this.view.segServicesFilter.selectedRowIndices = null;
      }
      return;
    }
    if(rowNumber > 0){
      var selectedIndices = indices;
      var values = selectedIndices[0][1];
      if(values.indexOf(rowNumber) === -1){
        var resultVal = [];
        var j = 0;
        if(values[0] === 0 ){
          j = 1;
        }
        for(;j<values.length;j++){
          resultVal.push(values[j]);
        }
        this.view.segServicesFilter.selectedRowIndices = [[0,resultVal]];
      } 
    }
  },
  
  onClickOfCurrentLocation : function(){
    var scope = this;
    var locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
    var status = locateUsModule.presentationController.getMapState();
    if(status === locateUsModule.presentationController.CURRENTLOCATION || status == locateUsModule.presentationController.CURRENTLOCATION_FILTER){
      var latLongObj = {};
      latLongObj.lat = locateUsModule.presentationController.currentLatitude;
      latLongObj.lon = locateUsModule.presentationController.currentLongitude;
      latLongObj.image="current_location.png";
      scope.navigateToGivenLocation(latLongObj);
    }
    if(status === locateUsModule.presentationController.SEARCH || status === locateUsModule.presentationController.SEARCH_FILTER){
      scope.getLocationsNearBy();
    }
  },
  
  navigateToGivenLocation : function(latLongObj){
    var showDropPin = true;
//     //#ifdef android
//     showDropPin = false;
//     //#endif

    this.view.mapLocation.navigateToLocation({ lat: latLongObj.lat, 
                                              lon: latLongObj.lon,
                                              image:latLongObj.image,
                                              showcallout: false
                                             }, false, showDropPin);

  },
  
  getLocationsNearBy : function(){
    var scopeObj = this;
    var positionoptions = {
      timeout: 64000,
      fastestInterval: 0,
      minimumTime: 0
    };
    this.searchString = null;
    applicationManager.getPresentationUtility().showLoadingScreen();
    kony.location.getCurrentPosition(scopeObj.geoLocationSuccessCallBack.bind(scopeObj), scopeObj.geoLocationErrorCallBack.bind(scopeObj), positionoptions);
  },

  geoLocationSuccessCallBack: function(response) {
    try {
      var latitude, longitude;
      var latLongObj = {};
      if (response && response.coords && response.coords.latitude && response.coords.longitude) {
        latitude = response.coords.latitude;
        longitude = response.coords.longitude;
        latLongObj.latitude = latitude;
        latLongObj.longitude = longitude;
        var  locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
        locateUsModule.presentationController.getNearByLocations(latLongObj);
       
      }
    } catch (err) {
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    }
  },
  
  geoLocationErrorCallBack: function(err) {
    var scopeObj = this;
    var deviceUtilManager = applicationManager.getDeviceUtilManager();
    var isIphone = deviceUtilManager.isIPhone();
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if (err.code == 1) {
      var i18nKey = applicationManager.getPresentationUtility().getStringFromi18n("i18n.maps.locationPermissionDenied");
      scopeObj.bindGenericError(i18nKey);
    }
    if (err.code == 3 && !isIphone) {
      var i18n_timeOut = applicationManager.getPresentationUtility().getStringFromi18n("i18n.maps.locationTimeOut");
      scopeObj.bindGenericError(i18n_timeOut);
    }
    if (err.code == 2 && !isIphone) {
      var i18n_turnOnLocationAlert = applicationManager.getPresentationUtility().getStringFromi18n("i18n.maps.turnOnLocationAlert");
      kony.ui.Alert(i18n_turnOnLocationAlert, scopeObj.onClickSettingsOrCancelHandler.bind(scopeObj), constants.ALERT_TYPE_CONFIRMATION, "Cancel", "Settings", "");
    }
  },

  onClickSettingsOrCancelHandler: function(response) {
    if (response === false) {
      var  locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
      locateUsModule.presentationController.openLocationSettings();
    }
  },
  
   /**
  * Handling the on pin click of map
  */
  onPinClickHandler : function(mapId,locationDetails){
    
	if(locationDetails && locationDetails.image !== "current_location.png"){

      this.getMapPinIcon(locationDetails);
      this.selectedData = locationDetails;
      this.setDataToCalloutFlex(locationDetails);
      var latLongObj = {};
      var locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
//       latLongObj.latitude = locationDetails.lat;
//       latLongObj.longitude = locationDetails.lon;
     // this.navigateToGivenLocation(locationDetails);
      this.setSelectedPinDetails(locationDetails);
      this.onPinClickUI();      
    }
    //this.getLocationDetails(locationDetails);
    // }
  },
  
  setSelectedPinDetails:function(locDetails){
    selectedPinDetails = locDetails;
    
  },
  
  getSelectedPinDetails:function(){
    return selectedPinDetails; 
    
  },
  
   /*-----------------------------------------------------------------------------------

  Name: 	getMapPinIcon
  Purpose:To set the required focus image on click of pin
  Author: Fariha
  Date: 	11/12/2018
  Input:	{locationDetails} - the details obtained on click of a pin
  Return: None

  ------------------------------------------------------------------------------------*/

  getMapPinIcon : function(locationDetails){
    var locData = this.view.mapLocation.locationData;
        var latLongObj = {};
        var type = locationDetails.type;
        for (var i = 0; i < locData.length - 1; i++) {
            var data = locData[i];
            if (locData[i].hasOwnProperty("locImages")) {
                if (i == locationDetails.hIndex) {
                    var selectImg = locationDetails.locImages.selectImg;
                    data.image = locationDetails.locImages.selectImg;
                } else {
                    data.image = locData[i]["locImages"]["unselectImg"];
                }
            }
            locData[i] = data;
        }
        this.view.mapLocation.locationData = locData;

      latLongObj.lat = locationDetails.lat;
        latLongObj.lon = locationDetails.lon;
        latLongObj.image = selectImg;
        this.navigateToGivenLocation(latLongObj);
  },
  
  showLocationAlertPopUp:function(){
    this.view.AlertPopup.setVisibility(true);
    this.view.AlertPopup.lblMessage.text = kony.i18n.getLocalizedString("i18n.maps.locationPermissionDenied");
    
  },
  
  /*-----------------------------------------------------------------------------------

  Name: 	setListToMapUI
  Purpose:To set the required UI on row click of segBranchList
  Author: Fariha
  Date: 	17/12/2018
  Input:	{locationDetails} - the details obtained on click of a pin
  Return: None

  ------------------------------------------------------------------------------------*/
  
  setListToMapUI:function(locationDetails){
    
    this.view.flxInfo.setVisibility(true);
            var latLongObj = {};
            latLongObj.lat = locationDetails.lat;
        latLongObj.lon = locationDetails.lon;
        latLongObj.image = locationDetails.locImages.selectImg;
        this.navigateToGivenLocation(latLongObj);
            this.setDataToCalloutFlex(locationDetails);
    this.setSelectedPinDetails(locationDetails);
  },
  
  setDataToCalloutFlex : function(locationDetails){
    this.view.lblName.text = locationDetails.name;
//     this.view.lblStatus.text = locationDetails.calloutStatus.text;
//     this.view.lblStatus.skin = locationDetails.calloutStatus.skin;
    this.view.lblType.text = locationDetails.desc;
    this.view.lblAddress2.text = "";
    this.view.lblDistance.text = "";
    this.view.lblWorkingHours.text = locationDetails.workingHours;
    this.view.imgType.src = locationDetails.listViewImage;
    this.selectedLocation = locationDetails;
    var scope = this;
    //     this.view.flxDetailsMain.onClick = function(){
//       scope.onListViewRowClickHandler(locationDetails);
//     };
//     this.view.flxDetailsDirections.onClick = function(){
          scope.getDirections(locationDetails);
//     };
  },
  
  onPinClickUI : function(){
    this.view.flxInfo.setVisibility(true);
    // this.view.flxMapButtons.bottom="100dp";
//     this.view.flxMapButtons.animate(
//       kony.ui.createAnimation({
//         0: { bottom: "20dp", "stepConfig": {} },
//         100: { bottom: "100dp", "stepConfig": {} }
//       }),
//       { fillMode: kony.anim.FILL_MODE_FORWARDS, duration: 0.2 },
//       { animationEnd: function () {} });
//       this.view.flxDetailsMain.animate(
//         kony.ui.createAnimation({
//           0: { bottom: "-80dp", "stepConfig": {} },
//           100: { bottom: "0dp", "stepConfig": {} }
//         }),
//         { fillMode: kony.anim.FILL_MODE_FORWARDS, duration: 0.2 },
//         { animationEnd: function () {} });
  },
  
  getDirections : function(selectedLocationData){
    var scopeObj = this;
    //applicationManager.getPresentationUtility().showLoadingScreen();
    var source = {};
    var destination = {};
    //var selectedLocationData = scopeObj.selectedData;
    destinationlatitude = selectedLocationData.lat;
    destinationlongitude = selectedLocationData.lon;
    var positionoptions = {timeout:64000,fastestInterval:0,minimumTime : 0};
    var customInfo = {};
    customInfo.selectedLocation = selectedLocationData;
    customInfo.locationDetails = null;
    var navigationManager = applicationManager.getNavigationManager();
    navigationManager.setCustomInfo("frmLocationDetails",customInfo);
    kony.location.getCurrentPosition(success,failure,positionoptions);
    function success(response){
      if(response && response.coords && response.coords.latitude && response.coords.longitude){
        sourcelatitude = response.coords.latitude;
        sourcelongitude = response.coords.longitude;
        var navManager = applicationManager.getNavigationManager();
        navManager.setCustomInfo('LocationsCurrentForm','frmLocationMap');
        var locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
        //this.setDirections(source, destination);
        var mapView = kony.i18n.getLocalizedString("kony.ahb.settings.mapView");
        if (scopeObj.view.btnView.text === mapView) {
          scopeObj.navigateToMaps();
        } 
      }
    }
    function failure(error){
      scopeObj.geoLocationErrorCallBack(error);
      //applicationManager.getPresentationUtility().dismissLoadingScreen();
    }
  },
  
  
});