define([], function() {
    var BaseRepository = kony.mvc.Data.BaseRepository;
    //Create the Repository Class
    function PayPersonRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
        BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
    };
    //Setting BaseRepository as Parent to this Repository
    PayPersonRepository.prototype = Object.create(BaseRepository.prototype);
    PayPersonRepository.prototype.constructor = PayPersonRepository;
    //For Operation 'getRecentPayPerson' with service id 'getRecentPayPerson1905'
    PayPersonRepository.prototype.getRecentPayPerson = function(params, onCompletion) {
        return PayPersonRepository.prototype.customVerb('getRecentPayPerson', params, onCompletion);
    };
    //For Operation 'editPayPerson' with service id 'editPayPerson4946'
    PayPersonRepository.prototype.editPayPerson = function(params, onCompletion) {
        return PayPersonRepository.prototype.customVerb('editPayPerson', params, onCompletion);
    };
    //For Operation 'deletePayPerson' with service id 'deletePayPerson4269'
    PayPersonRepository.prototype.deletePayPerson = function(params, onCompletion) {
        return PayPersonRepository.prototype.customVerb('deletePayPerson', params, onCompletion);
    };
    return PayPersonRepository;
})