define({
    newPin: '',
    rePin: '',
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
        kony.print("Entered Text is " + eventObj);
        // console.log(eventObj);
        currentPosition = textBoxId.slice(6, textBoxId.length);
        currentPosition = parseInt(currentPosition, 10);
        nextIndecatorId = "lblPin" + (currentPosition + 1);
        indecatorId = "lblPin" + currentPosition;
        nextTextBoxId = "tbxPin" + (currentPosition + 1);
        previousIndecatorId = "lblPin" + (currentPosition - 1);
        previousTextBoxId = "tbxPin" + (currentPosition - 1);
        if (enteredText !== "") {
            this.setPin(currentPosition, enteredText);
            if (currentPosition > 4) {
                this.view.tbxPin4.setEnabled(true);
                this.view.flxCreatePin.forceLayout();
                //  this.view.flxReEnterPin.setEnabled(true);
                // this.view.flxReEnterPin.forceLayout();
                // this.view.tbxPin5.setfocus(true);
            }
            if (this.view[nextTextBoxId]) {
                this.view[textBoxId].setEnabled(false);
                this.view[nextTextBoxId].setEnabled(true);
                this.view[nextTextBoxId].setFocus(true);
                this.view[nextTextBoxId].text = '';
                kony.print("nextText " + nextTextBoxId);
                this.view[nextIndecatorId].skin = "sknAHBBff6d00";
                this.view[indecatorId].skin = "sknAHBLined3d3d3";
            }
        } else if (enteredText === "") {
            this.setPin(currentPosition, enteredText);
            if (currentPosition < 5) {
                this.view.tbxPin4.setEnabled(true);
            }
            if (this.view[previousTextBoxId]) {
                this.view[previousTextBoxId].setEnabled(true);
                this.view[textBoxId].setEnabled(false);
                this.view[previousTextBoxId].setFocus(true);
                this.view[indecatorId].skin = "sknAHBLined3d3d3";
                this.view[previousIndecatorId].skin = "sknAHBBff6d00";
            }
        }
        if (this.newPin.length === 4 && this.rePin.length === 4 && this.newPin === this.rePin) {
            this.view.btnConfirm.skin = "sknAHBGsc16ptBff6d00TffffffBr21pt";
            this.view.btnConfirm.focusSkin = "sknAHBGsc16ptBff6d00TffffffBr21pt";
            alert("button skin applied");
        }
    },
    setPin: function(currentPosition, enteredText) {
        if (currentPosition < 5 && enteredText !== "") {
            this.newPin = this.newPin + enteredText;
            // console.log("new pin value is "+this.newPin);
        } else if (currentPosition > 4 && enteredText !== "") {
            this.rePin = this.rePin + enteredText;
            // console.log("Re pin value is "+this.rePin);
        } else if (currentPosition < 5 && enteredText === "") {
            this.newPin = this.newPin.slice(0, currentPosition - 1);
            //console.log("new pin value is " + this.newPin);
        } else if (currentPosition > 4 && enteredText === "") {
            this.rePin = this.rePin.slice(0, currentPosition - 5);
            //	console.log("new pin value is " + this.newPin);
        }
        if (this.newPin.length === 4) {
            this.newPin = this.newPin.slice(0, 4);
            // console.log("new pin value is "+this.newPin);
        }
        if (this.rePin.length === 4) {
            this.rePin = this.rePin.slice(0, 4);
            //console.log("re pin value is "+this.rePin);
        }
    },
    clearTextBox: function() {
        this.view.tbxPin4.setEnabled(true);
        this.view.tbxPin4.setFocus(true);
        this.view.tbxPin5.text = '';
        this.view.tbxPin6.text = '';
        this.view.tbxPin7.text = '';
        this.view.tbxPin8.text = '';
        this.view.lblPin5.skin = 'sknAHBLined3d3d3';
        this.view.lblPin6.skin = 'sknAHBLined3d3d3';
        this.view.lblPin6.skin = 'sknAHBLined3d3d3';
        this.view.lblPin8.skin = 'sknAHBLined3d3d3';
        //      this.view.flxReEnterPin.setEnabled(false);
        //      this.view.flxReEnterPin.forceLayout();
    },
    initializeTextBox: function() {
        this.view.tbxPin1.text = '';
        this.view.tbxPin2.text = '';
        this.view.tbxPin3.text = '';
        this.view.tbxPin4.text = '';
        this.view.tbxPin5.text = '';
        this.view.tbxPin6.text = '';
        this.view.tbxPin7.text = '';
        this.view.tbxPin8.text = '';
    },
    setTextBoxPinFocus: function(eventObj) {
        var textBoxId = eventObj.id;
        var currentPosition = textBoxId.slice(6, textBoxId.length);
        var labelId = "lblPin" + currentPosition;
        this.view[labelId].skin = "sknAHBBff6d00";
        this.view.tbxPin2.setEnabled(false);
        this.view.tbxPin3.setEnabled(false);
        this.view.tbxPin4.setEnabled(false);
        this.view.tbxPin5.setEnabled(false);
        this.view.tbxPin6.setEnabled(false);
        this.view.tbxPin7.setEnabled(false);
        this.view.tbxPin8.setEnabled(false);
    }
});