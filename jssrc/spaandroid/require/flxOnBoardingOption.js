define("flxOnBoardingOption", function() {
    return function(controller) {
        var flxOnBoardingOption = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "focusSkin": "slFbox",
            "height": "50dp",
            "id": "flxOnBoardingOption",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "slFbox"
        }, {}, {});
        flxOnBoardingOption.setDefaultUnit(kony.flex.DP);
        var btnOption = new kony.ui.Button({
            "centerX": "50%",
            "centerY": "50%",
            "focusSkin": "sknBtnOBSegSelected",
            "height": "44dp",
            "id": "btnOption",
            "isVisible": true,
            "left": "8dp",
            "skin": "sknBtnOBSegSelected",
            "text": "1 year    -    2 year",
            "top": "14dp",
            "width": "85%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxOnBoardingOption.add(btnOption);
        return flxOnBoardingOption;
    }
})