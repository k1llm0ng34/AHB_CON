define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onTextChange defined for tbxCardNo1 **/
    AS_TextField_a1bc115cf079437892fc4f374b6d708d: function AS_TextField_a1bc115cf079437892fc4f374b6d708d(eventobject, changedtext) {
        var self = this;
        return self.onChangeTxtCardNumber.call(this, eventobject);
    },
    /** onTouchStart defined for tbxCardNo1 **/
    AS_TextField_f5a430e5c0d74a57bcc1c5ac0359d9c4: function AS_TextField_f5a430e5c0d74a57bcc1c5ac0359d9c4(eventobject, x, y) {
        var self = this;
        this.view.lblCardNoHolder.skin = "sknLblAHBBGff6d00";
    },
    /** onClick defined for flxEnterCardNo **/
    AS_FlexContainer_f380b4075aee46fda4822ea69030950a: function AS_FlexContainer_f380b4075aee46fda4822ea69030950a(eventobject) {
        var self = this;
        this.captureTbxInput();
    },
    /** onTextChange defined for tbxPin1 **/
    AS_TextField_ea496d53dcbe4dcdb1b479f674763bde: function AS_TextField_ea496d53dcbe4dcdb1b479f674763bde(eventobject, changedtext) {
        var self = this;
        return self.ShiftToNextTextBox.call(this, eventobject);
    },
    /** onTouchStart defined for tbxPin1 **/
    AS_TextField_f606913a8d6a44e385bb6d78d312de8a: function AS_TextField_f606913a8d6a44e385bb6d78d312de8a(eventobject, x, y) {
        var self = this;
        return self.setTextBoxPinFocus.call(this, eventobject);
    },
    /** onTextChange defined for tbxPin2 **/
    AS_TextField_a079c11821e64665b87b92e14366fe99: function AS_TextField_a079c11821e64665b87b92e14366fe99(eventobject, changedtext) {
        var self = this;
        return self.ShiftToNextTextBox.call(this, eventobject);
    },
    /** onTouchStart defined for tbxPin2 **/
    AS_TextField_f9b1dde225824b5b9e99705853e55feb: function AS_TextField_f9b1dde225824b5b9e99705853e55feb(eventobject, x, y) {
        var self = this;
        return self.setTextBoxPinFocus.call(this, eventobject);
    },
    /** onTextChange defined for tbxPin3 **/
    AS_TextField_g7a113d09c47496da8e4214982a2ab0d: function AS_TextField_g7a113d09c47496da8e4214982a2ab0d(eventobject, changedtext) {
        var self = this;
        return self.ShiftToNextTextBox.call(this, eventobject);
    },
    /** onTouchStart defined for tbxPin3 **/
    AS_TextField_c65f5a3c15904236b68a7a24fe3ba588: function AS_TextField_c65f5a3c15904236b68a7a24fe3ba588(eventobject, x, y) {
        var self = this;
        return self.setTextBoxPinFocus.call(this, eventobject);
    },
    /** onTextChange defined for tbxPin4 **/
    AS_TextField_g9af031cdbcd4c6a88a2a45c0521f733: function AS_TextField_g9af031cdbcd4c6a88a2a45c0521f733(eventobject, changedtext) {
        var self = this;
        return self.ShiftToNextTextBox.call(this, eventobject);
    },
    /** onTouchStart defined for tbxPin4 **/
    AS_TextField_e8c2576bbefc41de8b97060e894e41f3: function AS_TextField_e8c2576bbefc41de8b97060e894e41f3(eventobject, x, y) {
        var self = this;
        return self.setTextBoxPinFocus.call(this, eventobject);
    },
    /** preShow defined for frmAHBRegCardNumber **/
    AS_Form_a95d031d4eb347bfb108b6e7dd20804b: function AS_Form_a95d031d4eb347bfb108b6e7dd20804b(eventobject) {
        var self = this;
        return self.initializeTextBox.call(this);
    }
});