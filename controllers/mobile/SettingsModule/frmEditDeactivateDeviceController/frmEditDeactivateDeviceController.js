define({
  deviceDetails:'',
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  preShow: function() {
    this.initActions();
    this.onCancleDeactive();
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    var configManager = applicationManager.getConfigurationManager();
    var MenuHandler =  applicationManager.getMenuHandler();
    MenuHandler.setUpHamburgerForForm(this,configManager.constants.MENUSETTINGS);
    this.deviceDetails = navManager.getCustomInfo("frmEditDeactivateDevice");
    this.setWidgetsData(this.deviceDetails);
  },
/***********************************************************************************************
  Name: initActions - holding all studio actions
  Author: Sindhu
  Date: 10/12/2018
  Input: none
  Return: none
*************************************************************************************/

  initActions : function(){
    this.view.MainHeaderWithCancel.btnCancel.onClick = this.onClickEdit;
    this.view.btnDeactivate.onClick = this.onClickDeactive;
    this.view.AlertPopup.btnDontCancel.onClick = this.onCancleDeactive;
    this.view.MainHeaderWithCancel.btnBack.onClick = this.onClickBack;
    this.view.MainHeaderWithCancel.flxBack.onClick = this.onClickBack;
    this.view.AlertPopup.btnOK.onClick = this.confirmDeactivate;
  },

  /***********************************************************************************************
  Name: setWidgetsData - assigning data for widgets
  Author: Sindhu
  Date: 10/12/2018
  Input: deviceDetails
  Return: none
*************************************************************************************/

  setWidgetsData: function(deviceDetails) {
    var deviceInfo = deviceDetails[0];
    kony.print("setWidgetsData_deviceInfo"+deviceInfo);
    if (deviceDetails && deviceDetails.length) {
      this.view.lblLastLoginDateTime.text = deviceInfo.lastLoginTime;
      this.view.lblDate.text = deviceInfo.activationDate;
      this.view.lblDeviceName.text = deviceInfo.deviceName;
      this.view.lblDeviceType.text = deviceInfo.osType;
    }
  },

  /***********************************************************************************************
  Name: onClickBack - onClickBack
  Author: Sindhu
  Date: 10/12/2018
  Input: none
  Return: none
*************************************************************************************/
  onClickBack:function(){
    var navMan=applicationManager.getNavigationManager();
    navMan.goBack();
  },

  /***********************************************************************************************
  Name: onClickEdit - setCustomVerb
  Author: Sindhu
  Date: 10/12/2018
  Input: none
  Return: none
*************************************************************************************/
  onClickEdit: function(){
    var getDeviceDetails = this.deviceDetails;
    var navManager = applicationManager.getNavigationManager();
    navManager.setCustomInfo("frmEditDeviceNickName", getDeviceDetails);
    navManager.navigateTo("frmEditDeviceNickName");
  },

  onClickDeactive:function(){
    var getDeviceId = this.deviceDetails[0];
    var deviceId = getDeviceId.id;
    var currentId = getDeviceId.deviceId;
    var deviceUtilManager = applicationManager.getDeviceUtilManager();
    var currentDeviceId = deviceUtilManager.getDeviceInfo().deviceID;
    kony.print("current " + currentDeviceId +"deviceId "+ currentId);
    // check for current using device cannot be deactivated.
    if (currentId === currentDeviceId) {
      this.onCancleDeactive();
      this.bindGenericError(kony.i18n.getLocalizedString("kony.ahb.ALERT.cannotDeactivateCurrentDevice"));
    }else {
      this.view.AlertPopup.setVisibility(true);
      this.view.AlertPopup.setEnabled(true);
      this.view.MainHeaderWithCancel.btnCancel.setEnabled(false);
    }
  },

  onCancleDeactive: function(){
    this.view.AlertPopup.setVisibility(false);
    this.view.AlertPopup.setEnabled(false);
    this.view.MainHeaderWithCancel.btnCancel.setEnabled(true);
  },

   /***********************************************************************************************
  Name: confirmDeactivate - invoking service on click of deactivate
  Author: Sindhu
  Date: 10/12/2018
  Input: none
  Return: none
*************************************************************************************/
  confirmDeactivate: function(){
    this.onCancleDeactive();
    var getDeviceId = this.deviceDetails[0];
    var deviceId = getDeviceId.id;
    kony.print("confirmDeactivate_deviceId" + deviceId);
    var settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    settingsModule.presentationController.deactivateDevice(deviceId);
  },

  /***********************************************************************************************
  Name: bindGenericError
  Author: Sindhu
  Date: 12/10/2018
  Input: errorMessage
  Return: none
*************************************************************************************/  
  bindGenericError : function(errorMessage){
    var scope = this;
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    applicationManager.getDataProcessorUtility().showToastMessageError(scope, errorMessage);
  },

  /***********************************************************************************************
  Name: onEditBeneficiarySuccess - success message from service
  Author: Sindhu
  Date: 10/12/2018
  Input: none
  Return: success message
*************************************************************************************/    
  onEditDeviceSuccess : function (){
    this.bindGenericError(kony.i18n.getLocalizedString("kony.ahb.ALERT.deviceNameChanged"));
  },

});