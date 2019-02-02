//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "KonyMobileBank",
    appName: "KonyMobileBanking",
    appVersion: "4.0",
    platformVersion: null,
    serverIp: null,
    serverPort: null,
    secureServerPort: null,
    isDebug: true,
    middlewareContext: "middleware",
    isturlbase: "https://ahb01dmobapv01.alhilalbank.ae/services",
    isMFApp: true,
    appKey: "de0eedbab46ae4d751d300a0422c6b9b",
    appSecret: "25222b6779f139a9f5d806b4fc9b3ec2",
    serviceUrl: "https://ahb01dmobapv01.alhilalbank.ae/authService/100000002/appconfig",
    svcDoc: {
        "selflink": "https://ahb01dmobapv01.alhilalbank.ae/authService/100000002/appconfig",
        "identity_meta": {
            "LinkedIn": {
                "success_url": "allow_any"
            }
        },
        "integsvc": {
            "LinkedInService": "https://ahb01dmobapv01.alhilalbank.ae/services/LinkedInService",
            "RetailBankingBEServices": "https://ahb01dmobapv01.alhilalbank.ae/services/RetailBankingBEServices",
            "dbpTransactionsorch": "https://ahb01dmobapv01.alhilalbank.ae/services/dbpTransactionsorch",
            "RBCustomLogin": "https://ahb01dmobapv01.alhilalbank.ae/services/RBCustomLogin",
            "SetIdentityScope": "https://ahb01dmobapv01.alhilalbank.ae/services/SetIdentityScope",
            "ATMLocator": "https://ahb01dmobapv01.alhilalbank.ae/services/ATMLocator",
            "dbpPayeeorch": "https://ahb01dmobapv01.alhilalbank.ae/services/dbpPayeeorch",
            "Dashboard": "https://ahb01dmobapv01.alhilalbank.ae/services/Dashboard",
            "createMainUserIdentity": "https://ahb01dmobapv01.alhilalbank.ae/services/createMainUserIdentity",
            "Bank5": "https://ahb01dmobapv01.alhilalbank.ae/services/Bank5",
            "Bank4": "https://ahb01dmobapv01.alhilalbank.ae/services/Bank4",
            "Bank3": "https://ahb01dmobapv01.alhilalbank.ae/services/Bank3",
            "NUOServices": "https://ahb01dmobapv01.alhilalbank.ae/services/NUOServices",
            "Bank2": "https://ahb01dmobapv01.alhilalbank.ae/services/Bank2",
            "GoogleAPIs": "https://ahb01dmobapv01.alhilalbank.ae/services/GoogleAPIs",
            "Bank1": "https://ahb01dmobapv01.alhilalbank.ae/services/Bank1",
            "NonOAuthServices": "https://ahb01dmobapv01.alhilalbank.ae/services/NonOAuthServices",
            "dbpAccountsorch": "https://ahb01dmobapv01.alhilalbank.ae/services/dbpAccountsorch",
            "MainBank": "https://ahb01dmobapv01.alhilalbank.ae/services/MainBank",
            "AdminConsoleServices": "https://ahb01dmobapv01.alhilalbank.ae/services/AdminConsoleServices",
            "AdminConfigService": "https://ahb01dmobapv01.alhilalbank.ae/services/AdminConfigService",
            "dbpAccountAggregationjava": "https://ahb01dmobapv01.alhilalbank.ae/services/dbpAccountAggregationjava",
            "dbpAccountAggregationdb": "https://ahb01dmobapv01.alhilalbank.ae/services/dbpAccountAggregationdb",
            "pushNotificationsAuthService": "https://ahb01dmobapv01.alhilalbank.ae/services/pushNotificationsAuthService",
            "AHBRegistration": "https://ahb01dmobapv01.alhilalbank.ae/services/AHBRegistration",
            "PushNotification": "https://ahb01dmobapv01.alhilalbank.ae/services/PushNotification",
            "SendPushMessage": "https://ahb01dmobapv01.alhilalbank.ae/services/SendPushMessage"
        },
        "service_doc_etag": "00000165F5A152DD",
        "appId": "50a20fc9-2e31-4eda-98e3-aa19d45a7c93",
        "identity_features": {
            "reporting_params_header_allowed": true
        },
        "name": "RetailBankingServices",
        "reportingsvc": {
            "session": "https://ahb01dmobapv01.alhilalbank.ae/services/IST",
            "custom": "https://ahb01dmobapv01.alhilalbank.ae/services/CMS"
        },
        "baseId": "2aa26e89-9050-4841-b4a1-c340c0490e97",
        "login": [{
            "mandatory_fields": [],
            "alias": "CopyCustomLogin",
            "type": "basic",
            "prov": "CopyCustomLogin",
            "url": "https://ahb01dmobapv01.alhilalbank.ae/authService/100000002"
        }, {
            "mandatory_fields": [],
            "alias": "IdentityProviderBank5",
            "type": "basic",
            "prov": "IdentityProviderBank5",
            "url": "https://ahb01dmobapv01.alhilalbank.ae/authService/100000002"
        }, {
            "mandatory_fields": [],
            "alias": "IdentityProviderBank4",
            "type": "basic",
            "prov": "IdentityProviderBank4",
            "url": "https://ahb01dmobapv01.alhilalbank.ae/authService/100000002"
        }, {
            "mandatory_fields": [],
            "alias": "CustomLogin",
            "type": "basic",
            "prov": "CustomLogin",
            "url": "https://ahb01dmobapv01.alhilalbank.ae/authService/100000002"
        }, {
            "mandatory_fields": [],
            "alias": "IdentityProviderBank3",
            "type": "basic",
            "prov": "IdentityProviderBank3",
            "url": "https://ahb01dmobapv01.alhilalbank.ae/authService/100000002"
        }, {
            "mandatory_fields": [],
            "alias": "IdentityProviderBank2",
            "type": "basic",
            "prov": "IdentityProviderBank2",
            "url": "https://ahb01dmobapv01.alhilalbank.ae/authService/100000002"
        }, {
            "mandatory_fields": [],
            "alias": "NUOApplicantLogin",
            "type": "basic",
            "prov": "NUOApplicantLogin",
            "url": "https://ahb01dmobapv01.alhilalbank.ae/authService/100000002"
        }, {
            "alias": "LinkedIn",
            "type": "oauth2",
            "prov": "LinkedIn",
            "url": "https://ahb01dmobapv01.alhilalbank.ae/authService/100000002"
        }, {
            "mandatory_fields": [],
            "alias": "IdentityProviderBank1",
            "type": "basic",
            "prov": "IdentityProviderBank1",
            "url": "https://ahb01dmobapv01.alhilalbank.ae/authService/100000002"
        }],
        "services_meta": {
            "RBObjects": {
                "offline": false,
                "metadata_url": "https://ahb01dmobapv01.alhilalbank.ae/services/metadata/v1/RBObjects",
                "type": "objectsvc",
                "version": "1.0",
                "url": "https://ahb01dmobapv01.alhilalbank.ae/services/data/v1/RBObjects"
            },
            "LinkedInService": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://ahb01dmobapv01.alhilalbank.ae/services/LinkedInService"
            },
            "RetailBankingBEServices": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://ahb01dmobapv01.alhilalbank.ae/services/RetailBankingBEServices"
            },
            "dbpTransactionsorch": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://ahb01dmobapv01.alhilalbank.ae/services/dbpTransactionsorch"
            },
            "RBCustomLogin": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://ahb01dmobapv01.alhilalbank.ae/services/RBCustomLogin"
            },
            "SetIdentityScope": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://ahb01dmobapv01.alhilalbank.ae/services/SetIdentityScope"
            },
            "ATMLocator": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://ahb01dmobapv01.alhilalbank.ae/services/ATMLocator"
            },
            "dbpPayeeorch": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://ahb01dmobapv01.alhilalbank.ae/services/dbpPayeeorch"
            },
            "Dashboard": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://ahb01dmobapv01.alhilalbank.ae/services/Dashboard"
            },
            "createMainUserIdentity": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://ahb01dmobapv01.alhilalbank.ae/services/createMainUserIdentity"
            },
            "Bank5": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://ahb01dmobapv01.alhilalbank.ae/services/Bank5"
            },
            "Bank4": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://ahb01dmobapv01.alhilalbank.ae/services/Bank4"
            },
            "AccountAggregation": {
                "offline": false,
                "metadata_url": "https://ahb01dmobapv01.alhilalbank.ae/services/metadata/v1/AccountAggregation",
                "type": "objectsvc",
                "version": "1.0",
                "url": "https://ahb01dmobapv01.alhilalbank.ae/services/data/v1/AccountAggregation"
            },
            "Bank3": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://ahb01dmobapv01.alhilalbank.ae/services/Bank3"
            },
            "NUOServices": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://ahb01dmobapv01.alhilalbank.ae/services/NUOServices"
            },
            "Bank2": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://ahb01dmobapv01.alhilalbank.ae/services/Bank2"
            },
            "GoogleAPIs": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://ahb01dmobapv01.alhilalbank.ae/services/GoogleAPIs"
            },
            "Bank1": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://ahb01dmobapv01.alhilalbank.ae/services/Bank1"
            },
            "NonOAuthServices": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://ahb01dmobapv01.alhilalbank.ae/services/NonOAuthServices"
            },
            "dbpAccountsorch": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://ahb01dmobapv01.alhilalbank.ae/services/dbpAccountsorch"
            },
            "MainBank": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://ahb01dmobapv01.alhilalbank.ae/services/MainBank"
            },
            "AdminConsoleServices": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://ahb01dmobapv01.alhilalbank.ae/services/AdminConsoleServices"
            },
            "AdminConfigService": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://ahb01dmobapv01.alhilalbank.ae/services/AdminConfigService"
            },
            "dbpAccountAggregationjava": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://ahb01dmobapv01.alhilalbank.ae/services/dbpAccountAggregationjava"
            },
            "dbpAccountAggregationdb": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://ahb01dmobapv01.alhilalbank.ae/services/dbpAccountAggregationdb"
            },
            "pushNotificationsAuthService": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://ahb01dmobapv01.alhilalbank.ae/services/pushNotificationsAuthService"
            },
            "AHBRegistration": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://ahb01dmobapv01.alhilalbank.ae/services/AHBRegistration"
            },
            "PushNotification": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://ahb01dmobapv01.alhilalbank.ae/services/PushNotification"
            },
            "SendPushMessage": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://ahb01dmobapv01.alhilalbank.ae/services/SendPushMessage"
            }
        },
        "Webapp": {
            "url": "https://ahb01dmobapv01.alhilalbank.ae/apps/KonyOLB"
        }
    },
    runtimeAppVersion: "1.0",
    eventTypes: ["FormEntry", "Error", "Crash"],
    url: "https://ahb01dmobapv01.alhilalbank.ae/authService/100000002/appconfig",
    secureurl: "https://ahb01dmobapv01.alhilalbank.ae/authService/100000002/appconfig"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        isMVC: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 8050
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    applicationController = require("applicationController");
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        preappinit: applicationController.AS_AppEvents_h4ded27d9dd845f885ad538266976f45,
        init: applicationController.appInit,
        postappinit: applicationController.AS_AppEvents_c26b10e9c0764bde8f8f42317331324a,
        appservice: applicationController.AS_AppEvents_hd4fc1bedd904d29862f6382068c9886,
        showstartupform: function() {
            var startForm = new kony.mvc.Navigation("AuthModule/Form1");
            startForm.navigate();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_LocationSettings"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_SignatureFFI"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_Barcode"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_ExceptionLogger"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_KonyLogger"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_binarydata"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.ND_binary_util"
    });
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "eventTypes": appConfig.eventTypes,
        "serviceUrl": appConfig.serviceUrl
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("BlueTheme", themeCallBack, themeCallBack);
}

function onSuccess(oldlocalname, newlocalename, info) {
    loadResources();
};

function onFailure(errorcode, errormsg, info) {
    loadResources();
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
kony.i18n.setDefaultLocaleAsync("en", onSuccess, onFailure, null);
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;