define({
    recipientType: '',
    deletesegData:[],
	segmentData:null,
    timerCounter:0,
    onNavigate: function(obj) {
    },
    init : function(){
      var navManager = applicationManager.getNavigationManager();
      var currentForm=navManager.getCurrentForm();
      applicationManager.getPresentationFormUtility().initCommonActions(this,"YES",currentForm);
      this.view.preShow = this.preShow;
    },
    preShow: function() {
        var configManager = applicationManager.getConfigurationManager();
      	
       
      
      	var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
      	
      	this.setSegCharityData();
		
      
        
//         if (kony.os.deviceInfo().name === "iPhone") {
//             this.view.flxHeader.isVisible = false;
//           	this.view.flxMainContainer.top = "0dp";
//         }
      this.initActions();
        
      	
        var navManager = applicationManager.getNavigationManager();
        
      	
       	var currentForm=navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);

      	

    },
    initActions: function() {
      var scope = this;
      this.view.flxNoTransactions.setVisibility(false);
      this.view.MainHeader.flxBack.onClick = this.onBackClick;
      this.view.MainHeader.btnBack.onClick = this.onBackClick;
      this.view.segCharity.onRowClick = this.onRowClickSegCharity;
      

    },
    

  

  bindSuccessMessage: function(err){
    var scope = this;
    applicationManager.getDataProcessorUtility().showToastMessageError(scope,err);
  },
  
 
  onBackClick: function(){
    var navMan=applicationManager.getNavigationManager();
    navMan.goBack();
  },
  
    /*-----------------------------------------------------------------------------------

  Name: 	setSegCharityData
  Purpose: 	sets segCharity Data
  Author: 	Fariha
  Date: 	29/11/2018
  Input: 	NA
  Return: 	NA	

  ------------------------------------------------------------------------------------*/
  
  setSegCharityData:function(){
    var segData = [];
    this.view.segCharity.removeAll();
    this.view.segCharity.setVisibility(true);
    var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    segData = billPayMod.presentationController.getUniqueServiceOpName();
    this.view.segCharity.widgetDataMap={
      "lblSurName":"serviceOperatorName"
    };
    if(segData.length){
    this.view.segCharity.setData(segData);}
    else{
      this.view.segCharity.setVisibility(false);
      this.view.flxNoTransactions.setVisibility(true);
    }
  },
  
   /*-----------------------------------------------------------------------------------

  Name: 	onRowClickSegCharity
  Purpose: 	determines the functionality to occur after row click of segCharity
  Author: 	Fariha
  Date: 	29/11/2018
  Input: 	NA
  Return: 	NA	

  ------------------------------------------------------------------------------------*/
  
  onRowClickSegCharity : function(){
    var lCharityDetails = this.view.segCharity.selectedRowItems[0];
    var serviceOperatorId = lCharityDetails.serviceOperatorId ;
    var serviceOperatorName  = lCharityDetails.serviceOperatorName  ;
    
    //var operatorCode = lCharityDetails
    var navManager = applicationManager.getNavigationManager();
    var billPayMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
    billPayMod.presentationController.resetPayeeData();
  	billPayMod.presentationController.resetFromAccountData();
    billPayMod.presentationController.setBillAmountEntered("");
    
    billPayMod.presentationController.setOperatorName(serviceOperatorName);
    billPayMod.presentationController.setOperatorCode(serviceOperatorId);
    billPayMod.presentationController.getDashboardData();
    
    
  },
});