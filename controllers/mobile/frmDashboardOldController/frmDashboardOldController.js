define({
     preshow: function () {
        if(kony.os.deviceInfo().name !== "iPhone"){
          this.view.flxTitle.isVisible = true;
          this.view.flxMenu.isVisible = false;
        }
 	    else{
     	  this.view.flxTitle.isVisible = false;
          this.view.flxMenu.isVisible = true;
  	    }
        this.initActions();
        //this.setAccountsData();
      	var storMan = applicationManager.getStorageManager();
      	storMan.setStoredItem("firstTimeLogin","Done");
      	var navMan = applicationManager.getNavigationManager();
        var custominfo = navMan.getCustomInfo("frmDashboard");
        var accountData = custominfo.accountData;
    	var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        var processedAccountsData = accountMod.presentationController.processAccountsData(accountData); 
      	var totalAvaBal = accountMod.presentationController.getTotalAvailableBalance(accountData);
      	var totalDebt = accountMod.presentationController.getTotalDebtBalance(accountData);
      	this.view.lblBankName.text = totalAvaBal;
      	this.view.lblAssetsValue.text = totalAvaBal;
      	this.view.lblDebtValue.text = totalDebt;
      	this.view.segAccounts.widgetDataMap={
              				lblAccountName:"accountName",
              				lblAccountBalValue:"availableBalance",              
	          				lblBankName:"bankName",
                            lblAccountId:"accountID",
	          				lblAccountBal:"accountBalanceType"                           
                             };
      	this.view.segAccounts.setData(processedAccountsData);
	//	this.view.customFooter.flxMore.onClick = this.onClickFlxMore;
    },
	onClickFlxMore : function(){
        var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
        accountMod.presentationController.commonFunctionForNavigation("frmMenu");
    },
    postShow: function(){
        var h = this.view.flxDashboard.frame.height;
        // h = h-110;
        this.view.flxAccounts.height = h+"dp";
    },
    initActions: function () {
        var scope = this;
        var configManager = applicationManager.getConfigurationManager();
		MenuHandler.setUpHamburgerForForm(scope,configManager.constants.MENUHOME);
        this.view.flxShowGraph.onClick = function(){
            scope.showGraph();
        }
             
        this.view.flxDashboard.onScrolling = this.onScrollingDashboard;
        scope.view.segAccounts.onTouchEnd = this.onScrollingSegment;

    },
      onScrollingDashboard: function(){
        if(this.view.flxSuggestedOffers.isVisible === true){
            return;
        }
        if(this.view.flxSpendingBudget.isVisible === true){
            return;
        }
        var scope = this;
        var flxy = scope.view.flxDashboard.contentOffsetMeasured.y;
        if(flxy>=50){
            scope.view.segAccounts.height = "100%";
            scope.view.forceLayout();
        }
    },
    onScrollingSegment : function(){
        var scope = this;
        if(scope.view.flxGraph.height!=="0dp"){
            scope.showGraph();
        }
        if(scope.view.segAccounts.height !== "preferred"){
            var segy = scope.view.segAccounts.contentOffsetMeasured.y;
            if(segy<=1){
                scope.view.segAccounts.height = "preferred";
                scope.view.forceLayout();
            }    
        }  
    },
    showGraph: function () {
        var scope = this;
        var heightValue;
        if (this.view.flxGraph.height === "0dp") {
            heightValue = "245dp";
        } else {
            heightValue = "0dp";
        }

        this.view.flxGraph.animate(
            kony.ui.createAnimation({
                "100": {
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "height": heightValue
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.25
            }, {
                "animationEnd": function () {
                    if (heightValue === "0dp") {
                        scope.view.imgShowGraph.src = "dashboardicon.png";
                    } else {
                        scope.view.imgShowGraph.src = "dbicon_up.png";
                    }
                    scope.view.forceLayout();
                }
            });
    },
    showAllAccountTypes: function () {
        var scope = this;
        var heightValue;
        if (this.view.flxAccountTypes.height === "0dp") {
            heightValue = "preferred";
        } else {
            heightValue = "0dp";
        }

        this.view.flxAccountTypes.animate(
            kony.ui.createAnimation({
                "100": {
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                    "height": heightValue
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.25
            }, {
                "animationEnd": function () {
                    if (heightValue === "0dp") {
                        scope.view.imgShowAllAccounts.src = "arrowdown.png";
                    } else {
                        scope.view.imgShowAllAccounts.src = "arrowup.png";
                    }
                    scope.view.forceLayout();
                }
            });
    },
    setAccountsData: function () {
        var data = [
            [{
                    "lblTypeName": "Checking Accounts (3)",
                    "lblTypeValue": "$127,912.00"
                },
                [{
                        "imgBank": "bankofamerica.png",
                        "lblAccountBal": "Available Balance",
                        "lblAccountBalValue": "$42,304.00",
                        "lblAccountName": "My Checking…2343",
                        "lblBankName": "Bank of America"
                    },
                    {
                        "imgBank": "chasebank.png",
                        "lblAccountBal": "Available Balance",
                        "lblAccountBalValue": "$42,304.00",
                        "lblAccountName": "Little John…2343",
                        "lblBankName": "Citi Bank"
                    },
                    {
                        "imgBank": "citibank.png",
                        "lblAccountBal": "Available Balance",
                        "lblAccountBalValue": "$42,304.00",
                        "lblAccountName": "Honey home…2343",
                        "lblBankName": "Chase Bank"
                    },
                ]
            ],
            [{
                    "lblTypeName": "Saving Accounts (3)",
                    "lblTypeValue": "$83,912.00"
                },
                [{
                        "imgBank": "bankofamerica.png",
                        "lblAccountBal": "Available Balance",
                        "lblAccountBalValue": "$42,304.00",
                        "lblAccountName": "My Saving…2343",
                        "lblBankName": "Citi Bank"
                    },
                    {
                        "imgBank": "citibank.png",
                        "lblAccountBal": "Available Balance",
                        "lblAccountBalValue": "$42,304.00",
                        "lblAccountName": "John Saving…2343",
                        "lblBankName": "Chase Bank"
                    },
                ]
            ],
            [{
                    "lblTypeName": "Credit Cards (3)",
                    "lblTypeValue": "$83,912.00"
                },
                [{
                        "imgBank": "chasebank.png",
                        "lblAccountBal": "Available Balance",
                        "lblAccountBalValue": "$42,304.00",
                        "lblAccountName": "Kony Corel Card…2343",
                        "lblBankName": "Citi Bank"
                    },
                    {
                        "imgBank": "citibank.png",
                        "lblAccountBal": "Available Balance",
                        "lblAccountBalValue": "$42,304.00",
                        "lblAccountName": "Little John…2343",
                        "lblBankName": "Chase Bank"
                    },
                ]
            ],
            [{
                    "lblTypeName": "Loans (1)",
                    "lblTypeValue": ""
                },
                [{
                    "imgBank": "bankofamerica.png",
                    "lblAccountBal": "Available Balance",
                    "lblAccountBalValue": "$42,304.00",
                    "lblAccountName": "My Checking…2343",
                    "lblBankName": "Citi Bank"
                }]
            ],
            [{
                    "lblTypeName": "Deposits (1)",
                    "lblTypeValue": ""
                },
                [{
                    "imgBank": "citibank.png",
                    "lblAccountBal": "Available Balance",
                    "lblAccountBalValue": "$42,304.00",
                    "lblAccountName": "My Checking…2343",
                    "lblBankName": "Citi Bank"
                }]
            ],
            [{
                    "lblTypeName": "Deposits (1)",
                    "lblTypeValue": ""
                },
                [{
                    "imgBank": "citibank.png",
                    "lblAccountBal": "Available Balance",
                    "lblAccountBalValue": "$42,304.00",
                    "lblAccountName": "My Checking…2343",
                    "lblBankName": "Citi Bank"
                }]
            ],
            [{
                    "lblTypeName": "Deposits (1)",
                    "lblTypeValue": ""
                },
                [{
                    "imgBank": "citibank.png",
                    "lblAccountBal": "Available Balance",
                    "lblAccountBalValue": "$42,304.00",
                    "lblAccountName": "My Checking…2343",
                    "lblBankName": "Citi Bank"
                }]
            ],
            [{
                    "lblTypeName": "Deposits (1)",
                    "lblTypeValue": ""
                },
                [{
                    "imgBank": "citibank.png",
                    "lblAccountBal": "Available Balance",
                    "lblAccountBalValue": "$42,304.00",
                    "lblAccountName": "My Checking…2343",
                    "lblBankName": "Citi Bank"
                }]
            ],
            [{
                    "lblTypeName": "Deposits (1)",
                    "lblTypeValue": ""
                },
                [{
                    "imgBank": "citibank.png",
                    "lblAccountBal": "Available Balance",
                    "lblAccountBalValue": "$42,304.00",
                    "lblAccountName": "My Checking…2343",
                    "lblBankName": "Citi Bank"
                }]
            ],
        ];
        this.view.segAccounts.setData(data);
    },
  accountSegmentOnClick: function(){
    applicationManager.getPresentationUtility().showLoadingScreen();
    var rowid=this.view.segAccounts.selectedRowIndex[1];
    var selectedAccountId = this.view.segAccounts.data[rowid]["accountID"];
    
    var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
    var processedAccountsData = accountMod.presentationController.fetchAccountTransactions(selectedAccountId); 
   
  } 
});