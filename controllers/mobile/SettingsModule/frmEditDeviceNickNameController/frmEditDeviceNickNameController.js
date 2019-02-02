define({
  deviceName:'',
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  preShow: function() {
    this.initActions();
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    var configManager = applicationManager.getConfigurationManager();
    var MenuHandler =  applicationManager.getMenuHandler();
    MenuHandler.setUpHamburgerForForm(this,configManager.constants.MENUSETTINGS);
  },
  
   /***********************************************************************************************
  Name: initActions - holding all studio actions
  Author: Sindhu
  Date: 10/12/2018
  Input: none
  Return: none
*************************************************************************************/

  initActions : function(){
    this.populateDeviceNickName();
    this.view.btnConfirm.onClick = this.onClickConfirmBtn;
    this.view.MainHeader.btnBack.onClick = this.onClickBack;
    this.view.MainHeader.flxBack.onClick = this.onClickBack;
    this.view.txtDeviceName.onBeginEditing = this.focusSkinForNickNameHolder;
    this.view.txtDeviceName.onEndEditing = this.initialSkinForNickNameHolder;
    this.view.txtDeviceName.onTextChange = this.enableDisableConfirmButton;
  },

   /***********************************************************************************************
  Name: onClickBack - navigate to previous page
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
  Name: initialSkinForNickNameHolder - skin assigning 
  Author: Sindhu
  Date: 10/12/2018
  Input: none
  Return: none
*************************************************************************************/
  focusSkinForNickNameHolder: function(){
    this.view.lblNickNameHolder.skin = "sknAHBBff6d00";
  },

   /***********************************************************************************************
  Name: initialSkinForNickNameHolder -skin assigning 
  Author: Sindhu
  Date: 10/12/2018
  Input: none
  Return: none
*************************************************************************************/
  initialSkinForNickNameHolder: function(){
    this.view.lblNickNameHolder.skin = "sknAHBLined3d3d3";
  },

  /***********************************************************************************************
  Name: populateName - getNickName 
  Author: Sindhu
  Date: 10/12/2018
  Input: none
  Return: none
*************************************************************************************/   

  populateDeviceNickName:function(){
    var navManager=applicationManager.getNavigationManager();
    var deviceDetails=navManager.getCustomInfo("frmEditDeviceNickName");
    kony.print("populateDeviceNickName_deviceDetails"+deviceDetails);
    var deviceNickName = deviceDetails[0].deviceName;
    kony.print("populateDeviceNickName_deviceNickName"+deviceNickName);
    if(deviceNickName.length > 0 && deviceNickName){

      this.view.txtDeviceName.text=deviceNickName;
    }
    else{
      this.view.txtDeviceName.text="";
    }
    this.view.txtDeviceName.setFocus(true);
    this.focusSkinForNickNameHolder();
    this.enableDisableConfirmButton();
  },

  /***********************************************************************************************
  Name: enableDisableConfirmButton - valdiation for confirm button 
  Author: Sindhu
  Date: 10/12/2018
  Input: none
  Return: none
*************************************************************************************/  
  enableDisableConfirmButton:function(){
    var deviceName = this.view.txtDeviceName.text.trim();
    this.deviceName =  deviceName;
    if(deviceName){
      this.enableConfirmButton();
    }else{
      this.disableConfirmButton();
    }
  },

  /***********************************************************************************************
  Name: enableConfirmButton - enable skin for button
  Author: Sindhu
  Date: 10/12/2018
  Input: none
  Return: none
*************************************************************************************/  
  enableConfirmButton: function(){
    this.view.btnConfirm.skin = "sknAHBGsc16ptBff6d00TffffffBr21pt";
    this.view.btnConfirm.focusSkin = "sknAHBGsc16ptBff6d00TffffffBr21pt";
  },

  /***********************************************************************************************
  Name: disableConfirmButton - disable skin for button
  Author: Sindhu
  Date: 10/12/2018
  Input: none
  Return: none
*************************************************************************************/  
  disableConfirmButton: function(){
    this.view.btnConfirm.skin = "sknAHBGscB16ptBeaeaeaTffffffRounded";
    this.view.btnConfirm.focusSkin = "sknAHBGscB16ptBeaeaeaTffffffRounded";
  },

  /***********************************************************************************************
  Name: onClickConfirmBtn - service call to update nickname 
  Author: Sindhu
  Date: 10/12/2018
  Input: none
  Return: none
*************************************************************************************/
  onClickConfirmBtn:function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    var deviceNickName= this.view.txtDeviceName.text.trim();
    kony.print("onClickBtnOk_deviceNickName"+deviceNickName);
    var settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    if(deviceNickName.length > 0 && deviceNickName){
      this.deviceName = deviceNickName;
      kony.print("this.deviceName"+this.deviceName);
      settingsModule.presentationController.updateDeviceNickName(deviceNickName);
    }
    else{
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      this.disableConfirmButton();
    }
  },

  /***********************************************************************************************
  Name: getDeviceName
  Author: Sindhu
  Date: 12/10/2018
  Input: none
  Return: deviceName
*************************************************************************************/  
  getDeviceName : function (){
    return this.deviceName;
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
  }


});