define("flxAccountDetailsEmptyRow", function() {
    return function(controller) {
        var flxAccountDetailsEmptyRow = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "255dp",
            "id": "flxAccountDetailsEmptyRow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxAccountDetailsEmptyRow.setDefaultUnit(kony.flex.DP);
        flxAccountDetailsEmptyRow.add();
        return flxAccountDetailsEmptyRow;
    }
})