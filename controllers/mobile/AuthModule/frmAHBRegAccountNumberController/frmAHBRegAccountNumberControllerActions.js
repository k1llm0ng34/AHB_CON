define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onTextChange defined for tbxTpinNo **/
    AS_TextField_a38c028534be48e2af65fddf0486cb88: function AS_TextField_a38c028534be48e2af65fddf0486cb88(eventobject, changedtext) {
        var self = this;
        return self.onChangeTextTpinNumber.call(this, eventobject);
    },
    /** init defined for frmAHBRegAccountNumber **/
    AS_Form_f30b72d5452d40e392f4291ce7edfe20: function AS_Form_f30b72d5452d40e392f4291ce7edfe20(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmAHBRegAccountNumber **/
    AS_Form_h7a9e559df1a4043905344f5c7d9cfbd: function AS_Form_h7a9e559df1a4043905344f5c7d9cfbd(eventobject) {
        var self = this;
        this.preshow();
    },
    /** postShow defined for frmAHBRegAccountNumber **/
    AS_Form_h49d42bd617145f2b3d677ba8c1b4aea: function AS_Form_h49d42bd617145f2b3d677ba8c1b4aea(eventobject) {
        var self = this;
        this.view.tbxAccountNo.setFocus(true);
    }
});