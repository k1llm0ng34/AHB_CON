define({ 

  //Type your controller code here 
  /*
  @Purpose Executes at the preshow of form
  */
  preShow : function()
  {
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    this.initActions();
    this.setLanguageOptions();
    this.populateSelectedLanguage();
  },
/*
@Purpose Initializes the actions associated with form including Footer menu
*/
  initActions : function()
  {
    var scope = this;
    var configManager = applicationManager.getConfigurationManager();
    var MenuHandler =  applicationManager.getMenuHandler();
    MenuHandler.setUpHamburgerForForm(scope,configManager.constants.MENUSETTINGS); 
    //this.view.MainHeader.flxBack.onClick = this.onBackClick;
    this.view.MainHeader.btnBack.onClick = this.onBackClick;
    this.view.segLanguage.onRowClick = this.changeLanguage;
  },
/*
@Pupose Executes on click of back button
*/
  onBackClick: function() {
    kony.print("Enter into onBackClick frmSettings");
    var navMan=applicationManager.getNavigationManager();
    navMan.goBack();
  },

  /*
  @Purpose Sets Language options on UI Segment
  */
  setLanguageOptions: function(){
    this.view.segLanguage.widgetDataMap = {
      lblName:"value",
      imgIcon : "image",
      flxSeparator: "separator"
    };

    var segmentData = [];
    segmentData = [
      {
        value : kony.i18n.getLocalizedString("kony.AHB.Login.English"),
        key : "en_US",
        image : "radiobtnunselectedorange.png",
        separator: {isVisible: true}
      },
      {
        value : kony.i18n.getLocalizedString("kony.AHB.Login.Arabic"),
        key: "ar_AE",
        image : "radiobtnunselectedorange.png",
        separator: {isVisible: false}
      }
    ];

    this.view.segLanguage.setData(segmentData);
  },
/*
@Pupose Captures the Language selection by user and calls a function to change Language accordingly
*/
  changeLanguage: function(){
    var selectedRow = this.view.segLanguage.selectedRowItems[0];
    
    kony.print("changeLanguage - selected item=="+selectedRow);
    if(selectedRow.key ){
      this.onClickLanguageChange(selectedRow.key);
    }
  },
/*
@Purpose sets the entry point and call a common  method to change language in User Manager
@param Language seleted by user
@returns Nothing
*/
  onClickLanguageChange: function(pLanguage){
    applicationManager.getPresentationUtility().showLoadingScreen();
    var userManager = applicationManager.getUserPreferencesManager();
    var navManager = applicationManager.getNavigationManager();
    navManager.setEntryPoint("ChangeLanguage","frmLanguage");
    userManager.changeApplicationLanguage(pLanguage,this.onLanguageChangeSuccess, this.onLanguageFailureCallback);
  },

 /*
 @Purpose On faliure of Language Change
 */
  onLanguageFailureCallback: function(){
    kony.print(" --- Inside onLanguageFailureCallback ---");
	applicationManager.getPresentationUtility().dismissLoadingScreen();
  },

  /*
  @Purpose calls Dashboard service and navigates to dashboard on success of Language change
  */
  onLanguageChangeSuccess: function(){
    var navManager = applicationManager.getNavigationManager();
    var configManager = applicationManager.getConfigurationManager();
    var  cifId = navManager.getCustomInfo("frmAHBLanding").cifId;
    kony.print("cifId=="+cifId);
    var cifObj={"cifId":cifId};
    var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
    
    navManager.setEntryPoint("DashboardService", configManager.constants.DASHBOARDFLOW);
    accountMod.presentationController.showDashboard(cifObj);    
   
  },
  /*
  @Purpose To pre populate the Language selection
  */
  populateSelectedLanguage: function(){
    var userManager = applicationManager.getUserPreferencesManager();
    var langPrefrence=userManager.getLanguagePrefrence();
    kony.print("langPrefrence=="+langPrefrence);
    if(langPrefrence === "ar_AE"){
      this.view.segLanguage.selectedRowIndex = [0,1];
    }else{
      this.view.segLanguage.selectedRowIndex = [0,0];
    }
  }
});