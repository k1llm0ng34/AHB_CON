define("BillPayModule/frmBillPayPayeeAddressList", function() {
    return function(controller) {
        function addWidgetsfrmBillPayPayeeAddressList() {
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
                "zIndex": 9
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var flxSeparatorHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparatorHeader",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSeparatorHeader.setDefaultUnit(kony.flex.DP);
            flxSeparatorHeader.add();
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
            customHeader.flxSearch.isVisible = false;
            customHeader.lblLocateUs.text = "Payee Address";
            flxHeader.add(flxSeparatorHeader, customHeader);
            var flxHeaderSearchbox = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxHeaderSearchbox",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxffffffShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 11
            }, {}, {});
            flxHeaderSearchbox.setDefaultUnit(kony.flex.DP);
            var customSearchbox = new com.kmb.Search.customSearchbox({
                "clipBounds": false,
                "height": "40dp",
                "id": "customSearchbox",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            customSearchbox.top = "0dp";
            flxHeaderSearchbox.add(customSearchbox);
            var flxMainContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "70dp",
                "bounces": true,
                "clipBounds": false,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "56dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxToastDummy = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "65dp",
                "id": "flxToastDummy",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "sknFlxHeaderShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxToastDummy.setDefaultUnit(kony.flex.DP);
            flxToastDummy.add();
            var flxSearch = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50.12%",
                "clipBounds": true,
                "height": "55dp",
                "id": "flxSearch",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "25dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSearch.setDefaultUnit(kony.flex.DP);
            var flxSearchMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxSearchMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "sknFlx1a98ff",
                "top": "-0.50%",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxSearchMain.setDefaultUnit(kony.flex.DP);
            var imgSearchIcon = new kony.ui.Image2({
                "centerY": "50%",
                "height": "15dp",
                "id": "imgSearchIcon",
                "isVisible": true,
                "left": "30dp",
                "skin": "slImage",
                "src": "search.png",
                "width": "15dp",
                "zIndex": 10
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var tbxSearch = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxSSPf1f1f1B",
                "height": "35dp",
                "id": "tbxSearch",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "20dp",
                "i18n_placeholder": "kony.i18n.getLocalizedString(\"kony.mb.common.SearchByPayeeName\")",
                "right": "20dp",
                "secureTextEntry": false,
                "skin": "sknTbxSSPf1f1f1B",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0dp",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [35, 3, 1, 3],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false
            });
            flxSearchMain.add(imgSearchIcon, tbxSearch);
            var flxSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 1000
            }, {}, {});
            flxSeperator.setDefaultUnit(kony.flex.DP);
            flxSeperator.add();
            flxSearch.add(flxSearchMain, flxSeperator);
            var flxShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "5dp",
                "id": "flxShadow",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "sknFlxHeaderShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShadow.setDefaultUnit(kony.flex.DP);
            flxShadow.add();
            var segAddresses = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [
                    [{
                            "imgUpArrow": "imagedrag.png",
                            "lblHeader": "Available Addresses"
                        },
                        [{
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }, {
                            "imgDelete": "deleteicon.png",
                            "lblAccountBal": "Label",
                            "lblAccountBalValue": "Label",
                            "lblAccountName": "Label",
                            "lblAccountNumber": "-X4536",
                            "lblBankName": "Label",
                            "lblDelete": "Delete"
                        }]
                    ]
                ],
                "groupCells": false,
                "id": "segAddresses",
                "isVisible": true,
                "left": "0dp",
                "minHeight": "85%",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxAccountsNoImage",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "sectionHeaderTemplate": "flxTransHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "-5dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxAccountName": "flxAccountName",
                    "flxAccountsNoImage": "flxAccountsNoImage",
                    "flxDelete": "flxDelete",
                    "flxMain": "flxMain",
                    "flxSeparator": "flxSeparator",
                    "flxShadowBottom": "flxShadowBottom",
                    "flxTransHeader": "flxTransHeader",
                    "flxTypeOneShadow": "flxTypeOneShadow",
                    "imgDelete": "imgDelete",
                    "imgUpArrow": "imgUpArrow",
                    "lblAccountBal": "lblAccountBal",
                    "lblAccountBalValue": "lblAccountBalValue",
                    "lblAccountName": "lblAccountName",
                    "lblAccountNumber": "lblAccountNumber",
                    "lblBankName": "lblBankName",
                    "lblDelete": "lblDelete",
                    "lblHeader": "lblHeader"
                },
                "widgetSkin": "seg2Normal",
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxMainContainer.add(flxToastDummy, flxSearch, flxShadow, segAddresses);
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
                "zIndex": 201
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
            var flxAddManually = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": 70,
                "id": "flxAddManually",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "skin": "f9f9",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxAddManually.setDefaultUnit(kony.flex.DP);
            var flxSeparatorAddManually = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparatorAddManually",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSeparatorAddManually.setDefaultUnit(kony.flex.DP);
            flxSeparatorAddManually.add();
            var lblUnableToFind = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblUnableToFind",
                "isVisible": true,
                "skin": "sknLbl727272SSPReg22px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.BillPay.UnableToFindPayee\")",
                "textStyle": {},
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 6
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblAddManually = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblAddManually",
                "isVisible": true,
                "skin": "sknLbl0095e4SSPRegular26px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.BillPay.AddPayeeManually\")",
                "textStyle": {},
                "top": "2dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 6
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            flxAddManually.add(flxSeparatorAddManually, lblUnableToFind, lblAddManually);
            var flxBlueBg = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45%",
                "id": "flxBlueBg",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxGradientBlue",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBlueBg.setDefaultUnit(kony.flex.DP);
            flxBlueBg.add();
            this.add(flxHeader, flxHeaderSearchbox, flxMainContainer, flxPopup, flxAddManually, flxBlueBg);
        };
        return [{
            "addWidgets": addWidgetsfrmBillPayPayeeAddressList,
            "bounces": false,
            "enableScrolling": true,
            "enabledForIdleTimeout": true,
            "id": "frmBillPayPayeeAddressList",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_d8edde9aaedb4809a0ced1972b357ba1,
            "skin": "sknFrmffffff",
            "i18n_title": "kony.i18n.getLocalizedString(\"kony.mb.BillPaySearchPayee.Title\")"
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