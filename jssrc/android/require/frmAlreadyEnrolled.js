define("frmAlreadyEnrolled", function() {
    return function(controller) {
        function addWidgetsfrmAlreadyEnrolled() {
            this.setDefaultUnit(kony.flex.DP);
            var flxSecurityCheckMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxSecurityCheckMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSecurityCheckMain.setDefaultUnit(kony.flex.DP);
            var flxSecurityCheck = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "190dp",
                "id": "flxSecurityCheck",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlx1a98ff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSecurityCheck.setDefaultUnit(kony.flex.DP);
            var lblDescription = new kony.ui.Label({
                "bottom": "15dp",
                "centerX": "50%",
                "id": "lblDescription",
                "isVisible": true,
                "skin": "sknLblffffffSSP30px",
                "text": "Hello, John. Our records show that you have already enrolled for online banking.",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "94dp",
                "width": "89%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
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
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeparator.setDefaultUnit(kony.flex.DP);
            flxSeparator.add();
            var imgUser = new kony.ui.Image2({
                "centerX": "50%",
                "height": "26dp",
                "id": "imgUser",
                "isVisible": true,
                "skin": "slImage",
                "src": "usericon.png",
                "top": "60dp",
                "width": "26dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSecurityCheck.add(lblDescription, flxSeparator, imgUser);
            var flxSecurityCheckOptions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxSecurityCheckOptions",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "f9f9",
                "top": "190dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxSecurityCheckOptions.setDefaultUnit(kony.flex.DP);
            var btnLoginHere = new kony.ui.Button({
                "height": "40dp",
                "id": "btnLoginHere",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.AlreadyEnrolled.LoginHere"),
                "top": "85dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxOr = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50.00%",
                "clipBounds": true,
                "height": "26dp",
                "id": "flxOr",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "top": "165dp",
                "width": "26dp",
                "zIndex": 1
            }, {}, {});
            flxOr.setDefaultUnit(kony.flex.DP);
            var lblOr = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblOr",
                "isVisible": true,
                "skin": "sknLbl727272SSPReg22px",
                "text": kony.i18n.getLocalizedString("kony.mb.Forgot.Or"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxOr.add(lblOr);
            var btnChangeDetails = new kony.ui.Button({
                "height": "40dp",
                "id": "btnChangeDetails",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknbtn0095e4Border0095e4SSP26pxffffff",
                "text": kony.i18n.getLocalizedString("kony.mb.AlreadyEnrolled.ChangeDetails"),
                "top": "225dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSecurityCheckOptions.add(btnLoginHere, flxOr, btnChangeDetails);
            flxSecurityCheckMain.add(flxSecurityCheck, flxSecurityCheckOptions);
            this.add(flxSecurityCheckMain);
        };
        return [{
            "addWidgets": addWidgetsfrmAlreadyEnrolled,
            "enabledForIdleTimeout": true,
            "id": "frmAlreadyEnrolled",
            "init": controller.AS_Form_g377ee87228b4966a960d71b31ace021,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_e6c07ed8004b4feea886e08fa99e5423,
            "skin": "sknFrm1a98ffGradient10"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarSkin": "slTitleBar",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});