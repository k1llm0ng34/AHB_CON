/**
  * @module MessagesManager
 */

define([], function() {
  /**
   *This is class named MessagesManager which handles all functions related to Messages in the application
   *@alias module:MessagesManager
   *@class
   */

  function MessagesManager(){
    /**@member {Integer} unreadMessages Contains number of unread messages are there in current user's mail*/
    this.unreadMessages = null;
    /**@member {Array}  messageCategories Contains data of message categories as Json Array - that the Application supports*/
    this.messageCategories=null;
  }

  inheritsFrom(MessagesManager, kony.mvc.Business.Delegator);

  MessagesManager.prototype.initializeBusinessController = function(){};

  /**
  * Fetches the list of inbox messages(Requests)
  * @param {function} presentationMsgSuccess will be called when call is successfull
  * @param {function} presentationMsgError will be called when call is not successfull
  * @returns {Array} - list of requested Message objects as Json Array
  */
  MessagesManager.prototype.fetchAllRequestsForInbox = function(presentationMsgSuccess,presentationMsgError)
  {
    var messagesRepo  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("SecureMessaging");
    var userManager = applicationManager.getUserPreferencesManager();
    var param = {
      "username" : userManager.getUserName(),
      "softDeleteFlag" : "false"
    };
    messagesRepo.customVerb('getRequests',param,fetchAllRequestsForInboxCompletionCallback);

    function fetchAllRequestsForInboxCompletionCallback(status,  data,  error){
      var srh = applicationManager.getServiceResponseHandler();
      var obj =  srh.manageResponse(status,  data,  error);

      if(obj.status === true){
        presentationMsgSuccess(obj.data);
      }
      else {
        presentationMsgError(obj.errmsg);
      }
    }
  };

  /**
  * Fetches the list of deleted messages(Requests)
  * @param {function} presentationMsgSuccess will be called when call is successfull
  * @param {function} presentationMsgError will be called when call is not successfull
  * @returns {Array} - list of requested Message objects as Json Array
  */
  MessagesManager.prototype.fetchAllRequestsForDeleted = function(presentationMsgSuccess,presentationMsgError)
  {
    var messagesRepo  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("SecureMessaging");
    var userManager = applicationManager.getUserPreferencesManager();
    var param = {
      "username" : userManager.getUserName(),
      "softDeleteFlag" : "true"
    };
    messagesRepo.customVerb('getRequests',param,fetchAllRequestsForDeletedCompletionCallback);

    function fetchAllRequestsForDeletedCompletionCallback(status,  data,  error){
      var srh = applicationManager.getServiceResponseHandler();
      var obj =  srh.manageResponse(status,  data,  error);

      if(obj.status === true){
        presentationMsgSuccess(obj.data);
      }

      else {
        presentationMsgError(obj.errmsg);
      }
    }
  };

  /**
  * Fetches the list of categories
  * @param {function} presentationMsgSuccess will be called when call is successfull
  * @param {function} presentationMsgError will be called when call is not successfull
  * @returns {Array} - list of requested Message objects as Json Array
  */
  MessagesManager.prototype.fetchCategoriesForMessages = function(presentationMsgSuccess,presentationMsgError)
  {
    var messagesRepo  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("SecureMessaging");
    messagesRepo.customVerb('getRequestCategory',{},fetchCategoriesForMessagesCompletionCallback);

    function fetchCategoriesForMessagesCompletionCallback(status,  data,  error){
      var srh = applicationManager.getServiceResponseHandler();
      var obj =  srh.manageResponse(status,  data,  error);

      if(obj.status === true){
        presentationMsgSuccess(obj.data);
        this.messageCategories=obj.data.requestcategory;
      }
      else {
        presentationMsgError(obj.errmsg);
      }

    }
  };

  /**
  * get the cached list of categories - messageCategories stored in class
  * @returns {Array} - list of Message objects as Json Array
  */
  MessagesManager.prototype.getCategoriesForMessages = function()
  {
    return this.messageCategories;	
  };

  /**
  * Mark the entire request as deleted by making a service call
  * @param {object} record - json consisting of requestid of the request to be deleted
  * @param {function} presentationMsgSuccess will be called when call is successfull
  * @param {function} presentationMsgError will be called when call is not successfull
  */
  MessagesManager.prototype.softDeleteAllMessagesOfARequest = function(record,presentationMsgSuccess,presentationMsgError)
  {
    var messagesRepo  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("SecureMessaging");
    var userManager = applicationManager.getUserPreferencesManager();
    var params = {
      "modifiedby" : userManager.getUserName(),
      "softdelete" : "true",
      "requestid"  : record.requestid
    };
    messagesRepo.customVerb('updateRequest',params,softDeleteAllMessagesOfARequestCompletionCallback);

    function softDeleteAllMessagesOfARequestCompletionCallback(status,  data,  error){

      var srh = applicationManager.getServiceResponseHandler();
      var obj =  srh.manageResponse(status,  data,  error);

      if(obj.status === true){
        presentationMsgSuccess(obj.data);
      }

      else {
        presentationMsgError(obj.errmsg);
      }
    }

  };

  /**
  * Delete the entire request permanently
  * @param {object} record - json consisting of requestid of the request to be deleted permanently
  * @param {function} presentationMsgSuccess will be called when call is successfull
  * @param {function} presentationMsgError will be called when call is not successfull
  */
  MessagesManager.prototype.hardDeleteAllMessagesOfARequest = function(record,presentationMsgSuccess,presentationMsgError)
  {
    var messagesRepo  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("SecureMessaging");
    var userManager = applicationManager.getUserPreferencesManager();
    var params = {
      "modifiedby" : userManager.getUserName(),
      "harddelete" : "true",
      "requestid"  : record.requestid
    };
    messagesRepo.customVerb('updateRequest',params,hardDeleteAllMessagesOfARequestCompletionCallback);

    function hardDeleteAllMessagesOfARequestCompletionCallback(status,  data,  error){

      var srh = applicationManager.getServiceResponseHandler();
      var obj =  srh.manageResponse(status,  data,  error);

      if(obj.status === true){
        presentationMsgSuccess(obj.data);
      }
      else {
        presentationMsgError(obj.errmsg);
      }
    }

  };

  /**
  * Restore the entire request which was soft deleted
  * @param {object} record - json consisting of requestid of the request to be restored
  * @param {function} presentationMsgSuccess will be called when call is successfull
  * @param {function} presentationMsgError will be called when call is not successfull
  */
  MessagesManager.prototype.restoreDeletedMessagesOfARequest = function(record,presentationMsgSuccess,presentationMsgError)
  {
    var messagesRepo  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("SecureMessaging");
    var userManager = applicationManager.getUserPreferencesManager();
    var params = {
      "modifiedby" : userManager.getUserName(),
      "softdelete" : "false",
      "requestid"  : record.requestid
    };
    messagesRepo.customVerb('updateRequest',params,restoreDeletedMessagesOfARequestCompletionCallback);

    function restoreDeletedMessagesOfARequestCompletionCallback(status,  data,  error){

      var srh = applicationManager.getServiceResponseHandler();
      var obj =  srh.manageResponse(status,  data,  error);

      if(obj.status === true){
        presentationMsgSuccess(obj.data);
      }

      else {
        presentationMsgError(obj.errmsg);
      }
    }

  };

  /**
  * Creates a new request by making a service call.
  * @param {object} record - json consisting of following data of the request to be created
  *                        requestcategory - category of the request
  * 					   requestsubject - subject of the request
  *						   messagedescription - actual message to be added to the request
  * @param {function} presentationMsgSuccess will be called when call is successfull
  * @param {function} presentationMsgError will be called when call is not successfull
  */

  MessagesManager.prototype.createNewRequest = function(record,presentationMsgSuccess,presentationMsgError)
  {
    var messagesRepo  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("SecureMessaging");
    var userManager = applicationManager.getUserPreferencesManager();
    var params = {
      "createdby" : userManager.getUserName(),
      "username"  : userManager.getUserName(),
      "requestcategory_id":record.requestcategory_id,
      "Requestsubject":record.requestsubject,
      "messagedescription" : record.messagedescription,
      "Priority":"HIGH"
    };
    messagesRepo.customVerb('CreateNewCustomerRequestWithoutAttachment',params,createNewRequestCompletionCallback);
    function createNewRequestCompletionCallback(status,  data,  error){

      var srh = applicationManager.getServiceResponseHandler();
      var obj =  srh.manageResponse(status,  data,  error);

      if(obj.status === true){
        presentationMsgSuccess(obj.data);
      }

      else {
        presentationMsgError(obj.errmsg);
      }
    }

  };

  /**
  * update existing request using a service call.
  * @param {object} record - json consisting of the following data of the request to be updated
  *                        requestid - id of the request
  *						   messagedescription - actual message to be added to the request
  * @param {function} presentationMsgSuccess will be called when call is successfull
  * @param {function} presentationMsgError will be called when call is not successfull
  */

  MessagesManager.prototype.updateExistingRequest = function(record,presentationMsgSuccess,presentationMsgError)
  {
    var messagesRepo  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("SecureMessaging");
    var userManager = applicationManager.getUserPreferencesManager();
    var params = {
      "createdby" : userManager.getUserName(),
      "username"  : userManager.getUserName(),
      //"requestcategory_id":record.requestcategory_id,
      // "Requestsubject":record.requestsubject,
      "messagedescription" : record.messagedescription,
      "requestid"  : record.requestid,
      "Priority":"HIGH"
    };
    messagesRepo.customVerb('CreateNewCustomerRequestWithoutAttachment',params,updateExistingRequestCompletionCallback);

    function updateExistingRequestCompletionCallback(status,  data,  error){

      var srh = applicationManager.getServiceResponseHandler();
      var obj =  srh.manageResponse(status,  data,  error);

      if(obj.status === true){
        presentationMsgSuccess(obj.data);
      }

      else {
        presentationMsgError(obj.errmsg);
      }
    }

  };

  /**
  * Fetches the list of messages in a request
  * @param {object} record - json consisting of requestid of the request whose messages has to be fetched
  * @param {function} presentationMsgSuccess will be called when call is successfull
  * @param {function} presentationMsgError will be called when call is not successfull
  * @returns {Array} -- list of requested Message objects as Json Array
  */
  MessagesManager.prototype.fetchMessagesForARequest = function(record,presentationMsgSuccess,presentationMsgError)
  {
    var messagesRepo  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("SecureMessaging");
    messagesRepo.customVerb('getAllMessagesForARequest',record,fetchMessagesForARequestCompletionCallback);

    function fetchMessagesForARequestCompletionCallback(status,  data,  error){
      var srh = applicationManager.getServiceResponseHandler();
      var obj =  srh.manageResponse(status,  data,  error);

      if(obj.status === true){
        presentationMsgSuccess(obj.data);
      }

      else {
        presentationMsgError(obj.errmsg);
      }
    }
  };

  /**
  * Update messages of request as read.
  * @param {object} record - json consisting of requestid of the request whose messages status has to be updated as read
  * @param {function} presentationMsgSuccess will be called when call is successfull
  * @param {function} presentationMsgError will be called when call is not successfull
  */
  MessagesManager.prototype.updateRequestAsRead = function(record,presentationMsgSuccess,presentationMsgError)
  {
    var messagesRepo  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("SecureMessaging");
    var userManager = applicationManager.getUserPreferencesManager();
    var param = {
      "markallasread" : "true",
      "requestid" : record.requestid,
      "modifiedby" : userManager.getUserName()
    };
    messagesRepo.customVerb('updateRequest',param,updateRequestAsReadCompletionCallback);

    function updateRequestAsReadCompletionCallback(status,  data,  error){
      var srh = applicationManager.getServiceResponseHandler();
      var obj =  srh.manageResponse(status,  data,  error);

      if(obj.status === true){
        presentationMsgSuccess(obj.data);
      }

      else {
        presentationMsgError(obj.errmsg);
      }
    }
  };

  /**
  * Get total number of requests having unread messages and 
  * updates unreadMessages stored in class 
  */
  MessagesManager.prototype.fetchNumberOfUnreadMessages = function()
  {
    var scope = this;
    var messagesRepo  =  kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("SecureMessaging");
    var userManager = applicationManager.getUserPreferencesManager();
    var param = {
      "username" : userManager.getUserName()
    };
    messagesRepo.customVerb('getUnreadMessageCount',param,fetchNumberOfUnreadMessagesCompletionCallback);

    function fetchNumberOfUnreadMessagesCompletionCallback(status,  data,  error){
      var srh = applicationManager.getServiceResponseHandler();
      var obj =  srh.manageResponse(status,  data,  error);

      if(obj.status === true){
        scope.unreadMessages = obj.data.unreadMessageCount;
      }
      else
      {
        scope.unreadMessages = "";
      }
    }
  };

  /**
  * Get the total number of unreadMessages stored in class
  * @returns {Integer} - unreadMessages as updated by fetchNumberOfUnreadMessages
  */
  MessagesManager.prototype.getTotalNumberOfUnreadMessages = function()
  {
    return this.unreadMessages;	
  };

  return MessagesManager;
});