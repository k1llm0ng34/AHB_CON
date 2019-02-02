define({ 

 preShow : function(){
   kony.application.destroyForm("frmAHBLanding");
   kony.application.destroyForm("frmAHBRegCardNumber");
   kony.application.destroyForm("frmAHBRegConfirmOTP");
   kony.application.destroyForm("frmAHBRegCreateAppPin");
   kony.application.destroyForm("frmAHBRegFaceId");
  // var navMan = applicationManager.getNavigationManager();
  // navMan.destroyForms();
 },
  
 postShow : function(){
   var navManager = applicationManager.getNavigationManager();
   navManager.navigateTo("frmAHBLanding");
 }

 });