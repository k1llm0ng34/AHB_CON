if (typeof(com) === "undefined" || com === null) {
    com = {};
}
if (com.gemalto === undefined || com.gemalto === null) {
    com.gemalto = {};
}
if (com.gemalto.idp === undefined || com.gemalto.idp === null) {
    /** 
    	@public
    	@namespace
    */
    com.gemalto.idp = {};
}
com.gemalto.idp.isPresent = function() {
    try {
        com.gemalto.idp.NativeClasses.import();
    } catch (e) {
        return false;
    }
    return true;
};
com.gemalto.livenessMode = {
    IMAGE: 0,
    LIVENESS_PASSIVE: 1
};
com.gemalto.tokenType = {
    OATH: 0,
    CAP: 1
};
com.gemalto.tokenConfigType = {
    EPS: 0,
    CLEAR_TEXT: 1,
    OFFLINE: 2
};
com.gemalto.provisioningProtocolVersion = {
    V1: 1,
    V2: 2,
    V3: 3
};
com.gemalto.FaceIdService = (function() {
    var config = null;
    var nativeClasses = null;
    var faceAuthService = null;
    var enableFaceUI = true;

    function FaceIdService(serviceConfig) {
        nativeClasses = com.gemalto.idp.NativeClasses.import();
        config = JSON.parse(JSON.stringify(serviceConfig));
        initializeGemaltoSDK();

        function initializeGemaltoSDK() {
            var ApplicationContextHolder = nativeClasses.ApplicationContextHolder;
            var KonyMain = nativeClasses.KonyMain;
            var IdpCore = nativeClasses.IdpCore;
            var OtpConfiguration = nativeClasses.OtpConfiguration;
            ApplicationContextHolder.setContext(KonyMain.getAppContext());
            if (!IdpCore.isConfigured()) {
                // Initialize otp configuration
                var otpConfig = new OtpConfiguration.Builder().setRootPolicy(OtpConfiguration.TokenRootPolicy.IGNORE).build();
                var otpConfigArray = java.newArray("com.gemalto.idp.mobile.core.IdpConfiguration", [otpConfig]);
                IdpCore.configure(otpConfigArray);
                // Login to password manager
                try {
                    IdpCore.getInstance().getPasswordManager().login();
                } catch (e) {
                    e.printStackTrace();
                    throw e.getMessage();
                }
            }
        }
    }
    FaceIdService.prototype.initialize = function(initCallbacks) {
        var cameraPermission = kony.application.checkPermission(kony.os.RESOURCE_CAMERA);
        if (cameraPermission.status == kony.application.PERMISSION_DENIED) {
            kony.application.requestPermission(kony.os.RESOURCE_CAMERA, permissionCallback);
        } else {
            try {
                requestPhoneStatePermission();
            } catch (e) {
                initCallbacks.onFailed("Initialization failed. Permission Denied to read phone state.");
                return;
            }
            _initialize();
        }

        function permissionCallback(permissionStatus) {
            if (permissionStatus.status == kony.application.PERMISSION_GRANTED) {
                try {
                    requestPhoneStatePermission();
                } catch (e) {
                    initCallbacks.onFailed("Initialization failed. Permission Denied to read phone state.");
                    return;
                }
                _initialize();
            } else {
                initCallbacks.onFailed("Initialization failed. Permission denied to access camera");
            }
        }

        function requestPhoneStatePermission() {
            var uid = kony.os.deviceInfo().uid; //This is a hack to get phone state permission
        }

        function _initialize() {
            var FaceAuthService = nativeClasses.FaceAuthService;
            var KonyMain = nativeClasses.KonyMain;
            if (faceAuthService === null) {
                var AuthenticationModule = nativeClasses.AuthenticationModule;
                var authModule = AuthenticationModule.create();
                faceAuthService = FaceAuthService.create(authModule);
                if (!faceAuthService.isSupported()) {
                    initCallbacks.onFailed("Initialization Failed. FaceAuth service not supported");
                }
            }
            try {
                var token = createToken();
                if (token) {
                    FaceAuthService.setContext(KonyMain.getActContext());
                    configureLicense();
                } else {
                    initCallbacks.onFailed("Initialization Failed. Failed to create token with name '" + config.tokenConfig.tokenName + "'");
                }
            } catch (e) {
                initCallbacks.onFailed("Initialization Failed due to " + e);
            }

            function configureLicense() {
                var FaceAuthLicense = nativeClasses.FaceAuthLicense;
                var FaceAuthLicenseConfigurationCallback = nativeClasses.FaceAuthLicenseConfigurationCallback;
                /*if(faceAuthService.isLicenseConfigured()){
                	initializeFaceAuth();
                }else{*/
                var license = new FaceAuthLicense.Builder().setLicenseEntitlement(config.licenseConfig.licenseString).setServerUrl(config.licenseConfig.licenseServerUrl).build();
                var faceAuthLicenseConfigurationCallback = new FaceAuthLicenseConfigurationCallback();
                faceAuthLicenseConfigurationCallback.onSuccess = onLicenseConfigurationSuccess;
                faceAuthLicenseConfigurationCallback.onFailed = onLicenseConfigurationFailed;
                faceAuthService.configureLicense(license, faceAuthLicenseConfigurationCallback);
                //}
            }

            function onLicenseConfigurationSuccess() {
                initializeFaceAuth();
            }

            function onLicenseConfigurationFailed(e) {
                initCallbacks.onFailed("Initialization failed. Unable to configure license due to " + e);
            }

            function initializeFaceAuth() {
                if (faceAuthService.isInitialized()) {
                    initCallbacks.onSuccess();
                } else {
                    var FaceAuthInitializeCallback = nativeClasses.FaceAuthInitializeCallback;
                    var faceAuthInitializeCallback = new FaceAuthInitializeCallback();
                    faceAuthInitializeCallback.onSuccess = onFaceAuthInitSuccess;
                    faceAuthInitializeCallback.onFailed = onFaceAuthInitFailed;
                    faceAuthService.initialize(faceAuthInitializeCallback);
                }

                function onFaceAuthInitSuccess() {
                    initCallbacks.onSuccess();
                }

                function onFaceAuthInitFailed(e) {
                    initCallbacks.onFailed("Initialization failed due to " + e);
                }
            }
        }
    };
    FaceIdService.prototype.uninitialize = function() {
        if (faceAuthService) faceAuthService.uninitialize();
    };
    FaceIdService.prototype.enroll = function(enrollCallbacks) {
        if (faceAuthService === null || !faceAuthService.isInitialized()) {
            enrollCallbacks.onFailed("FaceAuth service not initialized");
            return;
        }
        if (faceAuthService.isConfigured()) {
            enrollCallbacks.onFailed("Face already enrolled");
            return;
        }
        var FaceEnrollmentCallback = nativeClasses.FaceEnrollmentCallback;
        var KonyMain = nativeClasses.KonyMain;
        var Intent = nativeClasses.Intent;
        if (enableFaceUI) {
            var FaceEnrollActivity = nativeClasses.FaceEnrollmentActivity;
        } else {
            var FaceEnrollActivity = nativeClasses.FaceEnrollActivity;
        }
        var enrollConfig = config.enrollConfig;
        var faceEnrollmentCallback = new FaceEnrollmentCallback();
        faceEnrollmentCallback.enrollSuccess = onEnrollSuccess;
        faceEnrollmentCallback.enrollFailed = onEnrollFailed;
        if (enrollConfig && enrollConfig.timeout) {
            FaceEnrollActivity.setTimeout(enrollConfig.timeout);
        } else {
            FaceEnrollActivity.setTimeout(5000);
        }
        FaceEnrollActivity.setEnrollmentCallback(faceEnrollmentCallback);
        var enrollerSettings = faceAuthService.getFaceAuthFactory().createFaceAuthEnrollerSettings();
        setFaceAuthSettings(enrollerSettings, enrollConfig);
        FaceEnrollActivity.setEnrollerSettings(enrollerSettings);
        var intent = new Intent(KonyMain.getActContext(), FaceEnrollActivity.class);
        KonyMain.getActContext().startActivity(intent);
        var thisObject = this;

        function onEnrollSuccess() {
            activateFaceAuthMode();
            enrollCallbacks.onSuccess();
        }

        function onEnrollFailed(e) {
            enrollCallbacks.onFailed("Enrollment Failed. " + e);
        }
    };
    FaceIdService.prototype.cancelEnrollment = function() {};
    FaceIdService.prototype.unenroll = function(unenrollCallbacks) {
        if (faceAuthService === null || !faceAuthService.isInitialized()) {
            unenrollCallbacks.onFailed("FaceAuth service not initialized");
            return;
        }
        if (!faceAuthService.isConfigured()) {
            unenrollCallbacks.onFailed("Face not enrolled");
            return;
        }
        var KonyMain = nativeClasses.KonyMain;
        var FaceAuthUnenrollerCallback = nativeClasses.FaceAuthUnenrollerCallback;
        var FaceAuthService = nativeClasses.FaceAuthService;
        FaceAuthService.setContext(KonyMain.getActContext());
        var faceAuthFactory = faceAuthService.getFaceAuthFactory();
        var enroller = faceAuthFactory.createFaceAuthEnroller();
        var faceAuthUnenrollerCallback = new FaceAuthUnenrollerCallback();
        faceAuthUnenrollerCallback.unenrollFinishCallback = onUnenrollFinish;
        faceAuthUnenrollerCallback.unenrollErrorCallback = onUnenrollError;
        enroller.unenroll(faceAuthUnenrollerCallback);

        function onUnenrollFinish(faceAuthStatus) {
            var FaceAuthStatus = nativeClasses.FaceAuthStatus;
            var status = faceAuthStatus.toString();
            if (status === FaceAuthStatus.SUCCESS.toString()) {
                unenrollCallbacks.onSuccess();
            } else {
                unenrollCallbacks.onFailed("Unenrollment failed due to " + status);
            }
        }

        function onUnenrollError(e) {
            unenrollCallbacks.onFailed("Unenrollment failed due to " + e);
        }
    };
    FaceIdService.prototype.verify = function(verifyCallbacks) {
        if (faceAuthService === null || !faceAuthService.isInitialized()) {
            verifyCallbacks.onFailed("FaceAuth service not initialized");
            return;
        }
        if (!faceAuthService.isConfigured()) {
            verifyCallbacks.onFailed("Face not enrolled");
            return;
        }
        var IdpCore = nativeClasses.IdpCore;
        var token = null;
        var pm = IdpCore.getInstance().getPasswordManager();
        try {
            if (!pm.isLoggedIn()) {
                pm.isLoggedIn();
            }
            token = getToken();
        } catch (e) {
            verifyCallbacks.onFailed("Verification failed. " + e);
            return;
        }
        if (token) {
            var FaceVerificationCallback = nativeClasses.FaceVerificationCallback;
            var Intent = nativeClasses.Intent;
            var KonyMain = nativeClasses.KonyMain;
            if (enableFaceUI) {
                var FaceVerifyActivity = nativeClasses.FaceVerificationActivity;
            } else {
                var FaceVerifyActivity = nativeClasses.FaceVerifyActivity;
            }

            function onVerifySuccess() {
                verifyCallbacks.onSuccess();
            };

            function onVerifyFailed(error) {
                verifyCallbacks.onFailed("Verffication failed. " + error);
            };
            var verifyConfig = config.verifyConfig;
            var faceVerificationCallback = new FaceVerificationCallback();
            faceVerificationCallback.verifySuccess = onVerifySuccess;
            faceVerificationCallback.verifyFailed = onVerifyFailed;
            if (verifyConfig && verifyConfig.timeout) {
                FaceVerifyActivity.setTimeout(verifyConfig.timeout);
            } else {
                FaceVerifyActivity.setTimeout(5000);
            }
            FaceVerifyActivity.setVerificationCallback(faceVerificationCallback);
            FaceVerifyActivity.setToken(token);
            var verifierSettings = faceAuthService.getFaceAuthFactory().createFaceAuthVerifierSettings();
            setFaceAuthSettings(verifierSettings, verifyConfig);
            if (verifyConfig && verifyConfig.matchingThreshold) {
                verifierSettings.setMatchingThreshold(verifyConfig.matchingThreshold);
            }
            FaceVerifyActivity.setVerifierSettings(verifierSettings);
            var intent = new Intent(KonyMain.getActContext(), FaceVerifyActivity.class);
            KonyMain.getActContext().startActivity(intent);
        } else {
            verifyCallbacks.onFailed("Verification failed. Token not found with name '" + config.tokenConfig.tokenName + "'");
        }
    };
    FaceIdService.prototype.cancelVerification = function() {};

    function createToken() {
        var token = getToken();
        if (!token) {
            if (config.tokenConfig.tokenType === com.gemalto.tokenType.OATH) {
                token = createOATHToken();
            } else if (config.tokenConfig.tokenType === com.gemalto.tokenType.CAP) {
                token = createCAPToken();
            }
        }
        return token;
    }

    function activateFaceAuthMode() {
        var token = getToken();
        var PinAuthService = nativeClasses.PinAuthService;
        var AuthenticationModule = nativeClasses.AuthenticationModule;
        var pinAuthInput = PinAuthService.create(AuthenticationModule.create()).createAuthInput(config.tokenConfig.pin);
        if (!token.isMultiAuthModeEnabled()) {
            token.upgradeToMultiAuthMode(pinAuthInput);
        }
        if (!token.isAuthModeActive(faceAuthService.getAuthMode())) {
            token.activateAuthMode(faceAuthService.getAuthMode(), pinAuthInput);
        }
    }

    function createCAPToken() {
        var OtpModule = nativeClasses.OtpModule;
        var CapService = nativeClasses.CapService;
        var capService = CapService.create(OtpModule.create());
        var tokenConfig = getProvisioningConfiguration(config.tokenConfig);
        var token = capService.getTokenManager().createToken(config.tokenConfig.tokenName, tokenConfig);
        return token;
    }

    function createOATHToken() {
        var OtpModule = nativeClasses.OtpModule;
        var OathService = nativeClasses.OathService;
        var oathService = OathService.create(OtpModule.create());
        var tokenConfig = getProvisioningConfiguration(config.tokenConfig);
        var token = oathService.getTokenManager().createToken(config.tokenConfig.tokenName, tokenConfig);
        return token;
    }

    function getProvisioningConfiguration() {
        var tokenConfigType = config.tokenConfig.tokenConfigType;
        var tokenConfig = null;
        if (tokenConfigType === com.gemalto.tokenConfigType.EPS) {
            tokenConfig = getEpsTokenConfiguration();
        } else if (tokenConfigType === com.gemalto.tokenConfigType.CLEAR_TEXT) {
            tokenConfig = getClearTextSecretTokenConfiguration();
        } else if (tokenConfigType === com.gemalto.tokenConfigType.OFFLINE) {
            tokenConfig = getOfflineTokenConfiguration();
        }
        return tokenConfig;
    }

    function getEpsTokenConfiguration() {
        var IdpCore = nativeClasses.IdpCore;
        var EpsConfigurationBuilder = nativeClasses.EpsConfigurationBuilder;
        var URL = nativeClasses.URL;
        var secureContainerFactory = IdpCore.getInstance().getSecureContainerFactory();
        var registrationCode = secureContainerFactory.fromString(config.tokenConfig.registrationCode);
        var url = new URL(config.tokenConfig.url);
        var epsTokenConfig = new EpsConfigurationBuilder(registrationCode, url, getProvisioningProtocolVersion(), config.tokenConfig.rsaKeyId, getJavaByteArrayForHex(config.tokenConfig.rsaExponent), getJavaByteArrayForHex(config.tokenConfig.rsaModulus)).build();
        return epsTokenConfig;
    }

    function getClearTextSecretTokenConfiguration() {
        var IdpCore = nativeClasses.IdpCore;
        var ClearTextSecretTokenConfigurationBuilder = nativeClasses.ClearTextSecretTokenConfigurationBuilder;
        var AuthenticationModule = nativeClasses.AuthenticationModule;
        var PinAuthService = nativeClasses.PinAuthService;
        var pinAuthInput = PinAuthService.create(AuthenticationModule.create()).createAuthInput(config.tokenConfig.pin);
        var secureContainerFactory = IdpCore.getInstance().getSecureContainerFactory();
        var secretBytes = secureContainerFactory.fromString(config.tokenConfig.secret).toByteArray();
        secretBytes = getJavaByteArrayFromJsArray(secretBytes);
        var secret = IdpCore.getInstance().getSecureContainerFactory().createByteArray(secretBytes, true);
        var clearTextTokenConfig = new ClearTextSecretTokenConfigurationBuilder(pinAuthInput, secret, true).build();
        return clearTextTokenConfig;
    }

    function getOfflineTokenConfiguration() {
        var IdpCore = nativeClasses.IdpCore;
        var OfflineTokenConfigurationBuilder = nativeClasses.OfflineTokenConfigurationBuilder;
        var secureContainerFactory = IdpCore.getInstance().getSecureContainerFactory();
        var sessionKey = secureContainerFactory.fromByteArray(getJavaByteArrayForHex(config.tokenConfig.sessionKey), true);
        var provisioningResponse = secureContainerFactory.fromByteArray(getJavaByteArrayForHex(config.tokenConfig.provisioningResponse), true);
        var offlineTokenConfig = new OfflineTokenConfigurationBuilder(getProvisioningProtocolVersion(), sessionKey, provisioningResponse).build();
        return offlineTokenConfig;
    }

    function getJavaByteArrayForHex(hexString) {
        var out = [];
        if (hexString.length % 2 !== 0) {
            hexString = 0 + hexString;
        }
        for (var startIndex = 0; startIndex < hexString.length; startIndex = startIndex + 2) {
            var substring = hexString.substr(startIndex, 2);
            out[startIndex / 2] = java.newByte(parseInt(substring, 16));
        }
        return java.newArray("byte", out);
    }

    function getJavaByteArrayFromJsArray(jsArray) {
        var out = [];
        for (var i = 0; i < jsArray.length; i++) {
            out[i] = java.newByte(jsArray[i]);
        }
        return java.newArray("byte", out);
    }

    function getProvisioningProtocolVersion() {
        var protocolVersion = config.tokenConfig.protocolVersion;
        var MobileProvisioningProtocol = nativeClasses.MobileProvisioningProtocol;
        if (protocolVersion === com.gemalto.provisioningProtocolVersion.V1) {
            return MobileProvisioningProtocol.PROVISIONING_PROTOCOL_V1;
        } else if (protocolVersion === com.gemalto.provisioningProtocolVersion.V2) {
            return MobileProvisioningProtocol.PROVISIONING_PROTOCOL_V2;
        } else if (protocolVersion === com.gemalto.provisioningProtocolVersion.V3) {
            return MobileProvisioningProtocol.PROVISIONING_PROTOCOL_V3;
        } else {
            throw "Provisioning protocol version required";
        }
    }

    function getToken() {
        var token = null;
        if (config.tokenConfig.tokenType === com.gemalto.tokenType.OATH) {
            token = getOATHToken();
        } else if (config.tokenConfig.tokenType === com.gemalto.tokenType.CAP) {
            token = getCAPToken();
        }
        return token;
    }

    function getOATHToken() {
        var OathService = nativeClasses.OathService;
        var OtpModule = nativeClasses.OtpModule;
        var oathService = OathService.create(OtpModule.create());
        var token = oathService.getTokenManager().getToken(config.tokenConfig.tokenName);
        return token;
    }

    function getCAPToken() {
        var CapService = nativeClasses.CapService;
        var OtpModule = nativeClasses.OtpModule;
        var capService = CapService.create(OtpModule.create());
        var token = capService.getTokenManager().getToken(config.tokenConfig.tokenName);
        return token;
    }

    function setFaceAuthSettings(faceAuthSettings, config) {
        if (!config) return;
        var livenessMode = getLivenessMode(config);
        if (livenessMode) {
            faceAuthSettings.setLivenessMode(livenessMode);
        }
        var livenessThreshold = config.livenessThreshold;
        if (livenessThreshold) {
            faceAuthSettings.setLivenessThreshold(livenessThreshold);
        }
        var blinkTimeout = config.blinkTimeout;
        if (blinkTimeout) {
            faceAuthSettings.setLivenessBlinkTimeout(blinkTimeout);
        }
        var qualityThreshold = config.qualityThreshold;
        if (qualityThreshold) {
            faceAuthSettings.setQualityThreshold(qualityThreshold);
        }
    }

    function getLivenessMode(config) {
        if (!config) return;
        var livenessMode;
        var FaceAuthSettings = nativeClasses.FaceAuthSettings;
        if (config.livenessMode === com.gemalto.livenessMode.IMAGE) {
            livenessMode = FaceAuthSettings.FaceAuthLivenessMode.IMAGE;
        } else if (config.livenessMode === com.gemalto.livenessMode.LIVENESS_PASSIVE) {
            livenessMode = FaceAuthSettings.FaceAuthLivenessMode.LIVENESS_PASSIVE;
        }
        return livenessMode;
    }
    return FaceIdService;
})();