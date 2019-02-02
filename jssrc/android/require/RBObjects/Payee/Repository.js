define([], function() {
    var BaseRepository = kony.mvc.Data.BaseRepository;
    //Create the Repository Class
    function PayeeRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
        BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
    };
    //Setting BaseRepository as Parent to this Repository
    PayeeRepository.prototype = Object.create(BaseRepository.prototype);
    PayeeRepository.prototype.constructor = PayeeRepository;
    //For Operation 'addRecipient' with service id 'addRecipient4640'
    PayeeRepository.prototype.addRecipient = function(params, onCompletion) {
        return PayeeRepository.prototype.customVerb('addRecipient', params, onCompletion);
    };
    //For Operation 'saveRecipientAfterWireTransfer' with service id 'saveRecipientAfterWireTransfer1796'
    PayeeRepository.prototype.saveRecipientAfterWireTransfer = function(params, onCompletion) {
        return PayeeRepository.prototype.customVerb('saveRecipientAfterWireTransfer', params, onCompletion);
    };
    //For Operation 'updateRecipient' with service id 'updateRecipient9351'
    PayeeRepository.prototype.updateRecipient = function(params, onCompletion) {
        return PayeeRepository.prototype.customVerb('updateRecipient', params, onCompletion);
    };
    //For Operation 'getRecentPayee' with service id 'getRecentPayees8811'
    PayeeRepository.prototype.getRecentPayee = function(params, onCompletion) {
        return PayeeRepository.prototype.customVerb('getRecentPayee', params, onCompletion);
    };
    //For Operation 'getWireTransferRecipient' with service id 'getWireTransferRecipient4881'
    PayeeRepository.prototype.getWireTransferRecipient = function(params, onCompletion) {
        return PayeeRepository.prototype.customVerb('getWireTransferRecipient', params, onCompletion);
    };
    return PayeeRepository;
})