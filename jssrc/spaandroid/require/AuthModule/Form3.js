define("AuthModule/Form3", function() {
    return function(controller) {
        function addWidgetsForm3() {
            this.setDefaultUnit(kony.flex.DP);
            var TextField0c6ff776cb45f4c = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "TextField0c6ff776cb45f4c",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "57dp",
                "placeholder": "Placeholder",
                "secureTextEntry": false,
                "skin": "slTextBox",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "75dp",
                "width": "260dp",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false
            });
            var TextField0da9ccd502dec49 = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "TextField0da9ccd502dec49",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "55dp",
                "placeholder": "Placeholder",
                "secureTextEntry": false,
                "skin": "slTextBox",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "151dp",
                "width": "260dp",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false
            });
            var Button0ja70e32a331646 = new kony.ui.Button({
                "focusSkin": "slButtonGlossRed",
                "height": "50dp",
                "id": "Button0ja70e32a331646",
                "isVisible": true,
                "left": "51dp",
                "skin": "slButtonGlossBlue",
                "text": "Button",
                "top": "276dp",
                "width": "260dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            this.add(TextField0c6ff776cb45f4c, TextField0da9ccd502dec49, Button0ja70e32a331646);
        };
        return [{
            "addWidgets": addWidgetsForm3,
            "enabledForIdleTimeout": false,
            "id": "Form3",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_ddee99df35bf46b2983aeae7c2496dfe,
            "skin": "slForm"
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