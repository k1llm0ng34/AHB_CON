define({
    popupMsg: '',
    timerCounter: 0,
    onNavigate: function(obj) {
        if (obj === undefined) {
            var newObj = {
                "popup": "none"
            };
            obj = newObj;
        }
        if (obj.popup === "successAddRecipient") {
            this.popupMsg = kony.i18n.getLocalizedString("kony.mb.p2p.successAddRecipient");
        }
        if (obj.popup === "none") {
            this.popupMsg = '';
        }
    },
   init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  preShow: function() {
    var navManager = applicationManager.getNavigationManager();
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");

    var transferOption = transferModule.presentationController.getTransfersOption();

    if(transferOption === "TPF"){
      transferModule.presentationController.setTransfersId("");
      this.fetchAllBeneficiaries();
    }else if(transferOption === "SCHEDULE"){
      this.editScheduledTRansfer();
    }else{ //for SLF
      transferModule.presentationController.setTransfersId("");
      this.initializeTransfersUI();
    }

    //this.initializeTransfersUI();
    this.initActions();

    //applicationManager.getPresentationUtility().dismissLoadingScreen();
   // var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm); 
    this.view.segTransactions.onRowClick = this.setToAccountsForTransferInputScreen;
    this.view.segOwnTransfer.onRowClick = this.setToAccountsForOwnTransfer;
    this.view.flxTransferSomeOne.onClick = this.someOneElseAHBCard;
    this.view.segEditScheduledTransfer.onRowClick = this.setToSchedulerTransfer;
  },
  
  initActions: function() {
    var scope = this;
    var configManager = applicationManager.getConfigurationManager();
    var MenuHandler =  applicationManager.getMenuHandler();
    MenuHandler.setUpHamburgerForForm(scope,configManager.constants.MENUTRANSFERS);


    this.view.flxAddBeneficiary.onClick = this.onAddBeneficiary;

    this.view.flxPayAPerson.onClick = this.fetchAllBeneficiaries;

    this.view.flxMakeTransfer.onClick = this.showMyAccounts;
    
    this.view.flxManage.onClick = this.editScheduledTRansfer;

    this.view.flxEditBeneficiary.onClick = this.onShowBenificiaryList;

  },
	 P2PEntitlement : function(){
//       var configManager = applicationManager.getConfigurationManager();
//       if (configManager.getConfigurationValue("ispayAPersonEnabled") !== "true") {
//         this.view.flxPayAPerson.setVisibility(false);
// 		this.view.flxMakeTransfer.left = "50dp";
//         this.view.flxManage.right = "50dp";
//         return;
//       }
    },


   
    showSearch: function() {
        if (kony.os.deviceInfo().name === "iPhone") {
            if (this.view.flxHeaderSearchbox.isVisible == true) {
                this.view.flxHeaderSearchbox.isVisible = false;
                this.view.flxSearch.isVisible = true;
                this.view.flxMainContainer.top = "0dp";
            } else {
                this.view.flxHeaderSearchbox.isVisible = true;
                this.view.flxSearch.isVisible = true;
                this.view.flxMainContainer.top = "40dp";
                this.view.customSearchbox.tbxSearch.text="";
                this.view.customSearchbox.tbxSearch.setFocus(true);
                this.view.customSearchbox.tbxSearch.onTextChange = this.tbxSearchOnTextChange;
            }
        } else {
            if (this.view.flxHeaderSearchbox.isVisible == true) {
                this.view.flxHeaderSearchbox.isVisible = false;
                this.view.flxSearch.isVisible = true;
                this.view.flxHeader.isVisible = true;
                this.view.flxMainContainer.top = "56dp";
                this.view.flxGradient.top = "56dp";
            } else {
                this.view.flxSearch.isVisible = true;
                this.view.flxHeader.isVisible = false;
                this.view.flxMainContainer.top = "40dp";
                this.view.flxGradient.top = "40dp";
                this.view.flxHeaderSearchbox.isVisible = true;
                this.view.customSearchbox.tbxSearch.text="";
                this.view.customSearchbox.tbxSearch.setFocus(true);
               this.view.customSearchbox.tbxSearch.onTextChange = this.tbxSearchOnTextChange;
            }
        }
    },
    cancelSearch:function(){
       this.view.flxHeaderSearchbox.isVisible = false;
       this.view.flxSearch.isVisible = true;
       if (kony.os.deviceInfo().name === "iPhone"){
         this.view.flxHeader.isVisible = false;
        this.view.flxMainContainer.top = "0dp";
       }
       else{
         this.view.flxHeader.isVisible = true;
          this.view.flxMainContainer.top = "56dp";
       }
       if (this.segmentData.length > 0) {
                this.view.segTransactions.setData(this.segmentData);
                this.view.segTransactions.isVisible = true;
                this.view.flxNoTransactions.isVisible = false;
            } else {
                this.view.segTransactions.isVisible = false;
                this.view.flxNoTransactions.isVisible = true;
                // this.view.flxHeaderNT.isVisible = false;
            }
    },
    flxPayAPersonOnClick: function() {
		var navMan=applicationManager.getNavigationManager();
    	navMan.setEntryPoint("payaperson","frmTransfers");
        var payeeMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
        payeeMod.presentationController.getAllPayees();

          var P2P = applicationManager.getLoggerManager();          
                P2P.setCustomMetrics(this, false, "P2P");

    },
    showPopupSuccess: function() {
        var scopeObj = this;
        this.timerCounter = parseInt(this.timerCounter) + 1;
        var timerId = "timerPopupSuccess" + this.timerCounter;
        this.view.flxPopup.skin = "sknFlx43ce6e";
        this.view.customPopup.imgPopup.src = "confirmation.png";
        this.view.customPopup.lblPopup.text = this.popupMsg;
        this.view.flxPopup.setVisibility(true);
        kony.timer.schedule(timerId, function() {
            scopeObj.view.flxPopup.setVisibility(false);
        }, 3, false);
    },
     maketransferOnclick:function()
  {
    var transMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
        transMod.presentationController.transfersModule();
          var Transfers = applicationManager.getLoggerManager();                          
          Transfers.setCustomMetrics(this, false, "Transfers");
         
  },
  showSuccessPopup : function(refID,type){
    // TO DO i18n's
    var msg;
    if(type==="delete")
    {
      msg = "Transaction was cancelled successfully with reference ID : " + (refID.transactionId||refID.refernceId);
    }
    else{
      if(refID.referenceId)
      msg = "Transaction was done successfully with transaction ID : "+ refID.referenceId;
      else
        msg = "Transaction was edited successfully with reference ID : " + refID.transactionId;
    }
    applicationManager.getDataProcessorUtility().showToastMessageSuccess(this,msg);

  },
  showErrorPopup: function(err){
    
          applicationManager.getDataProcessorUtility().showToastMessageError(this,JSON.stringify(err));
},
  tbxSearchOnTextChange: function() {
        var navObj = applicationManager.getNavigationManager();
        var searchtext = this.view.customSearchbox.tbxSearch.text.toLowerCase();
        if (searchtext) {
            var data=[],headers=[];
            var lblPendingTranHeader = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accdetails.pendingTransactions");
            var lblPostedTranHeader = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accdetails.postedTransactions");
      		headers.push(lblPendingTranHeader);
      		headers.push(lblPostedTranHeader);
      		data.push(this.pendingaccounts);
      		data.push(this.postedaccounts);
            this.view.segTransactions.isVisible = true;
            this.view.flxNoTransactions.isVisible = false;
            this.view.segTransactions.removeAll();
            var searchobj = applicationManager.getDataProcessorUtility().commonSectionSegmentSearch("description",searchtext,data,headers);
            if (searchobj.length > 0) {
              	if(searchobj[0][0].lblHeader === "Pending Transactions")
                  searchobj[0][0].lblHeader = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.accdetails.scheduledTransactions");
                this.view.segTransactions.setData(searchobj);
            } else {
                this.view.segTransactions.isVisible = false;
                this.view.flxNoTransactions.isVisible = true;
            }
        } else {
            if (this.segmentData.length > 0) {
                this.view.segTransactions.setData(this.segmentData);
                this.view.segTransactions.isVisible = true;
                this.view.flxNoTransactions.isVisible = false;
            } else {
                this.view.segTransactions.isVisible = false;
                this.view.flxNoTransactions.isVisible = true;
                // this.view.flxHeaderNT.isVisible = false;
            }
        }
    },
    
    /*-----------------------------------------------------------------------------------

  Name: 	onAddBeneficiary
  Purpose: 	navigates to add beneficiary screen
  Author: 	Bipin
  Date: 	24/10/2018
  Input:	
  Return: 	

  ------------------------------------------------------------------------------------*/  

  onAddBeneficiary : function(){
    kony.print(" frmAHBBenTypes onClickOfNext ");
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    transferModule.presentationController.resetBeneficiaryData();
    var navManager = applicationManager.getNavigationManager();
    navManager.setEntryPoint("AddBeneficiary","frmTransfers");
    navManager.navigateTo("frmEnterBenAccNo");    
  },
  
  /************************************************************************************
  Name: onShowBenificiaryList - invoking onclick of editBeneficiary
  Author: Sindhu
  Date: 1/11/2018
  Input: widgetId
  Return: response to get beneficiarylist
*************************************************************************************/
  onShowBenificiaryList : function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    navManager.setEntryPoint("BeneficiaryListService","frmTransfers");
	navManager.navigateTo("frmManageRecipientList");
  },
  
 /*
  @Purpose To fetch all the beneficiaries
  @Input Not required
  @Output List of all beneficiaries
  */
  fetchAllBeneficiaries: function(){
    kony.print("entered fetchAllBeneficiaries");
    //this.view.segTransactions.rowTemplate= "flxScheduledTransfer";
    var transferMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");

    transferMod.presentationController.setTransfersOption("TPF");
    this.view.lblTransferHeader.text=kony.i18n.getLocalizedString("kony.ahb.transfers.movemoney");
    this.view.segOwnTransfer.removeAll();
    this.view.segOwnTransfer.setVisibility(false);
    
    this.view.segEditScheduledTransfer.setVisibility(false);
    this.view.segEditScheduledTransfer.removeAll();
    this.view.segTransactions.setVisibility(true);
    this.view.segTransactions.removeAll();
    
    this.view.flxTransferHeader.setVisibility(true);
    this.view.flxTransferSomeOne.setVisibility(true);
    this.view.flxBefeficiaryNotthere.setVisibility(true);
    this.view.lblMakeTransfers.skin= 'sknAHBLblGscB14ptC2C4C2';
    this.view.lblPayAPerson.skin = 'sknAHBLblGscB14pt363936';
    this.view.lblManage.skin = 'sknAHBLblGscB14ptC2C4C2';
    
//   if (kony.os.deviceInfo().name === "iPhone")
//    {
        this.view.flxBefeficiaryNotthere.bottom = "65dp";
    	this.view.segTransactions.height = "42%";
      	this.view.flxMainContainer.height ="75%";
 /*   }
    else{
      	this.view.segTransactions.height = "52%";
      	this.view.flxMainContainer.height ="78%";
    } */
    this.view.imgMakeTransfer.src = 'verticalarrowsgrey.png';
    this.view.imgPayAPerson.src = 'parallelarrowsorange.png';
    this.view.imgManage.src = 'reload.png';
    
    var otherBenificiaryList = transferMod.presentationController.getOtherBeneficiaryList();
    if(!otherBenificiaryList )//|| !otherBenificiaryList.length
    {
      	//this.showTransfersError(kony.i18n.getLocalizedString("kony.ahb.transfers.noBeneficiaries"));
      
     	 var navManager = applicationManager.getNavigationManager();
      	navManager.setEntryPoint("getBeneficiaries", "frmTransfers");
     	transferMod.presentationController.fetchOtherBankRecepients(); 
        
    } 
    else{
    
      this.setDataForOtherBeneficiaries(otherBenificiaryList);
  	}
  },

  /*
  @Purpose To set the list of beneficiaries on Transfer Page
  @Input List of all beneficiaries
  @Output Nothing
  */
  setDataForOtherBeneficiaries: function(beneList){
    kony.print("setDataForOtherBeneficiaries==="+JSON.stringify(beneList));
    var formatedBenList = this.modifyOtherBenResultSet(beneList);
    this.view.segTransactions.widgetDataMap = {
      lblAccountName: "beneficiaryName",
      lblPurpose: "AccntNoToDisplay",
      lblDate :"nickName"
    };
    this.view.segTransactions.setData(formatedBenList);
  },
  
  /*
  @Purpose To show error error message on Service Failure
  @Input Error Message
  @Output Nothing
  */
   showTransfersError: function(err){
    applicationManager.getDataProcessorUtility().showToastMessageError(this,err);
  },
   /*
  @Purpose To show error error message on Service Failure
  @Input Error Message
  @Output Nothing
  */
    bindGenericError: function(err){
    applicationManager.getDataProcessorUtility().showToastMessageError(this,err);
  },
  /*
  @Purpose To get the dashboard data
  @Input Nothing
  @Output Dashboard Service Response
  */
  getDashboardData: function(){
    var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
    var configManager = applicationManager.getConfigurationManager();
    var navManager = applicationManager.getNavigationManager();
    var cifObj = navManager.getCustomInfo("cifObj");
    navManager.setEntryPoint("DashboardService", configManager.constants.TRANSFERFLOW);
    var accountStatus = accountMod.presentationController.getAccountDataStatus();
    
    var currTime = new Date();
    var accStatusTimestamp = accountStatus.timeStamp;
    //var diff = getMinutesBetweenDates(accStatusTimestamp , currTime);
    
    if(accountStatus.hasAccountModified ){
      accountMod.presentationController.showDashboard(cifObj);
    }else{
      var dashboardData = accountMod.presentationController.getAllDashboardAccountData();
      kony.print("presentationAccountsSucc res==="+JSON.stringify(dashboardData));
      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule"); 
      transferModule.presentationController.setAccountsDataInTransfer(dashboardData);
    }
  },

  /*
  @Purpose To set the data for 'FromAccount' for a Transfer
  @Input None
  @Output Beneficiary Data Object
  */
  setToAccountsForTransferInputScreen: function(){
    kony.print("setToAccountsForTransferInputScreen start" );
    var transfer = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    var selectedRowItems = this.view.segTransactions.selectedRowItems;
    var response = transfer.presentationController.transferToOwnAndOtherAccount(selectedRowItems); 
    if(!response.isSuccess){
      this.showTransfersError(response.message);
    }
  },
  
  

  setToAccountsForOwnTransfer: function(){
    kony.print("setToAccountsForTransferInputScreen start" )
    var transfer = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    var selectedRowItems = this.view.segOwnTransfer.selectedRowItems;
    var response = transfer.presentationController.transferToOwnAndOtherAccount(selectedRowItems); 
    if(!response.isSuccess){
      this.showTransfersError(response.message);
    }
  },
  
  
  setToSchedulerTransfer: function(){
    kony.print("setToSchedulerTransfer start" );
    var transfer = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    var selectedRowItems = this.view.segEditScheduledTransfer.selectedRowItems;
    var navManager = applicationManager.getNavigationManager();
    navManager.setCustomInfo("frmTransferDetails",selectedRowItems);
    kony.print("selectedRowItems for schedule=="+JSON.stringify(selectedRowItems));
    if(selectedRowItems && selectedRowItems.length){
      transfer.presentationController.setscheduledTransferDetails(selectedRowItems); 
      var scheduleBenObj = {
        beneficiaryType: selectedRowItems[0].transferType,
        beneficiaryNickName : selectedRowItems[0].nickName,
        beneficiaryName : selectedRowItems[0].beneficiaryName,
        beneficiaryAccountNumber : selectedRowItems[0].beneficiaryAccountNumber,
        beneficiarySwiftCode : selectedRowItems[0].swiftCode,
        beneficiaryCountrySpecificCode : selectedRowItems[0].countrySpecificCode,
        beneficiaryCountrySpecificCodeValue : selectedRowItems[0].countrySpecificCode,
        beneficiaryCountryName : selectedRowItems[0].beneficiaryBankCountry,
       // beneficiaryCountryCode : selectedRowItems[0].countryCode,
       /*added bankName done as per MB-2406*/
        beneficiaryBankName : selectedRowItems[0].beneficiaryBankName,
        beneficiaryCurrency: selectedRowItems[0].txnCurrency ,
      }
      transfer.presentationController.setBeneficiaryAllData(scheduleBenObj);
      
     var  TransferObj ={
               	transferPaidBy : selectedRowItems[0].chargeIndicator,          
               	transferReason : selectedRowItems[0].txnPurpose,
                transferCurrency :selectedRowItems[0].txnCurrency,
                transferAmount : selectedRowItems[0].txnAmount,
                transferPaymentMode :selectedRowItems[0].paymentMode,
           			transferId : selectedRowItems[0].scheduledTxnId,
          			transferRemarks : selectedRowItems[0].txnRemarks
  				}
      transfer.presentationController.setAllTransferData(TransferObj);
      transfer.presentationController.setFromAccount(selectedRowItems[0].fromAccountNumber); 
      transfer.presentationController.setScheduledFrequencyKey(selectedRowItems[0].txnFrequency);
      transfer.presentationController.setScheduledTransferStartDate(selectedRowItems[0].txnStartDate);
      transfer.presentationController.setScheduledTransferCreatedDate(selectedRowItems[0].createdDate);

      var configManager = applicationManager.getConfigurationManager();
      transfer.presentationController.setScheduledFrequency([selectedRowItems[0].txnFrequency, selectedRowItems[0].txnFrequency]); 
      var ScheduledFlagValue = configManager.constants.AHB_SCHEDULED_YES;
      transfer.presentationController.setScheduledFlag(ScheduledFlagValue);
      var scheduledDate = selectedRowItems[0].scheduledDate
      if(scheduledDate!==""){
        var dateValue = scheduledDate.split("/");
        scheduledDate = dateValue[2] + "-" + dateValue[0] + "-" + dateValue[1];
        transfer.presentationController.setScheduledFormatDate(scheduledDate);
        transfer.presentationController.setScheduledDate(dateValue[1]+"/"+dateValue[0]+"/"+dateValue[2]);
      } else {
        scheduledDate = "";
        transfer.presentationController.setScheduledFormatDate(scheduledDate);
        transfer.presentationController.setScheduledDate(scheduledDate);
      }
      var scheduledDateAndFrequency = selectedRowItems[0].txnFrequency+" "+"from"+" "+scheduledDate;
      transfer.presentationController.setScheduledFormatDateAndFrequency(scheduledDateAndFrequency);
      var recurringPaymentValue ="";
      if(selectedRowItems[0].txnFrequency !== configManager.constants.AHB_FREQUENCY_JUSTONCE){
        recurringPaymentValue = configManager.constants.AHB_RECCURNING_YES;
      }else{
        recurringPaymentValue = configManager.constants.AHB_RECCURNING_NO;
      }
      transfer.presentationController.setRecurringPayment(recurringPaymentValue);      
      navManager.navigateTo("frmTransferDetails"); 
    }else{
       this.showTransfersError(kony.i18n.getLocalizedString("kony.error.StandardErrorMessage"));
    }
//     var beneType = "RMT";
//     transfer.presentationController.setBeneficiaryType(beneType); 
//     var response = transfer.presentationController.transferToOwnAndOtherAccount(selectedRowItems); 
//     if(!response.isSuccess){
//       this.showTransfersError(response.message);
//     }
  },

  /*-----------------------------------------------------------------------------------
  Name: 	initializeTransfersUI
  Purpose: 	To initialize the Transfers home screen UI
  Author: 	Sumit Bhatia
  Date: 	30/10/2018
  Input:	NA
  Return: 	NA
  ------------------------------------------------------------------------------------*/ 
  initializeTransfersUI: function(){
    this.view.segOwnTransfer.setVisibility(true);
    this.view.segOwnTransfer.removeAll();
  
    this.view.segTransactions.removeAll();
    this.view.segTransactions.setVisibility(false);
    
     this.view.segEditScheduledTransfer.setVisibility(false);
    this.view.segEditScheduledTransfer.removeAll();

//     if (kony.os.deviceInfo().name === "iPhone")
//     {
       // this.view.flxHeader.isVisible = false;
      this.view.MainHeader.isVisible =  true;
      this.view.customHeader.isVisible = false;
        this.view.flxFooter.isVisible = true;
      //  this.view.flxBefeficiaryNotthere.top= "82%";
        this.view.flxMainContainer.height ="80%";
      	this.view.segOwnTransfer.height = "60%";
//     }
//     else 
//     {
//         this.view.flxFooter.isVisible = false;
//         this.view.flxBefeficiaryNotthere.top= "89%";
//         this.view.flxMainContainer.height ="88%";
//       	this.view.segOwnTransfer.height = "52%";
//     }
    this.view.segTransactions.setData([]);
    this.view.segOwnTransfer.setData([]);
    this.view.segEditScheduledTransfer.setData([]);
    this.showMyAccounts();
  },
  
  /*-----------------------------------------------------------------------------------
  Name: 	showMyAccounts
  Purpose: 	To fetch the User Own Accounts for Transfers
  Author: 	Sumit Bhatia
  Date: 	30/10/2018
  Input:	NA
  Return: 	NA
  ------------------------------------------------------------------------------------*/  
  showMyAccounts: function(){
	this.setMyAccountSectionUI();
    this.view.segTransactions.setData([]);
    this.view.segTransactions.setVisibility(false);

    this.view.segOwnTransfer.setVisibility(true);
    this.view.segOwnTransfer.setData([]);
    this.view.segEditScheduledTransfer.setVisibility(true);
    this.view.segEditScheduledTransfer.setData([]);
    
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    transferModule.presentationController.setTransfersOption("SLF");
    
    var accountsData = transferModule.presentationController.getAccountsData();
    if(accountsData)
    {
      this.populateMyOwnAccountsSegment(accountsData);
    }
    else
    {
      this.getDashboardData();
    } 
    
  },
  
  /*-----------------------------------------------------------------------------------
  Name: 	editScheduledTRansfer
  Purpose: 	To enable user to edit Scheduled transfers
  Author: 	Sumit Bhatia
  Date: 	30/10/2018
  Input:	NA
  Return: 	NA
  ------------------------------------------------------------------------------------*/
  editScheduledTRansfer: function(){ 
    applicationManager.getPresentationUtility().showLoadingScreen();
    var transferMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    transferMod.presentationController.setTransfersOption("SCHEDULE");
    
    this.view.segOwnTransfer.removeAll();
    this.view.segOwnTransfer.setVisibility(false);

    this.view.segTransactions.setVisibility(false);
    this.view.segTransactions.removeAll();
    
    this.view.segEditScheduledTransfer.setVisibility(true);
    this.view.segEditScheduledTransfer.removeAll();
   
    this.view.flxTransferHeader.setVisibility(true);
    this.view.lblTransferHeader.text=kony.i18n.getLocalizedString("kony.ahb.transfers.scheduledTransfers");
    this.view.flxTransferSomeOne.setVisibility(false);
    this.view.flxBefeficiaryNotthere.setVisibility(false);
    
    this.view.lblMakeTransfers.skin= 'sknAHBLblGscB14ptC2C4C2';
    this.view.lblPayAPerson.skin = 'sknAHBLblGscB14ptC2C4C2';
    this.view.lblManage.skin = 'sknAHBLblGscB14pt363936';
    
    this.view.imgMakeTransfer.src = 'verticalarrowsgrey.png';
    this.view.imgPayAPerson.src = 'parallelarrowsgrey.png';
    this.view.imgManage.src = 'reloadorange.png';
    
//     if (kony.os.deviceInfo().name === "iPhone")
//     {
      this.view.MainHeader.isVisible =  true;
      this.view.customHeader.isVisible = false;
      this.view.flxFooter.isVisible = true;

//       this.view.flxMainContainer.height ="78%";
//       this.view.segEditScheduledTransfer.height = "43%";
//     }else 
//     {
//       this.view.flxFooter.isVisible = false;
//       this.view.flxBefeficiaryNotthere.top= "89%";
//       this.view.flxMainContainer.height ="88%";
//       this.view.segEditScheduledTransfer.height = "52%";
//     }
    
    
//      if (kony.os.deviceInfo().name === "iPhone")
//     {
      this.view.flxMainContainer.height ="80%";
      this.view.segEditScheduledTransfer.height = "60%"; 
//     }
//     else{
//       this.view.flxMainContainer.height ="88%";
//       this.view.segEditScheduledTransfer.height = "62%";
//     }

    var editScheduledTransferList = transferMod.presentationController.getScheduledTransfersList(); 
    if (!editScheduledTransferList)
    {
      transferMod.presentationController.fetchScheduledTransfers();
    } else {
      this.setDataForeditScheduledTransfer(editScheduledTransferList);
    }
  },

  setDataForeditScheduledTransfer: function(editScheduledTransferData) {
    kony.print("setDataForeditScheduledTransfer===" + JSON.stringify(editScheduledTransferData));
    var segData = editScheduledTransferData;
    for (var i = 0; i<segData.length; i++){
      var benificiaryAccountNumber = segData[i]["beneficiaryAccountNumber"];
      kony.print("schedule transfer segdata "+JSON.stringify(segData));
      if(segData[i]["paymentMode"] === "AC"){
        benificiaryAccountNumber = formatAlphanumericString(benificiaryAccountNumber);
        benificiaryAccountNumber = getMaskedString(7,14,"*",benificiaryAccountNumber);
      }
      
      segData[i]["txnAmountUI"] = commaSeparatorUtil(appendCurrency(segData[i]["txnAmount"], segData[i]["txnCurrency"]));//segData[i]["txnAmount"] +" "+segData[i]["txnCurrency"];
      segData[i]["lblAccountName"] = segData[i]["beneficiaryName"] ? segData[i]["beneficiaryName"] : benificiaryAccountNumber;
    }
    this.view.segEditScheduledTransfer.widgetDataMap = {
      lblAccountName: "lblAccountName",
      lblPurpose: "txnFrequency",
      lblDate: "scheduledDate",
      lblAmount: "txnAmountUI",
      template: "flxEditScheduledTransfer",
    };
    this.view.segEditScheduledTransfer.setData(segData);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    this.view.forceLayout();
  },


  /*-----------------------------------------------------------------------------------
  Name: 	populateMyOwnAccountsSegment
  Purpose: 	To populate data in my Accounts section
  Author: 	Sumit Bhatia
  Date: 	02/11/2018
  Input:	pMyAccountsData:{object Array }- contains the reulst set of Dashboard service
  Return: 	NA
  ------------------------------------------------------------------------------------*/
  populateMyOwnAccountsSegment: function(pMyAccountsData)
  {
    //this.setMyAccountSectionUI();
    applicationManager.getPresentationUtility().showLoadingScreen();
    var myAccountsData = pMyAccountsData;
    var operativeAccounts = (myAccountsData && myAccountsData.operativeAccounts) ?myAccountsData.operativeAccounts:[];
    var creditCards = (myAccountsData && myAccountsData.cards ) ? myAccountsData.cards:[];
  
    kony.print("populateMyOwnAccountsSegment - operativeAccounts "+JSON.stringify(operativeAccounts));
    kony.print("populateMyOwnAccountsSegment  - cards "+JSON.stringify(creditCards));
	//this.view.segOwnTransfer.rowTemplate = "flxOwnAccountTransfer";
    
    this.view.segOwnTransfer.widgetDataMap = {
      lblAccountName: "lblAccountName",
      lblPurpose: "lblPurpose",
      lblDate :"lblDate",
      lblRightArrow:"lblRightArrow",
      lblBalance: "lblBalance"
    };
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    var frmAccount= transferModule.presentationController.getFromAccount();
    
    var myAccArray = [];
    var myCardsArray = [];
    var myAccRowObj =  {};
    var myCardsObj = {};
    var configManager = applicationManager.getConfigurationManager();
    
    for(var indx=0; indx < operativeAccounts.length;indx++)
    {
      kony.print("populateMyOwnAccountsSegment - Operative accounts indx" +JSON.stringify(operativeAccounts[indx]));
      if(frmAccount !== operativeAccounts[indx].AccountNumber){ 
        // if from account is already selected - do not show it in my "To" Account
        	var benAccountType = operativeAccounts[indx].AccountType;
          myAccRowObj = {
            lblAccountName : getOperativeAccountType(benAccountType),
            lblDate: appendCurrency(commaSeparatorUtil(operativeAccounts[indx].WorkingBalance),operativeAccounts[indx].Currency) ,
            lblPurpose :  formatAlphanumericString(operativeAccounts[indx].IBAN),
            lblRightArrow: {"text" :kony.i18n.getLocalizedString("kony.ahb.icons.arrowright")},
            lblBalance: {"text" :kony.i18n.getLocalizedString("kony.ahb.accountDetails.balance")},
            beneficiaryType : configManager.constants.TRANSFER_TYPE.SLF,
            nickName : "",
            currency:operativeAccounts[indx].Currency,
            beneficiaryName : operativeAccounts[indx].AccountName,
            bankName : configManager.constants.AHB_BANK_FULLNAME,
            beneficiaryIBAN : operativeAccounts[indx].IBAN,
            accountNumber  : operativeAccounts[indx].AccountNumber,
            swiftCode : configManager.constants.AHB_SWIFT_CODE,
            beneficiaryBranch : configManager.constants.AHB_BANK_FULLNAME,
            countrySpecificCode : "",
            beneficiaryCountryCode : configManager.constants.AHB_COUNTRY_CODE,
            countryName : configManager.constants.AHB_COUNTRY_UAE,
            beneficiaryCountrySpecificCodeValue : "",
            transferPaymentMode:configManager.constants.AHB_TRANSFER_MODE_ACCOUNT,
            template : "flxOwnAccountTransfer",
            beneficiaryAccountType: operativeAccounts[indx].AccountType  
          }
          myAccArray [myAccArray.length] = myAccRowObj;
        
      }
    }
    for(var indx=0; indx< creditCards.length;indx++)
    {
      	var beneficiaryCardType = creditCards[indx].CardType;
        var creditCardNumber = formatAlphanumericString(creditCards[indx].CreditCardNo);
        creditCardNumber = getMaskedString(7,14,"*",creditCardNumber);
      
        
      myCardsObj = {
        lblAccountName : creditCards[indx].CardSubType,
        lblDate:   appendCurrency(commaSeparatorUtil(creditCards[indx].AvailableLimit),creditCards[indx].CurrencyCode) ,
        lblPurpose : creditCardNumber ,
        lblRightArrow: {"text" :kony.i18n.getLocalizedString("kony.ahb.icons.arrowright")},
        lblBalance: {"text" :kony.i18n.getLocalizedString("kony.ahb.creditCardDetails.availableLimit")},
        beneficiaryType : configManager.constants.TRANSFER_TYPE.SLF,
        nickName : "",
        beneficiaryCurrency:creditCards[indx].CurrencyCode,
        beneficiaryName : creditCards[indx].CardSubType,
        bankName : configManager.constants.AHB_BANK_FULLNAME,
        beneficiaryIBAN : "",
        accountNumber  : creditCards[indx].CreditCardNo,
        swiftCode : configManager.constants.AHB_SWIFT_CODE,
        beneficiaryBranch : configManager.constants.AHB_BANK_FULLNAME,
        countrySpecificCode : "",
        beneficiaryCountryCode : configManager.constants.AHB_COUNTRY_CODE,
        countryName : configManager.constants.AHB_COUNTRY_UAE,
        beneficiaryCountrySpecificCodeValue : "",
        transferPaymentMode:configManager.constants.AHB_TRANSFER_MODE_CARD,
        template: "flxOwnAccountTransfer",
        beneficiaryAccountType: creditCards[indx].CardType,
 		    UserCifId:creditCards[indx].UserCifId     
      }
      myCardsArray [myCardsArray.length] = myCardsObj;
    }
    kony.print("Sumit Accounts "+myAccArray);
     kony.print("Sumit cards "+myCardsArray);
    myAccArray = myAccArray.concat(myCardsArray);
    kony.print("  this.view.segOwnTransfer.rowTemplate "+  this.view.segTransactions.rowTemplate);
    this.view.segOwnTransfer.setData(myAccArray);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    this.view.forceLayout();
  },  
  
  /*-----------------------------------------------------------------------------------
  Name: 	setMyAccountSectionUI
  Purpose: 	To set the UI elements for the My Accounts section on Transfers main page
  Author: 	Sumit Bhatia
  Date: 	02/11/2018
  Input:	NA
  Return: 	NA
  ------------------------------------------------------------------------------------*/
  setMyAccountSectionUI: function()
  {    
    this.view.flxTransferHeader.setVisibility(true);
    this.view.flxTransferSomeOne.setVisibility(false);
    this.view.flxBefeficiaryNotthere.setVisibility(false);
    this.view.lblMakeTransfers.skin= 'sknAHBLblGscB14pt363936';
    this.view.lblPayAPerson.skin = 'sknAHBLblGscB14ptC2C4C2';
    this.view.lblManage.skin = 'sknAHBLblGscB14ptC2C4C2';
    this.view.lblTransferHeader.text=kony.i18n.getLocalizedString("kony.ahb.transfers.movemoney");

 //   if (kony.os.deviceInfo().name === "iPhone")
 //   {
      this.view.flxMainContainer.height ="80%";
      this.view.segOwnTransfer.height = "60%"; 
   /* }
    else{
      this.view.flxMainContainer.height ="88%";
      this.view.segOwnTransfer.height = "62%";
    } */
    this.view.imgMakeTransfer.src = 'verticalarrowsorange.png';
    this.view.imgPayAPerson.src = 'parallelarrowsgrey.png';
    this.view.imgManage.src = 'reload.png';
  },
  
  /*-----------------------------------------------------------------------------------
  Name: 	modifyOtherBenResultSet
  Purpose: 	To set the UI elements for the My Accounts section on Transfers main page
  Author: 	Sumit Bhatia
  Date: 	06/11/2018
  Input:	pResult: {Object Array}- COntains resultset of Other Beneficiary list
  Return: 	formatedResults:{Object Array}- Contains the modified reulstset with required IBAN details
  ------------------------------------------------------------------------------------*/
  modifyOtherBenResultSet: function(pResult)
  {
    	var formatedResults = [];
    	for(var indx= 0; indx < pResult.length; indx++)
        {
        	var lObjectRow = pResult[indx];
          	lObjectRow.AccntNoToDisplay = formatAlphanumericString(pResult[indx]["accountNumber"]);
          	formatedResults[formatedResults.length] = lObjectRow;
        }  
    	kony.print("LOG : modifyOtherBenficiaryResSet - lObjectRow"+lObjectRow);
    	return formatedResults;
  },
  
  /*-----------------------------------------------------------------------------------
  Name: 	someOneElseAHBCard
  Purpose: 	
  Author: 	Bipin
  Date: 	07/11/2018
  Input:	NA
  Return: 	NA
  ------------------------------------------------------------------------------------*/ 
  someOneElseAHBCard : function(){
    kony.print(" someOneElseAHBCard start");
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");  
    transferModule.presentationController.resetBeneficiaryData();
    transferModule.presentationController.resetTransferData();
    transferModule.presentationController.resetFromAccountInfo();
    transferModule.presentationController.setBeneficiaryType("TPF");
    transferModule.presentationController.setTransferPaymentMode("AC");
    transferModule.presentationController.fetchConfigurationForTransfer();

  }
  
});