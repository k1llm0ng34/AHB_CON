define("flxEStmtEmail", function() {
    return function(controller) {
        var flxEStmtEmail = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "focusSkin": "sknFlxf9f9f9",
            "height": "55dp",
            "id": "flxEStmtEmail",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "sknFlxffffff",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxEStmtEmail.setDefaultUnit(kony.flex.DP);
        var lblKey = new kony.ui.Label({
            "id": "lblKey",
            "isVisible": true,
            "left": "20dp",
            "right": "50dp",
            "skin": "sknLbla0a0a0SSP26px",
            "text": "Start Date",
            "textStyle": {},
            "top": "9dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblValue = new kony.ui.Label({
            "bottom": "9dp",
            "height": "18dp",
            "id": "lblValue",
            "isVisible": true,
            "left": "20dp",
            "right": "50dp",
            "skin": "sknLbl424242SSP26px",
            "text": "Continue until you cancel",
            "textStyle": {},
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var flxSeparator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "sknFlxe3e3e3",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSeparator.setDefaultUnit(kony.flex.DP);
        flxSeparator.add();
        var imgRadio = new kony.ui.Image2({
            "centerY": "50%",
            "height": "20dp",
            "id": "imgRadio",
            "isVisible": true,
            "right": "20dp",
            "skin": "slImage",
            "src": "radiobuttoninactive.png",
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxEStmtEmail.add(lblKey, lblValue, flxSeparator, imgRadio);
        return flxEStmtEmail;
    }
})