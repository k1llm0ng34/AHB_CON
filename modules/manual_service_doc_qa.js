function getManualServiceDocForQA(){
  return {
  "selflink": "https://ahb01qmobwbv01.alhilalbank.ae/authService/100000022/appconfig",
  "identity_meta": {
    "LinkedIn": {
      "success_url": "allow_any"
    }
  },
  "integrity_check_required": true,
  "integsvc": {
    "AHBPaymentService": "https://ahb01qmobwbv01.alhilalbank.ae/services/AHBPaymentService",
    "RetailBankingBEServices": "https://ahb01qmobwbv01.alhilalbank.ae/services/RetailBankingBEServices",
    "LinkedInService": "https://ahb01qmobwbv01.alhilalbank.ae/services/LinkedInService",
    "dbpTransactionsorch": "https://ahb01qmobwbv01.alhilalbank.ae/services/dbpTransactionsorch",
    "AHBSettings": "https://ahb01qmobwbv01.alhilalbank.ae/services/AHBSettings",
    "ATMLocator": "https://ahb01qmobwbv01.alhilalbank.ae/services/ATMLocator",
    "RBCustomLogin": "https://ahb01qmobwbv01.alhilalbank.ae/services/RBCustomLogin",
    "SetIdentityScope": "https://ahb01qmobwbv01.alhilalbank.ae/services/SetIdentityScope",
    "AHBLoginService": "https://ahb01qmobwbv01.alhilalbank.ae/services/AHBLoginService",
    "dbpPayeeorch": "https://ahb01qmobwbv01.alhilalbank.ae/services/dbpPayeeorch",
    "Dashboard": "https://ahb01qmobwbv01.alhilalbank.ae/services/Dashboard",
    "AHBOTPService": "https://ahb01qmobwbv01.alhilalbank.ae/services/AHBOTPService",
    "createMainUserIdentity": "https://ahb01qmobwbv01.alhilalbank.ae/services/createMainUserIdentity",
    "MultiPayment": "https://ahb01qmobwbv01.alhilalbank.ae/services/MultiPayment",
    "OTPService": "https://ahb01qmobwbv01.alhilalbank.ae/services/OTPService",
    "AHBAccounts": "https://ahb01qmobwbv01.alhilalbank.ae/services/AHBAccounts",
    "Bank5": "https://ahb01qmobwbv01.alhilalbank.ae/services/Bank5",
    "Bank4": "https://ahb01qmobwbv01.alhilalbank.ae/services/Bank4",
    "NUOServices": "https://ahb01qmobwbv01.alhilalbank.ae/services/NUOServices",
    "Bank3": "https://ahb01qmobwbv01.alhilalbank.ae/services/Bank3",
    "Bank2": "https://ahb01qmobwbv01.alhilalbank.ae/services/Bank2",
    "GoogleAPIs": "https://ahb01qmobwbv01.alhilalbank.ae/services/GoogleAPIs",
    "Bank1": "https://ahb01qmobwbv01.alhilalbank.ae/services/Bank1",
    "FetchAccountDetails": "https://ahb01qmobwbv01.alhilalbank.ae/services/FetchAccountDetails",
    "NonOAuthServices": "https://ahb01qmobwbv01.alhilalbank.ae/services/NonOAuthServices",
    "dbpAccountsorch": "https://ahb01qmobwbv01.alhilalbank.ae/services/dbpAccountsorch",
    "AHBBeneficiaries": "https://ahb01qmobwbv01.alhilalbank.ae/services/AHBBeneficiaries",
    "MainBank": "https://ahb01qmobwbv01.alhilalbank.ae/services/MainBank",
    "AdminConsoleServices": "https://ahb01qmobwbv01.alhilalbank.ae/services/AdminConsoleServices",
    "AHBUserChequesService": "https://ahb01qmobwbv01.alhilalbank.ae/services/AHBUserChequesService",
    "AHBPayees": "https://ahb01qmobwbv01.alhilalbank.ae/services/AHBPayees",
    "AHBTransferService": "https://ahb01qmobwbv01.alhilalbank.ae/services/AHBTransferService",
    "UserAuthService": "https://ahb01qmobwbv01.alhilalbank.ae/services/UserAuthService",
    "AHBMemcache": "https://ahb01qmobwbv01.alhilalbank.ae/services/AHBMemcache",
    "AdminConfigService": "https://ahb01qmobwbv01.alhilalbank.ae/services/AdminConfigService",
    "dbpAccountAggregationjava": "https://ahb01qmobwbv01.alhilalbank.ae/services/dbpAccountAggregationjava",
    "AHBLocationsService": "https://ahb01qmobwbv01.alhilalbank.ae/services/AHBLocationsService",
    "pushNotificationsAuthService": "https://ahb01qmobwbv01.alhilalbank.ae/services/pushNotificationsAuthService",
    "AHBRegistration": "https://ahb01qmobwbv01.alhilalbank.ae/services/AHBRegistration",
    "PushNotification": "https://ahb01qmobwbv01.alhilalbank.ae/services/PushNotification",
    "SendPushMessage": "https://ahb01qmobwbv01.alhilalbank.ae/services/SendPushMessage"
  },
  "service_doc_etag": "000001680F198C49",
  "appId": "a03f5883-ec79-4f89-8116-25cd7381a079",
  "identity_features": {
    "reporting_params_header_allowed": true
  },
  "name": "RetailBankingServices",
  "reportingsvc": {
    "session": "https://ahb01qmobwbv01.alhilalbank.ae/services/IST",
    "custom": "https://ahb01qmobwbv01.alhilalbank.ae/services/CMS"
  },
  "baseId": "5eb17ba4-62be-40b9-a465-56c0869c4230",
  "login": [
    {
      "mandatory_fields": [
        
      ],
      "alias": "NUOApplicantLogin",
      "type": "basic",
      "prov": "NUOApplicantLogin",
      "url": "https://ahb01qmobwbv01.alhilalbank.ae/authService/100000022"
    },
    {
      "alias": "LinkedIn",
      "type": "oauth2",
      "prov": "LinkedIn",
      "url": "https://ahb01qmobwbv01.alhilalbank.ae/authService/100000022"
    },
    {
      "mandatory_fields": [
        
      ],
      "alias": "IdentityProviderBank1",
      "type": "basic",
      "prov": "IdentityProviderBank1",
      "url": "https://ahb01qmobwbv01.alhilalbank.ae/authService/100000022"
    },
    {
      "mandatory_fields": [
        
      ],
      "alias": "CopyCustomLogin",
      "type": "basic",
      "prov": "CopyCustomLogin",
      "url": "https://ahb01qmobwbv01.alhilalbank.ae/authService/100000022"
    },
    {
      "mandatory_fields": [
        
      ],
      "alias": "IdentityProviderBank5",
      "type": "basic",
      "prov": "IdentityProviderBank5",
      "url": "https://ahb01qmobwbv01.alhilalbank.ae/authService/100000022"
    },
    {
      "mandatory_fields": [
        
      ],
      "alias": "IdentityProviderBank4",
      "type": "basic",
      "prov": "IdentityProviderBank4",
      "url": "https://ahb01qmobwbv01.alhilalbank.ae/authService/100000022"
    },
    {
      "mandatory_fields": [
        
      ],
      "alias": "CustomLogin",
      "type": "basic",
      "prov": "CustomLogin",
      "url": "https://ahb01qmobwbv01.alhilalbank.ae/authService/100000022"
    },
    {
      "mandatory_fields": [
        
      ],
      "alias": "IdentityProviderBank3",
      "type": "basic",
      "prov": "IdentityProviderBank3",
      "url": "https://ahb01qmobwbv01.alhilalbank.ae/authService/100000022"
    },
    {
      "mandatory_fields": [
        
      ],
      "alias": "IdentityProviderBank2",
      "type": "basic",
      "prov": "IdentityProviderBank2",
      "url": "https://ahb01qmobwbv01.alhilalbank.ae/authService/100000022"
    }
  ],
  "services_meta": {
    "AHBPaymentService": {
      "type": "integsvc",
      "version": "1.0",
      "url": "https://ahb01qmobwbv01.alhilalbank.ae/services/AHBPaymentService"
    },
    "RBObjects": {
      "offline": false,
      "metadata_url": "https://ahb01qmobwbv01.alhilalbank.ae/services/metadata/v1/RBObjects",
      "type": "objectsvc",
      "version": "1.0",
      "url": "https://ahb01qmobwbv01.alhilalbank.ae/services/data/v1/RBObjects"
    },
    "RetailBankingBEServices": {
      "type": "integsvc",
      "version": "1.0",
      "url": "https://ahb01qmobwbv01.alhilalbank.ae/services/RetailBankingBEServices"
    },
    "LinkedInService": {
      "type": "integsvc",
      "version": "1.0",
      "url": "https://ahb01qmobwbv01.alhilalbank.ae/services/LinkedInService"
    },
    "dbpTransactionsorch": {
      "type": "integsvc",
      "version": "1.0",
      "url": "https://ahb01qmobwbv01.alhilalbank.ae/services/dbpTransactionsorch"
    },
    "AHBSettings": {
      "type": "integsvc",
      "version": "1.0",
      "url": "https://ahb01qmobwbv01.alhilalbank.ae/services/AHBSettings"
    },
    "ATMLocator": {
      "type": "integsvc",
      "version": "1.0",
      "url": "https://ahb01qmobwbv01.alhilalbank.ae/services/ATMLocator"
    },
    "RBCustomLogin": {
      "type": "integsvc",
      "version": "1.0",
      "url": "https://ahb01qmobwbv01.alhilalbank.ae/services/RBCustomLogin"
    },
    "SetIdentityScope": {
      "type": "integsvc",
      "version": "1.0",
      "url": "https://ahb01qmobwbv01.alhilalbank.ae/services/SetIdentityScope"
    },
    "AHBLoginService": {
      "type": "integsvc",
      "version": "1.0",
      "url": "https://ahb01qmobwbv01.alhilalbank.ae/services/AHBLoginService"
    },
    "dbpPayeeorch": {
      "type": "integsvc",
      "version": "1.0",
      "url": "https://ahb01qmobwbv01.alhilalbank.ae/services/dbpPayeeorch"
    },
    "Dashboard": {
      "type": "integsvc",
      "version": "1.0",
      "url": "https://ahb01qmobwbv01.alhilalbank.ae/services/Dashboard"
    },
    "AHBOTPService": {
      "type": "integsvc",
      "version": "1.0",
      "url": "https://ahb01qmobwbv01.alhilalbank.ae/services/AHBOTPService"
    },
    "createMainUserIdentity": {
      "type": "integsvc",
      "version": "1.0",
      "url": "https://ahb01qmobwbv01.alhilalbank.ae/services/createMainUserIdentity"
    },
    "MultiPayment": {
      "type": "integsvc",
      "version": "1.0",
      "url": "https://ahb01qmobwbv01.alhilalbank.ae/services/MultiPayment"
    },
    "OTPService": {
      "type": "integsvc",
      "version": "1.0",
      "url": "https://ahb01qmobwbv01.alhilalbank.ae/services/OTPService"
    },
    "AHBAccounts": {
      "type": "integsvc",
      "version": "1.0",
      "url": "https://ahb01qmobwbv01.alhilalbank.ae/services/AHBAccounts"
    },
    "Bank5": {
      "type": "integsvc",
      "version": "1.0",
      "url": "https://ahb01qmobwbv01.alhilalbank.ae/services/Bank5"
    },
    "Bank4": {
      "type": "integsvc",
      "version": "1.0",
      "url": "https://ahb01qmobwbv01.alhilalbank.ae/services/Bank4"
    },
    "AccountAggregation": {
      "offline": false,
      "metadata_url": "https://ahb01qmobwbv01.alhilalbank.ae/services/metadata/v1/AccountAggregation",
      "type": "objectsvc",
      "version": "1.0",
      "url": "https://ahb01qmobwbv01.alhilalbank.ae/services/data/v1/AccountAggregation"
    },
    "NUOServices": {
      "type": "integsvc",
      "version": "1.0",
      "url": "https://ahb01qmobwbv01.alhilalbank.ae/services/NUOServices"
    },
    "Bank3": {
      "type": "integsvc",
      "version": "1.0",
      "url": "https://ahb01qmobwbv01.alhilalbank.ae/services/Bank3"
    },
    "Bank2": {
      "type": "integsvc",
      "version": "1.0",
      "url": "https://ahb01qmobwbv01.alhilalbank.ae/services/Bank2"
    },
    "GoogleAPIs": {
      "type": "integsvc",
      "version": "1.0",
      "url": "https://ahb01qmobwbv01.alhilalbank.ae/services/GoogleAPIs"
    },
    "Bank1": {
      "type": "integsvc",
      "version": "1.0",
      "url": "https://ahb01qmobwbv01.alhilalbank.ae/services/Bank1"
    },
    "FetchAccountDetails": {
      "type": "integsvc",
      "version": "1.0",
      "url": "https://ahb01qmobwbv01.alhilalbank.ae/services/FetchAccountDetails"
    },
    "NonOAuthServices": {
      "type": "integsvc",
      "version": "1.0",
      "url": "https://ahb01qmobwbv01.alhilalbank.ae/services/NonOAuthServices"
    },
    "dbpAccountsorch": {
      "type": "integsvc",
      "version": "1.0",
      "url": "https://ahb01qmobwbv01.alhilalbank.ae/services/dbpAccountsorch"
    },
    "AHBBeneficiaries": {
      "type": "integsvc",
      "version": "1.0",
      "url": "https://ahb01qmobwbv01.alhilalbank.ae/services/AHBBeneficiaries"
    },
    "MainBank": {
      "type": "integsvc",
      "version": "1.0",
      "url": "https://ahb01qmobwbv01.alhilalbank.ae/services/MainBank"
    },
    "AdminConsoleServices": {
      "type": "integsvc",
      "version": "1.0",
      "url": "https://ahb01qmobwbv01.alhilalbank.ae/services/AdminConsoleServices"
    },
    "AHBUserChequesService": {
      "type": "integsvc",
      "version": "1.0",
      "url": "https://ahb01qmobwbv01.alhilalbank.ae/services/AHBUserChequesService"
    },
    "AHBPayees": {
      "type": "integsvc",
      "version": "1.0",
      "url": "https://ahb01qmobwbv01.alhilalbank.ae/services/AHBPayees"
    },
    "AHBTransferService": {
      "type": "integsvc",
      "version": "1.0",
      "url": "https://ahb01qmobwbv01.alhilalbank.ae/services/AHBTransferService"
    },
    "UserAuthService": {
      "type": "integsvc",
      "version": "1.0",
      "url": "https://ahb01qmobwbv01.alhilalbank.ae/services/UserAuthService"
    },
    "AHBMemcache": {
      "type": "integsvc",
      "version": "1.0",
      "url": "https://ahb01qmobwbv01.alhilalbank.ae/services/AHBMemcache"
    },
    "AdminConfigService": {
      "type": "integsvc",
      "version": "1.0",
      "url": "https://ahb01qmobwbv01.alhilalbank.ae/services/AdminConfigService"
    },
    "dbpAccountAggregationjava": {
      "type": "integsvc",
      "version": "1.0",
      "url": "https://ahb01qmobwbv01.alhilalbank.ae/services/dbpAccountAggregationjava"
    },
    "AHBLocationsService": {
      "type": "integsvc",
      "version": "1.0",
      "url": "https://ahb01qmobwbv01.alhilalbank.ae/services/AHBLocationsService"
    },
    "pushNotificationsAuthService": {
      "type": "integsvc",
      "version": "1.0",
      "url": "https://ahb01qmobwbv01.alhilalbank.ae/services/pushNotificationsAuthService"
    },
    "AHBRegistration": {
      "type": "integsvc",
      "version": "1.0",
      "url": "https://ahb01qmobwbv01.alhilalbank.ae/services/AHBRegistration"
    },
    "PushNotification": {
      "type": "integsvc",
      "version": "1.0",
      "url": "https://ahb01qmobwbv01.alhilalbank.ae/services/PushNotification"
    },
    "SendPushMessage": {
      "type": "integsvc",
      "version": "1.0",
      "url": "https://ahb01qmobwbv01.alhilalbank.ae/services/SendPushMessage"
    }
  }
}