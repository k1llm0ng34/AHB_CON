define({
  init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
  },
  preShow: function() {
    this.initActions();
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    var navManager = applicationManager.getNavigationManager();
    var currentForm=navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().logFormName(currentForm);
  },

  initActions : function(){
    this.view.MainHeaderWithCancel.btnCancel.onClick = this.onClickEdit;
    this.view.btnDeactivate.onClick = this.onClickDeactive;
    this.view.AlertPopup.btnDontCancel.onClick = this.onCancleDeactive;
    this.view.MainHeaderWithCancel.btnBack.onClick = this.onClickBack;
    this.view.MainHeaderWithCancel.flxBack.onClick = this.onClickBack;
  },

  onClickBack:function(){
    var navMan=applicationManager.getNavigationManager();
    navMan.goBack();
  },

  onClickEdit: function(){
    var navManager = applicationManager.getNavigationManager();
    navManager.navigateTo("frmEditDeviceNickName");
  },

  onClickDeactive:function(){
    this.view.AlertPopup.setVisibility(true);
  },

  onCancleDeactive: function(){
    this.view.AlertPopup.setVisibility(false);
  }

});