var lastLoginDateAndTime ="";  
//Type your code here
  function splashTime(){
    var time = 0;
    //#ifdef android
    time = 3;
    //#endif
    //#ifdef iphone
    time = 6;
    //#endif
    var secTimer1 = new Date().getSeconds();
    do { 
      var secTimer2 = new Date().getSeconds();
      var timeDiff = secTimer2 - secTimer1;
    } while (timeDiff <= time);
    return false;
  }

 /*-----------------------------------------------------------------------------------

  Name: 	checkServiceResponseForErrorCode
  Purpose: 	To check repsonse code and then set service message to display
  Author: 	Bipin
  Date: 	10/10/2018
  Input:	serviceResponse object 
  Return: 	 retObj = {responseCode:'', message:'', data:{} }

  ------------------------------------------------------------------------------------*/

  function checkServiceResponseForErrorCode (pServiceResponse){
    var retObj = {
      responseCode:'',
      message:'',
      data:{}
    };
    kony.print(" checkServiceResponseForErrorCode pServiceResponse "+ JSON.stringify(pServiceResponse) )
    
    retObj.data = pServiceResponse;
    retObj.responseCode = pServiceResponse.responseCode;
    if(pServiceResponse && pServiceResponse.responseCode){
      if(pServiceResponse.responseCode === "200"){
        retObj.message='';
      }else if(pServiceResponse.responseCode === "AHB_1024"){
        var authMode = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("AuthModule");
        authMode.presentationController.onLogout();
        applicationManager.getPresentationUtility().dismissLoadingScreen();
      }else{
        //if the error code is avaialable then to dispaly the message 
        //we will append the response code  to "kony.AHB.ALERT." and get the appropiate message to display
        var message = kony.i18n.getLocalizedString(`kony.AHB.ALERT.${pServiceResponse.responseCode}`);
        if(!message){
          //if  message is undefined or null then we are showing generic error message
          retObj.message =  kony.i18n.getLocalizedString("kony.error.StandardErrorMessage");
        }else{
          retObj.message = message;
        }
      }
    }else if(pServiceResponse.isServerUnreachable){
      // if no response code is available thenchekcing if  service is reachable or not 
      retObj.data = pServiceResponse;
      retObj.responseCode = pServiceResponse.serverErrorRes.opstatus;
      retObj.message =  pServiceResponse.errorMessage;
    }else{
      //For any other error we are showing generic error message
      retObj.data = pServiceResponse;
      retObj.responseCode = '';
      retObj.message =  kony.i18n.getLocalizedString("kony.error.StandardErrorMessage");
    }
    
     kony.print("checkServiceResponseForErrorCode  retObj"+ JSON.stringify(retObj) )

    return retObj ;
  }


/*-----------------------------------------------------------------------------------

  Name: 	getOperativeAccountType
  Purpose: 	To get different type of operative account based on account type
  Author: 	Bipin
  Date: 	17/10/2018
  Input:	String - pAccountType 
  Return: 	 String - Operative AccountType

  ------------------------------------------------------------------------------------*/ 

  function getOperativeAccountType (pAccountType){
    var operativeAccountType = "-";
    if(pAccountType === "SA"){
      operativeAccountType = kony.i18n.getLocalizedString("kony.mb.addBen.savingAcc");
    } else if(pAccountType === "CA"){
      operativeAccountType = kony.i18n.getLocalizedString("kony.mb.accounts.currentAcc");
    }else if(pAccountType === "CCD"){
      operativeAccountType = kony.i18n.getLocalizedString("kony.ahb.creditCardDetails.CreditCardNo");
    }else if(pAccountType === "DCD"){
      operativeAccountType = kony.i18n.getLocalizedString("kony.ahb.transfers.DebitCard");
    }

    return operativeAccountType ;
  }


/*-----------------------------------------------------------------------------------

  Name: 	checkForNull
  Purpose: 	checks data  for null or undefined
  Author: 	Bipin
  Date: 	17/10/2018
  Input:	pdata 
  Return: 	retData

------------------------------------------------------------------------------------*/ 

  function checkForNull (pdata){
    var retData ="-";
    if(pdata){
      retData = pdata;
    }
    return retData ;
  }

/*-----------------------------------------------------------------------------------

  Name: 	formattedCardNumber
  Purpose: 	this function return card numbe after formatting it in blocks of 4
  Author: 	Bipin
  Date: 	17/10/2018
  Input:	pCardNumber 
  Return: 	formattedCardNumber

------------------------------------------------------------------------------------*/ 
function formattedCardNumber (pCardNumber) { 

    //kony.print(eventObj);
    var cardNumber = pCardNumber;

  // Do not allow users to write invalid characters
  var formattedCardNumber = cardNumber.replace(/[^\d]/g, "");
  //formattedCardNumber = formattedCardNumber.substring(0, 16);

    // Split the card number is groups of 4
    var cardNumberSections = formattedCardNumber.match(/\d{1,4}/g);
    if (cardNumberSections !== null) {
      formattedCardNumber = cardNumberSections.join(' '); 
    }

    kony.print("'"+ cardNumber + "' to '" + formattedCardNumber + "'");

    // If the formmattedCardNumber is different to what is shown, change the value
   return formattedCardNumber;
    

  }
