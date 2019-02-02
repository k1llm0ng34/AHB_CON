//Type your code here
function getApplicationFabricBuildConfiguration(){

  	var applicationCurrentMode = "QA"; //DEV, PRD, QA, UAT
  	var fabricAppData = getMobileFabricAppinfo(applicationCurrentMode);
  	var fabricData = {
      appKey : fabricAppData.appKey,
      appSecret : fabricAppData.appSecret,
      serviceDoc : getMobileFabricServiceDoc(applicationCurrentMode)
    };
  return fabricData;
}


function getMobileFabricAppinfo(applicationCurrentMode){
  var fabricAppData = {
    DEV : {
      appKey : "de0eedbab46ae4d751d300a0422c6b9b",
      appSecret : "25222b6779f139a9f5d806b4fc9b3ec2"
    },
    PRD : {
      appKey : "ce44a38c3ebbac414141d3b0258116eb",
      appSecret : "d19a614e324d7e09d774e4bfcc2b9eaf"
      
    },
    QA : {
      appKey : "b8407dd8bb5f899509f939763393d2a1",
      appSecret :"f1caa77c077a126cace585b5f7733d59"
      
    },
    UAT : {
      appKey : "TOBEADDED",
      appSecret : "TOBEADDED"
      
    }
  };
  
  return fabricAppData[applicationCurrentMode];
}


function getMobileFabricServiceDoc (applicationCurrentMode){
  var fabricServiceDoc ={
    DEV : getManualServiceDocForDev,
    PRD : getManualServiceDocForPRD,
    QA : getManualServiceDocForQA,
    UAT : getManualServiceDocForUAT
  };
  return fabricServiceDoc[applicationCurrentMode]();
}