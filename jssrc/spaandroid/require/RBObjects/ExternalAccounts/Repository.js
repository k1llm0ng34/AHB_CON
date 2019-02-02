define([], function() {
    var BaseRepository = kony.mvc.Data.BaseRepository;
    //Create the Repository Class
    function ExternalAccountsRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
        BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
    };
    //Setting BaseRepository as Parent to this Repository
    ExternalAccountsRepository.prototype = Object.create(BaseRepository.prototype);
    ExternalAccountsRepository.prototype.constructor = ExternalAccountsRepository;
    //For Operation 'editExternalAccount' with service id 'editExternalAccount4139'
    ExternalAccountsRepository.prototype.editExternalAccount = function(params, onCompletion) {
        return ExternalAccountsRepository.prototype.customVerb('editExternalAccount', params, onCompletion);
    };
    //For Operation 'getOtherBankAccount' with service id 'getOtherBankAccount9167'
    ExternalAccountsRepository.prototype.getOtherBankAccount = function(params, onCompletion) {
        return ExternalAccountsRepository.prototype.customVerb('getOtherBankAccount', params, onCompletion);
    };
    //For Operation 'getAllInternationalExternalAccounts' with service id 'getInternationalExternalAccounts8295'
    ExternalAccountsRepository.prototype.getAllInternationalExternalAccounts = function(params, onCompletion) {
        return ExternalAccountsRepository.prototype.customVerb('getAllInternationalExternalAccounts', params, onCompletion);
    };
    //For Operation 'getSameBankAccount' with service id 'getSameBankAccount4901'
    ExternalAccountsRepository.prototype.getSameBankAccount = function(params, onCompletion) {
        return ExternalAccountsRepository.prototype.customVerb('getSameBankAccount', params, onCompletion);
    };
    //For Operation 'getAllExternalAccountsWithPagination' with service id 'getAllExternalAccountsWithPagination8423'
    ExternalAccountsRepository.prototype.getAllExternalAccountsWithPagination = function(params, onCompletion) {
        return ExternalAccountsRepository.prototype.customVerb('getAllExternalAccountsWithPagination', params, onCompletion);
    };
    //For Operation 'getFrequentSameBankAccount' with service id 'getSameBankAccount1266'
    ExternalAccountsRepository.prototype.getFrequentSameBankAccount = function(params, onCompletion) {
        return ExternalAccountsRepository.prototype.customVerb('getFrequentSameBankAccount', params, onCompletion);
    };
    //For Operation 'getFrequentOtherBankAccount' with service id 'getOtherBankAccount3173'
    ExternalAccountsRepository.prototype.getFrequentOtherBankAccount = function(params, onCompletion) {
        return ExternalAccountsRepository.prototype.customVerb('getFrequentOtherBankAccount', params, onCompletion);
    };
    //For Operation 'getUnverifiedExternalAccounts' with service id 'getUnverifiedExternalAccounts9007'
    ExternalAccountsRepository.prototype.getUnverifiedExternalAccounts = function(params, onCompletion) {
        return ExternalAccountsRepository.prototype.customVerb('getUnverifiedExternalAccounts', params, onCompletion);
    };
    //For Operation 'deleteExternalAccount' with service id 'deleteExternalAccount8173'
    ExternalAccountsRepository.prototype.deleteExternalAccount = function(params, onCompletion) {
        return ExternalAccountsRepository.prototype.customVerb('deleteExternalAccount', params, onCompletion);
    };
    //For Operation 'getFrequentInternationalExternalAccounts' with service id 'getExternalAccounts2444'
    ExternalAccountsRepository.prototype.getFrequentInternationalExternalAccounts = function(params, onCompletion) {
        return ExternalAccountsRepository.prototype.customVerb('getFrequentInternationalExternalAccounts', params, onCompletion);
    };
    return ExternalAccountsRepository;
})