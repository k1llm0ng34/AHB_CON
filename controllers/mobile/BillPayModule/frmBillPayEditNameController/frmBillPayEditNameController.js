define({
  nickName : "",
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  preShow: function() {

    this.nickName = "";
    this.initActions();
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
    var configManager = applicationManager.getConfigurationManager();
    var MenuHandler =  applicationManager.getMenuHandler();
    MenuHandler.setUpHamburgerForForm(this,configManager.constants.MENUBILLPAY);
  },
  initActions: function() {
    this.populateNickName();
    this.view.MainHeader.flxBack.onClick = this.onClickBack;
    this.view.MainHeader.btnBack.onClick = this.onClickBack;
    this.view.btnNext.onClick = this.onBtnSaveClick;
    this.view.txtRecipientName.onBeginEditing = this.focusSkinForNickNameHolder;
    this.view.txtRecipientName.onEndEditing = this.initialSkinForNickNameHolder;
    this.view.txtRecipientName.onTextChange = this.enableDisableConfirmButton;

  },

  onClickBack: function(){
    var navMan=applicationManager.getNavigationManager();
    navMan.goBack();
  },

  focusSkinForNickNameHolder: function(){
    this.view.lblNickNameHolder.skin = "sknAHBBff6d00";
  },

  initialSkinForNickNameHolder: function(){
    this.view.lblNickNameHolder.skin = "sknAHBLined3d3d3";
  },

  /***********************************************************************************************
  Name: populateName - getNickName 
  Author: Sindhu
  Date: 26/11/2018
  Input: none
  Return: nickName
*************************************************************************************/   

  populateNickName:function(){
    var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    var payeeNickName=billPayModule.presentationController.getPayeeNickName();
    if(payeeNickName){

      this.view.txtRecipientName.text=payeeNickName;
    }
    else{
      this.view.txtRecipientName.text="";
    }
    this.view.txtRecipientName.setFocus(true);
    this.focusSkinForNickNameHolder();
    this.enableDisableConfirmButton();
  },

  /***********************************************************************************************
  Name: enableDisableConfirmButton - valdiation for confirm button 
  Author: Sindhu
  Date: 26/11/2018
  Input: none
  Return: none
*************************************************************************************/  
  enableDisableConfirmButton:function(){
    var nickName = this.view.txtRecipientName.text.trim();
    this.nickName =  nickName;
    if(nickName){
      this.enableConfirmButton();
    }else{
      this.disableConfirmButton();
    }
  },

  /***********************************************************************************************
  Name: enableConfirmButton - enable skin for button
  Author: Sindhu
  Date: 26/11/2018
  Input: none
  Return: none
*************************************************************************************/  
  enableConfirmButton: function(){
    this.view.btnNext.skin = "sknAHBGsc16ptBff6d00TffffffBr21pt";
    this.view.btnNext.focusSkin = "sknAHBGsc16ptBff6d00TffffffBr21pt";
  },

  /***********************************************************************************************
  Name: disableConfirmButton - disable skin for button
  Author: Sindhu
  Date: 26/11/2018
  Input: none
  Return: none
*************************************************************************************/  
  disableConfirmButton: function(){
    this.view.btnNext.skin = "sknAHBGscB16ptBeaeaeaTffffffRounded";
    this.view.btnNext.focusSkin = "sknAHBGscB16ptBeaeaeaTffffffRounded";
  },

  /***********************************************************************************************
  Name: onBtnSaveClick - service call to update nickname 
  Author: Sindhu
  Date: 26/11/2018
  Input: none
  Return: none
*************************************************************************************/
  onBtnSaveClick:function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    var nickName= this.view.txtRecipientName.text.trim();
    kony.print("onBtnSaveClick_nickName"+nickName);
    var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    if(nickName.length > 0 && nickName){
      this.nickName = nickName;
      kony.print("this.nickName"+this.nickName);
      billPayModule.presentationController.updatePayeeNickName(nickName);
    }
    else{
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      this.disableConfirmButton();
    }
  },

  /***********************************************************************************************
  Name: getNickName
  Author: Sindhu
  Date: 6/11/2018
  Input: none
  Return: nickName
*************************************************************************************/  
  getNickName : function (){
    return this.nickName;
  },


  /***********************************************************************************************
  Name: bindGenericError
  Author: Sindhu
  Date: 6/11/2018
  Input: errorMessage
  Return: none
*************************************************************************************/  
  bindGenericError : function(errorMessage){
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    applicationManager.getDataProcessorUtility().showToastMessageError(this, errorMessage);
  }
});