define(function() {
    return {
        currMonth: 0,
        currYear: 0,
        selectedDate: '',
        firstEnabledDate: '',
      	lastEnabledDate:'',
        singleSelect: true,
    selectedDateValue:'',
        fromDate: '',
        toDate: '',
    currentDateSkin: 'sknAHBGsc16ptff6d00',
    selectedDateSkin: 'sknAHBGsc16ptff6d00',
    unSelectedDateSkin: 'sknLbl424242SSP26px',
    selectedRangeSkin: 'sknLblf9f9f9da8b08SSPReg26px',
    diabledDateSkin: 'sknLbl424242SSP26pxOp40',
    triggerContinueAction: false,
    isCalendarEndDateFrm: false, 
        isMonthChange: false ,
        isOnceTransaction: true,
    preShow: function() {
      var scope = this;

            this.initActions();
            if (this.view.flxMonth.widgets().length == 1) {
                var month0 = this.view.flxMonthOne.clone("flxMonthZero");
                var month2 = this.view.flxMonthOne.clone("flxMonthThree");
                month0.left = "-100%";
                month2.left = "100%";
                this.view.flxMonth.addAt(month0, 0);
                this.view.flxMonth.addAt(month2, 2);

                var date = new Date();
                if(this.currMonth===0){
                    this.currMonth = date.getMonth();
                    this.currYear = date.getFullYear();
                }
                this.setMonthData(0, this.currMonth, this.currYear);
                this.setMonthData(1, this.currMonth, this.currYear);
                this.setMonthData(2, this.currMonth, this.currYear);
                this.setMonthLabelText(this.currMonth, this.currYear);
                this.highlightCurrentDay();

                this.view.flxMonth.setGestureRecognizer(constants.GESTURE_TYPE_SWIPE, {
                        fingers: 1
                    },
                    function(widgetRef, gestureInfo) {
                        if (gestureInfo.swipeDirection === 1) {
                            scope.view.flxNextMonth.onClick();
                        } else if (gestureInfo.swipeDirection === 2) {
                            scope.view.flxPreviousMonth.onClick();
                        }
                    });
                if(this.firstEnabledDate===''){
                    this.setFirstEnabledDate();
                }
            }
        },
        setMonthData: function(monthOffset, month, year) {
            var d = new Date();
            if (month == -1) {
                month = 11;
                year -= 1;
            }
            if (month == 12) {
                month = 0;
                year += 1;
            }
            d.setMonth(month);
            d.setFullYear(year);
            var monthParam = d.getMonth();
            var yearParam = d.getFullYear();
            if (monthOffset == 0 && monthParam == 0) {
                yearParam--;
                monthParam = 11;
            } else if (monthOffset == 2 && monthParam == 11) {
                yearParam++;
                monthParam = 0;
            } else {
                monthParam = monthParam - 1 + monthOffset;
            }
            // alert(monthParam);
            var maxDays = this.setMaxDays(monthParam, yearParam);

            var d2 = new Date();
            d2.setDate(1);
            d2.setMonth(monthParam);
            d2.setFullYear(yearParam);

            var j = d2.getDay();
            var dateValue = 1;
            var week = this.view.flxMonth.widgets()[monthOffset].widgets()[0].widgets();
            for (var temp = 0; temp < j; temp++) {
                week[temp].isVisible = false;
            }
            for (var i = 0; i < 6; i++) {
                var week = this.view.flxMonth.widgets()[monthOffset].widgets()[i].widgets();
                for (; j < 7; j++) {
                    if (dateValue > maxDays) {
                        for (var k = j; k < 7; k++) {
                            week[k].isVisible = false;
                        }
                        if (i == 4) {
                            var weekSix = this.view.flxMonth.widgets()[monthOffset].widgets()[5].widgets();
                            for (var k = 0; k < 7; k++) {
                                weekSix[k].isVisible = false;
                            }
                        }
                        if (i == 5) {
                            var weekSix = this.view.flxMonth.widgets()[monthOffset].widgets()[5].widgets();
                            for (var k = j; k < 7; k++) {
                                weekSix[k].isVisible = false;
                            }
                        }
                        break;
                    }
                    week[j].isVisible = true;
                    week[j].skin = this.unSelectedDateSkin;
                    week[j].text = "" + parseInt(dateValue);
                    dateValue++;
                }
                j = 0;
            }
            this.setFirstEnabledDateHelper();
        },
        setMonthLabelText: function(month, year) {
            var currMonth = {
                0: "January",
                1: "February",
                2: "March",
                3: "April",
                4: "May",
                5: "June",
                6: "July",
                7: "August",
                8: "September",
                9: "October",
                10: "November",
                11: "December"
            };
            this.view.lblMonth.text = currMonth[month] + " " + year;
        },
        setMaxDays: function(month, year) {
            if (month == 1 && year % 4 == 0) {
                return 29;
            } else if (month == 1) {
                return 28;
            }
          var monthMaxDays = {
            0: 31,
            2: 31,
            3: 30,
            4: 31,
            5: 30,
            6: 31,
            7: 31,
            8: 30,
            9: 31,
            10: 30,
            11: 31,
          };
          return monthMaxDays[month];
        },
        initActions: function() {
            var scope = this;

            this.view.flxNextMonth.onClick = function() {
                scope.view.flxMonth.widgets()[1].animate(
                    kony.ui.createAnimation({
                        "100": {
                            "left": "-100%",
                            "stepConfig": {
                                "timingFunction": kony.anim.EASE
                            }
                        }
                    }), {
                        "delay": 0,
                        "iterationCount": 1,
                        "fillMode": kony.anim.FILL_MODE_FORWARDS,
                        "duration": 0.25
                    }, {
                        "animationEnd": function() {}
                    });

                scope.view.flxMonth.widgets()[2].animate(
                    kony.ui.createAnimation({
                        "100": {
                            "left": "0%",
                            "stepConfig": {
                                "timingFunction": kony.anim.EASE
                            }
                        }
                    }), {
                        "delay": 0,
                        "iterationCount": 1,
                        "fillMode": kony.anim.FILL_MODE_FORWARDS,
                        "duration": 0.25
                    }, {
                        "animationEnd": function() {
                            var month = scope.view.flxMonth.removeAt(0);
                            scope.view.flxMonth.addAt(month, 2);
                            scope.currMonth += 1;
                            if (scope.currMonth == 12) {
                              var abc = parseInt(scope.currYear);
                                scope.currYear = (abc+1);
                                scope.currMonth = 0;
                            }
                            scope.setMonthData(2, scope.currMonth, scope.currYear);
                            scope.setMonthLabelText(scope.currMonth, scope.currYear);
                            if(!kony.sdk.isNullOrUndefined(scope.selectedDate) && 
                               (scope.selectedDate !== ''))
                            {
                              var date1 = new Date(scope.selectedDate);
                              var selMonth = date1.getMonth() + 1;
                              var selYear = date1.getFullYear();
                              kony.print("selMonth " + selMonth +"selYear "+selYear+"cM "+scope.currMonth+"cy "+scope.currYear);                                                            
                              var dateFeed1 = (selMonth + 1) + "/" + date1.getDate() + "/" + selYear;		                      
                              if (scope.currMonth == selMonth && scope.currYear == selYear)
                              {
                                scope.isMonthChange = true;
                                scope.setSelectedDate(dateFeed1);
                              }                              
                            }                           
                           // scope.highlightCurrentDay();
                        }
                    });

            }
            this.view.flxPreviousMonth.onClick = function() {
                scope.view.flxMonth.widgets()[1].animate(
                    kony.ui.createAnimation({
                        "100": {
                            "left": "100%",
                            "stepConfig": {
                                "timingFunction": kony.anim.EASE
                            }
                        }
                    }), {
                        "delay": 0,
                        "iterationCount": 1,
                        "fillMode": kony.anim.FILL_MODE_FORWARDS,
                        "duration": 0.25
                    }, {
                        "animationEnd": function() {}
                    });

                scope.view.flxMonth.widgets()[0].animate(
                    kony.ui.createAnimation({
                        "100": {
                            "left": "0%",
                            "stepConfig": {
                                "timingFunction": kony.anim.EASE
                            }
                        }
                    }), {
                        "delay": 0,
                        "iterationCount": 1,
                        "fillMode": kony.anim.FILL_MODE_FORWARDS,
                        "duration": 0.25
                    }, {
                        "animationEnd": function() {
                            var month = scope.view.flxMonth.removeAt(2);
                            scope.view.flxMonth.addAt(month, 0);
                            scope.currMonth -= 1;
                            if (scope.currMonth == -1) {
                                scope.currMonth = 11;
                                scope.currYear -= 1;
                            }
                            scope.setMonthData(0, scope.currMonth, scope.currYear);
                            scope.setMonthLabelText(scope.currMonth, scope.currYear);
                            if(!kony.sdk.isNullOrUndefined(scope.selectedDate) && 
                               (scope.selectedDate !== ''))
                            {
                              var date1 = new Date(scope.selectedDate);
                              var selMonth = date1.getMonth() + 1;
                              var selYear = date1.getFullYear();
                              kony.print("selMonth " + selMonth +"selYear "+selYear+"cM "+scope.currMonth+"cy "+scope.currYear);                                                            
                              var dateFeed1 = (selMonth + 1) + "/" + date1.getDate() + "/" + selYear;		                      
                              if (scope.currMonth == selMonth && scope.currYear == selYear)
                              {
                                 scope.isMonthChange = true;
                                 scope.setSelectedDate(dateFeed1);
                              }
                            }                          
                           // scope.highlightCurrentDay();
                        }
                    });
            }

            for (var i = 0; i < 6; i++) {
                var week = this.view.flxMonth.widgets()[0].widgets()[i].widgets();
                for (var j = 0; j < 7; j++) {
                    week[j].onTouchEnd = function(widgetRef) {
                        scope.daySelected(widgetRef);
                        if (widgetRef.skin === scope.diabledDateSkin) {
                            return;
                        }else if(scope.triggerContinueAction===true && scope.isCalendarEndDateFrm===false){
                            //scope.triggerContinue();
                        }
                    }
                }
            }
        },
        daySelected: function(widget) {
            if (this.singleSelect) {
                if (widget.skin === this.diabledDateSkin) {
                    return;
                }
                if (this.selectedDate === '') {
                    this.setSelectedDateValue(this.currMonth + "/" + widget.text + "/" + this.currYear);
                    this.unHighlightAllDays();
                    this.triggerContinueAction = true;
                    widget.skin = this.selectedDateSkin;
                } else {
                    var temp = this.currMonth + "/" + widget.text + "/" + this.currYear;
                    if (temp === this.selectedDate) {
                      if(this.isMonthChange === true)
                      {
                        this.setSelectedDateValue(this.currMonth + "/" + widget.text + "/" + this.currYear);
                        this.unHighlightAllDays();
                        this.isMonthChange = false;
                        widget.skin = this.selectedDateSkin;
                      }
                      else
                      {
                        this.setSelectedDateValue('');
                        widget.skin = this.unSelectedDateSkin;
                        this.highlightCurrentDay();
                      }
                        this.triggerContinueAction = false;
                    } else {
                        this.setSelectedDateValue(this.currMonth + "/" + widget.text + "/" + this.currYear);
                        this.triggerContinueAction = true;
                        this.unHighlightAllDays();
                        widget.skin = this.selectedDateSkin;
                    }
                }
            } else {
                if (this.fromDate === '') {
                    this.fromDate = this.currMonth + "/" + widget.text + "/" + this.currYear;
                } else {
                    var temp = this.currMonth + "/" + widget.text + "/" + this.currYear;
                    if (temp === this.fromDate) {
                        this.toDate = '';
                        this.fromDate = '';
                        this.unHighlightAllDays();
                    } else {

                        var fromTemp = parseInt(this.fromDate.split('/')[0]);
                        var toTemp = parseInt(widget.text);
                        if (toTemp < fromTemp) {
                            //highlight range
                            this.toDate = this.currMonth + "/" + widget.text + "/" + this.currYear;
                        } else {
                            this.fromDate = '';
                            this.toDate = '';
                            this.unHighlightAllDays();
                        }
                    }
                }
            }
            this.setFirstEnabledDateHelper();
        },
        highlightCurrentDay: function() {
            var d = new Date();
            var currDate = "" + parseInt(d.getDate());
            var breakFlag = false;
            if (this.currYear == d.getFullYear() && this.currMonth == d.getMonth()) {
                for (var i = 0; i < 6; i++) {
                    var week = this.view.flxMonth.widgets()[1].widgets()[i].widgets();
                    for (var j = 0; j < 7; j++) {
                        if (week[j].text === currDate) {
                            week[j].skin = this.unSelectedDateSkin;
                            breakFlag = true;
                            break;
                        }
                    }
                    if (breakFlag) {
                        break;
                    }
                }
            }
        },
        unHighlightAllDays: function() {
            if (this.view.flxMonth.widgets().length === 1) {
                this.preShow();
            }
            for (var i = 0; i < 3; i++) {
                for (var j = 0; j < 6; j++) {
                    var week = this.view.flxMonth.widgets()[i].widgets()[j].widgets();
                    for (var k = 0; k < 7; k++) {
                        week[k].skin = this.unSelectedDateSkin;
                    }
                }
            }
            this.highlightCurrentDay();
        },
        getSelectedDate: function() {
            var dateVal = this.selectedDate;
            if(!dateVal){
              return '';
            }
            var temp = dateVal.split('/');
            temp[0] = '' + (parseInt(temp[0]) + 1);
            if (temp[0].length == 1) {
                temp[0] = '0' + temp[0];
            }
            if (temp[1].length == 1) {
                temp[1] = '0' + temp[1];
            }
            dummy = temp[0] + '/' + temp[1] + '/' + temp[2];
            return dummy;
        },
        setFirstEnabledDate: function(dateParam) {
            /*
                dateParam param in MM/DD/YYYY format
            */
            var startDate;
            var startDateMonth;
            var startDateYear;
            if (dateParam === undefined) {
                var d = new Date();
              	d.setDate(d.getDate());
                startDate = parseInt(d.getDate());
                startDateMonth = d.getMonth();
                startDateYear = d.getFullYear();
            } else {
                var tempDate = dateParam.split('/');
                startDateMonth = parseInt(tempDate[0]) - 1;
                startDate = parseInt(tempDate[1]);
                startDateYear = tempDate[2];
            }
            this.firstEnabledDate = startDateMonth + '/' + startDate + '/' + startDateYear;
            //this.currMonth = startDateMonth;
            //this.currYear = startDateYear;
            this.setFirstEnabledDateHelper();
        },
        setFirstEnabledDateHelper: function() {
            if (this.firstEnabledDate === '') return;

            if (this.view.flxMonth.widgets().length === 1) {
                this.preShow();
            }
            var temp = this.firstEnabledDate.split('/');
            var startDate = temp[1];
            var startDateMonth = temp[0];
            var startDateYear = temp[2];
            if(startDate==1){
                startDateMonth--;
              	startDate = this.setMaxDays(startDateMonth, startDateYear);
            }
            if (this.currMonth == startDateMonth && this.currYear == startDateYear) {
                var weeks = this.view.flxMonth.widgets()[1].widgets();
                for (var i = 0; i < weeks.length; i++) {
                    var days = weeks[i].widgets();
                    for (var j = 0; j < 7; j++) {
                        days[j].skin = this.diabledDateSkin;

                        if (parseInt(days[j].text) == startDate - 1) {
                            return;
                        }
                    }
                }
            } else if (this.currYear == startDateYear && this.currMonth < startDateMonth) {
                var weeks = this.view.flxMonth.widgets()[1].widgets();
                for (var i = 0; i < weeks.length; i++) {
                    var days = weeks[i].widgets();
                    for (var j = 0; j < 7; j++) {
                        days[j].skin = this.diabledDateSkin;
                    }
                }
            } else if (this.currYear < startDateYear) {
                var weeks = this.view.flxMonth.widgets()[1].widgets();
                for (var i = 0; i < weeks.length; i++) {
                    var days = weeks[i].widgets();
                    for (var j = 0; j < 7; j++) {
                        days[j].skin = this.diabledDateSkin;
                    }
                }
            }
          this.setLastEnabledDateHelper();
        },
      setLastEnabledDateHelper: function() {
            //if (this.firstEnabledDate === '') return;

//             if (this.view.flxMonth.widgets().length === 1) {
//                 this.preShow();
//             }
        
        	var date= new Date();
			var lastDate = new Date(date);
			lastDate.setFullYear(lastDate.getFullYear() + 5);
        	this.lastEnabledDate = lastDate.getDate()+ "/"+lastDate.getMonth()+ "/"+lastDate.getFullYear();
         
            var temp = this.lastEnabledDate.split('/');
            var startDate = temp[0];
            var startDateMonth = temp[1];
            var startDateYear = temp[2];
            if(startDate==1){
                startDateMonth--;
              	startDate = this.setMaxDays(startDateMonth, startDateYear);
            }
        kony.print("@@curr Year "+ this.currYear);
        kony.print("@@curr Month "+ this.currMonth);
        
        
            if (this.currMonth == startDateMonth && this.currYear == startDateYear) {
              kony.print("@@@this.currMonth == startDateMonth && this.currYear == startDateYear");
                var weeks = this.view.flxMonth.widgets()[1].widgets();
                for (var i = 0; i < weeks.length; i++) {
                    var days = weeks[i].widgets();
                    for (var j = 0; j < 7; j++) {
                        // days[j].skin = this.unSelectedDateSkin;
                        if (parseInt(days[j].text) > startDate) {
                            days[j].skin = this.diabledDateSkin;
                        }
                    }
                }
            } else if (this.currYear == startDateYear && this.currMonth > startDateMonth) {
				kony.print("@@@this.currYear == startDateYear && this.currMonth > startDateMonth");              
                var weeks = this.view.flxMonth.widgets()[1].widgets();
                for (var i = 0; i < weeks.length; i++) {
                    var days = weeks[i].widgets();
                    for (var j = 0; j < 7; j++) {
                        days[j].skin = this.diabledDateSkin;
                    }
                }
            } else if (this.currYear > startDateYear) {
              kony.print("@@@this.currYear > startDateYear");
                var weeks = this.view.flxMonth.widgets()[1].widgets();
                for (var i = 0; i < weeks.length; i++) {
                    var days = weeks[i].widgets();
                    for (var j = 0; j < 7; j++) {
                        days[j].skin = this.diabledDateSkin;
                    }
                }
            }
        },
        setSelectedDate: function(date) {
            var temp = date.split('/');
            var param = '' + (parseInt(temp[0]) - 1) + '/' + parseInt(temp[1]) + '/' + temp[2];
            if (this.view.flxMonth.widgets().length === 1) {
                this.preShow();
            }
            this.currMonth = parseInt(temp[0])-1;
            this.currYear = temp[2];
            this.setMonthData(0, this.currMonth - 1, this.currYear);
                this.setMonthData(1, this.currMonth, this.currYear);
                this.setMonthData(2, this.currMonth + 1, this.currYear);
                this.setMonthLabelText(this.currMonth, this.currYear);
            for (var i = 0; i < 6; i++) {
                var week = this.view.flxMonth.widgets()[1].widgets()[i].widgets();
                for (var j = 0; j < 7; j++) {
                    if (week[j].text == '' + parseInt(temp[1])) {
                        this.daySelected(week[j]);
                        break;
                    }
                }
            }
            this.setSelectedDateValue(param);
        },
        clearHighlightedDateLabel:function(){
          var currForm = kony.application.getCurrentForm();
          var dateLabels = currForm.flxDateValue.widgets();
          var dummy = '';
          var skin = '';
          currForm.btnContinue.skin = 'sknBtnOnBoardingInactive';
          currForm.btnContinue.setEnabled(false);
          dummy = 'MM/DD/YYYY';
          skin = 'sknLble3e3e3SSPReg40px';
          for (var i = 0; i < dateLabels.length; i++) {
            dateLabels[i].text = dummy[i];
            dateLabels[i].skin = skin;
          }
          currForm.forceLayout();
        },
        setSelectedDateValue: function(date) {
            this.selectedDate = date;

            //NON COMPONENT OPERATIONS:
            this.updateDateBullets();
        },
        updateDateBullets: function() {
            var currForm = kony.application.getCurrentForm();
            var dateLabels = currForm.flxDateValue.widgets();
            var dummy = '';
          	var dummy1 = '';
            var skin = '';
            if (this.selectedDate === '') {
                //currForm.btnContinue.skin = 'sknAHBGsc16ptBff6d00TffffffBr21pt';//sknBtnOnBoardingInactive
                //currForm.btnContinue.setEnabled(true);
                dummy = 'DD/MM/YYYY';
                skin = 'sknLble3e3e3SSPReg40px';
            } else {
                //currForm.btnContinue.skin = 'sknAHBGsc16ptBff6d00TffffffBr21pt';//sknBtn0095e4RoundedffffffSSP26px
                //currForm.btnContinue.setEnabled(true);
                currForm.forceLayout();
                skin = 'sknLbl424242SSPReg40px';
                dummy = this.selectedDate;
                var dateVal = this.selectedDate;
                var temp = dateVal.split('/');
                temp[0] = '' + (parseInt(temp[0]) + 1);
                if (temp[0].length == 1) {
                    temp[0] = '0' + temp[0];
                }
                if (temp[1].length == 1) {
                    temp[1] = '0' + temp[1];
                }
                dummy = temp[1] + '/' + temp[0] + '/' + temp[2];
              	dummy1 = temp[0] + '/' + temp[1] + '/' + temp[2];
            }
            for (var i = 0; i < dateLabels.length; i++) {
                dateLabels[i].text = dummy[i];
                dateLabels[i].skin = skin;
            }
          if(dummy === 'DD/MM/YYYY'){
     		dummy = '';
          }
          this.getScheduledSelectedDate(dummy1);
        },
        triggerContinue: function(){
            var currForm = kony.application.getCurrentForm();
            currForm.btnContinue.onClick();
    },
    getScheduledSelectedDate: function(dateValue){
      kony.print("getScheduledSelectedDate dateValue "+dateValue);
      var transferModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("TransferModule");
      transferModule.presentationController.setScheduledDate(dateValue);
      var frmTransfersStartDateController = applicationManager.getPresentationUtility().getController('frmTransfersStartDate', true);
      frmTransfersStartDateController.enableScheduledTransfer();
    }
  };
});