/*-----------------------------------------------------------------------------------
  Name: 	isEmpty
  Purpose: 	this function true if the value is Empty, null or zero
  Input:	Value to be evaluated 
  Return: 	true/false
------------------------------------------------------------------------------------*/ 
function isEmpty(val){
    return (val === undefined || val === null || val.length <= 0) ? true : false;
}
    
/**
     * This function returns the given date object in given outputFormat.
     * @param {String} dateString - Date to outputFormat.
     * @param {String} outputFormat - string outputFormat of Date.
     * @returns {String} newDate - string outputFormat of formatted date.
     */
function getDateStringWithFormat(dateString, outputFormat) {
  var year = dateString.substring(0, 4);
  var month = dateString.substring(4, 6);
  var day = dateString.substring(6, 8);
  var newDate = "";
  if (month.toString().length == 1) {
    month = "0" + month;
  }
  if (day.toString().length == 1) {
    day = "0" + day;
  }
  var months = {
    '01': 'Jan',
    '02': 'Feb',
    '03': 'Mar',
    '04': 'Apr',
    '05': 'May',
    '06': 'Jun',
    '07': 'Jul',
    '08': 'Aug',
    '09': 'Sep',
    '10': 'Oct',
    '11': 'Nov',
    '12': 'Dec'
  };
  switch (outputFormat.toUpperCase()) {
    case "DD/MM/YYYY":
      newDate = day + "/" + month + "/" + year;
      break;
    case "YYYY-MM-DD":
      newDate = year + "-" + month + "-" + day;
      break;
    case "MMM DD,YYYY":
      if (months[month] !== undefined) {
        month = months[month];
      }
      newDate = month + " " + day + "," + year;
      break;
    default:
      newDate = year + "-" + month + "-" + day;
  }
  return newDate;
}

/*-----------------------------------------------------------------------------------

  Name: 	appendCurrency
  Purpose: 	This function return amount appended with currency passed 
  Author: 	Bipin
  Date: 	20/10/2018
  Input:	String - pAmount , pCurrency 
  Return: 	String - formaattedAmonut

------------------------------------------------------------------------------------*/ 

  function appendCurrency (pAmount, pCurrency){
    var formaattedAmonut = "-";
    if(pAmount){
      if(pCurrency){
        formaattedAmonut = pAmount+" "+pCurrency;
      }else{
        formaattedAmonut = pAmount;
      }      
    }
    return formaattedAmonut ;
  }
/*-----------------------------------------------------------------------------------
  Name: 	isSpecialCharCheck
  Purpose: 	this function true if the value is contains any special char
  Input:	Value to be evaluated 
  Return: 	true/false
------------------------------------------------------------------------------------*/ 
function isSpecialCharCheck(val){
    var pattern = /^[a-zA-Z\s]*$/;///^[a-zA-Z0-9 ]+$/;//"/^[a-zA-Z\s]*$/";
    kony.print("SPL::"+pattern.test(val));
    if(pattern.test(val)){
      return true;
    }else{
      return false;
    }
  }
/*-----------------------------------------------------------------------------------
  Name: 	getAmountWithoutCommas
  Purpose: 	this function removes comma and returns the number
  Input:	Amount to be formatted
  Return: 	Amount without comma
------------------------------------------------------------------------------------*/ 
 function getAmountWithoutCommas(input) {
    if( input === ""){
      input = 0.0;
    }
    var receivedValue = (input || "").trim();
    return receivedValue.replace(/,/g, "");
  }
  
  
  /*-----------------------------------------------------------------------------------

  Name: 	commaSeparatorUtil
  Purpose: 	This function return formatted amount with commas after every 3 digits
  Author: 	Fariha
  Date: 	22/10/2018
  Input:	pAmount 
  Return: 	String - formatedAmonut

------------------------------------------------------------------------------------*/ 

