define(function() {
    return function(controller) {
        var keypad = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "keypad",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        keypad.setDefaultUnit(kony.flex.DP);
        var flxShadowTwo = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxShadowTwo",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "sknFlxe3e3e3",
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, {}, {});
        flxShadowTwo.setDefaultUnit(kony.flex.DP);
        flxShadowTwo.add();
        var flxKeypad = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxKeypad",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "skin": "sknFlxF5F6FB",
            "width": "100%",
            "zIndex": 2
        }, {}, {});
        flxKeypad.setDefaultUnit(kony.flex.DP);
        var flxKeypadRowOne = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "24.40%",
            "id": "flxKeypadRowOne",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "f9f9",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxKeypadRowOne.setDefaultUnit(kony.flex.DP);
        var btnOne = new kony.ui.Button({
            "focusSkin": "sknBtnKeybad",
            "height": "100%",
            "id": "btnOne",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknBtnKeybad",
            "text": "1",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var btnTwo = new kony.ui.Button({
            "centerX": "50%",
            "focusSkin": "sknBtnKeybad",
            "height": "100%",
            "id": "btnTwo",
            "isVisible": true,
            "skin": "sknBtnKeybad",
            "text": "2",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var btnThree = new kony.ui.Button({
            "focusSkin": "sknBtnKeybad",
            "height": "100%",
            "id": "btnThree",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknBtnKeybad",
            "text": "3",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxKeypadRowOne.add(btnOne, btnTwo, btnThree);
        var flxKeypadRowTwo = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "24.60%",
            "id": "flxKeypadRowTwo",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "f9f9",
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxKeypadRowTwo.setDefaultUnit(kony.flex.DP);
        var btnFour = new kony.ui.Button({
            "focusSkin": "sknBtnKeybad",
            "height": "100%",
            "id": "btnFour",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknBtnKeybad",
            "text": "4",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var btnFive = new kony.ui.Button({
            "centerX": "50%",
            "focusSkin": "sknBtnKeybad",
            "height": "100%",
            "id": "btnFive",
            "isVisible": true,
            "skin": "sknBtnKeybad",
            "text": "5",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var btnSix = new kony.ui.Button({
            "focusSkin": "sknBtnKeybad",
            "height": "100%",
            "id": "btnSix",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknBtnKeybad",
            "text": "6",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxKeypadRowTwo.add(btnFour, btnFive, btnSix);
        var flxKeypadRowThree = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "24.40%",
            "id": "flxKeypadRowThree",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "f9f9",
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxKeypadRowThree.setDefaultUnit(kony.flex.DP);
        var btnSeven = new kony.ui.Button({
            "focusSkin": "sknBtnKeybad",
            "height": "100%",
            "id": "btnSeven",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknBtnKeybad",
            "text": "7",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var btnEight = new kony.ui.Button({
            "centerX": "50%",
            "focusSkin": "sknBtnKeybad",
            "height": "100%",
            "id": "btnEight",
            "isVisible": true,
            "skin": "sknBtnKeybad",
            "text": "8",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var btnNine = new kony.ui.Button({
            "focusSkin": "sknBtnKeybad",
            "height": "100%",
            "id": "btnNine",
            "isVisible": true,
            "right": "0dp",
            "skin": "sknBtnKeybad",
            "text": "9",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxKeypadRowThree.add(btnSeven, btnEight, btnNine);
        var flxKeypadRowFour = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "24.40%",
            "id": "flxKeypadRowFour",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "1dp",
            "skin": "f9f9",
            "top": "1dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxKeypadRowFour.setDefaultUnit(kony.flex.DP);
        var btnZero = new kony.ui.Button({
            "centerX": "50%",
            "focusSkin": "sknBtnKeybad",
            "height": "100%",
            "id": "btnZero",
            "isVisible": true,
            "skin": "sknBtnKeybad",
            "text": "0",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgClearKeypad = new kony.ui.Image2({
            "centerY": "50%",
            "height": "100%",
            "id": "imgClearKeypad",
            "isVisible": true,
            "right": "0%",
            "skin": "slImage",
            "src": "transparentbox.png",
            "top": "0dp",
            "width": "33%",
            "zIndex": 10
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgClear = new kony.ui.Image2({
            "centerY": "50%",
            "height": "50%",
            "id": "imgClear",
            "isVisible": true,
            "right": "0%",
            "skin": "slImage",
            "src": "cancelkeypad.png",
            "top": "0dp",
            "width": "33%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxKeypadRowFour.add(btnZero, imgClearKeypad, imgClear);
        flxKeypad.add(flxKeypadRowOne, flxKeypadRowTwo, flxKeypadRowThree, flxKeypadRowFour);
        var flxVerticalSeparatorOne = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxVerticalSeparatorOne",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "33%",
            "skin": "sknFlxF5F6FB",
            "top": "0dp",
            "width": "1dp",
            "zIndex": 5
        }, {}, {});
        flxVerticalSeparatorOne.setDefaultUnit(kony.flex.DP);
        flxVerticalSeparatorOne.add();
        var flxVerticalSeparatorTwo = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxVerticalSeparatorTwo",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "right": "33%",
            "skin": "sknFlxF5F6FB",
            "top": "0dp",
            "width": "1dp",
            "zIndex": 5
        }, {}, {});
        flxVerticalSeparatorTwo.setDefaultUnit(kony.flex.DP);
        flxVerticalSeparatorTwo.add();
        keypad.add(flxShadowTwo, flxKeypad, flxVerticalSeparatorOne, flxVerticalSeparatorTwo);
        return keypad;
    }
})