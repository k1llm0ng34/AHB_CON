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
        this.view.lblCardNoHolder.skin = "sknAHBBff6d00";
    },
    /** init defined for frmAHBRegCardNumber **/
    AS_Form_de44a7358f3c4e56852f6d9591a4ef0f: function AS_Form_de44a7358f3c4e56852f6d9591a4ef0f(eventobject) {
        var self = this;
        return self.init.call(this);
    },
    /** preShow defined for frmAHBRegCardNumber **/
    AS_Form_eedc78da696443d5a2445781c8b479ee: function AS_Form_eedc78da696443d5a2445781c8b479ee(eventobject) {
        var self = this;
        this.landingPreshow();
    },
    /** postShow defined for frmAHBRegCardNumber **/
    AS_Form_c02235b7a73f451bbc0eb694a8920bcf: function AS_Form_c02235b7a73f451bbc0eb694a8920bcf(eventobject) {
        var self = this;
        this.view.tbxCardNo1.setFocus(true);
    }
});