define("NewUserModule/frmOBSuccess", function() {
    return function(controller) {
        function addWidgetsfrmOBSuccess() {
            this.setDefaultUnit(kony.flex.DP);
            var flxResult = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxResult",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxResult.setDefaultUnit(kony.flex.DP);
            var imgResult = new kony.ui.Image2({
                "centerX": "50%",
                "height": "61dp",
                "id": "imgResult",
                "isVisible": true,
                "left": "136dp",
                "skin": "slImage",
                "src": "confirmation.png",
                "top": "31%",
                "width": "61dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxResultTexts = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40%",
                "id": "flxResultTexts",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "40%",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxResultTexts.setDefaultUnit(kony.flex.DP);
            var rtxTitle = new kony.ui.RichText({
                "centerX": "50%",
                "id": "rtxTitle",
                "isVisible": true,
                "left": "155dp",
                "linkSkin": "defRichTextLink",
                "skin": "sknRtx424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.OBSuccess.Title"),
                "top": "20dp",
                "width": "76%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxResultTexts.add(rtxTitle);
            var btnContinueResult = new kony.ui.Button({
                "bottom": "14%",
                "height": "40dp",
                "id": "btnContinueResult",
                "isVisible": false,
                "right": "6.25%",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxResult.add(imgResult, flxResultTexts, btnContinueResult);
            var flxJustAMoment = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxJustAMoment",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxJustAMoment.setDefaultUnit(kony.flex.DP);
            var flxCircleBlue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "65dp",
                "id": "flxCircleBlue",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "sknFlx0095e4Circle",
                "top": "35%",
                "width": "65dp",
                "zIndex": 1
            }, {}, {});
            flxCircleBlue.setDefaultUnit(kony.flex.DP);
            flxCircleBlue.add();
            var lblJustAMoment = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblJustAMoment",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.OB.JustAMoment"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "47.50%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxJustAMoment.add(flxCircleBlue, lblJustAMoment);
            this.add(flxResult, flxJustAMoment);
        };
        return [{
            "addWidgets": addWidgetsfrmOBSuccess,
            "enabledForIdleTimeout": true,
            "id": "frmOBSuccess",
            "init": controller.AS_Form_cc710570e51243648838747da9cbb4b3,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": true,
            "preShow": controller.AS_Form_e4f1abec49d24f85bf3088289e6e8a9a,
            "skin": "sknFrmffffff"
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