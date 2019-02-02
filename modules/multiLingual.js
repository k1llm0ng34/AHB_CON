function getDeviceLocale() {
  kony.print("entered getDeviceLocale");
  var sm=applicationManager.getStorageManager();
  var tts = sm.getStoredItem("languagePreference");
  kony.print("tts==="+tts);
  var langInDevice = "";
  if((sm.getStoredItem("languagePreference")=== null)||(sm.getStoredItem("languagePreference")==="")){
    var deviceLocale = kony.i18n.getCurrentDeviceLocale();
    kony.print("deviceLocale Object =="+JSON.stringify(deviceLocale));
    langInDevice = JSON.stringify(deviceLocale.language);
    var country = JSON.stringify(deviceLocale.country);
    kony.print("langInDevice=="+langInDevice);
    if(kony.os.deviceInfo().name ==="iPhone"){

      if(langInDevice.indexOf("en") > -1){
        langInDevice = "en";
      }
      else if(langInDevice.indexOf("ar") > -1){
        langInDevice = "ar";
      }
      else{
        langInDevice = "en";
      }
    }
    langInDevice = langInDevice+"_"+country;
    langInDevice = langInDevice.replace(/"/g, '');
    kony.i18n.setCurrentLocaleAsync(langInDevice, onDevSuccesscallback, onDevFailurecallback, null);
  } else {
    langInDevice = sm.getStoredItem("languagePreference");
    kony.i18n.setCurrentLocaleAsync(langInDevice, onDevSuccesscallback, onDevFailurecallback, null);
  }
}

function onDevSuccesscallback() {
  try {
    kony.print(" --- Inside onDevSuccesscallback ---");
    setLocalesOnLandingScreen();
  } catch (err) {
    kony.print(" --- Error ---" +JSON.stringify(err));
  }
  kony.print(" --- Exit of onDevSuccesscallback ---");
}

function onDevFailurecallback(err) {
  kony.print(" --- Inside onDevFailurecallback ---"+JSON.stringify(err));
}

function onClickEnglish() {
  try {
    kony.print(" --- Inside onClickEnglish ---");
    var locale = "en_US";
    var sm=applicationManager.getStorageManager();
    sm.setStoredItem("languagePreference", "en_US");   
    kony.i18n.setCurrentLocaleAsync(locale, onEngSuccesscallback, onEngFailurecallback);
  } catch (err) {
    kony.print(" --- Error ---" + JSON.stringify(err));
  }
  kony.print(" ---  Exit of onClickEnglish ---");
}

function onEngSuccesscallback() {
  try {
     
    var navManager = applicationManager.getNavigationManager();
    navManager.navigateTo("frmRTL");
    setLocalesOnLandingScreen();
    kony.print(" --- Inside onEngSuccesscallback ---");
    } catch (err) {
    kony.print(" --- Error ---" + JSON.stringify(err));
  }
  kony.print(" --- Exit of onEngSuccesscallback ---");
}

function onEngFailurecallback() {
  kony.print(" --- Inside onEngFailurecallback ---");
}

function onClickArabic() {
  try {
    kony.print(" --- Inside onClickArabic ---");
    var arabicLocale = "ar_AE";
    var sm=applicationManager.getStorageManager();
    sm.setStoredItem("languagePreference", "ar_AE");
    kony.i18n.setCurrentLocaleAsync(arabicLocale, onArabicSuccesscallback, onArabicFailurecallback);
  } catch (err) {
    kony.print(" --- Error ---" + JSON.stringify(err));
  }
  kony.print(" ---  Exit of onClickArabic ---");
}

function onArabicSuccesscallback() {
  try {
    kony.print(" --- Inside onArabicSuccesscallback ---");
    var navManager = applicationManager.getNavigationManager();
    navManager.navigateTo("frmRTL");
    setLocalesOnLandingScreen();
  } catch (err) {
    kony.print(" --- Error ---" + JSON.stringify(err));
  }
  kony.print(" --- Exit of onArabicSuccesscallback ---");
}

function onArabicFailurecallback() {
  kony.print(" --- Inside onArabicFailurecallback ---");
}

function setLocalesOnLandingScreen(){
  kony.print("inside setLocalesOnLandingScreen" +kony.i18n.getLocalizedString("kony.AHB.Login.Welcome"));
  frmAHBLanding.lblWelcome.text = kony.i18n.getLocalizedString("kony.AHB.Login.Welcome");
  kony.print("inside setLocalesOnLandingScreen" +frmAHBLanding.lblWelcome.text);
  frmAHBLanding.lblContent.text = kony.i18n.getLocalizedString("kony.AHB.Login.toYourMobileBanking");
  frmAHBLanding.btnLetsgetStarted.text = kony.i18n.getLocalizedString("kony.AHB.Login.Register.CardNumber");
  frmAHBLanding.btnRegisterUsingAccountNumber.text = kony.i18n.getLocalizedString("kony.AHB.Login.AccountNumber");
  frmAHBLanding.lblATMText.text = kony.i18n.getLocalizedString("kony.AHB.Login.footer.ContactUs");
  frmAHBLanding.lblContactUs.text = kony.i18n.getLocalizedString("kony.AHB.Login.footer.ATM");
  frmAHBLanding.forceLayout();
}