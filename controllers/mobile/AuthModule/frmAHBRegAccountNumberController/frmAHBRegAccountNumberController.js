define({ 
  selectedSection: "",
  accountNo: '',
  newSms:'',
  tPin:'',
  isSMSSection : true,

  init: function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);	
  },
  
/************************************************************************************

  Name: CaptureDetails - auto invoking after entering cif and SMS, inCase of tPin invoking on click of next button
  Author: Sindhu
  Date: 8/10/2018
  Input: Cif,sms,Tpin, entered by user
  Return: None

*************************************************************************************/

  CaptureDetails: function(){
    var deviceUtilManager = applicationManager.getDeviceUtilManager();
    var navigationManager = applicationManager.getNavigationManager();
    var configManager = applicationManager.getConfigurationManager();
    var infoFrmAHBLanding =navigationManager.getCustomInfo("frmAHBLanding");
    
   	var frmLandingController =  applicationManager.getPresentationUtility().getController('frmAHBLanding', true);
    var flow = frmLandingController.getCurrentFlow();
    //alert("flow"+flow);
    
    var cif = this.accountNo;
    kony.print("card=="+cif);
    var sms = this.newSms;
    kony.print("sms=="+sms);
    var pin = this.tPin;
    kony.print("pin=="+pin);
    if((cif.length>0 && cif.length <= 7) && ((this.isSMSSection && sms.length === 6) || (pin.length > 4 && pin.length <= 8 && !this.isSMSSection ) )){
      this.view.tbxAccountNo.setFocus(false);
      this.view.tbxSmsPin.setFocus(false);
      this.view.tbxTpinNo.setFocus(false);
      this.view.lblAccountNo.setFocus(true);
      this.initialSkins();// setting the default labels after removing the focus
      var record = {
        "cifId": this.accountNo,
        "spin": this.newSms,
        "tpin": this.tPin,
        "deviceId": deviceUtilManager.getDeviceInfo().deviceID,
        "type": navigationManager.getCurrentForm()==='frmAHBRegAccountNumber'?configManager.constants.REGISTRATION_TYPE_CIF:"",
        "osType": deviceUtilManager.getDeviceInfo().name,
        "flow": flow,
        "modelName": kony.os.deviceInfo().model
      };
       kony.print(" ##### frmAHBAccountNumberController " + JSON.stringify(record));
       kony.print(" ##### frmAHBAccountNumberController " + flow);
       kony.print(" ##### frmAHBAccountNumberController " + infoFrmAHBLanding.cifId);
       kony.print(" ##### frmAHBAccountNumberController " + cif);
      if((flow === configManager.constants.PIN_FLOW_REGISTRATION) || (infoFrmAHBLanding.cifId === cif && flow === configManager.constants.PIN_FLOW_RESET )){
        kony.print(" @@ The given CIF Id match @@ ");
        var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule"); 
        authModule.presentationController.validateCardDetails(record);
      }else{
        kony.print(" @@ The given CIF Id doesn't match @@ ");
        var controller = applicationManager.getPresentationUtility().getController('frmAHBRegAccountNumber', true);
        if(this.isSMSSection){
          controller.showCifFMatchError(kony.i18n.getLocalizedString("Kony.ahb.reg.wrongCifSMScombination"));
        }
        else{
          controller.showCifFMatchError(kony.i18n.getLocalizedString("Kony.ahb.reg.wrongCifTPINcombination"));
        }
        
      }
    }
  },
/************************************************************************************

  Name: showCifFMatchError
  Author: Sindhu
  Date: 8/10/2018
  Input: None
  Return: Error message if the enetered cif and sms.tpin doesn't match

*************************************************************************************/

  showCifFMatchError: function(err){
    applicationManager.getDataProcessorUtility().showToastMessageError(this,err); 
    this.defaultSmsData();
    this.defaultTpinData();
    this.initialSkins();
    this.nextButtonSkinChange();
  },

  
