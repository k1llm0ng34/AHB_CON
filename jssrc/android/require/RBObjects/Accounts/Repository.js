define([], function() {
    var BaseRepository = kony.mvc.Data.BaseRepository;
    //Create the Repository Class
    function AccountsRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
        BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
    };
    //Setting BaseRepository as Parent to this Repository
    AccountsRepository.prototype = Object.create(BaseRepository.prototype);
    AccountsRepository.prototype.constructor = AccountsRepository;
    //For Operation 'updateFavouriteStatus' with service id 'updateFavouriteStatus2949'
    AccountsRepository.prototype.updateFavouriteStatus = function(params, onCompletion) {
        return AccountsRepository.prototype.customVerb('updateFavouriteStatus', params, onCompletion);
    };
    //For Operation 'getRecentAccounts' with service id 'getRecentAccounts8217'
    AccountsRepository.prototype.getRecentAccounts = function(params, onCompletion) {
        return AccountsRepository.prototype.customVerb('getRecentAccounts', params, onCompletion);
    };
    //For Operation 'newAccountOpening' with service id 'newAccountOpening2654'
    AccountsRepository.prototype.newAccountOpening = function(params, onCompletion) {
        return AccountsRepository.prototype.customVerb('newAccountOpening', params, onCompletion);
    };
    //For Operation 'updateAccountPhoneNumber' with service id 'updateAccountPhoneNumber3059'
    AccountsRepository.prototype.updateAccountPhoneNumber = function(params, onCompletion) {
        return AccountsRepository.prototype.customVerb('updateAccountPhoneNumber', params, onCompletion);
    };
    //For Operation 'getAccountsPostLogin' with service id 'getAccountsPostLogin6872'
    AccountsRepository.prototype.getAccountsPostLogin = function(params, onCompletion) {
        return AccountsRepository.prototype.customVerb('getAccountsPostLogin', params, onCompletion);
    };
    //For Operation 'updateUserAccountSettings' with service id 'updateUserAccountSettings5182'
    AccountsRepository.prototype.updateUserAccountSettings = function(params, onCompletion) {
        return AccountsRepository.prototype.customVerb('updateUserAccountSettings', params, onCompletion);
    };
    //For Operation 'updateAccountPreference' with service id 'updateAccountPreference3108'
    AccountsRepository.prototype.updateAccountPreference = function(params, onCompletion) {
        return AccountsRepository.prototype.customVerb('updateAccountPreference', params, onCompletion);
    };
    //For Operation 'fetchBankDetails' with service id 'fetchBankDetails5867'
    AccountsRepository.prototype.fetchBankDetails = function(params, onCompletion) {
        return AccountsRepository.prototype.customVerb('fetchBankDetails', params, onCompletion);
    };
    return AccountsRepository;
})