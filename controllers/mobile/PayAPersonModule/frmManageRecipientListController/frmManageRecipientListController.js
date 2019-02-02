define({
    recipientType: '',
    deletesegData:[],
	segmentData:null,
    timerCounter:0,
    onNavigate: function(obj) {
    },
    init : function(){
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    },
    preShow: function() {
        var configManager = applicationManager.getConfigurationManager();
        var MenuHandler =  applicationManager.getMenuHandler();
        MenuHandler.setUpHamburgerForForm(this,configManager.constants.MENUTRANSFERS);
      	applicationManager.getPresentationUtility().showLoadingScreen();
		//this.showPreshowSearch();
        this.deletesegData=[];

      	//this.setTransfersSegmentData();
        this.initActions();
	    //this.showSuccessMessage();
       // this.setNoPayeeLabel();
        var navManager = applicationManager.getNavigationManager();
        //var pBeneficiaryList = navManager.getCustomInfo("frmManageRecipientList");
      	
       	navManager.setEntryPoint("getBeneficiaries","frmManageRecipientList");
      
      	var transferMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      	transferMod.presentationController.fetchOtherBankRecepients();
      
      	//this.setDataForOtherBeneficiariesList(pBeneficiaryList);
      	this.view.segRecipients.removeAll();
       	var currentForm=navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
      	//applicationManager.getPresentationUtility().dismissLoadingScreen();

    },
    initActions: function() {
      var scope = this;
      this.view.segRecipients.onRowClick = this.onRowClickOfBeneficiary;
      this.view.MainHeader.flxBack.onClick = this.onBackClick;
      this.view.MainHeader.btnBack.onClick = this.onBackClick;

    },
    
	tbxSearchOnTextChange:function(){
     var scope=this;
      	var searchtext=this.view.customSearchbox.tbxSearch.text.toLowerCase();
    	var searchSegmentData=null;
      	 	var data = this.segmentData;
			var newSegmentData = applicationManager.getDataProcessorUtility().commonSegmentSearch("nickName",searchtext,data);
          	for (var i = 0; i < newSegmentData.length; i++) {
            	newSegmentData[i].flxDelete={};
          	}
          	for(var i=0;i<newSegmentData.length;i++){
            	newSegmentData[i].flxDelete.onClick = scope.deleteCallback;
          	}
          	this.deletesegData=newSegmentData;
          	searchSegmentData=newSegmentData;
      	if(searchSegmentData.length===0){
      		this.view.flxNoTransactions.isVisible=true;
        	this.view.segRecipients.isVisible=false;
		}
		else{
    	    this.view.flxNoTransactions.isVisible=false;
	        this.view.segRecipients.isVisible=true;
      		this.view.segRecipients.setData(searchSegmentData);
		}	
  	},
    setP2pSegmentData: function() {
        var scope = this;
        var data = [{
            "lblAccountName": "Jonathan Davidson",
            "lblBankName": "358-673-0116",
            "template": "flxAccountsNoImage"
        }, {
            "lblAccountName": "Jimmy Sherman",
            "lblBankName": "358-673-0116",
            "template": "flxAccountsNoImage"
        }, {
            "lblAccountName": "Philip Floyd",
            "lblBankName": "358-673-0116",
            "template": "flxAccountsNoImage"
        }, {
            "lblAccountName": "Terry Tucker",
            "lblBankName": "358-673-0116",
            "template": "flxAccountsNoImage"
        }, {
            "lblAccountName": "Shawn Snyder",
            "lblBankName": "358-673-0116",
            "template": "flxAccountsNoImage"
        }, {
            "lblAccountName": "Landon Wallace",
            "lblBankName": "358-673-0116",
            "template": "flxAccountsNoImage"
        }, {
            "lblAccountName": "Terry Webb",
            "lblBankName": "358-673-0116",
            "template": "flxAccountsNoImage"
        }];
        this.view.segRecipients.setData(data);
    },
  setTransfersSegmentData: function() {
    var scope=this;
    var segmentData=[];
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    var dataMap=this.getDataMap(transferModule.presentationController.getFlowType());
    this.view.segRecipients.widgetDataMap = dataMap;  
    var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    if(p2pMod.presentationController.getFlowType()==="P2P"){
      var newSegmentData=[];
      newSegmentData=p2pMod.presentationController.getAllP2PPayees();
      for (var i = 0; i < newSegmentData.length; i++) {
        newSegmentData[i].flxDelete={};
      }
      for(var i=0;i<newSegmentData.length;i++){
         newSegmentData[i].flxDelete.onClick = scope.deleteCallback;
      }
          segmentData=newSegmentData;
			for(var i=0;i<segmentData.length;i++){
				//segmentData[i].fullName=segmentData[i].name+" "+segmentData[i].lastName;
              	//segmentData[i].type=type;
                if(segmentData[i].phone==="" ||segmentData[i].phone===null ||segmentData[i].phone===undefined )
                {
                  segmentData[i].phone=segmentData[i].email;
                }
                if(segmentData[i].nickName==="" ||segmentData[i].nickName===null ||segmentData[i].nickName===undefined )
                {
                  segmentData[i].nickName=segmentData[i].name;
                }
			}
		}
		if(transferModule.presentationController.getFlowType()==="OtherBankRecipients"){
          	var newSegmentData=[];
          	var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    		newSegmentData=transferModule.presentationController.getAllExternalBankBenificiaries();
          	for (var i = 0; i < newSegmentData.length; i++) {
        		newSegmentData[i].flxDelete={};
      		}
      		for(var i=0;i<newSegmentData.length;i++){
         		newSegmentData[i].flxDelete.onClick = scope.deleteCallback;
      		}
          	segmentData=newSegmentData;
          	for(var i=0;i<segmentData.length;i++){
            	segmentData[i].imgBank={"isVisible": true,src:"externalbank.png"};
              	if(segmentData[i].accountType){
                	var accType=segmentData[i].accountType.toString();
                	if (accType.indexOf(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.Account")) >= 0) {
                    	segmentData[i].accountType = segmentData[i].accountType;
                	} else {
                    	segmentData[i].accountType = segmentData[i].accountType + " " + applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.Account");
                	}
                }
               	if (segmentData[i].nickName === "" || segmentData[i].nickName === null || segmentData[i].nickName === undefined) {
                    segmentData[i].nickName = segmentData[i].beneficiaryName;
                }
            }
        }
		if(transferModule.presentationController.getFlowType()==="SameBankRecipients"){
          	var newSegmentData=[];
          	var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    		newSegmentData=transferModule.presentationController.getAllInternalBankBenificiaries();
            for (var i = 0; i < newSegmentData.length; i++) {
        		newSegmentData[i].flxDelete={};
      		}
      		for(var i=0;i<newSegmentData.length;i++){
         		newSegmentData[i].flxDelete.onClick = scope.deleteCallback;
      		}
          	segmentData=newSegmentData;
          	for(var i=0;i<segmentData.length;i++){
				if(segmentData[i].accountType){
                	var accType=segmentData[i].accountType.toString();
                	if (accType.indexOf(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.Account")) >= 0) {
                    	segmentData[i].accountType = segmentData[i].accountType;
                	} else {
                    	segmentData[i].accountType = segmentData[i].accountType + " " + applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.Account");
                	}
                }
              	if (segmentData[i].nickName === "" || segmentData[i].nickName === null || segmentData[i].nickName === undefined) {
                    segmentData[i].nickName = segmentData[i].beneficiaryName;
                }
            }
        }

        if(transferModule.presentationController.getFlowType()==="InternationalRecipients"){
          	var newSegmentData=[];
      		var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    		newSegmentData=transferModule.presentationController.getAllInternationalBenificiaries();
            for (var i = 0; i < newSegmentData.length; i++) {
        		newSegmentData[i].flxDelete={};
      		}
      		for(var i=0;i<newSegmentData.length;i++){
         		newSegmentData[i].flxDelete.onClick = scope.deleteCallback;
      		}
          	segmentData=newSegmentData;
          	for(var i=0;i<segmentData.length;i++){
				if(segmentData[i].accountType){
                	var accType=segmentData[i].accountType.toString();
                	if (accType.indexOf(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.Account")) >= 0) {
	                    segmentData[i].accountType = segmentData[i].accountType;
    	            } else {
                    	segmentData[i].accountType = segmentData[i].accountType + " " + applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.Account");
                	}
                }
              	if (segmentData[i].nickName === "" || segmentData[i].nickName === null || segmentData[i].nickName === undefined) {
                    segmentData[i].nickName = segmentData[i].beneficiaryName;
                }
            }
        }
        if(segmentData.length===0){
      		this.view.flxNoTransactions.isVisible=true;
        	this.view.segRecipients.isVisible=false;
      	}
      	else{
            this.view.flxNoTransactions.isVisible=false;
        	this.view.segRecipients.isVisible=true;
        	this.view.segRecipients.setData(segmentData);
        }
     this.deletesegData=segmentData;
		this.segmentData=segmentData;
    },
  deleteCallback:function(context){
    var scope=this;
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    var rowid=scope.view.segRecipients.selectedIndex[1];
    if(p2pMod.presentationController.getFlowType()==="P2P"){
      //var rowid=scope.view.segRecipients.selectedRowIndex[1];
      //var selectedAccountDetails = scope.view.segRecipients.data[rowid];
      var selectedAccountDetails=scope.deletesegData[rowid];
      p2pMod.presentationController.setP2PPayeeData(selectedAccountDetails);
      var basicConfig = {message: applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.deleteRecipient","Do you want to delete the recipient"),
                         alertIcon:null,
                         alertType: constants.ALERT_TYPE_CONFIRMATION,alertTitle: applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfers.deleteAlertTitle"),
                         yesLabel:applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertYes"),
                         noLabel: applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertNo"), 
                         alertHandler: scope.deleteHandler
                        };
    }
    if(transferModule.presentationController.getFlowType()==="SameBankRecipients"){
      var selectedAccountDetails=scope.deletesegData[rowid];
      transferModule.presentationController.setBenificiaryDetails(selectedAccountDetails);
      var basicConfig = {message: applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfers.deleteAlertMessage"),alertIcon:null,alertType: constants.ALERT_TYPE_CONFIRMATION,alertTitle: applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfers.deleteAlertTitle"),yesLabel:applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertYes"),
                         noLabel: applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertNo"), alertHandler: scope.deleteHandler
                        };
    }
    if(transferModule.presentationController.getFlowType()==="OtherBankRecipients"){
      var selectedAccountDetails=scope.deletesegData[rowid];
      transferModule.presentationController.setBenificiaryDetails(selectedAccountDetails);
      var basicConfig = {message: applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfers.deleteAlertMessage"),alertIcon:null,alertType: constants.ALERT_TYPE_CONFIRMATION,alertTitle: applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfers.deleteAlertTitle"),yesLabel:applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertYes"),
                         noLabel: applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertNo"), alertHandler: scope.deleteHandler
                        };
    }
    if(transferModule.presentationController.getFlowType()==="InternationalRecipients"){
      var selectedAccountDetails=scope.deletesegData[rowid];
      transferModule.presentationController.setBenificiaryDetails(selectedAccountDetails);
      var basicConfig = {message: applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfers.deleteAlertMessage"),alertIcon:null,alertType: constants.ALERT_TYPE_CONFIRMATION,alertTitle: applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transfers.deleteAlertTitle"),yesLabel:applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertYes"),
                         noLabel: applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.common.AlertNo"), alertHandler: scope.deleteHandler
                        };
    }
    var pspConfig = {};                                                                                           
    applicationManager.getPresentationUtility().showAlertMessage(basicConfig, pspConfig);
  },
  deleteHandler:function(response){
      if(response === true){                                       
        applicationManager.getPresentationUtility().showLoadingScreen();
        var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
        var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        if(p2pMod.presentationController.getFlowType()==="P2P"){
          p2pMod.presentationController.deleteP2PRecipient();
        }
        else{
          transferModule.presentationController.deleteSameBankBenificiary();
        }
      }
    },
  	getDataMap : function(type){
      	var dataMap={};
      	if(type==="SameBankRecipients"){
      		dataMap = {
            "lblAccountName":"nickName",
            "lblAccountBal":"accountType",
            "lblBankName":"",
            "lblAccountBalValue":"",
			"template": "flxAccountsNoImage",
            "type":"type",
            "flxDelete":"flxDelete",
            "flxMain":"flxMain"
        	};
      	}
      if(type==="OtherBankRecipients"){
        dataMap = {
         "imgBank": "imgBank",
          "lblAccountName":"nickName",
          "lblBankName": "bankName",
          "lblAccountBalValue": "",
          "lblAccountBal":"accountType",
          "template": "flxAccounts",
		  "type":"type",
          "flxDelete":"flxDelete",
          "flxMain":"flxMain"
        };
      }
     if(type==="InternationalRecipients"){
        dataMap = {
          "lblAccountName":"nickName",
          "lblBankName": "bankName",
           "lblAccountBalValue": "",
          "lblAccountBal":"accountType",
          "template": "flxAccounts",
		  "type":"type",
          "flxDelete":"flxDelete",
          "flxMain":"flxMain"
        };
      }
      if(type==="P2P"){
       dataMap = {
            "lblAccountName":"nickName",
            "lblBankName":"phone",
            "lblAccountBalValue":"",
            "lblAccountBal":"",
            "template": "flxAccountsNoImage",
			"type":"type",
            "flxDelete":"flxDelete",
            "flxMain":"flxMain"
			
        };
      }
   	  	return dataMap;
  	},
	segmentRowClick: function() {
	  applicationManager.getPresentationUtility().showLoadingScreen();
      var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
	 if(transferModule.presentationController.getFlowType()==="SameBankRecipients"){
		var rowid=this.view.segRecipients.selectedRowIndex[1];
		var selectedAccountDetails = this.view.segRecipients.data[rowid];
        var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      	transferModule.presentationController.getBenificiaryScheduledAndPostedTransactions(selectedAccountDetails);
     }
     if(transferModule.presentationController.getFlowType()==="OtherBankRecipients"){
		var rowid=this.view.segRecipients.selectedRowIndex[1];
		var selectedAccountDetails = this.view.segRecipients.data[rowid];
		var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
        transferModule.presentationController.getBenificiaryScheduledAndPostedTransactions(selectedAccountDetails);
      }
      
    if(transferModule.presentationController.getFlowType()==="InternationalRecipients"){
      	applicationManager.getPresentationUtility().showLoadingScreen();
        var rowid=this.view.segRecipients.selectedRowIndex[1];
		var selectedAccountDetails = this.view.segRecipients.data[rowid];
    	var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    	transferModule.presentationController.navigateToTransfersRecipientDetails(selectedAccountDetails);
      }
    if(p2pMod.presentationController.getFlowType()==="P2P"){
	    var rowid=this.view.segRecipients.selectedRowIndex[1];
	    var selectedAccountDetails = this.view.segRecipients.data[rowid];
	    p2pMod.presentationController.navToP2PRecipientDetails(selectedAccountDetails);
	
     }
    },
   
 showSuccessMessage : function(){
//    var navManager = applicationManager.getNavigationManager();
//    var benificiaryList=navManager.getCustomInfo("frmManageRecipientList");
   var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
   if(p2pMod.presentationController.getFlowType()==="P2P"){
     if(p2pMod.presentationController.isDeleteDone){       
       this.bindGenericSuccess(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.p2p.deleteRecipient"));
       p2pMod.presentationController.isDeleteDone=false;
     }
     if(p2pMod.presentationController.isNickNameUpdated){
       this.bindGenericSuccess(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.successUpdate"));
       p2pMod.presentationController.isNickNameUpdated = false;
     }
     if(p2pMod.presentationController.isPayeeAdded){
       this.bindGenericSuccess(applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.addBenificiary"));
       p2pMod.presentationController.isPayeeAdded = false;
     }
   }
   var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    if(transferModule.presentationController.getFlowType()==="SameBankRecipients"){
     if(scope_TransfersPresentationController.sameBankBenificiaryAdded){
     	applicationManager.getDataProcessorUtility().showToastMessageSuccess(this,applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.addBenificiary","Successfully recipient was added"));
       	scope_TransfersPresentationController.sameBankBenificiaryAdded=false;
     }
     if(scope_TransfersPresentationController.isNickNameUpdated){
     	applicationManager.getDataProcessorUtility().showToastMessageSuccess(this,applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.successUpdate","Successfully recipient nick name was updated"));
       	scope_TransfersPresentationController.isNickNameUpdated=false;
     }
     if(scope_TransfersPresentationController.isRecipientDeleted){
     	applicationManager.getDataProcessorUtility().showToastMessageSuccess(this,applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.deleteBenificiary","Successfully recipient deleted permanently"));
       	scope_TransfersPresentationController.isRecipientDeleted=false;
     }
    }
   else if(transferModule.presentationController.getFlowType()==="OtherBankRecipients"){
     if(scope_TransfersPresentationController.otherBankBenificiaryAdded){
     	applicationManager.getDataProcessorUtility().showToastMessageSuccess(this,applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.addBenificiary","Successfully recipient was added"));
       	scope_TransfersPresentationController.otherBankBenificiaryAdded=false;
     }
     if(scope_TransfersPresentationController.isNickNameUpdated){
     	applicationManager.getDataProcessorUtility().showToastMessageSuccess(this,applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.successUpdate","Successfully recipient nick name was updated"));
       	scope_TransfersPresentationController.isNickNameUpdated=false;
     }
     if(scope_TransfersPresentationController.isRecipientDeleted){
     	applicationManager.getDataProcessorUtility().showToastMessageSuccess(this,applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.deleteBenificiary","Successfully recipient deleted permanently"));
       	scope_TransfersPresentationController.isRecipientDeleted=false;
     }
     
   }
   else{
     if(scope_TransfersPresentationController.internationalBenificiaryAdded){
     	applicationManager.getDataProcessorUtility().showToastMessageSuccess(this,applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.addBenificiary","Successfully recipient was added"));
       	scope_TransfersPresentationController.internationalBenificiaryAdded=false;
     }
     if(scope_TransfersPresentationController.isNickNameUpdated){
     	applicationManager.getDataProcessorUtility().showToastMessageSuccess(this,applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.successUpdate","Successfully recipient nick name was updated"));
       	scope_TransfersPresentationController.isNickNameUpdated=false;
     }
     if(scope_TransfersPresentationController.isRecipientDeleted){
     	applicationManager.getDataProcessorUtility().showToastMessageSuccess(this,applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.deleteBenificiary","Successfully recipient deleted permanently"));
       	scope_TransfersPresentationController.isRecipientDeleted=false;
     }
   }
 },
  setNoPayeeLabel:function(){
    var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
    if(p2pMod.presentationController.getFlowType()==="P2P"){
      this.view.lblNoTransaction.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.p2p.noAccounts","No Payees Available");
    }
    else{
       this.view.lblNoTransaction.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Transfers.NoTransaction","No Accounts Available");
    }
  },
 
  bindGenericSuccess : function(msg){
    	applicationManager.getPresentationUtility().dismissLoadingScreen();
    	applicationManager.getDataProcessorUtility().showToastMessageSuccess(this,msg);
  	},
    bindGenericError : function(msg){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    applicationManager.getDataProcessorUtility().showToastMessageError(this, msg);
  },
  
/************************************************************************************
  Name: setDataForOtherBeneficiaries - set segment data
  Author: Sindhu
  Date: 1/11/2018
  Input: beneficiaryName,accountNumber, nickName
  Return: segmentData
*************************************************************************************/
  setDataForOtherBeneficiaries: function(pBeneficiaryList){
    kony.print("setDataForOtherBeneficiaries==="+JSON.stringify(pBeneficiaryList));
    if(pBeneficiaryList && pBeneficiaryList.length){
      this.view.lblNoTransaction.text = ""
      this.view.flxNoTransactions.setVisibility(false);
      this.view.segRecipients.setVisibility(true);
      this.view.segRecipients.widgetDataMap = {
        lblSurName: "beneficiaryName",
        lblBenficiaryNumber: "accountNumber",
        lblNickName: "nickName"
      };
      this.view.segRecipients.setData(pBeneficiaryList);
    }else{
      this.view.flxNoTransactions.setVisibility(true);
      this.view.segRecipients.removeAll();
      this.view.segRecipients.setVisibility(false);
      this.view.lblNoTransaction.text = kony.i18n.getLocalizedString("kony.ahb.transfers.noBeneficiaries");
    }
  },
  
/***********************************************************************************************
  Name: onRowClickOfBeneficiary - get selectedRoeItem and setCustomInfo and navigate to next form
  Author: Sindhu
  Date: 2/11/2018
  Input: none
  Return: slectedRow items and navigate to frmManageP2pRecipient
*************************************************************************************/
  onRowClickOfBeneficiary: function(){
    var selectedItems = this.view.segRecipients.selectedRowItems;
    kony.print("onRowClickOfBeneficiary_lSelectedItems : " +JSON.stringify(selectedItems[0]));
    var allBeneficiaryData = {};
    
   
    var navManager = applicationManager.getNavigationManager();
    if(selectedItems && selectedItems.length){
      selectedItems = selectedItems[0];
      allBeneficiaryData.beneficiaryType = selectedItems.beneficiaryType;
      allBeneficiaryData.beneficiaryNickName = selectedItems.nickName;
      allBeneficiaryData.beneficiaryName = selectedItems.beneficiaryName;
      allBeneficiaryData.beneficiaryBankName = selectedItems.bankName;
      allBeneficiaryData.beneficiaryIBAN = selectedItems.accountNumber;
      allBeneficiaryData.beneficiaryAccountNumber = selectedItems.accountNumber;
      allBeneficiaryData.beneficiarySwiftCode = selectedItems.swiftCode;
      allBeneficiaryData.beneficiaryBranch = "";
      allBeneficiaryData.beneficiaryCountrySpecificCode = selectedItems.countrySpecificCode;
      allBeneficiaryData.beneficiaryCountryCode = "";
      allBeneficiaryData.beneficiaryCountryName = selectedItems.countryName;
      allBeneficiaryData.beneficiaryCountrySpecificCodeValue = selectedItems.countrySpecificCode;
      allBeneficiaryData.beneficiaryCountrySpecificCode = selectedItems.countrySpecificCode;
      allBeneficiaryData.beneficiaryOthersType = "";
      allBeneficiaryData.beneficiaryOTP = "";
      allBeneficiaryData.beneficiaryCurrency = "";
      allBeneficiaryData.beneficiaryAccountType = "";
      allBeneficiaryData.beneficiaryId = selectedItems.id;
	 kony.print("onRowClickOfBeneficiary_allBeneficiaryData"+allBeneficiaryData);
      var transferMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      transferMod.presentationController.setBeneficiaryAllData(allBeneficiaryData);
      //navManager.setCustomInfo("frmManageP2pRecipient" , selectedItems[0]);
      navManager.navigateTo("frmManageP2pRecipient");
    }
  },
  
/***********************************************************************************************
  Name: bindSuccessMessage - errorMessage
  Author: Sindhu
  Date: 6/11/2018
  Input: none
  Return: errorMessage
*************************************************************************************/
  bindSuccessMessage: function(err){
    var scope = this;
    applicationManager.getDataProcessorUtility().showToastMessageError(scope,err);
  },
  
 /***********************************************************************************************
  Name: onBackClick - navigate to back
  Author: Sindhu
  Date: 6/11/2018
  Input: none
  Return: none
*************************************************************************************/ 
  onBackClick: function(){
    var navMan=applicationManager.getNavigationManager();
    navMan.goBack();
  } 
});