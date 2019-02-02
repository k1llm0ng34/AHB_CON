define([], function() {
    var BaseRepository = kony.mvc.Data.BaseRepository;
    //Create the Repository Class
    function SecurityQuestionsRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
        BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
    };
    //Setting BaseRepository as Parent to this Repository
    SecurityQuestionsRepository.prototype = Object.create(BaseRepository.prototype);
    SecurityQuestionsRepository.prototype.constructor = SecurityQuestionsRepository;
    //For Operation 'getbypk' with service id 'getSecurityQuestions1497'
    SecurityQuestionsRepository.prototype.getbypk = function(params, onCompletion) {
        return SecurityQuestionsRepository.prototype.customVerb('getbypk', params, onCompletion);
    };
    //For Operation 'verifyCustomerSecurityQuestions' with service id 'verifyCustomerSecurityQuestions7075'
    SecurityQuestionsRepository.prototype.verifyCustomerSecurityQuestions = function(params, onCompletion) {
        return SecurityQuestionsRepository.prototype.customVerb('verifyCustomerSecurityQuestions', params, onCompletion);
    };
    //For Operation 'getSecurityQuestions' with service id 'getSecurityQuestions3832'
    SecurityQuestionsRepository.prototype.getSecurityQuestions = function(params, onCompletion) {
        return SecurityQuestionsRepository.prototype.customVerb('getSecurityQuestions', params, onCompletion);
    };
    //For Operation 'getRandomCustomerSecurityQuestions' with service id 'getRandomCustomerSecurityQuestions1290'
    SecurityQuestionsRepository.prototype.getRandomCustomerSecurityQuestions = function(params, onCompletion) {
        return SecurityQuestionsRepository.prototype.customVerb('getRandomCustomerSecurityQuestions', params, onCompletion);
    };
    //For Operation 'createCustomerSecurityQuestions' with service id 'createCustomerSecurityQuestions7901'
    SecurityQuestionsRepository.prototype.createCustomerSecurityQuestions = function(params, onCompletion) {
        return SecurityQuestionsRepository.prototype.customVerb('createCustomerSecurityQuestions', params, onCompletion);
    };
    return SecurityQuestionsRepository;
})