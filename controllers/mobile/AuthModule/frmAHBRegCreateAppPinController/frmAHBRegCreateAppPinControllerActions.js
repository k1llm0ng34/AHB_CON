define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBack **/
    AS_FlexContainer_g61ee5f3f05f4cc6b80fd22bb92f1487: function AS_FlexContainer_g61ee5f3f05f4cc6b80fd22bb92f1487(eventobject) {
        var self = this;
        this.onBackFrmAHBRegCreatePin();
    },
    /** onClick defined for flxResetPin **/
    AS_FlexContainer_da72424fd1a64b8b8dbf7f32d4a8e4ed: function AS_FlexContainer_da72424fd1a64b8b8dbf7f32d4a8e4ed(eventobject) {
        var self = this;
        this.initialSkins();
        this.setTextBoxPinFocus("flxPinReset");
    },
    /** onClick defined for flxTextPin **/
    AS_FlexContainer_jdf7670ea8994e0a8fcbbc1cef8a1e5f: function AS_FlexContainer_jdf7670ea8994e0a8fcbbc1cef8a1e5f(eventobject) {
        var self = this;
        this.initialSkins();
        this.setTextBoxPinFocus("flxCreatePin");
    },
    /** onClick defined for flxRePinText **/
    AS_FlexContainer_acd491bd8475434e8518c7eae2b663c4: function AS_FlexContainer_acd491bd8475434e8518c7eae2b663c4(eventobject) {
        var self = this;
        this.initialSkins();
        this.setTextBoxPinFocus("flxReEnterPin");
    },
    /** onClick defined for btnConfirm **/
    AS_Button_c0f36b85412241f692e7a1e34cefa062: function AS_Button_c0f36b85412241f692e7a1e34cefa062(eventobject) {
        var self = this;
        this.onConfirmClick();
        //this.authenticateResetPin();
    },
    /** onTextChange defined for tbxPin **/
    AS_TextField_f834739a54c7483388bbdd1c4429bef9: function AS_TextField_f834739a54c7483388bbdd1c4429bef9(eventobject, changedtext) {
        var self = this;
        this.populatePin("flxTextPin", "flxPin", "flxCreatePin");
    },
    /** onTextChange defined for tbxPinX **/
    AS_TextField_b0e2c423bfd547c08bdc08160b14c182: function AS_TextField_b0e2c423bfd547c08bdc08160b14c182(eventobject, changedtext) {
        var self = this;
        this.populatePin("flxRePinText", "flxRePinIndecator", "flxReEnterPin");
    },
    /** onTextChange defined for tbxResetPin **/
    AS_TextField_b11cdf5b51994a02a847c8d6a3554d0f: function AS_TextField_b11cdf5b51994a02a847c8d6a3554d0f(eventobject, changedtext) {
        var self = this;
        this.populatePin("flxResetPin", "flxPinResetSeparator", "flxPinReset");
    },
    /** init defined for frmAHBRegCreateAppPin **/
    AS_Form_e12595109129402fba68d5bbc73a1167: function AS_Form_e12595109129402fba68d5bbc73a1167(eventobject) {
        var self = this;
        return self.init.call(this);
    },
    /** preShow defined for frmAHBRegCreateAppPin **/
    AS_Form_df854d6db24c431cbff909e243c800e1: function AS_Form_df854d6db24c431cbff909e243c800e1(eventobject) {
        var self = this;
        this.landingPreshow();
    }
});