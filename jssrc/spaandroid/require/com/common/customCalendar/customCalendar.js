define(function() {
    return function(controller) {
        var customCalendar = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "280dp",
            "id": "customCalendar",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "preShow": controller.AS_FlexContainer_b3a16e34cb524c87a802ad00f287980e,
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        customCalendar.setDefaultUnit(kony.flex.DP);
        var flxHeader = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "35dp",
            "id": "flxHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxHeader.setDefaultUnit(kony.flex.DP);
        var flxPreviousMonth = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxPreviousMonth",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "50dp",
            "zIndex": 1
        }, {}, {});
        flxPreviousMonth.setDefaultUnit(kony.flex.DP);
        var imgPreviousMonth = new kony.ui.Image2({
            "centerY": "50%",
            "height": "15dp",
            "id": "imgPreviousMonth",
            "isVisible": true,
            "left": "10dp",
            "skin": "slImage",
            "src": "calenderarrowleft.png",
            "width": "7dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxPreviousMonth.add(imgPreviousMonth);
        var flxNextMonth = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxNextMonth",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "right": "20dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "50dp",
            "zIndex": 1
        }, {}, {});
        flxNextMonth.setDefaultUnit(kony.flex.DP);
        var imgNextMonth = new kony.ui.Image2({
            "centerY": "50%",
            "height": "15dp",
            "id": "imgNextMonth",
            "isVisible": true,
            "right": "10dp",
            "skin": "slImage",
            "src": "calenderarrowright.png",
            "width": "7dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxNextMonth.add(imgNextMonth);
        var lblMonth = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblMonth",
            "isVisible": true,
            "skin": "sknLblA0A0A0SSP32px",
            "text": "November 1995",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flxHeader.add(flxPreviousMonth, flxNextMonth, lblMonth);
        var flxWeek = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "15dp",
            "id": "flxWeek",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "right": "20dp",
            "skin": "slFbox",
            "top": "50dp",
            "zIndex": 1
        }, {}, {});
        flxWeek.setDefaultUnit(kony.flex.DP);
        var lblSun = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblSun",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbla0a0a0SSPSemi26px",
            "text": "S",
            "textStyle": {},
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblMon = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblMon",
            "isVisible": true,
            "left": "15%",
            "skin": "sknLbla0a0a0SSPSemi26px",
            "text": "M",
            "textStyle": {},
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblTue = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblTue",
            "isVisible": true,
            "left": "30%",
            "skin": "sknLbla0a0a0SSPSemi26px",
            "text": "T",
            "textStyle": {},
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblWed = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblWed",
            "isVisible": true,
            "left": "45%",
            "skin": "sknLbla0a0a0SSPSemi26px",
            "text": "W",
            "textStyle": {},
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblThu = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblThu",
            "isVisible": true,
            "left": "60%",
            "skin": "sknLbla0a0a0SSPSemi26px",
            "text": "T",
            "textStyle": {},
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblFri = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblFri",
            "isVisible": true,
            "left": "75%",
            "skin": "sknLbla0a0a0SSPSemi26px",
            "text": "F",
            "textStyle": {},
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblSat = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblSat",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknLbla0a0a0SSPSemi26px",
            "text": "S",
            "textStyle": {},
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flxWeek.add(lblSun, lblMon, lblTue, lblWed, lblThu, lblFri, lblSat);
        var flxMonth = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "216dp",
            "id": "flxMonth",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "68dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxMonth.setDefaultUnit(kony.flex.DP);
        var flxMonthOne = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "216dp",
            "id": "flxMonthOne",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxMonthOne.setDefaultUnit(kony.flex.DP);
        var flxWeekOne = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxWeekOne",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "right": "20dp",
            "skin": "slFbox",
            "top": "3dp",
            "zIndex": 1
        }, {}, {});
        flxWeekOne.setDefaultUnit(kony.flex.DP);
        var CopyLabel0h896370364c647 = new kony.ui.Label({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0h896370364c647",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbl0095e4ffffffSSPReg26px",
            "text": "S",
            "textStyle": {},
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var CopyLabel0c17fd38ae73541 = new kony.ui.Label({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0c17fd38ae73541",
            "isVisible": true,
            "left": "15%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {},
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var CopyLabel0ebdb65cb337e40 = new kony.ui.Label({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0ebdb65cb337e40",
            "isVisible": true,
            "left": "30%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {},
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var CopyLabel0ebebef81288b49 = new kony.ui.Label({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0ebebef81288b49",
            "isVisible": true,
            "left": "45%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {},
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var CopyLabel0jd77222a5bf043 = new kony.ui.Label({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0jd77222a5bf043",
            "isVisible": true,
            "left": "60%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {},
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var CopyLabel0bd3347987a2d42 = new kony.ui.Label({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0bd3347987a2d42",
            "isVisible": true,
            "left": "75%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {},
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var CopyLabel0db83591229ee48 = new kony.ui.Label({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0db83591229ee48",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {},
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flxWeekOne.add(CopyLabel0h896370364c647, CopyLabel0c17fd38ae73541, CopyLabel0ebdb65cb337e40, CopyLabel0ebebef81288b49, CopyLabel0jd77222a5bf043, CopyLabel0bd3347987a2d42, CopyLabel0db83591229ee48);
        var flxWeekTwo = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxWeekTwo",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "right": "20dp",
            "skin": "slFbox",
            "top": "36dp",
            "zIndex": 1
        }, {}, {});
        flxWeekTwo.setDefaultUnit(kony.flex.DP);
        var CopyLabel0bf31efe96e8544 = new kony.ui.Label({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0bf31efe96e8544",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbl0095e4SSPRegular26px",
            "text": "S",
            "textStyle": {},
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var CopyLabel0fdca447397194f = new kony.ui.Label({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0fdca447397194f",
            "isVisible": true,
            "left": "15%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {},
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var CopyLabel0f818d2b46a9443 = new kony.ui.Label({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0f818d2b46a9443",
            "isVisible": true,
            "left": "30%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {},
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var CopyLabel0iacbb14118244b = new kony.ui.Label({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0iacbb14118244b",
            "isVisible": true,
            "left": "45%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {},
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var CopyLabel0ab34c408890a48 = new kony.ui.Label({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0ab34c408890a48",
            "isVisible": true,
            "left": "60%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {},
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var CopyLabel0b0a37999379943 = new kony.ui.Label({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0b0a37999379943",
            "isVisible": true,
            "left": "75%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {},
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var CopyLabel0e6c614860b2e49 = new kony.ui.Label({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0e6c614860b2e49",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {},
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flxWeekTwo.add(CopyLabel0bf31efe96e8544, CopyLabel0fdca447397194f, CopyLabel0f818d2b46a9443, CopyLabel0iacbb14118244b, CopyLabel0ab34c408890a48, CopyLabel0b0a37999379943, CopyLabel0e6c614860b2e49);
        var flxWeekThree = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxWeekThree",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "right": "20dp",
            "skin": "slFbox",
            "top": "72dp",
            "zIndex": 1
        }, {}, {});
        flxWeekThree.setDefaultUnit(kony.flex.DP);
        var CopyLabel0fd179b6989af49 = new kony.ui.Label({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0fd179b6989af49",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblf9f9f9da8b08SSPReg26px",
            "text": "31",
            "textStyle": {},
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var CopyLabel0eb2ee0908f754b = new kony.ui.Label({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0eb2ee0908f754b",
            "isVisible": true,
            "left": "15%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {},
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var CopyLabel0ec3ea718928e43 = new kony.ui.Label({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0ec3ea718928e43",
            "isVisible": true,
            "left": "30%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {},
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var CopyLabel0c37cb272050745 = new kony.ui.Label({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0c37cb272050745",
            "isVisible": true,
            "left": "45%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {},
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var CopyLabel0h55e7685c4484d = new kony.ui.Label({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0h55e7685c4484d",
            "isVisible": true,
            "left": "60%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {},
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var CopyLabel0e467834fb93444 = new kony.ui.Label({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0e467834fb93444",
            "isVisible": true,
            "left": "75%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {},
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var CopyLabel0f7c31ea05bdd4e = new kony.ui.Label({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0f7c31ea05bdd4e",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {},
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flxWeekThree.add(CopyLabel0fd179b6989af49, CopyLabel0eb2ee0908f754b, CopyLabel0ec3ea718928e43, CopyLabel0c37cb272050745, CopyLabel0h55e7685c4484d, CopyLabel0e467834fb93444, CopyLabel0f7c31ea05bdd4e);
        var flxWeekFour = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxWeekFour",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "right": "20dp",
            "skin": "slFbox",
            "top": "108dp",
            "zIndex": 1
        }, {}, {});
        flxWeekFour.setDefaultUnit(kony.flex.DP);
        var CopyLabel0bf70befd32634d = new kony.ui.Label({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0bf70befd32634d",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbl424242SSP26pxOp40",
            "text": "S",
            "textStyle": {},
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var CopyLabel0c0d1ace9366e41 = new kony.ui.Label({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0c0d1ace9366e41",
            "isVisible": true,
            "left": "15%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {},
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var CopyLabel0c6604e04cd0746 = new kony.ui.Label({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0c6604e04cd0746",
            "isVisible": true,
            "left": "30%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {},
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var CopyLabel0f56560e182094f = new kony.ui.Label({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0f56560e182094f",
            "isVisible": true,
            "left": "45%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {},
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var CopyLabel0ga2fb49aa72949 = new kony.ui.Label({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0ga2fb49aa72949",
            "isVisible": true,
            "left": "60%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {},
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var CopyLabel0ddfbd882ca6e49 = new kony.ui.Label({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0ddfbd882ca6e49",
            "isVisible": true,
            "left": "75%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {},
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var CopyLabel0d441e1e8b5f745 = new kony.ui.Label({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0d441e1e8b5f745",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {},
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flxWeekFour.add(CopyLabel0bf70befd32634d, CopyLabel0c0d1ace9366e41, CopyLabel0c6604e04cd0746, CopyLabel0f56560e182094f, CopyLabel0ga2fb49aa72949, CopyLabel0ddfbd882ca6e49, CopyLabel0d441e1e8b5f745);
        var flxWeekFive = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxWeekFive",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "right": "20dp",
            "skin": "slFbox",
            "top": "144dp",
            "zIndex": 1
        }, {}, {});
        flxWeekFive.setDefaultUnit(kony.flex.DP);
        var CopyLabel0b4b0a19342f045 = new kony.ui.Label({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0b4b0a19342f045",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {},
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var CopyLabel0j9b527661d284c = new kony.ui.Label({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0j9b527661d284c",
            "isVisible": true,
            "left": "15%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {},
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var CopyLabel0h8af2ed5093c4b = new kony.ui.Label({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0h8af2ed5093c4b",
            "isVisible": true,
            "left": "30%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {},
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var CopyLabel0a76a5b3ff1614d = new kony.ui.Label({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0a76a5b3ff1614d",
            "isVisible": true,
            "left": "45%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {},
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var CopyLabel0j0d027a8ae2a4b = new kony.ui.Label({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0j0d027a8ae2a4b",
            "isVisible": true,
            "left": "60%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {},
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var CopyLabel0hbe2d314e8e74d = new kony.ui.Label({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0hbe2d314e8e74d",
            "isVisible": true,
            "left": "75%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {},
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var CopyLabel0dba531ea66c843 = new kony.ui.Label({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0dba531ea66c843",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {},
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flxWeekFive.add(CopyLabel0b4b0a19342f045, CopyLabel0j9b527661d284c, CopyLabel0h8af2ed5093c4b, CopyLabel0a76a5b3ff1614d, CopyLabel0j0d027a8ae2a4b, CopyLabel0hbe2d314e8e74d, CopyLabel0dba531ea66c843);
        var flxWeekSix = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxWeekSix",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "right": "20dp",
            "skin": "slFbox",
            "top": "180dp",
            "zIndex": 1
        }, {}, {});
        flxWeekSix.setDefaultUnit(kony.flex.DP);
        var CopyLabel0gdf09240d4ec41 = new kony.ui.Label({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0gdf09240d4ec41",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {},
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var CopyLabel0g3fdaa072d5a41 = new kony.ui.Label({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0g3fdaa072d5a41",
            "isVisible": true,
            "left": "15%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {},
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var CopyLabel0c0073a9abe6c45 = new kony.ui.Label({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0c0073a9abe6c45",
            "isVisible": true,
            "left": "30%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {},
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var CopyLabel0d80c4e36d51442 = new kony.ui.Label({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0d80c4e36d51442",
            "isVisible": true,
            "left": "45%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {},
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var CopyLabel0b03e3bad6b9d44 = new kony.ui.Label({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0b03e3bad6b9d44",
            "isVisible": true,
            "left": "60%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {},
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var CopyLabel0ia4215695fd748 = new kony.ui.Label({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0ia4215695fd748",
            "isVisible": true,
            "left": "75%",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {},
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var CopyLabel0i924d509954a45 = new kony.ui.Label({
            "centerY": "50%",
            "height": "30dp",
            "id": "CopyLabel0i924d509954a45",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknLbl424242SSP26px",
            "text": "S",
            "textStyle": {},
            "width": "30dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flxWeekSix.add(CopyLabel0gdf09240d4ec41, CopyLabel0g3fdaa072d5a41, CopyLabel0c0073a9abe6c45, CopyLabel0d80c4e36d51442, CopyLabel0b03e3bad6b9d44, CopyLabel0ia4215695fd748, CopyLabel0i924d509954a45);
        flxMonthOne.add(flxWeekOne, flxWeekTwo, flxWeekThree, flxWeekFour, flxWeekFive, flxWeekSix);
        flxMonth.add(flxMonthOne);
        customCalendar.add(flxHeader, flxWeek, flxMonth);
        return customCalendar;
    }
})