/************************************************************************************
  Name: initialSkins - contains default skins, invoking on preshow
  Author: Sindhu
  Date: 8/10/2018
  Input: None
  Return: None
*************************************************************************************/

  initialSkins: function(){
    this.view.lblSMS1.skin='sknAHBLined3d3d3';
    this.view.lblSMS2.skin = 'sknAHBLined3d3d3';
    this.view.lblSMS3.skin = 'sknAHBLined3d3d3';
    this.view.lblSMS4.skin = 'sknAHBLined3d3d3';
    this.view.lblSMS5.skin = 'sknAHBLined3d3d3';
    this.view.lblSMS6.skin = 'sknAHBLined3d3d3';
    this.view.lblAccountNoHolder.skin='sknAHBLined3d3d3';
    this.view.lblTpinNoHolder.skin = 'sknAHBLined3d3d3';
  },

/************************************************************************************
  Name: onBackFrmAHBRegAccountNumber - invoking on click of back button
  Author: Sindhu
  Date: 8/10/2018
  Input: None
  Return: None
*************************************************************************************/
  onBackFrmAHBRegAccountNumber: function() {
    this.defaultSmsData();
    this.defaultTpinData();
    var navMan = applicationManager.getNavigationManager();
    navMan.goBack();
  },


/************************************************************************************
  Name: onChangeTextAccountNumber - invoking on textChange of cif textBox
  Author: Sindhu
  Date: 8/10/2018
  Input: eventObjt(textBoxId)
  Return: None
*************************************************************************************/
  onChangeTextAccountNumber: function(eventObj){
    this.view.lblAccountNoHolder.skin = "sknAHBBff6d00";
    //this.formattedCardNumber(eventObj.id);
    this.accountNo=this.view[eventObj.id].text;
    this.accountNo=this.accountNo.replace(/\s/g, "");
     this.nextButtonSkinChange();
    if(this.view[eventObj.id].text.length === 7 ){
      this.view.lblAccountNoHolder.skin ="sknAHBLined3d3d3";
      if(this.view.flxSMSContainer.isVisible === true){
        this.setTextBoxSmsFocus();
      }
      else if(this.view.flxEnterTpinNo.isVisible === true){
        this.setTextBoxTPinFocus();
      } else {
        this.setTextBoxSmsFocus(); //??
      }

    } 
  },

/************************************************************************************
  Name: nextButtonSkinChange - invoking on click of nextButton and making neccessary skin changes
  Author: Sindhu
  Date: 8/10/2018
  Input: None
  Return:None
*************************************************************************************/
  nextButtonSkinChange : function(){
    var tbxAccountNoLen=this.view.tbxAccountNo.text.length;
    if((tbxAccountNoLen >0 && tbxAccountNoLen <= 7) && this.view.tbxTpinNo.text.length > 4){
      this.view.btnNext.skin = "sknAHBGsc16ptBff6d00TffffffBr21pt";
      this.view.lblTpinNoHolder.skin = "sknAHBBff6d00";
    }
    // when cif = 7 and tpin = 8, Focus should be false for cif and tpin, and setting focus true for next button
    else if(this.view.tbxAccountNo.text.length === 7 && this.view.tbxTpinNo.text.length === 8){
      this.view.tbxAccountNo.setFocus(false);
      this.view.tbxTpinNo.setFocus(false);
      this.view.btnNext.setFocus(true);
      this.view.btnNext.skin = "sknAHBGsc16ptBff6d00TffffffBr21pt";
    }else {
      this.view.btnNext.skin = "sknAHBGscB16ptBeaeaeaTffffffRounded";
    }
  },

