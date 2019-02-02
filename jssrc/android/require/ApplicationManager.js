/**
 *@module ApplicationManager
 */
define([], function() {
    /**
     * ApplicationManager is an implementation of managers in the project
     *@alias module:ApplicationManager
     *@class
     */
    function ApplicationManager() {
        /**@member {object} applicationManagerInstance Contains instance of application manager*/
        /**@member {object} HashTable Contains instance of Hashtable*/
        /**@member {object} serviceResponseHandler Contains instance of serviceResponseHandler*/
        this.applicationManagerInstance = null;
        this.HashTable = null;
        this.serviceResponseHandler = null;
        /**   numberOfAsyncForPreAppInit
         *  1.getApplicationProperties
         *  2.getProducts
         */
        this.numberOfAsyncForPreAppInit = 2;
    };
    /**
     * returns MenuHandler object 
     * @returns {object} value gives MenuHandler object 
     */
    ApplicationManager.prototype.getMenuHandler = function() {
        return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('MenuHandler').businessController;
    };
    /**
     * returns PresentationUtility object 
     * @returns {object} value gives PresentationUtility object 
     */
    ApplicationManager.prototype.getPresentationUtility = function() {
        return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('PresentationUtility').businessController;
    };
    /**
     * returns PresentationInterruptHandler object 
     * @returns {object} value gives PresentationInterruptHandler object 
     */
    ApplicationManager.prototype.getPresentationInterruptHandler = function() {
        return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('PresentationInterruptHandler').businessController;
    };
    /**
     * returns DataProcessorUtility object 
     * @returns {object} value gives DataProcessorUtility object 
     */
    ApplicationManager.prototype.getDataProcessorUtility = function() {
        return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('DataProcessorUtility').businessController;
    };
    /**
     * returns PresentationValidationUtility object 
     * @returns {object} value gives PresentationValidationUtility object 
     */
    ApplicationManager.prototype.getPresentationValidationUtility = function() {
        return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('PresentationValidationUtility').businessController;
    };
    /**
     * returns PresentationFormUtility object 
     * @returns {object} value gives PresentationFormUtility object 
     */
    ApplicationManager.prototype.getPresentationFormUtility = function() {
        return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('PresentationFormUtility').businessController;
    };
    /**
     * Returns ApplicationManager object, creates new if doesn't exist.
     * @returns {object} value gives PresentationFormUtility object 
     */
    ApplicationManager.getApplicationManager = function() {
        if (!this.applicationManagerInstance) this.applicationManagerInstance = new ApplicationManager();
        return this.applicationManagerInstance;
    };
    /**
     * resets the internal accounts data members of accounts manager, transfer object of transaction manager, bill pay payeedata, P2P Payee data and beneficiary object of recepient manager
     */
    ApplicationManager.prototype.clearBusinessDataMemebers = function() {
        this.getAccountManager().clearInternalAccounts();
        this.getTransactionManager().clearTransferObject();
        this.getRecipientsManager().clearBillPayPayeeData();
        this.getRecipientsManager().clearP2PPayeeData();
        this.getRecipientsManager().clearBeneficiaryObject();
        this.getConfigurationManager().resetConfigurationObject();
    };
    /**
     * returns ProductManager object 
     * @returns {object} value gives ProductManager object 
     */
    ApplicationManager.prototype.getProductManager = function() {
        return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('ProductManager').businessController;
    };
    /**
     * Returns ServiceResponseHandler object, creates new if doesn't exist.
     * @returns {object} value gives ServiceResponseHandler object 
     */
    ApplicationManager.prototype.getServiceResponseHandler = function() {
        if (!this.serviceResponseHandler) {
            var ServiceResponseHandler = require('ServiceResponseHandler');
            this.serviceResponseHandler = new ServiceResponseHandler();
        }
        return this.serviceResponseHandler;
    };
    /**
     * returns RegistrationManager object 
     * @returns {object} value gives RegistrationManager object 
     */
    ApplicationManager.prototype.getRegistrationManager = function() {
        return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('RegistrationManager').businessController;
    };
    /**
     * returns NavigationManager object 
     * @returns {object} value gives NavigationManager object 
     */
    ApplicationManager.prototype.getNavigationManager = function() {
        return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('NavigationManager').businessController;
    };
    /**
     * returns UserPreferencesManager object 
     * @returns {object} value gives UserPreferencesManager object 
     */
    ApplicationManager.prototype.getUserPreferencesManager = function() {
        return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('UserPreferencesManager').businessController;
    };
    /**
     * returns AuthManager object 
     * @returns {object} value gives AuthManager object 
     */
    ApplicationManager.prototype.getAuthManager = function() {
        return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('AuthManager').businessController;
    };
    /**
     * returns ConfigurationManager object 
     * @returns {object} value gives ConfigurationManager object 
     */
    ApplicationManager.prototype.getConfigurationManager = function() {
        return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('ConfigurationManager').businessController;
    };
    /**
     * returns DeviceUtilManager object 
     * @returns {object} value gives DeviceUtilManager object 
     */
    ApplicationManager.prototype.getDeviceUtilManager = function() {
        return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('DeviceUtilManager').businessController;
    };
    /**
     * returns FormatUtilManager object 
     * @returns {object} value gives FormatUtilManager object 
     */
    ApplicationManager.prototype.getFormatUtilManager = function() {
        return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('FormatUtilManager').businessController;
    };
    /**
     * Returns HashTable object, creates new if doesn't exist.
     * @returns {object} value gives HashTable object 
     */
    ApplicationManager.prototype.getHashTable = function() {
        if (!this.HashTable) {
            var HashTable = require('HashTable');
            this.HashTable = new HashTable();
        }
        return this.HashTable;
    };
    /**
     * returns ValidationUtilManager object 
     * @returns {object} value gives ValidationUtilManager object 
     */
    ApplicationManager.prototype.getValidationUtilManager = function() {
        return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('ValidationUtilManager').businessController;
    };
    /**
     * returns StorageManager object 
     * @returns {object} value gives StorageManager object 
     */
    ApplicationManager.prototype.getStorageManager = function() {
        return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('StorageManager').businessController;
    };
    /**
     * returns LocationManager object 
     * @returns {object} value gives LocationManager object 
     */
    ApplicationManager.prototype.getLocationManager = function() {
        return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('LocationManager').businessController;
    };
    /**
     * returns AccountManager object 
     * @returns {object} value gives AccountManager object 
     */
    ApplicationManager.prototype.getAccountManager = function() {
        return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('AccountManager').businessController;
    };
    /**
     * returns PayeeManager object 
     * @returns {object} value gives PayeeManager object 
     */
    ApplicationManager.prototype.getPayeeManager = function() {
        return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('PayeeManager').businessController;
    };
    /**
     * returns NewUserBusinessManager object 
     * @returns {object} value gives NewUserBusinessManager object 
     */
    ApplicationManager.prototype.getNewUserBusinessManager = function() {
        return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('NewUserBusinessManager').businessController;
    };
    /**
     * returns InformationManager object 
     * @returns {object} value gives InformationManager object 
     */
    ApplicationManager.prototype.getInformationManager = function() {
        return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('InformationManager').businessController;
    };
    /**
     * returns LoggerManager object 
     * @returns {object} value gives LoggerManager object 
     */
    ApplicationManager.prototype.getLoggerManager = function() {
        return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('LoggerManager').businessController;
    };
    /**
     * returns CardsManager object 
     * @returns {object} value gives CardsManager object 
     */
    ApplicationManager.prototype.getCardsManager = function() {
        return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('CardsManager').businessController;
    };
    /**
     * returns MessagesManager object 
     * @returns {object} value gives MessagesManager object 
     */
    ApplicationManager.prototype.getMessagesManager = function() {
        return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('MessagesManager').businessController;
    };
    /**
     * returns TransactionManager object 
     * @returns {object} value gives TransactionManager object 
     */
    ApplicationManager.prototype.getTransactionManager = function() {
        return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('TransactionManager').businessController;
    };
    /**
     * returns RecipientsManager object 
     * @returns {object} value gives RecipientsManager object 
     */
    ApplicationManager.prototype.getRecipientsManager = function() {
        return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('RecipientsManager').businessController;
    };
    /**
     * returns TransferManager object 
     * @returns {object} value gives TransferManager object 
     */
    ApplicationManager.prototype.getTransferManager = function() {
        return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('TransferManager').businessController;
    };
    /**
     * returns QRCodeManager object 
     * @returns {object} value gives QRCodeManager object 
     */
    ApplicationManager.prototype.getQRCodeManager = function() {
        return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('QRCodeManager').businessController;
    };
    /**
     * returns AsyncManager object 
     * @returns {object} value gives AsyncManager object 
     */
    ApplicationManager.prototype.getAsyncManager = function() {
        return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('AsyncManager').businessController;
    };
    /**
     * returns DirectMarketingManager object 
     * @returns {object} value gives DirectMarketingManager object 
     */
    ApplicationManager.prototype.getDirectMarketingManager = function() {
        return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('DirectMarketingManager').businessController;
    };
    /**
     * returns SettingsManager object 
     * @returns {object} value gives SettingsManager object 
     */
    ApplicationManager.prototype.getSettingsManager = function() {
        return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('SettingsManager').businessController;
    };
    /**
     * returns ChatBotManager object 
     * @returns {object} value gives ChatBotManager object 
     */
    ApplicationManager.prototype.getChatBotManager = function() {
        return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('ChatBotManager').businessController;
    };
    /**
     * returns PaginationManager object 
     * @returns {object} value gives PaginationManager object 
     */
    ApplicationManager.prototype.getPaginationManager = function() {
        return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('PaginationManager').businessController;
    };
    /**
     * returns BillManager object 
     * @returns {object} value gives BillManager object 
     */
    ApplicationManager.prototype.getBillManager = function() {
        return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('BillManager').businessController;
    };
    /**
     * Makes all the pre app initiation calls
     */
    ApplicationManager.prototype.preappInitCalls = function() {
        var authMode = applicationManager.getModule("AuthModule");
        authMode.presentationController.checkAppinit = false;
        this.getAsyncManager().initiateAsyncProcess(2);
        this.fetchAppProperties();
        this.fetchAllProducts();
    };
    /**
     * Makes all the post app initiation calls
     */
    ApplicationManager.prototype.postAppInitiate = function() {
        var authMode = applicationManager.getModule("AuthModule");
        var registrationManager = applicationManager.getRegistrationManager();
        registrationManager.hideLoadingIndicator();
        registrationManager.setActionsForceTouch();
        var navManger = applicationManager.getNavigationManager();
        navManger.stack.push("frmLogin");
        this.getDataforLogin();
        authMode.presentationController.fetchPreloginAds();
    };
    /**
     * Fetches the list of products and their description
     */
    ApplicationManager.prototype.fetchAllProducts = function() {
        var proMan = applicationManager.getProductManager();
        proMan.fetchProductsList(this.productsSuccessCallback, this.productsErrorCallback);
    };
    /**
     * Fetch the application properties
     */
    ApplicationManager.prototype.fetchAppProperties = function() {
        var configMan = applicationManager.getConfigurationManager();
        configMan.fetchApplicationProperties(this.appPropSuccessCallBack, this.appPropErrorCallBack);
    };
    /**
     * Success callback of fetch application properties
     *@param {object} res response from the backend
     */
    ApplicationManager.prototype.appPropSuccessCallBack = function(res) {
        var asyncManager = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('AsyncManager').businessController;
        asyncManager.setSuccessStatus(0, res);
        if (asyncManager.areAllservicesDone(this.numberOfAsyncForPreAppInit)) {
            var authMode = applicationManager.getModule("AuthModule");
            authMode.presentationController.checkAppinit = true;
            applicationManager.getPresentationUtility().dismissLoadingScreen();
        }
    };
    /**
     * Error callback of fetch application properties
     *@param {object} err response from the backend
     */
    ApplicationManager.prototype.appPropErrorCallBack = function(err) {
        var asyncManager = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('AsyncManager').businessController;
        asyncManager.setErrorStatus(0, err);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        applicationManager.getPresentationInterruptHandler().showErrorMessage("appLaunch", err);
    };
    /**
     * Success callback of fetch all products
     *@param {object} res response from the backend
     */
    ApplicationManager.prototype.productsSuccessCallback = function(res) {
        var asyncManager = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('AsyncManager').businessController;
        asyncManager.setSuccessStatus(1, res);
        var proMan = applicationManager.getProductManager();
        proMan.setProductsList(res);
        if (asyncManager.areAllservicesDone(this.numberOfAsyncForPreAppInit)) {
            var authMode = applicationManager.getModule("AuthModule");
            authMode.presentationController.checkAppinit = true;
            applicationManager.getPresentationUtility().dismissLoadingScreen();
        }
    };
    /**
     * Error callback of fetch all products
     *@param {object} err response from the backend
     */
    ApplicationManager.prototype.productsErrorCallback = function(error) {
        var asyncManager = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('AsyncManager').businessController;
        asyncManager.setErrorStatus(1, error);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        kony.print("error in productsErrorCallback");
        if (error["isServerUnreachable"]) applicationManager.getPresentationInterruptHandler().showErrorMessage("appLaunch", error);
        else alert(error.errorMessage);
    };
    /**
     * Get the required data for login
     */
    ApplicationManager.prototype.getDataforLogin = function() {
        var loginData = {};
        var userManager = applicationManager.getUserPreferencesManager();
        var devManager = applicationManager.getDeviceUtilManager();
        userManager.firstTimeappLogin();
        loginData.userName = userManager.getUserName();
        loginData.password = userManager.getPassword();
        loginData.isFirstTimeLogin = userManager.isFirstTimeLogin();
        loginData.isRememberMeOn = userManager.isRememberMeOn();
        loginData.isAccountPreviewEnabled = userManager.isAccountPreviewEnabled();
        loginData.defaultAuthMode = userManager.getDefaultAuthMode();
        loginData.isIphone = devManager.isIPhone();
        loginData.istouchIdEnabled = userManager.isTouchIdEnabled();
        loginData.isPinModeEnabled = userManager.isPinModeEnabled();
        loginData.isFacialAuthEnabled = userManager.isFacialAuthEnabled();
        var navManager = applicationManager.getNavigationManager();
        var nuoData = navManager.getCustomInfo("frmLogin");
        if (nuoData && nuoData.NUOUsername) {
            loginData.NUOUsername = nuoData.NUOUsername;
        }
        navManager.setCustomInfo("frmLogin", loginData);
    };
    ApplicationManager.prototype.getModule = function(moduleName) {
        if (typeof moduleName === 'string' || moduleName instanceof String) {
            var channel = kony.sdk.getChannelType();
            if (channel === "tablet") {
                return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule(moduleName, "Tablet");
            } else {
                return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule(moduleName);
            }
        }
    };
    return ApplicationManager;
});