function commaSeparatorUtil(pAmount){
  var lAmountToFormat = pAmount;
  var lFormatedAmount="";
  if(lAmountToFormat){
    kony.print("lAmountToFormat*******"+lAmountToFormat);
    lFormatedAmount = lAmountToFormat;
    lAmountToFormat =  lAmountToFormat.toString().split(' ');
    lFormatedAmount = convertToFloat(lAmountToFormat[0]).toFixed(2).toString().split('.');
    lFormatedAmount[0] = lFormatedAmount[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');        
    lAmountToFormat[0] = lFormatedAmount.join('.');
    lAmountToFormat = lAmountToFormat.join(' ');
    kony.print("fomatted Amount*******"+lAmountToFormat);
  }
  return lAmountToFormat;

}

/*-----------------------------------------------------------------------------------

  Name: 	getMaskedString
  Purpose: 	This function returns masked string
  Author: 	Fariha
  Date: 	25/10/2018
  Input:	pStartIndex-index from where masking should start,
  			pEndIndex-index where masking should end,
            pMaskType-type of masking character,
            pCardNumber-the number to be masked 
  Return: 	String - lMaskedString

------------------------------------------------------------------------------------*/ 
function getMaskedString(pStartIndex,pEndIndex,pMaskType,pCardNumber){
  var lCardNumber = pCardNumber;

  var firstUnmaskedPart = lCardNumber.substring(0, pStartIndex);
  var lastUnmaskedPart = lCardNumber.substring(pEndIndex);

  var mask = lCardNumber.substring(pStartIndex, pEndIndex).replace(/\d/g, pMaskType);
  var lMaskedString=firstUnmaskedPart + mask + lastUnmaskedPart;
  kony.print("********lMaskedString*********" + lMaskedString);
  
  
  return lMaskedString;
}


/*-----------------------------------------------------------------------------------

  Name: 	formatAlphanumericString
  Purpose: 	this function return string after formatting it in blocks of 4
  Author: 	Fariha
  Date: 	25/10/2018
  Input:	pCardNumber (alphanumeric)
  Return: 	formattedCardNumber

------------------------------------------------------------------------------------*/ 

function formatAlphanumericString (pCardNumber) { 
  var cardNumber=pCardNumber;
  var formattedCardNumber;

  // Split the card number is groups of 4
  var cardNumberSections = cardNumber.match(/\w{1,4}/g);
  if (cardNumberSections !== null) {
    formattedCardNumber = cardNumberSections.join(' '); 
  }
  kony.print("'"+ cardNumber + "' to '" + formattedCardNumber + "'"+"formatAlphanumericString");

    // If the formmattedCardNumber is different to what is shown, change the value
   return formattedCardNumber;
    
  }
    
 /*-----------------------------------------------------------------------------------

  Name: 	convertToFloat
  Purpose: 	this function converts a string number to float number 
  Author: 	Bipin
  Date: 	01/11/2018
  Input:	string -  number
  Return: 	float number

------------------------------------------------------------------------------------*/    
function convertToFloat (pNumberString){
  
  var convertedNumber = 0;
  if(pNumberString){
    convertedNumber = parseFloat(pNumberString);
  }
  if( convertedNumber && !isNaN(convertedNumber)){
    return convertedNumber;
  }else{
    convertedNumber=0;
  }
  
  return convertedNumber;
  
}
///TODO temp last login changes need to move at proper palce

function setLastLoginDateAndTime(dateAndTime){
  lastLoginDateAndTime = dateAndTime;
} 
  
function getLastLoginDateAndTime(){
  return lastLoginDateAndTime ;
} 



/*-----------------------------------------------------------------------------------

  Name: 	handleEmailNativeCall
  Purpose: 	handle exception case in case of email call failure 	
    2100 - Unable to send the Message
    2101 - Insufficient Permissions
    2102 - Cannot open mail, mail not configured
    2103 - Cannot open media gallery
  Author: 	Bipin
  Date: 	07/12/2018
  Input:	pEmailObj :{errCode, frmId}
  Return: 	NA

------------------------------------------------------------------------------------*/ 
function handleEmailNativeCall (errCode, frmId){
  var errorMsg = "";
  
  if(errCode == "2100") {
    errorMsg = "Unable to send the Message";
  } else if(errCode =="2101" ){
    errorMsg = "Insufficient Permissions";
  }else if(errCode =="2102"){
    errorMsg = "Cannot open mail, mail not configured";	
  }else if(errCode =="2103"){
    errorMsg = "Cannot open media gallery";	
  }else{
    errorMsg = kony.i18n.getLocalizedString("kony.error.StandardErrorMessage");
  }
  if(errorMsg){
    var controller = applicationManager.getPresentationUtility().getController(frmId, true);
    controller.bindGenericError(errorMsg);
  }
}


/*-----------------------------------------------------------------------------------

  Name: 	openNativeEmailClient
  Purpose: 	this function checks for native email client and opens if available
  Author: 	Sumit Bhatia
  Date: 	07/12/2018
  Input:	pEmailObj :{Object}
  Return: 	NA

------------------------------------------------------------------------------------*/ 
function openNativeEmailClient(pEmailObj,frmId){

  var toRecipeint = pEmailObj.To;
  var ccrecipient = pEmailObj.cc;
  var bccrecipient = pEmailObj.bcc;
  var subject = pEmailObj.subject;
  var messagebody = pEmailObj.messagebody;
  var ismessagebodyhtml =  pEmailObj.ismessagebodyhtml;
  var attachments = pEmailObj.attachments;
  try {
    kony.phone.openEmail(toRecipeint, ccrecipient, bccrecipient, subject, messagebody, ismessagebodyhtml, attachments);
  }catch(e){
    kony.print("openNativeEmailClient errorCode "+JSON.stringify(e.errorCode));
    handleEmailNativeCall(e.errorCode , frmId);
  }

}

/*-----------------------------------------------------------------------------------

  Name: 	getMinutesBetweenDates
  Purpose: 	this function returns difference in minute between two dates 
  Author: 	Bipin 
  Date: 	11/12/2018
  Input:	startDate, endDate
  Return: 	diff in minute

------------------------------------------------------------------------------------*/ 
function getMinutesBetweenDates(startDate, endDate) {
    var diff = endDate.getTime() - startDate.getTime();
    return (diff / 60000);
}

