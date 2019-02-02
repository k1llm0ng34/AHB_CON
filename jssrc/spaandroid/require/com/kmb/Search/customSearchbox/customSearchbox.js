define(function() {
    return function(controller) {
        var customSearchbox = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "height": "40dp",
            "id": "customSearchbox",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        customSearchbox.setDefaultUnit(kony.flex.DP);
        var flxSearchMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSearchMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "sknFlx1a98ff",
            "top": "-0.50%",
            "width": "100%",
            "zIndex": 10
        }, {}, {});
        flxSearchMain.setDefaultUnit(kony.flex.DP);
        var imgSearchIcon = new kony.ui.Image2({
            "centerY": "50%",
            "height": "15dp",
            "id": "imgSearchIcon",
            "isVisible": true,
            "left": "30dp",
            "skin": "slImage",
            "src": "search.png",
            "width": "15dp",
            "zIndex": 10
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flxSearch = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "69.80%",
            "id": "flxSearch",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "-2%",
            "skin": "slFbox",
            "top": "0.20%",
            "width": "11%",
            "zIndex": 12
        }, {}, {});
        flxSearch.setDefaultUnit(kony.flex.DP);
        var imgSearch = new kony.ui.Image2({
            "height": "100%",
            "id": "imgSearch",
            "isVisible": true,
            "left": "0%",
            "skin": "slImage",
            "src": "searchblue.png",
            "top": "0%",
            "width": "100%",
            "zIndex": 10
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxSearch.add(imgSearch);
        var tbxSearch = new kony.ui.TextBox2({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerY": "50%",
            "focusSkin": "sknTbxSSPf1f1f1B",
            "height": "30dp",
            "id": "tbxSearch",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "placeholder": "Search by zipcode, city, street....",
            "secureTextEntry": false,
            "skin": "sknTbxSSPf1f1f1B",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "width": "70%",
            "zIndex": 1
        }, {
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [35, 3, 1, 3],
            "paddingInPixel": false
        }, {
            "autoComplete": false,
            "autoCorrect": false
        });
        var btnCancel = new kony.ui.Button({
            "centerY": "50%",
            "focusSkin": "sknBtnffffffSSP28px",
            "id": "btnCancel",
            "isVisible": true,
            "right": "20dp",
            "skin": "sknBtnffffffSSP28px",
            "text": "CANCEL",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 12
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxSearchMain.add(imgSearchIcon, flxSearch, tbxSearch, btnCancel);
        var flxHeaderShadow = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "-5dp",
            "clipBounds": true,
            "height": "5dp",
            "id": "flxHeaderShadow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "sknFlxHeaderShadow",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxHeaderShadow.setDefaultUnit(kony.flex.DP);
        flxHeaderShadow.add();
        customSearchbox.add(flxSearchMain, flxHeaderShadow);
        return customSearchbox;
    }
})