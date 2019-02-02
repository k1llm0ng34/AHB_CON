define({
   scope_TransfersPresentationController :this,
   Transfer_PresentationController: function() {
        //scope_TransfersPresentationController = this;
        scope_TransfersPresentationController.externalAccount = false;
        scope_TransfersPresentationController.nickName = null;
        scope_TransfersPresentationController.entryPoint = "";
        scope_TransfersPresentationController.isNickNameUpdated = "";
        scope_TransfersPresentationController.isRecipientDeleted = "";
        scope_TransfersPresentationController.sameBankBenificiaryAdded = "";
        scope_TransfersPresentationController.otherBankBenificiaryAdded = "";
        scope_TransfersPresentationController.internationalBenificiaryAdded = "";
        scope_TransfersPresentationController.reEnteredAccountNumber = "";
        scope_TransfersPresentationController.swiftCode = "";
        scope_TransfersPresentationController.routingNumber = "";
        scope_TransfersPresentationController.countryName = "";
        scope_TransfersPresentationController.duration="";
        scope_TransfersPresentationController.toBankName="";
      	scope_TransfersPresentationController.transactionMode="";
        scope_TransfersPresentationController.isResendOtp =false;
    //** ScheduledTransfer data **//
    scope_TransfersPresentationController.scheduledDate="";
    scope_TransfersPresentationController.scheduledFrequency="";
    scope_TransfersPresentationController.scheduledTransfersList="";
    scope_TransfersPresentationController.scheduledFlag= "";
    scope_TransfersPresentationController.scheduledFormatDate= "";
    scope_TransfersPresentationController.scheduledFormatDateAndFrequency= "";
    scope_TransfersPresentationController.scheduledTransferDetails="";
    scope_TransfersPresentationController.scheduledFrequencyKey ="";
    scope_TransfersPresentationController.transfersOptions ="SLF"; 
    scope_TransfersPresentationController.startDate ="";
    scope_TransfersPresentationController.createdDate = "";


    /**   numberOfAsyncForInternalBen
          *  1.getFrequentSameBankAccount
          *  2.getSameBankAccount
            */
        scope_TransfersPresentationController.numberOfAsyncForInternalBen=2;
      /**   numberOfAsyncForExternalBen
          *  1.getFrequentOtherBankAccount
          *  2.getOtherBankAccount
            */
      scope_TransfersPresentationController.numberOfAsyncForExternalBen=2;
         /**   numberOfAsyncForInternationaAcc
          *  1.getFrequentInternationalExternalAccounts
          *  2.getAllInternationalExternalAccounts
            */
      scope_TransfersPresentationController.numberOfAsyncForInternationaAcc=2;
      //Beneficiary data 
      scope_TransfersPresentationController.beneficiaryType = '';
      scope_TransfersPresentationController.beneficiaryOthersType = '';
      scope_TransfersPresentationController.beneficiaryNickName = '';
     scope_TransfersPresentationController.beneficiaryId = '';
      scope_TransfersPresentationController.beneficiaryName = '';

      scope_TransfersPresentationController.beneficiaryBankName = '';
      scope_TransfersPresentationController.beneficiaryIBAN = '';
      scope_TransfersPresentationController.beneficiaryAccountNumber  = '';
      scope_TransfersPresentationController.beneficiarySwiftCode = '';
      scope_TransfersPresentationController.beneficiaryBranch = '';
      scope_TransfersPresentationController.beneficiaryCountrySpecificCode = '';
      scope_TransfersPresentationController.beneficiaryCountrySpecificCodeValue = '';
      scope_TransfersPresentationController.beneficiaryCountryName = "";
      scope_TransfersPresentationController.beneficiaryCountryCode = "";
      scope_TransfersPresentationController.beneficiaryOTP = "";
      scope_TransfersPresentationController.otherBeneficiaryList = "";
      scope_TransfersPresentationController.beneficiaryCurrency = "";
      scope_TransfersPresentationController.beneficiaryAccCifId = "";
      scope_TransfersPresentationController.beneficiaryIsIBAN = "";

      scope_TransfersPresentationController.accountsData = null;
      scope_TransfersPresentationController.myOwnAccountsData="";
    
      scope_TransfersPresentationController.beneficiaryAccountType = "";
     
     // Transfer from acc Data
      scope_TransfersPresentationController.fromAccNumber = "";
      scope_TransfersPresentationController.fromAccCurrency = "";
      scope_TransfersPresentationController.fromAccBalance = "";
      scope_TransfersPresentationController.fromAccountType = "";
      scope_TransfersPresentationController.fromAccountCifId = "";

     
     //Transfer   data
      scope_TransfersPresentationController.transferRemarks = "";
      scope_TransfersPresentationController.transferPaidBy = "";
     
      scope_TransfersPresentationController.transferReason = "";
      scope_TransfersPresentationController.transferCurrency = "";
      scope_TransfersPresentationController.transferAmount = "";
      scope_TransfersPresentationController.transferIndicativeAmountValue = "";
     scope_TransfersPresentationController.transferId = "";

     
       scope_TransfersPresentationController.transferSuccessData = "";
    scope_TransfersPresentationController.RecurringPayment = "";
     scope_TransfersPresentationController.transferPaymentMode = "";
    scope_TransfersPresentationController.ScheduledFlag= "";
    scope_TransfersPresentationController.ScheduledFormatDate= "";
     scope_TransfersPresentationController.transferOtp = "";
    //Transfer Configuration data
    scope_TransfersPresentationController.transferMasterReasonData = [];
    scope_TransfersPresentationController.transferMasterCurrenciesData = [];
    scope_TransfersPresentationController.transferMasterChargeIndicatorData = [];
    scope_TransfersPresentationController.transferExchangeRateMapping ={};
    scope_TransfersPresentationController.transferMasterFrequencyData = [];


    kony.mvc.Presentation.BasePresenter.call(this);
    this.asyncManager = new AsyncManager();
  },
  
  //Beneficiary get/set functions
  setBeneficiaryIsIBAN: function(beneficiaryIsIBAN)
  {
    scope_TransfersPresentationController.beneficiaryIsIBAN = beneficiaryIsIBAN;
  },
  getBeneficiaryIsIBAN: function()
  {
    return scope_TransfersPresentationController.beneficiaryIsIBAN;
  },
  
  setBeneficiaryAccCifId: function(beneficiaryAccCifId)
  {
    scope_TransfersPresentationController.beneficiaryAccCifId = beneficiaryAccCifId;
  },
  getBeneficiaryAccCifId: function()
  {
    return scope_TransfersPresentationController.beneficiaryAccCifId;
  },

   setBeneficiaryAccountType: function(beneficiaryAccountType)
  {
    scope_TransfersPresentationController.beneficiaryAccountType = beneficiaryAccountType;
  },
  getBeneficiaryAccountType: function()
  {
    return scope_TransfersPresentationController.beneficiaryAccountType;
  },
  setBeneficiaryCurrency: function(beneficiaryCurrency)
  {
    scope_TransfersPresentationController.beneficiaryCurrency = beneficiaryCurrency;
  },
  getBeneficiaryCurrency: function()
  {
    return scope_TransfersPresentationController.beneficiaryCurrency;
  },

  setBeneficiaryType: function(beneficiaryType)
  {
    scope_TransfersPresentationController.beneficiaryType = beneficiaryType;
  },
  getBeneficiaryType: function()
  {
    return scope_TransfersPresentationController.beneficiaryType;
  },
   setBeneficiaryBankName:function(beneficiaryBankName)
    {
      scope_TransfersPresentationController.beneficiaryBankName = beneficiaryBankName;
    },
    getBeneficiaryBankName: function()
    {
       return scope_TransfersPresentationController.beneficiaryBankName;
    },
   setBeneficiaryAccountNumber: function(beneficiaryAccountNumber)
    {
      scope_TransfersPresentationController.beneficiaryAccountNumber = beneficiaryAccountNumber;
    },
     getBeneficiaryAccountNumber: function()
    {
       return scope_TransfersPresentationController.beneficiaryAccountNumber;
    },
   setBeneficiaryName: function(beneficiaryName)
    {
      scope_TransfersPresentationController.beneficiaryName = beneficiaryName;
    },
     getBeneficiaryName: function()
    {
       return scope_TransfersPresentationController.beneficiaryName;
    },
   setBeneficiaryBranch: function(beneficiaryBranch)
    {
      scope_TransfersPresentationController.beneficiaryBranch = beneficiaryBranch;
    },
     getBeneficiaryBranch : function()
    {
       return scope_TransfersPresentationController.beneficiaryBranch;
    },
   setBeneficiaryIBAN :function(beneficiaryIBAN)
    {
      scope_TransfersPresentationController.beneficiaryIBAN = beneficiaryIBAN;
    },
    getBeneficiaryIBAN: function()
    {
       return scope_TransfersPresentationController.beneficiaryIBAN;
    },
  	
    setbeneficiaryId:function(beneficiaryId)
    {
		scope_TransfersPresentationController.beneficiaryId = beneficiaryId;
    },
  
   getbeneficiaryId:function()
    {
		return scope_TransfersPresentationController.beneficiaryId;
    },
  
   setbeneficiaryNickName : function(beneficiaryNickName)
    {
      scope_TransfersPresentationController.beneficiaryNickName = beneficiaryNickName;
    },
     getbeneficiaryNickName : function()
    {
       return scope_TransfersPresentationController.beneficiaryNickName;
    },
   setBeneficiaryCountrySpecificCode :function(beneficiaryCountrySpecificCode)
    {
      scope_TransfersPresentationController.beneficiaryCountrySpecificCode = beneficiaryCountrySpecificCode;
    },
     getBeneficiaryCountrySpecificCode : function()
    {
       return scope_TransfersPresentationController.beneficiaryCountrySpecificCode;
    },
   setBeneficiarySwiftCode :function(beneficiarySwiftCode)
    {
      scope_TransfersPresentationController.beneficiarySwiftCode = beneficiarySwiftCode;
    },
    getBeneficiarySwiftCode:function()
    {
       return scope_TransfersPresentationController.beneficiarySwiftCode;
    },
   setBeneficiaryCountryName : function(beneficiaryCountryName)
    {
      scope_TransfersPresentationController.beneficiaryCountryName = beneficiaryCountryName;
    },
    getBeneficiaryCountryName:function()
    {
       return scope_TransfersPresentationController.beneficiaryCountryName;
    },
  setBeneficiaryCountryCode : function(beneficiaryCountryCode)
    {
      scope_TransfersPresentationController.beneficiaryCountryCode = beneficiaryCountryCode;
    },
     getBeneficiaryCountryCode:function()
    {
       return scope_TransfersPresentationController.beneficiaryCountryCode;
    },
   setBeneficiaryCountrySpecificCodeValuee : function(beneficiaryCountrySpecificCodeValue)
    {
      scope_TransfersPresentationController.beneficiaryCountrySpecificCodeValue = beneficiaryCountrySpecificCodeValue;
    },
     getBeneficiaryCountrySpecificCodeValuee:function()
    {
       return scope_TransfersPresentationController.beneficiaryCountrySpecificCodeValue;
    },
     setBeneficiaryOthersType:function(beneficiaryOthersType)
    {
      scope_TransfersPresentationController.beneficiaryOthersType = beneficiaryOthersType;
    },
     getBeneficiaryOthersType: function()
    {
       return scope_TransfersPresentationController.beneficiaryOthersType;
    },
    setBeneficiaryOTP:function(beneficiaryOTP)
    {
      scope_TransfersPresentationController.beneficiaryOTP = beneficiaryOTP;
    },
     getBeneficiaryOTP: function()
    {
       return scope_TransfersPresentationController.beneficiaryOTP;
    },
  	setOtherBeneficiaryList:function(otherBeneficiaryList)
    {
      scope_TransfersPresentationController.otherBeneficiaryList = otherBeneficiaryList;
    },
  	getOtherBeneficiaryList: function()
  	{
       return scope_TransfersPresentationController.otherBeneficiaryList;
    },
  	setMyOwnAccountsData:function(myOwnAccountsData)
    {
      scope_TransfersPresentationController.myOwnAccountsData = myOwnAccountsData;
    },
  	getMyOwnAccountsData: function()
  	{
       return scope_TransfersPresentationController.myOwnAccountsData;
    },

    //Transfer get/set Functions
    setAccountsData: function(accountsData){
      scope_TransfersPresentationController.accountsData = accountsData;
      kony.print("scope_TransfersPresentationController.accountsData=="+JSON.stringify(scope_TransfersPresentationController.accountsData));
    },
    getAccountsData: function(){
       kony.print("getAccountsData=="+scope_TransfersPresentationController.accountsData);
       return scope_TransfersPresentationController.accountsData;
    },

 
    setMasterReasonData: function(transferMasterReasonData){
      scope_TransfersPresentationController.transferMasterReasonData = transferMasterReasonData;

    },
    getMasterReasonData: function(){
      return scope_TransfersPresentationController.transferMasterReasonData;
    },

    setMasterChargeIndicator: function(transferMasterChargeIndicatorData){
      scope_TransfersPresentationController.transferMasterChargeIndicatorData = transferMasterChargeIndicatorData;

    },
    getMasterChargeIndicator: function(){
      return scope_TransfersPresentationController.transferMasterChargeIndicatorData;
    },

    setMasterCurrencies: function(transferMasterCurrenciesData){
      scope_TransfersPresentationController.transferMasterCurrenciesData = transferMasterCurrenciesData;

    },
    getMasterCurrencies: function(){
      return scope_TransfersPresentationController.transferMasterCurrenciesData;
    },
  
  	setMasterFrequency: function(transferMasterFrequencyData){
      scope_TransfersPresentationController.transferMasterFrequencyData = transferMasterFrequencyData;

    },
    getMasterFrequency: function(){
      return scope_TransfersPresentationController.transferMasterFrequencyData;
    },
  
     // From Acc set/get methods fromAccountCifId
  
   	setFromAccountCifId: function(fromAccountCifId){
      scope_TransfersPresentationController.fromAccountCifId = fromAccountCifId;
    },
    getFromAccountCifId: function(){
      return scope_TransfersPresentationController.fromAccountCifId;
    },
  
    setFromAccount: function(fromAccNumber){
      scope_TransfersPresentationController.fromAccNumber = fromAccNumber;
    },
    getFromAccount: function(){
      return scope_TransfersPresentationController.fromAccNumber;
    },

    setAccountCurrency: function(fromAccCurrency){
      scope_TransfersPresentationController.fromAccCurrency = fromAccCurrency;
    },
    getAccountCurrency: function(){
      return scope_TransfersPresentationController.fromAccCurrency;
    },
    setFromAccountBalance: function(fromAccBalance){
      scope_TransfersPresentationController.fromAccBalance = fromAccBalance;
    },
    getFromAccountBalance: function(){
      return scope_TransfersPresentationController.fromAccBalance;
    },
    setFromAccountType: function(fromAccountType){
      scope_TransfersPresentationController.fromAccountType = fromAccountType;
    },
    getFromAccountType: function(){
      return scope_TransfersPresentationController.fromAccountType;
    },
    setTransferRemarks: function(transferRemarks){
      scope_TransfersPresentationController.transferRemarks = transferRemarks;
    },
    getTransferRemarks: function(){
      return scope_TransfersPresentationController.transferRemarks;
    },
    setPaidByWhom: function(transferPaidBy){
      scope_TransfersPresentationController.transferPaidBy = transferPaidBy;
    },
    getPaidByWhom: function(){
      return scope_TransfersPresentationController.transferPaidBy;
    },
  
  // to store key and value
    setPaidByWhomKeyVal: function(transferPaidByKeyVal){
      scope_TransfersPresentationController.transferPaidByKeyVal = transferPaidByKeyVal;
    },
    getPaidByWhomKeyVal: function(){
      return scope_TransfersPresentationController.transferPaidByKeyVal;
    },

    setTransferReason : function(transferReason){
       scope_TransfersPresentationController.transferReason = transferReason;
    },
    getTransferReason : function(){
      return scope_TransfersPresentationController.transferReason ;
    },
  
  // to store reason key value pair

    setTransferReasonKeyVal : function(transferReasonKeyVal){
       scope_TransfersPresentationController.transferReasonKeyVal = transferReasonKeyVal;
    },
    getTransferReasonKeyVal : function(){
      return scope_TransfersPresentationController.transferReasonKeyVal ;
    },
  
  
  	setTransferCurrency : function(transferCurrency){
       scope_TransfersPresentationController.transferCurrency = transferCurrency;
    },
    getTransferCurrency : function(){
      return scope_TransfersPresentationController.transferCurrency ;
    },
  
  
  	setTransferAmount : function(transferAmount){
       scope_TransfersPresentationController.transferAmount =  convertToFloat(transferAmount);
    },
    getTransferAmount : function(){
      return scope_TransfersPresentationController.transferAmount ;
    },
  
  	setTransferIndicativeAmountValue : function(transferIndicativeAmountValue){
       scope_TransfersPresentationController.transferIndicativeAmountValue = transferIndicativeAmountValue;
    },
    getTransferIndicativeAmountValue : function(){
          return scope_TransfersPresentationController.transferIndicativeAmountValue ;
    },
  
  	setMasterCurrenciesFormaattedData : function(transferExchangeRateMapping){
       scope_TransfersPresentationController.transferExchangeRateMapping = transferExchangeRateMapping;
    },
    getMasterCurrenciesFormaattedData : function(){
      return scope_TransfersPresentationController.transferExchangeRateMapping ;
    },
  setScheduledDate: function(scheduledDate){
    scope_TransfersPresentationController.scheduledDate = scheduledDate;
  },
  getScheduledDate: function(){
    return scope_TransfersPresentationController.scheduledDate;
  },
  setScheduledFrequency: function(scheduledFrequency){
    scope_TransfersPresentationController.scheduledFrequency = scheduledFrequency;
  },
  getScheduledFrequency: function(){
    return scope_TransfersPresentationController.scheduledFrequency;
  },
   setScheduledFrequencyKey: function(scheduledFrequencyKey){
    scope_TransfersPresentationController.scheduledFrequencyKey = scheduledFrequencyKey;
  },
  getScheduledFrequencyKey: function(){
    return scope_TransfersPresentationController.scheduledFrequencyKey;
  },
  
  setScheduledTransfersList:function(scheduledTransfersList)
  {
    scope_TransfersPresentationController.scheduledTransfersList = scheduledTransfersList;
  },
  
  getScheduledTransfersList: function()
  {
    return scope_TransfersPresentationController.scheduledTransfersList;
  },
  
  setscheduledTransferDetails:function(scheduledTransferDetails)
  {
    scope_TransfersPresentationController.scheduledTransferDetails = scheduledTransferDetails;
  },
  getscheduledTransferDetails: function()
  {
    return scope_TransfersPresentationController.scheduledTransferDetails;
  },
  
  	setTransferOTP : function(transferOtp){
       scope_TransfersPresentationController.transferOtp = transferOtp ;
    },
    getTransferOTP : function(){
      return scope_TransfersPresentationController.transferOtp ;
    },

  //transferSuccessData
  
 
  	setTransferSuccessData : function(transferSuccessData){
       scope_TransfersPresentationController.transferSuccessData = transferSuccessData;
    },
    getTransferSuccessData : function(){
          return scope_TransfersPresentationController.transferSuccessData ;
    },
  
 	setTransferPaymentMode : function(transferPaymentMode){
       scope_TransfersPresentationController.transferPaymentMode = transferPaymentMode;
    },
    getTransferPaymentMode : function(){
          return scope_TransfersPresentationController.transferPaymentMode ;
    },
  setScheduledFlag : function(ScheduledFlag){
    scope_TransfersPresentationController.scheduledFlag = ScheduledFlag;
  },
  getScheduledFlag : function(){
    return scope_TransfersPresentationController.scheduledFlag ;
  },
  setScheduledFormatDate : function(ScheduledFormatDate){
    scope_TransfersPresentationController.scheduledFormatDate = ScheduledFormatDate;
  },
  getScheduledFormatDate : function(){
    return scope_TransfersPresentationController.scheduledFormatDate ;
  },

  setScheduledFormatDateAndFrequency : function(scheduledDateAndFrequency){
    scope_TransfersPresentationController.scheduledFormatDateAndFrequency = scheduledDateAndFrequency;
  },
  getScheduledFormatDateAndFrequency : function(){
    return scope_TransfersPresentationController.scheduledFormatDateAndFrequency ;
  },
  setRecurringPayment : function(RecurringPayment){
    scope_TransfersPresentationController.RecurringPayment = RecurringPayment;
  },
  getRecurringPayment : function(){
    return scope_TransfersPresentationController.RecurringPayment ;
  },
  
  ///Transfers option SLF, TPF, SCHEDULE
  setTransfersOption : function(transfersOption){
    scope_TransfersPresentationController.transfersOptions = transfersOption;
  },
  getTransfersOption : function(){
    return scope_TransfersPresentationController.transfersOptions ;
  },
  
   setTransfersId : function(transferId){
    scope_TransfersPresentationController.transferId = transferId;
  },
  getTransfersId : function(){
    return scope_TransfersPresentationController.transferId ;
  },
   
  getScheduledTransferStartDate : function(){
    return scope_TransfersPresentationController.startDate;
  },
  setScheduledTransferStartDate : function(startDate){
    scope_TransfersPresentationController.startDate = startDate;
  },
  getScheduledTransferCreatedDate : function(){
    return scope_TransfersPresentationController.createdDate;
  },
  setScheduledTransferCreatedDate : function(createdDate){
    scope_TransfersPresentationController.createdDate = createdDate;
  },
  
  getIsResendOtp : function(){
    return scope_TransfersPresentationController.isResendOtp;
  },
  setIsResendOtp : function(isResendOtp){
    scope_TransfersPresentationController.isResendOtp = isResendOtp;
  },

  resetBeneficiaryData : function(){
    scope_TransfersPresentationController.beneficiaryType = '';
    scope_TransfersPresentationController.beneficiaryNickName = '';
    scope_TransfersPresentationController.beneficiaryName = '';
    scope_TransfersPresentationController.beneficiaryBankName = '';
    scope_TransfersPresentationController.beneficiaryIBAN = '';
    scope_TransfersPresentationController.beneficiaryAccountNumber  = '';
    scope_TransfersPresentationController.beneficiarySwiftCode = '';
    scope_TransfersPresentationController.beneficiaryBranch = '';
    scope_TransfersPresentationController.beneficiaryCountrySpecificCode = '';
    scope_TransfersPresentationController.beneficiaryCountryCode = '';
    scope_TransfersPresentationController.beneficiaryCountryName = '';
    scope_TransfersPresentationController.beneficiaryCountrySpecificCodeValue = '';
    scope_TransfersPresentationController.beneficiaryOthersType = "";
    scope_TransfersPresentationController.beneficiaryOTP = "";
    scope_TransfersPresentationController.otherBeneficiaryList = "";
    scope_TransfersPresentationController.beneficiaryCurrency ="";
    scope_TransfersPresentationController.beneficiaryAccountType ="";
    //scope_TransfersPresentationController.RecurringPayment="";
    scope_TransfersPresentationController.beneficiaryId = "";
    scope_TransfersPresentationController.beneficiaryAccCifId = "";
    scope_TransfersPresentationController.beneficiaryIsIBAN= "";

  },

  getAllBeneficiaryData : function(){
     var allBeneficiaryData = {
       beneficiaryType: scope_TransfersPresentationController.beneficiaryType,
       beneficiaryOthersType: scope_TransfersPresentationController.beneficiaryOthersType,
       beneficiaryName :  scope_TransfersPresentationController.beneficiaryName,
       beneficiaryNickName: scope_TransfersPresentationController.beneficiaryNickName,
       beneficiaryBankName: scope_TransfersPresentationController.beneficiaryBankName,
       beneficiaryAccountNumber: scope_TransfersPresentationController.beneficiaryAccountNumber,
       beneficiarySwiftCode: scope_TransfersPresentationController.beneficiarySwiftCode,
       beneficiaryBranch: scope_TransfersPresentationController.beneficiaryBranch,
       beneficiaryCountrySpecificCode: scope_TransfersPresentationController.beneficiaryCountrySpecificCode,
       beneficiaryIBAN: scope_TransfersPresentationController.beneficiaryIBAN,
       beneficiaryCountryCode : scope_TransfersPresentationController.beneficiaryCountryCode,
       beneficiaryCountryName : scope_TransfersPresentationController.beneficiaryCountryName,
       beneficiaryCountrySpecificCodeValue :  scope_TransfersPresentationController.beneficiaryCountrySpecificCodeValue,
       beneficiaryOTP : scope_TransfersPresentationController.beneficiaryOTP ,
       beneficiaryCurrency:scope_TransfersPresentationController.beneficiaryCurrency ,
       beneficiaryAccountType: scope_TransfersPresentationController.beneficiaryAccountType ,
       beneficiaryId : scope_TransfersPresentationController.beneficiaryId,
       beneficiaryIsIBAN: scope_TransfersPresentationController.beneficiaryIsIBAN
      	//RecurringPayment: scope_TransfersPresentationController.RecurringPayment

    };
    return allBeneficiaryData;
  },


  getAllScheduledTransferData : function(){
    var navManager = applicationManager.getNavigationManager();
    var allScheduledTransferData = {
      scheduledDateAndFrequency: scope_TransfersPresentationController.scheduledFormatDateAndFrequency,
      scheduledDate: scope_TransfersPresentationController.scheduledDate,
      scheduledFrequency : scope_TransfersPresentationController.scheduledFrequency,
      RecurringPayment: scope_TransfersPresentationController.RecurringPayment,
      startDate:scope_TransfersPresentationController.startDate,
      createdDate:scope_TransfersPresentationController.createdDate,
      scheduledFrequencyKey: scope_TransfersPresentationController.scheduledFrequencyKey,
      transferFrequency:scope_TransfersPresentationController.scheduledFrequencyKey 
      
    };
    return allScheduledTransferData;
  },
  
  getAllTransferData : function(){
    var allTransferData = {
      transferRemarks: scope_TransfersPresentationController.transferRemarks,
      transferPaidBy:scope_TransfersPresentationController.transferPaidBy,
      transferReason:scope_TransfersPresentationController.transferReason,
      transferCurrency:scope_TransfersPresentationController.transferCurrency ,
      transferAmount:scope_TransfersPresentationController.transferAmount ,
      transferIndicativeAmountValue:scope_TransfersPresentationController.transferIndicativeAmountValue ,
      transferId: scope_TransfersPresentationController.transferId ,

    };
    return allTransferData;
  },

  /*-----------------------------------------------------------------------------------

  Name: 	setBeneficiaryAllData
  Purpose:  This function is to set All the beneficiary data
  Author: 	Bipin
  Date: 	29/10/2018
  Input: 	obj - {   beneficiaryType : "",
  					        beneficiaryNickName :"",
                    beneficiaryName:"",
                    beneficiaryBankName:"",
                    beneficiaryIBAN:"",
                    beneficiaryAccountNumber:"",
                    beneficiarySwiftCode:"",
                    beneficiaryBranch:"",
                    beneficiaryCountrySpecificCode:"",
                    beneficiaryCountryName:"",
                    beneficiaryCountrySpecificCodeValue:"",
                    beneficiaryOthersType:"",
                    beneficiaryOTP :"",
               		beneficiaryCurrency :""
                    beneficiaryAccountType:"",
                    beneficiaryIsIBAN:""
                }
  Return: 	

  ------------------------------------------------------------------------------------*/
  setBeneficiaryAllData : function(allBeneficiaryData){
    scope_TransfersPresentationController.beneficiaryType = allBeneficiaryData.beneficiaryType;
    scope_TransfersPresentationController.beneficiaryNickName = allBeneficiaryData.beneficiaryNickName;
    scope_TransfersPresentationController.beneficiaryName = allBeneficiaryData.beneficiaryName;
    scope_TransfersPresentationController.beneficiaryBankName = allBeneficiaryData.beneficiaryBankName;
    scope_TransfersPresentationController.beneficiaryIBAN = allBeneficiaryData.beneficiaryIBAN;
    scope_TransfersPresentationController.beneficiaryAccountNumber  = allBeneficiaryData.beneficiaryAccountNumber;
    scope_TransfersPresentationController.beneficiarySwiftCode = allBeneficiaryData.beneficiarySwiftCode;
    scope_TransfersPresentationController.beneficiaryBranch = allBeneficiaryData.beneficiaryBranch;
    scope_TransfersPresentationController.beneficiaryCountrySpecificCode = allBeneficiaryData.beneficiaryCountrySpecificCode;
    scope_TransfersPresentationController.beneficiaryCountryCode = allBeneficiaryData.beneficiaryCountryCode;
    scope_TransfersPresentationController.beneficiaryCountryName = allBeneficiaryData.beneficiaryCountryName;
    scope_TransfersPresentationController.beneficiaryCountrySpecificCodeValue = allBeneficiaryData.beneficiaryCountrySpecificCodeValue;
    scope_TransfersPresentationController.beneficiaryOthersType = allBeneficiaryData.beneficiaryOthersType;
    scope_TransfersPresentationController.beneficiaryOTP = allBeneficiaryData.beneficiaryOTP;
    scope_TransfersPresentationController.beneficiaryCurrency = allBeneficiaryData.beneficiaryCurrency;
    scope_TransfersPresentationController.beneficiaryAccountType = allBeneficiaryData.beneficiaryAccountType;
    scope_TransfersPresentationController.beneficiaryId = allBeneficiaryData.beneficiaryId;
    scope_TransfersPresentationController.beneficiaryAccCifId =  allBeneficiaryData.beneficiaryAccCifId;
    scope_TransfersPresentationController.beneficiaryIsIBAN =  allBeneficiaryData.beneficiaryIsIBAN;

  },
  
  /*-----------------------------------------------------------------------------------

  Name: 	setFromAccountInfo
  Purpose:  This function is to set from account data
  Author: 	Bipin
  Date: 	29/10/2018
  Input: 	obj - {  
                  fromAccNumber : "",
     			 fromAccCurrency : "",
      			fromAccBalance : "",
         		fromAccountType : "",
    			 frmAccCifId
                }
  Return: 	

  ------------------------------------------------------------------------------------*/
  setFromAccountInfo : function(pFormAccountObj){
    	scope_TransfersPresentationController.fromAccNumber = pFormAccountObj.accountID;
     	scope_TransfersPresentationController.fromAccCurrency = pFormAccountObj.Currency;
      	scope_TransfersPresentationController.fromAccBalance = pFormAccountObj.unformattedBalance;
      	scope_TransfersPresentationController.fromAccountType = pFormAccountObj.accountType;
    	scope_TransfersPresentationController.fromAccountCifId = pFormAccountObj.frmAccCifId;
    
  },
  
  /**
     * filter the list of accounts to be shown for From Accounts category in Transfers
     * @param Type of Beneficiary chosen as To Account while making a transfer
     * @returns Filtered Account List
     */
  filterDataForFromAccounts:function(beneType){
    var navManger = applicationManager.getNavigationManager();
    var dataToSetFromAccounts = this.getAccountsData();
    dataToSetFromAccounts = dataToSetFromAccounts.operativeAccounts;
    
    var beneficiaryAccountNumber = this.getBeneficiaryAccountNumber();
    var fromAccounts = [];
    for(var i=0;i<dataToSetFromAccounts.length;i++){
      //Check if the Account is Active or not and the avilable balance is zero
      if((dataToSetFromAccounts[i].AccountStatus === "") && (convertToFloat(dataToSetFromAccounts[i].WorkingBalance)  > 0)){
         // fromAccounts[i] = {};
          //Check if the selected Beneficiary type matches the AccountTransactionAccess or AccountTransactionAccess is ALL
        //alert(" dataToSetFromAccounts[i] " +  JSON.stringify( dataToSetFromAccounts[i]))
          if((dataToSetFromAccounts[i].AccountAccessFlag === "F" || dataToSetFromAccounts[i].AccountAccessFlag === "ALL")  && 
             (dataToSetFromAccounts[i].AccountTransactionAccess.includes((beneType)) || dataToSetFromAccounts[i].AccountTransactionAccess === "ALL" )){
            //fromAccounts[i] = dataToSetFromAccounts[i];
            
            if( beneficiaryAccountNumber !== dataToSetFromAccounts[i].AccountNumber){
              fromAccounts.push([dataToSetFromAccounts[i].AccountNumber,getOperativeAccountType(dataToSetFromAccounts[i].AccountType)+" "+ dataToSetFromAccounts[i].AccountNumber]);
            }            
          }
        }
      }
    kony.print("fromAccounts=="+JSON.stringify(fromAccounts));
    
    
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    return fromAccounts;
  },
  
  /**
     * gets the info of the selected Account in Transfers page
     * @param hAccountId
     * @returns details of the selected account
     */
  getSelectedAccountInfo: function(hAccountNumber){
    kony.print("entered getSelectedAccountInfo==="+hAccountNumber);
    var navManger = applicationManager.getNavigationManager();
    var dataToSetFromAccounts = this.getAccountsData();
    dataToSetFromAccounts = (dataToSetFromAccounts)?dataToSetFromAccounts.operativeAccounts:[];
    var fromAccounts = {};
    for(var i=0;i<dataToSetFromAccounts.length;i++){
      if(dataToSetFromAccounts[i].AccountNumber === hAccountNumber){
        fromAccounts = dataToSetFromAccounts[i];
        break;
      }
    }
    kony.print("getSelectedAccountInfo==="+JSON.stringify(fromAccounts));
    var fromAccObj ={
      accountID:fromAccounts.AccountNumber,
      Currency:fromAccounts.Currency,
      unformattedBalance:fromAccounts.WorkingBalance,
      accountType:fromAccounts.AccountType,
      frmAccCifId :fromAccounts.UserCifId
    };

    this.setFromAccountInfo(fromAccObj);
    return fromAccounts;
  },
  /*-----------------------------------------------------------------------------------

  Name: 	getBeneficiaryAccountDetails
  Purpose:  fetch beneficiary account details
  Author: 	Bipin
  Date: 	24/10/2018
  Input:	
  Return: 	

  ------------------------------------------------------------------------------------*/
  getBeneficiaryAccountDetails: function(records){
    kony.print("getOperativeAccountDetails");
    kony.print("@@@@@ getOperativeAccountDetails "+JSON.stringify(records));
    applicationManager.getPresentationUtility().showLoadingScreen();
    var transactionManager = applicationManager.getTransactionManager();
    kony.print("request sent for fetchAccountsIntermediateDetail=="+JSON.stringify(records));
    transactionManager.fetchAccountsIntermediateDetail(records, this.getBeneficiaryAccountDetailsSCB, this.getBeneficiaryAccountDetailsECB);
  },

  /*-----------------------------------------------------------------------------------

  Name: 	getBeneficiaryAccountDetailsSCB
  Purpose:  getBeneficiaryAccountDetails Success  call back
  Author: 	Bipin
  Date: 	24/10/2018
  Input:	
  Return: 	

  ------------------------------------------------------------------------------------*/
  getBeneficiaryAccountDetailsSCB: function(response){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    kony.print("getBeneficiaryAccountDetailsSCB response - "+JSON.stringify(response));
    var navManager = applicationManager.getNavigationManager();

    var formattedResponse = checkServiceResponseForErrorCode(response);

    if(formattedResponse.responseCode === "200" && response.accountDetails ){   
        var operativeAccountsDetails = response.accountDetails[0] ;
        this.setBeneficiaryBankName("AL Hilal Bank");
        this.setBeneficiaryCurrency(operativeAccountsDetails.AccountCurrency);
        this.setBeneficiaryName(operativeAccountsDetails.AccountTitle);
        this.setBeneficiaryIBAN(operativeAccountsDetails.IBAN);
        this.setBeneficiaryCountryName("UAE");
        this.setBeneficiaryCountryCode("AE");
        this.setBeneficiarySwiftCode("HLALAEAAXXX");
        this.setbeneficiaryNickName("");
        //this.setBeneficiaryName("");
        navManager.navigateTo("frmBenName");
        kony.print("getBeneficiaryAccountDetailsSCB response - "+JSON.stringify(response));   
    }else{
//       var entryPoint = navManager.getEntryPoint("getAccountDetails")
//       if(entryPoint === "TPF_AC"){
//         kony.print("getBeneficiaryAccountDetailsSCB when responseCode not 200 for someone else AHB card - "+JSON.stringify(response));
//         var controller = applicationManager.getPresentationUtility().getController('frmTransferAmount', true);
//         controller.bindGenericError(formattedResponse.message); 
//       }else{
        kony.print("getBeneficiaryAccountDetailsSCB when responseCode not 200  - "+JSON.stringify(response));
        this.getBeneficiaryAccountDetailsECB(response);
//      }

    }
  },
  /*-----------------------------------------------------------------------------------

  Name: 	getBeneficiaryAccountDetailsECB
  Purpose:  getBeneficiaryAccountDetails Error call back
  Author: 	Bipin
  Date: 	24/10/2018
  Input:	
  Return: 	

  ------------------------------------------------------------------------------------*/
  getBeneficiaryAccountDetailsECB: function(error){    
    applicationManager.getPresentationUtility().dismissLoadingScreen();    
    var formattedResponse = checkServiceResponseForErrorCode(error);
 	var navManager = applicationManager.getNavigationManager();
    var entryPoint = navManager.getEntryPoint("getAccountDetails")
  	if(entryPoint === "frmBenSwiftCode"){
       var benSwiftController = applicationManager.getPresentationUtility().getController('frmBenSwiftCode', true);
       benSwiftController.bindGenericError(formattedResponse.message);  
    }else{
      var benAccNameController = applicationManager.getPresentationUtility().getController('frmEnterBenAccNo', true);
      benAccNameController.bindAccountNumberError(formattedResponse.message);    
    }
    kony.print("error in getBeneficiaryAccountDetailsECB ==="+JSON.stringify(error));
  },

  /*-----------------------------------------------------------------------------------

  Name: 	getAccountDetailsByIBANOrSwift
  Purpose:  getAccountDetails By IBAN Or Swift
  Author: 	Bipin
  Date: 	25/10/2018
  Input:	
  Return: 	

  ------------------------------------------------------------------------------------*/
  
  getAccountDetailsByIBANOrSwift : function(pParamDetails){
    //alert(" pParamDetails " +JSON.stringify(pParamDetails));
    kony.print("getAccountDetailsByIBANOrSwift");
    kony.print("@@@@@ getAccountDetailsByIBANOrSwift "+JSON.stringify(pParamDetails));
    applicationManager.getPresentationUtility().showLoadingScreen();
    var accountManager = applicationManager.getAccountManager();
    kony.print("request sent for getAccountDetailsByIBANOrSwift=="+JSON.stringify(pParamDetails));
    accountManager.fetchAccountsDetailsByIBANOrSwiftCode(pParamDetails, this.getAccountDetailsByIBANOrSwiftSCB, this.getAccountDetailsByIBANOrSwiftECB);
  },
  
  /*-----------------------------------------------------------------------------------

  Name: 	getAccountDetailsByIBANOrSwiftSCB
  Purpose:  getAccountDetailsByIBANOrSwift success call back
  Author: 	Bipin
  Date: 	25/10/2018
  Input:	
  Return: 	

  ------------------------------------------------------------------------------------*/
  
  getAccountDetailsByIBANOrSwiftSCB : function(response){
    kony.print("getAccountDetailsByIBANOrSwiftSCB response "+ JSON.stringify(response));
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    
     var formattedResponse = checkServiceResponseForErrorCode(response);

    if(formattedResponse.responseCode === "200"){
      //this.resetBeneficiaryData();
      this.setBeneficiaryName("");
      this.setBeneficiaryBankName(response.bankName);
      this.setBeneficiaryCountrySpecificCode(response.countrySpecificCode);
      this.setBeneficiaryBranch(response.bankBranch);
      this.setBeneficiarySwiftCode(response.swiftCode);
      //this.setBeneficiaryIBAN(response.iban);
      this.setBeneficiaryCountryName(response.countryName);
      this.setBeneficiaryCountryCode(response.countryCode);

      if(response.countrySpecificCode){
         kony.print("getAccountDetailsByIBANOrSwiftSCB response navigate to sort code page ");
         this.setBeneficiaryCountrySpecificCodeValuee("");
         navManager.navigateTo("frmAddBenRoutNo");
      }else{
         kony.print("getAccountDetailsByIBANOrSwiftSCB response navigate to nick name page ");
        this.setBeneficiaryCountrySpecificCodeValuee("");
        this.setBeneficiaryCountrySpecificCode("");
         this.setbeneficiaryNickName("");
     	 this.setBeneficiaryName("");
         navManager.navigateTo("frmBenName");
      }
    }else{ 
      if(this.getBeneficiaryOthersType() === "IBAN"){
         kony.print("presentationOperativeAccountsSuccess when responseCode not 200  - "+JSON.stringify(response));
      var benAccNameController = applicationManager.getPresentationUtility().getController('frmEnterBenAccNo', true);
      benAccNameController.bindAccountNumberError(formattedResponse.message);
      }else{
         kony.print("presentationOperativeAccountsSuccess when responseCode not 200  - "+JSON.stringify(response));
      var benSwiftCodeController = applicationManager.getPresentationUtility().getController('frmBenSwiftCode', true);
      benSwiftCodeController.bindGenericError(formattedResponse.message);
      }
     
    }
        
  },
  /*-----------------------------------------------------------------------------------

  Name: 	getAccountDetailsByIBANOrSwiftECB
  Purpose:  getAccountDetailsByIBANOrSwift error call back
  Author: 	Bipin
  Date: 	25/10/2018
  Input:	
  Return: 	

  ------------------------------------------------------------------------------------*/
  getAccountDetailsByIBANOrSwiftECB : function(error){
    kony.print("getAccountDetailsByIBANOrSwiftECB error "+ JSON.stringify(error));
    //alert (JSON.stringify(error));
    var formattedResponse = checkServiceResponseForErrorCode(error);
    if(this.getBeneficiaryOthersType() === "IBAN"){
      kony.print("presentationOperativeAccountsSuccess when responseCode not 200  - "+JSON.stringify(response));
      var benAccNameController = applicationManager.getPresentationUtility().getController('frmEnterBenAccNo', true);
      benAccNameController.bindAccountNumberError(formattedResponse.message);
    }else{
      kony.print("presentationOperativeAccountsSuccess when responseCode not 200  - "+JSON.stringify(response));
      var benSwiftCodeController = applicationManager.getPresentationUtility().getController('frmBenSwiftCode', true);
      benSwiftCodeController.bindGenericError(formattedResponse.message);
    }
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },

  
  
  /*-----------------------------------------------------------------------------------

  Name: 	addBeneficiary
  Purpose:  add Beneficiary service call 
  Author: 	Bipin
  Date: 	25/10/2018
  Input:	
  Return: 	

  ------------------------------------------------------------------------------------*/
  addBeneficiary : function(){

    var allBenData = this.getAllBeneficiaryData(); 
    var accNumber ="";
    var isSameBankAccount = "";
    var otp = "";
    var isIban ="";
    if(allBenData && allBenData.beneficiaryType === "AHBAccounts"){
      accNumber = allBenData.beneficiaryAccountNumber;
      isSameBankAccount= true;
    } else if(allBenData.beneficiaryType === "Others"){
      if(allBenData.beneficiaryOthersType === "IBAN"){
        // for IBAN 
        accNumber = allBenData.beneficiaryIBAN;
        isSameBankAccount = false;
        isIban = "true";
      }else{
        // for Account and Swift code 
        accNumber = allBenData.beneficiaryAccountNumber;
        isSameBankAccount = false;
      }
    }
    otp = allBenData.beneficiaryOTP;

    var paramAddBeneficiaryDetails ={
      "nickName" : allBenData.beneficiaryNickName,
      "beneficiaryName" : allBenData.beneficiaryName,
      "accountNumber" : accNumber,
      "countryName" : allBenData.beneficiaryCountryCode ? allBenData.beneficiaryCountryCode : "",  //TODO check what to pass  country code or country name ??
      "swiftCode" : allBenData.beneficiarySwiftCode,
      "sameBankAccount" : isSameBankAccount,
      "beneficiaryAccountCurrency" : allBenData.beneficiaryCurrency, 
      "bankId" : "", 
      "bankName" : allBenData.beneficiaryBankName,
      "cityName" : '', 
      "countrySpecificCode": allBenData.beneficiaryCountrySpecificCodeValue,
      //"countrySpecificCodeValue": allBenData.beneficiaryCountrySpecificCodeValue,
      "iban": isIban 
      
    };

    if(otp){
      paramAddBeneficiaryDetails.otp = otp ;
    }

    kony.print("addBeneficiary");
    kony.print("@@@@@ addBeneficiary "+JSON.stringify(paramAddBeneficiaryDetails));
    applicationManager.getPresentationUtility().showLoadingScreen();
    var accountManager = applicationManager.getAccountManager();
    kony.print("request sent for addBeneficiary=="+JSON.stringify(paramAddBeneficiaryDetails));
    accountManager.addBeneficiaryData(paramAddBeneficiaryDetails, this.addBeneficiarySCB, this.addBeneficiaryECB);
  },
  
  /*-----------------------------------------------------------------------------------

  Name: 	addBeneficiarySCB
  Purpose:  add beneficiary success callback
  Author: 	Bipin
  Date: 	25/10/2018
  Input:	
  Return: 	

  ------------------------------------------------------------------------------------*/
  addBeneficiarySCB : function(response){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    kony.print("addBeneficiarySCB response  - "+JSON.stringify(response));
    var navManager = applicationManager.getNavigationManager();
    var formattedResponse = checkServiceResponseForErrorCode(response);
    if(formattedResponse.responseCode === "200"){
      // navigate to Success page
      navManager.setEntryPoint("AHBSuccess","AddBeneficiary");
      navManager.navigateTo("frmAHBSucess"); 
    }else{
      var currForm = kony.application.getCurrentForm().id;
      kony.print("triggerOtpSCB when responseCode not 200  - "+JSON.stringify(response));
      var controller = applicationManager.getPresentationUtility().getController(currForm, true);
      controller.bindGenericError(formattedResponse.message);
    }
  },
  
  /*-----------------------------------------------------------------------------------

  Name: 	addBeneficiaryECB
  Purpose:  add beneficiary error callback
  Author: 	Bipin
  Date: 	25/10/2018
  Input:	
  Return: 	

  ------------------------------------------------------------------------------------*/
  addBeneficiaryECB : function (error){
    //alert (JSON.stringify(error));
    var formattedResponse = checkServiceResponseForErrorCode(error);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    kony.print("addBeneficiaryECB   - "+JSON.stringify(error));
    var currForm = kony.application.getCurrentForm().id;
    kony.print("triggerOtpSCB when responseCode not 200  - "+JSON.stringify(error));
    var controller = applicationManager.getPresentationUtility().getController(currForm, true);
    controller.bindGenericError(formattedResponse.message);
  },
  
  /*-----------------------------------------------------------------------------------

  Name: 	triggerOtp
  Purpose:  Triggers OTP to verify beneficiary
  Author: 	Bipin
  Date: 	25/10/2018
  Input:	
  Return: 	

  ------------------------------------------------------------------------------------*/
  triggerOtp : function(){
    kony.print("triggerOtp start");
    applicationManager.getPresentationUtility().showLoadingScreen();
    var authManger = applicationManager.getAuthManager();
    authManger.triggerOTPForAddBeneficiary( this.triggerOtpSCB, this.triggerOtpECB);
  
  },

  /*-----------------------------------------------------------------------------------

  Name: 	triggerOtpSCB
  Purpose:  Triggers OTP to verify beneficiary success call back
  Author: 	Bipin
  Date: 	25/10/2018
  Input:	
  Return: 	

  ------------------------------------------------------------------------------------*/
  triggerOtpSCB : function(response){

    applicationManager.getPresentationUtility().dismissLoadingScreen();
    kony.print("triggerOtpSCB response  - "+JSON.stringify(response));
    var navManager = applicationManager.getNavigationManager();
    var formattedResponse = checkServiceResponseForErrorCode(response);
    var controller = applicationManager.getPresentationUtility().getController('frmAHBRegConfirmOTP', true);
    if(formattedResponse.responseCode === "200"){
      if(this.getIsResendOtp()){
        controller.resendOTPError(kony.i18n.getLocalizedString("kony.ahb.resendOtp")); 
        this.setIsResendOtp(false);
      }
      // navigate to Success page
     
      //navManager.setEntryPoint("generateOTP","AddBeneficiary");
      navManager.setCustomInfo("frmAHBRegConfirmOTP" , response);
      navManager.navigateTo("frmAHBRegConfirmOTP"); 
    }else{
        this.setIsResendOtp(false);
      	var currForm = kony.application.getCurrentForm().id;
        kony.print("triggerOtpSCB when responseCode not 200  - "+JSON.stringify(response));
        var controller = applicationManager.getPresentationUtility().getController(currForm, true);
        controller.bindGenericError(formattedResponse.message);
      }
  },



  /*-----------------------------------------------------------------------------------

  Name: 	triggerOtpECB
  Purpose:  Triggers OTP to verify beneficiary error call back
  Author: 	Bipin
  Date: 	25/10/2018
  Input:	
  Return: 	

  ------------------------------------------------------------------------------------*/
  triggerOtpECB : function(error){
    
    //alert (JSON.stringify(error));
    var formattedResponse = checkServiceResponseForErrorCode(error);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    kony.print("triggerOtpECB   - "+JSON.stringify(error));
   	var currForm = kony.application.getCurrentForm().id;
    kony.print("triggerOtpECB   - "+JSON.stringify(error));
    var controller = applicationManager.getPresentationUtility().getController(currForm, true);
    controller.bindGenericError(formattedResponse.message);
    this.setIsResendOtp(false);

  },
  
  /*
  @Purpose To set the list of beneficiaries on Transfer Page
  @Input List of all beneficiaries
  @Output Nothing
  */
  fetchOtherBankRecepients: function(){
    var recipientsManager = applicationManager.getRecipientsManager();
    applicationManager.getPresentationUtility().showLoadingScreen();
    recipientsManager.fetchAllExternalBenificiaries(scope_TransfersPresentationController.fetchOtherBankRecepientsPresentationSuccess, scope_TransfersPresentationController.fetchOtherBankRecepientsPresentationError);
  },

  /*
  @Purpose Contains success response after Beneficiaries List is fetched successfully
  @Input Nothing
  @Output List of All Beneficiaries
  */
  fetchOtherBankRecepientsPresentationSuccess: function(res){
    kony.print("fetchOtherBankRecepientsPresentationSuccess==="+JSON.stringify(res));
    //If the service call is successful and Beneficiaries exist
    var formattedResponse = checkServiceResponseForErrorCode(res);
    
    var navManager = applicationManager.getNavigationManager();
    var entryPoint = navManager.getEntryPoint("getBeneficiaries");
    var controller;
    var controllerCallback;
    if(entryPoint === "frmTransfers")
    {  
      	controller = applicationManager.getPresentationUtility().getController('frmTransfers', true);
    	controllerCallback = controller.showTransfersError;
    }
    else
    {
      	controller = applicationManager.getPresentationUtility().getController('frmManageRecipientList', true);
    	controllerCallback = controller.bindGenericError;
    }
    if(formattedResponse.responseCode === "200"){
      var externalAccnts = (res.externalAccounts)?res.externalAccounts:[];
      controller.setDataForOtherBeneficiaries(externalAccnts);
      this.setOtherBeneficiaryList(externalAccnts);
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    }else if(formattedResponse.responseCode === "AHB_1023"){
      controller.setDataForOtherBeneficiaries([]);
      this.setOtherBeneficiaryList([]);
      applicationManager.getPresentationUtility().dismissLoadingScreen();

    }
    //If the service call is successful and there are no beneficiaries for that user
    else{
      controllerCallback(formattedResponse.message);
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    }
  },

  /*
  @Purpose Contains error response after Beneficiaries List serive fails
  @Input Nothing
  @Output Error Response
  */
  fetchOtherBankRecepientsPresentationError: function(err){
    //Calling generic error handling
    var formattedResponse = checkServiceResponseForErrorCode(err);
    var controller = applicationManager.getPresentationUtility().getController('frmTransfers', true);
    controller.showTransfersError(formattedResponse.message);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  /*
  @Purpose Contains Success response after Beneficiaries List serive call is made
  @Input Nothing
  @Output Success Response
  */
  setAccountsDataInTransfer :function(res){
    kony.print("setAccountsDataInTransfer=="+JSON.stringify(res));
    this.setAccountsData(res);
    var transController = applicationManager.getPresentationUtility().getController('frmTransfers', true);
    transController.showMyAccounts();
  },
  
  /*-----------------------------------------------------------------------------------

  Name: 	fetchConfigurationForTransfer
  Purpose:  This function fetches all the configuration related to transfers like currency, reason, countries  list, chargeIndicator 
  Author: 	Bipin
  Date: 	29/10/2018
  Input:	
  Return: 	

  ------------------------------------------------------------------------------------*/

  fetchConfigurationForTransfer: function(){
    kony.print("fetchConfigurationForTransfer  ");
    var transactionManager = applicationManager.getTransactionManager();
    applicationManager.getPresentationUtility().showLoadingScreen();
    if(!(this.getMasterReasonData() && this.getMasterReasonData().length) || 
       !(this.getMasterChargeIndicator() && this.getMasterChargeIndicator().length) || 
       !(this.getMasterCurrencies() && this.getMasterCurrencies().length || 
       !(this.getMasterFrequency()  && this.getMasterFrequency().length) )){
       kony.print("fetchConfigurationForTransfer config data does not exist execute service to fetch configuration ");
      transactionManager.getTransferConfigurations(this.fetchConfigurationForTransferSCB, this.fetchConfigurationForTransferECB);
    }else{
       kony.print("fetchConfigurationForTransfer config data exist ");
      this.navigateToTransferAmount();
    }
  },

  /*-----------------------------------------------------------------------------------

  Name: 	fetchConfigurationForTransferSCB
  Purpose:  This function is executed when all the configuration related to transfers like currency, reason, countries  list, chargeIndicator is fetched successfully
  Author: 	Bipin
  Date: 	29/10/2018
  Input:	
  Return: 	

  ------------------------------------------------------------------------------------*/
  fetchConfigurationForTransferSCB : function(response){
    

    kony.print("fetchConfigurationForTransferSCB response "+ JSON.stringify(response));
    var formattedResponse = checkServiceResponseForErrorCode(response);
    
    if(formattedResponse.responseCode === "200"){
      if(response.txnPurpose  && response.txnPurpose.length){
      	this.setMasterReasonData(response.txnPurpose);
        
      }
      if(response.chargeIndicator && response.chargeIndicator.length){
      	this.setMasterChargeIndicator(response.chargeIndicator);
      }
      if(response.currencies && response.currencies.length){
      	this.setMasterCurrencies(response.currencies);
        
      }
      if(response.txnFrequency && response.txnFrequency.length){
      	this.setMasterFrequency(response.txnFrequency);  
      }
        this.navigateToTransferAmount();
    }else{
      var controller = applicationManager.getPresentationUtility().getController('frmTransfers', true);
      controller.showTransfersError(formattedResponse.message)
    }
    // error message not shown as default data will be shown

   
    
    applicationManager.getPresentationUtility().dismissLoadingScreen();

  },

  /*-----------------------------------------------------------------------------------

  Name: 	fetchConfigurationForTransferECB
  Purpose:  This function is executed when fetch configuration fails
  Author: 	Bipin
  Date: 	29/10/2018
  Input:	
  Return: 	

  ------------------------------------------------------------------------------------*/
  fetchConfigurationForTransferECB : function(error){
    kony.print("fetchConfigurationForTransferECB response "+ JSON.stringify(error));
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var formaattedErrorResponse = checkServiceResponseForErrorCode(error);
    var navManger = applicationManager.getNavigationManager(); 
    var configManager = applicationManager.getConfigurationManager();

    var entryPoint = navManger.getEntryPoint(configManager.constants.ENTRY_POINT.makeatransfer); 
    if(entryPoint != configManager.constants.ENTRY_POINT.CardPayment){
      var controller = applicationManager.getPresentationUtility().getController('frmTransfers', true);
      controller.showTransfersError(formaattedErrorResponse.message)
    }else{
      var controller = applicationManager.getPresentationUtility().getController('frmAccountDetails', true);
      controller.bindChequeListError(formaattedErrorResponse.message) 
    }


  },
  
  /*-----------------------------------------------------------------------------------

  Name: 	navigateToTransferAmount
  Purpose:  This function is navigate to transfer Amount page
  Author: 	Bipin
  Date: 	29/10/2018
  Input:	
  Return: 	

  ------------------------------------------------------------------------------------*/
  navigateToTransferAmount : function(){
   applicationManager.getPresentationUtility().dismissLoadingScreen(); 
   var navManager = applicationManager.getNavigationManager();
    navManager.navigateTo("frmTransferAmount"); 
    
  },
  
/*-----------------------------------------------------------------------------------

  Name: 	doTransfer
  Purpose:  This function is used to make trasnfer to beneficiary
  Author: 	Bipin
  Date: 	29/10/2018
  Input:	
  Return: 	

  ------------------------------------------------------------------------------------*/
  
  doTransfer : function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    var transactionManager = applicationManager.getTransactionManager();
    var configManager = applicationManager.getConfigurationManager();
    var paramDetails = { 
          fromAccountNumber : this.getFromAccount(),
          fromCurrency : this.getAccountCurrency(),
          beneficiaryAccountNumber : this.getBeneficiaryAccountNumber(),
          beneficiaryCurrency : this.getTransferCurrency(),
          txnAmount : this.getTransferAmount(),
      	  paymentMode: this.getTransferPaymentMode(),
      	  isScheduled :this.getScheduledFlag(),  
          transferType: this.getBeneficiaryType(),
          chargeIndicator: this.getPaidByWhom(),
          swiftCode : this.getBeneficiarySwiftCode(),
          beneficiaryBankCountry : this.getBeneficiaryCountryCode(),
          beneficiaryName : this.getBeneficiaryName(),
          txnPurpose : this.getTransferReason() ,
          countrySpecificCode : this.getBeneficiaryCountrySpecificCodeValuee() ? this.getBeneficiaryCountrySpecificCodeValuee() : "",
          txnRemarks : this.getTransferRemarks(),
          
      	  txnFrequency:this.getScheduledFrequencyKey() ? this.getScheduledFrequencyKey() : "",  //mandatory if schedule transfer
          txnStartDate:this.getScheduledFormatDate() ? this.getScheduledFormatDate() : "",   //mandatory if schedule transfer
      
          fromCifId:  this.getTransferPaymentMode() === "AC" ?  this.getFromAccountCifId() : "" ,// (mandatory if paymentMode is “AC”)
          beneficiaryCifId : this.getTransferPaymentMode() ==="AC"?  this.getBeneficiaryAccCifId() :"", //(mandatory if paymentMode is “AC”)
          otp:  this.getTransferOTP()  
    };
    kony.print(" doTransfer  paramDetails " + JSON.stringify(paramDetails) );
    var transferId = this.getTransfersId();
    kony.print("transferId=="+transferId);
    if(isEmpty(transferId)){
    transactionManager.doTransfer(paramDetails, this.doTransferSCB, this.doTransferECB);
    }else{
      var record = {
        scheduledTxnId: transferId,
        fromAccountNumber : this.getFromAccount(),
        fromCurrency : this.getAccountCurrency(),
        beneficiaryCurrency : this.getTransferCurrency(),
        txnFrequency: this.getScheduledFrequencyKey() ? this.getScheduledFrequencyKey(): "",
        txnStartDate: this.getScheduledFormatDate() ? this.getScheduledFormatDate() : "",
        txnAmount: this.getTransferAmount()
      };
      transactionManager.updateScheduledTransfer(record, this.updateScheduledTransferSuccess, this.updateScheduledTransferError);
    }
    //transactionManager.doTransfer(paramDetails, this.doTransferSCB, this.doTransferECB);
  },
  /*
  @Purpose: To handle success response for update  schedule transfer
  @Params: Success response fron Update schedule transfer
  @OOutput: None
  */
  updateScheduledTransferSuccess: function(response){
    kony.print(" updateScheduledTransferSuccess  resposne " + JSON.stringify(response) );
    var formattedData = checkServiceResponseForErrorCode(response);
    //var controller = applicationManager.getPresentationUtility().getController('frmTransferConfirmation', true);
    if(formattedData.responseCode === "200"){
     
      var successData = {
        "beneficiaryAccountNumber": this.getBeneficiaryAccountNumber(),
        "referenceNumber": this.getTransfersId(),
        "responseMessage": response.responseMessage,
        "txnAmount": this.getTransferAmount(),
        "txnDate": response.txnDate,
        "operationType": "update"
      };
      this.setTransferSuccessData(successData);
      
      var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
      var accountDataStatus = {
        timeStamp : new Date(),
        hasAccountModified : true,
      }; 
      accountMod.presentationController.setAccountDataStatus(accountDataStatus);
      
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      var navManager = applicationManager.getNavigationManager();
      navManager.setEntryPoint("AHBSuccess","Transfer");
      navManager.navigateTo("frmAHBSucess");
    }else{
      var currFrom = kony.application.getCurrentForm().id;
      kony.print("update transfer currFrom "+ currFrom);
      var controller = applicationManager.getPresentationUtility().getController(currFrom, true);
        controller.bindGenericError(formattedData.message);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
      }
  },
  /*
  @Purpose: To handle error response for update  schedule transfer
  @Params: error response fron Update schedule transfer
  @OOutput: None
  */
  updateScheduledTransferError: function(error){
    kony.print(" updateScheduledTransferError  resposne " + JSON.stringify(error) );
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var formattedData = checkServiceResponseForErrorCode(error);
    var currFrom = kony.application.getCurrentForm().id;
    var controller = applicationManager.getPresentationUtility().getController(currFrom, true);
    //var controller = applicationManager.getPresentationUtility().getController('frmTransferConfirmation', true);
    controller.bindGenericError(formattedData.message);
  },
  
  /*-----------------------------------------------------------------------------------

  Name: 	doTransferSCB
  Purpose:  This function is used after successfull trasnfer to beneficiary
  Author: 	Bipin
  Date: 	29/10/2018
  Input:	
  Return: 	

  ------------------------------------------------------------------------------------*/
  doTransferSCB : function (resposne){
    
    kony.print(" doTransferSCB  resposne " + JSON.stringify(resposne) );
    var formattedData = checkServiceResponseForErrorCode(resposne);
    //var controller = applicationManager.getPresentationUtility().getController('frmTransferConfirmation', true);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if(formattedData.responseCode === "200"){
      kony.print("resposne" + JSON.stringify(resposne));
      
      var successData = {
        "beneficiaryAccountNumber": resposne.beneficiaryAccountNumber,
        "referenceNumber": resposne.referenceNumber,
        "responseMessage": resposne.responseMessage,
        "txnAmount": resposne.txnAmount,
        "txnDate": resposne.txnDate,
        "operationType": "create"
      };
      var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
      var accountDataStatus = {
        timeStamp : new Date(),
        hasAccountModified : true,
      }; 
      accountMod.presentationController.setAccountDataStatus(accountDataStatus);
      
      this.setTransferSuccessData(successData);
      var navManager = applicationManager.getNavigationManager();
      navManager.setEntryPoint("AHBSuccess","Transfer");
      navManager.navigateTo("frmAHBSucess");

    }else{
      var currFrom = kony.application.getCurrentForm().id;
      kony.print("doTransferSCB currFrom "+ currFrom);
      var controller = applicationManager.getPresentationUtility().getController(currFrom, true);
      if(formattedData.responseCode === "AHB_1501"){
        var transferType = this.getBeneficiaryType() === "SLF" ? kony.i18n.getLocalizedString("kony.ahb.transfers.tomyself") :  kony.i18n.getLocalizedString("kony.ahb.transfers.toothers");
        var msg = kony.i18n.getLocalizedString("kony.AHB.ALERT.AHB_1501").replace("###PLACEHOLDER###", transferType);
        controller.bindGenericError(msg);
        applicationManager.getPresentationUtility().dismissLoadingScreen();      
      }
      else if(formattedData.responseCode === "AHB_1502"){
        var transferType = this.getBeneficiaryType() === "SLF" ? kony.i18n.getLocalizedString("kony.ahb.transfers.tomyself") :  kony.i18n.getLocalizedString("kony.ahb.transfers.toothers");
        var msg = kony.i18n.getLocalizedString("kony.AHB.ALERT.AHB_1502").replace("###PLACEHOLDER###", transferType);
        controller.bindGenericError(msg);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
      }
      else{
        controller.bindGenericError(formattedData.message);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        //error msg
      }
    }

  },
/*-----------------------------------------------------------------------------------

  Name: 	doTransferECB
  Purpose:  This function is used after failure of trasnfer to beneficiary
  Author: 	Bipin
  Date: 	29/10/2018
  Input:	
  Return: 	

  ------------------------------------------------------------------------------------*/
  doTransferECB : function(error) {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var formattedData = checkServiceResponseForErrorCode(error);
    var currFrom = kony.application.getCurrentForm().id;
    kony.print("doTransferECB currFrom "+ currFrom);
    var controller = applicationManager.getPresentationUtility().getController(currFrom, true);
    //var controller = applicationManager.getPresentationUtility().getController('frmTransferConfirmation', true);
    controller.bindGenericError(formattedData.message);
    // eror msg
    kony.print("error" + JSON.stringify(error));
  },
  
/*-----------------------------------------------------------------------------------
  Name: 	initializeTransfersFlow
  Purpose:  This function is used to initialize Transfers flow on selection of 
  		    transfers from app menu
  Author: 	Sumit Bhatia
  Date: 	29/10/2018
  Input:	NA
  Return: 	NA
------------------------------------------------------------------------------------*/
  initializeTransfersFlow: function()
  {
    applicationManager.getPresentationUtility().showLoadingScreen();
    this.resetToInitialValue();
//     var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
//     var configManager = applicationManager.getConfigurationManager();
//     var navManager = applicationManager.getNavigationManager();
//     var cifObj = navManager.getCustomInfo("cifObj");
//     navManager.setEntryPoint("DashboardService", configManager.constants.TRANSFERFLOW);
//     accountMod.presentationController.showDashboard(cifObj);
  },
  /*-----------------------------------------------------------------------------------

  Name: 	resetFromAccountInfo
  Purpose:  
  Author: 	Bipin
  Date: 	02/11/2018
  Input:	
  Return: 	

  ------------------------------------------------------------------------------------*/
  resetFromAccountInfo : function(){
    scope_TransfersPresentationController.fromAccNumber = "";
    scope_TransfersPresentationController.fromAccCurrency = "";
    scope_TransfersPresentationController.fromAccBalance = "";
    scope_TransfersPresentationController.fromAccountType = "";
    scope_TransfersPresentationController.fromAccountCifId = "";
    
  },
  
/*-----------------------------------------------------------------------------------

  Name: 	resetTransferData
  Purpose:  
  Author: 	Bipin
  Date: 	02/11/2018
  Input:	
  Return: 	
  ------------------------------------------------------------------------------------*/
  
  resetTransferData : function(){
    var configManager = applicationManager.getConfigurationManager();
    scope_TransfersPresentationController.transferRemarks = "";
    scope_TransfersPresentationController.transferPaidBy = "";
    scope_TransfersPresentationController.transferPaidByKeyVal = ["", ""];
    scope_TransfersPresentationController.transferReasonKeyVal = ["", ""];
    scope_TransfersPresentationController.transferReason = "";
    scope_TransfersPresentationController.transferCurrency = configManager.constants.AHB_UAE_CURRENCY;
    scope_TransfersPresentationController.transferAmount = "";
    scope_TransfersPresentationController.transferSuccessData = ""; 
    scope_TransfersPresentationController.transferIndicativeAmountValue = "";
    scope_TransfersPresentationController.transferPaymentMode = "";
    scope_TransfersPresentationController.transferOtp = "";
    scope_TransfersPresentationController.transferId ="";
  },
  
  
 /*-----------------------------------------------------------------------------------

  Name: 	setAllTransferData
  Purpose:  
  Author: 	Bipin
  Date: 	16/11/2018
  Input:	obj {
                transferRemarks : "",
               	transferPaidBy : "",
              	transferPaidByKeyVal : ["", ""],
                transferReasonKeyVal : ["", ""],
               	transferReason : "",
                transferCurrency :"",
                transferAmount : "",
                transferIndicativeAmountValue : "",
                transferPaymentMode : "",
    			transferOtp : "",
                transferId:''
  				}
  Return: 	
  ------------------------------------------------------------------------------------*/
  
  setAllTransferData : function(transferData){
    var configManager = applicationManager.getConfigurationManager();
    scope_TransfersPresentationController.transferRemarks = transferData.transferRemarks;
    scope_TransfersPresentationController.transferPaidBy = transferData.transferPaidBy;
    scope_TransfersPresentationController.transferPaidByKeyVal = transferData.transferPaidByKeyVal;
    scope_TransfersPresentationController.transferReasonKeyVal = transferData.transferReasonKeyVal;
    scope_TransfersPresentationController.transferReason = transferData.transferReason;
    scope_TransfersPresentationController.transferCurrency = transferData.transferCurrency;
    scope_TransfersPresentationController.transferAmount = transferData.transferAmount;
    scope_TransfersPresentationController.transferIndicativeAmountValue =transferData.transferIndicativeAmountValue;
    scope_TransfersPresentationController.transferPaymentMode = transferData.transferPaymentMode;
    scope_TransfersPresentationController.transferOtp = transferData.transferOtp;
    scope_TransfersPresentationController.transferId =transferData.transferId
  }, 
  
/*-----------------------------------------------------------------------------------

  Name: 	resetConfigData
  Purpose:  
  Author: 	Bipin
  Date: 	02/11/2018
  Input:	
  Return: 	

  ------------------------------------------------------------------------------------*/
  resetConfigData : function(){
    scope_TransfersPresentationController.transferMasterReasonData = [];
    scope_TransfersPresentationController.transferMasterCurrenciesData = [];
    scope_TransfersPresentationController.transferMasterChargeIndicatorData = [];
    scope_TransfersPresentationController.transferExchangeRateMapping = {};
  },
  
  /*-----------------------------------------------------------------------------------

  Name: 	resetToInitialValue
  Purpose:  
  Author: 	Bipin
  Date: 	02/11/2018
  Input:	
  Return: 	

  ------------------------------------------------------------------------------------*/
  resetToInitialValue : function() {
    this.setTransfersOption("SLF");
    this.setAccountsData(null);
    this.resetTransferData();
    this.resetBeneficiaryData();
    this.resetFromAccountInfo();
    this.resetScheduledTransferData();
   

  },
  

  /*-----------------------------------------------------------------------------------

  Name: 	resetScheduledTransferData
  Purpose:  
  Author: 
  Date: 	
  Input:	
  Return: 	
  ------------------------------------------------------------------------------------*/

  resetScheduledTransferData : function(){
    scope_TransfersPresentationController.scheduledDate="";
    scope_TransfersPresentationController.scheduledFrequency="";
    scope_TransfersPresentationController.scheduledTransfersList="";
    scope_TransfersPresentationController.scheduledFlag= "";
    scope_TransfersPresentationController.scheduledFormatDate= "";
    scope_TransfersPresentationController.scheduledFormatDateAndFrequency= "";
	scope_TransfersPresentationController.scheduledFrequencyKey ="";
    scope_TransfersPresentationController.RecurringPayment="";

  },
 
  /*-----------------------------------------------------------------------------------
  Name: 	validateTransferElegibility
  Purpose: 	
  Author: 	Bipin
  Date: 	02/11/2018
  Input:	NA
  Return: 	NA
  ------------------------------------------------------------------------------------*/
  validateEligibleFromAcc : function(){
    var benType = this.getBeneficiaryType();
    var fromAccData = this.filterDataForFromAccounts(benType);
    var accLengthData = fromAccData.length;
    kony.print(" validateEligibleFromAcc accLengthData " +accLengthData);
    var isValid = false;
    if(accLengthData > 0){
      isValid = true;
    }
     kony.print(" validateEligibleFromAcc accLengthData " +isValid);
    return isValid ;
  },
  
   /*-----------------------------------------------------------------------------------
  Name: 	transferToAccount
  Purpose: 	card payment
  Author: 	Bipin
  Date: 	03/11/2018
  Input:	NA
  Return: 	NA
  ------------------------------------------------------------------------------------*/
  transferToAccount : function(pTransferToData){
    this.initializeTransfersFlow();
    //call in successcallback
    var controller = applicationManager.getPresentationUtility().getController('frmTransfer', true);
    controller.showMyAccounts();
    this.setBeneficiaryAllData(pTransferToData);    
  },
  
  /*-----------------------------------------------------------------------------------
  Name: 	transferFromAccount
  Purpose: 	Quick Transfer
  Author: 	Bipin
  Date: 	03/11/2018
  Input:	pTransferFromData , pEntryPoint
  Return: 	NA
  ------------------------------------------------------------------------------------*/
  transferFromAccount : function(pTransferFromData,pEntryPoint){
   
    this.initializeTransfersFlow();
    var navManger = applicationManager.getNavigationManager();
    var configManager = applicationManager.getConfigurationManager();
    navManger.setEntryPoint(configManager.constants.ENTRY_POINT.makeatransfer,pEntryPoint);    
    this.setFromAccount(pTransferFromData.AccountNumber);
    this.navigateToTransfer();

  },
  
  /*-----------------------------------------------------------------------------------
  Name: 	transferToOwnAndOtherAccount
  Purpose: 	
  Author: 	Bipin
  Date: 	03/11/2018
  Input:	NA
  Return: 	NA
  ------------------------------------------------------------------------------------*/
  transferToOwnAndOtherAccount : function(selectedRowItems){
     kony.print("setToAccountsForTransferInputScreen start "+ JSON.stringify(selectedRowItems));
    var configManager = applicationManager.getConfigurationManager();

	this.resetTransferData();
    this.resetBeneficiaryData();
	this.resetScheduledTransferData();
 	var navManger = applicationManager.getNavigationManager();   
    var entryPoint = navManger.getEntryPoint(configManager.constants.ENTRY_POINT.makeatransfer); 
  	if(entryPoint !== ("frmAccountDetails")){
       this.resetFromAccountInfo();
    }
    //var selectedRowItems = this.view.segTransactions.selectedRowItems;
    var beneObj = {};
    kony.print("setToAccountsForTransferInputScreen alert "+ JSON.stringify(selectedRowItems));
    if(selectedRowItems && selectedRowItems.length){
     var transferPaymentMode = selectedRowItems[0].transferPaymentMode?selectedRowItems[0].transferPaymentMode : configManager.constants.AHB_TRANSFER_MODE_ACCOUNT ;
      beneObj = {
        beneficiaryType: selectedRowItems[0].beneficiaryType,
        beneficiaryNickName : selectedRowItems[0].nickName,
        beneficiaryName : selectedRowItems[0].beneficiaryName,
        beneficiaryAccountNumber : selectedRowItems[0].accountNumber,
        beneficiarySwiftCode : selectedRowItems[0].swiftCode,
        beneficiaryCountrySpecificCode : selectedRowItems[0].countrySpecificCode,
        beneficiaryCountrySpecificCodeValue : selectedRowItems[0].countrySpecificCode,
        beneficiaryCountryName : selectedRowItems[0].countryName,
        beneficiaryCountryCode : selectedRowItems[0].countryCode,
        beneficiaryBankName : selectedRowItems[0].bankName,
        beneficiaryCurrency: selectedRowItems[0].currency || selectedRowItems[0].beneficiaryCurrency ||selectedRowItems[0].beneficiaryAccountCurrency,
        beneficiaryAccountType: selectedRowItems[0].beneficiaryAccountType,
        beneficiaryAccCifId : selectedRowItems[0] && selectedRowItems[0].UserCifId ? selectedRowItems[0].UserCifId : "",
        beneficiaryIsIBAN : selectedRowItems[0] && selectedRowItems[0].isIban ? selectedRowItems[0].isIban : "",
      };
      
      
      this.setBeneficiaryAllData(beneObj);
      this.setTransferPaymentMode(transferPaymentMode);
      var isEligible = this.validateEligibleFromAcc();
      if(isEligible){
        this.fetchConfigurationForTransfer();
      }else{
        return {
          "message":kony.i18n.getLocalizedString("kony.ahb.transfers.oneEligibleAccount"),
          "isSuccess": false
        };
      }
    }else{
       return {
          "message":kony.i18n.getLocalizedString("kony.error.StandardErrorMessage"),
          "isSuccess": false
        }; 
    }
    return {
          "message":"",
          "isSuccess": true
        };

  },
  
  /*-----------------------------------------------------------------------------------

  Name: 	navigateToTransfer
  Purpose:  This function is navigate to transferpage
  Author: 	Bipin
  Date: 	03/11/2018
  Input:	
  Return: 	

  ------------------------------------------------------------------------------------*/
  navigateToTransfer : function(){
   applicationManager.getPresentationUtility().dismissLoadingScreen(); 
   var navManager = applicationManager.getNavigationManager();
    navManager.navigateTo("frmTransfers"); 
    
  },
   /*-----------------------------------------------------------------------------------

  Name: 	makeATransfer
  Purpose:  This function is for doing a transfer for own and other accounts
  Author: 	Bipin
  Date: 	03/11/2018
  Input:	
  Return: 	

  ------------------------------------------------------------------------------------*/
 makeATransfer : function(){
    var navManger = applicationManager.getNavigationManager();
    var configManager = applicationManager.getConfigurationManager();
    navManger.setEntryPoint(configManager.constants.ENTRY_POINT.makeatransfer,configManager.constants.ENTRY_POINT.makeatransfer);
   	this.initializeTransfersFlow();
    this.navigateToTransfer();
 },
  
/***********************************************************************************************
  Name: updateBenificiaryNickName
  Author: Sindhu
  Date: 6/11/2018
  Input: nickName
  Return: none
*************************************************************************************/    
  
    updateBenificiaryNickName : function(nickName) {
        var editDetails = {
            "id":this.getbeneficiaryId(),
            "nickName": nickName
        };
      kony.print("updateBenificiaryNickName_editDetails"+JSON.stringify(editDetails));
        var recipientsManager = applicationManager.getRecipientsManager();
        recipientsManager.editABenificiary(editDetails, scope_TransfersPresentationController.updateBankRecipientsPresentationSuccess, scope_TransfersPresentationController.updateBankRecipientsPresentationError);
      
    },

    updateBankRecipientsPresentationSuccess : function(successResponse) {
      kony.print("updateBankRecipientsPresentationSuccess_successResponse"+successResponse);
      applicationManager.getPresentationUtility().showLoadingScreen();
      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
       var manageP2pRecipientController = applicationManager.getPresentationUtility().getController('frmManageP2pRecipient', true);
      var manageEditRecipientController = applicationManager.getPresentationUtility().getController('frmManageEditRecipient', true);
      	var navManager = applicationManager.getNavigationManager();
      var formattedResponse = checkServiceResponseForErrorCode(successResponse);
      if(formattedResponse.responseCode === "200") {
        var nickName = manageEditRecipientController.getNickName();
        this.setbeneficiaryNickName(nickName);
    	navManager.navigateTo("frmManageP2pRecipient");
        
        manageP2pRecipientController.onEditBeneficiarySuccess();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    	}
      else if(formattedResponse.responseCode === "AHB_1402"){
        navManager.navigateTo("frmManageEditRecipient");
        manageEditRecipientController.bindErrorMessage(formattedResponse.message);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    	}
      else if(formattedResponse.responseCode === "AHB_1403"){
        navManager.navigateTo("frmManageEditRecipient");
        manageEditRecipientController.bindErrorMessage(formattedResponse.message);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    	}
    },

    updateBankRecipientsPresentationError : function(errorResponse) {
      kony.print("updateBankRecipientsPresentationError_errorResponse"+errorResponse);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
      var manageEditRecipientController = applicationManager.getPresentationUtility().getController('frmManageEditRecipient', true);
       var formattedResponse = checkServiceResponseForErrorCode(errorResponse);
      manageEditRecipientController.bindErrorMessage(formattedResponse.message);
    },
  
  /***********************************************************************************************
  Name: deleteSameBankBenificiary
  Author: Sindhu
  Date: 6/11/2018
  Input: beneficiaryId
  Return: none
*************************************************************************************/  
  deleteSameBankBenificiary : function(beneficiaryId) {
    kony.print("deleteSameBankBenificiary_beneficiaryId "+beneficiaryId);
    	var deleteDetails = {
            "id":beneficiaryId,
          	"otp":this.getBeneficiaryOTP()
          	
        };
        var recipientsManager = applicationManager.getRecipientsManager();
        var transferMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
        //var benificiaryDetails = transferMod.presentationController.getBenificiaryData();
            kony.print("deleteOtherBankRecipientsPresentation  request " + JSON.stringify(deleteDetails));

     recipientsManager.deleteABenificiary(deleteDetails, scope_TransfersPresentationController.deleteOtherBankRecipientsPresentationSuccess, scope_TransfersPresentationController.deleteOtherBankRecipientsPresentationError);
   },
  
  deleteOtherBankRecipientsPresentationSuccess : function(successResponse) {
    kony.print("deleteOtherBankRecipientsPresentationSuccess_successResponse "+JSON.stringify(successResponse));
    var navManager = applicationManager.getNavigationManager();
    var formattedResponse = checkServiceResponseForErrorCode(successResponse);
    var manageP2pRecipientController = applicationManager.getPresentationUtility().getController('frmManageP2pRecipient', true);
    var manageRecipientListController = applicationManager.getPresentationUtility().getController('frmManageRecipientList', true);
    if(formattedResponse.responseCode === "200") {
    	navManager.navigateTo("frmManageRecipientList");
        manageRecipientListController.bindSuccessMessage(kony.i18n.getLocalizedString("kony.ahb.beneficiary.ALERT.deletionSuccess"));
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    } else {
      var currFrom = kony.application.getCurrentForm().id;
        //navManager.navigateTo("frmManageEditRecipient");
         kony.print("deleteOtherBankRecipientsPresentationSuccess_currFrom "+ currFrom);
      if(currFrom === "frmManageP2pRecipient"){
         manageP2pRecipientController.bindGenericMessage(formattedResponse.message);
       	 applicationManager.getPresentationUtility().dismissLoadingScreen();
      }else if(currFrom === "frmAHBRegConfirmOTP"){
        var frmAHBRegConfirmOTPController = applicationManager.getPresentationUtility().getController('frmAHBRegConfirmOTP', true);
        frmAHBRegConfirmOTPController.bindOTPValidationError(formattedResponse.message);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        
      }
       
    }
        
    },

 deleteOtherBankRecipientsPresentationError : function(errorResponse) {
   kony.print("deleteOtherBankRecipientsPresentationError_errorResponse "+errorResponse);
   applicationManager.getPresentationUtility().dismissLoadingScreen();
       var manageDeleteRecipientController = applicationManager.getPresentationUtility().getController('frmManageP2pRecipient', true);
       var formattedResponse = checkServiceResponseForErrorCode(errorResponse);
      manageDeleteRecipientController.bindGenericMessage(formattedResponse.message);
    },
    
    
    /*
  @Purpose To set the list of Scheduled Transactions on Transfer Page
  @Input List of all Scheduled Transfers
  @Output Nothing
  */
  fetchScheduledTransfers: function(){
    var recipientsManager = applicationManager.getRecipientsManager();
    applicationManager.getPresentationUtility().showLoadingScreen();
    recipientsManager.fetchAllScheduledTransactions(scope_TransfersPresentationController.fetchScheduledTransfersPresentationSuccess, scope_TransfersPresentationController.fetchScheduledTransfersPresentationError);
  },

  /*
  @Purpose Contains success response after Scheduled Transaction is fetched successfully
  @Input Nothing
  @Output List of All Scheduled Transactions
  */
  fetchScheduledTransfersPresentationSuccess: function(res){
    kony.print("fetchScheduledTransfersPresentationSuccess==="+JSON.stringify(res));
    //If the service call is successful and Scheduled Transactions exist
    var formattedResponse = checkServiceResponseForErrorCode(res);
    var controller = applicationManager.getPresentationUtility().getController('frmTransfers', true);
    if(formattedResponse.responseCode === "200"){
      var scheduledTxns = (res.scheduledTxns)?res.scheduledTxns:[];
      controller.setDataForeditScheduledTransfer(scheduledTxns);
      this.setScheduledTransfersList(scheduledTxns);
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    }
    //If the service call is successful and there are no scheduled transactions for that user
    else if(formattedResponse.responseCode !== "AHB_1023"){
      controller.showTransfersError(formattedResponse.message);
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    }
    else{
      applicationManager.getPresentationUtility().dismissLoadingScreen();
    }
  },

  /*
  @Purpose Contains error response after Scheduled Transactions List serive fails
  @Input Nothing
  @Output Error Response
  */
  fetchScheduledTransfersPresentationError: function(err){
    //Calling generic error handling
    var formattedResponse = checkServiceResponseForErrorCode(err);
    var controller = applicationManager.getPresentationUtility().getController('frmTransfers', true);
    controller.showTransfersError(formattedResponse.message);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },


  //   getScheduledFormatDate: function() {
  //     var startDate = this.getScheduledDate();
  //     var searchStartDate = "";
  //     if (startDate !== "") {
  //       var dateValue = startDate.split("/");
  //       searchStartDate = dateValue[2] + "-" + dateValue[1] + "-" + dateValue[0];
  //     } else {
  //       searchStartDate = "";
  //     }
  //     return searchStartDate;
  // },
    
    
    
/***********************************************************************************************
  Name: validateCard
  Purpose:  This will validate the card number provided
  Author: Bipin
  Date: 09/11/2018
  Input: NA
  Return: NA
*************************************************************************************/ 
  
  validateCard : function(request){
    kony.print("validateCard");
    kony.print("@@@@@ validateCard "+JSON.stringify(request));
    applicationManager.getPresentationUtility().showLoadingScreen();
    var accountManager = applicationManager.getAccountManager();
    kony.print("request sent for validateCard=="+JSON.stringify(request));
    accountManager.validateOtherAHBCard(request, this.validateCardSCB, this.validateCardECB);    
  },
  
/***********************************************************************************************
  Name: validateCardSCB
  Purpose:  This will validate the card number provided
  Author: Bipin
  Date: 09/11/2018
  Input: NA
  Return: NA
*************************************************************************************/ 
  validateCardSCB : function(response){
    kony.print("validateCardSCB");
    kony.print("@@@@@ validateCardSCB " + JSON.stringify(response));
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var formattedResponse = checkServiceResponseForErrorCode(response); 
    var navManager = applicationManager.getNavigationManager();
    if(formattedResponse.responseCode === "200"){
       kony.print("@@@@@ validateCardSCB " + JSON.stringify(response));
      this.setBeneficiaryAccCifId("");
      var configManager = applicationManager.getConfigurationManager();
      if(this.getScheduledFlag() === configManager.constants.AHB_SCHEDULED_YES){
          navManager.navigateTo("frmTransfersStartDate");
      }else{
         navManager.navigateTo("frmTransferConfirmation");
      }
           
    }else{
       kony.print(" validateCardSCB  response is not 200" + JSON.stringify(response));
       var controller = applicationManager.getPresentationUtility().getController('frmTransferAmount', true);
       controller.bindGenericError(formattedResponse.message);
    }
  },
/***********************************************************************************************
  Name: validateCardECB
  Purpose:  This will validate the card number provided
  Author: Bipin
  Date: 09/11/2018
  Input: NA
  Return: NA
*************************************************************************************/   
  validateCardECB : function(errResponse){
    kony.print("validateCardECB");
    kony.print("@@@@@ validateCardECB " + JSON.stringify(errResponse));
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var formattedResponse = checkServiceResponseForErrorCode(errResponse);  
    var controller = applicationManager.getPresentationUtility().getController('frmTransferAmount', true);
    controller.bindGenericError(formattedResponse.message);
    
  },
  
   /***********************************************************************************************
  Name: fetchScheduledTransfersForBeneficiary
  Purpose:  This will check if scheduled trnasfer exist for the selected beneficairy
  Author: Bipin
  Date: 09/11/2018
  Input: NA
  Return: NA
*************************************************************************************/ 
   fetchScheduledTransfersForBeneficiary: function(request){
      kony.print("fetchScheduledTransfersForBeneficiary");
    kony.print("fetchScheduledTransfersForBeneficiary request "+JSON.stringify(request));
    var recipientsManager = applicationManager.getRecipientsManager();
    applicationManager.getPresentationUtility().showLoadingScreen();
    recipientsManager.fetchAllScheduledTransactions(this.fetchScheduledTransfersForBeneficiarySCB, this.fetchScheduledTransfersForBeneficiaryECB, request);
  },
  
  /***********************************************************************************************
  Name: fetchScheduledTransfersForBeneficiarySCB
  Purpose: This is success callback for fetch scheduled trnasfer for a beneficiary 
  		  if no record then delete the beneficairy else display appropiate message
  Author: Bipin
  Date: 12/11/2018
  Input: NA
  Return: NA
*************************************************************************************/ 
  fetchScheduledTransfersForBeneficiarySCB : function(response){
     kony.print("fetchScheduledTransfersForBeneficiarySCB response "+JSON.stringify(response));
    
    var formattedResponse = checkServiceResponseForErrorCode(response);
    var manageP2pRecipientController = applicationManager.getPresentationUtility().getController('frmManageP2pRecipient', true);
     applicationManager.getPresentationUtility().dismissLoadingScreen();
    if(formattedResponse.responseCode === "200"){
       kony.print("fetchScheduledTransfersForBeneficiarySCB response is 200 "+JSON.stringify(response));
       manageP2pRecipientController.bindGenericMessage(kony.i18n.getLocalizedString("kony.AHB.ALERT.cannotDeleteBeneficiary"));      
    }else if(formattedResponse.responseCode === "AHB_1023"){
      kony.print("fetchScheduledTransfersForBeneficiarySCB response is AHB_1023 "+JSON.stringify(response));
      kony.print("fetchScheduledTransfersForBeneficiarySCB execute delete transfer ");
      manageP2pRecipientController.onConfirmDelete();
    }
  },
  
  /***********************************************************************************************
  Name: fetchScheduledTransfersForBeneficiaryECB
  Purpose:  This is error callback for fetch scheduled trnasfer for a beneficiary
  Author: Bipin
  Date: 12/11/2018
  Input: NA
  Return: NA
*************************************************************************************/ 
  fetchScheduledTransfersForBeneficiaryECB : function(errorResponse){
    kony.print("fetchScheduledTransfersForBeneficiaryECB errorResponse "+JSON.stringify(errorResponse));
    var formattedResponse = checkServiceResponseForErrorCode(errorResponse);
     applicationManager.getPresentationUtility().dismissLoadingScreen();
    var manageP2pRecipientController = applicationManager.getPresentationUtility().getController('frmManageP2pRecipient', true);
    manageP2pRecipientController.bindGenericMessage(formattedResponse.message);
  },
  /*
@Purpose To call deleteUserScheduledTransaction service from Business Layer
@param Scheduled Transfer Transaction Id
@returns Success / Error response recieved from the service
*/  
  callDeleteScheduledTransaction : function(record){
    applicationManager.getPresentationUtility().showLoadingScreen();
    var transactionManager = applicationManager.getTransactionManager();
    transactionManager.deleteScheduledTransaction(record,this.deleteScheduledTransactionSuccessCallback, this.deleteScheduledTransactionErrorCallback);
  },
  /*
@Purpose Successcallback for deleteScheduledTransaction, handles success response flow
@param Success Response from deleteScheduledTransaction
@returns Nothing
*/  
  deleteScheduledTransactionSuccessCallback : function(response){
    var formattedData = checkServiceResponseForErrorCode(response);
    var controller = applicationManager.getPresentationUtility().getController('frmTransferDetails', true);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    if(formattedData.responseCode === "200"){
      this.setScheduledTransfersList("");
      this.navigateToTransfer();
      var transferController = applicationManager.getPresentationUtility().getController('frmTransfers', true);
      transferController.bindGenericError(kony.i18n.getLocalizedString("kony.ahb.transfers.deletesuccess"));
    }else{
      controller.bindGenericError(formattedData.message);
      applicationManager.getPresentationUtility().dismissLoadingScreen();
  }
  },
  
  /*
@Purpose Errorcallback for deleteScheduledTransaction, handles error response flow
@param Error Response from deleteScheduledTransaction
@returns Nothing
*/  
  deleteScheduledTransactionErrorCallback : function(error){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var formattedResponse = checkServiceResponseForErrorCode(errResponse);  
    var controller = applicationManager.getPresentationUtility().getController('frmTransferDetails', true);
    controller.bindGenericError(formattedResponse.message);
  }
});