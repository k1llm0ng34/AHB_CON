define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnChecksView **/
    AS_Button_ab1dd123f812432597b2474ecfb3125b: function AS_Button_ab1dd123f812432597b2474ecfb3125b(eventobject) {
        var self = this;
        this.ChecksView();
    },
    /** onClick defined for flxAdvSearch **/
    AS_FlexContainer_a33bd484b8db4bdd9298c1fc0b1515f6: function AS_FlexContainer_a33bd484b8db4bdd9298c1fc0b1515f6(eventobject) {
        var self = this;
        this.navigateToAdvanceSearch();
    },
    /** onClick defined for btnStatements **/
    AS_Button_a31ed350c6104381981c3c5b53be3c48: function AS_Button_a31ed350c6104381981c3c5b53be3c48(eventobject) {
        var self = this;
        this.getStatements();
    },
    /** onReachingEnd defined for segAccDetails **/
    AS_Segment_aa7881071ba145199617e56d3ae91952: function AS_Segment_aa7881071ba145199617e56d3ae91952(eventobject) {
        var self = this;
        if (this.isLazyLoadingEnabled) {
            this.getStatements();
        }
    },
    /** onClick defined for undefined **/
    AS_BarButtonItem_f27e36a7e6aa471aa51a141ff7c319f0: function AS_BarButtonItem_f27e36a7e6aa471aa51a141ff7c319f0(eventobject) {
        var self = this;
        this.gotoAccountInfo();
    },
    /** init defined for frmAccountDetails **/
    AS_Form_e320ad1f929e4a3dad4efe079f2102b1: function AS_Form_e320ad1f929e4a3dad4efe079f2102b1(eventobject) {
        var self = this;
        this.init();
    },
    /** preShow defined for frmAccountDetails **/
    AS_Form_ab38005fe48c468c8516b24ac28c0519: function AS_Form_ab38005fe48c468c8516b24ac28c0519(eventobject) {
        var self = this;
        return self.frmAccountDetailsPreshow.call(this);
    }
});