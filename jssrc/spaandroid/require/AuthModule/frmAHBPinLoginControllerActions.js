define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onTextChange defined for tbxPin1 **/
    AS_TextField_f8b2903a2b33485aa0527a3fa6209c8f: function AS_TextField_f8b2903a2b33485aa0527a3fa6209c8f(eventobject, changedtext) {
        var self = this;
        return self.ShiftToNextTextBox.call(this, eventobject);
    },
    /** onTouchStart defined for tbxPin1 **/
    AS_TextField_cc8147e232404109b2965abffcaa938f: function AS_TextField_cc8147e232404109b2965abffcaa938f(eventobject, x, y) {
        var self = this;
        return self.setTextBoxPinFocus.call(this, eventobject);
    },
    /** onTextChange defined for tbxPin2 **/
    AS_TextField_effa7890334b458199b1c8a28b6dc71f: function AS_TextField_effa7890334b458199b1c8a28b6dc71f(eventobject, changedtext) {
        var self = this;
        return self.ShiftToNextTextBox.call(this, eventobject);
    },
    /** onTextChange defined for tbxPin3 **/
    AS_TextField_aa1a84b434e74874afa097d6b97d73b3: function AS_TextField_aa1a84b434e74874afa097d6b97d73b3(eventobject, changedtext) {
        var self = this;
        return self.ShiftToNextTextBox.call(this, eventobject);
    },
    /** onTextChange defined for tbxPin4 **/
    AS_TextField_g8a2b78fa2d34034b3230a3ec588003c: function AS_TextField_g8a2b78fa2d34034b3230a3ec588003c(eventobject, changedtext) {
        var self = this;
        return self.ShiftToNextTextBox.call(this, eventobject);
    },
    /** preShow defined for frmAHBPinLogin **/
    AS_Form_g64011dbb4a44156af35b26ae3aea783: function AS_Form_g64011dbb4a44156af35b26ae3aea783(eventobject) {
        var self = this;
        this.initializeTextBox();
    }
});