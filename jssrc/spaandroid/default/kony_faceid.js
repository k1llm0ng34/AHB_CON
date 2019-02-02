if (typeof(com) === "undefined" || com === null) {
    /** 
    	@namespace
    	@public
     */
    com = {};
}
if (com.kony === undefined || com.kony === null) {
    /** 
    	@public
    	@namespace
    */
    com.kony = {};
}
if (com.kony.FaceIdService === undefined || com.kony.FaceIdService === null) {
    /**
    	@public
    	@namespace
    */
    com.kony.FaceIdService = {};
}
/**
	This is the entry point to use services of Face Authentication. Creates and returns an instance of face id service for a given service provider

	@public
	@param {string} serviceProvider - Faceid service provider whose instance is returned. See {@link com.kony.FaceIdServiceProviders}.
	@param {object} serviceConfig - service configuration object. See {@link com.gemalto.serviceConfig} for Gemalto service provider.

	@returns {object} - Returns an instance of face id service according to the service provider given that conforms to {@link com.kony.FaceIdService} interface

*/
com.kony.FaceIdService.getInstance = function(serviceProvider, serviceConfig) {
    var faceIdService = null;
    if (serviceProvider === com.kony.FaceIdServiceProviders.GEMALTO) {
        faceIdService = new com.gemalto.FaceIdService(serviceConfig);
    }
    return faceIdService;
};
/**
	This can be used to check if the Facial Recognition Tool is available to be used.
	
	@public
	@param {string} serviceProvider - Facial Recognition Tool serviceProvider that you want to check is available.
	
	@return {boolean} - Returns a boolean stating whether the tool is available or not.
*/
com.kony.FaceIdService.isAvailable = function(serviceProvider) {
    if (serviceProvider === com.kony.FaceIdServiceProviders.GEMALTO) {
        return com.gemalto.idp.isPresent();
    }
};
/**
	List of face id service providers

	@readonly
	@memberof com.kony
	@property {object} GEMALTO - Gemalto face id service
*/
com.kony.FaceIdServiceProviders = {
    GEMALTO: "GEMALTO"
};
/**
 * Interface for classes that implmeents FaceIdService.
 *
 * @interface com.kony.FaceIdService
 */
/**
	Success Callback

	@callback onSuccess
 */
