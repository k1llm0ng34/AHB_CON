define("EnrollModule/frmEnrollSecurityCheck", function() {
    return function(controller) {
        function addWidgetsfrmEnrollSecurityCheck() {
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
            customHeader.btnRight.text = "CANCEL";
            customHeader.btnRight.onClick = controller.AS_Button_gf3ed60b012241e891cfa9369d7cc22c;
            customHeader.flxBack.isVisible = true;
            customHeader.flxSearch.isVisible = false;
            customHeader.lblLocateUs.text = "CVV Number";
            flxHeader.add(customHeader);
            var flxMainContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0dp",
                "bounces": true,
                "centerX": "50%",
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxMainContainer",
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
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxSecurityCheck = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "175dp",
                "id": "flxSecurityCheck",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlx1a98ff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxSecurityCheck.setDefaultUnit(kony.flex.DP);
            var lblSecurityCheck = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblSecurityCheck",
                "isVisible": true,
                "skin": "sknLblffffffSSP30px",
                "text": kony.i18n.getLocalizedString("kony.mb.EnrollSecurityCheck.SecurityCheck"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "52dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblDescription = new kony.ui.Label({
                "bottom": "15dp",
                "centerX": "50%",
                "id": "lblDescription",
                "isVisible": true,
                "skin": "sknLblffffffSSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.enroll.verification"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "85dp",
                "width": "79%",
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
            flxSecurityCheck.add(lblSecurityCheck, lblDescription, flxSeparator);
            var flxSecurityCheckOptions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxSecurityCheckOptions",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "f9f9",
                "top": "175dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxSecurityCheckOptions.setDefaultUnit(kony.flex.DP);
            var flxCVV = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55dp",
                "id": "flxCVV",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknflxffffffBorderf1f1f13px",
                "top": "30dp",
                "zIndex": 1
            }, {}, {});
            flxCVV.setDefaultUnit(kony.flex.DP);
            var flxImgCVV = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
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
                "height": "100%",
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
                "height": "100%",
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
                "centerY": "50%",
                "height": "45dp",
                "id": "rtxCVV",
                "isVisible": true,
                "left": "53dp",
                "linkSkin": "defRichTextLink",
                "right": "50dp",
                "skin": "sknRtx424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.EnterCVVInfo"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxCVV.add(flxImgCVV, flxArrowCVV, rtxCVV);
            var flxSecurityCode = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55dp",
                "id": "flxSecurityCode",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknflxffffffBorderf1f1f13px",
                "top": "190dp",
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
                "text": kony.i18n.getLocalizedString("kony.mb.Enroll.EnterSecurityCode"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSecurityCode.add(flxImgSecurityCode, flxArrowSecurityCode, rtxSecurityCode);
            var flxOr = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "26dp",
                "id": "flxOr",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "top": "125dp",
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
            flxSecurityCheckOptions.add(flxCVV, flxSecurityCode, flxOr);
            flxMainContainer.add(flxSecurityCheck, flxSecurityCheckOptions);
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
            "addWidgets": addWidgetsfrmEnrollSecurityCheck,
            "enabledForIdleTimeout": true,
            "id": "frmEnrollSecurityCheck",
            "init": controller.AS_Form_a6c2f11db0e24c63930bec97a7a957fe,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_d3e22f232a4447c8aad8b7ddd9de3b15,
            "skin": "slForm",
            "title": kony.i18n.getLocalizedString("kony.mb.EnrollSecurityCheck.Title")
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