/************************************************************************************
  Name: populatePin - formatting of the sms from the hidden textBox tbxSmsPin
  Author: Sindhu
  Date: 8/10/2018
  Input: None
  Return: None
*************************************************************************************/
  populatePin : function(){
    this.newSms = this.view.tbxSmsPin.text ? this.view.tbxSmsPin.text.trim() : "";
    var widgetsDots = this.view.flxSmsNumber.widgets();
    var widgetsUnderlines = this.view.flxSMSLbl.widgets();
    var currLength = this.newSms.length;
    var maxLength = widgetsDots.length;

    for(var i = 0; i < widgetsDots.length; i++){


      if(i < currLength){

        widgetsDots[i].text = " ";
      }
      else{
        widgetsDots[i].text =  "";
      }	
      widgetsUnderlines[i].skin = "sknAHBLined3d3d3";

    }

    var redSkinWidgetColumn = (currLength === maxLength) ? currLength : currLength + 1 ;
    // alert("this.newPin " + this.newPin + " currLength " + currLength + " redSkinWidgetColumn " + redSkinWidgetColumn + " maxLength " + maxLength)
    widgetsUnderlines[redSkinWidgetColumn - 1].skin = "sknAHBBff6d00";
    this.CaptureDetails();
  },

/*****************************************************************************************************************
  Name: onSmsClick - invoking on click of sms button - handling visibility, focus of sms and tPin layout and skin changes
  Author: Sindhu
  Date: 8/10/2018
  Input: None
  Return: None
******************************************************************************************************************/
  onSmsClick : function(){
    this.defaultTpinData();
    this.isSMSSection = true;
    this.view.btnSms.skin = "sknAHBGsc12ptBff6d00Bfffff";
    this.view.btnSms.focusSkin = "sknAHBGsc12ptBff6d00Bfffff";
    this.view.btnPin.skin = "sknAHBGsc0bff07745b2ea48";
    this.view.btnPin.focusSkin = "sknAHBGsc0bff07745b2ea48";
    this.view.flxSMSContainer.setVisibility(true);
    this.view.flxEnterTpinNo.setVisibility(false);
    this.view.lblTpinNoHolder.setVisibility(false);
    this.view.btnNext.setVisibility(false);
    this.view.flxSMSContainer.forceLayout();
    this.setUIFocus();

  },
/************************************************************************************
  Name: onTpinClick - invoking on click of sms button - handling visibility, focus of sms and tPin layout and skin changes
  Author: Sindhu
  Date: 8/10/2018
  Input: None
  Return: None
*************************************************************************************/
  onTpinClick : function(){
    this.defaultSmsData();
    this.isSMSSection = false;
    this.view.btnPin.skin = "sknAHBGsc12ptBff6d00Bfffff";
    this.view.btnPin.focusSkin = "sknAHBGsc12ptBff6d00Bfffff";
    this.view.btnSms.skin = "sknAHBGsc0bff07745b2ea48";
    this.view.btnSms.focusSkin = "sknAHBGsc0bff07745b2ea48";
    this.view.flxSMSContainer.setVisibility(false);
    this.view.flxEnterTpinNo.setVisibility(true);
    this.view.lblTpinNoHolder.setVisibility(true);
    this.view.btnNext.setVisibility(true);
    this.view.flxEnterTpinNo.forceLayout();      
    this.setUIFocus();

  },
/************************************************************************************
  Name: preshow - invoking in the preshow of form, function contains method required on form load
  Author: Sindhu
  Date: 8/10/2018
  Input: None
  Return: None
*************************************************************************************/
  preshow: function(){

    this.studioActions();
    this.view.tbxAccountNo.text = "";
    this.accountNo= "";
    this.onSmsClick();
    //this.view.btnNext.setEnabled(false);
    this.view.btnNext.skin='sknAHBGscB16ptBeaeaeaTffffffRounded';
    this.view.btnNext.focusSkin= 'sknAHBGscB16ptBeaeaeaTffffffRounded';
    this.view.btnSms.skin = "sknAHBGsc12ptBff6d00Bfffff";
    this.view.btnSms.focusSkin = "sknAHBGsc12ptBff6d00Bfffff";
    this.view.btnPin.skin = "sknAHBGsc0bff07745b2ea48";
    this.initialSkins();
    this.view.lblTpinNoHolder.skin = "sknAHBBff6d00";
    this.view.lblAccountNoHolder.skin = "sknAHBBff6d00";
    this.defaultSmsData();
    this.defaultTpinData();

  },
