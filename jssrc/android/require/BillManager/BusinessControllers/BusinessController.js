/**
 *@module BillManager
 */
define([], function() {
    /**
     * BillManager class is used to fetch the information regarding bills. 
     *@alias module:BillManager
     *@class
     */
    function BillManager() {
        var modelDefinition = kony.mvc.MDAApplication.getSharedInstance().modelStore.getModelDefinition("Bills");
        kony.mvc.Business.Controller.call(this);
    }
    inheritsFrom(BillManager, kony.mvc.Business.Delegator);
    BillManager.prototype.initializeBusinessController = function() {};
    BillManager.prototype.execute = function(command) {
        kony.mvc.Business.Controller.prototype.execute.call(this, command);
    };
    /**
     * Fetches due bills for a particular payee using a service call.
     * @param {object} data -  data(payeeId) which is sent to getbills for the payee.
     * @param {function} presentationSuccessCallback will be called when call is successfull
     * @param {function} presentationErrorCallback will be called when call is not successfull
     */
    BillManager.prototype.fetchPayeeDueBill = function(data, presentationSuccessCallback, presentationErrorCallback) {
        var  getPayeeBills  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Bills"); 
        getPayeeBills.customVerb("getDueBillsForPayee", data, getAllCompletionCallback);

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
     * Fetches Bill Pay Pending Transactions for a user using a service call.
     * @param {object} criteria -  criteria(order & sort criteria) which is sent to getbills for the payee.
     * @param {function} presentationSuccessCallback will be called when call is successfull
     * @param {function} presentationErrorCallback will be called when call is not successfull
     */
    BillManager.prototype.fetchUserBillPayPendingTransactions = function(criteria, presentationSuccessCallback, presentationErrorCallback) {
        var  getPostedUserTransactions  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("Bills");
        getPostedUserTransactions.getByCriteria(criteria, getAllCompletionCallback);

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
    return BillManager;
});