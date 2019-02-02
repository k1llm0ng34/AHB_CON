define({ 

 //Type your controller code here 
  
  onClickRadioButton1: function (){
    this.view.btnRadio1.skin = "sknAHBBtnRadioBtn";
    this.view.btnRadio2.skin = "sknAHBbtnRadioDot";
    this.view.btnRadio3.skin = "sknAHBbtnRadioDot";
  },
  onClickRadioButton2: function (){
    this.view.btnRadio1.skin = "sknAHBbtnRadioDot";
    this.view.btnRadio2.skin = "sknAHBBtnRadioBtn";
    this.view.btnRadio3.skin = "sknAHBbtnRadioDot";
  },
  onClickRadioButton3: function (){
    this.view.btnRadio1.skin = "sknAHBbtnRadioDot";
    this.view.btnRadio2.skin = "sknAHBbtnRadioDot";
    this.view.btnRadio3.skin = "sknAHBBtnRadioBtn";
  },
  preShowBenInfo : function(){
    this.initializeSkins();
    this.studioActions();
  },
  studioActions : function(){
    this.view.btnRadio1.onClick = this.onClickRadioButton1;
    this.view.btnRadio2.onClick = this.onClickRadioButton2;
    this.view.btnRadio3.onClick = this.onClickRadioButton3;
  },
  initializeSkins : function(){
    this.view.btnRadio1.skin = "sknAHBBtnRadioBtn";
    this.view.btnRadio2.skin = "sknAHBbtnRadioDot";
    this.view.btnRadio3.skin = "sknAHBbtnRadioDot";
  }

 });