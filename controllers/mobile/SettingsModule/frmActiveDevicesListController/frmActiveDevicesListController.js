define({
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  preShow: function() {
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    var settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
    settingsModule.presentationController.fetchDeviceList();
    this.initActions();
  },

  /***********************************************************************************************
  Name: initActions - adding all studio actions
  Author: Sindhu
  Date: 6/12/2018
  Input: none
  Return: none
*************************************************************************************/ 
  initActions : function(){
    var scope = this;
    var configManager = applicationManager.getConfigurationManager();
    var MenuHandler =  applicationManager.getMenuHandler();
    MenuHandler.setUpHamburgerForForm(scope,configManager.constants.MENUSETTINGS); 
    this.view.segDeviceList.onRowClick = this.segDeviceRowClick;
    this.view.MainHeader.btnBack.onClick = this.onClickBack;
    this.view.MainHeader.flxBack.onClick = this.onClickBack;
    this.view.segDeviceList.removeAll();
  },

  /***********************************************************************************************
  Name: onClickBack - navigating to back page
  Author: Sindhu
  Date: 6/12/2018
  Input: none
  Return: none
*************************************************************************************/ 
  onClickBack:function(){
    var navMan=applicationManager.getNavigationManager();
    navMan.goBack();
  },

  /***********************************************************************************************
  Name: setSegDeviceList - setting data for segment
  Author: Sindhu
  Date: 6/12/2018
  Input: pDeviceList
  Return: none
*************************************************************************************/ 

  setSegDeviceList: function(pDeviceList) {
    var segmentData = [];
    for (var i = 0; i < pDeviceList.length; i++){
      kony.print("setSegDeviceList_pDeviceList"+pDeviceList);
      kony.print("setSegDeviceList_pDeviceList[i].deviceName" +pDeviceList[i].deviceName);
      if (pDeviceList && pDeviceList.length) {
        this.view.lblNoActiveDevice.setVisibility(false);
        this.view.segDeviceList.widgetDataMap = {
          lblDeviceName: "deviceName"
        };
        segmentData.push({
          deviceName : pDeviceList[i].deviceName
        });
      } 
      else if(!pDeviceList.length && pDeviceList.length){
        this.view.lblNoActiveDevice.setVisibility(true);
      } else {
        this.view.segDeviceList.removeAll();
        this.view.lblNoActiveDevice.setVisibility(false);
      }
    }
    this.view.segDeviceList.setData(pDeviceList);
  },

  segDeviceRowClick: function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    var deviceDetails = this.view.segDeviceList.selectedRowItems;
    kony.print("segDeviceRowClick_deviceDetails"+deviceDetails);
    var navManager = applicationManager.getNavigationManager();
    navManager.setCustomInfo("frmEditDeactivateDevice", deviceDetails);
    navManager.navigateTo("frmEditDeactivateDevice");
  },

  /***********************************************************************************************
  Name: bindGenericError 
  Author: Sindhu
  Date: 6/12/2018
  Input: err
  Return: none
*************************************************************************************/ 

  bindGenericError: function(err){
    var scope = this;
    applicationManager.getDataProcessorUtility().showToastMessageError(scope,err);

  },


  bindGenericSuccess:function(err){
    var scope = this;
    applicationManager.getDataProcessorUtility().showToastMessageError(scope,err);
  }



});