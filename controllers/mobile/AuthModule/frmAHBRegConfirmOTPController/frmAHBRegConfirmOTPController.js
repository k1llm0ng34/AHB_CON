define({ 

  newPin:'',

   init: function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);	
  },

  preshow: function(){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var navMan = applicationManager.getNavigationManager();
    var dataFromCardServiceResponse = navMan.getCustomInfo("frmAHBRegConfirmOTP");
    kony.print("preshow===="+JSON.stringify(dataFromCardServiceResponse));
    this.view.lblTermsAndConditions.setVisibility(false);
    
  
    this.view.lblOTPMessage.text = kony.i18n.getLocalizedString("kony.AHB.Registration.OneTimePassword");
    this.initializeTextBox();
     var enrtyPoint =  navMan.getEntryPoint("generateOTP");
    if(enrtyPoint === "AddBeneficiary"){
        //OTP flow  for Add beneficiary
        this.view.lblPhnNumber.text = dataFromCardServiceResponse.maskedMobileNumber ; 
      	this.view.MainHeader.lblHeading.text = kony.i18n.getLocalizedString("kony.ahb.beneficiary.addBeneficiary");
      	this.view.imgProgress1.src ="line1_1.png";
      	this.view.imgProgress2.src ="line1_1.png";
      	this.view.imgProgress3.src ="line1_1.png";
      	this.view.imgProgress4.src ="line1_1.png";
      	this.view.imgProgress3.height = "100%";
      	this.view.imgProgress4.height = "100%";
      
      
    }else  if(enrtyPoint === "Transfer"){
        //OTP flow  for Add Transfer
        this.view.lblPhnNumber.text = dataFromCardServiceResponse.maskedMobileNumber ; 
      	this.view.MainHeader.lblHeading.text = kony.i18n.getLocalizedString("kony.mb.transaction.transfer");
      	this.view.imgProgress1.src ="line1_1.png";
      	this.view.imgProgress2.src ="line1_1.png";
      	this.view.imgProgress3.src ="line1_1.png";
      	this.view.imgProgress4.src ="line1_1.png";
      	this.view.imgProgress3.height = "100%";
      	this.view.imgProgress4.height = "100%";      
    }
    else if(enrtyPoint === "DeleteBeneficiary"){
      	this.view.lblPhnNumber.text = dataFromCardServiceResponse.maskedMobileNumber ; 
      	this.view.MainHeader.lblHeading.text = kony.i18n.getLocalizedString("kony.ahb.beneficiary.details");
      	this.view.imgProgress1.src ="line1_1.png";
      	this.view.imgProgress2.src ="line1_1.png";
      	this.view.imgProgress3.src ="line1_1.png";
      	this.view.imgProgress4.src ="line1_1.png";
      	this.view.imgProgress3.height = "100%";
      	this.view.imgProgress4.height = "100%"; 
    }
    else if(enrtyPoint === "AddPayee"){
      //OTP flow  for Add Payee
      	this.view.lblPhnNumber.text = dataFromCardServiceResponse.maskedMobileNumber ; 
      	this.view.MainHeader.lblHeading.text = kony.i18n.getLocalizedString("kony.ahb.payments.addPayee");
      	this.view.imgProgress1.src ="line1_1.png";
      	this.view.imgProgress2.src ="line1_1.png";
      	this.view.imgProgress3.src ="line1_1.png";
      	this.view.imgProgress4.src ="line1_1.png";
      	this.view.imgProgress3.height = "100%";
      	this.view.imgProgress4.height = "100%"; 
    }
    else if(enrtyPoint === "DeletePayee"){
      //OTP flow  for Delete Payee
      	this.view.lblPhnNumber.text = dataFromCardServiceResponse.maskedMobileNumber ; 
      	this.view.MainHeader.lblHeading.text = kony.i18n.getLocalizedString("kony.mb.BillPayPayeeDetails.Title");
      	this.view.imgProgress1.src ="line1_1.png";
      	this.view.imgProgress2.src ="line1_1.png";
      	this.view.imgProgress3.src ="line1_1.png";
      	this.view.imgProgress4.src ="line1_1.png";
      	this.view.imgProgress3.height = "100%";
      	this.view.imgProgress4.height = "100%"; 
    }
    else if(enrtyPoint === "mobilePinReset"){
      //OTP flow  for Mobile PIN Reset
      	this.view.lblPhnNumber.text = dataFromCardServiceResponse.maskedMobileNumber ; 
      	this.view.MainHeader.lblHeading.text =  kony.i18n.getLocalizedString("kony.AHB.Login.LoginPin");
      	this.view.imgProgress1.src ="line1_1.png";
      	this.view.imgProgress2.src ="line1_1.png";
      	this.view.imgProgress3.src ="line1_1.png";
      	this.view.imgProgress4.src ="line1_1.png";
      	this.view.imgProgress3.height = "100%";
      	this.view.imgProgress4.height = "100%"; 
    }
    else{
      this.view.imgProgress1.src ="line1_1.png";
      this.view.imgProgress2.src ="line1_1.png";
      this.view.imgProgress3.src ="progressbarlightorange.png";
      this.view.imgProgress4.src ="progressbarlightorange.png";
      this.view.imgProgress3.height = "50%";
      this.view.imgProgress4.height = "50%";
      this.view.MainHeader.lblHeading.text = kony.i18n.getLocalizedString("kony.ahb.Registration.RegistrationHeading");
      this.view.lblPhnNumber.text = dataFromCardServiceResponse.phone;
      this.view.lblTermsAndConditions.setVisibility(true);
      ///### todo make refKey,cifId,Otp as local controller varialble
      refKey = dataFromCardServiceResponse.refKey;
      cifId = dataFromCardServiceResponse.cifId;
      otp = dataFromCardServiceResponse.otp;     
    }
    
    
  },
  
  postshow: function(){
    //alert(otp);
  },
  
  onclickAfterOTP: function(){
    kony.print("entered otp=="+this.view.lblOTP.text);
    var configManager = applicationManager.getConfigurationManager();

    var frmLandingController =  applicationManager.getPresentationUtility().getController('frmAHBLanding', true);

 	var navMan = applicationManager.getNavigationManager();
    var enrtyPoint =  navMan.getEntryPoint("generateOTP");
    var flow = frmLandingController.getCurrentFlow();
    var validateOTPObj="";
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule"); 
    if(this.newPin.length === 6){
      this.view.tbxPin.setFocus(false);
      this.view.lblOTP.setFocus(true);
      
      if(enrtyPoint === "AddBeneficiary" ){
        
        //OTP flow  for Add beneficiary
        kony.print(" ##### frmAHBRegConfirmOTPController  for Add beneficiary" + this.newPin);
        
        transferModule.presentationController.setBeneficiaryOTP(this.newPin);
        transferModule.presentationController.addBeneficiary();
      }else if(enrtyPoint === "Transfer"){
          //OTP flow  for Transfer
        kony.print(" ##### frmAHBRegConfirmOTPController  for Transfer" + this.newPin);
        transferModule.presentationController.setTransferOTP(this.newPin);
        transferModule.presentationController.doTransfer();
      }
      else if(enrtyPoint === "DeleteBeneficiary"){
        transferModule.presentationController.setBeneficiaryOTP(this.newPin);
        var beneficiaryId = transferModule.presentationController.getbeneficiaryId();
        kony.print(" performDeleteBeneficiary "+beneficiaryId);
        transferModule.presentationController.deleteSameBankBenificiary(beneficiaryId);

      }
      else if(enrtyPoint === "AddPayee"){
        kony.print("entry is AddPayee");
        var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        //         var addPayee =  applicationManager.getPresentationUtility().getController('frmBillPayVerifyDetails', true);
        billPayModule.presentationController.setPayeeOtp(this.newPin);
        billPayModule.presentationController.addPayee();                      
      }
      else if(enrtyPoint === "DeletePayee"){
        kony.print("entry is DeletePayee");
        var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        var payeeId = billPayModule.presentationController.getPayeeId();
        kony.print(" performDeletePayee "+payeeId);
        billPayModule.presentationController.setPayeeOtp(this.newPin);
        billPayModule.presentationController.deletePayee(payeeId);                      
      }
      else if(enrtyPoint === "mobilePinReset"){
        kony.print("entry is mobilePinReset");
        var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        var pin = navMan.getCustomInfo("resetPin");
       kony.print("resetPin=="+JSON.stringify(pin));
       kony.print("pin.currentPin==="+pin.currentPin);
       kony.print("pin.newPin==="+pin.newPin);
        var record= {
        currentPin:  pin.currentPin,
        newPin: pin.newPin,
        otp:this.newPin
    };
        authModule.presentationController.callResetPin(record);                     
      }
      else{
          validateOTPObj = {
          "referenceKey": refKey,
          "cifId": cifId,
          "otp": this.newPin,
          "flow": flow
        }; 
        kony.print(" ##### frmAHBRegConfirmOTPController " + JSON.stringify(validateOTPObj));
        var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule"); 
        authModule.presentationController.validatecreditCardOTP(validateOTPObj);
      }

    }         
  },
   
  /*-----------------------------------------------------------------------------------

Name: 	onclickResendOTP
Author: Fariha
Date: 	24/9/2018
Input:	-
Return: None

------------------------------------------------------------------------------------*/


  onclickResendOTP: function(){
    
    var navMan = applicationManager.getNavigationManager();
     var enrtyPoint =  navMan.getEntryPoint("generateOTP");
      if(enrtyPoint === "AddBeneficiary" || enrtyPoint === "Transfer" || enrtyPoint === "DeleteBeneficiary" || enrtyPoint === "AddPayee"  || enrtyPoint === "DeletePayee" || enrtyPoint === "mobilePinReset" ){
      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule"); 
       transferModule.presentationController.setIsResendOtp(true);
       transferModule.presentationController.triggerOtp();
    }else{       
       var resendOTPJson={'referenceKey':refKey,'cifId':cifId};
      var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule"); 
      authModule.presentationController.resendUserOTP(resendOTPJson);
    }
   
  },

  showResentOTP:function(){
    var navMan = applicationManager.getNavigationManager();
    var dataFromResenOTPServiceResponse = navMan.getCustomInfo("frmAHBRegConfirmOTP");
    var resentOTP=dataFromResenOTPServiceResponse.OTP;
    //alert("resent otp is"+ resentOTP);
  },
  

  initializeTextBox:function(){
    this.view.tbxOTP1.text = '';
    this.view.tbxOTP2.text = '';
    this.view.tbxOTP3.text = '';
    this.view.tbxOTP4.text = '';
    this.view.tbxOTP5.text = '';
    this.view.tbxOTP6.text = '';
    this.initialSkins();
  },
  
  initialSkins: function(){
     this.view.lblOTP1.skin='sknAHBLined3d3d3';
    this.view.lblOTP2.skin = 'sknAHBLined3d3d3';
    this.view.lblOTP3.skin = 'sknAHBLined3d3d3';
    this.view.lblOTP4.skin = 'sknAHBLined3d3d3';
    this.view.lblOTP5.skin='sknAHBLined3d3d3';
    this.view.lblOTP6.skin='sknAHBLined3d3d3';
  },

  onBackFrmAHBRegConfirmOTP: function() { 
     var navMan = applicationManager.getNavigationManager();
   	 navMan.goBack();    
  },
   populatePin : function(){
    this.newPin = this.view.tbxPin.text ? this.view.tbxPin.text.trim() : "";
    var widgetsDots = this.view.flxOTPNumber.widgets();
    var widgetsUnderlines = this.view.flxOTPLbl.widgets();
    var currLength = this.newPin.length;
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
   // alert("this.mPin " + this.mPin + " currLength " + currLength + " redSkinWidgetColumn " + redSkinWidgetColumn + " maxLength " + maxLength)
    widgetsUnderlines[redSkinWidgetColumn - 1].skin = "sknAHBBff6d00";
     this.onclickAfterOTP();
  },
  
  landingPreshow: function(){

    this.studioActions();
    this.preshow();
    this.DefeaultData();
	var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule"); 
     transferModule.presentationController.setIsResendOtp(false);

  },
  studioActions: function(){
     
      this.view.tbxPin.onTextChange = this.populatePin;
      this.view.flxOTPNumber.onClick = this.setTextBoxPinFocus;
    this.view.btnResendCode.onClick = this.onclickResendOTP;
    this.view.MainHeader.btnBack.onClick = this.onBackFrmAHBRegConfirmOTP;
    this.view.MainHeader.flxBack.onClick = this.onBackFrmAHBRegConfirmOTP;
    this.view.rTxtContactUs.onClick = this.goToContactUs;
      
  },
  
    /***********************************************************************************************
  Name: goToContactUs - navigating to contacts screen
  Author: Sindhu
  Date: 11/12/2018
  Input: none
  Return: none
*************************************************************************************/
  goToContactUs:function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    kony.print("Enter into contacts screen--?");
    var navMan=applicationManager.getNavigationManager();
    navMan.navigateTo("frmSupport");
  },
  
   DefeaultData:function(){
    this.view.tbxPin.text = "";
    this.newPin="";
    this.view.tbxOTP1.setEnabled(false);
    this.view.tbxOTP2.setEnabled(false);
    this.view.tbxOTP3.setEnabled(false);
    this.view.tbxOTP4.setEnabled(false);
    this.view.tbxOTP5.setEnabled(false);
    this.view.tbxOTP6.setEnabled(false);
    this.setTextBoxPinFocus();

   
  },

  
  setTextBoxPinFocus:function(){
    
    this.view.tbxPin.setFocus(true);
    this.populatePin();
  },
  
  bindOTPValidationError: function(err){
    var scope = this;
    applicationManager.getDataProcessorUtility().showToastMessageError(this,err); 
 
    this.newPin="";
    this.view.tbxPin.text ="";
    this.setTextBoxPinFocus();
  },

  resendOTPError: function(err){
    var scope = this;
    applicationManager.getDataProcessorUtility().showToastMessageError(this,err); 

    this.newPin="";
    this.view.tbxPin.text ="";
    this.setTextBoxPinFocus();
  },
  /// TODO temp fix . need to keep same generic function name and use it to display error message
  bindGenericError : function(err){
    var scope = this;
    applicationManager.getDataProcessorUtility().showToastMessageError(this,err); 
    this.newPin="";
    this.view.tbxPin.text ="";
    this.setTextBoxPinFocus();
  }


});