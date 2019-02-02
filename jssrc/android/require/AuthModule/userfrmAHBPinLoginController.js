define({
    newPin: '',
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
        //console.log(eventObj);
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
                this.view[nextTextBoxId].text = '';
                kony.print("nextText " + nextTextBoxId);
                this.view[nextIndecatorId].skin = "sknAHBBff6d00";
                this.view[indecatorId].skin = "sknAHBLined3d3d3";
            }
        } else if (enteredText === "") {
            this.newPin = this.newPin.slice(0, currentPosition - 1);
            if (this.view[previousTextBoxId]) {
                // alert("the length is " +this.view[textBoxId].text.length);
                if (this.view[textBoxId].text.length === 0) {
                    this.view[previousTextBoxId].setEnabled(true);
                    this.view[textBoxId].setEnabled(false);
                    this.view[previousTextBoxId].setFocus(true);
                }
                this.view[indecatorId].skin = "sknAHBLined3d3d3";
                this.view[previousIndecatorId].skin = "sknAHBBff6d00";
            }
        }
        if (this.newPin.length === 4) {
            // alert(this.newPin);
            var accountModule = applicationManager.getModule("HomeManager");
            accountModule.presentationController.getAccountsandShowHome();
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
    }
});