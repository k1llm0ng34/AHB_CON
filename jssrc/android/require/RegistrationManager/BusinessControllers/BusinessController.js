/**
 *@module RegistrationManager
 */
define([], function() {
    /**
     * Description of Registration manager
     *@alias module:RegistrationManager 
     *@class
     */
    function RegistrationManager() {}
    inheritsFrom(RegistrationManager, kony.mvc.Business.Delegator);
    RegistrationManager.prototype.initializeBusinessController = function() {};
    RegistrationManager.prototype.hideLoadingIndicator = function() {
            kony.application.setApplicationBehaviors({
                "hideDefaultLoadingIndicator": true
            });
        }
        /**
         * Function to initialize application Manager
         * @member of RegistrationHandler
         * @returns nothing
         */
    RegistrationManager.prototype.setActionsForceTouch = function() {
            var cm = applicationManager.getConfigurationManager();
            var userManager = applicationManager.getUserPreferencesManager();
            var username = userManager.getUserName();
            var quickActionItems = JSON.parse(JSON.stringify(cm.quickActionItems));
            quickActionItems.splice(1, 3);
            if (!username && username === "") {
                var actionSet = kony.forcetouch.setQuickActionItems(quickActionItems);
            }
        }
        /**
         * Function to fetch the Device registration status using a service call.  
         * @param {JSON} criteria - used to check device registartion status for particular device ID.
         * @param {callBack} presentationSuccessCallback - invoke the call back with success response.
         * @param {callBack} presentationErrorCallback - invoke the call back with error response.  
         */
    RegistrationManager.prototype.fetchDevRegistrationStatus = function(criteria, presentationSuccessCallback, presentationErrorCallback) {
        var self = this;
        var deviceRegistratioRepo  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("DeviceRegistration");
        deviceRegistratioRepo.getByCriteria(criteria, getAllCompletionCallback);

        function  getAllCompletionCallback(status,  data,  error) {
            var srh = applicationManager.getServiceResponseHandler();
            var obj = srh.manageResponse(status,  data,  error);
            if (obj["status"] === true) {
                presentationSuccessCallback(obj["data"]);
            } else {
                presentationErrorCallback(obj["errmsg"]);
            }
        }
    };
    /**
     * Function to update device registration status using a service call.
     * @param {record} record - record consist of deviceId which status has to be created or updated.
     * @param {callBack} presentationSuccessCallback - invoke the call back with success response.
     * @param {callBack} presentationErrorCallback - invoke the call back with error response.
     */
    RegistrationManager.prototype.updateDeviceRegistrationStatus = function(record, presentationSuccessCallback, presentationErrorCallback) {
        var deviceRegistratioRepo = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("DeviceRegistration");
        deviceRegistratioRepo.save(record, saveCompletionCallback, "online");

        function  saveCompletionCallback(status,  data,  error) {
            var srh = applicationManager.getServiceResponseHandler();
            var obj = srh.manageResponse(status,  data,  error);
            if (obj["status"] === true) {
                presentationSuccessCallback(obj["data"]);
            } else {
                presentationErrorCallback(obj["errmsg"]);
            }
        }
    };
    /**
     * Function to delete device registration using a service call.
     * @param {object} criteria -  record consist of deviceID which is to be deleted
     * @param {callBack} presentationSuccessCallback - invoke the call back with success response.
     * @param {callBack} presentationErrorCallback - invoke the call back with error response.
     */
    RegistrationManager.prototype.deleteRegisteredDevice = function(record, presentationSuccessCallback, presentationErrorCallback) {
        var deviceRegistratioRepo = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("DeviceRegistration");
        deviceRegistratioRepo.removeById(deviceRegistratioRepo, record, deleteCompletionCallback, "online");

        function  deleteCompletionCallback(status,  data,  error) {
            var srh = applicationManager.getServiceResponseHandler();
            var obj = srh.manageResponse(status,  data,  error);
            if (obj["status"] === true) {
                presentationSuccessCallback(obj["data"]);
            } else {
                presentationErrorCallback(obj["errmsg"]);
            }
        }
    };
    /**
     * Function to set setEventTracking API to automatically Capture the Events for Reports
     * @returns nothing
     */
    RegistrationManager.prototype.setEventTracking = function() {
        KNYMetricsService.setEventTracking(["FormEntry", "Error", "Crash", "FormExit", "ServiceResponse"]);
    };
    return RegistrationManager;
});