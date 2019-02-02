define("frmCamAndroidUtility", function() {
    return function(controller) {
        function addWidgetsfrmCamAndroidUtility() {
            this.setDefaultUnit(kony.flex.DP);
            this.add();
        };
        return [{
            "addWidgets": addWidgetsfrmCamAndroidUtility,
            "enabledForIdleTimeout": true,
            "id": "frmCamAndroidUtility",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "sknFrmffffff"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "retainScrollPosition": false
        }]
    }
});