define({
    newPin: '',
    ShiftToNextTextBox: function(eventObj) {
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
        nextIndecatorId = "lblOTP" + (currentPosition + 1);
        indecatorId = "lblOTP" + currentPosition;
        nextTextBoxId = "tbxOTP" + (currentPosition + 1);
        previousIndecatorId = "lblOTP" + (currentPosition - 1);
        previousTextBoxId = "tbxOTP" + (currentPosition - 1);
        if (enteredText !== "") {
            this.newPin = this.newPin + enteredText;
            if (this.newPin.length === 6) {
                this.newPin = this.newPin.slice(0, 6);
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
                alert("the length is " + this.view[textBoxId].text.length);
                if (this.view[textBoxId].text.length === 0) {
                    this.view[previousTextBoxId].setEnabled(true);
                    this.view[textBoxId].setEnabled(false);
                    this.view[previousTextBoxId].setFocus(true);
                }
                this.view[indecatorId].skin = "sknAHBLined3d3d3";
                this.view[previousIndecatorId].skin = "sknAHBBff6d00";
            }
        }
        if (this.newPin.length === 6) {
            alert(this.newPin);
        }
    },
    initializeTextBox: function() {
        this.view.tbxOTP1.text = '';
        this.view.tbxOTP2.text = '';
        this.view.tbxOTP3.text = '';
        this.view.tbxOTP4.text = '';
        this.view.tbxOTP5.text = '';
        this.view.tbxOTP6.text = '';
    },
    setTextBoxPinFocus: function(eventObj) {
        var textBoxId = eventObj.id;
        var currentPosition = textBoxId.slice(6, textBoxId.length);
        var labelId = "lblOTP" + currentPosition;
        this.view[labelId].skin = "sknAHBBff6d00";
        this.view.tbxOTP2.setEnabled(false);
        this.view.tbxOTP3.setEnabled(false);
        this.view.tbxOTP4.setEnabled(false);
        this.view.tbxOTP5.setEnabled(false);
        this.view.tbxOTP6.setEnabled(false);
    }
});