define([], function() {
    var BaseRepository = kony.mvc.Data.BaseRepository;
    //Create the Repository Class
    function PhoneRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
        BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
    };
    //Setting BaseRepository as Parent to this Repository
    PhoneRepository.prototype = Object.create(BaseRepository.prototype);
    PhoneRepository.prototype.constructor = PhoneRepository;
    //For Operation 'createPhone' with service id 'createPhone4115'
    PhoneRepository.prototype.createPhone = function(params, onCompletion) {
        return PhoneRepository.prototype.customVerb('createPhone', params, onCompletion);
    };
    //For Operation 'deletePhone' with service id 'deletePhone9663'
    PhoneRepository.prototype.deletePhone = function(params, onCompletion) {
        return PhoneRepository.prototype.customVerb('deletePhone', params, onCompletion);
    };
    //For Operation 'getAllPhones' with service id 'getAllPhones7311'
    PhoneRepository.prototype.getAllPhones = function(params, onCompletion) {
        return PhoneRepository.prototype.customVerb('getAllPhones', params, onCompletion);
    };
    //For Operation 'updatePhone' with service id 'updatePhone3633'
    PhoneRepository.prototype.updatePhone = function(params, onCompletion) {
        return PhoneRepository.prototype.customVerb('updatePhone', params, onCompletion);
    };
    return PhoneRepository;
})