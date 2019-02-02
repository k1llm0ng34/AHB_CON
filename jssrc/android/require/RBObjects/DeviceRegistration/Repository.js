define([], function() {
    var BaseRepository = kony.mvc.Data.BaseRepository;
    //Create the Repository Class
    function DeviceRegistrationRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
        BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
    };
    //Setting BaseRepository as Parent to this Repository
    DeviceRegistrationRepository.prototype = Object.create(BaseRepository.prototype);
    DeviceRegistrationRepository.prototype.constructor = DeviceRegistrationRepository;
    //For Operation 'customCreate' with service id 'registerDevice2537'
    DeviceRegistrationRepository.prototype.customCreate = function(params, onCompletion) {
        return DeviceRegistrationRepository.prototype.customVerb('customCreate', params, onCompletion);
    };
    return DeviceRegistrationRepository;
})