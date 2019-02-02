define([], function() {
    var mappings = {
        "AppVersion": "AppVersion",
        "MainBranchCity": "MainBranchCity",
        "MainBranchLatitude": "MainBranchLatitude",
        "MainBranchLongitude": "MainBranchLongitude",
        "MainBranchPhone": "MainBranchPhone",
        "MainBranchServices": "MainBranchServices",
        "MainBranchState": "MainBranchState",
        "MainBranchWorkingHours": "MainBranchWorkingHours",
        "MainBranchaddressLine1": "MainBranchaddressLine1",
        "MainBranchaddressLine2": "MainBranchaddressLine2",
        "MainBranchzipCode": "MainBranchzipCode",
        "OSType": "OSType",
        "OSversion": "OSversion",
        "bankName": "bankName",
        "bannerURL": "bannerURL",
        "branchType": "branchType",
        "businessDays": "businessDays",
        "currencyCode": "currencyCode",
        "distanceUnit": "distanceUnit",
        "errmsg": "errmsg",
        "facialLicenseServerUrl": "facialLicenseServerUrl",
        "facialLicenseString": "facialLicenseString",
        "isUpdate": "isUpdate",
        "isUpdateMandatory": "isUpdateMandatory",
        "ocrApiKey": "ocrApiKey",
        "ocrSecretKey": "ocrSecretKey",
        "versionLink": "versionLink",
    };
    Object.freeze(mappings);
    var typings = {
        "AppVersion": "string",
        "MainBranchCity": "string",
        "MainBranchLatitude": "string",
        "MainBranchLongitude": "string",
        "MainBranchPhone": "string",
        "MainBranchServices": "string",
        "MainBranchState": "string",
        "MainBranchWorkingHours": "string",
        "MainBranchaddressLine1": "string",
        "MainBranchaddressLine2": "string",
        "MainBranchzipCode": "string",
        "OSType": "string",
        "OSversion": "string",
        "bankName": "string",
        "bannerURL": "string",
        "branchType": "string",
        "businessDays": "string",
        "currencyCode": "string",
        "distanceUnit": "string",
        "errmsg": "string",
        "facialLicenseServerUrl": "string",
        "facialLicenseString": "string",
        "isUpdate": "boolean",
        "isUpdateMandatory": "boolean",
        "ocrApiKey": "string",
        "ocrSecretKey": "string",
        "versionLink": "string",
    }
    Object.freeze(typings);
    var primaryKeys = [];
    Object.freeze(primaryKeys);
    var config = {
        mappings: mappings,
        typings: typings,
        primaryKeys: primaryKeys,
        serviceName: "RBObjects",
        tableName: "Application"
    };
    Object.freeze(config);
    return config;
})