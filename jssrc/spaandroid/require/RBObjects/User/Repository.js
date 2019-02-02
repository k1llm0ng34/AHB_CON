define([], function() {
    var BaseRepository = kony.mvc.Data.BaseRepository;
    //Create the Repository Class
    function UserRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
        BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
    };
    //Setting BaseRepository as Parent to this Repository
    UserRepository.prototype = Object.create(BaseRepository.prototype);
    UserRepository.prototype.constructor = UserRepository;
    //For Operation 'verifyCVV' with service id 'validateCardCif1504'
    UserRepository.prototype.verifyCVV = function(params, onCompletion) {
        return UserRepository.prototype.customVerb('verifyCVV', params, onCompletion);
    };
    //For Operation 'resetPassword' with service id 'resetUserPassword3082'
    UserRepository.prototype.resetPassword = function(params, onCompletion) {
        return UserRepository.prototype.customVerb('resetPassword', params, onCompletion);
    };
    //For Operation 'createOLBUser' with service id 'createOLBUser3455'
    UserRepository.prototype.createOLBUser = function(params, onCompletion) {
        return UserRepository.prototype.customVerb('createOLBUser', params, onCompletion);
    };
    //For Operation 'updatePreferredBillPayAccount' with service id 'updatePreferredBillPayAccount6262'
    UserRepository.prototype.updatePreferredBillPayAccount = function(params, onCompletion) {
        return UserRepository.prototype.customVerb('updatePreferredBillPayAccount', params, onCompletion);
    };
    //For Operation 'updateCustomerDetails' with service id 'updateCustomerDetails4256'
    UserRepository.prototype.updateCustomerDetails = function(params, onCompletion) {
        return UserRepository.prototype.customVerb('updateCustomerDetails', params, onCompletion);
    };
    //For Operation 'checkP2PEligibilityForUser' with service id 'checkP2PEligibilityForUser2115'
    UserRepository.prototype.checkP2PEligibilityForUser = function(params, onCompletion) {
        return UserRepository.prototype.customVerb('checkP2PEligibilityForUser', params, onCompletion);
    };
    //For Operation 'verifyExternalBankAccount' with service id 'verifyExternalBankAccount2934'
    UserRepository.prototype.verifyExternalBankAccount = function(params, onCompletion) {
        return UserRepository.prototype.customVerb('verifyExternalBankAccount', params, onCompletion);
    };
    //For Operation 'updateAddress' with service id 'updateAddress7262'
    UserRepository.prototype.updateAddress = function(params, onCompletion) {
        return UserRepository.prototype.customVerb('updateAddress', params, onCompletion);
    };
    //For Operation 'createUserFeedback' with service id 'createUserFeedback8115'
    UserRepository.prototype.createUserFeedback = function(params, onCompletion) {
        return UserRepository.prototype.customVerb('createUserFeedback', params, onCompletion);
    };
    //For Operation 'getNewBrowserCheck' with service id 'getNewBrowserCheck5021'
    UserRepository.prototype.getNewBrowserCheck = function(params, onCompletion) {
        return UserRepository.prototype.customVerb('getNewBrowserCheck', params, onCompletion);
    };
    //For Operation 'getAllAddress' with service id 'getAllAddress4445'
    UserRepository.prototype.getAllAddress = function(params, onCompletion) {
        return UserRepository.prototype.customVerb('getAllAddress', params, onCompletion);
    };
    //For Operation 'getUsername' with service id 'fetchUserName6963'
    UserRepository.prototype.getUsername = function(params, onCompletion) {
        return UserRepository.prototype.customVerb('getUsername', params, onCompletion);
    };
    //For Operation 'deactivateP2P' with service id 'deactivateP2P3719'
    UserRepository.prototype.deactivateP2P = function(params, onCompletion) {
        return UserRepository.prototype.customVerb('deactivateP2P', params, onCompletion);
    };
    //For Operation 'activateBillPaymentForUser' with service id 'activateBillPaymentForUser2860'
    UserRepository.prototype.activateBillPaymentForUser = function(params, onCompletion) {
        return UserRepository.prototype.customVerb('activateBillPaymentForUser', params, onCompletion);
    };
    //For Operation 'verifyOTP' with service id 'validateOTP5005'
    UserRepository.prototype.verifyOTP = function(params, onCompletion) {
        return UserRepository.prototype.customVerb('verifyOTP', params, onCompletion);
    };
    //For Operation 'customUpdate' with service id 'updateUserDetails4067'
    UserRepository.prototype.customUpdate = function(params, onCompletion) {
        return UserRepository.prototype.customVerb('customUpdate', params, onCompletion);
    };
    //For Operation 'checkSecurityQuestionStatus' with service id 'checkSecurityQuestionStatus2759'
    UserRepository.prototype.checkSecurityQuestionStatus = function(params, onCompletion) {
        return UserRepository.prototype.customVerb('checkSecurityQuestionStatus', params, onCompletion);
    };
    //For Operation 'checkBillPayEligibilityForUser' with service id 'checkBillPayEligibilityForUser5931'
    UserRepository.prototype.checkBillPayEligibilityForUser = function(params, onCompletion) {
        return UserRepository.prototype.customVerb('checkBillPayEligibilityForUser', params, onCompletion);
    };
    //For Operation 'createAddress' with service id 'createAddress6674'
    UserRepository.prototype.createAddress = function(params, onCompletion) {
        return UserRepository.prototype.customVerb('createAddress', params, onCompletion);
    };
    //For Operation 'requestOTP' with service id 'resendOTP4041'
    UserRepository.prototype.requestOTP = function(params, onCompletion) {
        return UserRepository.prototype.customVerb('requestOTP', params, onCompletion);
    };
    //For Operation 'checkSecureAccessCode' with service id 'checkSecureAccessCode7608'
    UserRepository.prototype.checkSecureAccessCode = function(params, onCompletion) {
        return UserRepository.prototype.customVerb('checkSecureAccessCode', params, onCompletion);
    };
    //For Operation 'deleteAddress' with service id 'deleteAddress9759'
    UserRepository.prototype.deleteAddress = function(params, onCompletion) {
        return UserRepository.prototype.customVerb('deleteAddress', params, onCompletion);
    };
    //For Operation 'getPasswordPolicies' with service id 'getPasswordPolicies4113'
    UserRepository.prototype.getPasswordPolicies = function(params, onCompletion) {
        return UserRepository.prototype.customVerb('getPasswordPolicies', params, onCompletion);
    };
    //For Operation 'updateSecureAccessCode' with service id 'updateSecureAccessCode5590'
    UserRepository.prototype.updateSecureAccessCode = function(params, onCompletion) {
        return UserRepository.prototype.customVerb('updateSecureAccessCode', params, onCompletion);
    };
    //For Operation 'getCustomerContact' with service id 'getCustomerContact4823'
    UserRepository.prototype.getCustomerContact = function(params, onCompletion) {
        return UserRepository.prototype.customVerb('getCustomerContact', params, onCompletion);
    };
    //For Operation 'checkUserEnrolled' with service id 'checkUserEnrolled7901'
    UserRepository.prototype.checkUserEnrolled = function(params, onCompletion) {
        return UserRepository.prototype.customVerb('checkUserEnrolled', params, onCompletion);
    };
    //For Operation 'verifyPin' with service id 'verifyPin3521'
    UserRepository.prototype.verifyPin = function(params, onCompletion) {
        return UserRepository.prototype.customVerb('verifyPin', params, onCompletion);
    };
    //For Operation 'activateP2PForUser' with service id 'activateP2PForUser7368'
    UserRepository.prototype.activateP2PForUser = function(params, onCompletion) {
        return UserRepository.prototype.customVerb('activateP2PForUser', params, onCompletion);
    };
    //For Operation 'updatePreferredP2PAccounts' with service id 'updatePreferredP2PAccounts6072'
    UserRepository.prototype.updatePreferredP2PAccounts = function(params, onCompletion) {
        return UserRepository.prototype.customVerb('updatePreferredP2PAccounts', params, onCompletion);
    };
    //For Operation 'verifyExistingPassword' with service id 'verifyExistingPassword3966'
    UserRepository.prototype.verifyExistingPassword = function(params, onCompletion) {
        return UserRepository.prototype.customVerb('verifyExistingPassword', params, onCompletion);
    };
    //For Operation 'getAllEntitlements' with service id 'getAllEntitlements1187'
    UserRepository.prototype.getAllEntitlements = function(params, onCompletion) {
        return UserRepository.prototype.customVerb('getAllEntitlements', params, onCompletion);
    };
    return UserRepository;
})