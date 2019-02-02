define([], function() {
    var BaseRepository = kony.mvc.Data.BaseRepository;
    //Create the Repository Class
    function NewUserRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
        BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
    };
    //Setting BaseRepository as Parent to this Repository
    NewUserRepository.prototype = Object.create(BaseRepository.prototype);
    NewUserRepository.prototype.constructor = NewUserRepository;
    //For Operation 'getUserState' with service id 'getUserState7160'
    NewUserRepository.prototype.getUserState = function(params, onCompletion) {
        return NewUserRepository.prototype.customVerb('getUserState', params, onCompletion);
    };
    //For Operation 'createPersonalInfo' with service id 'createUserPersonalInfo6959'
    NewUserRepository.prototype.createPersonalInfo = function(params, onCompletion) {
        return NewUserRepository.prototype.customVerb('createPersonalInfo', params, onCompletion);
    };
    //For Operation 'uploadDocuments' with service id 'uploadDocuments2949'
    NewUserRepository.prototype.uploadDocuments = function(params, onCompletion) {
        return NewUserRepository.prototype.customVerb('uploadDocuments', params, onCompletion);
    };
    //For Operation 'verifyExistingUserByPhone' with service id 'verifyExistingUserByPhone8579'
    NewUserRepository.prototype.verifyExistingUserByPhone = function(params, onCompletion) {
        return NewUserRepository.prototype.customVerb('verifyExistingUserByPhone', params, onCompletion);
    };
    //For Operation 'verifyExistingUserByEmail' with service id 'verifyExistingUserByEmail2452'
    NewUserRepository.prototype.verifyExistingUserByEmail = function(params, onCompletion) {
        return NewUserRepository.prototype.customVerb('verifyExistingUserByEmail', params, onCompletion);
    };
    //For Operation 'resetNewUserData' with service id 'deleteNewUserPerosnalInfo8993'
    NewUserRepository.prototype.resetNewUserData = function(params, onCompletion) {
        return NewUserRepository.prototype.customVerb('resetNewUserData', params, onCompletion);
    };
    //For Operation 'signatureUpload' with service id 'userSignatureUpload2862'
    NewUserRepository.prototype.signatureUpload = function(params, onCompletion) {
        return NewUserRepository.prototype.customVerb('signatureUpload', params, onCompletion);
    };
    //For Operation 'getUserPersonalInfo' with service id 'getUserPersonalInfo6122'
    NewUserRepository.prototype.getUserPersonalInfo = function(params, onCompletion) {
        return NewUserRepository.prototype.customVerb('getUserPersonalInfo', params, onCompletion);
    };
    //For Operation 'userCreditCheck' with service id 'userCreditCheck7167'
    NewUserRepository.prototype.userCreditCheck = function(params, onCompletion) {
        return NewUserRepository.prototype.customVerb('userCreditCheck', params, onCompletion);
    };
    //For Operation 'verifyExistingUserName' with service id 'verifyExistingUserName9407'
    NewUserRepository.prototype.verifyExistingUserName = function(params, onCompletion) {
        return NewUserRepository.prototype.customVerb('verifyExistingUserName', params, onCompletion);
    };
    return NewUserRepository;
})