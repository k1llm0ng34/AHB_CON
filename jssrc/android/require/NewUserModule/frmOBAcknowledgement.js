define("NewUserModule/frmOBAcknowledgement", function() {
    return function(controller) {
        function addWidgetsfrmOBAcknowledgement() {
            this.setDefaultUnit(kony.flex.DP);
            var flxStatus = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "190dp",
                "id": "flxStatus",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxStatus.setDefaultUnit(kony.flex.DP);
            var imgStatus = new kony.ui.Image2({
                "centerX": "50%",
                "height": "60dp",
                "id": "imgStatus",
                "isVisible": true,
                "skin": "slImage",
                "src": "confirmation.png",
                "top": "50dp",
                "width": "60dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblStatus = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblStatus",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.NAOAck.Status"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "130dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxStatus.add(imgStatus, lblStatus);
            var flxMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "75dp",
                "clipBounds": true,
                "id": "flxMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "190dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMain.setDefaultUnit(kony.flex.DP);
            var lblProductsSelected = new kony.ui.Label({
                "id": "lblProductsSelected",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.NAOAck.ProductsSelected"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "20dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var segSelectedProducts = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgProduct": "product.png",
                    "lblProduct": "Premium Savings Account",
                    "lblProductInfo": "Your Account is now active"
                }, {
                    "imgProduct": "product.png",
                    "lblProduct": "Premium Savings Account",
                    "lblProductInfo": "Your Account is now active"
                }, {
                    "imgProduct": "product.png",
                    "lblProduct": "Premium Savings Account",
                    "lblProductInfo": "Your Account is now active"
                }],
                "groupCells": false,
                "id": "segSelectedProducts",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxProductAcknowledgement",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "50dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxMain": "flxMain",
                    "flxProductAcknowledgement": "flxProductAcknowledgement",
                    "imgProduct": "imgProduct",
                    "lblProduct": "lblProduct",
                    "lblProductInfo": "lblProductInfo"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxMain.add(lblProductsSelected, segSelectedProducts);
            var flxSignature = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxSignature",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "190dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSignature.setDefaultUnit(kony.flex.DP);
            var imgSign = new kony.ui.Image2({
                "centerX": "50%",
                "height": "75dp",
                "id": "imgSign",
                "isVisible": true,
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "90dp",
                "width": "75dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblTapHere = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblTapHere",
                "isVisible": true,
                "skin": "sknLbl424242SSP22px26",
                "text": kony.i18n.getLocalizedString("kony.mb.OBAcknowledgement.TapHere"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "30dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblDescription = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblDescription",
                "isVisible": true,
                "skin": "sknLbl727272SSPLight22px",
                "text": kony.i18n.getLocalizedString("kony.mb.OBAcknowledgement.Description"),
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
            flxSignature.add(imgSign, lblTapHere, lblDescription);
            var lblGoToAccounts = new kony.ui.Button({
                "bottom": "20dp",
                "focusSkin": "sknBtn0095e426pxEnabled",
                "height": "40dp",
                "id": "lblGoToAccounts",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e426pxEnabled",
                "text": kony.i18n.getLocalizedString("kony.mb.NUO.loginToProceed"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            this.add(flxStatus, flxMain, flxSignature, lblGoToAccounts);
        };
        return [{
            "addWidgets": addWidgetsfrmOBAcknowledgement,
            "enabledForIdleTimeout": true,
            "id": "frmOBAcknowledgement",
            "init": controller.AS_Form_j5a8b88a8d24448d9f28a539840941c5,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_d16ef93d33fe4c2881f52d6e191e9ea9,
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