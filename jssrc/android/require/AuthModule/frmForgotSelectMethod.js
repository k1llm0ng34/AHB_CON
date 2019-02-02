define("AuthModule/frmForgotSelectMethod", function() {
    return function(controller) {
        function addWidgetsfrmForgotSelectMethod() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "56dp",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var flxHeaderShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "-5dp",
                "clipBounds": true,
                "height": "5dp",
                "id": "flxHeaderShadow",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "sknFlxHeaderShadow",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHeaderShadow.setDefaultUnit(kony.flex.DP);
            flxHeaderShadow.add();
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
            customHeader.btnRight.text = "CANCEL";
            customHeader.flxBack.isVisible = true;
            customHeader.flxBack.onClick = controller.AS_FlexContainer_h980a03dbef74691b361f427326a8caa;
            customHeader.flxSearch.isVisible = false;
            customHeader.lblLocateUs.text = "Forgot Credentials";
            flxHeader.add(flxHeaderShadow, customHeader);
            var flxMainContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "56dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxUser = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "33%",
                "id": "flxUser",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "sknFlx1a98ff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxUser.setDefaultUnit(kony.flex.DP);
            var flxUserImage = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "47dp",
                "id": "flxUserImage",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "sknFlxProfileImage",
                "top": "24dp",
                "width": "47dp",
                "zIndex": 1
            }, {}, {});
            flxUserImage.setDefaultUnit(kony.flex.DP);
            var imgUser = new kony.ui.Image2({
                "height": "100%",
                "id": "imgUser",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "userimg.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxUserImage.add(imgUser);
            var lblUserName = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblUserName",
                "isVisible": true,
                "skin": "sknLblffffffSSPReg36pxop100",
                "text": kony.i18n.getLocalizedString("kony.mb.Forgot.UserName"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var rtxForgotInfo = new kony.ui.RichText({
                "centerX": "50%",
                "id": "rtxForgotInfo",
                "isVisible": true,
                "linkSkin": "defRichTextLink",
                "skin": "sknRtxffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.Forgot.ForgotInfo"),
                "top": "10dp",
                "width": "75%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxUser.add(flxUserImage, lblUserName, rtxForgotInfo);
            var flxShadowUser = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxShadowUser",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShadowUser.setDefaultUnit(kony.flex.DP);
            flxShadowUser.add();
            var flxSelectCVV = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "55dp",
                "id": "flxSelectCVV",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "sknFlxBorder3e4f564px",
                "top": "30dp",
                "width": "87.50%",
                "zIndex": 1
            }, {}, {});
            flxSelectCVV.setDefaultUnit(kony.flex.DP);
            var imgSelectCVV = new kony.ui.Image2({
                "centerY": "50%",
                "height": "22dp",
                "id": "imgSelectCVV",
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
            var flxLineSelectCVV = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100dp",
                "id": "flxLineSelectCVV",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "40dp",
                "skin": "sknFlx3e4f56Op10",
                "top": "0dp",
                "width": "1dp",
                "zIndex": 1
            }, {}, {});
            flxLineSelectCVV.setDefaultUnit(kony.flex.DP);
            flxLineSelectCVV.add();
            var rtxSelectCVV = new kony.ui.RichText({
                "centerY": "50%",
                "id": "rtxSelectCVV",
                "isVisible": true,
                "left": "55dp",
                "skin": "sknRtx424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.Forgot.RtxSelectCVV"),
                "width": "65%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgArrowSelectCVV = new kony.ui.Image2({
                "centerY": "50%",
                "height": "14dp",
                "id": "imgArrowSelectCVV",
                "isVisible": true,
                "right": "6.25%",
                "skin": "slImage",
                "src": "chevronright.png",
                "width": "7dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSelectCVV.add(imgSelectCVV, flxLineSelectCVV, rtxSelectCVV, imgArrowSelectCVV);
            var flxOr = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "25dp",
                "id": "flxOr",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "sknFlxRounded3e4f56Op10",
                "top": "30dp",
                "width": "25dp",
                "zIndex": 1
            }, {}, {});
            flxOr.setDefaultUnit(kony.flex.DP);
            var lblOr = new kony.ui.Label({
                "centerX": "45%",
                "centerY": "47%",
                "id": "lblOr",
                "isVisible": true,
                "skin": "sknlbl727272SSPSSP79pr",
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
            var flxSelectSecurityCode = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "55dp",
                "id": "flxSelectSecurityCode",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "sknFlxBorder3e4f564px",
                "top": "30dp",
                "width": "87.50%",
                "zIndex": 1
            }, {}, {});
            flxSelectSecurityCode.setDefaultUnit(kony.flex.DP);
            var imgSelectSecurityCode = new kony.ui.Image2({
                "centerY": "50%",
                "height": "22dp",
                "id": "imgSelectSecurityCode",
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
            var flxLineSelectSecurityCode = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100dp",
                "id": "flxLineSelectSecurityCode",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "40dp",
                "skin": "sknFlx3e4f56Op10",
                "top": "0dp",
                "width": "1dp",
                "zIndex": 1
            }, {}, {});
            flxLineSelectSecurityCode.setDefaultUnit(kony.flex.DP);
            flxLineSelectSecurityCode.add();
            var rtxSelectSecurityCode = new kony.ui.RichText({
                "centerY": "50%",
                "id": "rtxSelectSecurityCode",
                "isVisible": true,
                "left": "55dp",
                "skin": "sknRtx424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.Forgot.RtxSelectSecurityCode"),
                "width": "70%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgArrowSelectSecurityCode = new kony.ui.Image2({
                "centerY": "50%",
                "height": "14dp",
                "id": "imgArrowSelectSecurityCode",
                "isVisible": true,
                "right": "6.25%",
                "skin": "slImage",
                "src": "chevronright.png",
                "width": "7dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSelectSecurityCode.add(imgSelectSecurityCode, flxLineSelectSecurityCode, rtxSelectSecurityCode, imgArrowSelectSecurityCode);
            flxMainContainer.add(flxUser, flxShadowUser, flxSelectCVV, flxOr, flxSelectSecurityCode);
            var flxPopup = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "10.50%",
                "id": "flxPopup",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "sknFlxf54b5e",
                "top": "0dp",
                "width": "100%",
                "zIndex": 200
            }, {}, {});
            flxPopup.setDefaultUnit(kony.flex.DP);
            var customPopup = new com.kmb.common.customPopup({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "customPopup",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxPopup.add(customPopup);
            this.add(flxHeader, flxMainContainer, flxPopup);
        };
        return [{
            "addWidgets": addWidgetsfrmForgotSelectMethod,
            "enabledForIdleTimeout": true,
            "id": "frmForgotSelectMethod",
            "init": controller.AS_Form_bbb32a4fc1014614a96803915745ed14,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": true,
            "preShow": controller.AS_Form_jbf0490456984f77ab0e3a39d7bda84f,
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.ForgotCredentials.Title")
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
            "titleBar": false,
            "titleBarSkin": "sknTitle1a98ffffffff30px",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});