define("flxDocument", function() {
    return function(controller) {
        var flxDocument = new kony.ui.FlexContainer({
            "clipBounds": true,
            "height": "220dp",
            "id": "flxDocument",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxDocument.setDefaultUnit(kony.flex.DP);
        flxDocument.add();
        return flxDocument;
    }
})