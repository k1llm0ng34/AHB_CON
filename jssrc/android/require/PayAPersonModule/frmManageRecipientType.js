define("PayAPersonModule/frmManageRecipientType", function() {
    return function(controller) {
        function addWidgetsfrmManageRecipientType() {
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
                "top": "0dp",
                "width": "100%",
                "zIndex": 8
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
            customHeader.flxSearch.isVisible = false;
            customHeader.lblLocateUs.text = "Select Account Type";
            flxHeader.add(customHeader);
            var flxTransactionModeMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxTransactionModeMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "f9f9",
                "top": "56dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTransactionModeMain.setDefaultUnit(kony.flex.DP);
            var segRecipientType = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "data": [
                    [{
                            "imgUpArrow": "imagedrag.png",
                            "lblHeader": ""
                        },
                        [{
                            "imgArrow": "chevron.png",
                            "lblTransactionMode": "My Kony Accounts",
                            "lblTransactionModeDescription": "Transfer money to your other bank accounts"
                        }, {
                            "imgArrow": "chevron.png",
                            "lblTransactionMode": "My Kony Accounts",
                            "lblTransactionModeDescription": "Transfer money to your other bank accounts"
                        }, {
                            "imgArrow": "chevron.png",
                            "lblTransactionMode": "My Kony Accounts",
                            "lblTransactionModeDescription": "Transfer money to your other bank accounts"
                        }]
                    ],
                    [{
                            "imgUpArrow": "imagedrag.png",
                            "lblHeader": ""
                        },
                        [{
                            "imgArrow": "chevron.png",
                            "lblTransactionMode": "My Kony Accounts",
                            "lblTransactionModeDescription": "Transfer money to your other bank accounts"
                        }, {
                            "imgArrow": "chevron.png",
                            "lblTransactionMode": "My Kony Accounts",
                            "lblTransactionModeDescription": "Transfer money to your other bank accounts"
                        }, {
                            "imgArrow": "chevron.png",
                            "lblTransactionMode": "My Kony Accounts",
                            "lblTransactionModeDescription": "Transfer money to your other bank accounts"
                        }]
                    ]
                ],
                "groupCells": false,
                "id": "segRecipientType",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "seg2Focus",
                "rowTemplate": "flxTransactionMode",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "sectionHeaderTemplate": "flxTransHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxArrow": "flxArrow",
                    "flxSeparator": "flxSeparator",
                    "flxShadowBottom": "flxShadowBottom",
                    "flxTransHeader": "flxTransHeader",
                    "flxTransactionMode": "flxTransactionMode",
                    "flxTypeOneShadow": "flxTypeOneShadow",
                    "imgArrow": "imgArrow",
                    "imgUpArrow": "imgUpArrow",
                    "lblHeader": "lblHeader",
                    "lblTransactionMode": "lblTransactionMode",
                    "lblTransactionModeDescription": "lblTransactionModeDescription"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxTransactionModeMain.add(segRecipientType);
            var flxFooter = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "60dp",
                "id": "flxFooter",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "f9f9",
                "width": "100%",
                "zIndex": 8
            }, {}, {});
            flxFooter.setDefaultUnit(kony.flex.DP);
            var flxHeaderShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "flxHeaderShadow",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "sknFlxHeaderShadow",
                "top": "-5dp",
                "width": "100%",
                "zIndex": 20
            }, {}, {});
            flxHeaderShadow.setDefaultUnit(kony.flex.DP);
            flxHeaderShadow.add();
            var customFooter = new com.kmb.common.customFooter({
                "clipBounds": false,
                "height": "60dp",
                "id": "customFooter",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            customFooter.top = "0dp";
            customFooter.zIndex = 1;
            customFooter.flxAccSelect.isVisible = false;
            customFooter.flxBillSelected.isVisible = false;
            customFooter.flxMoreSelect.isVisible = false;
            flxFooter.add(flxHeaderShadow, customFooter);
            this.add(flxHeader, flxTransactionModeMain, flxFooter);
        };
        return [{
            "addWidgets": addWidgetsfrmManageRecipientType,
            "enabledForIdleTimeout": true,
            "id": "frmManageRecipientType",
            "init": controller.AS_Form_bd5bbb96af8a4fa58cca836af5ac8db8,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_a744faf4e4b74f6b912131266ffc0921,
            "skin": "sknFrmf9f9f9",
            "title": kony.i18n.getLocalizedString("kony.mb.ManageRecipientType.Title")
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