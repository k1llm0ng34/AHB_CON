define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onTextChange defined for tbxOTP1 **/
    AS_TextField_h0516a2b786040ed895610b8d74835ab: function AS_TextField_h0516a2b786040ed895610b8d74835ab(eventobject, changedtext) {
        var self = this;
        return self.ShiftToNextTextBox.call(this, eventobject);
    },
    /** onTouchStart defined for tbxOTP1 **/
    AS_TextField_f26fd4def29f4982839d3993ba02e65e: function AS_TextField_f26fd4def29f4982839d3993ba02e65e(eventobject, x, y) {
        var self = this;
        return self.setTextBoxPinFocus.call(this, eventobject);
    },
    /** onTextChange defined for tbxOTP2 **/
    AS_TextField_d0825e0a1db14600b1586e1f535dbe6f: function AS_TextField_d0825e0a1db14600b1586e1f535dbe6f(eventobject, changedtext) {
        var self = this;
        return self.ShiftToNextTextBox.call(this, eventobject);
    },
    /** onTextChange defined for tbxOTP3 **/
    AS_TextField_f548e600f66b402db6665ed6a27957e5: function AS_TextField_f548e600f66b402db6665ed6a27957e5(eventobject, changedtext) {
        var self = this;
        return self.ShiftToNextTextBox.call(this, eventobject);
    },
    /** onTextChange defined for tbxOTP4 **/
    AS_TextField_af4f59fc8b85420fa378d918c8873f7f: function AS_TextField_af4f59fc8b85420fa378d918c8873f7f(eventobject, changedtext) {
        var self = this;
        return self.ShiftToNextTextBox.call(this, eventobject);
    },
    /** onTextChange defined for tbxOTP5 **/
    AS_TextField_de09c317e6b1467782988cba861576ac: function AS_TextField_de09c317e6b1467782988cba861576ac(eventobject, changedtext) {
        var self = this;
        return self.ShiftToNextTextBox.call(this, eventobject);
    },
    /** onTextChange defined for tbxOTP6 **/
    AS_TextField_bccd7bd0b3ac4b389c565e3479b512ca: function AS_TextField_bccd7bd0b3ac4b389c565e3479b512ca(eventobject, changedtext) {
        var self = this;
        return self.ShiftToNextTextBox.call(this, eventobject);
    },
    /** preShow defined for frmAHBRegConfirmOTP **/
    AS_Form_gf75f11b3cc84abda7b211986c2a8c21: function AS_Form_gf75f11b3cc84abda7b211986c2a8c21(eventobject) {
        var self = this;
        return self.initializeTextBox.call(this);
    }
});