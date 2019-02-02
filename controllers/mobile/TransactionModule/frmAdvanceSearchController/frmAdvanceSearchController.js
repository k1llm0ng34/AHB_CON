define({
  advanceSearchOptions : {
    //     searchType : "Search",
    //     firstRecordNumber : "0",
    //     lastRecordNumber  : "24",
  },
  res : {},
  searchStartDate:null,
  searchEndDate:null,
  selectedTimeRangerow: null,

  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },

  preshow: function () {
    this.advanceSearchOptions = {
      //       searchType : "Search",
      //       firstRecordNumber : "0",
      //       lastRecordNumber  : "24",
    };
    this.intialData();
    this.initActions();
    //this.setTransactionTypeData();
    this.setTimeRangeData();
    this.studioActions();
    // these are specific length checks for Cheques. If this screen is used for some other purpose, pl. change the max length accordingly.
    this.view.txtAmountFrom.maxTextLength = 22;
    this.view.txtAmountTo.maxTextLength = 22;
    this.view.txtCheckNumbersFrom.maxTextLength = 16;
    this.view.txtCheckNumbersTo.maxTextLength = 16;
//     if(kony.os.deviceInfo().name !== "iPhone"){
//       this.view.flxHeader.isVisible = true;
//     }
//     else{
//       this.view.flxHeader.isVisible = false;
//     }
    this.view.imgStatus.src = "arrowdownahb.png";
    this.view.imgArrowTransactionType.src ="arrowdownahb.png";
    this.view.imgTimeRange.src = "arrowdownahb.png";
      
    this.view.flxAdvanceSearchWrapper.flxMainContainer.flxSearch.flxSearchMain.tbxSearch.text= "";
    this.view.flxMainContainer.flxFiltersMain.flxAmount.txtAmountFrom.text = "";
    this.view.flxMainContainer.flxFiltersMain.flxAmount.txtAmountTo.text  = "";
    this.view.flxMainContainer.flxFiltersMain.flxCheckNumbers.txtCheckNumbersFrom.text = "";
    this.view.flxMainContainer.flxFiltersMain.flxCheckNumbers.txtCheckNumbersTo.text = "";
    this.view.flxMainContainer.flxMerchant.txtMerchant.text = "";
    var navManager = applicationManager.getNavigationManager();
    this.advanceSearchOptions.status = "";
    var entryPoint = navManager.getEntryPoint("AdvanceSearch");
    if(entryPoint === "AHBStatements"){
    	this.setStatusData();
    	this.setTransactionTypeData();
    }

  },
  
/************************************************************************************
  Name: studioActions - contains all requires studio actions
  Author: Sindhu
  Date: 26/10/2018
  Input: None
  Return: None
*************************************************************************************/
  studioActions: function(){
    this.view.txtAmountFrom.onBeginEditing= this.highlightFromAmountSkin;
    this.view.txtAmountFrom.onEndEditing = this.defaultSkinFromAmountSkin;
    this.view.txtAmountTo.onBeginEditing = this.highlightToAmountSkin;
    this.view.txtAmountTo.onEndEditing = this.defaultSkinToAmountSkin;
    this.view.txtCheckNumbersFrom.onBeginEditing = this.highlightFromCheckNumberSkin;
    this.view.txtCheckNumbersFrom.onEndEditing = this.defaultFromCheckNumberSkin;
    this.view.txtCheckNumbersTo.onBeginEditing = this.highlightToCheckNumberSkin;
    this.view.txtCheckNumbersTo.onEndEditing = this.defaultToCheckNumberSkin;
  },
 
  /************************************************************************************
  Name: defaultSkinToAmountSkin - assigning default when focus is not there
  Author: Sindhu
  Date: 26/10/2018
  Input: widget name
  Return: required skin is assigned
*************************************************************************************/
  defaultSkinToAmountSkin: function(){
    this.view.flxAmount.flxAmountTo.flxSeparatorTo.skin = "sknFlxf1f1f1";
  },
  
  /************************************************************************************
  Name: highlightToAmountSkin - assigning highlight skin on focus
  Author: Sindhu
  Date: 26/10/2018
  Input: widget name
  Return: required skin is assigned
*************************************************************************************/
  highlightToAmountSkin: function(){
    this.view.flxAmount.flxAmountTo.flxSeparatorTo.skin = "sknAhbFlxff6d00";
  },

/************************************************************************************
  Name: highlightFromAmountSkin - assigning highlight skin on focus
  Author: Sindhu
  Date: 26/10/2018
  Input: widget name
  Return: required skin is assigned
*************************************************************************************/
  highlightFromAmountSkin: function(){
    this.view.flxAmountFrom.flxSeparator.skin = "sknAhbFlxff6d00";
  },
  
/************************************************************************************
  Name: defaultSkinFromAmountSkin - assigning default when focus is not there
  Author: Sindhu
  Date: 26/10/2018
  Input: widget name
  Return: required skin is assigned
*************************************************************************************/
  defaultSkinFromAmountSkin: function(){
    this.view.flxAmountFrom.flxSeparator.skin = "sknFlxf1f1f1";
  },

/************************************************************************************
  Name: highlightFromCheckNumberSkin - assigning highlight skin on focus
  Author: Sindhu
  Date: 26/10/2018
  Input: widget name
  Return: required skin is assigned
*************************************************************************************/
  highlightFromCheckNumberSkin: function(){
    this.view.flxSeparatorCheckNo.skin = "sknAhbFlxff6d00";
  },

/************************************************************************************
  Name: defaultFromCheckNumberSkin - assigning default when focus is not there
  Author: Sindhu
  Date: 26/10/2018
  Input: widget name
  Return: required skin is assigned
*************************************************************************************/  
  defaultFromCheckNumberSkin: function(){
    this.view.flxSeparatorCheckNo.skin = "sknFlxf1f1f1";
  },

/************************************************************************************
  Name: highlightToCheckNumberSkin - assigning highlight skin on focus
  Author: Sindhu
  Date: 26/10/2018
  Input: widget name
  Return: required skin is assigned
*************************************************************************************/
  highlightToCheckNumberSkin: function(){
    this.view.flxSeparatorCheckNoTo.skin = "sknAhbFlxff6d00";
  },

/************************************************************************************
  Name: defaultToCheckNumberSkin - assigning default when focus is not there
  Author: Sindhu
  Date: 26/10/2018
  Input: widget name
  Return: required skin is assigned
*************************************************************************************/
  defaultToCheckNumberSkin: function(){
    this.view.flxSeparatorCheckNoTo.skin = "sknFlxf1f1f1";
  },
  
  intialData:function(){
    var navManager = applicationManager.getNavigationManager();
    var CheckDepositFormFlag= navManager.getCustomInfo("CheckDepositForm");
    this.view.flxCustomDate.isVisible = false;
    this.view.flxTimeRangeValue.isVisible = false;
    this.view.calEndDate.dateComponents = [];
    this.view.calStartDate.clear();
    this.view.calStartDate.dateComponents = [];
    this.view.calEndDate.clear();
    this.view.txtAmountFrom.text="";
    this.view.txtAmountTo.text="";
    this.view.txtCheckNumbersFrom.text="";
    this.view.txtCheckNumbersTo.text="";
    this.view.txtMerchant.text="";
    this.advanceSearchOptions.fromDate =null;
    this.advanceSearchOptions.toDate =null;
    this.searchEndDate= null;
    this.selectedTimeRangerow=null;
    this.advanceSearchOptions= {};
    this.res= {};
    this.searchStartDate= null;
    var entryPoint = navManager.getEntryPoint("AdvanceSearch");
	 var accMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
     var statementData = accMod.presentationController.getStatementParamsData();
    if(entryPoint === "AHBStatements"){
      this.view.flxSearch.setVisibility(false);
      this.view.flxCheckNumbers.setVisibility(false);
      this.view.flxTransactionType.setVisibility(true);
      this.view.flxTimeRange.setVisibility(true);
      if(statementData.productType === "operativeAccounts"){
         this.view.flxStatus.setVisibility(true);
        this.view.flxTransactionType.top = "1.2%";
      }else{
        this.view.flxTransactionType.top = "4.8%";
        this.view.flxStatus.setVisibility(false);
      }
     
      this.view.flxAmount.setVisibility(true);
      this.view.flxCheckNumbers.setVisibility(false);
      this.view.flxMerchant.setVisibility(true);
      this.view.flxStatusValue.setVisibility(false);
      this.view.flxTransactionTypeValue.setVisibility(false);
      this.view.flxTimeRangeValue.setVisibility(false);
    }else if (entryPoint === "CheckDepositForm") {
      this.view.flxSearch.setVisibility(false);
      this.view.flxTransactionType.setVisibility(false);
      this.view.flxStatus.setVisibility(false);
      this.view.flxMerchant.setVisibility(false);
      this.view.flxStatusValue.setVisibility(false);
      this.view.flxTransactionTypeValue.setVisibility(false);
      this.view.flxCheckNumbers.setVisibility(true);
    }
    
    // Amount range default view
    this.view.flxAmountTo.isVisible = false;
    this.view.lblToTitleOne.isVisible = false;
    this.view.lblAddRangeTitleOne.text=kony.i18n.getLocalizedString("kony.mb.PFM.AddRange");
    
    // cheque default view
    this.view.flxCheckNumbersTo.isVisible = false;
    this.view.lblToTitleTwo.isVisible = false;
    this.view.lblAddRangeTitleTwo.text=kony.i18n.getLocalizedString("kony.mb.PFM.AddRange");
  },
  postShow: function(){
  },
  initActions: function () {
    var scope = this;
    //this.view.flxTransactionTypeWrapper.onClick = this.showTransactionType;
    this.view.flxTransactionType.onClick = this.showTransactionType;
    //this.view.imgArrowTransactionType.onTouchEnd = this.showTransactionType;
    
   	//this.view.flxTimeRangeWrapper.onClick = this.showTimeRange;
    this.view.flxTimeRange.onClick = this.showTimeRange;
    //this.view.imgTimeRange.onTouchEnd = this.showTimeRange;
    
    //	this.view.imgStatus.onTouchEnd = this.showStatus;
    //  this.view.flxStatusWrapper.onClick = this.showStatus;
    this.view.flxStatus.onClick = this.showStatus;
    
    //this.view.MainHeader.flxBack.onClick=this.navigateToBack();
    //this.view.MainHeader.btnBack.onClick=this.navigateToBackForm();
    this.view.flxAddRangeAmount.onClick = function(){
      //scope.toggleCheckbox(scope.view.imgCheckboxAmount);
      if(scope.view.flxAmountTo.isVisible === true){
        scope.view.flxAmountTo.isVisible=false;
        scope.view.lblToTitleOne.isVisible = false;
        scope.view.lblAddRangeTitleOne.text=kony.i18n.getLocalizedString("kony.mb.PFM.AddRange");

            }else{
                scope.view.flxAmountTo.isVisible=true;
                scope.view.lblToTitleOne.isVisible = true;
              scope.view.lblAddRangeTitleOne.text=kony.i18n.getLocalizedString("kony.ahb.PFM.RemoveRange");

            }
            scope.view.forceLayout();
        };
      this.view.segTransactionType.onRowClick = function(){
        var configManager = applicationManager.getConfigurationManager();
        if(scope.view.segTransactionType.data[scope.view.segTransactionType.selectedIndex[1]].lblName=== configManager.constants.Withdrawals){
          scope.advanceSearchOptions.searchTransactionType="Withdrawal";
        }
        if(scope.view.segTransactionType.data[scope.view.segTransactionType.selectedIndex[1]].lblName=== configManager.constants.Deposits){
          scope.advanceSearchOptions.searchTransactionType="Deposit";
        }
        if(scope.view.segTransactionType.data[scope.view.segTransactionType.selectedIndex[1]].lblName=== configManager.constants.P2PDebits){
          scope.advanceSearchOptions.searchTransactionType="P2PDebits";
        }
        if(scope.view.segTransactionType.data[scope.view.segTransactionType.selectedIndex[1]].lblName=== configManager.constants.BillPay){
          scope.advanceSearchOptions.searchTransactionType="BillPay";
        }
        if(scope.view.segTransactionType.data[scope.view.segTransactionType.selectedIndex[1]].lblName=== configManager.constants.Transfers){
          scope.advanceSearchOptions.searchTransactionType="Transfers";
        }
        if(scope.view.segTransactionType.data[scope.view.segTransactionType.selectedIndex[1]].lblName=== configManager.constants.Checks){
          scope.advanceSearchOptions.searchTransactionType="Checks";
        }
        if(scope.view.segTransactionType.data[scope.view.segTransactionType.selectedIndex[1]].lblName=== configManager.constants.P2PCredits){
          scope.advanceSearchOptions.searchTransactionType="P2PCredits";
        }
      if(scope.view.segTransactionType.data[scope.view.segTransactionType.selectedIndex[1]].lblName=== configManager.constants.CREDIT){
        scope.advanceSearchOptions.transactionType = "CR";
      }
      if(scope.view.segTransactionType.data[scope.view.segTransactionType.selectedIndex[1]].lblName=== configManager.constants.DEBIT){
        scope.advanceSearchOptions.transactionType = "DR";
      }
    };
    this.view.segStatus.onRowClick = this.setStatus;
        this.view.flxAddRangeCheckNumbers.onClick = function(){
             if(scope.view.flxCheckNumbersTo.isVisible == true){
                scope.view.flxCheckNumbersTo.isVisible=false;
                scope.view.lblToTitleTwo.isVisible = false;
               scope.view.lblAddRangeTitleTwo.text=kony.i18n.getLocalizedString("kony.mb.PFM.AddRange");

            }else{
                scope.view.flxCheckNumbersTo.isVisible=true;
                scope.view.lblToTitleTwo.isVisible = true;
              	scope.view.lblAddRangeTitleTwo.text=kony.i18n.getLocalizedString("kony.ahb.PFM.RemoveRange");

            }
            scope.view.forceLayout();
        };
        this.view.segTimeRange.onRowClick = function(){
      var lSelectedRow = scope.view.segTimeRange.selectedRowIndex[1];
    
		scope.view.calEndDate.dateComponents = [];
        scope.view.calStartDate.dateComponents = [];
        scope.searchEndDate= null;
        scope.searchStartDate= null;
          var configManager = applicationManager.getConfigurationManager();
          var transMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransactionModule");
      if(scope.view.segTimeRange.data[scope.view.segTimeRange.selectedIndex[1]].lblName===kony.i18n.getLocalizedString("kony.mb.AdvanceSearch.CustomRange") ){
            scope.view.flxCustomDate.isVisible = true;
            scope.view.forceLayout();
            scope.showTimeRange();
            var date = new Date();
            var endDate = [date.getDate(),date.getMonth()+1,date.getFullYear()];
            scope.validateDateWidget(endDate);
            scope.onCustomDateChange();
      }else if(scope.view.segTimeRange.data[scope.view.segTimeRange.selectedIndex[1]].lblName ===kony.i18n.getLocalizedString("kony.mb.AdvanceSearch.Last7days")){   
            scope. res=transMode.presentationController.getDateRange(7);
        searchStartDate=scope.res.searchStartDate.split(" ");
        searchEndDate=scope.res.searchEndDate.split(" ");
        scope.advanceSearchOptions.fromDate=searchStartDate[0];
        scope.advanceSearchOptions.toDate=searchEndDate[0];
      }else if(scope.view.segTimeRange.data[scope.view.segTimeRange.selectedIndex[1]].lblName===kony.i18n.getLocalizedString("kony.mb.AdvanceSearch.Last30days")){ 
        scope.res=transMode.presentationController.getDateRange(30);
        searchStartDate=scope.res.searchStartDate.split(" ");
        searchEndDate=scope.res.searchEndDate.split(" ");
        scope.advanceSearchOptions.fromDate=searchStartDate[0];
        scope.advanceSearchOptions.toDate=searchEndDate[0];
      }else if(scope.view.segTimeRange.data[scope.view.segTimeRange.selectedIndex[1]].lblName===kony.i18n.getLocalizedString("kony.mb.AdvanceSearch.Last60days")){ 
        scope.res = transMode.presentationController.getDateRange(60);
        searchStartDate=scope.res.searchStartDate.split(" ");
        searchEndDate=scope.res.searchEndDate.split(" ");
        scope.advanceSearchOptions.fromDate=searchStartDate[0];
        scope.advanceSearchOptions.toDate=searchEndDate[0];
      }else if(scope.view.segTimeRange.data[scope.view.segTimeRange.selectedIndex[1]].lblName===kony.i18n.getLocalizedString("kony.mb.AdvanceSearch.Any")){
        scope.advanceSearchOptions.fromDate = null;
        scope.advanceSearchOptions.toDate = null;
      }if(scope.view.segTimeRange.data[scope.view.segTimeRange.selectedIndex[1]].lblName!==kony.i18n.getLocalizedString("kony.mb.AdvanceSearch.CustomRange")){ 
        scope.view.flxCustomDate.isVisible = false;
        scope.view.forceLayout();    
        }
      
    };
    this.view.btnSearch.onClick = function(){
      var navManager = applicationManager.getNavigationManager();
      var entryPoint = navManager.getEntryPoint("AdvanceSearch");
      if(entryPoint === "AHBStatements"){
        scope.onClickSearchBtnStatementsFlow();
      }else{
        scope.onClickSearchBtnCheckFlow();
      }
    };
    
    this.view.customSearchbox.btnCancel.onClick = function(){
      scope.view.flxSearchResults.isVisible = false;
    };
    this.view.calStartDate.onSelection = function(){
      scope.customDateCount++;
      scope.view.calEndDate.validStartDate=[scope.view.calStartDate.dateComponents[0],scope.view.calStartDate.dateComponents[1],scope.view.calStartDate.dateComponents[2]];
      scope.onCustomDateChange();
    };
    this.view.calEndDate.onSelection = function(){
      scope.customDateCount++;
      scope.view.calStartDate.validEndDate=[scope.view.calEndDate.dateComponents[0],scope.view.calEndDate.dateComponents[1],scope.view.calEndDate.dateComponents[2]];
      scope.onCustomDateChange();
    };
  },
  onCustomDateChange : function(){
    var scope=this;
    var startDate=new Date(scope.view.calStartDate.dateComponents[2],scope.view.calStartDate.dateComponents[1]-1,scope.view.calStartDate.dateComponents[0]);
    var endDate = (scope.view.calEndDate.formattedDate === "")? (new Date()) : new Date(scope.view.calEndDate.dateComponents[2], scope.view.calEndDate.dateComponents[1] - 1, scope.view.calEndDate.dateComponents[0]);
    var transMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransactionModule"); 
    scope.res = transMode.presentationController.getCustomRange(startDate, endDate);       
    if(scope.res){
      searchStartDate=scope.res.searchStartDate.split(" ");
      searchEndDate=scope.res.searchEndDate.split(" ");
      scope.advanceSearchOptions.fromDate=searchStartDate[0];
      scope.advanceSearchOptions.toDate=searchEndDate[0];
    }
    else{
      scope.advanceSearchOptions.fromDate="";
      scope.advanceSearchOptions.toDate="";
    }
  },
    showTransactionType: function () {
        if(this.view.flxTransactionTypeValue.isVisible === true){
            this.view.flxTransactionTypeValue.isVisible = false;
            this.view.imgArrowTransactionType.src = "arrowdownahb.png";
        }else{
            this.view.flxTransactionTypeValue.isVisible = true;
            this.view.imgArrowTransactionType.src = "arrowupahb.png";
        }
        /*
        var scope = this;
        var heightValue;
        if (this.view.flxTransactionTypeValue.height === "0dp") {
            heightValue = "preferred";
        } else {
            heightValue = "0dp";
        }

        this.view.flxTransactionTypeValue.animate(
            kony.ui.createAnimation({
                "100": {
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "height": heightValue
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.25
            }, {
                "animationEnd": function () {
                    if (heightValue === "0dp") {
                        scope.view.imgArrowTransactionType.src = "arrowdown.png";
                    } else {
                        scope.view.imgArrowTransactionType.src = "arrowup.png";
                    }
                    scope.view.forceLayout();
                }
            });*/
    },
    toggleCheckbox : function(obj){
        if(obj.src === "remeberme.png")
          obj.src = "remembermetick.png";
        else
          obj.src = "remeberme.png";
        this.view.forceLayout();
    },
    showTimeRange: function () {
        if(this.view.flxTimeRangeValue.isVisible == true){
            this.view.flxTimeRangeValue.isVisible = false;
            this.view.imgTimeRange.src = "arrowdownahb.png";
        }else{
            this.view.flxTimeRangeValue.isVisible = true;
            this.view.imgTimeRange.src = "arrowupahb.png";
        }
          
      
      /*  var scope = this;
        var heightValue;
        if (this.view.flxTimeRangeValue.height === "0dp") {
            heightValue = "preferred";
        } else {
            heightValue = "0dp";
        }

        this.view.flxTimeRangeValue.animate(
            kony.ui.createAnimation({
                "100": {
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "height": heightValue
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.25
            }, {
                "animationEnd": function () {
                    if (heightValue === "0dp") {
                        scope.view.imgTimeRange.src = "arrowdown.png";
                    } else {
                        scope.view.imgTimeRange.src = "arrowup.png";
                    }
                    scope.view.forceLayout();
                }
            });*/
    },
  
  showStatus: function () {
        if(this.view.flxStatusValue.isVisible == true){
            this.view.flxStatusValue.isVisible = false;
            this.view.imgStatus.src = "arrowdownahb.png";
        }else{
            this.view.flxStatusValue.isVisible = true;
            this.view.imgStatus.src = "arrowupahb.png";
        }
  },
    setTransactionTypeData: function () {
       var configManager = applicationManager.getConfigurationManager();
    var navManager = applicationManager.getNavigationManager();
    var entryPoint = navManager.getEntryPoint("AdvanceSearch");
    if(entryPoint === "AHBStatements"){
      var data = [{
        			"lblName": kony.i18n.getLocalizedString("kony.ahb.statementFilter.Credit"),
       				"imgIcon": "radiobuttoninactive.png",
        			"key": "CR"
      			  },
                  {
                    "lblName": kony.i18n.getLocalizedString("kony.ahb.statementFilter.Debit"),
                    "imgIcon": "radiobuttoninactive.png",
                    "key": "DR"
                  },
                  {
                    "lblName": "Both",//kony.i18n.getLocalizedString("kony.ahb.statementFilter.Debit"),
                    "imgIcon": "radiobuttoninactive.png",
                    "key": ""
                  }
                 ];
      this.view.segTransactionType.setData(data);
    }else{
        var data = [
            {
                "lblName": configManager.constants.Deposits,
                "imgIcon": "remeberme.png"
            },
            {
                "lblName": configManager.constants.Withdrawals,
                "imgIcon": "remeberme.png"
            },
            {
                "lblName": configManager.constants.Checks,
                "imgIcon": "remeberme.png"
            },
            {
                "lblName": configManager.constants.Transfers,
                "imgIcon": "remeberme.png"
            },
            {
                "lblName": configManager.constants.BillPay,
                "imgIcon": "remeberme.png"
            },
            {
                "lblName": configManager.constants.P2PDebits,
                "imgIcon": "remeberme.png"
            },
            {
                "lblName": configManager.constants.P2PCredits,
                "imgIcon": "remeberme.png"
            }
        ];
        this.view.segTransactionType.setData(data);
    }
    },
    setTimeRangeData: function () {
      var configManager = applicationManager.getConfigurationManager();
        var data = [
          {
            "lblName": kony.i18n.getLocalizedString("kony.mb.AdvanceSearch.Any"),
            "imgIcon": "radiobuttoninactive.png"     
          },
          {
            "lblName": kony.i18n.getLocalizedString("kony.mb.AdvanceSearch.Last7days"),
            "imgIcon": "radiobuttoninactive.png"
          },
          {
            "lblName": kony.i18n.getLocalizedString("kony.mb.AdvanceSearch.Last30days"),
            "imgIcon": "radiobuttoninactive.png"
          },
          {
            "lblName": kony.i18n.getLocalizedString("kony.mb.AdvanceSearch.Last60days"),
            "imgIcon": "radiobuttoninactive.png"
          },
          {
            "lblName": kony.i18n.getLocalizedString("kony.mb.AdvanceSearch.CustomRange"),
            "imgIcon": "radiobuttoninactive.png"
          }
        ];
        this.view.segTimeRange.setData(data);
    },
  setStatusData : function (){
    var data = [{
      			"lblName": kony.i18n.getLocalizedString("kony.ahb.statementFilter.Posted"),
      			"imgIcon": "radiobuttoninactive.png",
      			"key" : "Posted"
    			},
                {
                  "lblName": kony.i18n.getLocalizedString("kony.ahb.statementFilter.onhold"),
                  "imgIcon": "radiobuttoninactive.png",
      			"key" : "On hold"
                }
               ];
    this.view.segStatus.setData(data);
  },
  validateDateWidget : function(endDate){
      var scope = this;
      scope.view.calEndDate.validEndDate=endDate;
      scope.view.calStartDate.validEndDate=endDate;
  },
  selectedTransactionType: function(){
    var scope = this;
    var searchWord = this.view.tbxSearch.text;
    var data = this.view.segTransactionType.data;
      var indices = this.view.segTransactionType.selectedRowIndices[0][1];
      var selectedData = [] ;
      var amountRange = new Array(2);
      var chequeRange = new Array(2);
      if(indices.length>0){
        for(var i=0;i<indices.length;i++)
        {
          selectedData.push(data[indices[i]].lblName);
        }
        if(selectedData.length>0){
          scope.advanceSearchOptions.searchTransactionType=selectedData[0];
        }
      }  
  },
  navigateToBack: function(){
    var navMan=applicationManager.getNavigationManager();
    navMan.goBack();
  },
  bindChequeListError : function(err){
    applicationManager.getDataProcessorUtility().showToastMessageError(this,err);
  },
  onClickSearchBtnCheckFlow : function(){
    //scope.view.flxSearchResults.isVisible = true;
    applicationManager.getPresentationUtility().showLoadingScreen();
    //scope.selectedTransactionType();
    //custom metric API to generate Reports
    KNYMetricsService.sendCustomMetrics("frmAdvanceSearch", {"Search Transactions":"Final Search"});

    if(this.advanceSearchOptions.fromDate!==""&&this.advanceSearchOptions.toDate!==""){
      if(this.view.flxAmountTo.isVisible===true){
        this.advanceSearchOptions.fromAmount=this.view.txtAmountFrom.text;
        this.advanceSearchOptions.toAmount=this.view.txtAmountTo.text;
      }else{
        this.advanceSearchOptions.fromAmount = this.view.txtAmountFrom.text;
        this.advanceSearchOptions.toAmount = this.view.txtAmountFrom.text;   
      }
      if(this.view.flxCheckNumbersTo.isVisible === true){
        this.advanceSearchOptions.fromChequeNumber = this.view.txtCheckNumbersFrom.text;
        this.advanceSearchOptions.toChequeNumber = this.view.txtCheckNumbersTo.text;
      }else{
        this.advanceSearchOptions.fromChequeNumber = this.view.txtCheckNumbersFrom.text;
        this.advanceSearchOptions.toChequeNumber = this.view.txtCheckNumbersFrom.text;
      }
      if(this.view.tbxSearch.text!==""){
        this.advanceSearchOptions.searchDescription=this.view.tbxSearch.text;
      }
      var navMan=applicationManager.getNavigationManager();
      //    		var CheckDepositFormFlag= navMan.getCustomInfo("CheckDepositForm");
      var formName = kony.application.getPreviousForm().id;
      if(formName==="frmCheckDeposit"){
        kony.print("## CheckDeposit ## "+formName);
        var customInfo =navMan.getCustomInfo("frmCheckDeposit");
        if(customInfo && customInfo.accountNumber){
          this.advanceSearchOptions.accountNumber = customInfo.accountNumber; 
        }
        else{
          this.advanceSearchOptions.accountNumber = "";
        }

        //           var TransMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransactionModule");
        //           TransMod.presentationController.getPendingPostedTransactions(scope.advanceSearchOptions); 
        var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CheckDepositModule");
        accountMod.presentationController.fetchDeposits(this.advanceSearchOptions);
      }
      var X = this.advanceSearchOptions;
      navMan.setCustomInfo("frmAdvanceSearch",X);		  
    } else{
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    }
  },
  onClickSearchBtnStatementsFlow : function(){
    var navManager = applicationManager.getNavigationManager();
            if(!this.advanceSearchOptions.fromDate){
                this.advanceSearchOptions.fromDate = "";
            }
            if(!this.advanceSearchOptions.transactionType){
               this.advanceSearchOptions.transactionType = ""; 
            }
            if(!this.advanceSearchOptions.toDate){
                this.advanceSearchOptions.toDate = "";
            }

            if (this.view.flxAmountTo.isVisible === true) {
                this.advanceSearchOptions.fromAmount = this.view.txtAmountFrom.text;
                this.advanceSearchOptions.toAmount = this.view.txtAmountTo.text;
            } else {
                this.advanceSearchOptions.fromAmount = this.view.txtAmountFrom.text;
                this.advanceSearchOptions.toAmount = this.view.txtAmountFrom.text;
            }
            if (this.view.flxMerchant.isVisible === true) {
                this.advanceSearchOptions.merchant = this.view.txtMerchant.text;
            }
            else{
                this.advanceSearchOptions.merchant = "";
            }
            var paramns = {
                "fromDate": this.advanceSearchOptions.fromDate.replace(/-/g,""),
                "toDate": this.advanceSearchOptions.toDate.replace(/-/g,""),
                "transactionType": this.advanceSearchOptions.transactionType,
                "fromAmount": this.advanceSearchOptions.fromAmount,
                "toAmount": this.advanceSearchOptions.toAmount,
                "merchant": this.advanceSearchOptions.merchant,
             	"status" : this.advanceSearchOptions.status,
                "startIndex" : 0
            };
            kony.print("params" + JSON.stringify(paramns));
   			var configManager = applicationManager.getConfigurationManager();
   			var accMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
    		if(this.advanceSearchOptions.status === configManager.constants.ONHOLD){      	
              	accMod.presentationController.clearStatementData();
              	accMod.presentationController.resetStatementParamsData();
            }
  			accMod.presentationController.setStatementParamsData(paramns);
            navManager.navigateTo("frmAccountDetails");
        
    },


  
  setStatus : function(){
    var configManager = applicationManager.getConfigurationManager();
    if(this.view.segStatus.data[this.view.segStatus.selectedIndex[1]].key=== configManager.constants.ONHOLD){
      this.advanceSearchOptions.status = configManager.constants.ONHOLD;
      this.view.flxMerchant.setVisibility(false);
      this.view.flxTransactionType.setVisibility(false);
      this.view.flxTransactionTypeValue.setVisibility(false);
      this.view.flxTimeRange.setVisibility(false);
      this.view.flxTimeRangeValue.setVisibility(false);
      this.view.flxAmount.setVisibility(false);
     // var accountInfoController = applicationManager.getPresentationUtility().getController('frmAccountInfo', true);
      //accountInfoController.populateOnHoldData();
      //var navManager = applicationManager.getNavigationManager();
      //navManager.navigateTo("frmAccountInfo");
    }
    if(this.view.segStatus.data[this.view.segStatus.selectedIndex[1]].key=== configManager.constants.POSTED){
      this.advanceSearchOptions.status = configManager.constants.POSTED;
      this.view.flxMerchant.setVisibility(true);
      this.view.flxTransactionType.setVisibility(true);
      this.view.flxTimeRange.setVisibility(true);
      this.view.flxAmount.setVisibility(true);
    }
  },
   bindGenericError : function(err){
    applicationManager.getDataProcessorUtility().showToastMessageError(this,err);    
  }

});