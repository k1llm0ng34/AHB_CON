define("flxTravelPlan", function() {
    return function(controller) {
        var flxTravelPlan = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "80dp",
            "id": "flxTravelPlan",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "sknFlxffffff",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxTravelPlan.setDefaultUnit(kony.flex.DP);
        var lblPlanDescription = new kony.ui.Label({
            "id": "lblPlanDescription",
            "isVisible": true,
            "left": "20dp",
            "maxNumberOfLines": 1,
            "right": "100dp",
            "skin": "sknLbl424242SSP26px",
            "text": "Label",
            "textStyle": {},
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "12dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var flxToFromDate = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "22dp",
            "id": "flxToFromDate",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "skin": "slFbox",
            "top": "30dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxToFromDate.setDefaultUnit(kony.flex.DP);
        var lblFromDate = new kony.ui.Label({
            "bottom": "2dp",
            "id": "lblFromDate",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl727272SSPReg22px",
            "text": "Label",
            "textStyle": {},
            "top": "2dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblTo = new kony.ui.Label({
            "bottom": "2dp",
            "id": "lblTo",
            "isVisible": true,
            "left": "5dp",
            "skin": "sknLbl727272SSPReg22px",
            "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.common.To\")",
            "textStyle": {},
            "top": "2dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblToDate = new kony.ui.Label({
            "bottom": "2dp",
            "id": "lblToDate",
            "isVisible": true,
            "left": "5dp",
            "skin": "sknLbl727272SSPReg22px",
            "text": "Label",
            "textStyle": {},
            "top": "2dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flxToFromDate.add(lblFromDate, lblTo, lblToDate);
        var flxSelectedCards = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "10dp",
            "clipBounds": true,
            "height": "22dp",
            "id": "flxSelectedCards",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "skin": "slFbox",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSelectedCards.setDefaultUnit(kony.flex.DP);
        var lblSelectedCards = new kony.ui.Label({
            "bottom": "2dp",
            "id": "lblSelectedCards",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbla0a0a022px",
            "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.cardManage.SelectedCards\")",
            "textStyle": {},
            "top": "2dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblColon = new kony.ui.Label({
            "bottom": "2dp",
            "id": "lblColon",
            "isVisible": true,
            "left": "3dp",
            "skin": "sknLbla0a0a022px",
            "text": ":",
            "textStyle": {},
            "top": "2dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblSelectedCardsValue = new kony.ui.Label({
            "bottom": "2dp",
            "id": "lblSelectedCardsValue",
            "isVisible": true,
            "left": "3dp",
            "skin": "sknLbl424242SSP26px",
            "text": "3",
            "textStyle": {},
            "top": "1dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flxSelectedCards.add(lblSelectedCards, lblColon, lblSelectedCardsValue);
        var imgArrow = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "80dp",
            "id": "imgArrow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "right": "20dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "30dp",
            "zIndex": 1
        }, {}, {});
        imgArrow.setDefaultUnit(kony.flex.DP);
        var Image0b84625802bcd4d = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "16dp",
            "id": "Image0b84625802bcd4d",
            "isVisible": true,
            "skin": "slImage",
            "src": "segmentarrow.png",
            "width": "16dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        imgArrow.add(Image0b84625802bcd4d);
        var flxSeparator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "sknFlxe3e3e3",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSeparator.setDefaultUnit(kony.flex.DP);
        flxSeparator.add();
        flxTravelPlan.add(lblPlanDescription, flxToFromDate, flxSelectedCards, imgArrow, flxSeparator);
        return flxTravelPlan;
    }
})