/************************************************************************************
  Name: defaultSmsData - clearing the sms, onclick of tPin
  Author: Sindhu
  Date: 8/10/2018
  Input: None
  Return: None
*************************************************************************************/
  defaultSmsData:function(){
    this.view.tbxSmsPin.text = "";
    this.newSms='';
    this.view.tbxSMS1.setEnabled(false);
    this.view.tbxSMS2.setEnabled(false);
    this.view.tbxSMS3.setEnabled(false);
    this.view.tbxSMS4.setEnabled(false);
    this.view.tbxSMS5.setEnabled(false);
    this.view.tbxSMS6.setEnabled(false);
    
    this.view.tbxSMS1.text= '';
    this.view.tbxSMS2.text= '';
    this.view.tbxSMS3.text= '';
    this.view.tbxSMS4.text= '';
    this.view.tbxSMS5.text= '';
    this.view.tbxSMS6.text= '';
  },

  defaultTpinData:function(){
    this.view.tbxTpinNo.text = "";
    this.tPin = "";
  },
  
/************************************************************************************
  Name: defaultCifLableColor - assigning default skin color for cifLabel holder
  Author: Sindhu
  Date: 8/10/2018
  Input: None
  Return: None
*************************************************************************************/  
  
  defaultCifLableColor : function(){
    this.view.lblAccountNoHolder.skin = "sknAHBLined3d3d3";
  },
  
/************************************************************************************
  Name: defaultTpinLableColor - assigning default skin color for Tpin label holder
  Author: Sindhu
  Date: 8/10/2018
  Input: None
  Return: None
*************************************************************************************/  
  
  defaultTpinLableColor : function (){
    this.view.lblTpinNoHolder.skin = "sknAHBLined3d3d3";
  },

/************************************************************************************
  Name: defaultSmsLableColor - invokes on textChange of cif textBox
  Author: Sindhu
  Date: 8/10/2018
  Input: None
  Return: None
*************************************************************************************/
  defaultSmsLableColor : function (){
    this.view.lblSMS1.skin = "sknAHBLined3d3d3";
    this.view.lblSMS2.skin = "sknAHBLined3d3d3";
    this.view.lblSMS3.skin = "sknAHBLined3d3d3";
    this.view.lblSMS4.skin = "sknAHBLined3d3d3";
    this.view.lblSMS5.skin = "sknAHBLined3d3d3";
    this.view.lblSMS6.skin = "sknAHBLined3d3d3";
  },

/************************************************************************************
  Name: studioActions - contains all studio actions, invoking inside preshow
  Author: Sindhu
  Date: 8/10/2018
  Input: None
  Return: None
*************************************************************************************/
  studioActions: function(){
    this.view.btnRegisterUsingCardNumber.onClick= function (){
      kony.print("register using card number");
      var navManager = applicationManager.getNavigationManager();
      navManager.navigateTo("frmAHBRegCardNumber");
    };
    this.view.MainHeader.btnBack.onClick = this.onBackFrmAHBRegAccountNumber;
    this.view.MainHeader.flxBack.onClick = this.onBackFrmAHBRegAccountNumber;

    //alert("working");
    this.view.tbxSmsPin.onTextChange = this.populatePin;
    this.view.flxSMSContainer.onClick = this.setTextBoxSmsFocus;
    this.view.flxEnterTpinNo.onClick = this.setTextBoxTPinFocus;
    this.view.btnPin.onClick = this.onTpinClick;
    this.view.btnSms.onClick = this.onSmsClick;
    this.view.btnNext.onClick = this.CaptureDetails;
    this.view.tbxAccountNo.onTouchStart = this.cifLableSkin;
    this.view.tbxTpinNo.onTouchStart = this.tPinLableSkin;
    this.view.tbxAccountNo.onTextChange = this.onChangeTextAccountNumber;
    this.view.tbxAccountNo.onEndEditing = this.defaultCifLableColor;
    this.view.tbxTpinNo.onEndEditing = this.defaultTpinLableColor;
    this.view.tbxSmsPin.onEndEditing = this.defaultSmsLableColor;

  },

