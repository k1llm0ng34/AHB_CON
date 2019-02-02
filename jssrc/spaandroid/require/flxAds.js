define("flxAds", function() {
    return function(controller) {
        var flxAds = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "95%",
            "id": "flxAds",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxAds.setDefaultUnit(kony.flex.DP);
        var imgAds = new kony.ui.Image2({
            "height": "100%",
            "id": "imgAds",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flxGetInstantApproval = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "75dp",
            "centerX": "50%",
            "clipBounds": true,
            "height": "45dp",
            "id": "flxGetInstantApproval",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "sknFlx0a78d1RoundedCorner",
            "width": "200dp",
            "zIndex": 1
        }, {}, {});
        flxGetInstantApproval.setDefaultUnit(kony.flex.DP);
        var btnGetInstantApproval = new kony.ui.Button({
            "centerX": "50%",
            "centerY": "50%",
            "focusSkin": "sknBtn0A78D1SSPReg30px",
            "height": "45dp",
            "id": "btnGetInstantApproval",
            "isVisible": false,
            "skin": "sknBtn0A78D1SSPReg30px",
            "text": "Button",
            "width": "200dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var rtxGetInstantApproval = new kony.ui.RichText({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "rtxGetInstantApproval",
            "isVisible": true,
            "linkSkin": "sknRtxffffffSSPReg30Px",
            "skin": "sknRtxffffffSSPReg30Px",
            "text": "Get instant approval\n",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxGetInstantApproval.add(btnGetInstantApproval, rtxGetInstantApproval);
        var flxNoThankYou = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "10dp",
            "centerX": "50%",
            "clipBounds": true,
            "height": "45dp",
            "id": "flxNoThankYou",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "slFbox",
            "width": "200dp",
            "zIndex": 1
        }, {}, {});
        flxNoThankYou.setDefaultUnit(kony.flex.DP);
        var rtxThankyou = new kony.ui.RichText({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "rtxThankyou",
            "isVisible": false,
            "linkSkin": "sknRtx0a78d1SSPReg30px",
            "skin": "sknRtx0a78d1SSPReg30px",
            "text": "Thanks to you\n\n",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var btnNoThanks = new kony.ui.Button({
            "centerX": "50%",
            "centerY": "50%",
            "focusSkin": "sknBtnSSPReg0a78d130px",
            "height": "45dp",
            "id": "btnNoThanks",
            "isVisible": true,
            "skin": "sknBtnSSPReg0a78d130px",
            "text": "Button",
            "width": "200dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxNoThankYou.add(rtxThankyou, btnNoThanks);
        flxAds.add(imgAds, flxGetInstantApproval, flxNoThankYou);
        return flxAds;
    }
})