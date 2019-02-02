define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var setterFunctions = {
        accountID: function(val, state) {
            state['accountID'] = val;
        },
        accountNumber: function(val, state) {
            state['accountNumber'] = val;
        },
        amount: function(val, state) {
            state['amount'] = val;
        },
        amountTransferedTillNow: function(val, state) {
            state['amountTransferedTillNow'] = val;
        },
        authenticationRequired: function(val, state) {
            state['authenticationRequired'] = val;
        },
        billCategory: function(val, state) {
            state['billCategory'] = val;
        },
        billCategoryId: function(val, state) {
            state['billCategoryId'] = val;
        },
        billDueAmount: function(val, state) {
            state['billDueAmount'] = val;
        },
        billDueDate: function(val, state) {
            state['billDueDate'] = val;
        },
        billerCategoryName: function(val, state) {
            state['billerCategoryName'] = val;
        },
        billGeneratedDate: function(val, state) {
            state['billGeneratedDate'] = val;
        },
        billid: function(val, state) {
            state['billid'] = val;
        },
        billPaidAmount: function(val, state) {
            state['billPaidAmount'] = val;
        },
        billPaidDate: function(val, state) {
            state['billPaidDate'] = val;
        },
        bulkPayString: function(val, state) {
            state['bulkPayString'] = val;
        },
        cashlessEmail: function(val, state) {
            state['cashlessEmail'] = val;
        },
        cashlessMode: function(val, state) {
            state['cashlessMode'] = val;
        },
        cashlessOTP: function(val, state) {
            state['cashlessOTP'] = val;
        },
        cashlessOTPValidDate: function(val, state) {
            state['cashlessOTPValidDate'] = val;
        },
        cashlessPersonName: function(val, state) {
            state['cashlessPersonName'] = val;
        },
        cashlessPhone: function(val, state) {
            state['cashlessPhone'] = val;
        },
        cashlessPin: function(val, state) {
            state['cashlessPin'] = val;
        },
        cashlessSecurityCode: function(val, state) {
            state['cashlessSecurityCode'] = val;
        },
        cashWithdrawalTransactionStatus: function(val, state) {
            state['cashWithdrawalTransactionStatus'] = val;
        },
        category: function(val, state) {
            state['category'] = val;
        },
        checkImage: function(val, state) {
            state['checkImage'] = val;
        },
        checkImageBack: function(val, state) {
            state['checkImageBack'] = val;
        },
        checkNumber: function(val, state) {
            state['checkNumber'] = val;
        },
        deliverBy: function(val, state) {
            state['deliverBy'] = val;
        },
        description: function(val, state) {
            state['description'] = val;
        },
        eBillEnable: function(val, state) {
            state['eBillEnable'] = val;
        },
        eBillSupport: function(val, state) {
            state['eBillSupport'] = val;
        },
        ebillURL: function(val, state) {
            state['ebillURL'] = val;
        },
        errmsg: function(val, state) {
            state['errmsg'] = val;
        },
        ExternalAccountNumber: function(val, state) {
            state['ExternalAccountNumber'] = val;
        },
        firstDeposit: function(val, state) {
            state['firstDeposit'] = val;
        },
        firstRecordNumber: function(val, state) {
            state['firstRecordNumber'] = val;
        },
        frequencyEndDate: function(val, state) {
            state['frequencyEndDate'] = val;
        },
        frequencyStartDate: function(val, state) {
            state['frequencyStartDate'] = val;
        },
        frequencyType: function(val, state) {
            state['frequencyType'] = val;
        },
        fromAccountBalance: function(val, state) {
            state['fromAccountBalance'] = val;
        },
        fromAccountName: function(val, state) {
            state['fromAccountName'] = val;
        },
        fromAccountNumber: function(val, state) {
            state['fromAccountNumber'] = val;
        },
        fromAccountType: function(val, state) {
            state['fromAccountType'] = val;
        },
        fromCheckNumber: function(val, state) {
            state['fromCheckNumber'] = val;
        },
        fromNickName: function(val, state) {
            state['fromNickName'] = val;
        },
        hasDepositImage: function(val, state) {
            state['hasDepositImage'] = val;
        },
        isScheduled: function(val, state) {
            state['isScheduled'] = val;
        },
        lastRecordNumber: function(val, state) {
            state['lastRecordNumber'] = val;
        },
        limit: function(val, state) {
            state['limit'] = val;
        },
        numberOfRecurrences: function(val, state) {
            state['numberOfRecurrences'] = val;
        },
        offset: function(val, state) {
            state['offset'] = val;
        },
        order: function(val, state) {
            state['order'] = val;
        },
        otp: function(val, state) {
            state['otp'] = val;
        },
        p2pContact: function(val, state) {
            state['p2pContact'] = val;
        },
        p2pRequiredDate: function(val, state) {
            state['p2pRequiredDate'] = val;
        },
        payeeAccountNumber: function(val, state) {
            state['payeeAccountNumber'] = val;
        },
        payeeAddressLine1: function(val, state) {
            state['payeeAddressLine1'] = val;
        },
        payeeId: function(val, state) {
            state['payeeId'] = val;
        },
        payeeName: function(val, state) {
            state['payeeName'] = val;
        },
        payeeNickName: function(val, state) {
            state['payeeNickName'] = val;
        },
        payoffFlag: function(val, state) {
            state['payoffFlag'] = val;
        },
        payPersonEmail: function(val, state) {
            state['payPersonEmail'] = val;
        },
        payPersonName: function(val, state) {
            state['payPersonName'] = val;
        },
        payPersonPhone: function(val, state) {
            state['payPersonPhone'] = val;
        },
        penaltyFlag: function(val, state) {
            state['penaltyFlag'] = val;
        },
        personId: function(val, state) {
            state['personId'] = val;
        },
        recurrenceDesc: function(val, state) {
            state['recurrenceDesc'] = val;
        },
        referenceId: function(val, state) {
            state['referenceId'] = val;
        },
        scheduledDate: function(val, state) {
            state['scheduledDate'] = val;
        },
        searchAmount: function(val, state) {
            state['searchAmount'] = val;
        },
        searchDateRange: function(val, state) {
            state['searchDateRange'] = val;
        },
        searchDescription: function(val, state) {
            state['searchDescription'] = val;
        },
        searchEndDate: function(val, state) {
            state['searchEndDate'] = val;
        },
        searchMaxAmount: function(val, state) {
            state['searchMaxAmount'] = val;
        },
        searchMinAmount: function(val, state) {
            state['searchMinAmount'] = val;
        },
        searchStartDate: function(val, state) {
            state['searchStartDate'] = val;
        },
        searchTransactionType: function(val, state) {
            state['searchTransactionType'] = val;
        },
        searchType: function(val, state) {
            state['searchType'] = val;
        },
        secondaryEmail: function(val, state) {
            state['secondaryEmail'] = val;
        },
        secondaryEmail2: function(val, state) {
            state['secondaryEmail2'] = val;
        },
        secondaryPhoneNumber2: function(val, state) {
            state['secondaryPhoneNumber2'] = val;
        },
        secondDeposit: function(val, state) {
            state['secondDeposit'] = val;
        },
        secondoryPhoneNumber: function(val, state) {
            state['secondoryPhoneNumber'] = val;
        },
        sortBy: function(val, state) {
            state['sortBy'] = val;
        },
        statusDescription: function(val, state) {
            state['statusDescription'] = val;
        },
        success: function(val, state) {
            state['success'] = val;
        },
        toAccountName: function(val, state) {
            state['toAccountName'] = val;
        },
        toAccountNumber: function(val, state) {
            state['toAccountNumber'] = val;
        },
        toAccountType: function(val, state) {
            state['toAccountType'] = val;
        },
        toCheckNumber: function(val, state) {
            state['toCheckNumber'] = val;
        },
        totalAmount: function(val, state) {
            state['totalAmount'] = val;
        },
        transactionComments: function(val, state) {
            state['transactionComments'] = val;
        },
        transactionDate: function(val, state) {
            state['transactionDate'] = val;
        },
        transactionId: function(val, state) {
            state['transactionId'] = val;
        },
        transactionsNotes: function(val, state) {
            state['transactionsNotes'] = val;
        },
        transactionType: function(val, state) {
            state['transactionType'] = val;
        },
        validDate: function(val, state) {
            state['validDate'] = val;
        },
        viewReportLink: function(val, state) {
            state['viewReportLink'] = val;
        },
        overdraft: function(val, state) {
            state['overdraft'] = val;
        },
        isPaypersonDeleted: function(val, state) {
            state['isPaypersonDeleted'] = val;
        },
        fee: function(val, state) {
            state['fee'] = val;
        },
        frontImage1: function(val, state) {
            state['frontImage1'] = val;
        },
        frontImage2: function(val, state) {
            state['frontImage2'] = val;
        },
        backImage1: function(val, state) {
            state['backImage1'] = val;
        },
        backImage2: function(val, state) {
            state['backImage2'] = val;
        },
        checkDesc: function(val, state) {
            state['checkDesc'] = val;
        },
        checkNumber1: function(val, state) {
            state['checkNumber1'] = val;
        },
        checkNumber2: function(val, state) {
            state['checkNumber2'] = val;
        },
        bankName1: function(val, state) {
            state['bankName1'] = val;
        },
        bankName2: function(val, state) {
            state['bankName2'] = val;
        },
        withdrawlAmount1: function(val, state) {
            state['withdrawlAmount1'] = val;
        },
        withdrawlAmount2: function(val, state) {
            state['withdrawlAmount2'] = val;
        },
        totalCheckAmount: function(val, state) {
            state['totalCheckAmount'] = val;
        },
        cashAmount: function(val, state) {
            state['cashAmount'] = val;
        },
        payeeCurrency: function(val, state) {
            state['payeeCurrency'] = val;
        },
        swiftCode: function(val, state) {
            state['swiftCode'] = val;
        },
        wireAccountType: function(val, state) {
            state['wireAccountType'] = val;
        },
        country: function(val, state) {
            state['country'] = val;
        },
        IBAN: function(val, state) {
            state['IBAN'] = val;
        },
        bankName: function(val, state) {
            state['bankName'] = val;
        },
        routingNumber: function(val, state) {
            state['routingNumber'] = val;
        },
        internationalRoutingCode: function(val, state) {
            state['internationalRoutingCode'] = val;
        },
        zipCode: function(val, state) {
            state['zipCode'] = val;
        },
        cityName: function(val, state) {
            state['cityName'] = val;
        },
        state: function(val, state) {
            state['state'] = val;
        },
        bankAddressLine1: function(val, state) {
            state['bankAddressLine1'] = val;
        },
        bankAddressLine2: function(val, state) {
            state['bankAddressLine2'] = val;
        },
        bankCity: function(val, state) {
            state['bankCity'] = val;
        },
        bankState: function(val, state) {
            state['bankState'] = val;
        },
        bankZip: function(val, state) {
            state['bankZip'] = val;
        },
        payeeType: function(val, state) {
            state['payeeType'] = val;
        },
        disputeReason: function(val, state) {
            state['disputeReason'] = val;
        },
        disputeDescription: function(val, state) {
            state['disputeDescription'] = val;
        },
        checkDateOfIssue: function(val, state) {
            state['checkDateOfIssue'] = val;
        },
        checkReason: function(val, state) {
            state['checkReason'] = val;
        },
        isPayeeDeleted: function(val, state) {
            state['isPayeeDeleted'] = val;
        },
        payeeAddressLine2: function(val, state) {
            state['payeeAddressLine2'] = val;
        },
        amountRecieved: function(val, state) {
            state['amountRecieved'] = val;
        },
        requestValidityInMonths: function(val, state) {
            state['requestValidityInMonths'] = val;
        },
        requestValidity: function(val, state) {
            state['requestValidity'] = val;
        },
        requestType: function(val, state) {
            state['requestType'] = val;
        },
        disputeDate: function(val, state) {
            state['disputeDate'] = val;
        },
        disputeStatus: function(val, state) {
            state['disputeStatus'] = val;
        },
        isDisputed: function(val, state) {
            state['isDisputed'] = val;
        },
        cardId: function(val, state) {
            state['cardId'] = val;
        },
        isOverdraft: function(val, state) {
            state['isOverdraft'] = val;
        },
    };
    //Create the Model Class
    function Transactions(defaultValues) {
        var privateState = {};
        privateState.accountID = defaultValues ? (defaultValues["accountID"] ? defaultValues["accountID"] : null) : null;
        privateState.accountNumber = defaultValues ? (defaultValues["accountNumber"] ? defaultValues["accountNumber"] : null) : null;
        privateState.amount = defaultValues ? (defaultValues["amount"] ? defaultValues["amount"] : null) : null;
        privateState.amountTransferedTillNow = defaultValues ? (defaultValues["amountTransferedTillNow"] ? defaultValues["amountTransferedTillNow"] : null) : null;
        privateState.authenticationRequired = defaultValues ? (defaultValues["authenticationRequired"] ? defaultValues["authenticationRequired"] : null) : null;
        privateState.billCategory = defaultValues ? (defaultValues["billCategory"] ? defaultValues["billCategory"] : null) : null;
        privateState.billCategoryId = defaultValues ? (defaultValues["billCategoryId"] ? defaultValues["billCategoryId"] : null) : null;
        privateState.billDueAmount = defaultValues ? (defaultValues["billDueAmount"] ? defaultValues["billDueAmount"] : null) : null;
        privateState.billDueDate = defaultValues ? (defaultValues["billDueDate"] ? defaultValues["billDueDate"] : null) : null;
        privateState.billerCategoryName = defaultValues ? (defaultValues["billerCategoryName"] ? defaultValues["billerCategoryName"] : null) : null;
        privateState.billGeneratedDate = defaultValues ? (defaultValues["billGeneratedDate"] ? defaultValues["billGeneratedDate"] : null) : null;
        privateState.billid = defaultValues ? (defaultValues["billid"] ? defaultValues["billid"] : null) : null;
        privateState.billPaidAmount = defaultValues ? (defaultValues["billPaidAmount"] ? defaultValues["billPaidAmount"] : null) : null;
        privateState.billPaidDate = defaultValues ? (defaultValues["billPaidDate"] ? defaultValues["billPaidDate"] : null) : null;
        privateState.bulkPayString = defaultValues ? (defaultValues["bulkPayString"] ? defaultValues["bulkPayString"] : null) : null;
        privateState.cashlessEmail = defaultValues ? (defaultValues["cashlessEmail"] ? defaultValues["cashlessEmail"] : null) : null;
        privateState.cashlessMode = defaultValues ? (defaultValues["cashlessMode"] ? defaultValues["cashlessMode"] : null) : null;
        privateState.cashlessOTP = defaultValues ? (defaultValues["cashlessOTP"] ? defaultValues["cashlessOTP"] : null) : null;
        privateState.cashlessOTPValidDate = defaultValues ? (defaultValues["cashlessOTPValidDate"] ? defaultValues["cashlessOTPValidDate"] : null) : null;
        privateState.cashlessPersonName = defaultValues ? (defaultValues["cashlessPersonName"] ? defaultValues["cashlessPersonName"] : null) : null;
        privateState.cashlessPhone = defaultValues ? (defaultValues["cashlessPhone"] ? defaultValues["cashlessPhone"] : null) : null;
        privateState.cashlessPin = defaultValues ? (defaultValues["cashlessPin"] ? defaultValues["cashlessPin"] : null) : null;
        privateState.cashlessSecurityCode = defaultValues ? (defaultValues["cashlessSecurityCode"] ? defaultValues["cashlessSecurityCode"] : null) : null;
        privateState.cashWithdrawalTransactionStatus = defaultValues ? (defaultValues["cashWithdrawalTransactionStatus"] ? defaultValues["cashWithdrawalTransactionStatus"] : null) : null;
        privateState.category = defaultValues ? (defaultValues["category"] ? defaultValues["category"] : null) : null;
        privateState.checkImage = defaultValues ? (defaultValues["checkImage"] ? defaultValues["checkImage"] : null) : null;
        privateState.checkImageBack = defaultValues ? (defaultValues["checkImageBack"] ? defaultValues["checkImageBack"] : null) : null;
        privateState.checkNumber = defaultValues ? (defaultValues["checkNumber"] ? defaultValues["checkNumber"] : null) : null;
        privateState.deliverBy = defaultValues ? (defaultValues["deliverBy"] ? defaultValues["deliverBy"] : null) : null;
        privateState.description = defaultValues ? (defaultValues["description"] ? defaultValues["description"] : null) : null;
        privateState.eBillEnable = defaultValues ? (defaultValues["eBillEnable"] ? defaultValues["eBillEnable"] : null) : null;
        privateState.eBillSupport = defaultValues ? (defaultValues["eBillSupport"] ? defaultValues["eBillSupport"] : null) : null;
        privateState.ebillURL = defaultValues ? (defaultValues["ebillURL"] ? defaultValues["ebillURL"] : null) : null;
        privateState.errmsg = defaultValues ? (defaultValues["errmsg"] ? defaultValues["errmsg"] : null) : null;
        privateState.ExternalAccountNumber = defaultValues ? (defaultValues["ExternalAccountNumber"] ? defaultValues["ExternalAccountNumber"] : null) : null;
        privateState.firstDeposit = defaultValues ? (defaultValues["firstDeposit"] ? defaultValues["firstDeposit"] : null) : null;
        privateState.firstRecordNumber = defaultValues ? (defaultValues["firstRecordNumber"] ? defaultValues["firstRecordNumber"] : null) : null;
        privateState.frequencyEndDate = defaultValues ? (defaultValues["frequencyEndDate"] ? defaultValues["frequencyEndDate"] : null) : null;
        privateState.frequencyStartDate = defaultValues ? (defaultValues["frequencyStartDate"] ? defaultValues["frequencyStartDate"] : null) : null;
        privateState.frequencyType = defaultValues ? (defaultValues["frequencyType"] ? defaultValues["frequencyType"] : null) : null;
        privateState.fromAccountBalance = defaultValues ? (defaultValues["fromAccountBalance"] ? defaultValues["fromAccountBalance"] : null) : null;
        privateState.fromAccountName = defaultValues ? (defaultValues["fromAccountName"] ? defaultValues["fromAccountName"] : null) : null;
        privateState.fromAccountNumber = defaultValues ? (defaultValues["fromAccountNumber"] ? defaultValues["fromAccountNumber"] : null) : null;
        privateState.fromAccountType = defaultValues ? (defaultValues["fromAccountType"] ? defaultValues["fromAccountType"] : null) : null;
        privateState.fromCheckNumber = defaultValues ? (defaultValues["fromCheckNumber"] ? defaultValues["fromCheckNumber"] : null) : null;
        privateState.fromNickName = defaultValues ? (defaultValues["fromNickName"] ? defaultValues["fromNickName"] : null) : null;
        privateState.hasDepositImage = defaultValues ? (defaultValues["hasDepositImage"] ? defaultValues["hasDepositImage"] : null) : null;
        privateState.isScheduled = defaultValues ? (defaultValues["isScheduled"] ? defaultValues["isScheduled"] : null) : null;
        privateState.lastRecordNumber = defaultValues ? (defaultValues["lastRecordNumber"] ? defaultValues["lastRecordNumber"] : null) : null;
        privateState.limit = defaultValues ? (defaultValues["limit"] ? defaultValues["limit"] : null) : null;
        privateState.numberOfRecurrences = defaultValues ? (defaultValues["numberOfRecurrences"] ? defaultValues["numberOfRecurrences"] : null) : null;
        privateState.offset = defaultValues ? (defaultValues["offset"] ? defaultValues["offset"] : null) : null;
        privateState.order = defaultValues ? (defaultValues["order"] ? defaultValues["order"] : null) : null;
        privateState.otp = defaultValues ? (defaultValues["otp"] ? defaultValues["otp"] : null) : null;
        privateState.p2pContact = defaultValues ? (defaultValues["p2pContact"] ? defaultValues["p2pContact"] : null) : null;
        privateState.p2pRequiredDate = defaultValues ? (defaultValues["p2pRequiredDate"] ? defaultValues["p2pRequiredDate"] : null) : null;
        privateState.payeeAccountNumber = defaultValues ? (defaultValues["payeeAccountNumber"] ? defaultValues["payeeAccountNumber"] : null) : null;
        privateState.payeeAddressLine1 = defaultValues ? (defaultValues["payeeAddressLine1"] ? defaultValues["payeeAddressLine1"] : null) : null;
        privateState.payeeId = defaultValues ? (defaultValues["payeeId"] ? defaultValues["payeeId"] : null) : null;
        privateState.payeeName = defaultValues ? (defaultValues["payeeName"] ? defaultValues["payeeName"] : null) : null;
        privateState.payeeNickName = defaultValues ? (defaultValues["payeeNickName"] ? defaultValues["payeeNickName"] : null) : null;
        privateState.payoffFlag = defaultValues ? (defaultValues["payoffFlag"] ? defaultValues["payoffFlag"] : null) : null;
        privateState.payPersonEmail = defaultValues ? (defaultValues["payPersonEmail"] ? defaultValues["payPersonEmail"] : null) : null;
        privateState.payPersonName = defaultValues ? (defaultValues["payPersonName"] ? defaultValues["payPersonName"] : null) : null;
        privateState.payPersonPhone = defaultValues ? (defaultValues["payPersonPhone"] ? defaultValues["payPersonPhone"] : null) : null;
        privateState.penaltyFlag = defaultValues ? (defaultValues["penaltyFlag"] ? defaultValues["penaltyFlag"] : null) : null;
        privateState.personId = defaultValues ? (defaultValues["personId"] ? defaultValues["personId"] : null) : null;
        privateState.recurrenceDesc = defaultValues ? (defaultValues["recurrenceDesc"] ? defaultValues["recurrenceDesc"] : null) : null;
        privateState.referenceId = defaultValues ? (defaultValues["referenceId"] ? defaultValues["referenceId"] : null) : null;
        privateState.scheduledDate = defaultValues ? (defaultValues["scheduledDate"] ? defaultValues["scheduledDate"] : null) : null;
        privateState.searchAmount = defaultValues ? (defaultValues["searchAmount"] ? defaultValues["searchAmount"] : null) : null;
        privateState.searchDateRange = defaultValues ? (defaultValues["searchDateRange"] ? defaultValues["searchDateRange"] : null) : null;
        privateState.searchDescription = defaultValues ? (defaultValues["searchDescription"] ? defaultValues["searchDescription"] : null) : null;
        privateState.searchEndDate = defaultValues ? (defaultValues["searchEndDate"] ? defaultValues["searchEndDate"] : null) : null;
        privateState.searchMaxAmount = defaultValues ? (defaultValues["searchMaxAmount"] ? defaultValues["searchMaxAmount"] : null) : null;
        privateState.searchMinAmount = defaultValues ? (defaultValues["searchMinAmount"] ? defaultValues["searchMinAmount"] : null) : null;
        privateState.searchStartDate = defaultValues ? (defaultValues["searchStartDate"] ? defaultValues["searchStartDate"] : null) : null;
        privateState.searchTransactionType = defaultValues ? (defaultValues["searchTransactionType"] ? defaultValues["searchTransactionType"] : null) : null;
        privateState.searchType = defaultValues ? (defaultValues["searchType"] ? defaultValues["searchType"] : null) : null;
        privateState.secondaryEmail = defaultValues ? (defaultValues["secondaryEmail"] ? defaultValues["secondaryEmail"] : null) : null;
        privateState.secondaryEmail2 = defaultValues ? (defaultValues["secondaryEmail2"] ? defaultValues["secondaryEmail2"] : null) : null;
        privateState.secondaryPhoneNumber2 = defaultValues ? (defaultValues["secondaryPhoneNumber2"] ? defaultValues["secondaryPhoneNumber2"] : null) : null;
        privateState.secondDeposit = defaultValues ? (defaultValues["secondDeposit"] ? defaultValues["secondDeposit"] : null) : null;
        privateState.secondoryPhoneNumber = defaultValues ? (defaultValues["secondoryPhoneNumber"] ? defaultValues["secondoryPhoneNumber"] : null) : null;
        privateState.sortBy = defaultValues ? (defaultValues["sortBy"] ? defaultValues["sortBy"] : null) : null;
        privateState.statusDescription = defaultValues ? (defaultValues["statusDescription"] ? defaultValues["statusDescription"] : null) : null;
        privateState.success = defaultValues ? (defaultValues["success"] ? defaultValues["success"] : null) : null;
        privateState.toAccountName = defaultValues ? (defaultValues["toAccountName"] ? defaultValues["toAccountName"] : null) : null;
        privateState.toAccountNumber = defaultValues ? (defaultValues["toAccountNumber"] ? defaultValues["toAccountNumber"] : null) : null;
        privateState.toAccountType = defaultValues ? (defaultValues["toAccountType"] ? defaultValues["toAccountType"] : null) : null;
        privateState.toCheckNumber = defaultValues ? (defaultValues["toCheckNumber"] ? defaultValues["toCheckNumber"] : null) : null;
        privateState.totalAmount = defaultValues ? (defaultValues["totalAmount"] ? defaultValues["totalAmount"] : null) : null;
        privateState.transactionComments = defaultValues ? (defaultValues["transactionComments"] ? defaultValues["transactionComments"] : null) : null;
        privateState.transactionDate = defaultValues ? (defaultValues["transactionDate"] ? defaultValues["transactionDate"] : null) : null;
        privateState.transactionId = defaultValues ? (defaultValues["transactionId"] ? defaultValues["transactionId"] : null) : null;
        privateState.transactionsNotes = defaultValues ? (defaultValues["transactionsNotes"] ? defaultValues["transactionsNotes"] : null) : null;
        privateState.transactionType = defaultValues ? (defaultValues["transactionType"] ? defaultValues["transactionType"] : null) : null;
        privateState.validDate = defaultValues ? (defaultValues["validDate"] ? defaultValues["validDate"] : null) : null;
        privateState.viewReportLink = defaultValues ? (defaultValues["viewReportLink"] ? defaultValues["viewReportLink"] : null) : null;
        privateState.overdraft = defaultValues ? (defaultValues["overdraft"] ? defaultValues["overdraft"] : null) : null;
        privateState.isPaypersonDeleted = defaultValues ? (defaultValues["isPaypersonDeleted"] ? defaultValues["isPaypersonDeleted"] : null) : null;
        privateState.fee = defaultValues ? (defaultValues["fee"] ? defaultValues["fee"] : null) : null;
        privateState.frontImage1 = defaultValues ? (defaultValues["frontImage1"] ? defaultValues["frontImage1"] : null) : null;
        privateState.frontImage2 = defaultValues ? (defaultValues["frontImage2"] ? defaultValues["frontImage2"] : null) : null;
        privateState.backImage1 = defaultValues ? (defaultValues["backImage1"] ? defaultValues["backImage1"] : null) : null;
        privateState.backImage2 = defaultValues ? (defaultValues["backImage2"] ? defaultValues["backImage2"] : null) : null;
        privateState.checkDesc = defaultValues ? (defaultValues["checkDesc"] ? defaultValues["checkDesc"] : null) : null;
        privateState.checkNumber1 = defaultValues ? (defaultValues["checkNumber1"] ? defaultValues["checkNumber1"] : null) : null;
        privateState.checkNumber2 = defaultValues ? (defaultValues["checkNumber2"] ? defaultValues["checkNumber2"] : null) : null;
        privateState.bankName1 = defaultValues ? (defaultValues["bankName1"] ? defaultValues["bankName1"] : null) : null;
        privateState.bankName2 = defaultValues ? (defaultValues["bankName2"] ? defaultValues["bankName2"] : null) : null;
        privateState.withdrawlAmount1 = defaultValues ? (defaultValues["withdrawlAmount1"] ? defaultValues["withdrawlAmount1"] : null) : null;
        privateState.withdrawlAmount2 = defaultValues ? (defaultValues["withdrawlAmount2"] ? defaultValues["withdrawlAmount2"] : null) : null;
        privateState.totalCheckAmount = defaultValues ? (defaultValues["totalCheckAmount"] ? defaultValues["totalCheckAmount"] : null) : null;
        privateState.cashAmount = defaultValues ? (defaultValues["cashAmount"] ? defaultValues["cashAmount"] : null) : null;
        privateState.payeeCurrency = defaultValues ? (defaultValues["payeeCurrency"] ? defaultValues["payeeCurrency"] : null) : null;
        privateState.swiftCode = defaultValues ? (defaultValues["swiftCode"] ? defaultValues["swiftCode"] : null) : null;
        privateState.wireAccountType = defaultValues ? (defaultValues["wireAccountType"] ? defaultValues["wireAccountType"] : null) : null;
        privateState.country = defaultValues ? (defaultValues["country"] ? defaultValues["country"] : null) : null;
        privateState.IBAN = defaultValues ? (defaultValues["IBAN"] ? defaultValues["IBAN"] : null) : null;
        privateState.bankName = defaultValues ? (defaultValues["bankName"] ? defaultValues["bankName"] : null) : null;
        privateState.routingNumber = defaultValues ? (defaultValues["routingNumber"] ? defaultValues["routingNumber"] : null) : null;
        privateState.internationalRoutingCode = defaultValues ? (defaultValues["internationalRoutingCode"] ? defaultValues["internationalRoutingCode"] : null) : null;
        privateState.zipCode = defaultValues ? (defaultValues["zipCode"] ? defaultValues["zipCode"] : null) : null;
        privateState.cityName = defaultValues ? (defaultValues["cityName"] ? defaultValues["cityName"] : null) : null;
        privateState.state = defaultValues ? (defaultValues["state"] ? defaultValues["state"] : null) : null;
        privateState.bankAddressLine1 = defaultValues ? (defaultValues["bankAddressLine1"] ? defaultValues["bankAddressLine1"] : null) : null;
        privateState.bankAddressLine2 = defaultValues ? (defaultValues["bankAddressLine2"] ? defaultValues["bankAddressLine2"] : null) : null;
        privateState.bankCity = defaultValues ? (defaultValues["bankCity"] ? defaultValues["bankCity"] : null) : null;
        privateState.bankState = defaultValues ? (defaultValues["bankState"] ? defaultValues["bankState"] : null) : null;
        privateState.bankZip = defaultValues ? (defaultValues["bankZip"] ? defaultValues["bankZip"] : null) : null;
        privateState.payeeType = defaultValues ? (defaultValues["payeeType"] ? defaultValues["payeeType"] : null) : null;
        privateState.disputeReason = defaultValues ? (defaultValues["disputeReason"] ? defaultValues["disputeReason"] : null) : null;
        privateState.disputeDescription = defaultValues ? (defaultValues["disputeDescription"] ? defaultValues["disputeDescription"] : null) : null;
        privateState.checkDateOfIssue = defaultValues ? (defaultValues["checkDateOfIssue"] ? defaultValues["checkDateOfIssue"] : null) : null;
        privateState.checkReason = defaultValues ? (defaultValues["checkReason"] ? defaultValues["checkReason"] : null) : null;
        privateState.isPayeeDeleted = defaultValues ? (defaultValues["isPayeeDeleted"] ? defaultValues["isPayeeDeleted"] : null) : null;
        privateState.payeeAddressLine2 = defaultValues ? (defaultValues["payeeAddressLine2"] ? defaultValues["payeeAddressLine2"] : null) : null;
        privateState.amountRecieved = defaultValues ? (defaultValues["amountRecieved"] ? defaultValues["amountRecieved"] : null) : null;
        privateState.requestValidityInMonths = defaultValues ? (defaultValues["requestValidityInMonths"] ? defaultValues["requestValidityInMonths"] : null) : null;
        privateState.requestValidity = defaultValues ? (defaultValues["requestValidity"] ? defaultValues["requestValidity"] : null) : null;
        privateState.requestType = defaultValues ? (defaultValues["requestType"] ? defaultValues["requestType"] : null) : null;
        privateState.disputeDate = defaultValues ? (defaultValues["disputeDate"] ? defaultValues["disputeDate"] : null) : null;
        privateState.disputeStatus = defaultValues ? (defaultValues["disputeStatus"] ? defaultValues["disputeStatus"] : null) : null;
        privateState.isDisputed = defaultValues ? (defaultValues["isDisputed"] ? defaultValues["isDisputed"] : null) : null;
        privateState.cardId = defaultValues ? (defaultValues["cardId"] ? defaultValues["cardId"] : null) : null;
        privateState.isOverdraft = defaultValues ? (defaultValues["isOverdraft"] ? defaultValues["isOverdraft"] : null) : null;
        //Using parent contructor to create other properties req. to kony sdk	
        BaseModel.call(this);
        //Defining Getter/Setters
        Object.defineProperties(this, {
            "accountID": {
                get: function() {
                    return privateState.accountID
                },
                set: function(val) {
                    setterFunctions['accountID'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "accountNumber": {
                get: function() {
                    return privateState.accountNumber
                },
                set: function(val) {
                    setterFunctions['accountNumber'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "amount": {
                get: function() {
                    return privateState.amount
                },
                set: function(val) {
                    setterFunctions['amount'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "amountTransferedTillNow": {
                get: function() {
                    return privateState.amountTransferedTillNow
                },
                set: function(val) {
                    setterFunctions['amountTransferedTillNow'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "authenticationRequired": {
                get: function() {
                    return privateState.authenticationRequired
                },
                set: function(val) {
                    setterFunctions['authenticationRequired'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "billCategory": {
                get: function() {
                    return privateState.billCategory
                },
                set: function(val) {
                    setterFunctions['billCategory'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "billCategoryId": {
                get: function() {
                    return privateState.billCategoryId
                },
                set: function(val) {
                    setterFunctions['billCategoryId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "billDueAmount": {
                get: function() {
                    return privateState.billDueAmount
                },
                set: function(val) {
                    setterFunctions['billDueAmount'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "billDueDate": {
                get: function() {
                    return privateState.billDueDate
                },
                set: function(val) {
                    setterFunctions['billDueDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "billerCategoryName": {
                get: function() {
                    return privateState.billerCategoryName
                },
                set: function(val) {
                    setterFunctions['billerCategoryName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "billGeneratedDate": {
                get: function() {
                    return privateState.billGeneratedDate
                },
                set: function(val) {
                    setterFunctions['billGeneratedDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "billid": {
                get: function() {
                    return privateState.billid
                },
                set: function(val) {
                    setterFunctions['billid'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "billPaidAmount": {
                get: function() {
                    return privateState.billPaidAmount
                },
                set: function(val) {
                    setterFunctions['billPaidAmount'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "billPaidDate": {
                get: function() {
                    return privateState.billPaidDate
                },
                set: function(val) {
                    setterFunctions['billPaidDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "bulkPayString": {
                get: function() {
                    return privateState.bulkPayString
                },
                set: function(val) {
                    setterFunctions['bulkPayString'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "cashlessEmail": {
                get: function() {
                    return privateState.cashlessEmail
                },
                set: function(val) {
                    setterFunctions['cashlessEmail'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "cashlessMode": {
                get: function() {
                    return privateState.cashlessMode
                },
                set: function(val) {
                    setterFunctions['cashlessMode'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "cashlessOTP": {
                get: function() {
                    return privateState.cashlessOTP
                },
                set: function(val) {
                    setterFunctions['cashlessOTP'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "cashlessOTPValidDate": {
                get: function() {
                    return privateState.cashlessOTPValidDate
                },
                set: function(val) {
                    setterFunctions['cashlessOTPValidDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "cashlessPersonName": {
                get: function() {
                    return privateState.cashlessPersonName
                },
                set: function(val) {
                    setterFunctions['cashlessPersonName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "cashlessPhone": {
                get: function() {
                    return privateState.cashlessPhone
                },
                set: function(val) {
                    setterFunctions['cashlessPhone'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "cashlessPin": {
                get: function() {
                    return privateState.cashlessPin
                },
                set: function(val) {
                    setterFunctions['cashlessPin'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "cashlessSecurityCode": {
                get: function() {
                    return privateState.cashlessSecurityCode
                },
                set: function(val) {
                    setterFunctions['cashlessSecurityCode'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "cashWithdrawalTransactionStatus": {
                get: function() {
                    return privateState.cashWithdrawalTransactionStatus
                },
                set: function(val) {
                    setterFunctions['cashWithdrawalTransactionStatus'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "category": {
                get: function() {
                    return privateState.category
                },
                set: function(val) {
                    setterFunctions['category'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "checkImage": {
                get: function() {
                    return privateState.checkImage
                },
                set: function(val) {
                    setterFunctions['checkImage'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "checkImageBack": {
                get: function() {
                    return privateState.checkImageBack
                },
                set: function(val) {
                    setterFunctions['checkImageBack'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "checkNumber": {
                get: function() {
                    return privateState.checkNumber
                },
                set: function(val) {
                    setterFunctions['checkNumber'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "deliverBy": {
                get: function() {
                    return privateState.deliverBy
                },
                set: function(val) {
                    setterFunctions['deliverBy'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "description": {
                get: function() {
                    return privateState.description
                },
                set: function(val) {
                    setterFunctions['description'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "eBillEnable": {
                get: function() {
                    return privateState.eBillEnable
                },
                set: function(val) {
                    setterFunctions['eBillEnable'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "eBillSupport": {
                get: function() {
                    return privateState.eBillSupport
                },
                set: function(val) {
                    setterFunctions['eBillSupport'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "ebillURL": {
                get: function() {
                    return privateState.ebillURL
                },
                set: function(val) {
                    setterFunctions['ebillURL'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "errmsg": {
                get: function() {
                    return privateState.errmsg
                },
                set: function(val) {
                    setterFunctions['errmsg'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "ExternalAccountNumber": {
                get: function() {
                    return privateState.ExternalAccountNumber
                },
                set: function(val) {
                    setterFunctions['ExternalAccountNumber'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "firstDeposit": {
                get: function() {
                    return privateState.firstDeposit
                },
                set: function(val) {
                    setterFunctions['firstDeposit'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "firstRecordNumber": {
                get: function() {
                    return privateState.firstRecordNumber
                },
                set: function(val) {
                    setterFunctions['firstRecordNumber'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "frequencyEndDate": {
                get: function() {
                    return privateState.frequencyEndDate
                },
                set: function(val) {
                    setterFunctions['frequencyEndDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "frequencyStartDate": {
                get: function() {
                    return privateState.frequencyStartDate
                },
                set: function(val) {
                    setterFunctions['frequencyStartDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "frequencyType": {
                get: function() {
                    return privateState.frequencyType
                },
                set: function(val) {
                    setterFunctions['frequencyType'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "fromAccountBalance": {
                get: function() {
                    return privateState.fromAccountBalance
                },
                set: function(val) {
                    setterFunctions['fromAccountBalance'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "fromAccountName": {
                get: function() {
                    return privateState.fromAccountName
                },
                set: function(val) {
                    setterFunctions['fromAccountName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "fromAccountNumber": {
                get: function() {
                    return privateState.fromAccountNumber
                },
                set: function(val) {
                    setterFunctions['fromAccountNumber'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "fromAccountType": {
                get: function() {
                    return privateState.fromAccountType
                },
                set: function(val) {
                    setterFunctions['fromAccountType'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "fromCheckNumber": {
                get: function() {
                    return privateState.fromCheckNumber
                },
                set: function(val) {
                    setterFunctions['fromCheckNumber'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "fromNickName": {
                get: function() {
                    return privateState.fromNickName
                },
                set: function(val) {
                    setterFunctions['fromNickName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "hasDepositImage": {
                get: function() {
                    return privateState.hasDepositImage
                },
                set: function(val) {
                    setterFunctions['hasDepositImage'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "isScheduled": {
                get: function() {
                    return privateState.isScheduled
                },
                set: function(val) {
                    setterFunctions['isScheduled'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "lastRecordNumber": {
                get: function() {
                    return privateState.lastRecordNumber
                },
                set: function(val) {
                    setterFunctions['lastRecordNumber'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "limit": {
                get: function() {
                    return privateState.limit
                },
                set: function(val) {
                    setterFunctions['limit'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "numberOfRecurrences": {
                get: function() {
                    return privateState.numberOfRecurrences
                },
                set: function(val) {
                    setterFunctions['numberOfRecurrences'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "offset": {
                get: function() {
                    return privateState.offset
                },
                set: function(val) {
                    setterFunctions['offset'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "order": {
                get: function() {
                    return privateState.order
                },
                set: function(val) {
                    setterFunctions['order'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "otp": {
                get: function() {
                    return privateState.otp
                },
                set: function(val) {
                    setterFunctions['otp'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "p2pContact": {
                get: function() {
                    return privateState.p2pContact
                },
                set: function(val) {
                    setterFunctions['p2pContact'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "p2pRequiredDate": {
                get: function() {
                    return privateState.p2pRequiredDate
                },
                set: function(val) {
                    setterFunctions['p2pRequiredDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "payeeAccountNumber": {
                get: function() {
                    return privateState.payeeAccountNumber
                },
                set: function(val) {
                    setterFunctions['payeeAccountNumber'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "payeeAddressLine1": {
                get: function() {
                    return privateState.payeeAddressLine1
                },
                set: function(val) {
                    setterFunctions['payeeAddressLine1'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "payeeId": {
                get: function() {
                    return privateState.payeeId
                },
                set: function(val) {
                    setterFunctions['payeeId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "payeeName": {
                get: function() {
                    return privateState.payeeName
                },
                set: function(val) {
                    setterFunctions['payeeName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "payeeNickName": {
                get: function() {
                    return privateState.payeeNickName
                },
                set: function(val) {
                    setterFunctions['payeeNickName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "payoffFlag": {
                get: function() {
                    return privateState.payoffFlag
                },
                set: function(val) {
                    setterFunctions['payoffFlag'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "payPersonEmail": {
                get: function() {
                    return privateState.payPersonEmail
                },
                set: function(val) {
                    setterFunctions['payPersonEmail'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "payPersonName": {
                get: function() {
                    return privateState.payPersonName
                },
                set: function(val) {
                    setterFunctions['payPersonName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "payPersonPhone": {
                get: function() {
                    return privateState.payPersonPhone
                },
                set: function(val) {
                    setterFunctions['payPersonPhone'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "penaltyFlag": {
                get: function() {
                    return privateState.penaltyFlag
                },
                set: function(val) {
                    setterFunctions['penaltyFlag'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "personId": {
                get: function() {
                    return privateState.personId
                },
                set: function(val) {
                    setterFunctions['personId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "recurrenceDesc": {
                get: function() {
                    return privateState.recurrenceDesc
                },
                set: function(val) {
                    setterFunctions['recurrenceDesc'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "referenceId": {
                get: function() {
                    return privateState.referenceId
                },
                set: function(val) {
                    setterFunctions['referenceId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "scheduledDate": {
                get: function() {
                    return privateState.scheduledDate
                },
                set: function(val) {
                    setterFunctions['scheduledDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "searchAmount": {
                get: function() {
                    return privateState.searchAmount
                },
                set: function(val) {
                    setterFunctions['searchAmount'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "searchDateRange": {
                get: function() {
                    return privateState.searchDateRange
                },
                set: function(val) {
                    setterFunctions['searchDateRange'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "searchDescription": {
                get: function() {
                    return privateState.searchDescription
                },
                set: function(val) {
                    setterFunctions['searchDescription'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "searchEndDate": {
                get: function() {
                    return privateState.searchEndDate
                },
                set: function(val) {
                    setterFunctions['searchEndDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "searchMaxAmount": {
                get: function() {
                    return privateState.searchMaxAmount
                },
                set: function(val) {
                    setterFunctions['searchMaxAmount'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "searchMinAmount": {
                get: function() {
                    return privateState.searchMinAmount
                },
                set: function(val) {
                    setterFunctions['searchMinAmount'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "searchStartDate": {
                get: function() {
                    return privateState.searchStartDate
                },
                set: function(val) {
                    setterFunctions['searchStartDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "searchTransactionType": {
                get: function() {
                    return privateState.searchTransactionType
                },
                set: function(val) {
                    setterFunctions['searchTransactionType'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "searchType": {
                get: function() {
                    return privateState.searchType
                },
                set: function(val) {
                    setterFunctions['searchType'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "secondaryEmail": {
                get: function() {
                    return privateState.secondaryEmail
                },
                set: function(val) {
                    setterFunctions['secondaryEmail'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "secondaryEmail2": {
                get: function() {
                    return privateState.secondaryEmail2
                },
                set: function(val) {
                    setterFunctions['secondaryEmail2'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "secondaryPhoneNumber2": {
                get: function() {
                    return privateState.secondaryPhoneNumber2
                },
                set: function(val) {
                    setterFunctions['secondaryPhoneNumber2'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "secondDeposit": {
                get: function() {
                    return privateState.secondDeposit
                },
                set: function(val) {
                    setterFunctions['secondDeposit'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "secondoryPhoneNumber": {
                get: function() {
                    return privateState.secondoryPhoneNumber
                },
                set: function(val) {
                    setterFunctions['secondoryPhoneNumber'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "sortBy": {
                get: function() {
                    return privateState.sortBy
                },
                set: function(val) {
                    setterFunctions['sortBy'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "statusDescription": {
                get: function() {
                    return privateState.statusDescription
                },
                set: function(val) {
                    setterFunctions['statusDescription'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "success": {
                get: function() {
                    return privateState.success
                },
                set: function(val) {
                    setterFunctions['success'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "toAccountName": {
                get: function() {
                    return privateState.toAccountName
                },
                set: function(val) {
                    setterFunctions['toAccountName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "toAccountNumber": {
                get: function() {
                    return privateState.toAccountNumber
                },
                set: function(val) {
                    setterFunctions['toAccountNumber'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "toAccountType": {
                get: function() {
                    return privateState.toAccountType
                },
                set: function(val) {
                    setterFunctions['toAccountType'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "toCheckNumber": {
                get: function() {
                    return privateState.toCheckNumber
                },
                set: function(val) {
                    setterFunctions['toCheckNumber'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "totalAmount": {
                get: function() {
                    return privateState.totalAmount
                },
                set: function(val) {
                    setterFunctions['totalAmount'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "transactionComments": {
                get: function() {
                    return privateState.transactionComments
                },
                set: function(val) {
                    setterFunctions['transactionComments'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "transactionDate": {
                get: function() {
                    return privateState.transactionDate
                },
                set: function(val) {
                    setterFunctions['transactionDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "transactionId": {
                get: function() {
                    return privateState.transactionId
                },
                set: function(val) {
                    throw Error("transactionId cannot be changed.");
                },
                enumerable: true,
            },
            "transactionsNotes": {
                get: function() {
                    return privateState.transactionsNotes
                },
                set: function(val) {
                    setterFunctions['transactionsNotes'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "transactionType": {
                get: function() {
                    return privateState.transactionType
                },
                set: function(val) {
                    setterFunctions['transactionType'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "validDate": {
                get: function() {
                    return privateState.validDate
                },
                set: function(val) {
                    setterFunctions['validDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "viewReportLink": {
                get: function() {
                    return privateState.viewReportLink
                },
                set: function(val) {
                    setterFunctions['viewReportLink'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "overdraft": {
                get: function() {
                    return privateState.overdraft
                },
                set: function(val) {
                    setterFunctions['overdraft'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "isPaypersonDeleted": {
                get: function() {
                    return privateState.isPaypersonDeleted
                },
                set: function(val) {
                    setterFunctions['isPaypersonDeleted'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "fee": {
                get: function() {
                    return privateState.fee
                },
                set: function(val) {
                    setterFunctions['fee'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "frontImage1": {
                get: function() {
                    return privateState.frontImage1
                },
                set: function(val) {
                    setterFunctions['frontImage1'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "frontImage2": {
                get: function() {
                    return privateState.frontImage2
                },
                set: function(val) {
                    setterFunctions['frontImage2'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "backImage1": {
                get: function() {
                    return privateState.backImage1
                },
                set: function(val) {
                    setterFunctions['backImage1'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "backImage2": {
                get: function() {
                    return privateState.backImage2
                },
                set: function(val) {
                    setterFunctions['backImage2'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "checkDesc": {
                get: function() {
                    return privateState.checkDesc
                },
                set: function(val) {
                    setterFunctions['checkDesc'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "checkNumber1": {
                get: function() {
                    return privateState.checkNumber1
                },
                set: function(val) {
                    setterFunctions['checkNumber1'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "checkNumber2": {
                get: function() {
                    return privateState.checkNumber2
                },
                set: function(val) {
                    setterFunctions['checkNumber2'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "bankName1": {
                get: function() {
                    return privateState.bankName1
                },
                set: function(val) {
                    setterFunctions['bankName1'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "bankName2": {
                get: function() {
                    return privateState.bankName2
                },
                set: function(val) {
                    setterFunctions['bankName2'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "withdrawlAmount1": {
                get: function() {
                    return privateState.withdrawlAmount1
                },
                set: function(val) {
                    setterFunctions['withdrawlAmount1'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "withdrawlAmount2": {
                get: function() {
                    return privateState.withdrawlAmount2
                },
                set: function(val) {
                    setterFunctions['withdrawlAmount2'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "totalCheckAmount": {
                get: function() {
                    return privateState.totalCheckAmount
                },
                set: function(val) {
                    setterFunctions['totalCheckAmount'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "cashAmount": {
                get: function() {
                    return privateState.cashAmount
                },
                set: function(val) {
                    setterFunctions['cashAmount'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "payeeCurrency": {
                get: function() {
                    return privateState.payeeCurrency
                },
                set: function(val) {
                    setterFunctions['payeeCurrency'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "swiftCode": {
                get: function() {
                    return privateState.swiftCode
                },
                set: function(val) {
                    setterFunctions['swiftCode'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "wireAccountType": {
                get: function() {
                    return privateState.wireAccountType
                },
                set: function(val) {
                    setterFunctions['wireAccountType'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "country": {
                get: function() {
                    return privateState.country
                },
                set: function(val) {
                    setterFunctions['country'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "IBAN": {
                get: function() {
                    return privateState.IBAN
                },
                set: function(val) {
                    setterFunctions['IBAN'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "bankName": {
                get: function() {
                    return privateState.bankName
                },
                set: function(val) {
                    setterFunctions['bankName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "routingNumber": {
                get: function() {
                    return privateState.routingNumber
                },
                set: function(val) {
                    setterFunctions['routingNumber'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "internationalRoutingCode": {
                get: function() {
                    return privateState.internationalRoutingCode
                },
                set: function(val) {
                    setterFunctions['internationalRoutingCode'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "zipCode": {
                get: function() {
                    return privateState.zipCode
                },
                set: function(val) {
                    setterFunctions['zipCode'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "cityName": {
                get: function() {
                    return privateState.cityName
                },
                set: function(val) {
                    setterFunctions['cityName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "state": {
                get: function() {
                    return privateState.state
                },
                set: function(val) {
                    setterFunctions['state'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "bankAddressLine1": {
                get: function() {
                    return privateState.bankAddressLine1
                },
                set: function(val) {
                    setterFunctions['bankAddressLine1'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "bankAddressLine2": {
                get: function() {
                    return privateState.bankAddressLine2
                },
                set: function(val) {
                    setterFunctions['bankAddressLine2'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "bankCity": {
                get: function() {
                    return privateState.bankCity
                },
                set: function(val) {
                    setterFunctions['bankCity'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "bankState": {
                get: function() {
                    return privateState.bankState
                },
                set: function(val) {
                    setterFunctions['bankState'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "bankZip": {
                get: function() {
                    return privateState.bankZip
                },
                set: function(val) {
                    setterFunctions['bankZip'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "payeeType": {
                get: function() {
                    return privateState.payeeType
                },
                set: function(val) {
                    setterFunctions['payeeType'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "disputeReason": {
                get: function() {
                    return privateState.disputeReason
                },
                set: function(val) {
                    setterFunctions['disputeReason'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "disputeDescription": {
                get: function() {
                    return privateState.disputeDescription
                },
                set: function(val) {
                    setterFunctions['disputeDescription'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "checkDateOfIssue": {
                get: function() {
                    return privateState.checkDateOfIssue
                },
                set: function(val) {
                    setterFunctions['checkDateOfIssue'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "checkReason": {
                get: function() {
                    return privateState.checkReason
                },
                set: function(val) {
                    setterFunctions['checkReason'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "isPayeeDeleted": {
                get: function() {
                    return privateState.isPayeeDeleted
                },
                set: function(val) {
                    setterFunctions['isPayeeDeleted'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "payeeAddressLine2": {
                get: function() {
                    return privateState.payeeAddressLine2
                },
                set: function(val) {
                    setterFunctions['payeeAddressLine2'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "amountRecieved": {
                get: function() {
                    return privateState.amountRecieved
                },
                set: function(val) {
                    setterFunctions['amountRecieved'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "requestValidityInMonths": {
                get: function() {
                    return privateState.requestValidityInMonths
                },
                set: function(val) {
                    setterFunctions['requestValidityInMonths'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "requestValidity": {
                get: function() {
                    return privateState.requestValidity
                },
                set: function(val) {
                    setterFunctions['requestValidity'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "requestType": {
                get: function() {
                    return privateState.requestType
                },
                set: function(val) {
                    setterFunctions['requestType'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "disputeDate": {
                get: function() {
                    return privateState.disputeDate
                },
                set: function(val) {
                    setterFunctions['disputeDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "disputeStatus": {
                get: function() {
                    return privateState.disputeStatus
                },
                set: function(val) {
                    setterFunctions['disputeStatus'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "isDisputed": {
                get: function() {
                    return privateState.isDisputed
                },
                set: function(val) {
                    setterFunctions['isDisputed'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "cardId": {
                get: function() {
                    return privateState.cardId
                },
                set: function(val) {
                    setterFunctions['cardId'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "isOverdraft": {
                get: function() {
                    return privateState.isOverdraft
                },
                set: function(val) {
                    setterFunctions['isOverdraft'].call(this, val, privateState);
                },
                enumerable: true,
            },
        });
    }
    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(Transactions);
    //Create new class level validator object
    BaseModel.Validator.call(Transactions);
    var registerValidatorBackup = Transactions.registerValidator;
    Transactions.registerValidator = function() {
            var propName = arguments[0];
            if (!setterFunctions[propName].changed) {
                var setterBackup = setterFunctions[propName];
                setterFunctions[arguments[0]] = function() {
                    if (Transactions.isValid(this, propName, val)) {
                        return setterBackup.apply(null, arguments);
                    } else {
                        throw Error("Validation failed for " + propName + " : " + val);
                    }
                }
                setterFunctions[arguments[0]].changed = true;
            }
            return registerValidatorBackup.apply(null, arguments);
        }
        //Extending Model for custom operations
        //For Operation 'getAccountTransactionByType' with service id 'getAccountTransactionsByType1691'
    Transactions.getAccountTransactionByType = function(params, onCompletion) {
        return Transactions.customVerb('getAccountTransactionByType', params, onCompletion);
    };
    //For Operation 'getDisputedTransactions' with service id 'getDisputedTransactions3253'
    Transactions.getDisputedTransactions = function(params, onCompletion) {
        return Transactions.customVerb('getDisputedTransactions', params, onCompletion);
    };
    //For Operation 'cancelScheduledTransactionOccurrence' with service id 'cancelScheduledTransactionOccurrence8359'
    Transactions.cancelScheduledTransactionOccurrence = function(params, onCompletion) {
        return Transactions.customVerb('cancelScheduledTransactionOccurrence', params, onCompletion);
    };
    //For Operation 'getPostedDeposits' with service id 'getPostedDepositTransactions6898'
    Transactions.getPostedDeposits = function(params, onCompletion) {
        return Transactions.customVerb('getPostedDeposits', params, onCompletion);
    };
    //For Operation 'getPostedUserTransactions' with service id 'getUserTransaction2983'
    Transactions.getPostedUserTransactions = function(params, onCompletion) {
        return Transactions.customVerb('getPostedUserTransactions', params, onCompletion);
    };
    //For Operation 'getUserScheduledTransactions' with service id 'getUserScheduledTransactions2844'
    Transactions.getUserScheduledTransactions = function(params, onCompletion) {
        return Transactions.customVerb('getUserScheduledTransactions', params, onCompletion);
    };
    //For Operation 'makeTrialDeposit' with service id 'makeTrialDeposit7226'
    Transactions.makeTrialDeposit = function(params, onCompletion) {
        return Transactions.customVerb('makeTrialDeposit', params, onCompletion);
    };
    //For Operation 'getReceivedP2PRequest' with service id 'getReceivedP2PRequest4359'
    Transactions.getReceivedP2PRequest = function(params, onCompletion) {
        return Transactions.customVerb('getReceivedP2PRequest', params, onCompletion);
    };
    //For Operation 'getPostedCardlessTransactions' with service id 'getPostedCardlessTransactions4689'
    Transactions.getPostedCardlessTransactions = function(params, onCompletion) {
        return Transactions.customVerb('getPostedCardlessTransactions', params, onCompletion);
    };
    //For Operation 'getPayPersonHistory' with service id 'getPayPersonHistory2939'
    Transactions.getPayPersonHistory = function(params, onCompletion) {
        return Transactions.customVerb('getPayPersonHistory', params, onCompletion);
    };
    //For Operation 'getPendingCardlessTransactions' with service id 'getPendingCardlessTransactions8323'
    Transactions.getPendingCardlessTransactions = function(params, onCompletion) {
        return Transactions.customVerb('getPendingCardlessTransactions', params, onCompletion);
    };
    //For Operation 'getToExternalAccountTransactions' with service id 'getToExternalAccountTransactions8719'
    Transactions.getToExternalAccountTransactions = function(params, onCompletion) {
        return Transactions.customVerb('getToExternalAccountTransactions', params, onCompletion);
    };
    //For Operation 'getScheduledUserTransactions' with service id 'getUserTransaction3315'
    Transactions.getScheduledUserTransactions = function(params, onCompletion) {
        return Transactions.customVerb('getScheduledUserTransactions', params, onCompletion);
    };
    //For Operation 'verifyTrialDeposit' with service id 'verifyTrialDeposit5672'
    Transactions.verifyTrialDeposit = function(params, onCompletion) {
        return Transactions.customVerb('verifyTrialDeposit', params, onCompletion);
    };
    //For Operation 'createCardlessTransaction' with service id 'createTransfer7756'
    Transactions.createCardlessTransaction = function(params, onCompletion) {
        return Transactions.customVerb('createCardlessTransaction', params, onCompletion);
    };
    //For Operation 'getUserCompletedBillHistory' with service id 'getUserCompletedBillHistory4883'
    Transactions.getUserCompletedBillHistory = function(params, onCompletion) {
        return Transactions.customVerb('getUserCompletedBillHistory', params, onCompletion);
    };
    //For Operation 'getStopCheckPaymentRequestTransactions' with service id 'getStopCheckPaymentRequestTransactions7709'
    Transactions.getStopCheckPaymentRequestTransactions = function(params, onCompletion) {
        return Transactions.customVerb('getStopCheckPaymentRequestTransactions', params, onCompletion);
    };
    //For Operation 'getScheduledTransferAndP2pTransactions' with service id 'getScheduledTransferAndP2pTransactions4961'
    Transactions.getScheduledTransferAndP2pTransactions = function(params, onCompletion) {
        return Transactions.customVerb('getScheduledTransferAndP2pTransactions', params, onCompletion);
    };
    //For Operation 'getPayeeBills' with service id 'getPayeeBills2421'
    Transactions.getPayeeBills = function(params, onCompletion) {
        return Transactions.customVerb('getPayeeBills', params, onCompletion);
    };
    //For Operation 'getPendingDeposits' with service id 'getPendingDepositTransactions4106'
    Transactions.getPendingDeposits = function(params, onCompletion) {
        return Transactions.customVerb('getPendingDeposits', params, onCompletion);
    };
    //For Operation 'getPostedTransfersAndP2pTransactions' with service id 'getPostedTransferAndP2pTransactions4353'
    Transactions.getPostedTransfersAndP2pTransactions = function(params, onCompletion) {
        return Transactions.customVerb('getPostedTransfersAndP2pTransactions', params, onCompletion);
    };
    //For Operation 'getAccountPendingTransactions' with service id 'getAccountPendingTransactions7249'
    Transactions.getAccountPendingTransactions = function(params, onCompletion) {
        return Transactions.customVerb('getAccountPendingTransactions', params, onCompletion);
    };
    //For Operation 'getUserWiredTransactions' with service id 'getUserWiredTransactions7202'
    Transactions.getUserWiredTransactions = function(params, onCompletion) {
        return Transactions.customVerb('getUserWiredTransactions', params, onCompletion);
    };
    //For Operation 'getScheduledAccountTransactions' with service id 'getUserTransaction7171'
    Transactions.getScheduledAccountTransactions = function(params, onCompletion) {
        return Transactions.customVerb('getScheduledAccountTransactions', params, onCompletion);
    };
    //For Operation 'getSentP2PTransactions' with service id 'getSentP2PTransactions8383'
    Transactions.getSentP2PTransactions = function(params, onCompletion) {
        return Transactions.customVerb('getSentP2PTransactions', params, onCompletion);
    };
    //For Operation 'createDisputedTransaction' with service id 'updateTransaction9504'
    Transactions.createDisputedTransaction = function(params, onCompletion) {
        return Transactions.customVerb('createDisputedTransaction', params, onCompletion);
    };
    //For Operation 'getUsersScheduledBill' with service id 'getUsersScheduledBills7733'
    Transactions.getUsersScheduledBill = function(params, onCompletion) {
        return Transactions.customVerb('getUsersScheduledBill', params, onCompletion);
    };
    //For Operation 'getAccountPostedTransactions' with service id 'getAccountPostedTransactions1904'
    Transactions.getAccountPostedTransactions = function(params, onCompletion) {
        return Transactions.customVerb('getAccountPostedTransactions', params, onCompletion);
    };
    //For Operation 'getExternalAccountTransactions' with service id 'getExternalTransactions5470'
    Transactions.getExternalAccountTransactions = function(params, onCompletion) {
        return Transactions.customVerb('getExternalAccountTransactions', params, onCompletion);
    };
    //For Operation 'getRecentAccountTransactions' with service id 'getUserTransaction2711'
    Transactions.getRecentAccountTransactions = function(params, onCompletion) {
        return Transactions.customVerb('getRecentAccountTransactions', params, onCompletion);
    };
    //For Operation 'getPendingUserTransactions' with service id 'getUserTransaction5340'
    Transactions.getPendingUserTransactions = function(params, onCompletion) {
        return Transactions.customVerb('getPendingUserTransactions', params, onCompletion);
    };
    //For Operation 'getRecipientWireTransaction' with service id 'getRecipientWireTransaction6481'
    Transactions.getRecipientWireTransaction = function(params, onCompletion) {
        return Transactions.customVerb('getRecipientWireTransaction', params, onCompletion);
    };
    //For Operation 'isSecondFactorAuthenticationRequired' with service id 'isSecondFactorAuthenticationRequired6760'
    Transactions.isSecondFactorAuthenticationRequired = function(params, onCompletion) {
        return Transactions.customVerb('isSecondFactorAuthenticationRequired', params, onCompletion);
    };
    //For Operation 'createBulkBillPay' with service id 'createBulkBillPay6456'
    Transactions.createBulkBillPay = function(params, onCompletion) {
        return Transactions.customVerb('createBulkBillPay', params, onCompletion);
    };
    //For Operation 'getRecentUserTransactions' with service id 'getUserTransaction6106'
    Transactions.getRecentUserTransactions = function(params, onCompletion) {
        return Transactions.customVerb('getRecentUserTransactions', params, onCompletion);
    };
    //For Operation 'getReceivedP2PTransactions' with service id 'getReceivedP2PTransactions7696'
    Transactions.getReceivedP2PTransactions = function(params, onCompletion) {
        return Transactions.customVerb('getReceivedP2PTransactions', params, onCompletion);
    };
    //For Operation 'getAllP2PRequestMoneyForUser' with service id 'getAllP2PRequestMoneyForUser7532'
    Transactions.getAllP2PRequestMoneyForUser = function(params, onCompletion) {
        return Transactions.customVerb('getAllP2PRequestMoneyForUser', params, onCompletion);
    };
    var relations = [];
    Transactions.relations = relations;
    Transactions.prototype.isValid = function() {
        return Transactions.isValid(this);
    };
    Transactions.prototype.objModelName = "Transactions";
    return Transactions;
});