define("flxOBYears", function() {
    return function(controller) {
        var flxOBYears = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxOBYears",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "sknFlxffffff",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxOBYears.setDefaultUnit(kony.flex.DP);
        var flxMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "40dp",
            "id": "flxMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "slFbox",
            "width": "90%",
            "zIndex": 1
        }, {}, {});
        flxMain.setDefaultUnit(kony.flex.DP);
        flxMain.add();
        var lblOption1 = new kony.ui.Label({
            "centerY": "50%",
            "height": "20dp",
            "id": "lblOption1",
            "isVisible": true,
            "left": "6.25%",
            "skin": "sknLbl424242SSPSemiBold26px",
            "text": "$1,200,001",
            "textStyle": {},
            "width": "34.38%",
            "zIndex": 4
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblHyphen = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblHyphen",
            "isVisible": true,
            "skin": "sknLbl424242SSP28px",
            "text": "-",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 4
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblOption2 = new kony.ui.Label({
            "centerY": "50%",
            "height": "20dp",
            "id": "lblOption2",
            "isVisible": true,
            "right": "5.05%",
            "skin": "sknLbl424242SSPSemiBold26px",
            "text": "$9,999,999",
            "textStyle": {},
            "width": "34.95%",
            "zIndex": 4
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flxOBYears.add(flxMain, lblOption1, lblHyphen, lblOption2);
        return flxOBYears;
    }
})