define({
  freq:'',
  startDateKey: '',
  applicationLanguage:'',
  //     onNavigate: function (obj) {
  //         if(obj==undefined){
  //             return;
  //         }
  //         this.startDateKey = obj;
  //         if(this.startDateKey==="oneTime"){
  //             this.view.customHeader.lblLocateUs.text = "SEND DATE";
  //         }else{
  //             this.view.customHeader.lblLocateUs.text = "START DATE";
  //         }
  //     },
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
    preShow: function(){
      var navManager = applicationManager.getNavigationManager();
      var checkError = navManager.getCustomInfo("frmTransfersStartDate");
      this.applicationLanguage = this.getApplicationLanguage(); 
      this.setPickListData();
      if(checkError && checkError.error){
        this.bindGenericError(checkError.message);
      }      
      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
        if(kony.os.deviceInfo().name==="iPhone"){
      this.view.flxHeader.isVisible = true;
        }
        if(this.view.customCalendar.selectedDate===''){
            this.view.btnContinue.setEnabled(false);    
        }else{
            this.view.btnContinue.setEnabled(true);
        }
      var selecetedDate = transferModule.presentationController.getScheduledDate();
      var frequency = transferModule.presentationController.getScheduledFrequencyKey();
      kony.print("frequency=="+frequency);
      kony.print("selecetedDate=="+selecetedDate);
      if(!isEmpty(selecetedDate)){
        this.view.customCalendar.selectedDate = selecetedDate;
        this.view.lbxFrequency.selectedKey = frequency;
        this.view.customCalendar.setSelectedDate(selecetedDate);
      }else{
          
        var currentDate = new Date();
        currentDate.setDate(currentDate.getDate());
        this.view.customCalendar.setSelectedDate((currentDate.getMonth()+1)+"/"+currentDate.getDate()+"/"+currentDate.getFullYear());
      	this.view.customCalendar.selectedDate='';
        this.view.customCalendar.updateDateBullets();
        this.view.customCalendar.unHighlightAllDays(); 
        this.view.customCalendar.setFirstEnabledDate();
      }
     if(!isEmpty(frequency)){
        this.view.lbxFrequency.selectedKey = frequency;
      }else{
        this.view.lbxFrequency.selectedKey = "";
      }

	this.initValues();
	this.enableScheduledTransfer();
    this.initActions();
    this.view.flxDate.skin = 'sknFlxffffff';  
      //this.view.customCalendar.selectedDate='';
      this.view.customCalendar.isCalendarEndDateFrm = false;
      this.view.customCalendar.triggerContinueAction = true;
//       this.view.customCalendar.updateDateBullets();
//       this.view.customCalendar.unHighlightAllDays(); 
//       this.view.customCalendar.setFirstEnabledDate();
    this.view.btnContinue.skin = "sknAHBGscB16ptBeaeaeaTffffffRounded";
    this.view.btnContinue.setEnabled(false);
   // this.view.lbxFrequency.selectedKey="";
   
    this.selectDate();
   
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    navManager.setCustomInfo("frmTransfersStartDate",{});
    applicationManager.getPresentationFormUtility().logFormName(currentForm);  
  },
  initActions: function(){
    var scope = this;
    //         this.view.customHeader.flxBack.onClick = function(){
    //            var navMan=applicationManager.getNavigationManager();    
    //            navMan.goBack();   
    //         }

    this.view.MainHeaderWithCancel.flxBack.onClick = function(){
      var navMan=applicationManager.getNavigationManager();    
      navMan.goBack();   
    };
    this.view.MainHeaderWithCancel.btnBack.onClick = function(){
      var navMan=applicationManager.getNavigationManager();    
      navMan.goBack();   
    };
    this.view.lbxFrequency.onSelection = this.selectRecurringPayment;
    this.view.btnContinue.onClick = this.continueAction;
    this.view.MainHeaderWithCancel.btnCancel.onClick = this.onCancel;
  },

  getApplicationLanguage : function(){
    var userManager = applicationManager.getUserPreferencesManager();
    var langPrefrence = userManager.getLanguagePrefrence();
    return langPrefrence;
  },

  selectDate:function(){
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    var scheduledDate = transferModule.presentationController.getScheduledDate();
    var selectedDate=(scheduledDate !== "")?this.view.customCalendar.getSelectedDate():"";
    transferModule.presentationController.setScheduledDate(selectedDate);
    this.enableScheduledTransfer();
  },
  setPickListData:function()
  {
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    var frequencyMasterData = transferModule.presentationController.getMasterFrequency();
    this.view.lbxFrequency.masterData = this.prepareDataForFrequency(frequencyMasterData,this.applicationLanguage);
  },

  prepareDataForFrequency : function (pMasterData,pLanguagePref){
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

    formattedData.unshift(["",kony.i18n.getLocalizedString("kony.ahb.common.Listbox.Select")]);

    return formattedData;
  },


  selectRecurringPayment: function(){
    
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    var configManager = applicationManager.getConfigurationManager();
    var selectedData= this.view.lbxFrequency.selectedKeyValue;
   	transferModule.presentationController.setScheduledFrequency(selectedData);
    var selectedKey = this.view.lbxFrequency.selectedKey;
    var recurringPaymentValue ="";
   	transferModule.presentationController.setScheduledFrequencyKey(selectedKey); //this.view.lbxFrequency.selectedKeyValue[1]
    if(selectedKey !== configManager.constants.AHB_FREQUENCY_JUSTONCE){
       recurringPaymentValue = configManager.constants.AHB_RECCURNING_YES;
    }else{
       recurringPaymentValue = configManager.constants.AHB_RECCURNING_NO;
    }  
    transferModule.presentationController.setRecurringPayment(recurringPaymentValue);
    this.enableScheduledTransfer();
  },
  
  initValues : function (){
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
  	this.view.lbxFrequency.selectedKey = transferModule.presentationController.getScheduledFrequencyKey();
    var selectedData= this.view.lbxFrequency.selectedKeyValue;
   	transferModule.presentationController.setScheduledFrequency(selectedData);
 	
 },


  cancelOnClick:function()
  {
    this.view.flxMain.setEnabled(true);
    this.view.AlertPopup.isVisible = false;
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var transferMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    transferMod.presentationController.resetScheduledTransferData();
    transferMod.presentationController.resetTransferData();
    transferMod.presentationController.resetBeneficiaryData();
    transferMod.presentationController.resetFromAccountInfo();
    transferMod.presentationController.commonFunctionForNavigation("frmTransfers");
  },
  /*
  @Purpose Onclick action of Cancel button on 'Transfers' page
  */
  onCancel : function(){
    this.view.flxMain.setEnabled(false);
    this.view.AlertPopup.isVisible = true;
    this.view.AlertPopup.btnDontCancel.onClick = this.doNotCancelTransaction;
    this.view.AlertPopup.btnOK.onClick = this.cancelOnClick;
  },
  /*
  @Purpose To dismiss the pop up which comes after clicking cancel in Transfers flow
  */
  doNotCancelTransaction : function(){
    this.view.flxMain.setEnabled(true);
    this.view.AlertPopup.isVisible = false;
  },
  continueAction: function(){
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    this.scheduledDateAndFrequency();
    transferModule.presentationController.commonFunctionForNavigation("frmTransferConfirmation");
  },
  enableScheduledTransfer : function(){
    this.view.btnContinue.skin = "sknAHBGscB16ptBeaeaeaTffffffRounded";
    this.view.btnContinue.setEnabled(false);
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    kony.print("enableScheduledTransfer getScheduledFrequencyKey "+transferModule.presentationController.getScheduledFrequencyKey());
    kony.print("enableScheduledTransfer getScheduledDate "+transferModule.presentationController.getScheduledDate());
    if((!isEmpty(transferModule.presentationController.getScheduledFrequencyKey())) && (!isEmpty(transferModule.presentationController.getScheduledDate())))
    {
     // this.scheduledDateAndFrequency();
      this.view.btnContinue.skin = "sknAHBGsc16ptBff6d00TffffffBr21pt";
      this.view.btnContinue.setEnabled(true);
    }
    else{
      this.view.btnContinue.skin = "sknAHBGscB16ptBeaeaeaTffffffRounded";
      this.view.btnContinue.setEnabled(false);
    }
  },
  
  scheduledDateAndFrequency: function(){
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    var scheduledDate=transferModule.presentationController.getScheduledDate();
    var displayDate = scheduledDate.split("/");
    var frequency= "";
    if((isEmpty(transferModule.presentationController.getScheduledFrequency()))){
      this.selectRecurringPayment();
      frequency=transferModule.presentationController.getScheduledFrequency();
    }else{
      frequency=transferModule.presentationController.getScheduledFrequency();
    }
    var scheduledDateAndFrequency = frequency[1]+" "+"from"+" "+(displayDate[1]+"/"+displayDate[0]+"/"+displayDate[2]);
    transferModule.presentationController.setScheduledFormatDateAndFrequency(scheduledDateAndFrequency);
    if(scheduledDate!==""){
      var dateValue = scheduledDate.split("/");
      scheduledDate = dateValue[2] + "-" + dateValue[0] + "-" + dateValue[1];
      transferModule.presentationController.setScheduledFormatDate(scheduledDate);
    } else {
      scheduledDate = "";
      transferModule.presentationController.setScheduledFormatDate(scheduledDate);
    }
  },
  /*-----------------------------------------------------------------------------------
  Name: 	bindGenericError
  Purpose: 	to display toast message on the screen
  Author: 	 
  Date: 	
  Input:	errorMsg
  Return: 	
  ------------------------------------------------------------------------------------*/  
  bindGenericError: function (errorMsg) {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var scopeObj = this;
    applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
  },
  
  
});