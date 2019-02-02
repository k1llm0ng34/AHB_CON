define("flxSuggestedOffers", function() {
    return function(controller) {
        var flxSuggestedOffers = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "350dp",
            "id": "flxSuggestedOffers",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxSuggestedOffers.setDefaultUnit(kony.flex.DP);
        var Image0b4d71c21719d46 = new kony.ui.Image2({
            "height": "160dp",
            "id": "Image0b4d71c21719d46",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "slImage",
            "src": "adimage.png",
            "top": "12dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var FlexContainer0eaac9591d28d4a = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "30dp",
            "clipBounds": true,
            "id": "FlexContainer0eaac9591d28d4a",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "20dp",
            "right": "20dp",
            "skin": "slFbox",
            "top": "200dp",
            "zIndex": 1
        }, {}, {});
        FlexContainer0eaac9591d28d4a.setDefaultUnit(kony.flex.DP);
        var Label0f4afc9d4b12f46 = new kony.ui.Label({
            "id": "Label0f4afc9d4b12f46",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLbl4c4c4SSPBold25px",
            "text": "Get Home Loans from ANZ Bank with 4.9% per annum interest rate ",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var rtxDetails = new kony.ui.RichText({
            "id": "rtxDetails",
            "isVisible": true,
            "left": "0dp",
            "linkSkin": "sknRtx0095e4SSPReg26px",
            "skin": "sknRtx42424226px",
            "text": "Get Home Loans from ANZ Bank with 4.9% per annum interest rate and get free banking with an ANZ freedom account. Lorem Ipsum is an dummy text to provide space in wireframes where actual data comes...<a href =\"#\">Learn More</a>",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        FlexContainer0eaac9591d28d4a.add(Label0f4afc9d4b12f46, rtxDetails);
        var flxTypeOneShadow = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "-5dp",
            "clipBounds": true,
            "height": "7dp",
            "id": "flxTypeOneShadow",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "sknFlxHeaderShadow",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxTypeOneShadow.setDefaultUnit(kony.flex.DP);
        flxTypeOneShadow.add();
        flxSuggestedOffers.add(Image0b4d71c21719d46, FlexContainer0eaac9591d28d4a, flxTypeOneShadow);
        return flxSuggestedOffers;
    }
})