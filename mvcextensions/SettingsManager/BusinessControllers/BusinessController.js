/**
*@module SettingsManager
 */
define([], function() {
  /**
   *SettingsManager is the class used to handle alerts and other settings
   *@alias module:SettingsManager
   *@class
   */
function SettingsManager() {
}
inheritsFrom(SettingsManager, kony.mvc.Business.Delegator);

SettingsManager.prototype.initializeBusinessController = function(){};
  
/**
 * Gets list wise accounts and the respective account alerts for the user signed-in.
 * @param {function} presentation @successCallback - will be called when call is successfull.
 * @param {function} presentation @failureCallback - will be called when call is not successfull.
 * @returns {Array} -Array of records of accounts list with account alerts to the presentation @successCallback.
 */
SettingsManager.prototype.getAllAccountAlerts  =   function(successCallback, failureCallback) {
    function  getAllCompletionCallback(status, data, error) {
      if(status  ==  kony.mvc.constants.STATUS_SUCCESS) {
        successCallback(data);
      } 
      else{
        failureCallback(data);
      }
    }
    var  self  = this;
    var  alertsInstance   =   kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("UserAccountAlerts");
    alertsInstance.getByCriteria({}, getAllCompletionCallback);
};
  
/**
 * Updates a specific alert for an account using a service.
 * @param {object} parms- inputParams i.e alertId, isEnabled toggle value (true/false)
 * @param {function} presentation @successCallback - will be called when call is successfull.
 * @param {function} presentation @failutrCallback - will be called when call is not successfull.
 */
SettingsManager.prototype.updateUserAccountAlerts = function(inputParams, successCallback, failureCallback) {
    function getAllCompletionCallback(status, data, error) {
        if (status == kony.mvc.constants.STATUS_SUCCESS) {
            successCallback(data);
        } else {
            failureCallback(data);
        }
    }
    try {
        var alertsInstance = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("UserAccountAlerts");
        var obj = new alertsInstance(inputParams);
        obj.partialUpdate(getAllCompletionCallback);
      }
    catch(err) {
      throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.ServiceCallFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
    }
};
  
/**
 * Get Deals Alerts and Security Alerts settings for the particular user using a service
 * @param {function} presentation @successCallback - will be called when call is successfull.
 * @param {function} presentation @failiureCallback - will be called when call is not successfull.
 * @return {object} - json of all security and deals alerts
 */
SettingsManager.prototype.getDealsAndSecurityAlerts  =   function(successCallback, failureCallback) {
    function  getAllCompletionCallback(status, data, error) {
        if (status  ==  kony.mvc.constants.STATUS_SUCCESS) {
            successCallback(data);
        } else {
            failureCallback(data);
        }
    }
    var  self  = this;
    var  alertsInstance   =   kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("UserAlerts");
    alertsInstance.getByCriteria({}, getAllCompletionCallback);

};

/**
 * Updates specific Security / Deals Alert.
 * @param {object} parms- inputParams i.e alertId, specific security/deals alert identifier and it's toggle value (true/false)
 * @param {function} presentation @successCallback - will be called when call is successfull.
 * @param {function} presentation @failureCallback - will be called when call is not successfull.
 */
SettingsManager.prototype.updateUserAlerts = function(inputParams, successCallback, failureCallback) {
    function getAllCompletionCallback(status, data, error) {
        if (status == kony.mvc.constants.STATUS_SUCCESS) {
            successCallback(data);
        } else {
            failureCallback(data);
        }
    }
    try {
        var alertsInstance = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("UserAlerts");
        var obj = new alertsInstance(inputParams);
        obj.partialUpdate(getAllCompletionCallback);
      }
    catch(err) {
      throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.ServiceCallFailed", GlobalExceptionHandler.ActionConstants.ALERT, arguments.callee.name);
    }
};
  
     /**************************************************************************************
  * device details
  * @member of SettingsManager
  * @param {callBack} presentationSuccessCallback - invoke the call back with success response.
  * @param {callBack} presentationErrorCallback - invoke the call back with error response.
  Name: deviceList
  Author: Sindhu
  Date: 5/12/2018
  Input: none
  Return: none 
  ************************************************************************************************/
    SettingsManager.prototype.deviceList = function(record,presentationSuccessCallback,presentationErrorCallback)
    {
      var self =this;
      var deviceRepo  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("User");
      deviceRepo.customVerb('getAllDevices',record,getAllCompletionCallback);
      function  getAllCompletionCallback(status,  data,  error) {
        var srh = applicationManager.getServiceResponseHandler();
        var obj =  srh.manageResponse(status,  data,  error,presentationSuccessCallback,presentationErrorCallback);
        if(obj.status === true){
          presentationSuccessCallback(obj.data);
        }
        else {
          presentationErrorCallback(obj.errmsg);
        }
      } 
    };
  
       /**************************************************************************************
  * update device nickname
  * @member of SettingsManager
  * @param {callBack} presentationSuccessCallback - invoke the call back with success response.
  * @param {callBack} presentationErrorCallback - invoke the call back with error response.
  Name: updateDeviceNickName
  Author: Sindhu
  Date: 10/12/2018
  Input: none
  Return: none 
  ************************************************************************************************/
    SettingsManager.prototype.updateDeviceNickName = function(record,presentationSuccessCallback,presentationErrorCallback)
    {
      var self =this;
      var deviceRepo  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("User");
      deviceRepo.customVerb('updateDeviceDetails',record,getAllCompletionCallback);
      function  getAllCompletionCallback(status,  data,  error) {
        var srh = applicationManager.getServiceResponseHandler();
        var obj =  srh.manageResponse(status,  data,  error,presentationSuccessCallback,presentationErrorCallback);
        if(obj.status === true){
          presentationSuccessCallback(obj.data);
        }
        else {
          presentationErrorCallback(obj.errmsg);
        }
      } 
    };
  
       /**************************************************************************************
  * deactivate device 
  * @member of SettingsManager
  * @param {callBack} presentationSuccessCallback - invoke the call back with success response.
  * @param {callBack} presentationErrorCallback - invoke the call back with error response.
  Name: deactivateDevice
  Author: Sindhu
  Date: 10/12/2018
  Input: none
  Return: none 
  ************************************************************************************************/
    SettingsManager.prototype.deactivateDevice = function(record,presentationSuccessCallback,presentationErrorCallback)
    {
      var self =this;
      var deviceRepo  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("User");
      deviceRepo.customVerb('updateDeviceStatus',record,getAllCompletionCallback);
      function  getAllCompletionCallback(status,  data,  error) {
        var srh = applicationManager.getServiceResponseHandler();
        var obj =  srh.manageResponse(status,  data,  error,presentationSuccessCallback,presentationErrorCallback);
        if(obj.status === true){
          presentationSuccessCallback(obj.data);
        }
        else {
          presentationErrorCallback(obj.errmsg);
        }
      } 
    };

return SettingsManager;
});
