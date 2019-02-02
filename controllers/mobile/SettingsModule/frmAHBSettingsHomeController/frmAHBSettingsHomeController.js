define({ 
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  //Type your controller code here 
  preShow : function()
  {
    
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    this.initActions();
    this.alertPopUpFlxCancelOnClick();

    
    /// TODO  remove once Terms and condition comes
    this.view.lblNavigate.setVisibility(false);

    this.view.flxMain.setEnabled(true);

  },

  initActions : function()
  {
    var scope = this;
    var configManager = applicationManager.getConfigurationManager();
    var MenuHandler =  applicationManager.getMenuHandler();
    MenuHandler.setUpHamburgerForForm(scope,configManager.constants.MENUSETTINGS); 
    this.view.MainHeaderWithCancel.flxBack.onClick = this.onBackClick;
    this.view.MainHeaderWithCancel.btnBack.onClick = this.onBackClick;
    this.view.flxSettings.onClick = this.goToSettings;

    this.view.flxATMBranchLocator.onClick = this.onClickATMBranchLocator;

    this.view.flxContacts.onClick = this.goContactUs;

    this.view.flxLanguage.onClick = this.setLanguage;
	this.view.MainHeaderWithCancel.btnCancel.onClick = this.logout;
    this.view.onDeviceBack = this.onBackClick;

  },
  
  onDeviceBack: function(){
   kony.print("Do nothing");
  },
  /*
  @Purpose To show the pop up to logout
  */
  logout: function(){
    this.view.flxMain.setEnabled(false);
    this.view.AlertPopup.isVisible = true;
    this.view.AlertPopup.lblMessage.text = kony.i18n.getLocalizedString("kony.ahb.logout.confirm");
    this.view.AlertPopup.btnDontCancel.text = kony.i18n.getLocalizedString("kony.ahb.common.DontDelete");
    this.view.AlertPopup.btnOK.text = kony.i18n.getLocalizedString("kony.ahb.beneficiary.ok");
    this.view.AlertPopup.btnDontCancel.onClick = this.doNotCancelTransaction;
    this.view.AlertPopup.btnOK.onClick = this.userLogout;
    this.view.onDeviceBack = this.onDeviceBack;
  },
  /*
  @Purpose To logout the user out of the app
  */
  userLogout:function(){
    var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
	authMod.presentationController.onLogout();
  },
  
   /*
  @Purpose To dismiss the pop up 
  */
  doNotCancelTransaction : function(){
    this.view.flxMain.setEnabled(true);
    this.view.AlertPopup.isVisible = false;
    this.view.onDeviceBack = this.onBackClick;
  },
  btnOKOnClick: function() {
    this.alertPopUpFlxCancelOnClick();
        var locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
        locateUsModule.presentationController.openLocationSettings();
    },
  
  alertPopUpFlxCancelOnClick: function() {
        this.view.AlertPopup.setVisibility(false);
        this.view.flxMainContainer.setEnabled(true);
        //kony.localAuthentication.cancelAuthentication();
    },

  onBackClick: function() {
    kony.print("Enter into onBackClick frmSettings");
    var navMan=applicationManager.getNavigationManager();
    navMan.goBack();
  },
  goToSettings : function()
  {
    kony.print("Enter into Settings screen--?");
    var navMan=applicationManager.getNavigationManager();
    navMan.navigateTo("frmSettings");
  },
  
  onClickATMBranchLocator:function(){
    this.view.AlertPopup.btnOK.onClick = this.btnOKOnClick;
    this.view.AlertPopup.btnDontCancel.onClick = this.alertPopUpFlxCancelOnClick;
    this.view.AlertPopup.lblMessage.text = kony.i18n.getLocalizedString("i18n.maps.locationPermissionDenied");
    this.view.AlertPopup.btnDontCancel.text = kony.i18n.getLocalizedString("kony.mb.common.CancelSmall");
    this.view.AlertPopup.btnOK.text = kony.i18n.getLocalizedString("kony.mb.Hamburger.Settings");
    kony.print("Enter into onClickATMBranchLocator");
    var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
     authMode.presentationController.checkAppinit = true;
     var  locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
     locateUsModule.presentationController.presentLocateUsView(false,this);
     return;
         var scopeObj = this;
         var positionoptions = {
             timeout: 64000,
             fastestInterval: 0,
             minimumTime: 0
         };
         applicationManager.getPresentationUtility().showLoadingScreen();
         kony.location.getCurrentPosition(scopeObj.geoLocationSuccessCallBack.bind(scopeObj), scopeObj.geoLocationErrorCallBack.bind(scopeObj), positionoptions);
     },
  
     geoLocationSuccessCallBack: function(response) {
         try {
             var latitude, longitude;
             var latLongObj = {};
             if (response && response.coords && response.coords.latitude && response.coords.longitude) {
                 latitude = response.coords.latitude;
                 longitude = response.coords.longitude;
                 latLongObj.latitude = latitude;
                 latLongObj.longitude = longitude;
                 var  locateUsModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("LocateUsModule");
                 locateUsModule.presentationController.getNearByLocations(latLongObj);
                 //applicationManager.getPresentationUtility().dismissLoadingScreen();
             }
         } catch (err) {
           applicationManager.getPresentationUtility().dismissLoadingScreen();
         }
     },

 geoLocationErrorCallBack: function(err) {
     var scopeObj = this;
     var deviceUtilManager = applicationManager.getDeviceUtilManager();
     var isIphone = deviceUtilManager.isIPhone();
     applicationManager.getPresentationUtility().dismissLoadingScreen();
   if (err.code == 1) {
         var i18nKey = applicationManager.getPresentationUtility().getStringFromi18n("i18n.maps.locationPermissionDenied");
         scopeObj.bindGenericError(i18nKey);
     }
     if (err.code == 3 && !isIphone) {
         var i18n_timeOut = applicationManager.getPresentationUtility().getStringFromi18n("i18n.maps.locationTimeOut");
         scopeObj.bindGenericError(i18n_timeOut);
     }
     if (err.code == 2 && !isIphone) {
         var i18n_turnOnLocationAlert = applicationManager.getPresentationUtility().getStringFromi18n("i18n.maps.turnOnLocationAlert");
         //kony.ui.Alert(i18n_turnOnLocationAlert, scopeObj.onClickSettingsOrCancelHandler.bind(scopeObj), constants.ALERT_TYPE_CONFIRMATION, "Cancel", "Settings", "");
     		this.showLocationAlertPopUp();
     }
     
 },
  
   bindGenericError : function(err){
    applicationManager.getDataProcessorUtility().showToastMessageError(this,err);
  },


  /***********************************************************************************************
  Name: goContactUs - navigating to contacts screen
  Author: Sindhu
  Date: 11/12/2018
  Input: none
  Return: none
*************************************************************************************/
  goContactUs:function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    kony.print("Enter into contacts screen--?");
    var navMan=applicationManager.getNavigationManager();
    navMan.navigateTo("frmSupport");
  },

   showLocationAlertPopUp:function(){
    this.view.AlertPopup.setVisibility(true);
     this.view.flxMainContainer.setEnabled(false);
    this.view.AlertPopup.lblMessage.text = kony.i18n.getLocalizedString("i18n.maps.locationPermissionDenied");
    
  },
 

  /*
  @Purpose To go toLanguage settings page
  */
  setLanguage: function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    var navMan=applicationManager.getNavigationManager();
    navMan.navigateTo("frmLanguage");
  }


});