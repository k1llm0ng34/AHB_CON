define({
    selectedSection: "",
    cardNumber: 0,
    cardPin: '',
    newPin: '',
    //TprogressToNextTextype your controller code here 
    /*progressToNextTbx:function(){
    for(var i=1;i<4;i++){
      if(this.view.tbxCardNo[i].text.length==3){
        this.pinPostMaxAction();
      }
    }
  },
*/
    numberPostMaxEntryAction: function() {
        if (this.cardNumber.length === 19) {
            this.view.lblPinVal1.setFocus(true);
            this.view.lblPin1.skin = "sknLblAHBBGff6d00";
            this.view.lblCardNoHolder.skin = "sknLblAHBBGptd3d3d3";
            //this.view.lblCardNoHolder.skin= '';
            //this.enableDisableKeyPad(true, "Pin");
        }
    },
    captureTbxInput: function() {
        this.cardNumber = this.view.tbxCardNo1.text;
        if (this.cardNumber.length < 19) {}
        this.integrateSpacingInTbx();
    },
    integrateSpacingInTbx: function() {
        //var lTempCardNumberLength=this.cardNumber.length;
        var lTempCardNumber = '';
        for (var indx = 0; indx < this.cardNumber.length; indx++) {
            //widgets[i].skin = "sknLbl979797SSP55px";
            lTempCardNumber = lTempCardNumber + this.cardNumber[indx];
            var lTempCardNumberLength = lTempCardNumber.length;
            if (lTempCardNumberLength === 4 || lTempCardNumberLength === 9 || lTempCardNumberLength === 14) {
                lTempCardNumber = lTempCardNumber + " ";
                alert("5th character");
            }
        }
        this.view.tbxCardNo1.text = lTempCardNumber;
        this.numberPostMaxEntryAction();
        this.view.forceLayout();
    },
    progressToNextTbx: function() {
        for (var i = 1; i < 4; i++) {
            if (this.view.tbxCardNo[i].text.length === 4) {
                this.view.tbxCardNo[i + 1].setFocus(true);
                this.view.flxEnterCardNo.forceLayout();
            }
        }
    },
    ShiftToNextTextBox: function(eventObj) {
        var widgets = [];
        var widgetsLabel = [];
        var textBoxId;
        var enteredText;
        var currentPosition;
        var currentIndex;
        var nextTextBoxId;
        var previousTextBoxId;
        var nextIndecatorId;
        var previousIndecatorId;
        var indecatorId;
        textBoxId = eventObj.id;
        enteredText = eventObj.text;
        //alert("Entered Text is "+eventObj.text);
        // this.newPin= this.newPin + enteredText;
        currentPosition = textBoxId.slice(6, textBoxId.length);
        currentPosition = parseInt(currentPosition, 10);
        nextIndecatorId = "lblPin" + (currentPosition + 1);
        indecatorId = "lblPin" + currentPosition;
        nextTextBoxId = "tbxPin" + (currentPosition + 1);
        previousIndecatorId = "lblPin" + (currentPosition - 1);
        previousTextBoxId = "tbxPin" + (currentPosition - 1);
        if (enteredText !== "") {
            this.newPin = this.newPin + enteredText;
            if (this.newPin.length === 4) {
                this.newPin = this.newPin.slice(0, 4);
                kony.print("new pin value is " + this.newPin);
            }
            if (this.view[nextTextBoxId]) {
                this.view[textBoxId].setEnabled(false);
                this.view[nextTextBoxId].setEnabled(true);
                this.view[nextTextBoxId].setFocus(true);
                kony.print("nextText " + nextTextBoxId);
                this.view[nextIndecatorId].skin = "sknLblAHBBGff6d00";
                this.view[indecatorId].skin = "sknAHBLined3d3d3";
            }
        } else {
            this.newPin = this.newPin.slice(0, currentPosition - 1);
            if (this.view[previousTextBoxId]) {
                this.view[previousTextBoxId].setEnabled(true);
                this.view[textBoxId].setEnabled(false);
                this.view[previousTextBoxId].setFocus(true);
                this.view[indecatorId].skin = "sknAHBLined3d3d3";
                this.view[previousIndecatorId].skin = "sknAHBBff6d00";
            }
        }
        if (this.newPin.length === 4) {
            alert(this.newPin);
        }
    },
    initializeTextBox: function() {
        this.view.tbxPin1.text = '';
        this.view.tbxPin2.text = '';
        this.view.tbxPin3.text = '';
        this.view.tbxPin4.text = '';
    },
    setTextBoxPinFocus: function(eventObj) {
        var textBoxId = eventObj.id;
        var currentPosition = textBoxId.slice(6, textBoxId.length);
        var labelId = "lblPin" + currentPosition;
        this.view[labelId].skin = "sknAHBBff6d00";
        this.view.tbxPin2.setEnabled(false);
        this.view.tbxPin3.setEnabled(false);
        this.view.tbxPin4.setEnabled(false);
    },
    /*
      captureTbxInput: function() {
        //alert(char);
        
        
        
          //alert("inside if");
          //this.view.lblCardNoHolder.skin="sknLblAHBBGff6d00";
        
          this.cardNumber = this.view.tbxCardNo1.text;
    		//alert("cardNumber" +this.cardNumber);
          if(this.cardNumber.length === 19){
            //this.enterNewPinPostAction();
            
            
          } else if (this.cardNumber.length < 19) {
            //this.incompletePinCodeView();
            //alert("less than 19");
          } else if (this.cardNumber.length > 19) {
            this.cardNumber= this.cardNumber.slice(0, 16);
            return;
          }
          //alert(this.cardNumber);
          this.updateUserInput('flxEnterCardNo');
      },
      
        
        pinfunc:function(){
        if(this.selectedSection==="Pin")
        {
          this.cardPin = this.cardPin + char;
          if (this.cardPin.length === 4) {
            //this.enterReneterNewPinPostAction();
          } else if (this.cardPin.length < 4) {
            //this.incompleteReEnterPinCodeView();
          } else if (this.cardPin.length > 4) {
            this.cardPin= this.cardPin.slice(0, 4);
            return;
          }
          this.updateUserInput('flxPinDetails');
        }

      },

      updateUserInput: function(inputFlx) {
         //alert("in user input");
          var tempCardNo="";
          for (var indx = 0; indx < this.cardNumber.length; indx++) {
            //widgets[i].skin = "sknLbl979797SSP55px";
            tempCardNo = tempCardNo+this.cardNumber[indx];
            var cardLength = tempCardNo.length;
            if (cardLength === 4||cardLength === 9|| cardLength === 14) {
              tempCardNo = tempCardNo + " ";  
              alert("5th character");
            } 
            this.view.tbxCardNo1.text = tempCardNo;
            this.numberPostMaxEntryAction();
            //alert(tempCardNo);
          
          //this.view.lblCardNoHolder.skin= '';
          //       for (var i = this.newPin.length; i < widgets.length; i++) {
          //         widgets[i].skin = "sknLble3e3e3SSP60px";
          //         widgets[i].text = '_';
          //       }
        }
        /*
        else
        {
          widgets = this.view[inputFlx].widgets();
             widgetsLabel = this.view["flxPinLbl"].widgets();
            for (var i = 0; i < this.cardPin.length; i++) {
              //  widgets[i].skin = "sknLbl979797SSP55px";
                widgets[i].text = "*";
              	widgetsLabel[i].skin = "sknLblAHBBGff6d00";
            }
            for (var i = this.cardPin.length; i < widgets.length; i++) {
             
                widgets[i].text = ' ';
              widgetsLabel[i].skin = "sknLblAHBBGptd3d3d3";
            }

          //for (var m = this.cardPin.length; m < widgets.length; m++) {
          //widgets[m].skin = "sknLble3e3e3SSP60px";
          //  widgets[m].text = '';
          //		}
        }
        
        this.view.forceLayout();


      },
      
     clearKeypadChar: function() {
           if(this.selectedSection=== "Card")
           { 
            if (this.cardNumber.length === 1) {
                this.cardNumber = '';
                this.updateUserInput('flxEnterCardNo');
            }
            if (this.cardNumber.length !== 0) {
                this.cardNumber = this.cardNumber.substr(0, this.cardNumber.length - 1);
                 // if (this.cardNumber.length <6) 
                    //{
                     // this.incompletePinCodeView();
                   // }
                this.updateUserInput('flxEnterCardNo');
            }
           }
         else{
           if (this.cardPin.length === 1) {
                this.cardPin = '';
                this.updateUserInput('flxPinDetails');
            }
            if (this.cardPin.length !== 0) {
                this.cardPin = this.cardPin.substr(0, this.cardPin.length - 1);
                  //if (this.cardPin.length <6) 
                   // {
                     // this.incompleteReEnterPinCodeView();
                    //}
               this.updateUserInput('flxPinDetails');
            }
         }
        },
      
     */
    onChangeTxtCardNumber: function(eventObj) {
        this.formattedCardNumber(eventObj.id);
        if (this.view[eventObj.id].text.length === 19) {
            this.view.lblCardNoHolder.skin = "sknAHBLined3d3d3";
            this.view.tbxPin1.setSelection(0, 0);
        }
    },
    formattedCardNumber: function(tbxId) {
        //kony.print(eventObj);
        var cardNumber = this.view[tbxId].text;
        // Do not allow users to write invalid characters
        var formattedCardNumber = cardNumber.replace(/[^\d]/g, "");
        formattedCardNumber = formattedCardNumber.substring(0, 16);
        // Split the card number is groups of 4
        var cardNumberSections = formattedCardNumber.match(/\d{1,4}/g);
        if (cardNumberSections !== null) {
            formattedCardNumber = cardNumberSections.join(' ');
        }
        kony.print("'" + cardNumber + "' to '" + formattedCardNumber + "'");
        // If the formmattedCardNumber is different to what is shown, change the value
        if (cardNumber !== formattedCardNumber) {
            this.view[tbxId].text = formattedCardNumber;
        }
    },
});