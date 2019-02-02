//startup.js file
var appConfig = {
    appId: "KonyMobileBank",
    appName: "KonyMobileBanking",
    appVersion: "4.0",
    platformVersion: null,
    serverIp: "10.10.34.96",
    serverPort: "80",
    secureServerPort: "443",
    isMFApp: false,
    eventTypes: ["FormEntry", "Error", "Crash"],
    url: null,
    secureurl: null,
    middlewareContext: "KonyMobileBank"
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
        isMVC: true,
        retainSpaceOnHide: true,
        APILevel: 8050
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    requirejs.config({
        baseUrl: kony.appinit.getStaticContentPath() + "spaandroid/appjs"
    });
    var requireModulesList = getSPARequireModulesList();
    require(requireModulesList, function() {
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
    });
};

function loadResources() {
    kony.theme.packagedthemes(
        ["default", "BlueTheme"]);
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        eventTypes: ["FormEntry", "Error", "Crash"]
    }
    kony.theme.setCurrentTheme("BlueTheme", themeCallBack, themeCallBack);
};

function onSuccessSDKCallBack() {
    spaAPM && spaAPM.startTracking();
    kony.theme.setCurrentTheme("BlueTheme", themeCallBack, themeCallBack);
}

function onSuccess(oldlocalname, newlocalename, info) {
    loadResources();
};

function onFailure(errorcode, errormsg, info) {
    loadResources();
};

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    //If default locale is specified. This is set even before any other app life cycle event is called.
    kony.i18n.setDefaultLocaleAsync("en", onSuccess, onFailure, null);
};
									function getSPARequireModulesList(){ return ['kvmodules']; }
								