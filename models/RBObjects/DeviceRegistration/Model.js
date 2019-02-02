define([],function(){
	var BaseModel = kony.mvc.Data.BaseModel;
	
	var setterFunctions = {
		deviceId : function(val, state){
			state['deviceId'] = val;
		},
		errmsg : function(val, state){
			state['errmsg'] = val;
		},
		status : function(val, state){
			state['status'] = val;
		},
	};
	
	
	//Create the Model Class
	function DeviceRegistration(defaultValues){
		var privateState = {};
			privateState.deviceId = defaultValues?(defaultValues["deviceId"]?defaultValues["deviceId"]:null):null;
			privateState.errmsg = defaultValues?(defaultValues["errmsg"]?defaultValues["errmsg"]:null):null;
			privateState.status = defaultValues?(defaultValues["status"]?defaultValues["status"]:null):null;
		//Using parent contructor to create other properties req. to kony sdk	
			BaseModel.call(this);

		//Defining Getter/Setters
			Object.defineProperties(this,{
				"deviceId" : {
					get : function(){return privateState.deviceId},
					set : function(val){throw Error("deviceId cannot be changed."); },
					enumerable : true,
				},
				"errmsg" : {
					get : function(){return privateState.errmsg},
					set : function(val){
						setterFunctions['errmsg'].call(this,val,privateState);
					},
					enumerable : true,
				},
				"status" : {
					get : function(){return privateState.status},
					set : function(val){
						setterFunctions['status'].call(this,val,privateState);
					},
					enumerable : true,
				},
			});

	}
	
	//Setting BaseModel as Parent to this Model
	BaseModel.isParentOf(DeviceRegistration);
	
	//Create new class level validator object
	BaseModel.Validator.call(DeviceRegistration);
	
	var registerValidatorBackup = DeviceRegistration.registerValidator;
	
	DeviceRegistration.registerValidator = function(){
		var propName = arguments[0];
		if(!setterFunctions[propName].changed){
			var setterBackup = setterFunctions[propName];
			setterFunctions[arguments[0]] = function(){
				if( DeviceRegistration.isValid(this, propName, val) ){
					return setterBackup.apply(null, arguments);
				}else{
					throw Error("Validation failed for "+ propName +" : "+val);
				}
			}
			setterFunctions[arguments[0]].changed = true;
		}
		return registerValidatorBackup.apply(null, arguments);
	}
	
	//Extending Model for custom operations
	//For Operation 'customCreate' with service id 'registerDevice2537'
	DeviceRegistration.customCreate = function(params, onCompletion){
		return DeviceRegistration.customVerb('customCreate', params, onCompletion);
	};
	
	var relations = [
	];
	
	DeviceRegistration.relations = relations;
	
	DeviceRegistration.prototype.isValid = function(){
		return DeviceRegistration.isValid(this);
	};
	
	DeviceRegistration.prototype.objModelName = "DeviceRegistration";
	
	return DeviceRegistration;
});