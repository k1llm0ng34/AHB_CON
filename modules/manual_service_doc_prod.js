function getManualServiceDocForPRD (){
  return{
    "selflink": "https://ahbmobile.alhilalbank.ae/authService/100000002/appconfig",
    "identity_meta": {
      "LinkedIn": {
        "success_url": "allow_any"
      }
    },
    "integsvc": {
      "RetailBankingBEServices": "https://ahbmobile.alhilalbank.ae/services/RetailBankingBEServices",
      "LinkedInService": "https://ahbmobile.alhilalbank.ae/services/LinkedInService",
      "dbpTransactionsorch": "https://ahbmobile.alhilalbank.ae/services/dbpTransactionsorch",
      "AHBSettings": "https://ahbmobile.alhilalbank.ae/services/AHBSettings",
      "ATMLocator": "https://ahbmobile.alhilalbank.ae/services/ATMLocator",
      "RBCustomLogin": "https://ahbmobile.alhilalbank.ae/services/RBCustomLogin",
      "SetIdentityScope": "https://ahbmobile.alhilalbank.ae/services/SetIdentityScope",
      "AHBLoginService": "https://ahbmobile.alhilalbank.ae/services/AHBLoginService",
      "dbpPayeeorch": "https://ahbmobile.alhilalbank.ae/services/dbpPayeeorch",
      "Dashboard": "https://ahbmobile.alhilalbank.ae/services/Dashboard",
      "AHBOTPService": "https://ahbmobile.alhilalbank.ae/services/AHBOTPService",
      "createMainUserIdentity": "https://ahbmobile.alhilalbank.ae/services/createMainUserIdentity",
      "OTPService": "https://ahbmobile.alhilalbank.ae/services/OTPService",
      "AHBAccounts": "https://ahbmobile.alhilalbank.ae/services/AHBAccounts",
      "Bank5": "https://ahbmobile.alhilalbank.ae/services/Bank5",
      "Bank4": "https://ahbmobile.alhilalbank.ae/services/Bank4",
      "NUOServices": "https://ahbmobile.alhilalbank.ae/services/NUOServices",
      "Bank3": "https://ahbmobile.alhilalbank.ae/services/Bank3",
      "Bank2": "https://ahbmobile.alhilalbank.ae/services/Bank2",
      "GoogleAPIs": "https://ahbmobile.alhilalbank.ae/services/GoogleAPIs",
      "Bank1": "https://ahbmobile.alhilalbank.ae/services/Bank1",
      "FetchAccountDetails": "https://ahbmobile.alhilalbank.ae/services/FetchAccountDetails",
      "NonOAuthServices": "https://ahbmobile.alhilalbank.ae/services/NonOAuthServices",
      "dbpAccountsorch": "https://ahbmobile.alhilalbank.ae/services/dbpAccountsorch",
      "AHBBeneficiaries": "https://ahbmobile.alhilalbank.ae/services/AHBBeneficiaries",
      "MainBank": "https://ahbmobile.alhilalbank.ae/services/MainBank",
      "AdminConsoleServices": "https://ahbmobile.alhilalbank.ae/services/AdminConsoleServices",
      "AHBUserChequesService": "https://ahbmobile.alhilalbank.ae/services/AHBUserChequesService",
      "AHBPayees": "https://ahbmobile.alhilalbank.ae/services/AHBPayees",
      "AHBTransferService": "https://ahbmobile.alhilalbank.ae/services/AHBTransferService",
      "UserAuthService": "https://ahbmobile.alhilalbank.ae/services/UserAuthService",
      "AdminConfigService": "https://ahbmobile.alhilalbank.ae/services/AdminConfigService",
      "dbpAccountAggregationjava": "https://ahbmobile.alhilalbank.ae/services/dbpAccountAggregationjava",
      "dbpAccountAggregationdb": "https://ahbmobile.alhilalbank.ae/services/dbpAccountAggregationdb",
      "pushNotificationsAuthService": "https://ahbmobile.alhilalbank.ae/services/pushNotificationsAuthService",
      "AHBRegistration": "https://ahbmobile.alhilalbank.ae/services/AHBRegistration",
      "PushNotification": "https://ahbmobile.alhilalbank.ae/services/PushNotification",
      "SendPushMessage": "https://ahbmobile.alhilalbank.ae/services/SendPushMessage"
    },
    "service_doc_etag": "000001673B3F70E2",
    "appId": "baa6d587-1e0e-4784-abf5-973f527e1cfb",
    "identity_features": {
      "reporting_params_header_allowed": true
    },
    "name": "RetailBankingServices",
    "reportingsvc": {
      "session": "https://ahbmobile.alhilalbank.ae/services/IST",
      "custom": "https://ahbmobile.alhilalbank.ae/services/CMS"
    },
    "baseId": "08322a70-bbdc-4b90-9b73-77e75a8f029c",
    "login": [
      {
        "mandatory_fields": [],
        "alias": "CustomLogin",
        "type": "basic",
        "prov": "CustomLogin",
        "url": "https://ahbmobile.alhilalbank.ae/authService/100000002"
      },
      {
        "mandatory_fields": [],
        "alias": "IdentityProviderBank2",
        "type": "basic",
        "prov": "IdentityProviderBank2",
        "url": "https://ahbmobile.alhilalbank.ae/authService/100000002"
      },
      {
        "alias": "LinkedIn",
        "type": "oauth2",
        "prov": "LinkedIn",
        "url": "https://ahbmobile.alhilalbank.ae/authService/100000002"
      },
      {
        "mandatory_fields": [],
        "alias": "CopyCustomLogin",
        "type": "basic",
        "prov": "CopyCustomLogin",
        "url": "https://ahbmobile.alhilalbank.ae/authService/100000002"
      },
      {
        "mandatory_fields": [],
        "alias": "IdentityProviderBank5",
        "type": "basic",
        "prov": "IdentityProviderBank5",
        "url": "https://ahbmobile.alhilalbank.ae/authService/100000002"
      },
      {
        "mandatory_fields": [],
        "alias": "IdentityProviderBank4",
        "type": "basic",
        "prov": "IdentityProviderBank4",
        "url": "https://ahbmobile.alhilalbank.ae/authService/100000002"
      },
      {
        "mandatory_fields": [],
        "alias": "IdentityProviderBank3",
        "type": "basic",
        "prov": "IdentityProviderBank3",
        "url": "https://ahbmobile.alhilalbank.ae/authService/100000002"
      },
      {
        "mandatory_fields": [],
        "alias": "NUOApplicantLogin",
        "type": "basic",
        "prov": "NUOApplicantLogin",
        "url": "https://ahbmobile.alhilalbank.ae/authService/100000002"
      },
      {
        "mandatory_fields": [],
        "alias": "IdentityProviderBank1",
        "type": "basic",
        "prov": "IdentityProviderBank1",
        "url": "https://ahbmobile.alhilalbank.ae/authService/100000002"
      }
    ],
    "services_meta": {
      "RBObjects": {
        "offline": false,
        "metadata_url": "https://ahbmobile.alhilalbank.ae/services/metadata/v1/RBObjects",
        "type": "objectsvc",
        "version": "1.0",
        "url": "https://ahbmobile.alhilalbank.ae/services/data/v1/RBObjects"
      },
      "RetailBankingBEServices": {
        "type": "integsvc",
        "version": "1.0",
        "url": "https://ahbmobile.alhilalbank.ae/services/RetailBankingBEServices"
      },
      "LinkedInService": {
        "type": "integsvc",
        "version": "1.0",
        "url": "https://ahbmobile.alhilalbank.ae/services/LinkedInService"
      },
      "dbpTransactionsorch": {
        "type": "integsvc",
        "version": "1.0",
        "url": "https://ahbmobile.alhilalbank.ae/services/dbpTransactionsorch"
      },
      "AHBSettings": {
        "type": "integsvc",
        "version": "1.0",
        "url": "https://ahbmobile.alhilalbank.ae/services/AHBSettings"
      },
      "ATMLocator": {
        "type": "integsvc",
        "version": "1.0",
        "url": "https://ahbmobile.alhilalbank.ae/services/ATMLocator"
      },
      "RBCustomLogin": {
        "type": "integsvc",
        "version": "1.0",
        "url": "https://ahbmobile.alhilalbank.ae/services/RBCustomLogin"
      },
      "SetIdentityScope": {
        "type": "integsvc",
        "version": "1.0",
        "url": "https://ahbmobile.alhilalbank.ae/services/SetIdentityScope"
      },
      "AHBLoginService": {
        "type": "integsvc",
        "version": "1.0",
        "url": "https://ahbmobile.alhilalbank.ae/services/AHBLoginService"
      },
      "dbpPayeeorch": {
        "type": "integsvc",
        "version": "1.0",
        "url": "https://ahbmobile.alhilalbank.ae/services/dbpPayeeorch"
      },
      "Dashboard": {
        "type": "integsvc",
        "version": "1.0",
        "url": "https://ahbmobile.alhilalbank.ae/services/Dashboard"
      },
      "AHBOTPService": {
        "type": "integsvc",
        "version": "1.0",
        "url": "https://ahbmobile.alhilalbank.ae/services/AHBOTPService"
      },
      "createMainUserIdentity": {
        "type": "integsvc",
        "version": "1.0",
        "url": "https://ahbmobile.alhilalbank.ae/services/createMainUserIdentity"
      },
      "OTPService": {
        "type": "integsvc",
        "version": "1.0",
        "url": "https://ahbmobile.alhilalbank.ae/services/OTPService"
      },
      "AHBAccounts": {
        "type": "integsvc",
        "version": "1.0",
        "url": "https://ahbmobile.alhilalbank.ae/services/AHBAccounts"
      },
      "Bank5": {
        "type": "integsvc",
        "version": "1.0",
        "url": "https://ahbmobile.alhilalbank.ae/services/Bank5"
      },
      "Bank4": {
        "type": "integsvc",
        "version": "1.0",
        "url": "https://ahbmobile.alhilalbank.ae/services/Bank4"
      },
      "AccountAggregation": {
        "offline": false,
        "metadata_url": "https://ahbmobile.alhilalbank.ae/services/metadata/v1/AccountAggregation",
        "type": "objectsvc",
        "version": "1.0",
        "url": "https://ahbmobile.alhilalbank.ae/services/data/v1/AccountAggregation"
      },
      "NUOServices": {
        "type": "integsvc",
        "version": "1.0",
        "url": "https://ahbmobile.alhilalbank.ae/services/NUOServices"
      },
      "Bank3": {
        "type": "integsvc",
        "version": "1.0",
        "url": "https://ahbmobile.alhilalbank.ae/services/Bank3"
      },
      "Bank2": {
        "type": "integsvc",
        "version": "1.0",
        "url": "https://ahbmobile.alhilalbank.ae/services/Bank2"
      },
      "GoogleAPIs": {
        "type": "integsvc",
        "version": "1.0",
        "url": "https://ahbmobile.alhilalbank.ae/services/GoogleAPIs"
      },
      "Bank1": {
        "type": "integsvc",
        "version": "1.0",
        "url": "https://ahbmobile.alhilalbank.ae/services/Bank1"
      },
      "FetchAccountDetails": {
        "type": "integsvc",
        "version": "1.0",
        "url": "https://ahbmobile.alhilalbank.ae/services/FetchAccountDetails"
      },
      "NonOAuthServices": {
        "type": "integsvc",
        "version": "1.0",
        "url": "https://ahbmobile.alhilalbank.ae/services/NonOAuthServices"
      },
      "dbpAccountsorch": {
        "type": "integsvc",
        "version": "1.0",
        "url": "https://ahbmobile.alhilalbank.ae/services/dbpAccountsorch"
      },
      "AHBBeneficiaries": {
        "type": "integsvc",
        "version": "1.0",
        "url": "https://ahbmobile.alhilalbank.ae/services/AHBBeneficiaries"
      },
      "MainBank": {
        "type": "integsvc",
        "version": "1.0",
        "url": "https://ahbmobile.alhilalbank.ae/services/MainBank"
      },
      "AdminConsoleServices": {
        "type": "integsvc",
        "version": "1.0",
        "url": "https://ahbmobile.alhilalbank.ae/services/AdminConsoleServices"
      },
      "AHBUserChequesService": {
        "type": "integsvc",
        "version": "1.0",
        "url": "https://ahbmobile.alhilalbank.ae/services/AHBUserChequesService"
      },
      "AHBPayees": {
        "type": "integsvc",
        "version": "1.0",
        "url": "https://ahbmobile.alhilalbank.ae/services/AHBPayees"
      },
      "AHBTransferService": {
        "type": "integsvc",
        "version": "1.0",
        "url": "https://ahbmobile.alhilalbank.ae/services/AHBTransferService"
      },
      "UserAuthService": {
        "type": "integsvc",
        "version": "1.0",
        "url": "https://ahbmobile.alhilalbank.ae/services/UserAuthService"
      },
      "AdminConfigService": {
        "type": "integsvc",
        "version": "1.0",
        "url": "https://ahbmobile.alhilalbank.ae/services/AdminConfigService"
      },
      "dbpAccountAggregationjava": {
        "type": "integsvc",
        "version": "1.0",
        "url": "https://ahbmobile.alhilalbank.ae/services/dbpAccountAggregationjava"
      },
      "dbpAccountAggregationdb": {
        "type": "integsvc",
        "version": "1.0",
        "url": "https://ahbmobile.alhilalbank.ae/services/dbpAccountAggregationdb"
      },
      "pushNotificationsAuthService": {
        "type": "integsvc",
        "version": "1.0",
        "url": "https://ahbmobile.alhilalbank.ae/services/pushNotificationsAuthService"
      },
      "AHBRegistration": {
        "type": "integsvc",
        "version": "1.0",
        "url": "https://ahbmobile.alhilalbank.ae/services/AHBRegistration"
      },
      "PushNotification": {
        "type": "integsvc",
        "version": "1.0",
        "url": "https://ahbmobile.alhilalbank.ae/services/PushNotification"
      },
      "SendPushMessage": {
        "type": "integsvc",
        "version": "1.0",
        "url": "https://ahbmobile.alhilalbank.ae/services/SendPushMessage"
      }
    }
  };
}
