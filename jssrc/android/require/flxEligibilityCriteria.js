define("flxEligibilityCriteria", function() {
    return function(controller) {
        var flxEligibilityCriteria = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxEligibilityCriteria",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxEligibilityCriteria.setDefaultUnit(kony.flex.DP);
        var flxMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "right": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "zIndex": 1
        }, {}, {});
        flxMain.setDefaultUnit(kony.flex.DP);
        var lblCriteriaType = new kony.ui.Label({
            "id": "lblCriteriaType",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl424242SSP26px",
            "text": "I am an employee,retiree or family member of an employee of a company",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "15dp",
            "width": "78%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lbldescription = new kony.ui.Label({
            "id": "lbldescription",
            "isVisible": true,
            "left": "20dp",
            "skin": "sknLbl727272SSPLight22px",
            "text": "Eligible relationships include spouse, domestic  partner, parent, grandparent, child, sibling, grandchild, step sibling or adopted children.",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "5dp",
            "width": "78%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var tbxCriteria = new kony.ui.TextBox2({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "sknTbx424242SSPRegular28px",
            "height": "40dp",
            "id": "tbxCriteria",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "20dp",
            "maxTextLength": null,
            "placeholder": "Enter the company",
            "secureTextEntry": false,
            "skin": "sknTbx424242SSPRegular28px",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "12dp",
            "width": "85%",
            "zIndex": 1
        }, {
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "placeholderSkin": "defTextBoxPlaceholder",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        });
        var btnViewList = new kony.ui.Button({
            "focusSkin": "sknBtn00aef3SSPReg22px",
            "id": "btnViewList",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "sknBtn00aef3SSPReg22px",
            "text": "View list of membership organization we serve ",
            "top": "12dp",
            "width": "260dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flxSeparator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "1dp",
            "id": "flxSeparator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "sknFlxf1f1f1",
            "top": 20,
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxSeparator.setDefaultUnit(kony.flex.DP);
        flxSeparator.add();
        flxMain.add(lblCriteriaType, lbldescription, tbxCriteria, btnViewList, flxSeparator);
        var flxCheckboxMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100dp",
            "id": "flxCheckboxMain",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "right": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "50dp",
            "zIndex": 10
        }, {}, {});
        flxCheckboxMain.setDefaultUnit(kony.flex.DP);
        var flxCheckbox = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "30dp",
            "id": "flxCheckbox",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "right": "20dp",
            "skin": "slFbox",
            "width": "30dp",
            "zIndex": 1
        }, {}, {});
        flxCheckbox.setDefaultUnit(kony.flex.DP);
        var imgCheckbox = new kony.ui.Image2({
            "centerY": "50%",
            "height": "26dp",
            "id": "imgCheckbox",
            "isVisible": true,
            "right": "0dp",
            "skin": "slImage",
            "src": "radiobtn.png",
            "width": "26dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxCheckbox.add(imgCheckbox);
        flxCheckboxMain.add(flxCheckbox);
        flxEligibilityCriteria.add(flxMain, flxCheckboxMain);
        return flxEligibilityCriteria;
    }
})