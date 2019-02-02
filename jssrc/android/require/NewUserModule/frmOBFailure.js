define("NewUserModule/frmOBFailure", function() {
    return function(controller) {
        function addWidgetsfrmOBFailure() {
            this.setDefaultUnit(kony.flex.DP);
            var flxResult = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxResult",
                "isVisible": true,
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
                "src": "error.png",
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
                "text": "Congratulations John!\nYour account is now active",
                "top": "20dp",
                "width": "76%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblSubTitle = new kony.ui.Label({
                "centerX": "50.00%",
                "id": "lblSubTitle",
                "isVisible": true,
                "left": "160dp",
                "skin": "sknLbl424242SSP22px",
                "text": "Label",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": "76%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxResultTexts.add(rtxTitle, lblSubTitle);
            var btnContinueResult = new kony.ui.Button({
                "bottom": "14%",
                "height": "40dp",
                "id": "btnContinueResult",
                "isVisible": true,
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
            var btnCancelResult = new kony.ui.Button({
                "bottom": "4%",
                "centerX": "50%",
                "height": "40dp",
                "id": "btnCancelResult",
                "isVisible": true,
                "skin": "sknBtn0095e428px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.Cancel"),
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxCallNow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "32%",
                "centerX": "50%",
                "clipBounds": true,
                "height": "45dp",
                "id": "flxCallNow",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "onClick": controller.AS_FlexContainer_fbb3095129c3490cb5f840a1da04be95,
                "skin": "sknFlxBorder3e4f564px",
                "width": "87.50%",
                "zIndex": 3
            }, {}, {});
            flxCallNow.setDefaultUnit(kony.flex.DP);
            var imgCallNow = new kony.ui.Image2({
                "centerX": "35%",
                "centerY": "50%",
                "height": "22dp",
                "id": "imgCallNow",
                "isVisible": true,
                "left": "10dp",
                "skin": "slImage",
                "src": "contactus.png",
                "width": "22dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblCallNow = new kony.ui.Label({
                "centerX": "55%",
                "centerY": "50%",
                "id": "lblCallNow",
                "isVisible": true,
                "skin": "sknLbl0095e4SSPRegular26px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.CallNow"),
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
            flxCallNow.add(imgCallNow, lblCallNow);
            flxResult.add(imgResult, flxResultTexts, btnContinueResult, btnCancelResult, flxCallNow);
            this.add(flxResult);
        };
        return [{
            "addWidgets": addWidgetsfrmOBFailure,
            "enabledForIdleTimeout": true,
            "id": "frmOBFailure",
            "init": controller.AS_Form_c695bf8f9fc14e80a558d578e57595f4,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": true,
            "preShow": controller.AS_Form_ge8f607d02d74d1984e4a19fe3862f46,
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