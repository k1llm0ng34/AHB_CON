define({
  uploadCheckImagesInit :function(){
    var FormValidator = require("FormValidatorManager")
	this.fv = new FormValidator(2);
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },

  preShow: function() {
    var configManager = applicationManager.getConfigurationManager();
    var MenuHandler =  applicationManager.getMenuHandler();
    MenuHandler.setUpHamburgerForForm(this,configManager.constants.MENUACCOUNTS);
    // this.fv.submissionView(this.view.btnContinue);
    // this.setCameraProperties();
    this.setInitialUI();
    //     this.view.CamFront.zIndex=10;
    //     this.view.CamBack.zIndex=10;
    this.view.CamFront.onCapture = this.onFrontCamCapture;
    this.view.CamBack.onCapture = this.onBackCamCapture;
    this.view.btnReTakeFront.onClick = this.onReTakeFrontClick;
    this.view.btnReTakeBack.onClick = this.onReTakeBackClick;
    this.view.btnContinue.onClick = this.btnContinueOnClick;
    this.view.MainHeader.btnBack.onClick = this.onBackFrmUploadCheckImages;
    this.view.MainHeader.flxBack.onClick = this.onBackFrmUploadCheckImages;
    // this.view.btnContinue.zIndex=10;
   // this.view.flxBack.onClick = this.flxBackOnClick;
    //this.view.customHeader.btnRight.onClick = this.onCancelClick;
    //this.view.customHeader.flxBack.onClick = this.flxBackHeaderOnClick;
    this.view.flxFrontUploaded.onClick = this.flxFrontUploaded;
    this.view.flxCross.onClick = this.flxCross;
    //this.renderTitleBar();
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    this.view.forceLayout();
  },
  
  setInitialUI : function(){
    // this.fv.checkAndUpdateStatusForNull(0, "");
    // this.fv.checkAndUpdateStatusForNull(1, "");
    this.view.flxFrontUploaded.setVisibility(true);//
    this.view.flxBackUploaded.setVisibility(true);//
    this.view.flxFront.setVisibility(true);
    this.view.flxBack.setVisibility(true);
    this.view.flxMain.setEnabled(true);
    this.view.flxHeader.setEnabled(true);
    this.view.flxCheckZoomView.setVisibility(false); 
    //var checkDepositModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CheckDepositModule");
    //var depObj = checkDepositModule.presentationController.getDepositObjInView();
    //     if(depObj)
    //     {
    //       if(depObj.checkImage){
    //         this.fv.checkAndUpdateStatusForNull(0, "captured");
    //         this.view.flxFrontUploaded.setVisibility(true);
    //         this.view.flxFront.setVisibility(false);
    //       }
    //       if(depObj.checkImageBack) {
    //       	this.fv.checkAndUpdateStatusForNull(1, "captured");  
    //       	this.view.flxBackUploaded.setVisibility(true);
    //         this.view.flxBack.setVisibility(false);
    //       }
    //     } 
    var navManager = applicationManager.getNavigationManager();
    var selectedRecordData=navManager.getCustomInfo("frmUploadCheckImages");
    var chequeImageData=navManager.getCustomInfo("chequeImage");
    this.view.Details.lblAccountNumber.text=selectedRecordData.chequeDate;
    this.view.Details.lblAccountBalance.text=commaSeparatorUtil(selectedRecordData.chequeAmount) +"  "+selectedRecordData.chequeCurrency;
    this.view.forceLayout();
    //	this.view.Details.lblCurrency.text=selectedRecordData.chequeCurrency;
    this.view.Details.lblAccountNumberHeading.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.transaction.check");
    this.view.AccountData.lblAccountNumber.text=selectedRecordData.accountNumber;
    this.view.AccountData.lblAccountNumberHeading.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.Manage.AccountNumber");
    this.view.AccountData.lblCheckNumber.text=selectedRecordData.chequeNumber;
    this.view.AccountData.lblCheckNumberHeading.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.ahb.Transaction.ChequeNumber");
    this.view.AccountData.lblCheckStatus.text=selectedRecordData.chequeStatus;
    this.view.AccountData.lblCheckStatusHeading.text=applicationManager.getPresentationUtility().getStringFromi18n("kony.ahb.common.Status");
    this.view.imgCheckFront.base64 =chequeImageData;
    this.view.forceLayout();
  },
  
  renderTitleBar: function() {
    var deviceUtilManager = applicationManager.getDeviceUtilManager();
    var isIphone = deviceUtilManager.isIPhone();
    if (isIphone) {
      this.view.flxHeader.setVisibility(false);
    }
  },
  
  afterImageCapture: function(orientation) {
    if(orientation === "front"){
      this.view.flxFront.setVisibility(false);
      this.view.flxFrontUploaded.setVisibility(true);
      this.fv.checkAndUpdateStatusForNull(0, "captured");
    }
    else{
      this.view.flxBack.setVisibility(false);
      this.view.flxBackUploaded.setVisibility(true);
      this.fv.checkAndUpdateStatusForNull(1, "captured");
    }
   applicationManager.getPresentationUtility().dismissLoadingScreen();
  },

  onFrontCamCapture: function() {
    var deviceUtilManager = applicationManager.getDeviceUtilManager();
    var checkDepositModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CheckDepositModule");
    var isIphone = deviceUtilManager.isIPhone();
    if(!isIphone){
    	checkDepositModule.presentationController.commonFunctionForNavigation("frmUploadCheckImages");  
    }
    applicationManager.getPresentationUtility().showLoadingScreen();
    var rawBytes = this.view.CamFront.rawBytes;
    var base64Str = kony.convertToBase64(rawBytes);
    if(isIphone) {
      this.view.imgCheckFront.base64 = base64Str;
    }
    else {
      this.view.imgCheckFront.rawBytes = rawBytes;
    }
    checkDepositModule.presentationController.captureCheckImage(base64Str, "front");
  },

  onBackCamCapture: function() {
    var deviceUtilManager = applicationManager.getDeviceUtilManager();
    var checkDepositModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CheckDepositModule");
    var isIphone = deviceUtilManager.isIPhone();
    if(!isIphone){
    	checkDepositModule.presentationController.commonFunctionForNavigation("frmUploadCheckImages");
    }
    applicationManager.getPresentationUtility().showLoadingScreen();
    var rawBytes = this.view.CamBack.rawBytes;
    var base64Str = kony.convertToBase64(rawBytes);
    if(isIphone) {
      this.view.imgCheckBack.base64 = base64Str;
    }
    else {
      this.view.imgCheckBack.rawBytes = rawBytes;
    }
    checkDepositModule.presentationController.captureCheckImage(base64Str, "back");
  },

  btnContinueOnClick: function() {
    applicationManager.getPresentationUtility().showLoadingScreen();
    var checkDepositModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CheckDepositModule");
    checkDepositModule.presentationController.navigateToConfirmTransfer();
  },
  
  flxBackHeaderOnClick: function() {
    var navManager = applicationManager.getNavigationManager();	
    navManager.goBack();
  },

  flxCross: function() {
    this.view.flxCheckZoomView.setVisibility(false);
    this.view.flxMain.setEnabled(true);
    this.view.flxHeader.setEnabled(true);
  },

  flxFrontUploaded: function() {
    var navManager = applicationManager.getNavigationManager();
    var chequeImageData=navManager.getCustomInfo("chequeImage");
    this.view.imgCheckZoom.base64=chequeImageData;
    // Creates a transformation object that can be used in an animation definition. 
    var transformObject = kony.ui.makeAffineTransform();
    // Add a translation and a scale.                                                                            
    var width = kony.os.deviceInfo().screenWidth;
    var height = kony.os.deviceInfo().screenHeight;
   kony.print("width " + JSON.stringify(width) + "height -  "+ JSON.stringify(height));
    
    var deviceUtilManager = applicationManager.getDeviceUtilManager();
    var isIphone = deviceUtilManager.isIPhone();
    if (isIphone) {
      transformObject.scale(width*0.8/height, height *0.8 /width);
    }
    else{
      transformObject.scale(height *0.8 /width, width*0.8/height);
    }
    
    
    transformObject.rotate(270);
    // Create the animation definition.                                       
    var animationDef = {
      100:{
        "transform": transformObject
      }
    };

    var animationConfig = {
      duration: 0.3,
      fillMode: kony.anim.FILL_MODE_FORWARDS
    };

    // Creates an object that defines an animation.
    var animationDefObject = kony.ui.createAnimation(animationDef);
    this.view.imgCheckZoom.animate(animationDefObject, animationConfig);
    this.view.flxMain.setEnabled(false);
     this.view.flxHeader.setEnabled(false);
    this.view.flxCheckZoomView.setVisibility(true);  
    
  },

  onCancelClick: function() {
    var checkDepositModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("CheckDepositModule");
    checkDepositModule.presentationController.cancelDeposit();
  },	

   onReTakeFrontClick: function(){
    var deviceUtilManager = applicationManager.getDeviceUtilManager();
    var isIphone = deviceUtilManager.isIPhone();
    if(isIphone)
      this.view.CamFront.takePicture();
    else
      this.view.CamFront.openCamera();
     //custom metric API to generate Reports
        KNYMetricsService.sendCustomMetrics("frmUploadCheckImages", {"Check Retake":"Check Image Retake"});
  },

  onReTakeBackClick: function() {
    var deviceUtilManager = applicationManager.getDeviceUtilManager();
    var isIphone = deviceUtilManager.isIPhone();
    if(isIphone)
      this.view.CamBack.takePicture();
    else
      this.view.CamBack.openCamera();
    //custom metric API to generate Reports
        KNYMetricsService.sendCustomMetrics("frmUploadCheckImages", {"Check Retake":"Check Image Retake"});
  },
  
   setCameraProperties: function() {
    var deviceUtilManager = applicationManager.getDeviceUtilManager();
    var isIphone = deviceUtilManager.isIPhone();
    if(!isIphone){
      this.view.CamFront.cameraOptions = {
          hideControlBar: true
      };
      this.view.CamBack.cameraOptions = {
          hideControlBar: true
      };
    }
  },

  onBackFrmUploadCheckImages: function() {
    var navMan = applicationManager.getNavigationManager();
    navMan.goBack();
  },

});