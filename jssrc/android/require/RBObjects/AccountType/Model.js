define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var setterFunctions = {
        TypeDescription: function(val, state) {
            state['TypeDescription'] = val;
        },
        TypeID: function(val, state) {
            state['TypeID'] = val;
        },
    };
    //Create the Model Class
    function AccountType(defaultValues) {
        var privateState = {};
        privateState.TypeDescription = defaultValues ? (defaultValues["TypeDescription"] ? defaultValues["TypeDescription"] : null) : null;
        privateState.TypeID = defaultValues ? (defaultValues["TypeID"] ? defaultValues["TypeID"] : null) : null;
        //Using parent contructor to create other properties req. to kony sdk	
        BaseModel.call(this);
        //Defining Getter/Setters
        Object.defineProperties(this, {
            "TypeDescription": {
                get: function() {
                    return privateState.TypeDescription
                },
                set: function(val) {
                    setterFunctions['TypeDescription'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "TypeID": {
                get: function() {
                    return privateState.TypeID
                },
                set: function(val) {
                    setterFunctions['TypeID'].call(this, val, privateState);
                },
                enumerable: true,
            },
        });
    }
    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(AccountType);
    //Create new class level validator object
    BaseModel.Validator.call(AccountType);
    var registerValidatorBackup = AccountType.registerValidator;
    AccountType.registerValidator = function() {
            var propName = arguments[0];
            if (!setterFunctions[propName].changed) {
                var setterBackup = setterFunctions[propName];
                setterFunctions[arguments[0]] = function() {
                    if (AccountType.isValid(this, propName, val)) {
                        return setterBackup.apply(null, arguments);
                    } else {
                        throw Error("Validation failed for " + propName + " : " + val);
                    }
                }
                setterFunctions[arguments[0]].changed = true;
            }
            return registerValidatorBackup.apply(null, arguments);
        }
        //Extending Model for custom operations
        //For Operation 'getbypk' with service id 'getAccountType2900'
    AccountType.getbypk = function(params, onCompletion) {
        return AccountType.customVerb('getbypk', params, onCompletion);
    };
    var relations = [];
    AccountType.relations = relations;
    AccountType.prototype.isValid = function() {
        return AccountType.isValid(this);
    };
    AccountType.prototype.objModelName = "AccountType";
    return AccountType;
});