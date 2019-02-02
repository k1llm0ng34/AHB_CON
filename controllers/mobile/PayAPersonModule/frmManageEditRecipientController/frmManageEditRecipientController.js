define({
  	nickName : "",
    init : function(){
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
    },
    preShow: function () {
        if (kony.os.deviceInfo().name === "iPhone") {
            this.view.flxHeader.isVisible = false;
        }
      	this.nickName = "";
		this.populateName();
        this.initActions();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var navManager = applicationManager.getNavigationManager();
        var currentForm=navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
      	var configManager = applicationManager.getConfigurationManager();
    	var MenuHandler =  applicationManager.getMenuHandler();
    	MenuHandler.setUpHamburgerForForm(this,configManager.constants.MENUTRANSFERS);
    },
  	initActions: function () {
      //var scope = this;
      this.view.MainHeader.btnBack.onClick = this.onBackClick;
      this.view.MainHeader.flxBack.onClick = this.onBackClick;
      this.view.btnSave.onClick = this.onBtnSaveClick;
      this.view.txtRecipientName.onBeginEditing = this.focusskinNickNametbx;
      this.view.txtRecipientName.onEndEditing = this.normalskinNickNametbx;
      this.view.txtRecipientName.onTextChange = this.navigateToVerifyDetails;

      /* this.view.customHeader.btnRight.onClick = function () {
          scope.onClickCancel();
       }*/
      /* this.view.btnSave.onClick = function(){
          	applicationManager.getPresentationUtility().showLoadingScreen();
          var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");      
          if(p2pMod.presentationController.getFlowType()==="P2P"){
            var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
            p2pMod.presentationController.updateP2PRecipient(scope.view.txtRecipientName.text);
          }
			else{
                var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
				transferModule.presentationController.updateBenificiaryNickName(scope.view.txtRecipientName.text);    
			}
        }*/
    },
  /*populateName:function(){
      var p2pMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("PayAPersonModule");
      if(p2pMod.presentationController.getFlowType()==="P2P"){
      var recipientData=p2pMod.presentationController.getP2PPayeeDetails();
		if(recipientData && recipientData.nickName){
			this.view.txtRecipientName.text=recipientData.nickName;
		}
      }
     else{
        var transferMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    	var benificiaryDetails=transferMod.presentationController.getBenificiaryData();
        if(benificiaryDetails && benificiaryDetails.nickName){
        	this.view.txtRecipientName.text=benificiaryDetails.nickName;
        }
      }
	},*/
  
  
/***********************************************************************************************
  Name: navigateToVerifyDetails - handling enabling disable and enable confirmbutton
  Author: Sindhu
  Date: 6/11/2018
  Input: none
  Return: none
*************************************************************************************/   

  
  navigateToVerifyDetails:function(){
    var nickName=this.view.txtRecipientName.text.trim();
    this.nickName = nickName;
    if(nickName){
      this.enableConfirmButton();
    }
    else{
      this.disableConfirmButton();
    }
  },
  
/***********************************************************************************************
  Name: normalskinNickNametbx - disable skin
  Author: Sindhu
  Date: 6/11/2018
  Input: none
  Return: none
*************************************************************************************/    
  normalskinNickNametbx : function(){
    this.view.lblNickNameHolder.skin = "sknAHBLined3d3d3";
  },
  
  /***********************************************************************************************
  Name: focusskinNickNametbx - focus skin
  Author: Sindhu
  Date: 6/11/2018
  Input: none
  Return: none
*************************************************************************************/ 
  focusskinNickNametbx : function(){
    this.view.lblNickNameHolder.skin = "sknAHBBff6d00";
  },

  /***********************************************************************************************
  Name: populateName - getNickName 
  Author: Sindhu
  Date: 6/11/2018
  Input: none
  Return: nickName
*************************************************************************************/   

  populateName:function(){
        var transferMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    	var benificiaryDetails=transferMod.presentationController.getbeneficiaryNickName();
        if(benificiaryDetails){
          	
        	this.view.txtRecipientName.text=benificiaryDetails;
        }
        else{
			this.view.txtRecipientName.text="";
        }
    	this.view.txtRecipientName.setFocus(true);
    	this.focusskinNickNametbx();
    	this.navigateToVerifyDetails();
	},
  
 /* onClickCancel:function(){
    var navMan=applicationManager.getNavigationManager();
    navMan.goBack();
  },*/
 
 /***********************************************************************************************
  Name: onBtnSaveClick - service call to update nickname 
  Author: Sindhu
  Date: 6/11/2018
  Input: none
  Return: none
*************************************************************************************/
  onBtnSaveClick:function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    var nickName= this.view.txtRecipientName.text.trim();
     kony.print("onBtnSaveClick_nickName"+nickName);
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    if(nickName.length > 0 && nickName){
     	this.nickName = nickName;
      kony.print("this.nickName"+this.nickName);
       transferModule.presentationController.updateBenificiaryNickName(nickName);
    }
    else{
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      this.disableConfirmButton();
    }
   },
 /***********************************************************************************************
  Name: onBtnSaveClick - service call to update nickname 
  Author: Sindhu
  Date: 6/11/2018
  Input: none
  Return: none
*************************************************************************************/  
  enableConfirmButton: function() {
    this.view.btnSave.skin = "sknAHBGsc16ptBff6d00TffffffBr21pt";
    this.view.btnSave.focusSkin = "sknAHBGsc16ptBff6d00TffffffBr21pt";
  },
  
/***********************************************************************************************
  Name: onBtnSaveClick - service call to update nickname 
  Author: Sindhu
  Date: 6/11/2018
  Input: none
  Return: none
*************************************************************************************/
  disableConfirmButton: function() {
    this.view.btnSave.skin = "sknAHBGscB16ptBeaeaeaTffffffRounded";
    this.view.btnSave.focusSkin = "sknAHBGscB16ptBeaeaeaTffffffRounded";
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
  Name: bindErrorMessage - get error message
  Author: Sindhu
  Date: 6/11/2018
  Input: none
  Return: none
*************************************************************************************/
  bindErrorMessage: function(err){
    var scope = this;
    applicationManager.getDataProcessorUtility().showToastMessageError(scope,err);
  },
  
/***********************************************************************************************
  Name: onBackClick - navigating  to previous page
  Author: Sindhu
  Date: 6/11/2018
  Input: none
  Return: none
*************************************************************************************/  
  onBackClick: function(){
    var navMan=applicationManager.getNavigationManager();
    navMan.goBack();
  }
});