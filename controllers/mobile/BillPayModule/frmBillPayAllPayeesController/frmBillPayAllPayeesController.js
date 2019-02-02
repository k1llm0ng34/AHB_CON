define({
  // segmentData:{},
  // deletesegData:[],
  timerCounter:0,
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  preShow: function() {
    /*this.showPreshowSearch();
        if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
        }
      this.deletesegData=[];*/
    this.initActions();
    //this.setSegData();
    var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    billPayMod.presentationController.fetchBillPayeesList();
    //this.showPopUpSuccess();
    //applicationManager.getPresentationUtility().dismissLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
  },
  initActions: function() {
    var scope = this;
    var configManager = applicationManager.getConfigurationManager();
    var MenuHandler =  applicationManager.getMenuHandler();
		MenuHandler.setUpHamburgerForForm(scope,configManager.constants.MENUBILLPAY);
    this.view.MainHeader.flxBack.onClick = this.onBackClick;
    this.view.MainHeader.btnBack.onClick = this.onBackClick;
    this.view.segAccounts.onRowClick = this.onRowClickOfPayee;
  },
  onBackClick: function() {
    kony.print("Enter into onBackClick");
    var navMan=applicationManager.getNavigationManager();
    navMan.goBack();
  },
  
  /*tbxSearchOnTextChange:function(){
        var scope=this;
      	var searchtext=this.view.customSearchbox.tbxSearch.text.toLowerCase();
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        var data = this.segmentData;
        var searchSegmentData=applicationManager.getDataProcessorUtility().commonSegmentSearch("payeeNickName",searchtext,data);
        this.deletesegData=searchSegmentData;
        for (var i = 0; i < searchSegmentData.length; i++) {
          searchSegmentData[i].flxDelete={};
        }
        for(var i=0;i<searchSegmentData.length;i++){
          searchSegmentData[i].flxDelete.onClick = scope.deleteCallback;
        }
        //searchSegmentData=newSegmentData;
      	if(searchSegmentData.length===0){
      		this.view.flxNoTransactions.isVisible=true;
        	this.view.segAccounts.isVisible=false;
		}
		else{
    	    this.view.flxNoTransactions.isVisible=false;
	        this.view.segAccounts.isVisible=true;
      		this.view.segAccounts.setData(searchSegmentData);
        }
    },*/
  /* showSearch: function() {
        if (kony.os.deviceInfo().name === "iPhone") {
            if (this.view.flxHeaderSearchbox.isVisible == true) {
                this.view.flxHeaderSearchbox.isVisible = false;
                this.view.flxSearch.isVisible = true;
                this.view.flxMainContainer.top = "56dp";

            } else {
                this.view.flxSearch.isVisible = false;
                this.view.flxMainContainer.top = "40dp";
                this.view.flxHeaderSearchbox.isVisible = true;
                this.view.customSearchbox.tbxSearch.setFocus(true);
                this.setSegData();
            }
        } else {
            if (this.view.flxHeaderSearchbox.isVisible == true) {
                this.view.flxHeaderSearchbox.isVisible = false;
                this.view.flxSearch.isVisible = true;
                this.view.flxHeader.isVisible = true;
                this.view.flxMainContainer.top = "56dp";
            } else {
                this.view.flxSearch.isVisible = false;
                this.view.flxHeader.isVisible = false;
                this.view.flxMainContainer.top = "40dp";
                this.view.flxHeaderSearchbox.isVisible = true;
                this.view.customSearchbox.tbxSearch.setFocus(true);
            }
        }
    },*/
  /* showSearch: function() {
        if (this.view.flxHeaderSearchbox.isVisible == true) {
                this.view.flxHeaderSearchbox.isVisible = false;
              	this.view.segAccounts.setData(this.segmentData);
        		if (kony.os.deviceInfo().name === "iPhone") {
        			this.view.flxHeader.isVisible = false;
                  	this.view.flxMainContainer.top = "0dp";
      			}
      			else{
        			this.view.flxHeader.isVisible = true;
                    this.view.flxMainContainer.top = "56dp";
      			} 
        		if(this.segmentData.length===0){
      				this.view.flxNoTransactions.isVisible=true;
        			this.view.segAccounts.isVisible=false;
      			}
              	else{
         		   	this.view.flxNoTransactions.isVisible=false;
        			this.view.segAccounts.isVisible=true;
              this.deletesegData=this.segmentData;
        			this.view.segAccounts.setData(this.segmentData);
        		}
                this.view.flxSearch.isVisible = true;

            } else {
              	this.view.customSearchbox.tbxSearch.text="";
              	this.view.flxSearch.isVisible = false;
                this.view.flxHeader.isVisible = false;
                this.view.flxMainContainer.top = "40dp";
                this.view.flxHeaderSearchbox.isVisible = true;
                this.view.customSearchbox.tbxSearch.setFocus(true);
            }
    },*/
  setSegData:function(payeeList){
    var scope=this;

    var navManager = applicationManager.getNavigationManager();
    navManager.setEntryPoint("billPayees", "editPayees");

    // var payeeList = billPayMod.presentationController.getPayeesList();
    kony.print("payeeList==="+JSON.stringify(payeeList));
    this.view.segAccounts.widgetDataMap = {
      "lblOperator" : "nickName",
      "lblPayeeReferenceNumber" : "consumerNumber",

    };
   
    if(!payeeList || payeeList.payees.length===0){
      this.view.flxNoTransactions.isVisible=true;
      this.view.segAccounts.isVisible=false;
    }
    else{
      this.view.flxNoTransactions.isVisible=false;
      this.view.segAccounts.isVisible=true;
      this.view.segAccounts.setData(payeeList.payees);
    }
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    // this.deletesegData=segmentData;
    // this.segmentData=segmentData;
  },
  /*showPreshowSearch:function(){
  		if (this.view.flxHeaderSearchbox.isVisible == true) {
             this.view.flxHeaderSearchbox.isVisible = false;
             this.view.flxSearch.isVisible = true;
          	 this.view.flxHeader.isVisible = true;
             this.view.flxMainContainer.top = "56dp";
        }
  },*/
  /* showPopUpSuccess:function(){
    var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    if(billPayMod.presentationController.isDeleteSuccess){
      this.bindGenericSuccess(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.deleteBillPayPayeeSuccess"));
      billPayMod.presentationController.isDeleteSuccess = false;
    }
    if(billPayMod.presentationController.isUpdateNickNameSuccess){
      this.bindGenericSuccess(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.updateBillPayPayeeNickNameSuccess"));
      billPayMod.presentationController.isUpdateNickNameSuccess = false;
    }
    if(billPayMod.presentationController.isUpdateAddressSuccess){
      this.bindGenericSuccess(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.updateBillPayPayeeAddressSuccess"));
      billPayMod.presentationController.isUpdateAddressSuccess = false;
    }
    if(billPayMod.presentationController.isPayeeAdded){
      this.bindGenericSuccess(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.addedBillPayPayeeAddressSuccess"));
      billPayMod.presentationController.isPayeeAdded = false; 
    }
  },*/
  /*bindGenericSuccess : function(msg){
    	applicationManager.getPresentationUtility().dismissLoadingScreen();
    	applicationManager.getDataProcessorUtility().showToastMessageSuccess(this,msg);
  	},*/
  /*deleteCallback:function(){
    var scope=this;
    var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
//     var rowid=scope.view.segAccounts.selectedRowIndex[1];
//     var selectedPayeeDetails = scope.view.segAccounts.data[rowid];
    var rowid= scope.view.segAccounts.selectedIndex[1];
    var selectedPayeeDetails=scope.deletesegData[rowid];
    billPayMod.presentationController.setBillPayPayeeData(selectedPayeeDetails);
    var basicConfig = {message: applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.deleteRecipient","Do you want to delete the recipient"),
                       alertIcon:null,
                       alertType: constants.ALERT_TYPE_CONFIRMATION,
                       alertTitle: applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfers.deleteAlertTitle"),
                       yesLabel:applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertYes"),
                       noLabel: applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertNo"),
                       alertHandler: scope.deleteHandler
                      };
    var pspConfig = {};                                                                                           
    applicationManager.getPresentationUtility().showAlertMessage(basicConfig, pspConfig);
  },
    deleteHandler:function(response){
      if(response === true){                                       
        applicationManager.getPresentationUtility().showLoadingScreen();
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        billPayMod.presentationController.deleteBillPayPayee();
      }
    },*/
    
  bindGenericSuccess : function(msg){
    	applicationManager.getPresentationUtility().dismissLoadingScreen();
    	applicationManager.getDataProcessorUtility().showToastMessageError(this,msg);
  	},
   bindGenericError : function(errorMsg) {
    var scopeObj=this;
     applicationManager.getPresentationUtility().dismissLoadingScreen();
    applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj,errorMsg);
  },
 
    deleteHandler:function(response){
      if(response === true){                                       
        applicationManager.getPresentationUtility().showLoadingScreen();
        var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        billPayMod.presentationController.deleteBillPayPayee();
      }
    },
  onRowClickOfPayee: function(){
    var selectedItems = this.view.segAccounts.selectedRowItems;
    kony.print("onRowClickOfPayee_lSelectedItems : " +JSON.stringify(selectedItems[0]));
    var payeeDataObj = {};
    var userManager = applicationManager.getUserPreferencesManager();
        var langPrefrence = userManager.getLanguagePrefrence();
        var operatorName = "";
        var serviceType = "";
        if (langPrefrence === "en_US") {
              operatorName = selectedItems[0].operatorName;
              serviceType = selectedItems[0].serviceType;
          } else {
              operatorName = selectedItems[0].operatorNameArabic ;
              serviceType = selectedItems[0].serviceTypeArabic ;
          }
   
    var navManager = applicationManager.getNavigationManager();
    if(selectedItems && selectedItems.length){
      selectedItems = selectedItems[0];
      payeeDataObj.consumerNumber=selectedItems.consumerNumber;
      payeeDataObj.nickName = selectedItems.nickName;
      payeeDataObj.operatorName =operatorName;
      payeeDataObj.operatorCode=selectedItems.operatorCode;
      payeeDataObj.serviceCode=selectedItems.serviceCode;
      payeeDataObj.serviceType=serviceType;      
      payeeDataObj.consumerPin=selectedItems.consumerPin; 
      payeeDataObj.payeeName=selectedItems.payeeName;
      payeeDataObj.isPinRequired = selectedItems.isPinRequired;
      payeeDataObj.otp =selectedItems.otp;
      payeeDataObj.id =selectedItems.id;
      payeeDataObj.referenceNumber =selectedItems.referenceNumber;
      payeeDataObj.hasSubService = selectedItems.hasSubService;
	 kony.print("onRowClickOfPayee_payeeDataObj"+payeeDataObj);
      var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
      billPayMod.presentationController.setAllPayeeData(payeeDataObj);
      navManager.navigateTo("frmBillPayPayeeDetails");
    }
  },
});