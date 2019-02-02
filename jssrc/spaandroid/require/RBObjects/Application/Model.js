define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var setterFunctions = {
        AppVersion: function(val, state) {
            state['AppVersion'] = val;
        },
        MainBranchCity: function(val, state) {
            state['MainBranchCity'] = val;
        },
        MainBranchLatitude: function(val, state) {
            state['MainBranchLatitude'] = val;
        },
        MainBranchLongitude: function(val, state) {
            state['MainBranchLongitude'] = val;
        },
        MainBranchPhone: function(val, state) {
            state['MainBranchPhone'] = val;
        },
        MainBranchServices: function(val, state) {
            state['MainBranchServices'] = val;
        },
        MainBranchState: function(val, state) {
            state['MainBranchState'] = val;
        },
        MainBranchWorkingHours: function(val, state) {
            state['MainBranchWorkingHours'] = val;
        },
        MainBranchaddressLine1: function(val, state) {
            state['MainBranchaddressLine1'] = val;
        },
        MainBranchaddressLine2: function(val, state) {
            state['MainBranchaddressLine2'] = val;
        },
        MainBranchzipCode: function(val, state) {
            state['MainBranchzipCode'] = val;
        },
        OSType: function(val, state) {
            state['OSType'] = val;
        },
        OSversion: function(val, state) {
            state['OSversion'] = val;
        },
        bankName: function(val, state) {
            state['bankName'] = val;
        },
        bannerURL: function(val, state) {
            state['bannerURL'] = val;
        },
        branchType: function(val, state) {
            state['branchType'] = val;
        },
        businessDays: function(val, state) {
            state['businessDays'] = val;
        },
        currencyCode: function(val, state) {
            state['currencyCode'] = val;
        },
        distanceUnit: function(val, state) {
            state['distanceUnit'] = val;
        },
        errmsg: function(val, state) {
            state['errmsg'] = val;
        },
        facialLicenseServerUrl: function(val, state) {
            state['facialLicenseServerUrl'] = val;
        },
        facialLicenseString: function(val, state) {
            state['facialLicenseString'] = val;
        },
        isUpdate: function(val, state) {
            state['isUpdate'] = val;
        },
        isUpdateMandatory: function(val, state) {
            state['isUpdateMandatory'] = val;
        },
        ocrApiKey: function(val, state) {
            state['ocrApiKey'] = val;
        },
        ocrSecretKey: function(val, state) {
            state['ocrSecretKey'] = val;
        },
        versionLink: function(val, state) {
            state['versionLink'] = val;
        },
    };
    //Create the Model Class
    function Application(defaultValues) {
        var privateState = {};
        privateState.AppVersion = defaultValues ? (defaultValues["AppVersion"] ? defaultValues["AppVersion"] : null) : null;
        privateState.MainBranchCity = defaultValues ? (defaultValues["MainBranchCity"] ? defaultValues["MainBranchCity"] : null) : null;
        privateState.MainBranchLatitude = defaultValues ? (defaultValues["MainBranchLatitude"] ? defaultValues["MainBranchLatitude"] : null) : null;
        privateState.MainBranchLongitude = defaultValues ? (defaultValues["MainBranchLongitude"] ? defaultValues["MainBranchLongitude"] : null) : null;
        privateState.MainBranchPhone = defaultValues ? (defaultValues["MainBranchPhone"] ? defaultValues["MainBranchPhone"] : null) : null;
        privateState.MainBranchServices = defaultValues ? (defaultValues["MainBranchServices"] ? defaultValues["MainBranchServices"] : null) : null;
        privateState.MainBranchState = defaultValues ? (defaultValues["MainBranchState"] ? defaultValues["MainBranchState"] : null) : null;
        privateState.MainBranchWorkingHours = defaultValues ? (defaultValues["MainBranchWorkingHours"] ? defaultValues["MainBranchWorkingHours"] : null) : null;
        privateState.MainBranchaddressLine1 = defaultValues ? (defaultValues["MainBranchaddressLine1"] ? defaultValues["MainBranchaddressLine1"] : null) : null;
        privateState.MainBranchaddressLine2 = defaultValues ? (defaultValues["MainBranchaddressLine2"] ? defaultValues["MainBranchaddressLine2"] : null) : null;
        privateState.MainBranchzipCode = defaultValues ? (defaultValues["MainBranchzipCode"] ? defaultValues["MainBranchzipCode"] : null) : null;
        privateState.OSType = defaultValues ? (defaultValues["OSType"] ? defaultValues["OSType"] : null) : null;
        privateState.OSversion = defaultValues ? (defaultValues["OSversion"] ? defaultValues["OSversion"] : null) : null;
        privateState.bankName = defaultValues ? (defaultValues["bankName"] ? defaultValues["bankName"] : null) : null;
        privateState.bannerURL = defaultValues ? (defaultValues["bannerURL"] ? defaultValues["bannerURL"] : null) : null;
        privateState.branchType = defaultValues ? (defaultValues["branchType"] ? defaultValues["branchType"] : null) : null;
        privateState.businessDays = defaultValues ? (defaultValues["businessDays"] ? defaultValues["businessDays"] : null) : null;
        privateState.currencyCode = defaultValues ? (defaultValues["currencyCode"] ? defaultValues["currencyCode"] : null) : null;
        privateState.distanceUnit = defaultValues ? (defaultValues["distanceUnit"] ? defaultValues["distanceUnit"] : null) : null;
        privateState.errmsg = defaultValues ? (defaultValues["errmsg"] ? defaultValues["errmsg"] : null) : null;
        privateState.facialLicenseServerUrl = defaultValues ? (defaultValues["facialLicenseServerUrl"] ? defaultValues["facialLicenseServerUrl"] : null) : null;
        privateState.facialLicenseString = defaultValues ? (defaultValues["facialLicenseString"] ? defaultValues["facialLicenseString"] : null) : null;
        privateState.isUpdate = defaultValues ? (defaultValues["isUpdate"] ? defaultValues["isUpdate"] : null) : null;
        privateState.isUpdateMandatory = defaultValues ? (defaultValues["isUpdateMandatory"] ? defaultValues["isUpdateMandatory"] : null) : null;
        privateState.ocrApiKey = defaultValues ? (defaultValues["ocrApiKey"] ? defaultValues["ocrApiKey"] : null) : null;
        privateState.ocrSecretKey = defaultValues ? (defaultValues["ocrSecretKey"] ? defaultValues["ocrSecretKey"] : null) : null;
        privateState.versionLink = defaultValues ? (defaultValues["versionLink"] ? defaultValues["versionLink"] : null) : null;
        //Using parent contructor to create other properties req. to kony sdk	
        BaseModel.call(this);
        //Defining Getter/Setters
        Object.defineProperties(this, {
            "AppVersion": {
                get: function() {
                    return privateState.AppVersion
                },
                set: function(val) {
                    setterFunctions['AppVersion'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "MainBranchCity": {
                get: function() {
                    return privateState.MainBranchCity
                },
                set: function(val) {
                    setterFunctions['MainBranchCity'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "MainBranchLatitude": {
                get: function() {
                    return privateState.MainBranchLatitude
                },
                set: function(val) {
                    setterFunctions['MainBranchLatitude'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "MainBranchLongitude": {
                get: function() {
                    return privateState.MainBranchLongitude
                },
                set: function(val) {
                    setterFunctions['MainBranchLongitude'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "MainBranchPhone": {
                get: function() {
                    return privateState.MainBranchPhone
                },
                set: function(val) {
                    setterFunctions['MainBranchPhone'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "MainBranchServices": {
                get: function() {
                    return privateState.MainBranchServices
                },
                set: function(val) {
                    setterFunctions['MainBranchServices'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "MainBranchState": {
                get: function() {
                    return privateState.MainBranchState
                },
                set: function(val) {
                    setterFunctions['MainBranchState'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "MainBranchWorkingHours": {
                get: function() {
                    return privateState.MainBranchWorkingHours
                },
                set: function(val) {
                    setterFunctions['MainBranchWorkingHours'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "MainBranchaddressLine1": {
                get: function() {
                    return privateState.MainBranchaddressLine1
                },
                set: function(val) {
                    setterFunctions['MainBranchaddressLine1'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "MainBranchaddressLine2": {
                get: function() {
                    return privateState.MainBranchaddressLine2
                },
                set: function(val) {
                    setterFunctions['MainBranchaddressLine2'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "MainBranchzipCode": {
                get: function() {
                    return privateState.MainBranchzipCode
                },
                set: function(val) {
                    setterFunctions['MainBranchzipCode'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "OSType": {
                get: function() {
                    return privateState.OSType
                },
                set: function(val) {
                    setterFunctions['OSType'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "OSversion": {
                get: function() {
                    return privateState.OSversion
                },
                set: function(val) {
                    setterFunctions['OSversion'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "bankName": {
                get: function() {
                    return privateState.bankName
                },
                set: function(val) {
                    setterFunctions['bankName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "bannerURL": {
                get: function() {
                    return privateState.bannerURL
                },
                set: function(val) {
                    setterFunctions['bannerURL'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "branchType": {
                get: function() {
                    return privateState.branchType
                },
                set: function(val) {
                    setterFunctions['branchType'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "businessDays": {
                get: function() {
                    return privateState.businessDays
                },
                set: function(val) {
                    setterFunctions['businessDays'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "currencyCode": {
                get: function() {
                    return privateState.currencyCode
                },
                set: function(val) {
                    setterFunctions['currencyCode'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "distanceUnit": {
                get: function() {
                    return privateState.distanceUnit
                },
                set: function(val) {
                    setterFunctions['distanceUnit'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "errmsg": {
                get: function() {
                    return privateState.errmsg
                },
                set: function(val) {
                    setterFunctions['errmsg'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "facialLicenseServerUrl": {
                get: function() {
                    return privateState.facialLicenseServerUrl
                },
                set: function(val) {
                    setterFunctions['facialLicenseServerUrl'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "facialLicenseString": {
                get: function() {
                    return privateState.facialLicenseString
                },
                set: function(val) {
                    setterFunctions['facialLicenseString'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "isUpdate": {
                get: function() {
                    return privateState.isUpdate
                },
                set: function(val) {
                    setterFunctions['isUpdate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "isUpdateMandatory": {
                get: function() {
                    return privateState.isUpdateMandatory
                },
                set: function(val) {
                    setterFunctions['isUpdateMandatory'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "ocrApiKey": {
                get: function() {
                    return privateState.ocrApiKey
                },
                set: function(val) {
                    setterFunctions['ocrApiKey'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "ocrSecretKey": {
                get: function() {
                    return privateState.ocrSecretKey
                },
                set: function(val) {
                    setterFunctions['ocrSecretKey'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "versionLink": {
                get: function() {
                    return privateState.versionLink
                },
                set: function(val) {
                    setterFunctions['versionLink'].call(this, val, privateState);
                },
                enumerable: true,
            },
        });
    }
    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(Application);
    //Create new class level validator object
    BaseModel.Validator.call(Application);
    var registerValidatorBackup = Application.registerValidator;
    Application.registerValidator = function() {
            var propName = arguments[0];
            if (!setterFunctions[propName].changed) {
                var setterBackup = setterFunctions[propName];
                setterFunctions[arguments[0]] = function() {
                    if (Application.isValid(this, propName, val)) {
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
    var relations = [];
    Application.relations = relations;
    Application.prototype.isValid = function() {
        return Application.isValid(this);
    };
    Application.prototype.objModelName = "Application";
    return Application;
});