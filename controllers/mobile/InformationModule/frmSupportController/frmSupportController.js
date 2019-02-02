define({
	supportInfo:'',
  preShow: function () {
    //this.setSegmentData();
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    this.initActions();
    //this.view.customHeader.flxBack.onClick=this.backIcon;

    //this.view.lblAppVersion.text= kony.i18n.getLocalizedString("kony.mb.Support.AppVersion")+" "+appConfig.appVersion;
    //  this.enableOrDisableHamburger();
    var navManager = applicationManager.getNavigationManager();
    var configManager = applicationManager.getConfigurationManager();
    var MenuHandler =  applicationManager.getMenuHandler();
    MenuHandler.setUpHamburgerForForm(this,configManager.constants.MENUCONTACT);
    // this.enableOrDisableHamburger();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    // var ContactUs = applicationManager.getLoggerManager();                
    //  ContactUs.setCustomMetrics(this, false, "Support");
    var authModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
    this.supportInfo = authModule.presentationController.getSupportInfo();
    var supportInfo = this.supportInfo;
    if(supportInfo){
      this.view.lblInsideUaeNumber.text = supportInfo.CON_PH_UAE;
      this.view.lblOutsideUaeNumber.text = supportInfo.CON_PH_INT;
    }else {
      this.view.lblInsideUaeNumber.text = "";
      this.view.lblOutsideUaeNumber.text = "";
    }
    this.enableContactLinks();

  },

  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
    
     initActions: function(){
       /* var scope = this;
        this.view.btnCallBranch.onClick = function(){
            applicationManager.getPresentationUtility().showLoadingScreen(); 
            var infoCall = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("InformationModule");
            infoCall.presentationController.onClickCallUs();  
           
        }*/
    this.view.MainHeader.flxBack.onClick = this.onBackClick;
    this.view.MainHeader.btnBack.onClick = this.onBackClick;
    this.view.flxEmailHeader.onClick = this.openUrl;
    this.view.flxFaceBook.onClick = this.openUrl;
    this.view.flxTweetHeader.onClick = this.openUrl;
    this.view.flxYoutube.onClick = this.openUrl;
    this.view.flxInstaGram.onClick = this.openUrl;
    this.view.flxLinkedIn.onClick = this.openUrl;
    this.view.flxInsideUae.onClick = this.openUrl;
    this.view.flxOutsideUae.onClick = this.openUrl;
    this.view.flxAlhilalLink.onClick = this.openUrl;
  },

  onBackClick: function(){
    var navMan=applicationManager.getNavigationManager();
    navMan.goBack();
  },
  
  openUrl:function(eventobject){
    var supportInfo = this.supportInfo;
      kony.print("openUrl_supportInfo"+JSON.stringify(supportInfo));
    if(supportInfo){
      //this.handlingEmptyData(true);
      if(eventobject.id === "flxEmailHeader" && supportInfo.CON_EMAIL){
        kony.print("eventobject.id_flxEmail"+eventobject.id);
        var emailObj = {"To":[supportInfo.CON_EMAIL],"cc":null,'bcc':null,
                        "subject":'','messagebody':'','ismessagebodyhtml':false,
                        "attachments":null};
        openNativeEmailClient(emailObj,"frmSupport");
      }else if(eventobject.id === "flxInsideUae" && supportInfo.CON_PH_UAE){
        kony.phone.dial(supportInfo.CON_PH_UAE);
      }else if(eventobject.id === "flxOutsideUae" && supportInfo.CON_PH_INT){
        kony.phone.dial(supportInfo.CON_PH_INT);
      }else if(eventobject.id === "flxFaceBook" && supportInfo.CON_URL_FB){
        kony.application.openURL(supportInfo.CON_URL_FB);
      }else if(eventobject.id === "flxTweetHeader" && supportInfo.CON_URL_TW){
        kony.application.openURL(supportInfo.CON_URL_TW);
      }else if(eventobject.id === "flxYoutube" && supportInfo.CON_URL_YT){
        kony.application.openURL(supportInfo.CON_URL_YT);
      }else if(eventobject.id === "flxInstaGram" && supportInfo.CON_URL_INSTA){
        kony.application.openURL(supportInfo.CON_URL_INSTA);
      }else if(eventobject.id === "flxLinkedIn" && supportInfo.CON_URL_LI){
        kony.application.openURL(supportInfo.CON_URL_LI);
      }else if(eventobject.id === "flxAlhilalLink" && supportInfo.CON_URL_AHB){
        kony.application.openURL(supportInfo.CON_URL_AHB);
      }
    } 
  },
  
  handlingEmptyData: function(status){
    this.view.flxEmailHeader.setEnabled(status);
    this.view.flxFaceBook.setEnabled(status);
    this.view.flxTweetHeader.setEnabled(status);
    this.view.flxYoutube.setEnabled(status);
    this.view.flxInstaGram.setEnabled(status);
    this.view.flxLinkedIn.setEnabled(status);
    this.view.flxInsideUae.setEnabled(status);
    this.view.flxOutsideUae.setEnabled(status);
    this.view.flxAlhilalLink.setEnabled(status);
  },
  
  enableContactLinks : function(){
  	var supportInfo = this.supportInfo;
    this.handlingEmptyData(false);
  	if(supportInfo){
      if(supportInfo.CON_EMAIL){
        this.view.flxEmailHeader.setEnabled(true);
      }if(supportInfo.CON_PH_UAE){
        this.view.flxInsideUae.setEnabled(true);
      }if(supportInfo.CON_URL_YT){
        this.view.flxYoutube.setEnabled(true);
      }if(supportInfo.CON_PH_INT){
        this.view.flxOutsideUae.setEnabled(true);
      }if(supportInfo.CON_URL_FB){
        this.view.flxFaceBook.setEnabled(true);
      }if(supportInfo.CON_URL_TW){
        this.view.flxTweetHeader.setEnabled(true);
      }if(supportInfo.CON_URL_INSTA){
        this.view.flxInstaGram.setEnabled(true);
      }if(supportInfo.CON_URL_LI){
        this.view.flxLinkedIn.setEnabled(true);
      }if(supportInfo.CON_URL_AHB){
        this.view.flxAlhilalLink.setEnabled(true);
      }
	}
    
  },
  
    enableOrDisableHamburger :function(){
    var userObj = applicationManager.getUserPreferencesManager();
    var Login = userObj.isUserLoggedin();
    if(Login === true){
      this.view.customHeader.flxBack.imgBack.src = "hamburger.png";
      if(kony.os.deviceInfo().name === "iPhone"){
        this.view.flxSupportMain.bottom = "60dp";
        this.view.flxFooter.isVisible = true;
      }
      else{
        this.view.flxSupportMain.bottom = "0dp";
        this.view.flxFooter.isVisible = false;
      }
    }else{
      var scope = this;
      this.view.flxFooter.isVisible = false;
      this.view.flxSupportMain.bottom = "0dp";
      this.view.customHeader.flxBack.imgBack.src = "backbutton.png";
      this.view.customHeader.flxBack.onClick = function(){
        scope.backIcon();
      };
    }
  },
  
  
    showDial: function (phoneNumber) {     
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      kony.phone.dial(phoneNumber);         
    },
  
    backIcon: function() {
      var informationPC = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("InformationModule");
      informationPC.presentationController.commonFunctionForNavigation("frmLogin");
      },
  
    setSegmentData: function () {
        var scope = this;
        var configManager = applicationManager.getConfigurationManager();
        var data = [{
                "imgArrow": "chevron.png",
                "lblTitle": configManager.constants.FAQ
            }, {
                "imgArrow": "chevron.png",
                "lblTitle": configManager.constants.TERMS
            },
            {
                "imgArrow": "chevron.png",
                "lblTitle": configManager.constants.PRIVACY
            }
        ];
        this.view.segSupport.setData(data);
        this.view.segSupport.onRowClick = function(){
           var selectedvalue = scope.view.segSupport.selectedItems[0].lblTitle;
           
            if(selectedvalue === configManager.constants.PRIVACY){
             applicationManager.getPresentationUtility().showLoadingScreen(); 
             var informationPC = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("InformationModule");
             informationPC.presentationController.onClickPrivacyPolicy(selectedvalue);  
              
            } else if(selectedvalue === configManager.constants.TERMS){
             applicationManager.getPresentationUtility().showLoadingScreen();  
             var informationPC = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("InformationModule");
             informationPC.presentationController.onClickTermsAndConditions(selectedvalue);  
              
            } else if(selectedvalue === configManager.constants.ABOUT){
             applicationManager.getPresentationUtility().showLoadingScreen(); 
             var informationPC = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("InformationModule");
             informationPC.presentationController.onClickAboutUs(selectedvalue);  
              
            } else if(selectedvalue === configManager.constants.FAQ){
             applicationManager.getPresentationUtility().showLoadingScreen(); 
             var informationPC = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("InformationModule");
             informationPC.presentationController.onClickFAQs(selectedvalue);  
              
            }
            
        }
    },
  	
  /*-----------------------------------------------------------------------------------
  Name: 	bindGenericError
  Purpose: 
  Author: 	Bipin
  Date: 	07/12/2018
  Input: 	NA
  Return: 	NA	
  ------------------------------------------------------------------------------------*/
  bindGenericError:function(errorMsg){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var scopeObj = this;
    applicationManager.getDataProcessorUtility().showToastMessageError(scopeObj, errorMsg);
  },
});