/**
	Error Callback.
 
	@callback onFailed
	@param {string} error - Error string describing the details of error occured
*/
/**
	Initializes faceid service. This method should be called before calling any other method otherwise those methods will fail and calls back [errorCallback]{@link onFailed} if any.

	@function
	@name com.kony.FaceIdService#initialize

	@param {object} initCallbacks - The object which holds initialize callback functions
	@param {onSuccess} initCallbacks.onSuccess - The callback function which gets triggered when initialization is successful.
	@param {onFailed} initCallbacks.onFailed - The callback function which gets triggered when initialization is failed.
*/
/**
	Uninitializes faceid service by uninitializing underlying provider's face authentication service

	@function
	@name com.kony.FaceIdService#uninitialize
*/
/**
	Enrolls user's face. Fails if user's face is already enrolled and calls back [enrollCallbacks.onFailed]{@link onFailed}

	@function
	@name com.kony.FaceIdService#enroll

	@param {object} enrollCallbacks - The object which holds enroll callback functions
	@param {onSuccess} enrollCallbacks.onSuccess - The callback function called when face enrollment is successful.
	@param {onFailed} enrollCallbacks.onFailed - The callback function called when face enrollment is failed.
*/
/**
	Cancels face enrollment while enrollment is in progress

	@function
	@name com.kony.FaceIdService#cancelEnrollment
*/
/**
	Removes face enrollment information if the face is already enrolled previously

	@function
	@name com.kony.FaceIdService#unenroll

	@param {object} unenrollCallbacks - The object which holds callback functions for unenrollment
	@param {onSuccess} unenrollCallbacks.onSuccess - The callback function called when unenrollment is successful
	@param {onFailed} unenrollCallbacks.onFailed - The callback function called when unenrollment fails
*/
/**
	Verifies face with previously enrolled face. Fails if face is not already enrolled and calls back [verifyCallbacks.onFailed]{@link onFailed}.

	@function
	@name com.kony.FaceIdService#verify

	@param {object} verifyCallbacks - The object which holds callback functions for face verification
	@param {onSuccess} verifyCallbacks.onSuccess - The callback function called when face verification is successful.
	@param {onFailed} verifyCallbacks.onFailed - The callback function called when face verification is failed.
*/
/**
	Cancels face verification while verification is in progress

	@function
	@name com.kony.FaceIdService#cancelVerification
*/
/** 
	@namespace com.gemalto
*/
/**
	Configuration object which configures Gemalto FaceId Service

	@name serviceConfig
	@memberof com.gemalto
	@property {object} tokenConfig - Configuration parameters for token
	@property {string} tokenConfig.tokenName - name of the token
	@property {object} tokenConfig.tokenType - type of token. See {@link com.gemalto.tokenType}
	@property {object} tokenConfig.tokenConfigType - type of token configuration. See {@link com.gemalto.tokenConfigType}
	@property {string} tokenConfig.registrationCode - registration code for eps server. Valid only in case of [EPS]{@link com.gemalto.tokenConfigType} token config type.
	@property {string} tokenConfig.url - eps server url. Valid only in case of [EPS]{@link com.gemalto.tokenConfigType} token config type..
	@property {object} tokenConfig.protocolVersion - protocol version. See {@link com.gemalto.provisioningProtocolVersion} for list of valid protocol versions. Valid only in case of [EPS]{@link com.gemalto.tokenConfigType} and [OFFLINE]{@link com.gemalto.tokenConfigType} token config type.
	@property {string} tokenConfig.rsaKeyId - rsa key id. Valid only in case of [EPS]{@link com.gemalto.tokenConfigType} token config type.
	@property {array} tokenConfig.rsaExponent - rsa exponent. Valid only in case of [EPS]{@link com.gemalto.tokenConfigType} token config type.
	@property {array} tokenConfig.rsaModulus - rsa Modulus. Valid only in case of [EPS]{@link com.gemalto.tokenConfigType} token config type.
	@property {string} tokenConfig.secret - user's secret or passpharase. Valid only in case of [CLEAR_TEXT]{@link com.gemalto.tokenConfigType} token config type.
	@property {string} tokenConfig.pin - user's secret pin. Valid only in case of [CLEAR_TEXT]{@link com.gemalto.tokenConfigType} token config type.
	@property {array} tokenConfig.sessionKey - session key. Valid only in case of [OFFLINE]{@link com.gemalto.tokenConfigType} token config type.
	@property {array} tokenConfig.provisioningResponse - provisioning response. Valid only in case of [OFFLINE]{@link com.gemalto.tokenConfigType} token config type.
	@property {object} licenseConfig - license configuration
	@property {string} licenseConfig.licenseString - license entitlement string
	@property {string} licenseConfig.licenseServerUrl - server url for license
	@property {object} enrollConfig - configuration parameters for enrollment
	@property {number} [enrollConfig.timeout = 3000] - The timeout, in milliseconds, within which enrollment has to complete
	@property {number} [enrollConfig.qualityThreshold = 50] - Sets the quality threshold between 0 to 100 to determine quality of face extracted while enrolling. 
																If an extracted face quality is less than specified value, face will be rejected
	@property {object} verifyConfig - configuration parameters for verification
	@property {number} [verifyConfig.timeout = 3000] - The timeout, in milliseconds, within which verificaiton has to complete
	@property {object} [verifyConfig.livenessMode =  com.gemalto.livenessMode.LIVENESS_PASSIVE] - The liveness mode for face verification. See {@link com.gemalto.livenessMode}.
	@property {number} [verifyConfig.livenessThreshold = 0] - Sets liveness threshold value between 0 to 100 used in [LIVENESS_PASSIVE]{@link com.gemalto.livenessMode}. 
															to determine how long "still phase" will be. The higher threshold the longer still phase.
	@property {number} [verifyConfig.blinkTimeout = 2000] - Sets blink timeout, in milliseconds, used in [LIVENESS_PASSIVE]{@link com.gemalto.livenessMode}. If user
															doesn't blinks within the configured blinktimeout, face extraction/verification fails.
	@property {number} [verifyConfig.qualityThreshold = 50] - Sets the quality threshold between 0 to 100 to determine quality of face extracted while verifying. 
															If an extracted face quality is less than specified value, face will be rejected.
	@property {number} [verifyConfig.matchingThreshold = 48] - Sets the matching threshold between 0 to 72 indicating how close the face has to be matched against 
																			against the enrolled face. Higher the value higher the closest matching.
*/
/**
	Liveness mode

	@name livenessMode
	@memberof com.gemalto
	@readonly
	@property {object} IMAGE - This mode doesn't captures livesness of the user. This is the only mode supported and default for enrollment.
	@property {object} LIVENESS_PASSIVE - This mode captures liveness, such as blinking of eyes, of the user.
*/
/**
	Type of token

	@name tokenType
	@memberof com.gemalto
	@readonly
	@property {object} OATH - OATH token
	@property {object} CAP - Chip Authentication Program (CAP) token
*/
/**
	Type of token configuration

	@name tokenConfigType
	@memberof com.gemalto
	@readonly
	@property {object} EPS - Token configuration based on Enrollment and Provisioning Server (EPS)
	@property {object} CLEAR_TEXT - Token configuration based on user's secret or passphrase
	@property {object} OFFLINE - Token configuration based on offline token configuration tool. Should be used only for development purpose
*/
/**
	Provisioning protocol versions used for token creations. This is applicable only when tokenConfigType is EPS or OFFLINE.
	If token type is OATH, then only V3 provisioning protocol version is supported.

	@name provisioningProtocolVersion
	@memberof com.gemalto
	@readonly
	@property {object} V1 - provisioning protocol version v1
	@property {object} V2 - provisioning protocol version v2
	@property {object} V3 - provisioning protocol version v3
*/