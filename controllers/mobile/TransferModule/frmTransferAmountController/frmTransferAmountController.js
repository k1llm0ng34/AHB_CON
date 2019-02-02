define({ 
  keypadString:'0.00',
  isPeriodUsed : false,
  timerCounter: 0,
  applicationLanguage:'',
  cardNumber:'',
  indicativeAmt:0,
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  
  preShow: function(){
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule"); 
    var benetype = transferModule.presentationController.getBeneficiaryType();
    this.enableTransfer(benetype);
//     if(kony.os.deviceInfo().name==="iPhone"){
//       // this.view.flxHeader.isVisible = false;
//       this.view.flxHeader.setVisibility(false);
//     }
    this.initializeFormSkins();

    this.initActions();
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    var transferId = transferModule.presentationController.getTransfersId();
    kony.print("transferId=="+transferId);
     if(!isEmpty(transferId)){
       this.view.tbxAccountNumber.setEnabled(false);
       this.view.lbxReasonData.setEnabled(false);
       this.view.lbxChargesData.setEnabled(false);
       this.view.txtAreaRemarks.setEnabled(false);
       this.view.btnSubmit.setVisibility(false);
       this.view.btnConfirm.onClick = this.onClickScheduledTransfer;
     }else{
       this.view.tbxAccountNumber.setEnabled(true);
       this.view.lbxReasonData.setEnabled(true);
       this.view.lbxChargesData.setEnabled(true);
       this.view.txtAreaRemarks.setEnabled(true);
       this.view.btnSubmit.setVisibility(true);
       this.view.btnSubmit.onClick = this.onClickScheduledTransfer;
       this.view.btnConfirm.onClick = this.continueOnClick;
     }
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    

    this.view.lblIndicativeAmount.setVisibility(false);
    this.view.lblavailableBalance.setVisibility(false);
    
    this.initValues();
    this.applicationLanguage = this.getApplicationLanguage();
    this.populatePickListData();
    
    
//     var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    var beneficiaryType = transferModule.presentationController.getBeneficiaryType();//calling benType
    this.setRemarksMaxChar(beneficiaryType);
    this.populateForm(beneficiaryType);//Populateform hide/show the widgets according the beneficiaryType


  },
  /*-----------------------------------------------------------------------------------
    Name: 	setRemarksMaxChar
    Purpose:to set the Max characters while entering remarks based on beneficiaryType
    Author: fariha	 
    Date: 	
    Input:	beneficiaryType
    Return: NA	
  ------------------------------------------------------------------------------------*/ 
  setRemarksMaxChar:function(beneficiaryType){
    var configManager = applicationManager.getConfigurationManager();
    var lTransferTypes = configManager.constants.TRANSFER_TYPE;
    if(beneficiaryType === lTransferTypes.SLF ||beneficiaryType === lTransferTypes.TPF){
      this.view.flxRemarks.txtAreaRemarks.maxTextLength = 16;
    }
    else{
      this.view.flxRemarks.txtAreaRemarks.maxTextLength = 35;
    }
  },
  initActions: function(){

    this.view.MainHeaderWithCancel.btnBack.onClick = this.btnBackOnClick;
    this.view.MainHeaderWithCancel.flxBack.onClick = this.btnBackOnClick;
    this.view.MainHeaderWithCancel.btnCancel.onClick = this.onCancel;
     
    this.view.customHeader.btnRight.onClick = this.cancelOnClick; 
    this.view.tbxTransferAmount.onBeginEditing = this.setFocusSkinForTransferAmount;
    
    this.view.txtAreaRemarks.onBeginEditing = this.setFocusSkinForRemarks;
   
    this.view.tbxAccountNumber.onBeginEditing = this.setFocusSkinForAlhilalBankAccount;
    //this.view.tbxAccountNumber.onDone = this.setCardNumber; //  this.setFocusSkinForAlhilalBankAccount;
    this.view.tbxAccountNumber.onEndEditing =  this.setFocusSkinForAlhilalBankAccount; //this.initializeFormSkins;
    this.view.tbxAccountNumber.onTextChange = this.setCardNumber;
    
    this.view.lbxReasonData.onSelection = this.setSelectedReason;
    this.view.lbxChargesData.onSelection = this.setSelectedChargeIndicator;
    this.view.lbxCurrency.onSelection = this.setSelectedCurrency;
    this.view.lbxFromAccountData.onSelection = this.setSelectedFromAccount;
    

   
    
    this.view.tbxTransferAmount.onDone = this.setTransferAmount;
    this.view.txtAreaRemarks.onDone = this.setEnteredTransferRemarks;
    this.view.tbxTransferAmount.onEndEditing = this.setTransferAmount;
    this.view.txtAreaRemarks.onEndEditing = this.setEnteredTransferRemarks;
    
    this.view.tbxTransferAmount.onTextChange = this.setTransferAmount;
    this.view.txtAreaRemarks.onTextChange = this.setEnteredTransferRemarks;
   // this.doNotCancelTransaction();
    
    this.view.onDeviceBack = this.onDeviceBackClick;
   
  },
  /*
  @Purpose To take the user to transfer page if user clicks cancel in Transfers flow
  */
  onClickCancel: function() {
    this.view.flxMain.setEnabled(true);
    this.view.AlertPopup.isVisible = false;
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var transferMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    var transferId = transferMod.presentationController.getTransfersId();
	transferMod.presentationController.resetScheduledTransferData();
    transferMod.presentationController.resetFromAccountInfo();

    if(isEmpty(transferId)){
      transferMod.presentationController.resetTransferData();
      transferMod.presentationController.resetBeneficiaryData();
    }
    transferMod.presentationController.commonFunctionForNavigation("frmTransfers");
  },
  /*
  @Purpose Onclick action of Cancel button on 'Transfers' page
  */
  onCancel : function(){
    kony.print("onCancel");
    this.view.flxMain.setEnabled(false);
    this.view.AlertPopup.isVisible = true;
    this.view.AlertPopup.btnDontCancel.onClick = this.doNotCancelTransaction;
    this.view.AlertPopup.btnOK.onClick = this.onClickCancel;
  },
  /*
  @Purpose To dismiss the pop up which comes after clicking cancel in Transfers flow
  */
  doNotCancelTransaction : function(){
    this.view.flxMain.setEnabled(true);
    this.view.AlertPopup.isVisible = false;
  },
  
  initValues : function (){
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    var transferPaymentMode  = transferModule.presentationController.getTransferPaymentMode();
    var navManager = applicationManager.getNavigationManager();
    var configManager = applicationManager.getConfigurationManager();
    var transferId = transferModule.presentationController.getTransfersId();
  		this.view.tbxTransferAmount.text = transferModule.presentationController.getTransferAmount();
    	this.view.txtAreaRemarks.text = transferModule.presentationController.getTransferRemarks();
    //TODO Remove this condition once its fixed from backend
    if(transferId){
        var reason =[[transferModule.presentationController.getTransferReason(), transferModule.presentationController.getTransferReason()]];
        this.view.lbxReasonData.masterData =  reason;
        this.view.lbxReasonData.selectedKey =  transferModule.presentationController.getTransferReason();
        var paidBy = [[transferModule.presentationController.getPaidByWhom(), transferModule.presentationController.getPaidByWhom()]];
        this.view.lbxChargesData.masterData =  paidBy;
        this.view.lbxChargesData.selectedKey = transferModule.presentationController.getPaidByWhom();
  }
    if((!isEmpty(transferId)) && (transferPaymentMode === configManager.constants.AHB_TRANSFER_MODE_CARD)){
      var creditCardNumber= "";
      creditCardNumber = formatAlphanumericString(transferModule.presentationController.getBeneficiaryAccountNumber()) ;
      creditCardNumber = getMaskedString(7,14,"*",creditCardNumber);
      kony.print("creditCardNumber=="+creditCardNumber);
      this.view.tbxAccountNumber.text = creditCardNumber;
    }else{
    	this.view.tbxAccountNumber.text = formatAlphanumericString(transferModule.presentationController.getBeneficiaryAccountNumber()) ;
    }
    this.view.lbxFromAccountData.selectedKey =  transferModule.presentationController.getFromAccount();
    kony.print("from account=="+transferModule.presentationController.getFromAccount());
    	//this.view.tbxAccountNumber.text = formatAlphanumericString(transferModule.presentationController.getBeneficiaryAccountNumber()) ;
    kony.print("initValues "+ JSON.stringify({AccountData:this.view.lbxFromAccountData.selectedKey ,
                                              selectedCurrency:this.view.lbxCurrency.selectedKey,
                                              TransferAmount:this.view.tbxTransferAmount.text,
                                              transferRemarks :this.view.txtAreaRemarks.text,
                                              AccountNumber :  this.view.tbxAccountNumber.text }))


  },

  continueOnClick :function(){
    kony.print("continueOnClick paramAccountDetails " );
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    var configManager = applicationManager.getConfigurationManager();
    var benType = transferModule.presentationController.getBeneficiaryType();
    var transferPaymentMode  = transferModule.presentationController.getTransferPaymentMode();
    transferModule.presentationController.resetScheduledTransferData();
    var ScheduledFlagValue = configManager.constants.AHB_SCHEDULED_NO;
    transferModule.presentationController.setScheduledFlag(ScheduledFlagValue);
    var navMan = applicationManager.getNavigationManager();
    var transferId = transferModule.presentationController.getTransfersId();
    var validationMsg = this.validateTransferData();
    if(validationMsg){
      this.bindGenericError(validationMsg);
    } else {
      if(benType === configManager.constants.TRANSFER_TYPE.TPF && transferPaymentMode === configManager.constants.AHB_TRANSFER_MODE_CARD ){     
        var paramAccountDetails = {
          cardNumber  : transferModule.presentationController.getBeneficiaryAccountNumber()
        };
        kony.print("continueOnClick paramAccountDetails "+ JSON.stringify(paramAccountDetails) );
         var transferId = transferModule.presentationController.getTransfersId();
    kony.print("transferId=="+transferId);
     if(!isEmpty(transferId)){
           navMan.navigateTo("frmTransferConfirmation");
        }else{
        transferModule.presentationController.validateCard(paramAccountDetails);
        }
      }else{
        navMan.navigateTo("frmTransferConfirmation");
      }
    }
  },
  onClickScheduledTransfer: function(){
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    var transferPaymentMode  = transferModule.presentationController.getTransferPaymentMode();
    var configManager = applicationManager.getConfigurationManager();
    //transferModule.presentationController.resetScheduledTransferData();
    var ScheduledFlagValue = configManager.constants.AHB_SCHEDULED_YES;
    transferModule.presentationController.setScheduledFlag(ScheduledFlagValue);
    var navMan = applicationManager.getNavigationManager();
    navMan.setEntryPoint("Calender","frmTransferAmount");
    var benType = transferModule.presentationController.getBeneficiaryType();

    var validationMsg = this.validateTransferData();
    if (!validationMsg) {
		//navMan.setCustomInfo("frmTransfersStartDate",{error : true, message:validationMsg });
      validationMsg = kony.i18n.getLocalizedString("kony.ahb.scheduleTransfer.noEnoughBalanceAtTheDateOfTransfer");
      if ( benType === configManager.constants.TRANSFER_TYPE.TPF && transferPaymentMode ===  configManager.constants.AHB_TRANSFER_MODE_CARD) {
        var paramAccountDetails = {
          cardNumber: transferModule.presentationController.getBeneficiaryAccountNumber()
        };
        kony.print("continueOnClick paramAccountDetails " + JSON.stringify(paramAccountDetails));
        var transferId = transferModule.presentationController.getTransfersId();
        if(!isEmpty(transferId)){
           navMan.navigateTo("frmTransfersStartDate");
        }else{
        transferModule.presentationController.validateCard(paramAccountDetails);
        }
      } else {
        navMan.navigateTo("frmTransfersStartDate");
      }
    }else{
      navMan.setCustomInfo("frmTransfersStartDate",{error : true, message:validationMsg });
      navMan.navigateTo("frmTransfersStartDate");
    }
    
  },
  
   /*-----------------------------------------------------------------------------------

  Name: 	bindGenericError
  Purpose: 	to display toast message on the screen
  Author: 	 
  Date: 	
  Input:	
  Return: 	

  ------------------------------------------------------------------------------------*/  
  bindGenericError: function (errorMsg) {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var scopeObj = this;
    applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
  },
  
    
  /*-----------------------------------------------------------------------------------
    Name: 	getApplicationLanguage
    Purpose:to fetch the application language selected
    Author: bipin	 
    Date: 	
    Input:	NA
    Return: NA	
  ------------------------------------------------------------------------------------*/  
  getApplicationLanguage : function(){
    var userManager = applicationManager.getUserPreferencesManager();
    var langPrefrence = userManager.getLanguagePrefrence();
    kony.print("langPrefrence" +langPrefrence);
    return langPrefrence;
  },
  
  /*-----------------------------------------------------------------------------------
    Name: 	populatePickListData
    Purpose:to populate the different picklist value fetched fron configuration service
    Author: bipin	 
    Date: 	
    Input:	NA
    Return: NA	
  ------------------------------------------------------------------------------------*/ 
  populatePickListData : function (){
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    var reasonMasterData = transferModule.presentationController.getMasterReasonData();
    var currenciesMasterData = transferModule.presentationController.getMasterCurrencies();
    var chargeIndicatorMasterData = transferModule.presentationController.getMasterChargeIndicator();
    var fromAccountData = transferModule.presentationController.filterDataForFromAccounts(transferModule.presentationController.getBeneficiaryType())
    fromAccountData.unshift(["",kony.i18n.getLocalizedString("kony.ahb.common.Listbox.Select")]);
    kony.print("PickListData"+JSON.stringify({ reasonMasterData,currenciesMasterData, chargeIndicatorMasterData,fromAccountData  }))
    var transferId = transferModule.presentationController.getTransfersId();
    kony.print("transferId=="+transferId);
     if(isEmpty(transferId)){
    this.view.lbxReasonData.masterData = this.prepareDataForPickList(reasonMasterData, this.applicationLanguage );
    
    this.view.lbxChargesData.masterData = this.prepareDataForPickList(chargeIndicatorMasterData, this.applicationLanguage );
     }
    this.view.lbxCurrency.masterData = this.prepareDataForCurrencies(currenciesMasterData);
    
    this.view.lbxFromAccountData.masterData =fromAccountData;
    
    this.view.lbxReasonData.selectedKey =  transferModule.presentationController.getTransferReason();
    this.view.lbxChargesData.selectedKey =  transferModule.presentationController.getPaidByWhom();
    this.view.lbxCurrency.selectedKey =  transferModule.presentationController.getTransferCurrency();
    this.setSelectedCurrency();
     this.view.lbxFromAccountData.selectedKey =  transferModule.presentationController.getFromAccount();
    this.setSelectedFromAccount();
    
    this.view.forceLayout();
//     this.view.lbxChargesData.selectedKeyValue
  },
  
 /*----------------------------------------------------------------------------------------------------------------
    Name: 	prepareDataForPickList
    Purpose:to format the different picklist value fetched fron configuration service to set masterdata in listbox
    Author: bipin	 
    Date: 	
    Input:	pMasterData - array of object
    Return: formattedData	 - array of array - [[key,value]]
  ------------------------------------------------------------------------------------------------------------------*/ 
  prepareDataForPickList : function (pMasterData, pLanguagePref){
    kony.print("prepareDataForPickList pMasterData data"+ JSON.stringify(pMasterData));
     kony.print("prepareDataForPickList pLanguagePref "+ pLanguagePref);
    var formattedData = [];
    var i ;
    if(pMasterData && pMasterData.length){
      if(pLanguagePref){
        for( i = 0 ; i < pMasterData.length; i++ ){      
          var listItem =[];
          listItem.push(pMasterData[i].key);
          if(pLanguagePref === "ar_AE" ){
            listItem.push(pMasterData[i]["ar_value"]);
          }else{
            listItem.push(pMasterData[i]["en_value"]);
          }
          formattedData.push(listItem);
        }
      }

    }
 	kony.print("prepareDataForPickList formatted data"+JSON.stringify(formattedData));
   
    formattedData.unshift(["",kony.i18n.getLocalizedString("kony.ahb.common.Listbox.Select")]);
	kony.print("prepareDataForPickList formatted data"+JSON.stringify(formattedData));
   
    return formattedData;
  },
  /*----------------------------------------------------------------------------------------------------------------
    Name: 	prepareDataForCurrencies
    Purpose:to format data fetched fron configuration service for currencies to set masterdata in listbox
    Author: bipin	 
    Date: 	
    Input:	pMasterData - array of object
    Return: formattedData	 - array of array - [[key,value]]
  ------------------------------------------------------------------------------------------------------------------*/ 
  prepareDataForCurrencies : function(pMasterData){
    kony.print("prepareDataForCurrencies pMasterData data"+JSON.stringify(pMasterData));

    var formattedData = [];
    var exchangeRates = {};
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    var configManager = applicationManager.getConfigurationManager();
    var benetype = transferModule.presentationController.getBeneficiaryType();
    var transferPaymentMode  = transferModule.presentationController.getTransferPaymentMode();

    var benCurr = transferModule.presentationController.getBeneficiaryCurrency();
    kony.print("prepareDataForCurrencies benCurr data"+benCurr);
    var fromAccCurr = transferModule.presentationController.getAccountCurrency();
    kony.print("prepareDataForCurrencies fromAccCurr data"+fromAccCurr);
    
    for( i = 0 ; i < pMasterData.length; i++ ){  
      var listItem = [];
      if (benetype !== "RMT" ) {
//         if(transferPaymentMode === "AC"){
//           formattedData = [["AED","AED"]];
//         }else{
          if(benCurr === fromAccCurr){
            formattedData = [[benCurr,benCurr]];
          }else{
             formattedData = [[benCurr,benCurr],[fromAccCurr,fromAccCurr]];
          }         
       // }       
      }else{
        listItem.push(pMasterData[i].key);
        listItem.push(pMasterData[i].key);
        formattedData.push(listItem);
      } 
      exchangeRates[pMasterData[i].key] = pMasterData[i]["exchange_rate"];
    }
    kony.print("prepareDataForCurrencies formatted data"+JSON.stringify(formattedData));
    kony.print("prepareDataForCurrencies exchangeRates data"+JSON.stringify(exchangeRates));
    formattedData = formattedData.length ? formattedData : [[configManager.constants.AHB_UAE_CURRENCY, configManager.constants.AHB_UAE_CURRENCY]];
    transferModule.presentationController.setMasterCurrenciesFormaattedData(exchangeRates);
    kony.print("prepareDataForCurrencies formatted data"+JSON.stringify(formattedData));
    return formattedData;
  },
  
 /*----------------------------------------------------------------------------------------------------------------
    Name: 	setSelectedCurrency
    Purpose: to set selected currenacy from the listbox
    Author: bipin	 
    Date: 	
    Input:	NA
    Return: NA
  ------------------------------------------------------------------------------------------------------------------*/ 
  setSelectedCurrency : function(){
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    kony.print("setSelectedCurrency"+JSON.stringify(this.view.lbxCurrency.selectedKey));

    transferModule.presentationController.setTransferCurrency(this.view.lbxCurrency.selectedKey);
    this.view.lblIndicativeAmount.setVisibility(false);
    var benetype = transferModule.presentationController.getBeneficiaryType();
    var getCurrenciesObj = transferModule.presentationController.getMasterCurrenciesFormaattedData();
    	var configManager = applicationManager.getConfigurationManager();
    var fromAccCurrency =transferModule.presentationController.getAccountCurrency();
    this.enableTransfer(benetype);
    this.showIndicativeBalance();
  },
  /*----------------------------------------------------------------------------------------------------------------
    Name: 	setSelectedReason
    Purpose:to set selected Reason from the listbox
    Author: bipin	 
    Date: 	
    Input:	NA
    Return: NA
  ------------------------------------------------------------------------------------------------------------------*/ 
  setSelectedReason :  function(){
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    kony.print("setSelectedReason"+JSON.stringify(this.view.lbxCurrency.selectedKey));

    transferModule.presentationController.setTransferReason(this.view.lbxReasonData.selectedKey);
    transferModule.presentationController.setTransferReasonKeyVal(this.view.lbxReasonData.selectedKeyValue);
    var benetype = transferModule.presentationController.getBeneficiaryType();
    this.enableTransfer(benetype);

  },
  /*----------------------------------------------------------------------------------------------------------------
    Name: 	setSelectedChargeIndicator
    Purpose:to set selected charge indicator by user from the listbox
    Author: bipin	 
    Date: 	
    Input:	NA
    Return: NA
  ------------------------------------------------------------------------------------------------------------------*/ 
  setSelectedChargeIndicator : function(){
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    kony.print("setSelectedReason"+JSON.stringify(this.view.lbxCurrency.selectedKey));
    transferModule.presentationController.setPaidByWhom(this.view.lbxChargesData.selectedKey);
    transferModule.presentationController.setPaidByWhomKeyVal(this.view.lbxChargesData.selectedKeyValue);
    var benetype = transferModule.presentationController.getBeneficiaryType();
    this.enableTransfer(benetype);

  },
  /*
  @Purpose Executes on selection of From Account
  @Input None
  @Output None
  */
  setSelectedFromAccount : function(){

    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    transferModule.presentationController.setFromAccount(this.view.lbxFromAccountData.selectedKey);
    var benetype = transferModule.presentationController.getBeneficiaryType();
    this.enableTransfer(benetype);
    // Get data for the selected account from the Dashboard service
    var selectedAccountData = transferModule.presentationController.getSelectedAccountInfo(this.view.lbxFromAccountData.selectedKey);
    if(this.view.lbxFromAccountData.selectedKey){
      this.view.lblFromAccount1.width = "25%";
      this.view.lbxFromAccountData.width = "75%";
      this.view.lblFromAccount1.text = kony.i18n.getLocalizedString("kony.mb.common.from");
    }else{
      this.view.lblFromAccount1.width = "65%";
      this.view.lbxFromAccountData.width = "35%";      
      this.view.lblFromAccount1.text = kony.i18n.getLocalizedString("kony.mb.common.FromAccount");
    }
        
    if(selectedAccountData.WorkingBalance){
      this.view.lblAvailableAmount.text = kony.i18n.getLocalizedString("kony.ahb.accountDetails.AvailableBalance")+" " +commaSeparatorUtil(appendCurrency(selectedAccountData.WorkingBalance, selectedAccountData.Currency)) ;
      this.view.lblAvailableAmount.setVisibility(true);

    }else{
      this.view.lblAvailableAmount.setVisibility(false);
    }
    
    kony.print(" setSelectedFromAccount selectedAccountData "+ JSON.stringify(selectedAccountData));
    var fromAccObj ={
      accountID:selectedAccountData.AccountNumber,
      Currency:selectedAccountData.Currency,
      unformattedBalance:selectedAccountData.WorkingBalance,
      accountType:selectedAccountData.AccountType,
      frmAccCifId :selectedAccountData.UserCifId
    };
    transferModule.presentationController.setFromAccountInfo(fromAccObj);
    if(benetype !== "RMT"){
      var currenciesMasterData = transferModule.presentationController.getMasterCurrencies();
      var fromattedCurr =this.prepareDataForCurrencies(currenciesMasterData); 
      this.view.lbxCurrency.masterData = fromattedCurr;
      this.view.lbxCurrency.selectedKey = transferModule.presentationController.getTransferCurrency()?transferModule.presentationController.getTransferCurrency():fromattedCurr[0][0];
      transferModule.presentationController.setTransferCurrency(this.view.lbxCurrency.selectedKey);

    }
    
    this.showIndicativeBalance();
    var vaildateAmount = this.validateTransferData();
    if(vaildateAmount){
      vaildateAmount = kony.i18n.getLocalizedString("kony.ahb.transfers.insufficientBalance");
      this.bindGenericError(vaildateAmount);
    }
       
  },
  /*----------------------------------------------------------------------------------------------------------------
    Name: 	setTransferAmount
    Purpose: to set transfer amount entred by user in global variable 
    Author: bipin	 
    Date: 	
    Input:	NA
    Return: NA
  ------------------------------------------------------------------------------------------------------------------*/ 
  setTransferAmount : function(){
    //this.initializeFormSkins();
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    
    transferModule.presentationController.setTransferAmount(this.view.tbxTransferAmount.text) ;//.trim());
    this.view.lblIndicativeAmount.setVisibility(false);
    var benetype = transferModule.presentationController.getBeneficiaryType();
    var getCurrenciesObj = transferModule.presentationController.getMasterCurrenciesFormaattedData();
	var configManager = applicationManager.getConfigurationManager();
    var fromAccCurrency = transferModule.presentationController.getAccountCurrency();
    
    this.enableTransfer(benetype);
    this.showIndicativeBalance();
    var vaildateAmount = this.validateTransferData();
    if (vaildateAmount) {
      vaildateAmount = kony.i18n.getLocalizedString("kony.ahb.transfers.transferAmountGreater");
      this.bindGenericError(vaildateAmount);
    }
  },
  /*----------------------------------------------------------------------------------------------------------------
    Name: 	setEnteredTransferRemarks
    Purpose:to set transfer remarks entred by user in global variable 
    Author: bipin	 
    Date: 	
    Input:	NA
    Return: NA
  ------------------------------------------------------------------------------------------------------------------*/ 
  setEnteredTransferRemarks : function(){
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    transferModule.presentationController.setTransferRemarks(this.view.txtAreaRemarks.text);//.trim());
  },
  /*----------------------------------------------------------------------------------------------------------------
    Name: 	showIndicativeBalance
    Purpose: To calculate the indicative value of transfer amount in from account currency
    Author: bipin	 
    Date: 	
    Input:	NA
    Return: NA
  ------------------------------------------------------------------------------------------------------------------*/ 
  showIndicativeBalance :  function(){
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    var selectedCurrency = transferModule.presentationController.getTransferCurrency();
    var getCurrenciesObj = transferModule.presentationController.getMasterCurrenciesFormaattedData();
    var configManager = applicationManager.getConfigurationManager();
    this.view.lblIndicativeAmount.setVisibility(false);
    var transferAmt = this.view.tbxTransferAmount.text; //.trim();
    var fromAccCurrency = transferModule.presentationController.getAccountCurrency();
    var formattedIndicativeBal = "";
    if(fromAccCurrency && selectedCurrency && fromAccCurrency != selectedCurrency && transferAmt && getCurrenciesObj[selectedCurrency]){
      var indicativeBal = (parseFloat(transferAmt))*(parseFloat(getCurrenciesObj[selectedCurrency]));  // converting to AED
      
      indicativeBal = indicativeBal /(parseFloat(getCurrenciesObj[fromAccCurrency])); // converting to from Account currency
      
      indicativeBal = indicativeBal.toFixed(2);
      this.indicativeAmt = indicativeBal;
      formattedIndicativeBal = appendCurrency(commaSeparatorUtil(indicativeBal),fromAccCurrency);  //Indicative value of transfer amount  in from account currency
      if(formattedIndicativeBal){
        this.view.lblIndicativeAmount.setVisibility(true);
        this.view.lblIndicativeAmount.text =  kony.i18n.getLocalizedString("kony.ahb.transfers.indicativeAccount") + " " + formattedIndicativeBal;
      }
    }
    transferModule.presentationController.setTransferIndicativeAmountValue(formattedIndicativeBal);
  },
  
   /*
  @Function: populateForm
  @Author : b.s.k.vantakala
  @Purpose : Based on Flow type Hides/shows widgets in form
  @Input : pFlow(Slf,Tpf,Rmt,AhbCard,OwnCard)
  @Returns : none
  @Date : 30/10/2018
  */ 
  populateForm : function(pFlow){
    var lFlow = pFlow;
    
    kony.print("populateForm pFlow " + pFlow);
    if(lFlow === "SLF" || lFlow === "TPF"){
      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      var transferPaymentMode  = transferModule.presentationController.getTransferPaymentMode();
      this.view.flxCharges.setVisibility(false);
      this.view.flxReason.setVisibility(false);
      if( lFlow === "TPF" && transferPaymentMode === "AC"){
         this.view.lblAlHilalBankAccountp.setVisibility(true);
         this.view.flxAlhilalBankAccount.setVisibility(true);
      }else{
         this.view.flxAlhilalBankAccount.setVisibility(false);
         this.view.lblAlHilalBankAccountp.setVisibility(false);
      }
    }else if(lFlow === "RMT"){
      this.view.flxCharges.setVisibility(true);
      this.view.flxReason.setVisibility(true);
      this.view.lblAlHilalBankAccountp.setVisibility(false);
      this.view.flxAlhilalBankAccount.setVisibility(false);
    }else if(lFlow === "AHBCARD"){
      this.view.flxCharges.setVisibility(false);
      this.view.flxReason.setVisibility(false);
      this.view.lblAlHilalBankAccountp.setVisibility(true);
      this.view.flxAlhilalBankAccount.setVisibility(true);
    }else if(lFlow === "OWNCARD"){
      this.view.flxCharges.setVisibility(false);
      this.view.flxReason.setVisibility(false);
      this.view.lblAlHilalBankAccountp.setVisibility(false);
      this.view.flxAlhilalBankAccount.setVisibility(false);
    }
  },
   /*
  @Function: setFocusSkinForTransferAmount
  @Author : b.s.k.vantakala
  @Purpose : To set focus on Textbox and assigns focus skin
  @Input : none
  @Returns : none
  @Date : 30/10/2018
  */ 
  setFocusSkinForTransferAmount : function(){
    this.initializeFormSkins();
    this.view.lblTranferAmountHolder.skin = "sknAHBBff6d00";
  },
   /*
  @Function: onClickFlxAlhilalBankAccount
  @Author : b.s.k.vantakala
  @Purpose : To set focus on Textbox and assigns focus skin
  @Input : none
  @Returns : none
  @Date : 30/10/2018
  */ 
  setFocusSkinForAlhilalBankAccount : function(){
    this.initializeFormSkins();
    this.view.lblAccountNumberHolder.skin = "sknAHBBff6d00";
  },
   /*
  @Function: initializeFormSkins
  @Author : b.s.k.vantakala
  @Purpose : to Initialize the lblHolder skins to grey
  @Input : none
  @Returns : none
  @Date : 30/10/2018
  */ 
  initializeFormSkins : function(){
     //this.view.lblTranferAmountHolder.skin = "sknAHBLined3d3d3";
    this.view.lblAccountNumberHolder.skin = "sknFlxf1f1f1";
    this.view.lblSeparator4.skin = "sknFlxf1f1f1";
    this.view.lblSeparator.skin= "sknFlxf1f1f1";
    this.view.lblseparator1.skin = "sknFlxf1f1f1";
    this.view.lblSeparator2.skin = "sknFlxf1f1f1";
    this.view.lblTranferAmountHolder.skin = "sknFlxf1f1f1";
    this.view.lblTranferAmountTypeHolder.skin = "sknFlxf1f1f1";
    
  },
  setFocusSkinForRemarks : function(){
    this.initializeFormSkins();
    this.view.lblSeparator4.skin = "sknAHBBff6d00";
  }, 
  /*
  @Purpose : Client Side validations for Transfers
  @Input : Beneficiary Type
  @Returns : none
  */ 
  enableTransfer: function (benetype){
    kony.print("enableTransfer benetype "+ benetype);
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    this.view.btnConfirm.skin = "sknAHBGscB16ptBeaeaeaTffffffRounded";
     this.view.btnConfirm.setEnabled(false);
    this.view.btnSubmit.skin = "sknAHBGscBtn16Pt858886";
    this.view.btnSubmit.setEnabled(false);
    if(!isEmpty(benetype)){
      if(benetype === "RMT"){
        if((!isEmpty(transferModule.presentationController.getFromAccount())) && 
           ((transferModule.presentationController.getTransferAmount() && transferModule.presentationController.getTransferAmount() > 0 )) && 
           (!isEmpty(transferModule.presentationController.getTransferCurrency())) && 
           (!isEmpty(transferModule.presentationController.getPaidByWhom())) && 
           (!isEmpty(transferModule.presentationController.getTransferReason()))) {
            this.view.btnConfirm.skin = "sknAHBGsc16ptBff6d00TffffffBr21pt";
            this.view.btnConfirm.setEnabled(true);
            this.view.btnSubmit.skin = "sknAHBGsc16ptBffffffTff6d00";
            this.view.btnSubmit.setEnabled(true);
        }
      }else if((benetype === "SLF")||(benetype === "TPF")){
        if((!isEmpty(transferModule.presentationController.getFromAccount())) && (!isEmpty(transferModule.presentationController.getBeneficiaryAccountNumber())) &&
           (transferModule.presentationController.getTransferAmount() && transferModule.presentationController.getTransferAmount() > 0 ) &&
           (!isEmpty(transferModule.presentationController.getTransferCurrency()))) {
              this.view.btnConfirm.skin = "sknAHBGsc16ptBff6d00TffffffBr21pt";
              this.view.btnConfirm.setEnabled(true);
              this.view.btnSubmit.skin = "sknAHBGsc16ptBffffffTff6d00";
              this.view.btnSubmit.setEnabled(true);
        }
      }
    }else{
      this.view.btnConfirm.skin = "sknAHBGscB16ptBeaeaeaTffffffRounded";
      this.view.btnConfirm.setEnabled(false);
      this.view.btnSubmit.skin = "sknAHBGscBtn16Pt858886";
      this.view.btnSubmit.setEnabled(false);
    }
  },
  
   /*-----------------------------------------------------------------------------------

  Name: 	btnBackOnClick
  Purpose: 	navigates back  to previous screen
  Author: 	Fariha
  Date: 	31/10/2018
  Input:	
  Return: 	

  ------------------------------------------------------------------------------------*/  
  
  btnBackOnClick:function(){
    var navMan=applicationManager.getNavigationManager(); 
    var transferMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    transferMod.presentationController.resetScheduledTransferData();
    var transferId = transferMod.presentationController.getTransfersId();
    transferMod.presentationController.resetFromAccountInfo();
    if(isEmpty(transferId)){
      transferMod.presentationController.resetTransferData();
      transferMod.presentationController.resetBeneficiaryData();
    }
    navMan.goBack(); 
  },

  /*-----------------------------------------------------------------------------------

  Name: 	validateTransferData
  Purpose: 	this will compare the amount entered by user and available balance in from account, 
  			To check this account has sufficient ablance to perform transfer or not
  Author: 	bipin 
  Date: 	01/11/2018
  Input:	NA
  Return: 	validationMsg if balance is not sufficient

  ------------------------------------------------------------------------------------*/  
  
  validateTransferData : function(){
    var validationMsg ="";
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    var fromAccountBal = transferModule.presentationController.getFromAccountBalance();
    var transferAmount = transferModule.presentationController.getTransferAmount();//.trim();
    kony.print(" validateTransferData fromAccountBal" + fromAccountBal);
    kony.print(" validateTransferData transferAmount" + transferAmount);
    //kony.print(" validateTransferData this.indicativeAmt" + this.indicativeAmt);
    
    var fromAccCurrency = transferModule.presentationController.getAccountCurrency();   
    var selectedCurrency = transferModule.presentationController.getTransferCurrency();
    var getCurrenciesObj = transferModule.presentationController.getMasterCurrenciesFormaattedData();
    var indicativeBal =0;
    if(transferAmount){
       indicativeBal = (parseFloat(transferAmount))*(parseFloat(getCurrenciesObj[selectedCurrency]));  // converting to AED
      
      indicativeBal = indicativeBal /(parseFloat(getCurrenciesObj[fromAccCurrency]));
          kony.print(" validateTransferData this.indicativeAmt" + indicativeBal);

    }// converting to from Account currency

    if( convertToFloat(fromAccountBal) < convertToFloat(indicativeBal) ){
      validationMsg = kony.i18n.getLocalizedString("kony.ahb.transfers.noSufficientFunds");
    }
    
    return validationMsg;
  },
  
  /*-----------------------------------------------------------------------------------

  Name: 	setCardNumber
  Purpose: 	set card number for someone else AHB card transfer
  Author: 	bipin 
  Date: 	06/11/2018
  Input:	
  Return: 	

  ------------------------------------------------------------------------------------*/  
  setCardNumber : function(){
    kony.print("setCardNumber start");
     var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      var selectionPos = this.view.tbxAccountNumber.getSelection(); 
      var currLength = this.view.tbxAccountNumber.text.length;
      var formattedValue = formattedCardNumber(this.view.tbxAccountNumber.text);
      kony.print("setCardNumber fromaattedCardNumber " + formattedValue);
      this.view.tbxAccountNumber.text = formattedValue;  
      this.cardNumber= this.view.tbxAccountNumber.text;
      this.cardNumber= this.cardNumber.replace(/\s/g, "");
    transferModule.presentationController.setBeneficiaryAccountNumber("");
      if(this.cardNumber.length === 16 ){  
        this.view.lblCardNoHolder.skin="sknAHBLined3d3d3"; 
        kony.print("setCardNumber cardNumber " + this.cardNumber);
        transferModule.presentationController.setBeneficiaryAccountNumber(this.cardNumber);
      }else if(formattedValue.length > currLength && selectionPos.startIndex %5 === 0 ){
        this.view.tbxAccountNumber.setSelection(selectionPos.startIndex+1);      
      }else{      
        this.view.tbxAccountNumber.setSelection(selectionPos.startIndex);      
      }
      kony.print("setCardNumber cardNumber " + this.cardNumber);
    var benetype = transferModule.presentationController.getBeneficiaryType();
     this.enableTransfer(benetype);
  },
  
  onDeviceBackClick :  function(){
   kony.print("onDeviceBackClick");
   this.btnBackOnClick();    
  }
    
});