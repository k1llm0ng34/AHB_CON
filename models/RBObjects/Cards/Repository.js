define([],function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;
	
	//Create the Repository Class
	function CardsRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};
	
	//Setting BaseRepository as Parent to this Repository
	CardsRepository.prototype = Object.create(BaseRepository.prototype);
	CardsRepository.prototype.constructor = CardsRepository;

	//For Operation 'cancelCard' with service id 'updateCard1812'
	CardsRepository.prototype.cancelCard = function(params,onCompletion){
		return CardsRepository.prototype.customVerb('cancelCard',params, onCompletion);
	};
	//For Operation 'reportLost' with service id 'updateCard1595'
	CardsRepository.prototype.reportLost = function(params,onCompletion){
		return CardsRepository.prototype.customVerb('reportLost',params, onCompletion);
	};
	//For Operation 'deleteTravelNotification' with service id 'deleteTravelNotification3228'
	CardsRepository.prototype.deleteTravelNotification = function(params,onCompletion){
		return CardsRepository.prototype.customVerb('deleteTravelNotification',params, onCompletion);
	};
	//For Operation 'unlockCard' with service id 'updateCard7894'
	CardsRepository.prototype.unlockCard = function(params,onCompletion){
		return CardsRepository.prototype.customVerb('unlockCard',params, onCompletion);
	};
	//For Operation 'getTravelNotification' with service id 'getTravelNotification4626'
	CardsRepository.prototype.getTravelNotification = function(params,onCompletion){
		return CardsRepository.prototype.customVerb('getTravelNotification',params, onCompletion);
	};
	//For Operation 'getTravelNotificationStatus' with service id 'getTravelNotificationStatus1102'
	CardsRepository.prototype.getTravelNotificationStatus = function(params,onCompletion){
		return CardsRepository.prototype.customVerb('getTravelNotificationStatus',params, onCompletion);
	};
	//For Operation 'createTravelNotification' with service id 'createTravelNotification3881'
	CardsRepository.prototype.createTravelNotification = function(params,onCompletion){
		return CardsRepository.prototype.customVerb('createTravelNotification',params, onCompletion);
	};
	//For Operation 'updateTravelNotification' with service id 'updateTravelNotification6161'
	CardsRepository.prototype.updateTravelNotification = function(params,onCompletion){
		return CardsRepository.prototype.customVerb('updateTravelNotification',params, onCompletion);
	};
	//For Operation 'getCardsByUsername' with service id 'getCardsByUsername8684'
	CardsRepository.prototype.getCardsByUsername = function(params,onCompletion){
		return CardsRepository.prototype.customVerb('getCardsByUsername',params, onCompletion);
	};
	//For Operation 'getCardListForEnrolment' with service id 'getCardListForEnrolment8376'
	CardsRepository.prototype.getCardListForEnrolment = function(params,onCompletion){
		return CardsRepository.prototype.customVerb('getCardListForEnrolment',params, onCompletion);
	};
	//For Operation 'replaceCard' with service id 'updateCard7455'
	CardsRepository.prototype.replaceCard = function(params,onCompletion){
		return CardsRepository.prototype.customVerb('replaceCard',params, onCompletion);
	};
	//For Operation 'changePIN' with service id 'updateCard5012'
	CardsRepository.prototype.changePIN = function(params,onCompletion){
		return CardsRepository.prototype.customVerb('changePIN',params, onCompletion);
	};
	//For Operation 'createCardRequest' with service id 'createCardRequest4793'
	CardsRepository.prototype.createCardRequest = function(params,onCompletion){
		return CardsRepository.prototype.customVerb('createCardRequest',params, onCompletion);
	};
	//For Operation 'lockCard' with service id 'deleteTransactionsForLockedCard3720'
	CardsRepository.prototype.lockCard = function(params,onCompletion){
		return CardsRepository.prototype.customVerb('lockCard',params, onCompletion);
	};
	//For Operation 'getActiveCards' with service id 'getActiveCards8851'
	CardsRepository.prototype.getActiveCards = function(params,onCompletion){
		return CardsRepository.prototype.customVerb('getActiveCards',params, onCompletion);
	};
	
	
	return CardsRepository;
})