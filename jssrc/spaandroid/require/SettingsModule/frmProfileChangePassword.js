define("SettingsModule/frmProfileChangePassword", function() {
    return function(controller) {
        function addWidgetsfrmProfileChangePassword() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "56dp",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxffffffShadow",
                "top": "0%",
                "width": "100%",
                "zIndex": 30
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var customHeader = new com.kmb.common.customHeader({
                "clipBounds": false,
                "height": "100%",
                "id": "customHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            customHeader.btnRight.isVisible = true;
            customHeader.btnRight.text = "Cancel";
            customHeader.flxSearch.isVisible = false;
            customHeader.lblLocateUs.text = "Change Password";
            flxHeader.add(customHeader);
            var flxChangePasswordMain = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0dp",
                "bounces": true,
                "centerX": "50%",
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxChangePasswordMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknFlxScrlfafafa",
                "top": "56dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxChangePasswordMain.setDefaultUnit(kony.flex.DP);
            var flxChangePassword = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "175dp",
                "id": "flxChangePassword",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlx1a98ff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxChangePassword.setDefaultUnit(kony.flex.DP);
            var imgUser = new kony.ui.Image2({
                "centerX": "50%",
                "height": "50dp",
                "id": "imgUser",
                "isVisible": true,
                "left": "130dp",
                "skin": "slImage",
                "src": "userimg.png",
                "top": "30dp",
                "width": "50dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblSecurityCheck = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblSecurityCheck",
                "isVisible": true,
                "skin": "sknLblffffffSSP30px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.Forgot.UserName\")",
                "textStyle": {},
                "top": "82dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblDescription = new kony.ui.Label({
                "bottom": "25dp",
                "centerX": "50%",
                "id": "lblDescription",
                "isVisible": true,
                "skin": "sknLblffffff22px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.Forgot.ForgotInfo\")",
                "textStyle": {},
                "width": "79%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
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
            flxChangePassword.add(imgUser, lblSecurityCheck, lblDescription, flxSeparator);
            var flxChangePasswordOptions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxChangePasswordOptions",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "f9f9",
                "top": "175dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxChangePasswordOptions.setDefaultUnit(kony.flex.DP);
            var flxSecurityCode = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55dp",
                "id": "flxSecurityCode",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "30dp",
                "right": "10dp",
                "skin": "sknflxffffffBorderf1f1f13px",
                "top": "30dp",
                "zIndex": 1
            }, {}, {});
            flxSecurityCode.setDefaultUnit(kony.flex.DP);
            var flxImgSecurityCode = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxImgSecurityCode",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "45dp",
                "zIndex": 1
            }, {}, {});
            flxImgSecurityCode.setDefaultUnit(kony.flex.DP);
            var imgSecurityCode = new kony.ui.Image2({
                "centerY": "50%",
                "height": "24dp",
                "id": "imgSecurityCode",
                "isVisible": true,
                "left": "10dp",
                "skin": "slImage",
                "src": "securitycode.png",
                "width": "22dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxSepaartor3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxSepaartor3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "0dp",
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "1dp",
                "zIndex": 1
            }, {}, {});
            flxSepaartor3.setDefaultUnit(kony.flex.DP);
            flxSepaartor3.add();
            flxImgSecurityCode.add(imgSecurityCode, flxSepaartor3);
            var flxArrowSecurityCode = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxArrowSecurityCode",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "20dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {}, {});
            flxArrowSecurityCode.setDefaultUnit(kony.flex.DP);
            var imgArrowSecurityCode = new kony.ui.Image2({
                "centerY": "50%",
                "height": "14dp",
                "id": "imgArrowSecurityCode",
                "isVisible": true,
                "right": "0dp",
                "skin": "slImage",
                "src": "calenderarrowright.png",
                "width": "7dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxArrowSecurityCode.add(imgArrowSecurityCode);
            var rtxSecurityCode = new kony.ui.RichText({
                "centerY": "50%",
                "height": "45dp",
                "id": "rtxSecurityCode",
                "isVisible": true,
                "left": "53dp",
                "linkSkin": "defRichTextLink",
                "right": "45dp",
                "skin": "sknRtx424242SSP26px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.Enroll.EnterSecurityCode\")",
                "top": "0dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSecurityCode.add(flxImgSecurityCode, flxArrowSecurityCode, rtxSecurityCode);
            var flxCVV = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxCVV",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknflxffffffBorderf1f1f13px",
                "top": "170dp",
                "zIndex": 1
            }, {}, {});
            flxCVV.setDefaultUnit(kony.flex.DP);
            var flxImgCVV = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxImgCVV",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "45dp",
                "zIndex": 1
            }, {}, {});
            flxImgCVV.setDefaultUnit(kony.flex.DP);
            var imgCVV = new kony.ui.Image2({
                "centerY": "50%",
                "height": "24dp",
                "id": "imgCVV",
                "isVisible": true,
                "left": "10dp",
                "skin": "slImage",
                "src": "entercvvicon.png",
                "width": "22dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxSepaartor2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxSepaartor2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "0dp",
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "1dp",
                "zIndex": 1
            }, {}, {});
            flxSepaartor2.setDefaultUnit(kony.flex.DP);
            flxSepaartor2.add();
            flxImgCVV.add(imgCVV, flxSepaartor2);
            var flxArrowCVV = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxArrowCVV",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "20dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {}, {});
            flxArrowCVV.setDefaultUnit(kony.flex.DP);
            var imgArrowCVV = new kony.ui.Image2({
                "centerY": "50%",
                "height": "14dp",
                "id": "imgArrowCVV",
                "isVisible": true,
                "right": "0dp",
                "skin": "slImage",
                "src": "calenderarrowright.png",
                "width": "7dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxArrowCVV.add(imgArrowCVV);
            var rtxCVV = new kony.ui.RichText({
                "height": "45dp",
                "id": "rtxCVV",
                "isVisible": true,
                "left": "53dp",
                "linkSkin": "defRichTextLink",
                "right": "50dp",
                "skin": "sknRtx424242SSP26px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.common.EnterCVVInfo\")",
                "top": "0dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxCVV.add(flxImgCVV, flxArrowCVV, rtxCVV);
            var flxOr = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "26dp",
                "id": "flxOr",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "top": "105dp",
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
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.Forgot.Or\")",
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            flxOr.add(lblOr);
            flxChangePasswordOptions.add(flxSecurityCode, flxCVV, flxOr);
            flxChangePasswordMain.add(flxChangePassword, flxChangePasswordOptions);
            this.add(flxHeader, flxChangePasswordMain);
        };
        return [{
            "addWidgets": addWidgetsfrmProfileChangePassword,
            "enabledForIdleTimeout": true,
            "id": "frmProfileChangePassword",
            "init": controller.AS_Form_aa551331175646db97fc236170a8c44c,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_h887e5a31486436885548d5189565300,
            "skin": "slForm",
            "i18n_title": "kony.i18n.getLocalizedString(\"kony.mb.ProfileChangeAndUpdatePassword.Title\")"
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