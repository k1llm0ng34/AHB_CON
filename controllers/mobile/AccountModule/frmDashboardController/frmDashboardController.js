define({
	adsHided : false,
    currAdFlex : 1,
    inFeedAdData : [],
    numOfAds : 0,
    xOffset : 0,
    imageObjArray : [],
    imageDownloadFailureCount : 0,
    gestIDs : [],
    isSwipeDone : false,
    isTapDone : false,
    init : function(){
    var navManager = applicationManager.getNavigationManager();
    var currentForm = navManager.getCurrentForm();
    applicationManager.getPresentationFormUtility().initCommonActions(this,"NO",currentForm);
	
  },
  
  initStudioAction : function(){
    this.view.segAccounts.onRowClick = this.gotoIntermediateAccountsScreen;
   
    this.view.onDeviceBack = this.onDevivceBackClick;
  },
  
  preshow: function () {
    var scope = this;
    this.view.customHeader.setVisibility(false);
    //this.showMenu();
    //this.view.customHeader.lblLocateUs.text = kony.i18n.getLocalizedString("kony.mb.accounts.dashboard");
    this.view.flxDashboardHeader.skin = "sknAhbFlxff6d00";
    this.view.flxDummyHorizontalScroll.skin = "sknAhbFlxff6d00";
    this.view.flxDonut.setEnabled(false);
    this.view.donutchart.setEnabled(false);
    var MenuHandler =  applicationManager.getMenuHandler();
    var configManager = applicationManager.getConfigurationManager();
    MenuHandler.setUpHamburgerForForm(scope,configManager.constants.MENUHOME);
    this.initStudioAction();
    this.initActions();
    this.setInitDashboardView();
    var navMan = applicationManager.getNavigationManager();
    var infoFrmDashboard = navMan.getCustomInfo("frmDashboard");
    var segAccountsHeader = [];
    var processedAccountsData = {};
    if(infoFrmDashboard && infoFrmDashboard.accountData){
      processedAccountsData = infoFrmDashboard.accountData;
      kony.print("processedAccountsData"+JSON.stringify(processedAccountsData));

    var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
    


      var cardsArr=processedAccountsData.cards;
      kony.print("cardsArr"+JSON.stringify(cardsArr));
      var accArr=processedAccountsData.operativeAccounts;
      var financeArr=processedAccountsData.finances;
      var investmentArr=processedAccountsData.investments;
      var dashboard=processedAccountsData.dashboard;
      this.setDonutChartData(dashboard);
		
      this.view.lblWelcomeBack.text = kony.i18n.getLocalizedString("kony.mb.ForgotMain.UserName");
      this.view.lblSavingsValue.text = commaSeparatorUtil(dashboard.savingAndDeposits)  ; 
      this.view.lblAvailableLimitValue.text = commaSeparatorUtil(dashboard.cardsLimit);
      this.view.lblCurrentAccountValue.text = commaSeparatorUtil(dashboard.currentAccount);
      this.view.lblTotalSpending.text = kony.i18n.getLocalizedString("kony.ahb.account.yourMoney"); 
      this.view.lblTotalSpendingValue.text = dashboard.sum ?appendCurrency(commaSeparatorUtil((dashboard.sum).toFixed(2)),"AED") :"0.00 AED" ;
      //adding disclimar as per MB-2031
      if(dashboard.isDisclaimerRequired === "true"){
        this.view.lblCurrencyIndication.setVisibility(true);
      }else {
        this.view.lblCurrencyIndication.setVisibility(false);
      }
      var lastLogin = "";

      /// temp fix
      
      lastLogin = getLastLoginDateAndTime();
      if(lastLogin){
        //lastLogin =  new Date (getLastLoginDateAndTime());
        kony.print("lastLogin-fromService--->"+lastLogin);// format 12/28/2018 02:26:05 GMT+04:00
        var fotmatUtilManager = applicationManager.getFormatUtilManager();
        lastLogin = lastLogin.toString().split(" ");
        var splitDate = lastLogin[0].toString().split("/");
        var monthName = this.setMonthLabelText(splitDate[0]);
        var finaldateAndTime =splitDate[1]+" "+monthName+" "+splitDate[2]+" "+lastLogin[1];
        // Wed Dec 26 2018 03:49:01 GMT+0530 (IST) //fotmatUtilManager.getFormatedDateString(lastLogin, "d M Y h:m:s");
        kony.print("lastLogin"+finaldateAndTime); 
        /// TODO format the date string in DD MMM YYYY hh:mm:ss
        this.view.lblLastLogin.setVisibility(true);
        var lastLoginUI = kony.i18n.getLocalizedString("kony.mb.Hamburger.LastLogin").replace("###PLACEHOLDER###",finaldateAndTime);  
        this.view.lblLastLogin.text =  lastLoginUI ;         
      }else{
        this.view.lblLastLogin.setVisibility(false);
        this.view.lblLastLogin.text ="";
      }
    
      this.view.lblSwipeUp.text = kony.i18n.getLocalizedString("kony.ahb.account.swipeMessage");

      this.view.segAccounts.widgetDataMap={
        //lblAccountName:"accountName",
        lblAccountName:"accountType",
        lblAccountBalValue:"availableBalance",              
        //  lblBankName:"bankName",
        lblBankName:"accountID",
        //lblAccountId:"accountID",
        lblAvailableExtAccounts:"SectionDescription",
        lblAccountBal:"balanceType" ,
        hCategory :  "category",
        hAccountId : "hAccountId",
      	lblRightArrow : "lblRightArrow"
    };
    

    if(accArr.length){
      segAccountsHeader[segAccountsHeader.length] = [
        {
          SectionDescription:kony.i18n.getLocalizedString("kony.mb.accounts.myAccounts"),
          template:"flxExtAccountsHeader",
        },
        accArr  
      ];
    }
    
    if(cardsArr.length){
      segAccountsHeader[segAccountsHeader.length] = [
        {
          SectionDescription:kony.i18n.getLocalizedString("kony.mb.accounts.myCards"),
          template:"flxExtAccountsHeader",
        },
        cardsArr 
      ];
    }
    
    
    if(financeArr.length){
      segAccountsHeader[segAccountsHeader.length] = [
        {
          SectionDescription:kony.i18n.getLocalizedString("kony.mb.accounts.myFinances"),
          template:"flxExtAccountsHeader",
        },
        financeArr 
      ];
    }
    
    
    if(investmentArr.length){
      segAccountsHeader[segAccountsHeader.length] = [
        {
          SectionDescription:kony.i18n.getLocalizedString("kony.mb.accounts.myDeposits"),
          template:"flxExtAccountsHeader",
        },
        investmentArr 
      ];
    }
    }
    else{
      this.view.lblSavingsValue.text = "-" ; 
      this.view.lblAvailableLimitValue.text = "-" ; 
      this.view.lblCurrentAccountValue.text = "-" ; 
    }
    
    
    this.view.segAccounts.setData(segAccountsHeader);

   },
  init : function(){
    	var date = new Date();
		this.currentMonth = parseInt(date.getMonth()+1);
  },
  mapPFMDataToCharts : function(){    
    try{
      kony.timer.cancel("pfmTimer");
    }
    catch(exception){}
	kony.timer.schedule("pfmTimer",this.mapDataToChart,2,false);
  },
  mapDataToBar : function(){
    var navManager = applicationManager.getNavigationManager();
    var barData = navManager.getCustomInfo("frmDashboardPFMBar");
    var barGraphData = [];
    var barSegData = [];
    var formatUtility = applicationManager.getFormatUtilManager();
    barData.forEach(function(record){
       barGraphData.push({
                        "value": parseFloat(record.totalCashFlow),
                    });
      barSegData.push({
        "monthName":record.monthName,
        "totalCashFlow":formatUtility.formatAmountandAppendCurrencySymbol(record.totalCashFlow)
      });
    });
    this.view.segBar.widgetDataMap = {
                "lblSpending": "monthName",
                "lblAmountSpent": "totalCashFlow",
            };
    this.view.segBar.setData(barSegData);
	var result = this.view.browserBar.evaluateJavaScript("createBarChart("+JSON.stringify(barGraphData)+");");
   	if(!result){
      alert("Error in creating chart");
    }

  },
  mapDataToChart : function(){
    var navManager = applicationManager.getNavigationManager();
    var pieData = navManager.getCustomInfo("frmDashboardPFMPie");
    
    this.mapDataToBar();


    var chartData = [];
    var segSpendingData = [];
    
    var formatUtility = applicationManager.getFormatUtilManager();
    var totalAmount = pieData.reduce(function(previous, record) {
                			return previous + Number(record.cashSpent);
            			}, 0).toFixed(2);
    
    pieData.forEach(function(record) {
				var percentageValue = Math.round((record.cashSpent * 100) / totalAmount) + "%";

                chartData.push({
                    "label": record.categoryName,
                    "value": percentageValue,
                  	"color":"ffffff",
                  	"alpha":"80"
                });
      
                segSpendingData.push({
                    "categoryName": record.categoryName + " - " + percentageValue,
                    "cashSpent": formatUtility.formatAmountandAppendCurrencySymbol(record.cashSpent)
                });
            });
            this.view.segTransactions.widgetDataMap = {
                "lblSpending": "categoryName",
                "lblAmountSpent": "cashSpent",
            };

            this.view.segTransactions.setData(segSpendingData);
    		var x = this.view.browserChart.evaluateJavaScript("createPieChart("+JSON.stringify(chartData)+");");
    		this.view.lblTotalSpendingValue.text = formatUtility.formatAmountandAppendCurrencySymbol(totalAmount);
    		this.view.lblMonthAndYearSummary.text = this.MONTH_NAMES[this.currentMonth-1];
    		this.view.lblMonthAndYear.text = this.MONTH_NAMES[this.currentMonth-1];
    		if(!x){
              alert("Error in creating PFM chart");
            }
    	this.view.forceLayout();
    	applicationManager.getPresentationUtility().dismissLoadingScreen();
  },
  prevMonthClick : function(){
    if(this.currentMonth===1){
      return;
    }
    this.prevMonth = parseInt(this.currentMonth)-1;
    this.nextMonth = -1;
    this.goToMonth(this.prevMonth);

  },
  nextMonthClick : function(){
    if(this.currentMonth==12){
      return;
    }
    this.prevMonth = -1;
    this.nextMonth = parseInt(this.currentMonth)+1;
    this.goToMonth(this.nextMonth);
  },
  goToMonth : function(monthId){	
     applicationManager.getPresentationUtility().showLoadingScreen();
     var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
     accountMod.presentationController.fetchMonthPFMData(monthId,this.monthFetchSuccess,this.monthFetchFailure);
  },
  monthFetchSuccess : function(response){
    if(response.length>0){
    var navManager = applicationManager.getNavigationManager();
   	navManager.setCustomInfo("frmDashboardPFMPie",response);
    if(this.prevMonth==-1){
      this.currentMonth++;
    }
    else if(this.nextMonth == -1){
      this.currentMonth--;
    }
     this.mapDataToChart();

    }
  },
  monthFetchFailure : function(response){
    alert("Something went wrong");
  },
   onClickFlxMore : function(){
     var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
     accountMod.presentationController.commonFunctionForNavigation("frmMenu");
   },
   postShow: function(){

  },
  initActions: function () {
    var scope = this;
    var deviceUtilManager = applicationManager.getDeviceUtilManager();
    this.view.flxChartSizeToggle.onClick = this.onTouchEndChartSizeToggle;
    this.onSwipeFlxDashboardHeaderGestureRecog();  
    this.view.flxChartSizeToggle1.onClick = this.onTouchEndChartSizeToggle1;
  },
  viewTransactions : function(){
    try{
      			applicationManager.getPresentationUtility().showLoadingScreen();
      			this.currentTransactions = 0;
                this.totalTransactions = this.CATEGORY_COUNT;
                for (i = 1; i <= this.CATEGORY_COUNT; i++) {
                    this.fetchTransactions(this.currentMonth, i);
                }
            }
        catch (exception) {
            //replace
        }
    },


    /**
     * Description
     * @method fetchTransactions
     * @param {} monthId
     * @param {} categoryId
     * @return 
     */
    fetchTransactions: function(monthId, categoryId) {
        try {
            this.transactions = [];
          	var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
            var inputParams = {
                "monthId": monthId + "",
                "categoryId": categoryId + ""
            };
			accountMod.presentationController.getPFMTransactions(inputParams, this.fetchTransactionsSuccess.bind(this), this.fetchTransactionsFailure.bind(this));
        } catch (exception) {
            //replace
        }
    },
    /**
     * Description
     * @method fetchTransactionsSuccess
     * @param {} response
     * @return 
     */
    fetchTransactionsSuccess: function(response) {
        try {
            this.currentTransactions++;
            Array.prototype.push.apply(this.transactions, response);
            if (this.currentTransactions === this.totalTransactions) {
                var navManager = applicationManager.getNavigationManager();
                navManager.setCustomInfo("frmPFMCategorisedTransactions", this.transactions);
                var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
     		accountMod.presentationController.commonFunctionForNavigation("frmPFMCategorisedTransactions");
            }
        } catch (exception) {
            //replace
        }
    },
    /**
     * Description
     * @method fetchTransactionsFailure
     * @param {} response
     * @return 
     */
  fetchTransactionsFailure: function(response) {
    try {
      this.currentTransactions++;
    } catch (exception) {
      //replace
    }
    // alert("Failure" + JSON.stringify(response));
  },
  onScrollingDashboard: function(){
    //        if(this.view.flxSuggestedOffers.isVisible === true){
    //            return;
    //        }
    //        if(this.view.flxSpendingBudget.isVisible === true){
    //            return;
    //        }
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
   pageIndicatorHighlight : function(){
    for (let index = 1; index <= this.view.flxPageIndicators.widgets().length; index++) {
        this.view["flxPageIndicator"+index].skin="sknFlxPageIndicatorUnselected";
    }
    var scrollX=this.view.flxDummyHorizontalScroll.contentOffsetMeasured.x;
    var screenWidth = kony.os.deviceInfo().screenWidth;
    var chartNum=Math.round(scrollX/screenWidth)+1;
    this.view["flxPageIndicator"+chartNum].skin="sknFlxPageIndicatorSelected";
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
  
   },
   navigateToPFM : function(){
     var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
     accountMod.presentationController.fetchPFMDetails(); 
   },
    adsPreshow : function(){
    if(!this.adsHided){
            this.resetAdsUI();
            var navManager = applicationManager.getNavigationManager();
            var formData = navManager.getCustomInfo("frmDashboard");
            if (formData.inFeedAdData) {
              if(formData.inFeedAdData.length!==0)
                {
                  this.inFeedAdData = formData.inFeedAdData;
                  this.bindAdData();
                }
              else
                {
                  this.hideAds();
                }
            }
            else{
              this.hideAds();
            }
      } 
  },
  bindAdData : function(){
    var inFeedAdData = this.inFeedAdData;
    this.numOfAds = inFeedAdData.length;
    var param;
    var date = new Date();
    var deviceUtilManager = applicationManager.getDeviceUtilManager();
    for(var j = 1; j <= this.numOfAds; j++)
    {
      param=date.getTime();
      this.view["flxAd"+j].left="0dp";
      this.view["flxAd"+j].setVisibility(false);
      var imgUrl =  deviceUtilManager.getImageURLBasedOnDeviceType(inFeedAdData[j-1].imageURL);
      this.view["imgAd"+j].src = imgUrl+"?Param="+param;
    }
  },
  resetAdsUI :function(){
    this.currAdFlex = 1;
    this.imageObjArray = [];
	this.imageDownloadFailureCount = 0;
    this.xOffset = 0;
    this.isSwipeDone = false;
    this.isTapDone = false;
    this.removeGestureRecognisers();
    this.view.flxScrollContainerAds.setContentOffset({
    x: this.xOffset,
    y: 0
  }, true);
        this.view.flxLoadingIndicator.setVisibility(true);
        this.view.imgLoadingIndicator.src = "loadermedium.gif";
        this.view.flxAdInfo.setVisibility(false);
        for(var i=1;i<=5;i++)
          {
            this.view["flxAd"+i].setVisibility(false);
            this.view["flxProgressButton"+i].setVisibility(false);
          }
        this.view.flxProgressBar.forceLayout();
        this.view.flxProgressBar.setVisibility(false);
  },
  onAdDownloadComplete : function(issuccess,adNumber){
     if(issuccess)
     {
       var i=this.imageObjArray.length;
       this.alignFlexInScrollContainer(i+1,adNumber);
       if(i===0)
       {
         this.setGestureRecogniser();
         this.setDataForAd(adNumber);
         var loggerManager = applicationManager.getLoggerManager();
    	 loggerManager.setCustomMetrics(this,true,"#InfeedAds Displayed");        
       }
       this.imageObjArray[i] = adNumber;
     }    
   else
   {
     this.imageDownloadFailureCount++;
     if(this.imageDownloadFailureCount === this.numOfAds)
     {
       var logger = applicationManager.getLoggerManager();
       logger.log("####All Infeed Ad's download failed\n####Therefore Hiding Them");
       this.onAllAdsDownloadFailure();
     }
   }
  },
  removeGestureRecognisers : function()
  {
    if(this.gestIDs.length!==0)
    {
      var  swipeGestureID = this.gestIDs[0];
      var  tapGestureID = this.gestIDs[1];
      this.view.flxScrollContainerAds.removeGestureRecognizer(swipeGestureID);
      this.view.flxScrollContainerAds.removeGestureRecognizer(tapGestureID);
      this.gestIDs = [];
    }
  },
  setGestureRecogniser : function(){
      if(this.gestIDs.length === 0)
    {
      var swipeGestID = this.view.flxScrollContainerAds.setGestureRecognizer(2, {
        fingers: 1,
        swipedistance: 20,
        swipevelocity: 60
      }, this.onAdSwipe);
      var tapGestID = this.view.flxScrollContainerAds.setGestureRecognizer(1, {
        fingers: 1,
        taps:1
      }, this.onAdTap);
      this.gestIDs[0]=swipeGestID;
      this.gestIDs[1]=tapGestID;
    }
    this.view.rtxDetails.onClick = this.onAdTap;
  },
 onAllAdsDownloadFailure : function(){
   this.view.imgLoadingIndicator.src="addownloadfailed.png";
 },
 alignFlexInScrollContainer : function(position,flxNumber)
 {
   var deviceUtilManager = applicationManager.getDeviceUtilManager();
   if(position === 1)
   {
     this.view.flxProgressBar.setVisibility(true);
     this.view["flxAd"+flxNumber].setVisibility(true);
     this.view.flxLoadingIndicator.setVisibility(false);
   }
   else
   {
     var leftVal = (position-1)*parseInt(deviceUtilManager.getDeviceInfo().screenWidth);
     this.view["flxAd"+flxNumber].left = leftVal+"dp";
     this.view["flxAd"+flxNumber].setVisibility(true);
   }
   var noOfDownloadedAds = position;
   if(noOfDownloadedAds>1)
   {
     if(noOfDownloadedAds === 2)
     {
       this.view.flxProgressButton1.setVisibility(true);
       this.view.flxProgressButton2.setVisibility(true);
       this.view.flxProgressButton1.left="46%";
       this.view.flxProgressButton1.skin = "sknflxADADADRadius100px";
       this.view.flxProgressButton2.skin = "sknflxE3E3E3Radius100px";
     }
     else if(noOfDownloadedAds === 3)
     {
       this.view.flxProgressButton3.setVisibility(true);
       this.view.flxProgressButton3.skin = "sknflxE3E3E3Radius100px";
       this.view.flxProgressButton1.left="43.5%";
     }
     else if(noOfDownloadedAds === 4)
     {
       this.view.flxProgressButton4.setVisibility(true);
       this.view.flxProgressButton4.skin = "sknflxE3E3E3Radius100px";
       this.view.flxProgressButton1.left="41%";
     }
     else
     {
       this.view.flxProgressButton5.setVisibility(true);
       this.view.flxProgressButton5.skin = "sknflxE3E3E3Radius100px";
       this.view.flxProgressButton1.left="38%";
     }
     this.view.flxProgressBar.forceLayout();
   }
 },
 setDataForAd : function(adNumber){
   var adData = this.inFeedAdData[adNumber-1];
   this.view.lblHeading.text = adData.adTitle;
   this.view.rtxDetails.text = adData.description;
   this.view.flxAdInfo.setVisibility(true);
   this.view.flxAdInfo.forceLayout();
   var loggerManager = applicationManager.getLoggerManager();
   loggerManager.setCustomMetrics(this,true,"#InfeedAd"+adNumber+" Displayed");
 },
 onAdSwipe :function(widget, gestureInfo, context){
  var downloadedAdCount = this.imageObjArray.length;
  var xVal = this.xOffset;
  var scWidth = applicationManager.getDeviceUtilManager().getDeviceInfo().screenWidth;
  var isThereChange = false;
  if(!this.isSwipeDone)
      {
         var loggerManager = applicationManager.getLoggerManager();
   		 loggerManager.setCustomMetrics(this,true,"#InfeedAds Swiped");
         this.isSwipeDone = true;
      }
  if (gestureInfo.swipeDirection === 1) {
    if (this.currAdFlex >= 1 && this.currAdFlex < downloadedAdCount)
    {
      isThereChange = true;
      xVal = xVal + scWidth;
      this.currAdFlex++;
    }
  } else if (gestureInfo.swipeDirection === 2) {
    if (this.currAdFlex > 1 && this.currAdFlex <= downloadedAdCount) {
      isThereChange = true;
      xVal = xVal - scWidth;  
      this.currAdFlex--;
    } 
  }
  if(isThereChange)
    {
      this.view.flxScrollContainerAds.setContentOffset({
        x: xVal,
        y: 0
      }, true);
      var adNumber = this.imageObjArray[this.currAdFlex-1];
      this.setDataForAd(adNumber);
      for (var j = 1; j <= downloadedAdCount ; j++) {
        if (j === this.currAdFlex){
          this.view["flxProgressButton" + j].skin = "sknflxADADADRadius100px";
        }
        else{
          this.view["flxProgressButton" + j].skin = "sknflxE3E3E3Radius100px";
        }
      }
      this.xOffset = xVal;
      this.view.flxProgressBar.forceLayout();
      this.view.flxScrollContainerAds.forceLayout();
    }
 },
 onAdTap : function(){
   var adNumber = this.imageObjArray[this.currAdFlex-1];
   var adData = this.inFeedAdData[adNumber-1];
   var navUrl = adData.navigationURL;
   kony.application.openURL(navUrl);
   var navId = adData.navigationId;
   var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
   accountMod.presentationController.sendDmResponseForInfeedAds(navId);
   var loggerManager = applicationManager.getLoggerManager();
   if(!this.isTapDone)
      {
          loggerManager.setCustomMetrics(this,true,"#InfeedAds Tapped");
     	  this.isTapDone = true;
      }
   loggerManager.setCustomMetrics(this,true,"#InfeedAd"+adNumber+" Image Tapped");
 },
  hideAds : function(){
    this.adsHided = true;
    this.view.flxSuggestedOffers.setVisibility(false);
  },

  gotoIntermediateAccountsScreen : function() {
    try {
      kony.print("gotoIntermediateAccountsScreen");

      var selectedItem = this.view.segAccounts.selectedItems[0];
      var navManager = applicationManager.getNavigationManager();
      var infoFrmAccountDetails = {
        selectedAccountData : null,
        selectedAccountInfoFromDashboard : null,
        selectedAccountIdFromDashboard : null,
        allAccountsDetails : [],
        postedTransaction : []
      };
      infoFrmAccountDetails["selectedAccountIdFromDashboard"] = selectedItem.hAccountId;
      infoFrmAccountDetails["selectedAccountInfoFromDashboard"] = selectedItem;
      navManager.setCustomInfo("frmAccountDetails", infoFrmAccountDetails);
      applicationManager.getPresentationUtility().showLoadingScreen();

      this.callAccountDetail("frmDashboard",infoFrmAccountDetails);
    }
    catch(err){
      applicationManager.getPresentationUtility().dismissLoadingScreen();
      throw GlobalExceptionHandler.addMessageAndActionForException(err, "kony.error.LoadingFormFailed", GlobalExceptionHandler.ActionConstants.ALERT, "segTransactions.onRowClick");
    }
  },

  /*
  @Purpose To go to Products Details Page
  @param Entry point from where user wants to navigate to Account Details Page
  */
  callAccountDetail: function(entryPoint,pInfoFrmAccountDetails){
    var accountModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule"); 
    accountModule.presentationController.showAccountDetailView(entryPoint,pInfoFrmAccountDetails);
  },
  
  bindDashboardError: function(err){
    applicationManager.getDataProcessorUtility().showToastMessageError(this,err);
  },
  
  
  /*-----------------------------------------------------------------------------------

  Name: 	onAddBeneficiary
  Purpose: 	navigates to add beneficiary screen
  Author: 	Bipin
  Date: 	24/10/2018
  Input:	
  Return: 	

  ------------------------------------------------------------------------------------*/  
  onAddBeneficiary : function(){
    kony.print(" frmAHBBenTypes onClickOfNext ");
    var navManager = applicationManager.getNavigationManager();
    var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
    transferModule.presentationController.resetBeneficiaryData();
    navManager.navigateTo("frmEnterBenAccNo");    
  },
  
 /**
     * Description: It shows the Menu options as footer for iphone where as hides the same for android
     * @param Nothing
     * @return Nothing
     */
  showMenu: function(){
     if (kony.os.deviceInfo().name === "android") {
       this.view.flxDummyHorizontalScroll.height = "88%";
//       this.view.flxMenu.setVisibility(false);
//       this.view.flxTitle.setVisibility(true);
     }
    else if ((kony.os.deviceInfo().name === "iPhone") ||(kony.os.deviceInfo().name === "iPad")){
      this.view.flxDummyHorizontalScroll.height = "100%";
//      this.view.flxMenu.setVisibility(true);
//        this.view.flxTitle.setVisibility(false);
    }
    this.view.flxMenu.setVisibility(true);
    //  this.view.flxTitle.setVisibility(false);
  },


  /*-----------------------------------------------------------------------------------

  Name: 	setDonutChartData
  Purpose: 	sets the required data for the donut chart 
  Author: 	Fariha
  Date: 	24/10/2018
  Input:	pData-object conatining the required data to populate donut chart
  Return: 	

  ------------------------------------------------------------------------------------*/  

  setDonutChartData:function(pData){
    //currentAccountPercent:0,savingsAndDepositPercent:0,cardsPercent:0 
    this.view.donutchart.enableLegend = false;
    //this.view.donutchart.opacity={1.0}
    var cards  = this.renderDonutChartValue(pData.cardsPercent);
    var current  = this.renderDonutChartValue(pData.currentAccountPercent);
    var savings  = this.renderDonutChartValue(pData.savingsAndDepositPercent);
    var chartArray = [];

    if(cards){
      chartArray[chartArray.length]={
        "colorCode": "#FFFFFF",
        "label": "Data2",
        "value": cards,
        "alpha":"100"} 
    }
    if(savings){
      chartArray[chartArray.length]={
        "colorCode": "#F7A47D",
        "label": "Data2",
        "value": savings,
        "alpha":"100"
      }
    }
    if(current){
      chartArray[chartArray.length]={
        "colorCode": "#D85213",
        "label": "Data4",
        "value": current,
        "alpha":"100"
      }
    }

    this.view.flxDonut.donutchart.chartData = {
      "data": chartArray
    };

  },
  /****
  @Purpose: assigning the chart data values 
  *****/
  renderDonutChartValue :function (pTypeData)
        {
            var amount;
            if (pTypeData > 0  && pTypeData < 1) { // as the minimum required value to be plotted on graph is 1
            amount = 1;
            }
        else if(pTypeData<0){
        amount = 0;
        }
            else
            {
              amount = Math.round(pTypeData);

            }
            return amount;
    	},

  /*-----------------------------------------------------------------------------------

  Name: 	setInitDashboardView
  Purpose: 	sets Dashboard initial view
  Author: 	Fariha
  Date: 	24/10/2018
  Input:	
  Return: 	

  ------------------------------------------------------------------------------------*/  

  setInitDashboardView:function () {
    var deviceUtilManager = applicationManager.getDeviceUtilManager();
    var scope = this;
    scope.view.flxDashboard.setContentOffset({
      y: "0dp"
    });
    //         

    scope.view.flxDummyHorizontalScroll.setVisibility(true);

    var newHeight = kony.os.deviceInfo().screenHeight;
    //alert("newHeight"+newHeight);
    
    //scope.view.flxGradient.height = newHeight + 25 + "dp";
    //var segMaxHeight=newHeight-399;// -260 -1 -42 - 1 -35 -60
    if (kony.os.deviceInfo().name === "android") {
          newHeight = newHeight-56; //- 56;
        }else{
          newHeight = newHeight-76//for iphone
        }
    var iphoneX = deviceUtilManager.isIphoneX();
   if(iphoneX)
      {
        newHeight = newHeight - 24 - 36;
      }
    newHeight = newHeight -60  - 35 + "dp";

    scope.view.imgChartSizeToggle.src = "scrolluparrows.png";
    //scope.view.flxDashboardHeader.height = newHeight;
    scope.view.flxDummyHorizontalScroll.height = newHeight;
    
    scope.view.flxDashboard.zIndex = 3;

    kony.print("newHeight preshow"+newHeight);


    scope.view.forceLayout();
   

  },
  
  /*-----------------------------------------------------------------------------------

  Name: 	onTouchEndChartSizeToggle
  Purpose: 	setting alternate dashboard view on touch of flxChartSizeToggle
  Author: 	Fariha
  Date: 	4/12/2018
  Input:	
  Return: 	

  ------------------------------------------------------------------------------------*/  

  onTouchEndChartSizeToggle:function () {
    var scope = this;
    var deviceUtilManager = applicationManager.getDeviceUtilManager();
    scope.view.flxChartSizeToggle.setEnabled(false);
    var newHeight = kony.os.deviceInfo().screenHeight; //scope.view.flxBGDummy.frame.height;
    scope.view.flxDashboard.setContentOffset({y:"0dp"});
    if (scope.view.imgChartSizeToggle.src == "scrolldownarrows.png") {
      scope.view.flxDummyHorizontalScroll.setVisibility(true);

      if (kony.os.deviceInfo().name === "android") {
        newHeight = newHeight-56; //- 56;
      }else{
        newHeight = newHeight-76;//for iphone
      }
      var iphoneX = deviceUtilManager.isIphoneX();

      if(iphoneX)
      {
        newHeight = newHeight - 24 -36;
      }


     
      newHeight = newHeight -60 -35+ "dp"; // bottm menu and top header + toggle btton
      scope.view.imgChartSizeToggle.src = "scrolluparrows.png";
      
      scope.view.flxDummyHorizontalScroll.animate(
        kony.ui.createAnimation({
          0:{height:"1dp","stepConfig":{}},
          100:{height:newHeight,"stepConfig":{}}}),
        {fillMode:kony.anim.FILL_MODE_FORWARDS,duration:.3},
        {animationEnd: function() {
          scope.view.flxDashboard.enableScrolling=false;
          scope.view.flxDashboard.zIndex=3;
        }});
    } else {
      scope.view.imgChartSizeToggle.src = "scrolldownarrows.png";
      scope.view.flxDashboard.zIndex=6;
      
      if (kony.os.deviceInfo().name === "android") {
        newHeight = newHeight-56; //- 56;
      }else{
        newHeight = newHeight-76;//for iphone
      }
      var iphoneX = deviceUtilManager.isIphoneX();

      if(iphoneX)
      {
        newHeight = newHeight - 24 -36;
      }
      newHeight = newHeight -60  -35+ "dp"; // bottm menu and top header + toggle btton
      scope.view.flxDummyHorizontalScroll.animate(
        kony.ui.createAnimation({
          0:{height:scope.view.flxDummyHorizontalScroll.height+"dp","stepConfig":{}},
          100:{height:"1dp","stepConfig":{}}}),
        {fillMode:kony.anim.FILL_MODE_FORWARDS,duration:.3},
        {animationEnd: function() {
          // scope.view.flxGradient.height = newHeight;
          //scope.view.flxDashboardHeader.height = newHeight;
          scope.view.flxBarSegment.setVisibility(false);
          scope.view.flxSummarySegment.setVisibility(false);
          scope.view.flxDonutSegment.setVisibility(false);
          scope.view.flxDashboard.enableScrolling=false;
        }});

      scope.view.flxDummyHorizontalScroll.isVisible = false;
    }
    scope.view.flxDummyHorizontalScroll.enableScrolling=true;

    scope.view.flxChartSizeToggle.setEnabled(true);
  },

  /*-----------------------------------------------------------------------------------

  Name: 	onTouchEndChartSizeToggle1
  Purpose: 	setting  dashboard view on touch of flxChartSizeToggle1
  Author: 	Fariha
  Date: 	4/12/2018
  Input:	
  Return: 	

  ------------------------------------------------------------------------------------*/  
  onTouchEndChartSizeToggle1:function () {
    //alert("test");
    var scope = this;
    var deviceUtilManager = applicationManager.getDeviceUtilManager();
    scope.view.flxChartSizeToggle.setEnabled(false);
    var newHeight = kony.os.deviceInfo().screenHeight; //scope.view.flxBGDummy.frame.height;
    scope.view.flxDashboard.setContentOffset({y:"0dp"});
    if (scope.view.imgChartSizeToggle.src == "scrolldownarrows.png") {
      scope.view.flxDummyHorizontalScroll.setVisibility(true);

      if (kony.os.deviceInfo().name === "android") {
        newHeight = newHeight-56; //- 56;
      }else{
        newHeight = newHeight-76;//for iphone
      }
      var iphoneX = deviceUtilManager.isIphoneX();

      if(iphoneX)
      {
        newHeight = newHeight - 24 -36;
      }
      newHeight = newHeight -60 -35+ "dp"; // bottm menu and top header + toggle btton
      scope.view.imgChartSizeToggle.src = "scrolluparrows.png";
      scope.view.flxDummyHorizontalScroll.animate(
        kony.ui.createAnimation({
          0:{height:"1dp","stepConfig":{}},
          100:{height:newHeight,"stepConfig":{}}}),
        {fillMode:kony.anim.FILL_MODE_FORWARDS,duration:.3},
        {animationEnd: function() {
          scope.view.flxDashboard.enableScrolling=false;
          scope.view.flxDashboard.zIndex=3;
          scope.view.flxDonut.zIndex = 90;
          scope.view.flxGraph.forceLayout();
        }});
    }

    scope.view.flxChartSizeToggle.setEnabled(true);
  },


/*-----------------------------------------------------------------------------------

  Name: 	onSwipeFlxDashboardHeaderGestureRecog
  Purpose: 	to create a swipe gesture on flxDashboardHeader
  Author: 	Fariha
  Date: 	4/12/2018
  Input:	
  Return: 	

  ------------------------------------------------------------------------------------*/  

  onSwipeFlxDashboardHeaderGestureRecog:function(){
    //Setting Gesture configuration.
    
    this.view.flxDashboardHeader.setGestureRecognizer(2, { //swipe specifications
      fingers: 1,
      swipedistance: 20,
      swipevelocity: 60
    }, this.onSwipeFlxDashboardHeader);
    this.view.flxChartSizeToggle1.setGestureRecognizer(2,{ //swipe specifications
      fingers: 1,
      swipedistance: 5,
      swipevelocity: 60
    },this.onSwipeFlxDashboardHeader);
  },

  /*-----------------------------------------------------------------------------------

  Name: 	onSwipeFlxDashboardHeader
  Purpose: 	the callback when a swipe is recognised on flxDashboardHeader
  Author: 	Fariha
  Date: 	4/12/2018
  Input:	
  Return: 	

  ------------------------------------------------------------------------------------*/  
  onSwipeFlxDashboardHeader:function(widget, gestureInfo, context){
    kony.print("swipeDirection"+gestureInfo.swipeDirection);
    if(kony.os.deviceInfo().name === "iPhone"){
      if(gestureInfo.swipeDirection === 3){
      	this.onSwipeDashboardHeaderView();
      }else if(gestureInfo.swipeDirection === 4){
         this.onTouchEndChartSizeToggle1();
      }
    }
    else if(kony.os.deviceInfo().name === "android"){ 
      if(gestureInfo.swipeDirection === 3 || gestureInfo.swipeDirection === 2) {
      this.onSwipeDashboardHeaderView();
      
    }else if(gestureInfo.swipeDirection === 4){
      
        this.onTouchEndChartSizeToggle1();
      }
    }
    
  },
  
  /*-----------------------------------------------------------------------------------

  Name: 	onSwipeDashboardHeaderView
  Purpose: 	The functionality to be performed on swipe on flxDashboardHeader
  Author: 	Fariha
  Date: 	4/12/2018
  Input:	
  Return: 	

  ------------------------------------------------------------------------------------*/  

  onSwipeDashboardHeaderView:function(){
    var scope = this;
    var deviceUtilManager = applicationManager.getDeviceUtilManager();
    scope.view.flxChartSizeToggle.setEnabled(false);
    var newHeight = kony.os.deviceInfo().screenHeight; //scope.view.flxBGDummy.frame.height;
    scope.view.flxDashboard.setContentOffset({y:"0dp"});
    if (scope.view.imgChartSizeToggle.src == "scrolluparrows.png") {
      scope.view.imgChartSizeToggle.src = "scrolldownarrows.png";
      scope.view.flxDashboard.zIndex=6;

      if (kony.os.deviceInfo().name === "android") {
        newHeight = newHeight-56; //- 56;
      }else{
        newHeight = newHeight-76;//for iphone
      }
      var iphoneX = deviceUtilManager.isIphoneX();

      if(iphoneX)
      {
        newHeight = newHeight - 24 -36;
      }
      newHeight = newHeight -60  -35+ "dp"; // bottm menu and top header + toggle btton
      scope.view.flxDummyHorizontalScroll.animate(
        kony.ui.createAnimation({
          0:{height:scope.view.flxDummyHorizontalScroll.height+"dp","stepConfig":{}},
          100:{height:"1dp","stepConfig":{}}}),
        {fillMode:kony.anim.FILL_MODE_FORWARDS,duration:.3},
        {animationEnd: function() {
          // scope.view.flxGradient.height = newHeight;
          //scope.view.flxDashboardHeader.height = newHeight;
          scope.view.flxBarSegment.setVisibility(false);
          scope.view.flxSummarySegment.setVisibility(false);
          scope.view.flxDonutSegment.setVisibility(false);
          scope.view.flxDashboard.enableScrolling=false;
        }});

      scope.view.flxDummyHorizontalScroll.isVisible = false;
      
    }	
    scope.view.flxDummyHorizontalScroll.enableScrolling=true;
    scope.view.flxChartSizeToggle.setEnabled(true);

  },

  onDevivceBackClick : function(){
    kony.print(" dashboard onDevivceBackClick ");
  },
  setMonthLabelText: function(month) {
            var currMonth = {
                "01": "Jan",
                "02": "Feb",
                "03": "Mar",
                "04": "Apr",
                "05": "May",
                "06": "Jun",
                "07": "Jul",
                "08": "Aug",
                "09": "Sep",
                "10": "Oct",
                "11": "Nov",
                "12": "Dec"
            };
            return currMonth[month];
        },

});