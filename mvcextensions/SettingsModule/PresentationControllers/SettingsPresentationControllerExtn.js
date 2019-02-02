define({
    /***********************************************************************************************
  Name: fetchDeviceList
  Author: Sindhu
  Date: 27/11/2018
  Input: none
  Return: none
*************************************************************************************/  
  fetchDeviceList : function() {
    applicationManager.getPresentationUtility().showLoadingScreen();
    kony.print("Entering fetchDeviceList");
    	var deviceActive = {
            "isDeviceActive": "true"
          	
        };
        var settingsManager = applicationManager.getSettingsManager();
        var settingsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");
            kony.print("deviceActive  request " + JSON.stringify(deviceActive));

     settingsManager.deviceList(deviceActive, this.fetchDeviceListPresentationSuccess, this.fetchDeviceListPresentationError);
   },
  
  fetchDeviceListPresentationSuccess : function(successResponse) {
    kony.print("fetchDeviceListPresentationSuccess_successResponse "+JSON.stringify(successResponse));
    var navManager = applicationManager.getNavigationManager();
    var formattedResponse = checkServiceResponseForErrorCode(successResponse);
    var activeDevicesListController;
    if(formattedResponse.responseCode === "200") {
      var deviceListData = (successResponse.externalAccounts)?successResponse.externalAccounts:[];
      kony.print("fetchDeviceListPresentationSuccess_deviceListData "+deviceListData);
       activeDevicesListController = applicationManager.getPresentationUtility().getController('frmActiveDevicesList', true);
      activeDevicesListController.setSegDeviceList(deviceListData);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    } else {
      activeDevicesListController.bindGenericError(formattedResponse.message);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    }
        
    },

 fetchDeviceListPresentationError : function(errorResponse) {
   kony.print("fetchDeviceListPresentationError_errorResponse "+errorResponse);
   applicationManager.getPresentationUtility().dismissLoadingScreen();
       var activeDevicesListController = applicationManager.getPresentationUtility().getController('frmActiveDevicesList', true);
       var formattedResponse = checkServiceResponseForErrorCode(errorResponse);
      activeDevicesListController.bindGenericError(formattedResponse.message);
    },

 /***********************************************************************************************
  Name: updateDeviceNickName
  Author: Sindhu
  Date: 27/11/2018
  Input: none
  Return: none
*************************************************************************************/ 
  updateDeviceNickName: function(deviceNickName){
    applicationManager.getPresentationUtility().showLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    var deviceData = navManager.getCustomInfo("frmEditDeactivateDevice");
    kony.print("updateDeviceNickName_deviceData"+deviceData);
    var deviceId = deviceData[0].id;
    	var deviceIdName = {
            "id": deviceId,
          	"deviceName":deviceNickName
        };
    kony.print("updateDeviceNickName_deviceIdName"+JSON.stringify(deviceIdName));
        var settingsManager = applicationManager.getSettingsManager();
        settingsManager.updateDeviceNickName(deviceIdName, this.updateDeviceNickNamePresentationSuccess, this.updateDeviceNickNamePresentationError);
  },
  
  updateDeviceNickNamePresentationSuccess: function(successResponse){
    kony.print("updateDeviceNickNamePresentationSuccess_successResponse "+JSON.stringify(successResponse));
    var navManager = applicationManager.getNavigationManager();
    var formattedResponse = checkServiceResponseForErrorCode(successResponse);
    var editDeactivateDeviceController = applicationManager.getPresentationUtility().getController('frmEditDeactivateDevice', true);
    var editDeviceNickName = applicationManager.getPresentationUtility().getController('frmEditDeviceNickName', true);
    if(formattedResponse.responseCode === "200") {
      var formCustomInfo = navManager.getCustomInfo("frmEditDeactivateDevice");
            if(formCustomInfo && formCustomInfo.length && formCustomInfo[0].deviceName){
              formCustomInfo[0].deviceName = editDeviceNickName.getDeviceName();
            }
            navManager.setCustomInfo("frmEditDeactivateDevice", formCustomInfo);
            navManager.navigateTo("frmEditDeactivateDevice");
            editDeactivateDeviceController.onEditDeviceSuccess();
        
    } else {
        editDeviceNickName.bindGenericError(formattedResponse.message);
        }
    applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  
  updateDeviceNickNamePresentationError: function(errorResponse){
    kony.print("updateDeviceNickNamePresentationError_errorResponse "+errorResponse);
   applicationManager.getPresentationUtility().dismissLoadingScreen();
       var editDeviceNameController = applicationManager.getPresentationUtility().getController('frmEditDeviceNickName', true);
       var formattedResponse = checkServiceResponseForErrorCode(errorResponse);
      editDeviceNameController.bindGenericError(formattedResponse.message);
  },
  
  /***********************************************************************************************
  Name: deactivateDevice
  Author: Sindhu
  Date: 27/11/2018
  Input: none
  Return: none
*************************************************************************************/ 
  deactivateDevice: function(deviceId){
    applicationManager.getPresentationUtility().showLoadingScreen();
    kony.print("Entering deactivateDevice_deviceId"+deviceId);
    	var deActivateDetails = {
            "id": deviceId,
          	"status":"deactivate"
        };
    kony.print("deactivateDevice_deviceId"+JSON.stringify(deviceId));
        var settingsManager = applicationManager.getSettingsManager();
        settingsManager.deactivateDevice(deActivateDetails, this.deactivateDevicePresentationSuccess, this.deactivateDevicePresentationError);
  },
  
  deactivateDevicePresentationSuccess: function(successResponse){
    kony.print("deactivateDevicePresentationError_successResponse "+JSON.stringify(successResponse));
    var navManager = applicationManager.getNavigationManager();
    var formattedResponse = checkServiceResponseForErrorCode(successResponse);
    var activateDeviceListController = applicationManager.getPresentationUtility().getController('frmActiveDevicesList', true);
    if(formattedResponse.responseCode === "200") {
      kony.print("updateDeviceNickNamePresentationSuccess_200 "+successResponse);
       var deviceDetails = navManager.getCustomInfo("frmEditDeactivateDevice");
      var deviceNickName = deviceDetails[0].deviceName;
      var settingsDelSuccessMsg = kony.i18n.getLocalizedString("kony.ahb.ALERT.deviceIsDeacivated").replace("###PLACEHOLDER###", '"' + deviceNickName + '"');
      activateDeviceListController.bindGenericSuccess(settingsDelSuccessMsg);
      	navManager.navigateTo("frmActiveDevicesList");
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    } else {
      activateDeviceListController.bindGenericError(formattedResponse.message);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    }
  },
  
  deactivateDevicePresentationError: function(errorResponse){
    kony.print("deactivateDevicePresentationError_errorResponse "+errorResponse);
   applicationManager.getPresentationUtility().dismissLoadingScreen();
       var editDeviceNameController = applicationManager.getPresentationUtility().getController('frmEditDeactivateDevice', true);
       var formattedResponse = checkServiceResponseForErrorCode(errorResponse);
      editDeviceNameController.bindGenericError(formattedResponse.message);
  }
  
});