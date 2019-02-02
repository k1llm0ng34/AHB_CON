define({
  timerCounter: 0,
  segmentData : [],
  pendingDeposits : [],
  postedDeposits : [],
  onNavigate: function() {
  },
  
  checkDepositInit: function() {
  	var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);  
  },
  
  preShow: function() {
    //this.view.flxNewCheckDeposit.onClick = this.flxNewCheckDepositOnClick;
    //this.view.tbxSearch.onTextChange = this.onSearchTextChange;
    this.view.segDepositFrom.onRowClick = this.segDepositFromOnClick;
    this.view.MainHeader.btnBack.onClick = this.onBackFrmCheckDeposit;
    this.view.MainHeader.flxBack.onClick = this.onBackFrmCheckDeposit;
    this.view.segDepositFrom.isVisible=true;
   // this.view.tbxSearch.text = "";
    this.setSegmentData();
    //this.renderTitleBar();
    //this.showPopupSuccess();
    var scope = this;
    var configManager = applicationManager.getConfigurationManager();
    var MenuHandler =  applicationManager.getMenuHandler();
    MenuHandler.setUpHamburgerForForm(scope,configManager.constants.MENUACCOUNTS);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
	 var checkDeposit = applicationManager.getLoggerManager();              
         checkDeposit.setCustomMetrics(this, false, "RDC");
  },
  renderTitleBar: function(){
    var deviceUtilManager = applicationManager.getDeviceUtilManager();
    var isIphone = deviceUtilManager.isIPhone();
    if (isIphone) {
      this.view.flxHeader.setVisibility(false);
    }
    else
      {
        this.view.flxFooter.setVisibility(false);
      }
  },
  setSegmentData : function(){ //searchData,isOriginalSegmentData
    //this.view.segDepositFrom.isVisible=true;
    //this.view.flxNoTransactions.isVisible=false; 
    var depositData = [];
    var segData = [];
    var navMan=applicationManager.getNavigationManager();
    var customInfo =  navMan.getCustomInfo("frmCheckDeposit");
	kony.print(" ## setSegmentData ##" + JSON.stringify(customInfo));
    //     if(isOriginalSegmentData)
    //     {
    //       this.view.segDepositFrom.setData(searchData);
    //     }
    //     else
    //     {  
    //       var navMan=applicationManager.getNavigationManager();
    //       var depositData = [];
    //       if(searchData)
    //         depositData = searchData;
    //       else
    // depositData =  navMan.getCustomInfo("frmCheckDeposit").depositsData;
    //var segData = [];
    // var postedDepositData = [];
    //var pendingDepositData = [];
    if(customInfo && customInfo.depositsData && customInfo.depositsData.length>0)
    {
      depositData = customInfo.depositsData;
      
      for(var i =0; i<depositData.length ; i++){
        depositData[i].chequeAmountUI = commaSeparatorUtil(depositData[i].chequeAmount)
      }
      
      //         pendingDepositData = depositData[0];
      //         postedDepositData = depositData[1]
      //this.view.AccountData.lblAccountNumber.text=depositData[0].accountNumber;
      var accountNumber = depositData[0].accountNumber;
      accountNumber = formatAlphanumericString(accountNumber);
      this.view.Details.lblAccountBalance.text = accountNumber;
  

      this.view.segDepositFrom.widgetDataMap={
        lblAccountName:"chequeNumber",
        lblAccountBalValue:"chequeAmountUI",
        lblCurrency:"chequeCurrency", 
        lblAccountBal:"chequeDate",
        lblTransactionDate:"chequeStatus",
        lblHeader:"lblHeader",
        imgFilter : "imgFilter",
        "chequeAmount":"chequeAmount"

      };
      //var pendingTranHeaderLabel = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accdetails.pendingTransactions");
      //var postedTranHeaderLabel = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transaction.Cheque");
      //         applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accdetails.pendingTransactions")
      //         if(postedDepositData.length>0&&pendingDepositData.length>0) 
      //         {
      //           segData=  [[{"lblHeader": pendingTranHeaderLabel,"imgUpArrow":{"src":"arrowdown.png"}},pendingDepositData],
      //                      [{"lblHeader": postedTranHeaderLabel,"imgUpArrow":{"src":"arrowdown.png"} },postedDepositData]]; 
      //         }
      //         else if(pendingDepositData.length>0) 
      //         {
      //           segData =  [[{"lblHeader": pendingTranHeaderLabel,"imgUpArrow":{"src":"arrowdown.png"}},pendingDepositData]]; 
      //         }
      //         else 
//       if(depositData.length>0) 
//       {
//         var self=this;
//         segData =  [[{ "lblHeader": postedTranHeaderLabel,"imgFilter":{"src":"filter.png"}, "imgFilter": {
//           "onTouchStart": function() {
//             self.navigateToAdvanceSearch();
//           }
//         },},depositData]];   //"arrowdown.png"

//       }
//       else
//       {
//         this.view.segDepositFrom.isVisible=false;
//         this.view.flxNoTransactions.isVisible=true;
//       }
      
    }
    else{
       // show toast message
      	this.bindChequeDetailsError(kony.i18n.getLocalizedString("kony.AHB.ALERT.MQ_0023"));
    }
    if(customInfo && customInfo.accountNumber)
    {
      	var accountNumber = customInfo.accountNumber;
        accountNumber = formatAlphanumericString(accountNumber);
     	this.view.Details.lblAccountBalance.text = accountNumber;
    }
    else{
      	this.view.Details.lblAccountBalance.text = "";
    }
    
    var self=this;
    segData =  [[{ "lblHeader": kony.i18n.getLocalizedString("kony.mb.transaction.Cheque"),"imgFilter":{"src":"filter.png"}, "imgFilter": {
      "onTouchStart": function() {
        self.navigateToAdvanceSearch();
      }
    },},depositData]];
    //       if(!searchData)
    //       {
    //         this.segmentData=segData;
    //         this.pendingDeposits=pendingDepositData;
    //         this.postedDeposits=postedDepositData;
    //       }
    this.view.segDepositFrom.setData(segData);
    // }
    this.view.forceLayout();
  },
  
  navigateToAdvanceSearch: function(){
     var navManager = applicationManager.getNavigationManager();
     navManager.setEntryPoint("AdvanceSearch", "CheckDepositForm");
     navManager.setCustomInfo("CheckDepositForm",true);
     navManager.navigateTo("frmAdvanceSearch");
//      var chequeList = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CheckDepositModule");
//        chequeList.presentationController.commonFunctionForNavigation("frmAdvanceSearch");
  },
  
  onSearchTextChange : function(){
    var searchText = this.view.tbxSearch.text.toLowerCase();
    var segData = this.segmentData;
    if(searchText && segData.length !== 0)
    {
      var data = [],headers = [];
      headers.push(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accdetails.pendingTransactions"));
      headers.push(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accdetails.postedTransactions"));
      data.push(this.pendingDeposits);
      data.push(this.postedDeposits);
      var searchSegData = applicationManager.getDataProcessorUtility().commonSectionSegmentSearch("toAccountName",searchText,data,headers);
      if(searchSegData && searchSegData.length!==0)
      {
        this.view.segDepositFrom.setData(searchSegData);
        this.view.segDepositFrom.isVisible=true;
        this.view.flxNoTransactions.isVisible=false;
      }
      else
        {
          this.view.segDepositFrom.isVisible=false;
          this.view.flxNoTransactions.isVisible=true;
        }
    }
    else if (!searchText && segData.length !== 0)
    {
      this.setSegmentData(segData,true);
    }

  },
  segDepositFromOnClick : function() {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var selectedSectionIndex=Math.floor(this.view.segDepositFrom.selectedRowIndex[0]);
    var selectedRowIndex=Math.floor(this.view.segDepositFrom.selectedRowIndex[1]);
    var transactionData=this.view.segDepositFrom.data[selectedSectionIndex][1][selectedRowIndex];
    var checkDepositModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CheckDepositModule");
    checkDepositModule.presentationController.goToDepositDetails(transactionData);
  },
  flxNewCheckDepositOnClick: function() {
	applicationManager.getPresentationUtility().showLoadingScreen();
    var checkDepositModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CheckDepositModule");
    checkDepositModule.presentationController.navigationFromNewCheckDeposit();
  },
  showPopupSuccess: function() {
    var scope = this;
    var navManager = applicationManager.getNavigationManager();
    var data = navManager.getCustomInfo("frmCheckDeposit");
    if(data)
    {
      if(data.transactionSuccess)
      {
        data.transactionSuccess = false;
        var popupMsg = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Deposit.successfulTransactionPopup")+" "+data.refId;
        applicationManager.getDataProcessorUtility().showToastMessageSuccess(scope, popupMsg);
        navManager.setCustomInfo("frmCheckDeposit",data);
      }
      else if(data.transactionError)
      {
        data.transactionError = false;
        var errMsg = data.transactionErrorMsg;
        applicationManager.getDataProcessorUtility().showToastMessageError(scope, errMsg);
        navManager.setCustomInfo("frmCheckDeposit",data);
      }
    }
  },

  onBackFrmCheckDeposit: function() {
    var navMan = applicationManager.getNavigationManager();
    navMan.goBack();
  },
  bindChequeDetailsError : function(err){
    applicationManager.getDataProcessorUtility().showToastMessageError(this,err);
  }

});