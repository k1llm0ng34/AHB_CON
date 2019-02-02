define({
    scope_BillPayPresentationController: this,
    BillPay_PresentationController: function() {

        scope_BillPayPresentationController.payeesList = [];
        //Payee data 
        var configManager = applicationManager.getConfigurationManager();
        scope_BillPayPresentationController.billPayType = configManager.constants.AHB_BILLPAY_MULTI;
        /// request for Payment
        // consumerNumber
        // consumerPin (optional)
        // operatorCode
        // serviceCode
        // paymentMode (AC/CC)
        // fromAccountNumber
        // fromCurrency
        // amountDue (same as we get from utility inquiry service)
        // amountPaid
        // referenceNumber (same as we get from utility inquiry service)
        scope_BillPayPresentationController.payeeData = {
            "consumerNumber": "",
            "nickName": "",
            "operatorName": "",
            "operatorCode": "",
            "serviceCode": "",
            "serviceType": "",

            "consumerPin": "",
            "payeeName": "",
            "isPinRequired": "",
            "otp": "",
            "referenceNumber": "",
            "id": "",
            "amountDue": "",
            "amountToBePaid": "",
            "hasDues": "",
          	"hasSubService":""
        };
        scope_BillPayPresentationController.payeeUtilityAmountData = {
            "amountMax": "",
            "amount": "",
            "amountMin": "",
            "billDate": ""
        };

        //servive Response
        scope_BillPayPresentationController.paymentOperatorList = [];

        // Exchange Rate
        scope_BillPayPresentationController.paymentExchangeRates = [];
        scope_BillPayPresentationController.paymentList = [];

        //from Accounts
        scope_BillPayPresentationController.allAccountsData = [];
        scope_BillPayPresentationController.selectedFromAccount = "";
        scope_BillPayPresentationController.selectedFromAccountCurrency = "";
        scope_BillPayPresentationController.paymentMode = "";

        scope_BillPayPresentationController.paymentAmount = "";
      	
      	scope_BillPayPresentationController.hasSubServiceObject = {};


        kony.mvc.Presentation.BasePresenter.call(this);
        this.asyncManager = new AsyncManager();
    },

    /*-----------------------------------------------------------------------------------

    Name: 	setAllPayeeData
    Purpose:  This function is to set All the setPayeeData
    Author: 	Bipin
    Date: 	20/11/2018
    Input: 	obj -  {
        "consumerNumber":"",
        "nickName":"",
        "operatorName":"",
        "operatorCode":"",
        "serviceCode":"",
        "serviceType":"",
        "consumerPin":"", 
        "payeeName":"",  
        "otp":"",
        referenceNumber:"" ,
        amountDue:""
        };
    Return: NA	

    ------------------------------------------------------------------------------------*/
    setAllPayeeData: function(payeeData) {
        kony.print("setPayeeData payeeData" + JSON.stringify(payeeData));
        var payeeDataObj = {
            "consumerNumber": payeeData.consumerNumber,
            "nickName": payeeData.nickName,
            "operatorName": payeeData.operatorName,
            "operatorCode": payeeData.operatorCode,
            "serviceCode": payeeData.serviceCode,
            "serviceType": payeeData.serviceType,

            "consumerPin": payeeData.consumerPin,
            "payeeName": payeeData.payeeName,
            "isPinRequired": payeeData.isPinRequired,
            "otp": payeeData.otp,
            "id": payeeData.id,
            "referenceNumber": payeeData.referenceNumber,
            "amountDue": payeeData.amount,
            "hasDues": payeeData.hasDues,
           	"hasSubService":payeeData.hasSubService
        };
        scope_BillPayPresentationController.payeeData = payeeDataObj;
    },
    getAllPayeeData: function() {
        return scope_BillPayPresentationController.payeeData;
    },

    resetPayeeData: function() {
        scope_BillPayPresentationController.payeeData = {
            "consumerNumber": "",
            "nickName": "",
            "operatorName": "",
            "operatorCode": "",
            "serviceCode": "",
            "serviceType": "",

            "consumerPin": "",
            "payeeName": "",
            "isPinRequired": "",
            "otp": "",
            "referenceNumber": "",
            "id": "",
            "amountDue": "",
            "amountToBePaid": "",
            "hasDues": "",
        };
    },

    resetAllPaymentData: function() {
        scope_BillPayPresentationController.payeesList = [];
        //Payee data 
        var configManager = applicationManager.getConfigurationManager();

        scope_BillPayPresentationController.billPayType = configManager.constants.AHB_BILLPAY_MULTI;
        this.resetPayeeData();
        //servive Response
        scope_BillPayPresentationController.paymentOperatorList = [];

        // Exchange Rate
        scope_BillPayPresentationController.paymentExchangeRates = [];

        scope_BillPayPresentationController.paymentList = [];

        scope_BillPayPresentationController.payeeUtilityAmountData = {
            "amountMax": "",
            "amount": "",
            "amountMin": "",
            "billDate": ""
        };

        scope_BillPayPresentationController.paymentAmount = "";

        this.resetFromAccountData();

    },

    resetFromAccountData: function() {
        scope_BillPayPresentationController.allAccountsData = [];
        scope_BillPayPresentationController.selectedFromAccount = "";
        scope_BillPayPresentationController.selectedFromAccountCurrency = "";

    },

    setPayeeHasDues: function(hasDues) {
        kony.print("setAmountDue amountDue" + JSON.stringify(hasDues));
        scope_BillPayPresentationController.payeeData.hasDues = hasDues;
    },
    getPayeeHasDues: function() {
        return scope_BillPayPresentationController.payeeData.hasDues;
    },

    setAmountDue: function(amountDue) {
        kony.print("setAmountDue amountDue" + JSON.stringify(amountDue));
        scope_BillPayPresentationController.payeeData.amountDue = amountDue;
    },
    getAmountDue: function() {
        return scope_BillPayPresentationController.payeeData.amountDue;
    },

    setUtilityAmountData: function(payeeUtilityAmountData) {
        kony.print("setUtilityAmountData payeeData" + JSON.stringify(payeeUtilityAmountData));
        var utilityAmountData = {
            "amountMax": payeeUtilityAmountData.amountMax,
            "amount": payeeUtilityAmountData.amount,
            "amountMin": payeeUtilityAmountData.amountMin,
            "billDate": payeeUtilityAmountData.billDate
        };
        scope_BillPayPresentationController.payeeUtilityAmountData = utilityAmountData;
    },

    getUtilityAmountData: function() {
        return scope_BillPayPresentationController.payeeUtilityAmountData;
    },

    setPaymentMode: function(paymentMode) {
        kony.print("setPaymentMode paymentMode" + JSON.stringify(paymentMode));
        scope_BillPayPresentationController.paymentMode = paymentMode;
    },
    getPaymentMode: function() {
        return scope_BillPayPresentationController.paymentMode;
    },
    setAmountToBePaid: function(amountToBePaid) {
        kony.print("setAmountToBePaid amountToBePaid" + JSON.stringify(amountToBePaid));
        scope_BillPayPresentationController.payeeData.amountToBePaid = amountToBePaid;
    },
    getAmountToBePaid: function() {
        return scope_BillPayPresentationController.payeeData.amountToBePaid;
    },
    setRefrenceNumber: function(referenceNumber) {
        kony.print("setRefrenceNumber referenceNumber" + JSON.stringify(referenceNumber));
        scope_BillPayPresentationController.payeeData.referenceNumber = referenceNumber;
    },
    getRefrenceNumber: function() {
        return scope_BillPayPresentationController.payeeData.referenceNumber;
    },

    setPaymentOperatorList: function(paymentOperatorList) {
        kony.print("setpaymentOperatorList payeeServiceResponse" + JSON.stringify(paymentOperatorList));
        scope_BillPayPresentationController.paymentOperatorList = paymentOperatorList;
    },
    getPaymentOperatorList: function() {
        return scope_BillPayPresentationController.paymentOperatorList;
    },

    setConsumerNumber: function(consumerNumber) {
        kony.print("setConsumerNumber consumerNumber" + JSON.stringify(consumerNumber));
        scope_BillPayPresentationController.payeeData.consumerNumber = consumerNumber;
    },
    getConsumerNumber: function() {
        return scope_BillPayPresentationController.payeeData.consumerNumber;
    },


    setPayeeNickName: function(nickName) {
        kony.print("setPayeeNickName nickName" + JSON.stringify(nickName));
        scope_BillPayPresentationController.payeeData.nickName = nickName;
    },
    getPayeeNickName: function() {
        return scope_BillPayPresentationController.payeeData.nickName;
    },

    setOperatorName: function(operatorName) {
        kony.print("setOperatorName operatorName" + JSON.stringify(operatorName));
        scope_BillPayPresentationController.payeeData.operatorName = operatorName;
    },
    getOperatorName: function() {
        return scope_BillPayPresentationController.payeeData.operatorName;
    },

    setOperatorCode: function(operatorCode) {
        kony.print("setOperatorCode operatorCode" + JSON.stringify(operatorCode));
        scope_BillPayPresentationController.payeeData.operatorCode = operatorCode;
    },
    getOperatorCode: function() {
        return scope_BillPayPresentationController.payeeData.operatorCode;
    },

    setServiceCode: function(serviceCode) {
        kony.print("setServiceCode serviceCode" + JSON.stringify(serviceCode));
        scope_BillPayPresentationController.payeeData.serviceCode = serviceCode;
    },
    getServiceCode: function() {
        return scope_BillPayPresentationController.payeeData.serviceCode;
    },

    setServiceType: function(serviceType) {
        kony.print("setServiceType serviceType" + JSON.stringify(serviceType));
        scope_BillPayPresentationController.payeeData.serviceType = serviceType;
    },
    getServiceType: function() {
        return scope_BillPayPresentationController.payeeData.serviceType;
    },

    setConsumerPin: function(consumerPin) {
        kony.print("setConsumerPin consumerPin" + JSON.stringify(consumerPin));
        scope_BillPayPresentationController.payeeData.consumerPin = consumerPin;
    },
    getConsumerPin: function() {
        return scope_BillPayPresentationController.payeeData.consumerPin;
    },

    setPayeeName: function(payeeName) {
        kony.print("setPayeeName payeeName" + JSON.stringify(payeeName));
        scope_BillPayPresentationController.payeeData.payeeName = payeeName;
    },
    getPayeeName: function() {
        return scope_BillPayPresentationController.payeeData.payeeName;
    },
    setBillPayType: function(BillPayType) {
        kony.print("BillPayType BillPayType" + JSON.stringify(BillPayType));
        scope_BillPayPresentationController.billPayType = BillPayType;
    },
    getBillPayType: function() {
        return scope_BillPayPresentationController.billPayType;
    },


    setPayeeOtp: function(otp) {
        kony.print("setPayeeOtp operatorCode" + JSON.stringify(otp));
        scope_BillPayPresentationController.payeeData.otp = otp;
    },
    getPayeeOtp: function() {
        return scope_BillPayPresentationController.payeeData.otp;
    },

    setPayeeId: function(id) {
        kony.print("setPayeeId id" + JSON.stringify(id));
        scope_BillPayPresentationController.payeeData.id = id;
    },
    getPayeeId: function() {
        return scope_BillPayPresentationController.payeeData.id;
    },



    setPaymentExchangeRates: function(paymentExchangeRates) {
        kony.print("setpaymentExchangeRates paymentExchangeRates" + JSON.stringify(paymentExchangeRates));
        scope_BillPayPresentationController.paymentExchangeRates = paymentExchangeRates;
    },
    getPaymentExchangeRates: function() {
        return scope_BillPayPresentationController.paymentExchangeRates;
    },

    ///For Multipayment and single payment to store list of selected Payment
    setPaymentList: function(paymentList) {
        kony.print("setPaymentList PaymentList" + JSON.stringify(paymentList));
        scope_BillPayPresentationController.paymentList = paymentList;
    },
    getPaymentList: function() {
        return scope_BillPayPresentationController.paymentList;
    },

    ///to store All dashboard Accounts data
    setAllAccountsData: function(allAccData) {
        kony.print("setPaymentList PaymentList" + JSON.stringify(allAccData));
        scope_BillPayPresentationController.allAccountsData = allAccData;
    },
    getAllAccountsData: function() {
        return scope_BillPayPresentationController.allAccountsData;
    },

    setPayeesList: function(pPayeesData) {
        var lPayeesData = pPayeesData;
        var lPayeesArray = lPayeesData.payees;
        scope_BillPayPresentationController.payeesList = lPayeesArray;
    },

    getPayeesList: function() {
        return scope_BillPayPresentationController.payeesList;
    },
    setSelectedFromAccount: function(selectedFromAccount) {
        scope_BillPayPresentationController.selectedFromAccount = selectedFromAccount;

    },

    getSelectedFromAccount: function() {
        return scope_BillPayPresentationController.selectedFromAccount;
    },

    setSelectedFromAccountCurrency: function(selectedFromAccountCurrency) {
        kony.print("setSelectedFromAccountCurrency selectedFromAccountCurrency" + JSON.stringify(selectedFromAccountCurrency));
        scope_BillPayPresentationController.selectedFromAccountCurrency = selectedFromAccountCurrency;
    },
    getSelectedFromAccountCurrency: function() {
        return scope_BillPayPresentationController.selectedFromAccountCurrency;
    },

    setBillAmountEntered: function(paymentAmount) {
        kony.print("setBillAmountEntered paymentAmount" + JSON.stringify(paymentAmount));
        scope_BillPayPresentationController.paymentAmount = paymentAmount;
    },
    getBillAmountEntered: function() {
        return scope_BillPayPresentationController.paymentAmount;
    },
  
    setHasSubServiceObject: function(hasSubServiceObject) {
      kony.print("setHasSubServiceObject hasSubServiceObject" + JSON.stringify(hasSubServiceObject));
      scope_BillPayPresentationController.hasSubServiceObject = hasSubServiceObject;
    },
    getHasSubServiceObject: function() {
      return scope_BillPayPresentationController.hasSubServiceObject;
    },


    /*
@Purpose Validate consumer number while adding a payee
@Input Consumer Number entered at the time of added a payee
@Output None
*/
    verifyConsumerNumber: function(consumerData) {
        kony.print("verifyConsumerNumber request " + JSON.stringify(consumerData));
        var billManager = applicationManager.getBillManager();
        applicationManager.getPresentationUtility().showLoadingScreen();
        billManager.verifyConsumerNumberAddPayee(consumerData, this.verifyConsumerNumberSuccess, this.verifyConsumerNumberError);
    },
    /*
@Purpose Success callback after Validating consumer number while adding a payee
@Input Success Response after validating consumer number
@Output None
*/

    verifyConsumerNumberSuccess: function(response) {
        kony.print("verifyConsumerNumberSuccess===" + JSON.stringify(response));
        var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        var formattedData = checkServiceResponseForErrorCode(response);
        if (formattedData.responseCode === "200") {
            //controller.authenticateAddPayee();
            billPayModule.presentationController.commonFunctionForNavigation("frmBillPayVerifyDetails");
        } else {
            var controller = applicationManager.getPresentationUtility().getController('frmBillPayEnterAccNo', true);
            controller.bindGenericError(formattedData.message);
        }
        applicationManager.getPresentationUtility().dismissLoadingScreen();

    },

    /*
@Purpose Success callback after Validating consumer number while adding a payee
@Input Success Response after validating consumer number
@Output None
*/

    verifyConsumerNumberError: function(error) {
        kony.print("verifyConsumerNumberError===" + JSON.stringify(error));
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var formattedResponse = checkServiceResponseForErrorCode(error);
        var controller = applicationManager.getPresentationUtility().getController('frmBillPayEnterAccNo', true);
        controller.bindGenericError(formattedResponse.message);

    },



    /*-----------------------------------------------------------------------------------

    Name: 	getFormattedPayeeList
    Purpose: 	Gives the formatted Payees list to be displayed on frmBillPayee
    Author: 	Fariha
    Date: 	24/10/2018
    Input:	pPayType - string
    Return: 	lPayeeProcessedData(Array)- contains the array to populate segment on frmBillPayee

    ------------------------------------------------------------------------------------*/

    getFormattedPayeeList: function(pPayType) {
        var lPayType = pPayType;
        var lPayeeProcessedData = [];
        var lPayeeData = this.getPayeesList();
        var configManager = applicationManager.getConfigurationManager();
        if (pPayType === configManager.constants.AHB_BILLPAY_MULTI) {
            for (var i = 0; i < lPayeeData.length; i++) {
                var lDue = lPayeeData[i].hasDues;
                var isSuccess = lPayeeData[i].isSuccess;
                lPayeeData[i]["imgTick"] = "checkboxunselectedorange.png";
                if (lDue === "true") {
                    if (isSuccess === "true") {
                        if (lPayeeData[i].amount > 0) {
                            var formattedAmt = appendCurrency(lPayeeData[i].amount, configManager.constants.AHB_UAE_CURRENCY);
                            lPayeeData[i]["lblAmount"] = formattedAmt
                            lPayeeProcessedData.push(lPayeeData[i]);
                        }

                    } else {
                        lPayeeData[i]["lblAmount"] = kony.i18n.getLocalizedString("kony.ahb.payments.AmountUnavailable");
                        lPayeeData[i].metainfo = {
                            clickable: false,
                        };
                        lPayeeData[i].metaInfo = {
                            clickable: false,
                        };
                        lPayeeData[i]["imgTick"] = {
                            isVisible: false
                        };
                       	lPayeeData[i]["imgTick"] = "transparentbox.png";
                        lPayeeProcessedData.push(lPayeeData[i]);
                    }
                }

            }

        } else {
            lPayeeProcessedData = lPayeeData
        }
        return lPayeeProcessedData;
    },
    /*-----------------------------------------------------------------------------------

  Name: 	fetchPayeeList
  Purpose:	invokes async service call for fetch payee list and fetch payment configuration
  Author: 	Bipin
  Date: 	21/11/2018
  Input:	NA
  Return: 	NA

  ------------------------------------------------------------------------------------*/
    fetchPayeeList: function() {
        kony.print("fetchPayeeList  fetchAllBillPayees and fetchConfiguration async call start ");
        applicationManager.getPresentationUtility().showLoadingScreen();
        this.asyncManager.initiateAsyncProcess(scope_BillPayPresentationController.numberOfAsyncForPayees);
        this.fetchAllBillPayees();
        this.fetchConfiguration();
    },
    /*-----------------------------------------------------------------------------------

  Name: 	fetchAllBillPayees
  Purpose: 	
  Author: 	Fariha
  Date: 	24/10/2018
  Input:	
  Return: 	

  ------------------------------------------------------------------------------------*/
    fetchAllBillPayees: function() {
        //applicationManager.getPresentationUtility().showLoadingScreen();
        kony.print("fetchAllBillPayees start");
        var recipientsManager = applicationManager.getRecipientsManager();
        var paramDetails = {
            isServiceRequired: "true"
        };
        recipientsManager.fetchBillPayees(paramDetails, this.fetchAllBillPayeesSCB, this.fetchAllBillPayeesECB);
    },
    /*-----------------------------------------------------------------------------------

     Name: 	fetchAllBillPayeesSCB
     Purpose: 
     Author: 	Fariha
     Date: 	24/10/2018
     Input:	
     Return: 	

     ------------------------------------------------------------------------------------*/
    fetchAllBillPayeesSCB: function(response) {
        kony.print("fetchAllBillPayeesSCB");
        kony.print("@@@@@ fetchAllBillPayeesSCB " + JSON.stringify(response));
        //applicationManager.getPresentationUtility().dismissLoadingScreen();
        var controller = applicationManager.getPresentationUtility().getController('frmBillPay', true);
        var formattedResponse = checkServiceResponseForErrorCode(response);
        var navManager = applicationManager.getNavigationManager();

        if (formattedResponse.responseCode === "200") {
            this.asyncManager.setSuccessStatus(0, response);
            this.setPayeesList(response);
            if (this.asyncManager.areAllservicesDone(this.numberOfAsyncForPayees)) {
                this.initiatePaymnentUI();
            }
        } else if (formattedResponse.responseCode === "AHB_1023") {
          kony.print("fetchBillPayeesListSCB response is AHB_1023 " + JSON.stringify(response));
          var payeeData ={
            payees:[]
          }
          this.asyncManager.setSuccessStatus(0, payeeData);
          this.setPayeesList(payeeData);
         if (this.asyncManager.areAllservicesDone(this.numberOfAsyncForPayees)) {
                this.initiatePaymnentUI();
         }
        } else if (formattedResponse.responseCode !== "AHB_1023") {
            kony.print(" fetchAllBillPayeesSCB  response is not 200" + JSON.stringify(response));
            controller.bindGenericError(formattedResponse.message);
        }

    },
    /*-----------------------------------------------------------------------------------

     Name: 	fetchAllBillPayeesECB
     Purpose: 	
     Author: 	Fariha
     Date: 	24/10/2018
     Input:	
     Return: 	

     ------------------------------------------------------------------------------------*/
    fetchAllBillPayeesECB: function(err) {
        kony.print("fetchAllBillPayeesECB");
        var formattedResponse = checkServiceResponseForErrorCode(err);
        this.navigateToBillPay();
        var controller = applicationManager.getPresentationUtility().getController('frmBillPay', true);
        controller.bindGenericError(formattedResponse.message);
    },

    /*-----------------------------------------------------------------------------------

     Name: 	fetchAllBillPayees
     Purpose: 	
     Author: 	B S Krishna Vantakala
     Date: 	28/10/2018
     Input:	
     Return: 	

     ------------------------------------------------------------------------------------*/
    fetchBillPayeesList: function() {
        //applicationManager.getPresentationUtility().showLoadingScreen();
        kony.print("fetchAllBillPayeesDetails start");
        var recipientsManager = applicationManager.getRecipientsManager();
        var paramDetails = {
            isServiceRequired: "false"
        };
        recipientsManager.fetchBillPayees(paramDetails, this.fetchBillPayeesListSCB, this.fetchBillPayeesListECB);
    },
    /*-----------------------------------------------------------------------------------

     Name: 	fetchAllBillPayeesSCB
     Purpose: 
     Author: 	B S Krishna Vantakala
     Date: 	28/11/2018
     Input:	
     Return: 	

     ------------------------------------------------------------------------------------*/
    fetchBillPayeesListSCB: function(response) {
        kony.print("fetchAllBillPayeesDetailsSCB");
        kony.print("@@@@@ fetchAllBillPayeesDetailsSCB " + JSON.stringify(response));
        //applicationManager.getPresentationUtility().dismissLoadingScreen();
        var controller = applicationManager.getPresentationUtility().getController('frmBillPayAllPayees', true);
        var formattedResponse = checkServiceResponseForErrorCode(response);
        var navManager = applicationManager.getNavigationManager();

        if (formattedResponse && formattedResponse.responseCode === "200") {
            //this.setPayeesList(response);
            controller.setSegData(response);
        } else if (formattedResponse.responseCode === "AHB_1023") {
            kony.print("fetchBillPayeesListSCB response is AHB_1023 " + JSON.stringify(response));
            controller.setSegData("");
        } else {
            kony.print(" fetchAllBillPayeesDetailsSCB  response is not 200" + JSON.stringify(response));
            controller.bindGenericSuccess(formattedResponse.message);
        }

    },
    /*-----------------------------------------------------------------------------------

     Name: 	fetchAllBillPayeesECB
     Purpose: 	
     Author: 	B S Krishna Vantakala
     Date: 	28/11/2018
     Input:	
     Return: 	

     ------------------------------------------------------------------------------------*/
    fetchBillPayeesListECB: function(err) {
        kony.print("fetchAllBillPayeesDetailsECB");
        var formattedResponse = checkServiceResponseForErrorCode(err);
        this.navigateToBillPay();
        var controller = applicationManager.getPresentationUtility().getController('frmBillPayAllPayees', true);
        controller.bindGenericError(formattedResponse.message);
    },


 /*-----------------------------------------------------------------------------------

    Name: 	fetchConfiguration
    Purpose:  This function filter out operative accounts accounts
    Author: 	Bipin
    Date: 	21/11/2018
    Input: 	beneType - "PMT" for payments
    Return: 	fromAccounts - [[key,value]]	

------------------------------------------------------------------------------------*/
  fetchConfiguration: function() {
    kony.print("fetchConfiguration start");
    applicationManager.getPresentationUtility().showLoadingScreen();
    var paymentOperatorsList = this.getPaymentOperatorList();
    var exchangeRates = this.getPaymentExchangeRates();
    if(paymentOperatorsList.length && exchangeRates && Object.keys(exchangeRates).length){
      var response ={
        currencies : Object.keys(exchangeRates),
        operators : paymentOperatorsList
      };

      this.asyncManager.setSuccessStatus(1, response);
      if (this.asyncManager.areAllservicesDone(this.numberOfAsyncForPayees)) {
        this.initiatePaymnentUI();
      }

    }else{
      var payeeManager = applicationManager.getPayeeManager();
      payeeManager.fetchPaymentConfigurations(this.fetchConfigurationSCB, this.fetchConfigurationECB);
    }
  },
    /*-----------------------------------------------------------------------------------

    Name: 	fetchConfigurationSCB
    Purpose:  This function filter out operative accounts accounts
    Author: 	Bipin
    Date: 	21/11/2018
    Input: 	response
    Return: 	NA	

    ------------------------------------------------------------------------------------*/
    fetchConfigurationSCB: function(response) {
        kony.print(" billPay presentation controller extn  fetchConfigurationSCB response " + JSON.stringify(response));
        var controller = applicationManager.getPresentationUtility().getController('frmBillPay', true);
        var formattedResponse = checkServiceResponseForErrorCode(response);
        if (formattedResponse.responseCode === "200") {
            this.asyncManager.setSuccessStatus(1, response);
            var currencies = response.currencies;
            var exchangeRates = {};
            var paymentOperatorsList = response.operators;
            kony.print("fetchConfigurationSCB paymentList" + paymentOperatorsList);
            this.setPaymentOperatorList(paymentOperatorsList);
            for (var i = 0; i < currencies.length; i++) {
                exchangeRates[currencies[i].key] = currencies[i]["exchange_rate"];
            }
            kony.print(" fetchConfigurationSCB exchangeRates " + JSON.stringify(exchangeRates));
            this.setPaymentExchangeRates(exchangeRates);
            if (this.asyncManager.areAllservicesDone(this.numberOfAsyncForPayees)) {
                this.initiatePaymnentUI();
            }
        } else if (formattedResponse.responseCode === "AHB_1023") {
          kony.print("fetchBillPayeesListSCB response is AHB_1023 " + JSON.stringify(response));
          var payeeData ={
            payees:[]
          }
          this.asyncManager.setSuccessStatus(1, payeeData);

          this.setPayeesList(payeeData);
          this.setPaymentOperatorList([]);
          this.setPaymentExchangeRates({});
          if (this.asyncManager.areAllservicesDone(this.numberOfAsyncForPayees)) {
            this.initiatePaymnentUI();
          }
        } 
      else {
        kony.print(" validateCardSCB  response is not 200" + JSON.stringify(response));
        controller.bindGenericError(formattedResponse.message);
      }
        //applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    /*-----------------------------------------------------------------------------------

      Name: 	fetchConfigurationECB
      Purpose:  This function handels fetchConfiguration Error scenario
      Author: 	Bipin
      Date: 	21/11/2018
      Input: 	error
      Return: 	NA	

      ------------------------------------------------------------------------------------*/
    fetchConfigurationECB: function(err) {
        kony.print(" billPay presentation controller extn  fetchConfigurationECB err " + JSON.stringify(err));
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var formattedResponse = checkServiceResponseForErrorCode(err);
        this.navigateToBillPay();
        var controller = applicationManager.getPresentationUtility().getController('frmBillPay', true);
        controller.bindGenericError(formattedResponse.message);

    },
    /*-----------------------------------------------------------------------------------

    Name: 	filterFromOperativeAccounts
    Purpose:  This function filter out operative accounts accounts
    Author: 	Bipin
    Date: 	21/11/2018
    Input: 	beneType - "PMT" for payments
    Return: 	fromAccounts - [[key,value]]	

    ------------------------------------------------------------------------------------*/
    filterFromOperativeAccounts: function(beneType, pAllAccountsData) {
        kony.print(" billPay presentation controller extn beneType  " + beneType);
        kony.print(" billPay presentation controller extn filterFromAccounts pAllAccountsData  " + pAllAccountsData);

        var navManger = applicationManager.getNavigationManager();
        var allOperativeAccountsData = (pAllAccountsData && pAllAccountsData.operativeAccounts) ? pAllAccountsData.operativeAccounts : [];

        var fromAccounts = [];
        for (var i = 0; i < allOperativeAccountsData.length; i++) {
            //Check if the Account is Active or not and the avilable balance is zero
            if ((allOperativeAccountsData[i].AccountStatus === "") && (convertToFloat(allOperativeAccountsData[i].WorkingBalance) > 0)) {
                // fromAccounts[i] = {};
                //Check if the selected Beneficiary type matches the AccountTransactionAccess or AccountTransactionAccess is ALL
                if ((allOperativeAccountsData[i].AccountAccessFlag === "F" || allOperativeAccountsData[i].AccountAccessFlag === "ALL") &&
                    (allOperativeAccountsData[i].AccountTransactionAccess.includes((beneType)) || allOperativeAccountsData[i].AccountTransactionAccess === "ALL")) {
                    if (allOperativeAccountsData[i].Currency === "AED") {
                        fromAccounts.push([allOperativeAccountsData[i].AccountNumber, getOperativeAccountType(allOperativeAccountsData[i].AccountType) + " " + allOperativeAccountsData[i].AccountNumber]);
                    }
                }
            }
        }
        kony.print(" billPay presentation controller extnfromAccounts==" + JSON.stringify(fromAccounts));


        //applicationManager.getPresentationUtility().dismissLoadingScreen();
        return fromAccounts;
    },


    /*-----------------------------------------------------------------------------------

    Name: 	filterFromCardAccounts
    Purpose:  This function filter out cards accounts
    Author: 	Bipin
    Date: 	21/11/2018
    Input: 	beneType - "PMT" for payments
    Return: 	fromAccounts - [[key,value]]	

    ------------------------------------------------------------------------------------*/
    filterFromCardAccounts: function(beneType, pAllAccountsData) {
        kony.print(" billPay presentation controller extn ");
        kony.print(" billPay presentation controller extn beneType  " + beneType);
        kony.print(" billPay presentation controller extn filterFromAccounts pAllAccountsData  " + pAllAccountsData);

        var navManger = applicationManager.getNavigationManager();
        var cards = (pAllAccountsData && pAllAccountsData.cards) ? pAllAccountsData.cards : [];
        var fromAccounts = [];
        for (var i = 0; i < cards.length; i++) {
            //Check if the Account is Active or not and the avilable balance is zero
            if ((cards[i].CardStatus) && (convertToFloat(cards[i].AvailableLimit) > 0)) { ///TODO checkCard status
                // fromAccounts[i] = {};
                //Check if the selected Beneficiary type matches the AccountTransactionAccess or AccountTransactionAccess is ALL
                if ((cards[i].AccountAccessFlag === "F" || cards[i].AccountAccessFlag === "ALL") &&
                    (cards[i].AccountTransactionAccess.includes((beneType)) || cards[i].AccountTransactionAccess === "ALL")) {
                    if (cards[i].CurrencyCode === "AED") {
                        var cardType = getOperativeAccountType(cards[i].CardType);
                        fromAccounts.push([cards[i].CreditCardNo, cardType + " " + getMaskedString(6, 12, "*", cards[i].CreditCardNo)]);
                    }

                }
            }
        }
        kony.print(" billPay presentation controller extnfromAccounts==" + JSON.stringify(fromAccounts));

        applicationManager.getPresentationUtility().dismissLoadingScreen();
        return fromAccounts;
    },
    /*-----------------------------------------------------------------------------------

    Name: 	getFromAccounts
    Purpose:  This function gets form accounts data
    Author: 	Bipin
    Date: 	21/11/2018
    Input: 	NA
    Return: 	fromAccounts - [[key,value]]	

    ------------------------------------------------------------------------------------*/
    getFromAccounts: function() {
        var allAccountsData = this.getAllAccountsData();
        var configManager = applicationManager.getConfigurationManager();
        var operativeAcc = this.filterFromOperativeAccounts(configManager.constants.TRANSFER_TYPE.PMT, allAccountsData);
        kony.print(" billPay presentation controller extn getFromAccounts   operativeAcc  " + operativeAcc);
        var cardsAcc = this.filterFromCardAccounts(configManager.constants.TRANSFER_TYPE.PMT, allAccountsData);
        kony.print(" billPay presentation controller extn getFromAccounts   cardsAcc  " + cardsAcc);
        var fromAccounts = operativeAcc.concat(cardsAcc);
        fromAccounts.unshift(["", kony.i18n.getLocalizedString("kony.ahb.common.Listbox.Select")]);
        kony.print(" billPay presentation controller extn   getFromAccounts  " + fromAccounts);
        return fromAccounts;
    },

/*-----------------------------------------------------------------------------------
    Name: 	getDashboardData
    Purpose:  This function gets dashboard data
    Author: 	Bipin
    Date: 	21/11/2018
    Input: 	NA
    Return: 	NA	
------------------------------------------------------------------------------------*/
  getDashboardData: function() {
    kony.print("entered getDashboardData===");
    var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");
    var configManager = applicationManager.getConfigurationManager();
    var navManager = applicationManager.getNavigationManager();
    var cifObj = navManager.getCustomInfo("cifObj");
    navManager.setEntryPoint("DashboardService", configManager.constants.BILL_PAY);
    var accountStatus = accountMod.presentationController.getAccountDataStatus();
    var currTime = new Date();
    var accStatusTimestamp = accountStatus.timeStamp;
    //var diff = getMinutesBetweenDates(accStatusTimestamp, currTime);
    
    if(accountStatus.hasAccountModified){
      accountMod.presentationController.showDashboard(cifObj);
    }else{
      var billPayType = this.getBillPayType();
      var dashboardData = accountMod.presentationController.getAllDashboardAccountData();
      this.setAllAccountsData(dashboardData);
      if(billPayType === configManager.constants.AHB_BILLPAY_MULTI ){
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        this.checkForAccountsData(dashboardData,"frmBillPayConfirmation");
      }else{
        if(billPayType === configManager.constants.AHB_BILLPAY_CHARITY){
          applicationManager.getPresentationUtility().dismissLoadingScreen();
          this.checkForAccountsData(dashboardData,"frmBillPayAmount");
        }
        else{
          this.asyncManager.setSuccessStatus(0,dashboardData);
          //this.setAllAccountsData(dashboardData);
          if(this.asyncManager.areAllservicesDone(this.numberOfAsyncForPayees) ){ ///todo remove hardcoding
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            this.checkForAccountsData(dashboardData,"frmBillPayAmount");
          }
        } 
      }
    }
  },

  /*-----------------------------------------------------------------------------------

    Name: 	getSelectedAccountInfo
    Purpose:  This function gets info for selected From accounts
    Author: 	Bipin
    Date: 	21/11/2018
    Input: 	NA
    Return: 	NA	

    ------------------------------------------------------------------------------------*/
    getSelectedAccountInfo: function(pAccountNumber) {
        kony.print("entered getSelectedAccountInfo===" + pAccountNumber);
        var navManger = applicationManager.getNavigationManager();
        var dataToSetFromAccounts = this.getAllAccountsData();
        var operativeAcc = (dataToSetFromAccounts) ? dataToSetFromAccounts.operativeAccounts : [];
        var cardAcc = (dataToSetFromAccounts) ? dataToSetFromAccounts.cards : [];
        var allFromAccounts = operativeAcc.concat(cardAcc);

        var fromAccounts = {};
        for (var i = 0; i < allFromAccounts.length; i++) {
            if (allFromAccounts[i] && (allFromAccounts[i].AccountNumber === pAccountNumber || allFromAccounts[i].CreditCardNo === pAccountNumber)) {
                fromAccounts = allFromAccounts[i];
                break;
            }
        }
        kony.print("getSelectedAccountInfo===" + JSON.stringify(fromAccounts));

        return fromAccounts;
    },

    /***********************************************************************************************
  Name: getAllServiceProviders
  Author: Sindhu
  Date: 21/11/2018
  Input: none
  Return: none
*************************************************************************************/

    getAllServiceProviders: function() {
        kony.print("getAllServiceProviders");
        applicationManager.getPresentationUtility().showLoadingScreen();
        var payeeManager = applicationManager.getPayeeManager();
        payeeManager.getAllPaymentServiceProviderList(this.getAllServiceProvidersPresentationSuccess, this.getAllServiceProvidersPresentationError);

    },

    getAllServiceProvidersPresentationSuccess: function(successResponse) {
        kony.print("getAllServiceProvidersPresentationSuccess" + JSON.stringify(successResponse));
        var navManager = applicationManager.getNavigationManager();
        var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        var billPayEnterAccNoController = applicationManager.getPresentationUtility().getController('frmBillPayEnterAccNo', true);
        var formattedResponse = checkServiceResponseForErrorCode(successResponse);
        if (formattedResponse.responseCode === "200") {
            if (successResponse.operators && successResponse.operators.length) {
                var paymentList = successResponse.operators;
                kony.print("getAllServiceProvidersPresentationSuccess paymentList" + paymentList);
                this.setPaymentOperatorList(paymentList);
                applicationManager.getPresentationUtility().dismissLoadingScreen();
                navManager.navigateTo("frmBillPayEnterAccNo");
            } else {
                // no operator - give alert?  check for alert
                applicationManager.getPresentationUtility().dismissLoadingScreen();
            }
        }
    },

    getAllServiceProvidersPresentationError: function(errorResponse) {
        kony.print("getAllServiceProvidersPresentationError_errorResponse" + JSON.stringify(errorResponse));
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var billPayEnterAccNoController = applicationManager.getPresentationUtility().getController('frmBillPayEnterAccNo', true);
        var formattedResponse = checkServiceResponseForErrorCode(errorResponse);
        billPayEnterAccNoController.bindGenericError(formattedResponse.message);
    },

    /***********************************************************************************************
  Name: getSubServiceData
  Author: Sindhu
  Date: 21/11/2018
  Input: pServiceOperatorCode, pSubServiceCode
  Return: serviceData
*************************************************************************************/
  getSubServiceData: function(pServiceOperatorCode, pSubServiceCode) {

    var operatorsData = this.getPaymentOperatorList();

    var serviceData;

    for (var i = 0; i < operatorsData.length; i++) {

      if (operatorsData[i].serviceOperatorCode === pServiceOperatorCode && operatorsData[i].subServiceCode === pSubServiceCode) {

        serviceData = operatorsData[i];

      }

    }

    return serviceData;

  },

    /***********************************************************************************************
  Name: getServiceProviderList
  Author: Sindhu
  Date: 21/11/2018
  Input: none
  Return: serviceProviderList
*************************************************************************************/
  getServiceProviderList: function() {
    var serviceProviderList = [];
    var uniqueOpearators = [];
    var operatorsData = this.getPaymentOperatorList();
    var userManager = applicationManager.getUserPreferencesManager();
    var langPrefrence=userManager.getLanguagePrefrence();
    var hasSubServiceObj ={};

    for (var i = 0; i < operatorsData.length; i++) {
      var operator = operatorsData[i];
      if (operator.serviceOperatorCode && uniqueOpearators.indexOf(operator.serviceOperatorCode) === -1 && operator.category === "Payments") {
        hasSubServiceObj[operator.serviceOperatorCode] = operator.hasSubService;
        var subData = [];
        subData[0] = operator.serviceOperatorCode;
        if(langPrefrence === "en_US"){
          subData[1] = operator.serviceOperatorName;
        }else{
          subData[1] = operator.serviceOperatorArabicName;
        }
        uniqueOpearators[uniqueOpearators.length] = operator.serviceOperatorCode;
        serviceProviderList[serviceProviderList.length] = subData;
      }
    }
    this.setHasSubServiceObject(hasSubServiceObj);
    return serviceProviderList;
  },

    /***********************************************************************************************
  Name: getSubServiceList
  Author: Sindhu
  Date: 21/11/2018
  Input: serviceOperatorCode
  Return: subServiceList
*************************************************************************************/
  getSubServiceList: function(serviceOperatorCode) {
    var subServiceList = [];
    var operators = this.getPaymentOperatorList(); // replace your global variable here
    var userManager = applicationManager.getUserPreferencesManager();
    var langPrefrence=userManager.getLanguagePrefrence();
    for (var i = 0; i < operators.length; i++) {
      var operator = operators[i];
      
      if (operator.subServiceCode && operator.serviceOperatorCode === serviceOperatorCode) {
        var subData = [];
        subData[0] = operator.subServiceCode;
        if(langPrefrence === "en_US"){
          subData[1] = operator.subServiceName;
        }else{
          subData[1] = operator.serviceTypeArabic;
        }
        subServiceList[subServiceList.length] = subData;
      }
    }
    return subServiceList;
  },
    /*
@Purpose Call Add Payee service
@Input Payee Details 
{
"consumerNumber":"",
"nickName":"",
"operatorName":"",
"operatorCode":"",
"serviceCode":"",
}
@Output None
*/
    addPayee: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        var recipientsManager = applicationManager.getRecipientsManager();
        var payeeDetails = {
            "consumerNumber": this.getConsumerNumber(),
            "nickName": this.getPayeeNickName(),
            "operatorCode": this.getOperatorCode(),
            "serviceCode": this.getServiceCode(),
            "consumerPin": this.getConsumerPin(),
            "otp": this.getPayeeOtp(),

        };
        //"hasDues": this.getPayeeHasDues(),
        recipientsManager.addNewPayee(payeeDetails, this.addNewPayeeSuccess, this.addNewPayeeError);
    },

    /*
@Purpose Success callback after Adding Payee 
@Input Success Response after Adding Payee 
@Output None
*/

    addNewPayeeSuccess: function(response) {
        kony.print("addNewPayeeSuccess===" + JSON.stringify(response));
        var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        var formattedData = checkServiceResponseForErrorCode(response);
        var controller = applicationManager.getPresentationUtility().getController('frmBillPayVerifyDetails', true);
        var navManager = applicationManager.getNavigationManager();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var msg = "";
        if (formattedData.responseCode === "200") {
            navManager.setEntryPoint("AHBSuccess", "AddPayeeSuccess");
            billPayModule.presentationController.commonFunctionForNavigation("frmAHBSucess");
        } else {
            //navManager.setEntryPoint("AHBSuccess","AddPayeeError");
            //billPayModule.presentationController.commonFunctionForNavigation("frmAHBSucess");     
            var currFrom = kony.application.getCurrentForm().id;
            kony.print("addNewPayeeSuccess currFrom " + currFrom);
            var controller = applicationManager.getPresentationUtility().getController(currFrom, true);
            controller.bindGenericError(formattedData.message);
            applicationManager.getPresentationUtility().dismissLoadingScreen();
        }

    },

    /*
@Purpose Error callback after Adding Payee 
@Input Error Response after Adding Payee 
@Output None
*/
    addNewPayeeError: function(error) {
        kony.print("addNewPayeeError===" + JSON.stringify(error));
        var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        navManager.setEntryPoint("AHBSuccess", "AddPayeeError");
        billPayModule.presentationController.commonFunctionForNavigation("frmAHBSucess");
        applicationManager.getPresentationUtility().dismissLoadingScreen();

    },

    /*-----------------------------------------------------------------------------------

    Name: 	navigateToBillPay
    Purpose:  This function navigates to frm Bill pay
    Author: 	Bipin
    Date: 	21/11/2018
    Input: 	NA
    Return: 	NA	

    ------------------------------------------------------------------------------------*/
    navigateToBillPay: function() {
        var navManger = applicationManager.getNavigationManager();
        navManger.navigateTo("frmBillPay");

    },

    /*-----------------------------------------------------------------------------------

    Name: 	initializePaymentModule
    Purpose:  This resets all payment data and initializes payment module
    Author: 	Bipin
    Date: 	21/11/2018
    Input: 	NA
    Return: 	NA	

    ------------------------------------------------------------------------------------*/
    initializePaymentModule: function() {
        applicationManager.getPresentationUtility().showLoadingScreen();
        this.resetAllPaymentData();
    },
  /*-----------------------------------------------------------------------------------

    Name: 	getCharityServiceTypeAccNumberCategory
    Purpose:  This resets all payment data and initializes payment module
    Author: 	Bipin
    Date: 	21/11/2018
    Input: 	NA
    Return: 	NA	

    ------------------------------------------------------------------------------------*/
  getCharityServiceTypeAccNumberCategory(){
    var payeeData = this.getAllPayeeData();
    var operators = this.getPaymentOperatorList(); 
    var accNumber ="";
    var category = "";
    
    for (var i = 0; i < operators.length; i++) {
      var operator = operators[i];
      if (operator.subServiceCode === payeeData.serviceCode && operator.serviceOperatorCode === payeeData.operatorCode) {
        accNumber =  operator.accountNumber;
        category = operator.category;
        break;
      }
    }
    return {accNumber,category};
  },

    /*-----------------------------------------------------------------------------------

    Name: 	makePayment
    Purpose:  This function will invoke make payment service
    Author: 	Bipin
    Date: 	22/11/2018
    Input: 	pPramDetails
    Return: 	NA	

    ------------------------------------------------------------------------------------*/
    makePayment: function() {
        kony.print("makePayment start pPramDetails ");
        applicationManager.getPresentationUtility().showLoadingScreen();
        var payeeManager = applicationManager.getPayeeManager();

        var paymentList = this.getPaymentList();
        var requestInput = [];

        var billPayType = this.getBillPayType();
        var configManager = applicationManager.getConfigurationManager();

        if (billPayType === configManager.constants.AHB_BILLPAY_MULTI) {
            ///FOR multi payment
            for (var i = 0; i < paymentList.length; i++) {
                var reqParam = {
                    "consumerNumber": paymentList[i].consumerNumber,
                    "consumerPin": paymentList[i].consumerPin,
                    "operatorCode": paymentList[i].operatorCode,
                    "serviceCode": paymentList[i].serviceCode,
                    "paymentMode": this.getPaymentMode(),
                    "fromAccountNumber": this.getSelectedFromAccount(),
                    "fromCurrency": this.getSelectedFromAccountCurrency(),
                    "amountDue": paymentList[i].amount,
                    "amountPaid": paymentList[i].amount,
                    "referenceNumber": paymentList[i].referenceNumber
                };
                requestInput.push(reqParam);
            }
        } else {
            var payeeData = this.getAllPayeeData();
          	var accNumber = "" ;
          	var category = "";
          	if(billPayType === configManager.constants.AHB_BILLPAY_CHARITY){
              var serviceType  = this.getCharityServiceTypeAccNumberCategory();
              accNumber = serviceType.accNumber;
              category = serviceType.category;
            }else{
              accNumber = payeeData.consumerNumber;
            }
            var reqParam = {
                "consumerNumber": accNumber,
                "consumerPin": payeeData.consumerPin,
                "operatorCode": payeeData.operatorCode,
                "serviceCode": payeeData.serviceCode,
                "paymentMode": this.getPaymentMode(),
                "fromAccountNumber": this.getSelectedFromAccount(),
                "fromCurrency": this.getSelectedFromAccountCurrency(),
                "amountDue": this.getUtilityAmountData().amount,
                "amountPaid": this.getBillAmountEntered(),
                "referenceNumber": payeeData.referenceNumber,
              	"category": category
            };
            requestInput.push(reqParam);
        }


        var paramDetails = {
            "requestInput": requestInput
        };

        paramDetails = { requestInput: JSON.stringify(paramDetails) };
        payeeManager.makePayment(paramDetails, this.makePaymentSCB, this.makePaymentECB);
    },

  /*-----------------------------------------------------------------------------------

    Name: 	makePaymentSCB
    Purpose:  This handles the success scenario while making payment to display success scrreen or error screen
    Author: 	Bipin
    Date: 	22/11/2018
    Input: 	response
    Return: 	NA	

    ------------------------------------------------------------------------------------*/
  makePaymentSCB: function(response) {
    kony.print(" makePaymentSCB  response " + JSON.stringify(response));
    applicationManager.getPresentationUtility().dismissLoadingScreen();
    // var formattedResponse = checkServiceResponseForErrorCode(response);
    var controller = applicationManager.getPresentationUtility().getController('frmBillPayConfirmation', true);
    var fromattedRes = this.handelPaymentSuccessErrorResponse(response);
    kony.print("makePaymentSCB fromattedRes" + JSON.stringify(fromattedRes));
    var navManger = applicationManager.getNavigationManager();
    var accountMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AccountModule");

    if (fromattedRes.isSuccess) {
      var accountDataStatus = {
        timeStamp : new Date(),
        hasAccountModified : true,
      }; 
      accountMod.presentationController.setAccountDataStatus(accountDataStatus);
      navManger.setEntryPoint("AHBSuccess", "Payment");
      navManger.navigateTo("frmAHBSucess");
    } else {
      var message = fromattedRes.message;
      ///TODO verify the logic
      var multipaymentsObj = {}; //an obj containing the error response
      var partialSuccess = [];
      var partialError = [];
      for (var i = 0; i < message.length; i++) {
        var status = message[i].status;
        if (status === "SUCCESS") {
          partialSuccess.push(message[i]);
        } else {
          partialError.push(message[i]);
        }
      }
      multipaymentsObj.multiSuccessArr = partialSuccess;
      multipaymentsObj.multiErrorArr = partialError;

      if (message.length === 1 && (message[0].responseCode === "AHB_1501" || message[0].responseCode === "AHB_1502")) {
        kony.print(" makePaymentSCB  response is not 200" + JSON.stringify(response));
        var billPayType = this.getBillPayType();
        var configManager = applicationManager.getConfigurationManager();

        var msg = message[0].msg;
        if (billPayType === configManager.constants.AHB_BILLPAY_CHARITY) {
          msg = message[0].msg.replace("###PLACEHOLDER###", "Charity Payment");
        } else {
          msg = message[0].msg.replace("###PLACEHOLDER###", "payment");
        }
        controller.bindGenericError(msg);
      }
      if (partialError.length === message.length) {
        //navManger.setEntryPoint("AHBSuccess", "PaymentError");
        navManger.setEntryPoint("AHBSuccess", "PaymentError");
        navManger.navigateTo("frmAHBSucess");

      } else {
        var accountDataStatus = {
          timeStamp : new Date(),
          hasAccountModified : true,
        }; 
        accountMod.presentationController.setAccountDataStatus(accountDataStatus);
        var preparedMultiPaymentsObj = this.prepareMultiPaymentErrorResponse(multipaymentsObj);
        navManger.setCustomInfo("frmMultiPayments", preparedMultiPaymentsObj);
        navManger.navigateTo("frmMultiPayments");
      }
    }

  },
    /*-----------------------------------------------------------------------------------

    Name: 	makePaymentECB
    Purpose: 
    Author: 	Bipin
    Date: 	22/11/2018
    Input: 	err
    Return: 	NA	

    ------------------------------------------------------------------------------------*/
    makePaymentECB: function(err) {
        kony.print(" makePaymentECB  response " + JSON.stringify(err));
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var formattedResponse = checkServiceResponseForErrorCode(err);
        var navManger = applicationManager.getNavigationManager();
        //var controller = applicationManager.getPresentationUtility().getController('frmBillPayConfirmation', true);
        kony.print(" makePaymentECB  " + JSON.stringify(err));
        //controller.bindGenericError(formattedResponse.message);
        ///TODO check
        navManger.setEntryPoint("AHBSuccess", "PaymentError");
        navManger.navigateTo("frmAHBSucess");
    },

    /*-----------------------------------------------------------------------------------

    Name: 	prepareMultiPaymentErrorResponse
    Purpose: prepares the error response  from makepaymentscb data ns required format 
    Author: 	Fariha
    Date: 	05/12/2018
    Input: 	errResponse{object conatining two arrays}
    Return: 	an object containing all the required info to populate frmMultiPayments	

    ------------------------------------------------------------------------------------*/

    prepareMultiPaymentErrorResponse: function(errResponse) {
        var preparedMultiPaymentsObj = {};
        var multiPaymentsInfo = errResponse;
        var completedPaymentsArr = [];
        var failedPaymentsArr = [];
        var multiSuccessArr = multiPaymentsInfo.multiSuccessArr;
        var multiErrorArr = multiPaymentsInfo.multiErrorArr;
        var successPaymentSum = 0;


        var paymentList = this.getPaymentList();
        preparedMultiPaymentsObj.totalPayments = paymentList.length;
        for (var p = 0; p < paymentList.length; p++) {
            for (var i = 0; i < multiSuccessArr.length; i++) {
                if (multiSuccessArr[i].referenceNumber === paymentList[p].referenceNumber) {
                    completedPaymentsArr.push(paymentList[p]);
                    successPaymentSum += paymentList[p].amount;
                }
            }
            for (var i = 0; i < multiErrorArr.length; i++) {
                if (multiErrorArr[i].referenceNumber === paymentList[p].referenceNumber) {
                    failedPaymentsArr.push(paymentList[p]);
                }
            }
        }

        preparedMultiPaymentsObj.successPaymentSum = successPaymentSum;
        preparedMultiPaymentsObj.completedPaymentsArr = completedPaymentsArr;
        preparedMultiPaymentsObj.failedPaymentsArr = failedPaymentsArr;
        preparedMultiPaymentsObj.totalSuccessPayments = completedPaymentsArr.length;


        return preparedMultiPaymentsObj;
    },
    /*-----------------------------------------------------------------------------------

    Name: 	getIndicativeValInSelectedFromAccCurr
    Purpose: 
    Author: 	Bipin
    Date: 	23/11/2018
    Input: 	currrency, amount
    Return: 	indicativeValInAED	

    ------------------------------------------------------------------------------------*/
    getIndicativeValInSelectedFromAccCurr: function(currrency, amount) {
        kony.print("getIndicativeValInSelectedFromAccCurr  currrency  " + currrency);
        kony.print("getIndicativeValInSelectedFromAccCurr  amount  " + amount);
        var indicativeValInAED = 0;
        var exchangeRate = this.getPaymentExchangeRates()
        if (currrency && amount) {
            indicativeValInAED = (convertToFloat(amount)) / (convertToFloat((exchangeRate[currrency])));
        }
        kony.print("getIndicativeValInSelectedFromAccCurr  indicativeValInAED  " + indicativeValInAED);

        return indicativeValInAED;
    },
    /*-----------------------------------------------------------------------------------

  Name: 	getIndicativeValInSelectedFromAccCurr
  Purpose: 
  Author: 	Bipin
  Date: 	23/11/2018
  Input: 	currrency, amount
  Return: 	indicativeValInAED	

  ------------------------------------------------------------------------------------*/
    initiatePaymnentUI: function() {
        kony.print("initiatePaymnentUI  start  ");
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var controller = applicationManager.getPresentationUtility().getController('frmBillPay', true);
        var billPayType = this.getBillPayType();
        kony.print("initiatePaymnentUI  billPayType  " + billPayType);
        var configManager = applicationManager.getConfigurationManager();
        if (billPayType === configManager.constants.AHB_BILLPAY_MULTI) {
            controller.setMultiPaymentsData();
        } else {
            controller.setSinglePaymentData();
        }
    },

    /***********************************************************************************************
  Name: updatePayeeNickName
  Author: Sindhu
  Date: 26/11/2018
  Input: nickName
  Return: none
*************************************************************************************/

    updatePayeeNickName: function(nickName) {
        var editDetails = {
            "id": this.getPayeeId(),
            "nickName": nickName
        };
        kony.print("updatePayeeNickName_editDetails" + JSON.stringify(editDetails));
        var payeeManager = applicationManager.getPayeeManager();
        payeeManager.updateAllPayeeDetails(editDetails, this.updatePayeeDetailsPresentationSuccess, this.updatePayeeDetailsPresentationError);

    },
    updatePayeeDetailsPresentationSuccess: function(successResponse) {
        kony.print("updatePayeeDetailsPresentationSuccess_successResponse" + successResponse);
        applicationManager.getPresentationUtility().showLoadingScreen();
        var billPayModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        var billPayPayeeDetailsController = applicationManager.getPresentationUtility().getController('frmBillPayPayeeDetails', true);
        var billPayEditNameController = applicationManager.getPresentationUtility().getController('frmBillPayEditName', true);
        var navManager = applicationManager.getNavigationManager();
        var formattedResponse = checkServiceResponseForErrorCode(successResponse);
        if (formattedResponse.responseCode === "200") {
            var nickName = billPayEditNameController.getNickName();
            this.setPayeeNickName(nickName);
            navManager.navigateTo("frmBillPayPayeeDetails");
            billPayPayeeDetailsController.onEditPayeeSuccess();
            applicationManager.getPresentationUtility().dismissLoadingScreen();
        } else {
            navManager.navigateTo("frmBillPayEditName");
            billPayEditNameController.bindGenericError(formattedResponse.message);
            applicationManager.getPresentationUtility().dismissLoadingScreen();
        }
    },

    updatePayeeDetailsPresentationError: function(errorResponse) {
        kony.print("updatePayeeDetailsPresentationError_errorResponse" + errorResponse);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var billPayEditNameController = applicationManager.getPresentationUtility().getController('frmBillPayEditName', true);
        var formattedResponse = checkServiceResponseForErrorCode(errorResponse);
        billPayEditNameController.bindGenericError(formattedResponse.message);
    },

    /*-----------------------------------------------------------------------------------
    Name: 	fetchUtilityAmountsAndFromAccounts
    Purpose: 
    Author: Bipin
    Date: 	26/11/2018
    Input: 	NA
    Return: NA		
  ------------------------------------------------------------------------------------*/
    fetchUtilityAmountsAndFromAccounts: function() {
        kony.print("fetchUtilityAmountsAndFromAccounts async call start  ");
        applicationManager.getPresentationUtility().showLoadingScreen();
        this.asyncManager.initiateAsyncProcess(scope_BillPayPresentationController.numberOfAsyncForPayees);
        this.getDashboardData();
        this.fetchUtilityAmounts();
    },


    /*-----------------------------------------------------------------------------------

  Name: 	fetchUtilityAmounts
  Purpose: 
  Author: 	Bipin
  Date: 	26/11/2018
  Input: 	NA
  Return: 	NA

  ------------------------------------------------------------------------------------*/
    fetchUtilityAmounts: function() {
        kony.print("fetchUtilityAmounts start  ");
        applicationManager.getPresentationUtility().showLoadingScreen();
        var payeeManager = applicationManager.getPayeeManager();
        //this.makePaymentSCB({responseCode:"200"})
        var payeeData = this.getAllPayeeData();
        kony.print("fetchUtilityAmounts payeeData " + JSON.stringify(payeeData));

        var pramDetails = {
            "operatorCode": payeeData.operatorCode,
            "consumerNumber": payeeData.consumerNumber,
            "consumerPin": payeeData.consumerPin,
            "serviceCode": payeeData.serviceCode
        };
        kony.print("fetchUtilityAmounts pramDetails  " + JSON.stringify(pramDetails));

        payeeManager.getUtilityAmounts(pramDetails, this.fetchUtilityAmountsSCB, this.fetchUtilityAmountsECB);
    },

    /*-----------------------------------------------------------------------------------

  Name: 	fetchUtilityAmountsSCB
  Purpose:  
  Author: 	Bipin
  Date: 	26/11/2018
  Input: 	NA
  Return: 	NA	

  ------------------------------------------------------------------------------------*/
    fetchUtilityAmountsSCB: function(response) {
        kony.print(" fetchUtilityAmountsSCB response" + JSON.stringify(response));
        var formattedResponse = checkServiceResponseForErrorCode(response);
        var currentFrom = kony.application.getCurrentForm().id;
        var controller = applicationManager.getPresentationUtility().getController(currentFrom, true);
        var navManger = applicationManager.getNavigationManager();
        if (formattedResponse.responseCode === "200") {
            this.asyncManager.setSuccessStatus(1, response);
            if (response && response.utilities && response.utilities.length) {
                this.setUtilityAmountData(response.utilities[0]);
                this.setRefrenceNumber(response.utilities[0].referenceNumber);
            }
            if (this.asyncManager.areAllservicesDone(scope_BillPayPresentationController.numberOfAsyncForPayees)) {
                applicationManager.getPresentationUtility().dismissLoadingScreen();
              	var dashboardData = this.getAllAccountsData();
              	this.checkForAccountsData(dashboardData,"frmBillPayAmount");
                //navManger.navigateTo("frmBillPayAmount");
            }

        } else {
            kony.print(" fetchUtilityAmountsSCB  response is not 200" + JSON.stringify(response));
            controller.bindGenericError(formattedResponse.message);

        }

    },
    /*-----------------------------------------------------------------------------------

    Name: 	fetchUtilityAmountsECB
    Purpose: 
    Author: 	Bipin
    Date: 	26/11/2018
    Input: 	NA
    Return: 	NA	

    ------------------------------------------------------------------------------------*/
    fetchUtilityAmountsECB: function(err) {
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var formattedResponse = checkServiceResponseForErrorCode(err);
        var navManger = applicationManager.getNavigationManager();
        //var controller = applicationManager.getPresentationUtility().getController('frmBillPayConfirmation', true);
        kony.print(" makePaymentECB  " + JSON.stringify(err));
        navManger.navigateTo("frmBillPayAmount");
        //controller.bindGenericError(formattedResponse.message);

    },

    /***********************************************************************************************
  Name: deletePayee
  Author: Sindhu
  Date: 27/11/2018
  Input: payeeId
  Return: none
*************************************************************************************/
    deletePayee: function(payeeId) {
        kony.print("deletePayee_payeeId " + payeeId);
        var deleteDetails = {
            "id": payeeId,
            "otp": this.getPayeeOtp()

        };
        var payeeManager = applicationManager.getPayeeManager();
        var transferMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("BillPayModule");
        kony.print("deletePayee_payeeId  request " + JSON.stringify(deleteDetails));

        payeeManager.deletePayeeFromList(deleteDetails, this.deletePayeePresentationSuccess, this.deletePayeePresentationError);
    },

    deletePayeePresentationSuccess: function(successResponse) {
        kony.print("deletePayeePresentationSuccess_successResponse " + JSON.stringify(successResponse));
        var navManager = applicationManager.getNavigationManager();
        var formattedResponse = checkServiceResponseForErrorCode(successResponse);
        var billPayPayeeDetailsController = applicationManager.getPresentationUtility().getController('frmBillPayPayeeDetails', true);
        var billPayAllPayeesController = applicationManager.getPresentationUtility().getController('frmBillPayAllPayees', true);
        if (formattedResponse.responseCode === "200") {
            navManager.navigateTo("frmBillPayAllPayees");
            var nickname = this.getPayeeNickName();
            var payeeDelSuccessMsg = kony.i18n.getLocalizedString("kony.ahb.payments.payeeDeletionSuccessMsg").replace("###PLACEHOLDER###", '"' + nickname + '"');
            billPayAllPayeesController.bindGenericSuccess(payeeDelSuccessMsg);
            applicationManager.getPresentationUtility().dismissLoadingScreen();
        } else {
            var currFrom = kony.application.getCurrentForm().id;
            //navManager.navigateTo("frmManageEditRecipient");
            kony.print("deletePayeePresentationSuccess_currFrom " + currFrom);

            var frmAHBRegConfirmOTPController = applicationManager.getPresentationUtility().getController(currFrom, true);
            frmAHBRegConfirmOTPController.bindGenericError(formattedResponse.message);
            applicationManager.getPresentationUtility().dismissLoadingScreen();


        }

    },

    deletePayeePresentationError: function(errorResponse) {
        kony.print("deletePayeePresentationError_errorResponse " + errorResponse);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
        var billPayPayeeDetailsController = applicationManager.getPresentationUtility().getController('frmBillPayPayeeDetails', true);
        var formattedResponse = checkServiceResponseForErrorCode(errorResponse);
        billPayPayeeDetailsController.bindGenericError(formattedResponse.message);
    },

    /*-----------------------------------------------------------------------------------
  Name: 	handelPaymentSuccessErrorResponse
  Purpose: 	this is to handle response for multipayment
  Author: 	Bipin
  Date: 	27/11/2018
  Input: 	response
  Return: 	{ "isSuccess": true/false , "message" : "msg" };	
 ------------------------------------------------------------------------------------*/
    handelPaymentSuccessErrorResponse: function(response) {
        kony.print("handelPaymentSuccessErrorResponse response " + response);
        var fromattedResponse = checkServiceResponseForErrorCode(response);
        var msg = [];
        var isSuccess = "";
        var billPayType = this.getBillPayType();
        if (fromattedResponse.responseCode === "200") {
            var paymentResponse = response.PaymentResponse;
            kony.print("handelPaymentSuccessErrorResponse paymentResponse " + paymentResponse);
            if (paymentResponse) {
                for (var i = 0; i < paymentResponse.length; i++) {
                    var paymentRes = checkServiceResponseForErrorCode(paymentResponse[i]);
                    if (paymentRes.responseCode === "200") {
                        isSuccess = true;
                        var retObj = {
                            "status": "SUCCESS",
                            "referenceNumber": paymentResponse[i].referenceNumber,
                            "msg": paymentRes.message,
                            "responseCode": paymentRes.responseCode
                        }
                        msg.push(retObj);

                    } else {
                        isSuccess = false;
                        var retObj = {
                            "status": "error",
                            "referenceNumber": paymentResponse[i].referenceNumber,
                            "msg": paymentRes.message,
                            "responseCode": paymentRes.responseCode
                        }
                        msg.push(retObj);

                    }
                }
            }
        } else {
            isSuccess = false;
            var retObj = {
                "status": "error",
                "referenceNumber": "",
                "msg": fromattedResponse.message,
                "responseCode": fromattedResponse.responseCode
            }
            msg.push(retObj);
        }
        kony.print("handelPaymentSuccessErrorResponse retObj " + { "isSuccess": isSuccess, "message": msg });

        return { "isSuccess": isSuccess, "message": msg };
    },

  getUniqueServiceOpName: function() {
    var serviceProviderList = [];
    var uniqueOpearators = [];
    var operatorsData = this.getPaymentOperatorList();
    for (var i = 0; i < operatorsData.length; i++) {
      var operator = operatorsData[i];
      if (operator.serviceOperatorCode && uniqueOpearators.indexOf(operator.serviceOperatorCode) === -1 && operator.category === "Charity") {
        segData = {};
        segData.category = operator.category;
        segData.accountNumber = operator.accountNumber; 
        segData.serviceOperatorName = operator.serviceOperatorName;
        segData.serviceOperatorId = operator.serviceOperatorCode;
        uniqueOpearators[uniqueOpearators.length] = operator.serviceOperatorCode;
        serviceProviderList[serviceProviderList.length] = segData;
      }
    }
    return serviceProviderList;
  },

    /*-----------------------------------------------------------------------------------

    Name: 	quickPay
    Purpose: 	sets quickPayment entryPoint and the selected from account
    Author: 	Fariha
    Date: 	06/12/2018
    Input:	
    Return: 	

    ------------------------------------------------------------------------------------*/


    quickPay: function(pPayFromData, pEntryPoint) {

        this.resetAllPaymentData();
        var navManger = applicationManager.getNavigationManager();
        var configManager = applicationManager.getConfigurationManager();
        navManger.setEntryPoint(pEntryPoint, configManager.constants.ENTRY_POINT.quickPayment);
        this.setSelectedFromAccount(pPayFromData.AccountNumber);
        this.navigateToBillPay();

    },

    /*-----------------------------------------------------------------------------------

    Name: 	quickPay
    Purpose: 	sets billPayment entryPoint and the selected  card number
    Author: 	Fariha
    Date: 	24/10/2018
    Input:	
    Return: 	

    ------------------------------------------------------------------------------------*/

    billPayment: function(pPayFromData, pEntryPoint) {
        this.resetAllPaymentData();
        var navManger = applicationManager.getNavigationManager();
        var configManager = applicationManager.getConfigurationManager();
        navManger.setEntryPoint(pEntryPoint, configManager.constants.ENTRY_POINT.billPayment);
        this.setSelectedFromAccount(pPayFromData.CreditCardNo);
        this.navigateToBillPay();

    },

    /*-----------------------------------------------------------------------------------
     Name: 	checkForAccountsData
     Purpose: 	checks for from accounts data and navigates or shows error message
     Author: 	Bipin
     Date: 	06/12/2018
     Input: 	dashboardAccData,pFrom
     Return: 	NA	
    ------------------------------------------------------------------------------------*/
    checkForAccountsData: function(dashboardAccData, pFrom) {
        kony.print("checkForAccountsData " + JSON.stringify(dashboardAccData));
        var navManger = applicationManager.getNavigationManager();
      	this.setAllAccountsData(dashboardAccData);
        var fromAcc = this.getFromAccounts();
        if (fromAcc.length > 1) {
            navManger.navigateTo(pFrom);
        } else {
            applicationManager.getPresentationUtility().dismissLoadingScreen();
            var currFrom = kony.application.getCurrentForm().id;
            var controller = applicationManager.getPresentationUtility().getController(currFrom, true);
            controller.bindGenericError(kony.i18n.getLocalizedString("kony.ahb.BillPay.NoAccountsAvailable"));
        }
    }

});