/**
*@module NavigationManager
 */
define([], function() {

  /**
   * Navigation Manager consists of all possible methods of forward and backward flow of navigations
   *@alias module:NavigationManager
   *@class
   */
  function NavigationManager() {

    /**@member {Array} stack Contains list of forms*/
    this.stack = [];
    var HashTable = require("HashTable");
 
    /**@member {object} hashTable it contains all the methods and properties of HashTable class*/
    this.hashTable = new HashTable();
  
    /**@member {object} entryPointTable it contains all the methods and properties of HashTable class*/
    this.entryPointTable = new HashTable();
  
    /**@member {object} stackTable it contains all the methods and properties of HashTable class*/
    this.stackTable = new HashTable();
  
    /**@member {Array} formStack Contains list of forms*/
    this.formStack = [];
  }

  inheritsFrom(NavigationManager, kony.mvc.Business.Delegator);

  NavigationManager.prototype.initializeBusinessController = function(){};

  /**
   * Pushes the form in formStack array which contains the Formid
   * @param {string} formName , nothing but FormId
   */

  NavigationManager.prototype.pushForm = function(formName){
    this.formStack.push(formName);
  };
  
  /**
   * Sets the Entry points with Key and FormId
   * @param {string} flowName , which is key 
   * @param {string} formName , which is value
   */

  NavigationManager.prototype.setEntryPoint = function(flowName,formName){
    this.entryPointTable.setItem(flowName,formName);
  };
  
  /**
   * Get the Entry point based on the Key
   * @param {string} flowName , which is key 
   * @return {string} formname
   */
  NavigationManager.prototype.getEntryPoint = function(flowName) {
    return this.entryPointTable.getItem(flowName);
  };
  
  /**
   * Removes the Entry point based on the Key
   * @param {string} flowName , which is key 
   * @return {string} removed formname
   */
  NavigationManager.prototype.removeFlowEntry = function(flowName){
    return this.entryPointTable.removeItem(flowName);
  };
  
  /**
   * Resets the Entire Entry point Table
   */
  NavigationManager.prototype.clearEntryPointTable = function(){
    this.entryPointTable.items = {};
  };
  
  /**
   * Sets the Form index in a stack Table with the formId
   * @param {string} formName , which is key 
   * @param {string} index , which is value nothing but formIndex 
   */
  NavigationManager.prototype.setFormIndex = function(formName,index){
    this.stackTable.setItem(formName,index);
  };
  
  /**
   * Get the Form index using the key formName
   * @param {string} formName , which is key 
   * @return {string} formIndex
   */
  NavigationManager.prototype.getFormIndex = function(formName) {
    return this.stackTable.getItem(formName);
  };
  
  /**
   * Remove the Form index using the key formName
   * @param {string} formName , which is key 
   * @return {string} removed formname
   */
  NavigationManager.prototype.removeFormIndex = function(formName){
    return this.stackTable.removeItem(formName);
  };
  
  /**
   * Using navigateTo we navigate one form to another form in that we store formName in a stack
   * @param {string} formName , navigates to that form
   */
  NavigationManager.prototype.navigateTo = function(formname) {
    if(this.stack.indexOf(formname)<0){
      this.stack.push(formname);
    }
    var stackLength = this.stack.length;
    var index = this.getFormIndex(formname);
    if(index == null)
      this.setFormIndex(formname,stackLength-1);
    else{
      for(var i=stackLength-1; i>index; i--){
        this.removeFormIndex(this.stack[i]);
        this.stack.pop();
      }
    }
    var ntf = new kony.mvc.Navigation(formname);
    ntf.navigate();
  };
  
  /**
   * Using goBack we navigates to previous form from the current form
   * @param {string} navDetails , which contains all the details about current form
   */

  NavigationManager.prototype.goBack = function(navDetails) {
    var existingNavDetails, presentNavDetails;
    var stackLength = this.stack.length;
    var currentform = this.stack[stackLength - 1];
    this.removeFormIndex(currentform);
    this.stack.pop();
    stackLength = this.stack.length;
    if (stackLength !== 0) {
      var formId = this.stack[stackLength - 1];


      if (navDetails)
        existingNavDetails = this.getCustomInfo(formId);
      if (existingNavDetails !== undefined) {
        existingNavDetails.backNavDetails = navDetails;
        this.setCustomInfo(formId, existingNavDetails);
      }
      var ntf = new kony.mvc.Navigation(formId);
      ntf.navigate();
    }
  };
  
  /**
   * Using getCurrentForm get the current existing form
   * @return {string} current formname
   */
  NavigationManager.prototype.getCurrentForm = function(){
    var stackLength = this.stack.length;
    var currentform = this.stack[stackLength - 1];
    return currentform;
  };
  
  /**
   * Using getPreviousForm we get the previous form
   * @return {string} previous formname
   */ 
  NavigationManager.prototype.getPreviousForm = function(){
    var stackLength = this.stack.length;
    var previousForm = this.stack[stackLength - 2];
    return previousForm;
  };
  
  /**
   * Sets data of that form
   * @param {string} key , name of the form
   * @param {string} value , content of the form
   */
  NavigationManager.prototype.setCustomInfo = function(key, value) {
    kony.print("context:"+JSON.stringify(value));
    this.hashTable.setItem(key, value);
  };
  
  /**
   * Get the data of that form
   * @param {string} key , name of the form
   * @return {string} custom info of form
   */
  NavigationManager.prototype.getCustomInfo = function(key) {
    return this.hashTable.getItem(key);
  };
  
  /**
   * Resets the entire stack
   */
  NavigationManager.prototype.clearStack = function() {
    this.stack = [];
  };
  
  /**
   * destroyForms is used to destroy all the existing form in that current application
   */
  NavigationManager.prototype.destroyForms = function() {
    for(var i=0;i<this.formStack.length;i++)
    {
      if(this.formStack[i] !== "frmLogin")
        kony.application.destroyForm(this.formStack[i]);
    }
    this.formStack = [];
    this.formStack.push("frmLogin");
  };
  
   /**
   * customDestroyForms is used to destroy all the existing form in that current application except the current form
   */
  NavigationManager.prototype.customDestroyForms = function(pForm) {
    for(var i=0;i<this.formStack.length;i++)
    {
      if(this.formStack[i] !== pForm)
        kony.application.destroyForm(this.formStack[i]);
    }
    kony.application.destroyForm("frmAHBRegCardNumber");
    kony.application.destroyForm("frmAHBRegConfirmOTP");
    kony.application.destroyForm("frmAHBRegCreateAppPin");
    kony.application.destroyForm("frmAHBRegFaceId");
    kony.application.destroyForm("frmAHBRegAccountNumber");
    kony.application.destroyForm("frmDashboard");
    kony.application.destroyForm("frmBenVerifyDetails");
    kony.application.destroyForm("frmLocationMap");
    kony.application.destroyForm("frmTransfers");
    kony.application.destroyForm("frmBillPay");
    kony.application.destroyForm("frmTransferDetails");
    kony.application.destroyForm("frmManageRecipientList");
    kony.application.destroyForm("frmManageP2pRecipient");
    kony.application.destroyForm("frmTransfersStartDate");
    kony.application.destroyForm("frmTransferConfirmation");
    kony.application.destroyForm("frmAccountDetails");
    kony.application.destroyForm("frmBillPayAllPayees");
    kony.application.destroyForm("frmAccountInfo");
    kony.application.destroyForm("frmTransferAmount");
    kony.application.destroyForm("frmBillPayAmount");
    kony.application.destroyForm("frmBillPayConfirmation");
    kony.application.destroyForm("frmBillPayEnterAccNo");
    kony.application.destroyForm("frmAHBCharityPayments");
    kony.application.destroyForm("frmBillPayDetails");
    kony.application.destroyForm("frmBillPayPayeeDetails");
    kony.application.destroyForm("frmBillPayVerifyDetails");
    kony.application.destroyForm("frmSupport");
    this.formStack = [];
    this.formStack.push(pForm);
  };

   /**
   * OLB Specific Method to call updateFormUI in given form -  used to pass data to view controller.
   * @param {object} uiDataMap  key data pair to route binding logic.
   * @param {string} [formName]  form name to navigate - by default it will take current form id.
   */
    NavigationManager.prototype.updateForm = function (uiDataMap, formName) {
        var currentFormController = _kony.mvc.GetController(formName || kony.application.getCurrentForm().id, true);
        if (currentFormController && uiDataMap !== undefined && uiDataMap !== null) {
            currentFormController.updateFormUI(uiDataMap);
        } else {
            applicationManager.getLoggerManager().log("Error while updating form " + (formName || kony.application.getCurrentForm().id + " with data " + uiDataMap));
        }
    };

  return NavigationManager;
});