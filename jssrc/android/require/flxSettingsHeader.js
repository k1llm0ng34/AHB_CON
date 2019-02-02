define("flxSettingsHeader", function() {
    return function(controller) {
        var flxSettingsHeader = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "45dp",
            "id": "flxSettingsHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "sknFlxf9f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxSettingsHeader.setDefaultUnit(kony.flex.DP);
        var lblProfileHeading = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblProfileHeading",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl3e4f56SSPBold26px",
            "text": "Profile",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxSettingsHeader.add(lblProfileHeading);
        return flxSettingsHeader;
    }
})