/************************************************************************************
  Name: setUIFocus - setting focus for cif , sms, tPin textBoxes
  Author: Sindhu
  Date: 8/10/2018
  Input: None
  Return: None
*************************************************************************************/
  setUIFocus : function(){
    if(this.accountNo.length < 7){
      	this.view.lblAccountNoHolder.skin = "sknAHBBff6d00";
      	this.view.tbxAccountNo.setFocus(true);
    }
    else if(this.isSMSSection){
      	this.setTextBoxSmsFocus();
    }
    else if(!this.isSMSSection){
      	this.setTextBoxTPinFocus();
    }
  },

/***************************************************************************************************
  Name: setTextBoxSmsFocus - setting focus for sms textboxes and invoking when on tap of sms textbox
  Author: Sindhu
  Date: 8/10/2018
  Input: None
  Return: None
****************************************************************************************************/
  
  setTextBoxSmsFocus:function(){
    this.view.tbxSmsPin.setFocus(true);
    this.populatePin();
  },
/*********************************************************************************************************
  Name: setTextBoxTPinFocus - setting focus for tPin textboxes and invoking when on tap of tPin textbox
  Author: Sindhu
  Date: 8/10/2018
  Input: None
  Return: None
***********************************************************************************************************/
  
  setTextBoxTPinFocus:function(){
    this.view.lblTpinNoHolder.skin ="sknAHBBff6d00";
    this.view.tbxTpinNo.setFocus(true);
  },

/************************************************************************************
  Name: cifLableSkin - assiging orange skin for cifLabel highlight 
  Author: Sindhu
  Date: 8/10/2018
  Input: None
  Return: None
*************************************************************************************/
  cifLableSkin : function(){
    this.view.lblAccountNoHolder.skin = "sknAHBBff6d00";
  },

  /************************************************************************************
  Name: tPinLableSkin - assiging orange skin for cifLabel highlight
  Author: Sindhu
  Date: 8/10/2018
  Input: None
  Return: None
*************************************************************************************/
  tPinLableSkin : function(){
    this.view.lblTpinNoHolder.skin = "sknAHBBff6d00";
  },

/************************************************************************************************
  Name: bindAccountNumberError - error toast message , invoking from presentation error call back
  Author: Sindhu
  Date: 8/10/2018
  Input: None
  Return: error Message
**************************************************************************************************/
  bindAccountNumberError: function(err){
    var scope = this;
    applicationManager.getDataProcessorUtility().showToastMessageError(this,err);
    this.view.tbxTpinNo.text = "";
    this.tPin='';
    this.defaultSmsData();
    this.setUIFocus();
    this.nextButtonSkinChange();
    //this.setTextBoxSmsFocus();
  },

/************************************************************************************
  Name: onChangeTextTpinNumber - invokes on textChange of cif textBox
  Author: Sindhu
  Date: 8/10/2018
  Input: eventObj(textBoxTpin id)
  Return: None
*************************************************************************************/
  onChangeTextTpinNumber: function(eventObj){
    this.view.tbxTpinNo.setFocus(true);
    this.newSms = "";
    this.view.tbxSmsPin.text = "";
    this.tPin=this.view[eventObj.id].text;

    this.tPin=this.tPin.replace(/\s/g, "");
    this.nextButtonSkinChange();
  },

});

