define("flxEmptyHeader", function() {
    return function(controller) {
        var flxEmptyHeader = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "0dp",
            "id": "flxEmptyHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxEmptyHeader.setDefaultUnit(kony.flex.DP);
        flxEmptyHeader.add();
        return flxEmptyHeader;
    }
})