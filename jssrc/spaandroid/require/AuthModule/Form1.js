define("AuthModule/Form1", function() {
    return function(controller) {
        function addWidgetsForm1() {
            this.setDefaultUnit(kony.flex.DP);
            var TextField0fee1b7dbfa5b4f = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "TextField0fee1b7dbfa5b4f",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "92dp",
                "placeholder": "Placeholder",
                "secureTextEntry": false,
                "skin": "slTextBox",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "223dp",
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
            var TextField0fa7dfe3b57fb45 = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "defTextBoxFocus",
                "height": "40dp",
                "id": "TextField0fa7dfe3b57fb45",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "79dp",
                "placeholder": "Placeholder",
                "secureTextEntry": false,
                "skin": "slTextBox",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "312dp",
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
            var Button0c5857fe45b994f = new kony.ui.Button({
                "focusSkin": "slButtonGlossRed",
                "height": "50dp",
                "id": "Button0c5857fe45b994f",
                "isVisible": true,
                "left": "48dp",
                "onClick": controller.AS_Button_bdb1fefe87b34783820019cc70078a43,
                "skin": "slButtonGlossBlue",
                "text": "Button",
                "top": "436dp",
                "width": "260dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            this.add(TextField0fee1b7dbfa5b4f, TextField0fa7dfe3b57fb45, Button0c5857fe45b994f);
        };
        return [{
            "addWidgets": addWidgetsForm1,
            "enabledForIdleTimeout": false,
            "id": "Form1",
            "init": controller.AS_Form_h050dec1bd8541899c0f3916b93ab4ae,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
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