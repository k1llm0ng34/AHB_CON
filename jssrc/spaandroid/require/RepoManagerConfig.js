define([], function() {
    var repoMapping = {
        Informationcontent: {
            model: "RBObjects/Informationcontent/Model",
            config: "RBObjects/Informationcontent/MF_Config",
            repository: "RBObjects/Informationcontent/Repository",
        },
        MainUserSelectedAccounts: {
            model: "AccountAggregation/MainUserSelectedAccounts/Model",
            config: "AccountAggregation/MainUserSelectedAccounts/MF_Config",
            repository: "",
        },
        NewUser: {
            model: "RBObjects/NewUser/Model",
            config: "RBObjects/NewUser/MF_Config",
            repository: "RBObjects/NewUser/Repository",
        },
        Bills: {
            model: "RBObjects/Bills/Model",
            config: "RBObjects/Bills/MF_Config",
            repository: "RBObjects/Bills/Repository",
        },
        AccountStatement: {
            model: "RBObjects/AccountStatement/Model",
            config: "RBObjects/AccountStatement/MF_Config",
            repository: "RBObjects/AccountStatement/Repository",
        },
        BillerCompany: {
            model: "RBObjects/BillerCompany/Model",
            config: "RBObjects/BillerCompany/MF_Config",
            repository: "",
        },
        MessageSubCategory: {
            model: "RBObjects/MessageSubCategory/Model",
            config: "RBObjects/MessageSubCategory/MF_Config",
            repository: "",
        },
        Country: {
            model: "RBObjects/Country/Model",
            config: "RBObjects/Country/MF_Config",
            repository: "RBObjects/Country/Repository",
        },
        ExternalAccounts: {
            model: "RBObjects/ExternalAccounts/Model",
            config: "RBObjects/ExternalAccounts/MF_Config",
            repository: "RBObjects/ExternalAccounts/Repository",
        },
        PushNotification: {
            model: "RBObjects/PushNotification/Model",
            config: "RBObjects/PushNotification/MF_Config",
            repository: "",
        },
        InterestRates: {
            model: "RBObjects/InterestRates/Model",
            config: "RBObjects/InterestRates/MF_Config",
            repository: "",
        },
        AccountType: {
            model: "RBObjects/AccountType/Model",
            config: "RBObjects/AccountType/MF_Config",
            repository: "RBObjects/AccountType/Repository",
        },
        UserSecurityQuestions: {
            model: "RBObjects/UserSecurityQuestions/Model",
            config: "RBObjects/UserSecurityQuestions/MF_Config",
            repository: "RBObjects/UserSecurityQuestions/Repository",
        },
        NewAccount: {
            model: "RBObjects/NewAccount/Model",
            config: "RBObjects/NewAccount/MF_Config",
            repository: "",
        },
        CheckOrder: {
            model: "RBObjects/CheckOrder/Model",
            config: "RBObjects/CheckOrder/MF_Config",
            repository: "",
        },
        p2pregistration: {
            model: "RBObjects/p2pregistration/Model",
            config: "RBObjects/p2pregistration/MF_Config",
            repository: "",
        },
        ExternalAccountsAggregation: {
            model: "AccountAggregation/ExternalAccountsAggregation/Model",
            config: "AccountAggregation/ExternalAccountsAggregation/MF_Config",
            repository: "",
        },
        Accounts: {
            model: "RBObjects/Accounts/Model",
            config: "RBObjects/Accounts/MF_Config",
            repository: "RBObjects/Accounts/Repository",
        },
        DeviceRegistration: {
            model: "RBObjects/DeviceRegistration/Model",
            config: "RBObjects/DeviceRegistration/MF_Config",
            repository: "RBObjects/DeviceRegistration/Repository",
        },
        UserAccountAlerts: {
            model: "RBObjects/UserAccountAlerts/Model",
            config: "RBObjects/UserAccountAlerts/MF_Config",
            repository: "",
        },
        States: {
            model: "RBObjects/States/Model",
            config: "RBObjects/States/MF_Config",
            repository: "RBObjects/States/Repository",
        },
        SelectedAccounts: {
            model: "AccountAggregation/SelectedAccounts/Model",
            config: "AccountAggregation/SelectedAccounts/MF_Config",
            repository: "",
        },
        Cards: {
            model: "RBObjects/Cards/Model",
            config: "RBObjects/Cards/MF_Config",
            repository: "RBObjects/Cards/Repository",
        },
        PFMCategory: {
            model: "RBObjects/PFMCategory/Model",
            config: "RBObjects/PFMCategory/MF_Config",
            repository: "",
        },
        RefreshAccounts: {
            model: "AccountAggregation/RefreshAccounts/Model",
            config: "AccountAggregation/RefreshAccounts/MF_Config",
            repository: "",
        },
        RefreshAccountsFromDB: {
            model: "AccountAggregation/RefreshAccountsFromDB/Model",
            config: "AccountAggregation/RefreshAccountsFromDB/MF_Config",
            repository: "",
        },
        Payee: {
            model: "RBObjects/Payee/Model",
            config: "RBObjects/Payee/MF_Config",
            repository: "RBObjects/Payee/Repository",
        },
        User: {
            model: "RBObjects/User/Model",
            config: "RBObjects/User/MF_Config",
            repository: "RBObjects/User/Repository",
        },
        DirectMarketing: {
            model: "RBObjects/DirectMarketing/Model",
            config: "RBObjects/DirectMarketing/MF_Config",
            repository: "RBObjects/DirectMarketing/Repository",
        },
        Application: {
            model: "RBObjects/Application/Model",
            config: "RBObjects/Application/MF_Config",
            repository: "",
        },
        Ads: {
            model: "RBObjects/Ads/Model",
            config: "RBObjects/Ads/MF_Config",
            repository: "",
        },
        ExternalTransactionsAggregation: {
            model: "AccountAggregation/ExternalTransactionsAggregation/Model",
            config: "AccountAggregation/ExternalTransactionsAggregation/MF_Config",
            repository: "",
        },
        Transactions: {
            model: "RBObjects/Transactions/Model",
            config: "RBObjects/Transactions/MF_Config",
            repository: "RBObjects/Transactions/Repository",
        },
        AccountCashFlow: {
            model: "RBObjects/AccountCashFlow/Model",
            config: "RBObjects/AccountCashFlow/MF_Config",
            repository: "",
        },
        ExternalBankIdentity: {
            model: "AccountAggregation/ExternalBankIdentity/Model",
            config: "AccountAggregation/ExternalBankIdentity/MF_Config",
            repository: "",
        },
        AccountFeatures: {
            model: "RBObjects/AccountFeatures/Model",
            config: "RBObjects/AccountFeatures/MF_Config",
            repository: "",
        },
        PFMTransactions: {
            model: "RBObjects/PFMTransactions/Model",
            config: "RBObjects/PFMTransactions/MF_Config",
            repository: "RBObjects/PFMTransactions/Repository",
        },
        ExchangeRates: {
            model: "RBObjects/ExchangeRates/Model",
            config: "RBObjects/ExchangeRates/MF_Config",
            repository: "",
        },
        ExternalBanks: {
            model: "AccountAggregation/ExternalBanks/Model",
            config: "AccountAggregation/ExternalBanks/MF_Config",
            repository: "",
        },
        PFMPieChart: {
            model: "RBObjects/PFMPieChart/Model",
            config: "RBObjects/PFMPieChart/MF_Config",
            repository: "",
        },
        Messages: {
            model: "RBObjects/Messages/Model",
            config: "RBObjects/Messages/MF_Config",
            repository: "RBObjects/Messages/Repository",
        },
        SecurityQuestions: {
            model: "RBObjects/SecurityQuestions/Model",
            config: "RBObjects/SecurityQuestions/MF_Config",
            repository: "RBObjects/SecurityQuestions/Repository",
        },
        UserAlerts: {
            model: "RBObjects/UserAlerts/Model",
            config: "RBObjects/UserAlerts/MF_Config",
            repository: "RBObjects/UserAlerts/Repository",
        },
        SecureMessaging: {
            model: "RBObjects/SecureMessaging/Model",
            config: "RBObjects/SecureMessaging/MF_Config",
            repository: "RBObjects/SecureMessaging/Repository",
        },
        SingleAccountDetails: {
            model: "AccountAggregation/SingleAccountDetails/Model",
            config: "AccountAggregation/SingleAccountDetails/MF_Config",
            repository: "",
        },
        MainUserBankUsers: {
            model: "AccountAggregation/MainUserBankUsers/Model",
            config: "AccountAggregation/MainUserBankUsers/MF_Config",
            repository: "",
        },
        OutageMessage: {
            model: "RBObjects/OutageMessage/Model",
            config: "RBObjects/OutageMessage/MF_Config",
            repository: "RBObjects/OutageMessage/Repository",
        },
        PayPerson: {
            model: "RBObjects/PayPerson/Model",
            config: "RBObjects/PayPerson/MF_Config",
            repository: "RBObjects/PayPerson/Repository",
        },
        UserBanks: {
            model: "AccountAggregation/UserBanks/Model",
            config: "AccountAggregation/UserBanks/MF_Config",
            repository: "",
        },
        BillerCategory: {
            model: "RBObjects/BillerCategory/Model",
            config: "RBObjects/BillerCategory/MF_Config",
            repository: "",
        },
        NewUserProducts: {
            model: "RBObjects/NewUserProducts/Model",
            config: "RBObjects/NewUserProducts/MF_Config",
            repository: "RBObjects/NewUserProducts/Repository",
        },
        PFMAccounts: {
            model: "RBObjects/PFMAccounts/Model",
            config: "RBObjects/PFMAccounts/MF_Config",
            repository: "RBObjects/PFMAccounts/Repository",
        },
        MessageCategory: {
            model: "RBObjects/MessageCategory/Model",
            config: "RBObjects/MessageCategory/MF_Config",
            repository: "",
        },
        TimePeriod: {
            model: "RBObjects/TimePeriod/Model",
            config: "RBObjects/TimePeriod/MF_Config",
            repository: "",
        },
        LinkedIn: {
            model: "RBObjects/LinkedIn/Model",
            config: "RBObjects/LinkedIn/MF_Config",
            repository: "",
        },
        uploadDocuments: {
            model: "RBObjects/uploadDocuments/Model",
            config: "RBObjects/uploadDocuments/MF_Config",
            repository: "",
        },
        Notifications: {
            model: "RBObjects/Notifications/Model",
            config: "RBObjects/Notifications/MF_Config",
            repository: "RBObjects/Notifications/Repository",
        },
        Locations: {
            model: "RBObjects/Locations/Model",
            config: "RBObjects/Locations/MF_Config",
            repository: "RBObjects/Locations/Repository",
        },
        PFMBudgetGraph: {
            model: "RBObjects/PFMBudgetGraph/Model",
            config: "RBObjects/PFMBudgetGraph/MF_Config",
            repository: "",
        },
        MainUserBankSelectedAccounts: {
            model: "AccountAggregation/MainUserBankSelectedAccounts/Model",
            config: "AccountAggregation/MainUserBankSelectedAccounts/MF_Config",
            repository: "",
        },
        NewUserSecurityQuestions: {
            model: "RBObjects/NewUserSecurityQuestions/Model",
            config: "RBObjects/NewUserSecurityQuestions/MF_Config",
            repository: "",
        },
        Dashboard: {
            model: "RBObjects/Dashboard/Model",
            config: "RBObjects/Dashboard/MF_Config",
            repository: "RBObjects/Dashboard/Repository",
        },
        Phone: {
            model: "RBObjects/Phone/Model",
            config: "RBObjects/Phone/MF_Config",
            repository: "RBObjects/Phone/Repository",
        },
        MainUserBankIdentity: {
            model: "AccountAggregation/MainUserBankIdentity/Model",
            config: "AccountAggregation/MainUserBankIdentity/MF_Config",
            repository: "",
        },
        Payees: {
            model: "AccountAggregation/Payees/Model",
            config: "AccountAggregation/Payees/MF_Config",
            repository: "AccountAggregation/Payees/Repository",
        },
        PFMBarGraph: {
            model: "RBObjects/PFMBarGraph/Model",
            config: "RBObjects/PFMBarGraph/MF_Config",
            repository: "",
        },
        ChartTransactions: {
            model: "RBObjects/ChartTransactions/Model",
            config: "RBObjects/ChartTransactions/MF_Config",
            repository: "",
        },
        Products: {
            model: "RBObjects/Products/Model",
            config: "RBObjects/Products/MF_Config",
            repository: "RBObjects/Products/Repository",
        },
        BillerMaster: {
            model: "RBObjects/BillerMaster/Model",
            config: "RBObjects/BillerMaster/MF_Config",
            repository: "RBObjects/BillerMaster/Repository",
        },
        QrCode: {
            model: "RBObjects/QrCode/Model",
            config: "RBObjects/QrCode/MF_Config",
            repository: "",
        },
    };
    return repoMapping;
})