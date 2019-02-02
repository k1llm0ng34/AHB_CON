define(function() {
    return function(controller) {
        var customFooter = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "isMaster": true,
            "height": "60dp",
            "id": "customFooter",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "f9f9",
            "top": "0dp",
            "width": "100%",
            "zIndex": 300
        }, {}, {});
        customFooter.setDefaultUnit(kony.flex.DP);
        var flxContainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "20dp",
            "right": "20dp",
            "skin": "slFbox",
            "top": "0dp",
            "zIndex": 1
        }, {}, {});
        flxContainer.setDefaultUnit(kony.flex.DP);
        var flxAccounts = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxAccounts",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "25%",
            "zIndex": 1
        }, {}, {});
        flxAccounts.setDefaultUnit(kony.flex.DP);
        var imgAccounts = new kony.ui.Image2({
            "centerX": "50%",
            "height": "20dp",
            "id": "imgAccounts",
            "isVisible": true,
            "skin": "slImage",
            "src": "accounts.png",
            "top": "10dp",
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblAccounts = new kony.ui.Label({
            "bottom": "10dp",
            "centerX": "50%",
            "id": "lblAccounts",
            "isVisible": true,
            "skin": "sknLblA0A0A0SSP20px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.accounts"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxAccSelect = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "4dp",
            "id": "flxAccSelect",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "sknFlx004b95",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxAccSelect.setDefaultUnit(kony.flex.DP);
        flxAccSelect.add();
        flxAccounts.add(imgAccounts, lblAccounts, flxAccSelect);
        var flxTransfer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxTransfer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "25%",
            "zIndex": 1
        }, {}, {});
        flxTransfer.setDefaultUnit(kony.flex.DP);
        var imgTransfer = new kony.ui.Image2({
            "centerX": "50%",
            "height": "20dp",
            "id": "imgTransfer",
            "isVisible": true,
            "skin": "slImage",
            "src": "transfer.png",
            "top": "10dp",
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblTransfer = new kony.ui.Label({
            "bottom": "10dp",
            "centerX": "50%",
            "id": "lblTransfer",
            "isVisible": true,
            "skin": "sknLblA0A0A0SSP20px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.transfer"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxTransferSel = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "4dp",
            "id": "flxTransferSel",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "sknFlx004b95",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxTransferSel.setDefaultUnit(kony.flex.DP);
        flxTransferSel.add();
        flxTransfer.add(imgTransfer, lblTransfer, flxTransferSel);
        var flxBillPay = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxBillPay",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "25%",
            "zIndex": 1
        }, {}, {});
        flxBillPay.setDefaultUnit(kony.flex.DP);
        var imgBillPay = new kony.ui.Image2({
            "centerX": "50%",
            "height": "20dp",
            "id": "imgBillPay",
            "isVisible": true,
            "skin": "slImage",
            "src": "billpay.png",
            "top": "10dp",
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblBillPay = new kony.ui.Label({
            "bottom": "10dp",
            "centerX": "50%",
            "id": "lblBillPay",
            "isVisible": true,
            "skin": "sknLblA0A0A0SSP20px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.billPay"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxBillSelected = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "4dp",
            "id": "flxBillSelected",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "sknFlx004b95",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxBillSelected.setDefaultUnit(kony.flex.DP);
        flxBillSelected.add();
        flxBillPay.add(imgBillPay, lblBillPay, flxBillSelected);
        var flxMore = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxMore",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "25%",
            "zIndex": 1
        }, {}, {});
        flxMore.setDefaultUnit(kony.flex.DP);
        var imgMore = new kony.ui.Image2({
            "centerX": "50%",
            "height": "20dp",
            "id": "imgMore",
            "isVisible": true,
            "skin": "slImage",
            "src": "more.png",
            "top": "10dp",
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblMore = new kony.ui.Label({
            "bottom": "10dp",
            "centerX": "50%",
            "id": "lblMore",
            "isVisible": true,
            "skin": "sknLblA0A0A0SSP20px",
            "text": kony.i18n.getLocalizedString("kony.mb.common.menu"),
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxMoreSelect = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "4dp",
            "id": "flxMoreSelect",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "sknFlx004b95",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxMoreSelect.setDefaultUnit(kony.flex.DP);
        flxMoreSelect.add();
        flxMore.add(imgMore, lblMore, flxMoreSelect);
        flxContainer.add(flxAccounts, flxTransfer, flxBillPay, flxMore);
        var flxTypeOneShadow = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "7dp",
            "id": "flxTypeOneShadow",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "sknFlxHeaderShadowInverted",
            "top": "-7dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxTypeOneShadow.setDefaultUnit(kony.flex.DP);
        flxTypeOneShadow.add();
        customFooter.add(flxContainer, flxTypeOneShadow);
        return customFooter;
    }
})