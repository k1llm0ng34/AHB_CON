var faceIdService = null;
function intializeFacialAuth(){
	var serviceConfig = {

      tokenConfig : {
          tokenName : "login",
          tokenType : com.gemalto.tokenType.OATH, //oath or CAP
          tokenConfigType : com.gemalto.tokenConfigType.CLEAR_TEXT, //eps or cleartext or offline

          //Following properties are valid if value of tokenConfigType property is eps
          registrationCode : "69FaceAuth_initialize264452373",
          url : "https://noramdemo.com/provisioner/api/provisioning/pp",
          
          rsaKeyId : "eps-public-key",
          rsaExponent : "010001",
          rsaModulus : "c9dd1c323e19fd4e70f97f5ae3b571818bb6c2ecfe9edb52ace5c0d71d71b7a73b52ed1b7eb1865e4ecf50f72ae2b41b38c894b0c40bebfe957e65ac265be9421d932b69f711fd8d91ee5cad51dca1832ab54fe432bb89261bd017be782c40725c631023ed6275706b03844ea4980627870333ac0770a59f96a74b9870eec29f5cb07722fbe2920d7d70d586713c0c392bab9dbb50634762ca7e8fc42e795a1eca179efd2287b570668fbb4b92867dcf93b90ff522087a8fe85c04c4c618b32e20c49c401773002855775c5eaf7bb31248cb611820e48bd26a76170991d08a46b1d9bc0cb58b6d3fbfe083a80f2f37f8e9128c0d532906369d2d3f1e5b063e3f",

          //Following properties are valid if value of tokenConfigType property is cleartext
          secret : "12345678912345678900",
          
          //Following properties are valid if value of tokenConfigType property is offline
          sessionKey : "5AACF3ACE4DFDBE6AA2EF9BEC8C2E5ACD1A2A6AA3F77E2B2",
          provisioningResponse : "C009A3BCBFDE0E8A0B5FCB5362880E716B6829251C4D45FA",
        
          protocolVersion : com.gemalto.provisioningProtocolVersion.V2,
          pin : "1234",
      },

      licenseConfig : {
          licenseString : "6dbe1057-8a9f-41a8-a9f8-120f129de9f1",
          licenseServerUrl : "https://ezio-uat.gemalto.sentinelcloud.com/ems"
      },

/*      enrollConfig : {
          //timeout : 3000,
          qualityThreshold : 50
      },*/

      verifyConfig : {
          //timeout : 5000,
          livenessMode : com.gemalto.livenessMode.LIVENESS_PASSIVE,
          //livenessThreshold : 50,
          blinkTimeout : 2000,
          qualityThreshold : 60,
          matchingThreshold : 70
      }
	
	};

	faceIdService = com.kony.FaceIdService.getInstance(com.kony.FaceIdServiceProviders.GEMALTO, serviceConfig); 
}

function FaceAuth_initialize(){
	faceIdService.initialize({
		onSuccess : function(){                               
                               FaceAuth_enroll();
                               applicationManager.getPresentationUtility().dismissLoadingScreen();},
		onFailed : function(e){showErrorFaceauth(e);
		                       applicationManager.getPresentationUtility().dismissLoadingScreen();}
	});
}
function showErrorFaceauth(errMsg)
{
  if (errMsg!=null)
 {    
    if(kony.os.deviceInfo().name!=="iPhone")
       alert(errMsg);
  }
}
function FaceAuth_initialize2()
{
  faceIdService.initialize({
		onSuccess : function(){ applicationManager.getPresentationUtility().dismissLoadingScreen();},
		onFailed : function(e){showErrorFaceauth(e);
		                       applicationManager.getPresentationUtility().dismissLoadingScreen();}
	});
}

function FaceAuth_initialize3()
{
  faceIdService.initialize({
		onSuccess : function(){
                              FaceAuth_unenroll()},
		onFailed : function(e){showErrorFaceauth(e);}
	});
}
function FaceAuth_uninitialize(){
	faceIdService.uninitialize();
}

function FaceAuth_enroll(){
	faceIdService.enroll({
		onSuccess : function(){
           					   var userMan = applicationManager.getUserPreferencesManager();
          					   userMan.updateUserFlag("isFaceEnrolled",true);
                               showSuccForm();},
		onFailed : function(e){showErrorFaceauth(e);}
	});
}
  
function FaceAuth_initializeSettings()
{
  faceIdService.initialize({
		onSuccess : function(){                               
                              FaceAuth_enroll_Settings();
                               applicationManager.getPresentationUtility().dismissLoadingScreen();},
		onFailed : function(e){showErrorFaceauth(e);
		                       applicationManager.getPresentationUtility().dismissLoadingScreen();}
	});
}
function FaceAuth_enroll_Settings(){
	faceIdService.enroll({
		onSuccess : function(){
                   var settingMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("SettingsModule");   
		          settingMod.presentationController.enrollFaceId_OnSuccess();
           					    },
		onFailed : function(e){showErrorFaceauth(e);}
	});
} 
 


function FaceAuth_cancelEnrollment(){
	faceIdService.cancelEnrollment();
}


function showSuccForm()
{   
  var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule"); 
  authMode.presentationController.showSuccessFaceId();
}

function FaceAuth_unenroll(){
	faceIdService.unenroll({
		onSuccess : function(){                               
                               var userMan = applicationManager.getUserPreferencesManager();
                               userMan.updateUserFlag("isFaceEnrolled",false);
           					   applicationManager.getPresentationUtility().dismissLoadingScreen();
                             },
		onFailed : function(e){
          applicationManager.getPresentationUtility().dismissLoadingScreen();
          showErrorFaceauth(e);}
	});
}

function FaceAuth_verify(){
	faceIdService.verify({
		onSuccess : function(){
                                //alert("success");           
                              var authMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
							  authMod.presentationController.hideFaceIdflex();
            				  authMod.presentationController.doFaceIdLogin();
                              },
		onFailed : function(e){showErrorFaceauth(e);}
	});
}

function FaceAuth_cancelVerification(){
	faceIdService.cancelVerification();
}