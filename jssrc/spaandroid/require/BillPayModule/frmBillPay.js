define("BillPayModule/frmBillPay", function() {
    return function(controller) {
        function addWidgetsfrmBillPay() {
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
            customHeader.flxHeaderShadow.isVisible = false;
            customHeader.flxSearch.isVisible = false;
            customHeader.imgBack.src = "hamburger.png";
            customHeader.lblLocateUs.text = "Bill Pay";
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
                "zIndex": 10
            }, {}, {});
            flxHeaderSearchbox.setDefaultUnit(kony.flex.DP);
            var customSearchbox = new com.kmb.Search.customSearchbox({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
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
            customSearchbox.tbxSearch.placeholder = "Search ";
            flxHeaderSearchbox.add(customSearchbox);
            var flxMainContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "63dp",
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
                "zIndex": 3
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
                "centerX": "50%",
                "clipBounds": true,
                "height": "55dp",
                "id": "flxSearch",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
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
                "skin": "slFbox",
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
                "i18n_placeholder": "kony.i18n.getLocalizedString(\"kony.mb.ExternalAccounts.Search\")",
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
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
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
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "sknFlxHeaderShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShadow.setDefaultUnit(kony.flex.DP);
            flxShadow.add();
            var flxTransferOptions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "90dp",
                "id": "flxTransferOptions",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "-1dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTransferOptions.setDefaultUnit(kony.flex.DP);
            var flxPayABill = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "30%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxPayABill",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "slFbox",
                "top": "0dp",
                "width": "30%",
                "zIndex": 1
            }, {}, {});
            flxPayABill.setDefaultUnit(kony.flex.DP);
            var imgPayAPerson = new kony.ui.Image2({
                "centerX": "50%",
                "height": "35dp",
                "id": "imgPayAPerson",
                "isVisible": true,
                "skin": "slImage",
                "src": "billpayheader.png",
                "top": "15dp",
                "width": "35dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblPayAPerson = new kony.ui.Label({
                "bottom": "15dp",
                "centerX": "50%",
                "id": "lblPayAPerson",
                "isVisible": true,
                "skin": "sknLblffffff22px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.BillPay.PayABill\")",
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
            flxPayABill.add(imgPayAPerson, lblPayAPerson);
            var flxManage = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "70%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxManage",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "slFbox",
                "top": "0dp",
                "width": "30%",
                "zIndex": 1
            }, {}, {});
            flxManage.setDefaultUnit(kony.flex.DP);
            var imgManage = new kony.ui.Image2({
                "centerX": "50%",
                "height": "35dp",
                "id": "imgManage",
                "isVisible": true,
                "skin": "slImage",
                "src": "manageheader.png",
                "top": "15dp",
                "width": "35dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblManage = new kony.ui.Label({
                "bottom": "15dp",
                "centerX": "50%",
                "id": "lblManage",
                "isVisible": true,
                "skin": "sknLblffffff22px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.Transfers.Manage\")",
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
            flxManage.add(imgManage, lblManage);
            flxTransferOptions.add(flxPayABill, flxManage);
            var flxSeperator2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "25dp",
                "id": "flxSeperator2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxBlueHeaderShadow",
                "top": "-25dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSeperator2.setDefaultUnit(kony.flex.DP);
            flxSeperator2.add();
            var segTransactions = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [
                    [{
                            "imgUpArrow": "",
                            "lblHeader": "kony.i18n.getLocalizedString(\"kony.mb.accdetails.pendingTransactions\")"
                        },
                        [{
                            "imgBillPay": "deleteicon.png",
                            "imgDelete": "deleteicon.png",
                            "imgebill": "ebill.png",
                            "lblAccountBal": "Due on: 05/14/2018",
                            "lblAccountBalValue": "sCSDcas",
                            "lblAccountName": "asdasd",
                            "lblAccountNumber": "asdasc",
                            "lblBankName": "sddcs",
                            "lblBillPay": "kony.i18n.getLocalizedString(\"kony.mb.BillPay.VIEWBILL\")",
                            "lblDelete": "kony.i18n.getLocalizedString(\"kony.mb.BillPay.VIEWBILL\")"
                        }, {
                            "imgBillPay": "deleteicon.png",
                            "imgDelete": "deleteicon.png",
                            "imgebill": "ebill.png",
                            "lblAccountBal": "Due on: 05/14/2018",
                            "lblAccountBalValue": "sCSDcas",
                            "lblAccountName": "asdasd",
                            "lblAccountNumber": "asdasc",
                            "lblBankName": "sddcs",
                            "lblBillPay": "kony.i18n.getLocalizedString(\"kony.mb.BillPay.VIEWBILL\")",
                            "lblDelete": "kony.i18n.getLocalizedString(\"kony.mb.BillPay.VIEWBILL\")"
                        }, {
                            "imgBillPay": "deleteicon.png",
                            "imgDelete": "deleteicon.png",
                            "imgebill": "ebill.png",
                            "lblAccountBal": "Due on: 05/14/2018",
                            "lblAccountBalValue": "sCSDcas",
                            "lblAccountName": "asdasd",
                            "lblAccountNumber": "asdasc",
                            "lblBankName": "sddcs",
                            "lblBillPay": "kony.i18n.getLocalizedString(\"kony.mb.BillPay.VIEWBILL\")",
                            "lblDelete": "kony.i18n.getLocalizedString(\"kony.mb.BillPay.VIEWBILL\")"
                        }, {
                            "imgBillPay": "deleteicon.png",
                            "imgDelete": "deleteicon.png",
                            "imgebill": "ebill.png",
                            "lblAccountBal": "Due on: 05/14/2018",
                            "lblAccountBalValue": "sCSDcas",
                            "lblAccountName": "asdasd",
                            "lblAccountNumber": "asdasc",
                            "lblBankName": "sddcs",
                            "lblBillPay": "kony.i18n.getLocalizedString(\"kony.mb.BillPay.VIEWBILL\")",
                            "lblDelete": "kony.i18n.getLocalizedString(\"kony.mb.BillPay.VIEWBILL\")"
                        }, {
                            "imgBillPay": "deleteicon.png",
                            "imgDelete": "deleteicon.png",
                            "imgebill": "ebill.png",
                            "lblAccountBal": "Due on: 05/14/2018",
                            "lblAccountBalValue": "sCSDcas",
                            "lblAccountName": "asdasd",
                            "lblAccountNumber": "asdasc",
                            "lblBankName": "sddcs",
                            "lblBillPay": "kony.i18n.getLocalizedString(\"kony.mb.BillPay.VIEWBILL\")",
                            "lblDelete": "kony.i18n.getLocalizedString(\"kony.mb.BillPay.VIEWBILL\")"
                        }, {
                            "imgBillPay": "deleteicon.png",
                            "imgDelete": "deleteicon.png",
                            "imgebill": "ebill.png",
                            "lblAccountBal": "Due on: 05/14/2018",
                            "lblAccountBalValue": "sCSDcas",
                            "lblAccountName": "asdasd",
                            "lblAccountNumber": "asdasc",
                            "lblBankName": "sddcs",
                            "lblBillPay": "kony.i18n.getLocalizedString(\"kony.mb.BillPay.VIEWBILL\")",
                            "lblDelete": "kony.i18n.getLocalizedString(\"kony.mb.BillPay.VIEWBILL\")"
                        }]
                    ],
                    [{
                            "imgUpArrow": "",
                            "lblHeader": "kony.i18n.getLocalizedString(\"kony.mb.accdetails.postedTransactions\")"
                        },
                        [{
                            "imgBillPay": "deleteicon.png",
                            "imgDelete": "deleteicon.png",
                            "imgebill": "ebill.png",
                            "lblAccountBal": "Due on: 05/14/2018",
                            "lblAccountBalValue": "sCSDcas",
                            "lblAccountName": "asdasd",
                            "lblAccountNumber": "asdasc",
                            "lblBankName": "sddcs",
                            "lblBillPay": "kony.i18n.getLocalizedString(\"kony.mb.BillPay.VIEWBILL\")",
                            "lblDelete": "kony.i18n.getLocalizedString(\"kony.mb.BillPay.VIEWBILL\")"
                        }, {
                            "imgBillPay": "deleteicon.png",
                            "imgDelete": "deleteicon.png",
                            "imgebill": "ebill.png",
                            "lblAccountBal": "Due on: 05/14/2018",
                            "lblAccountBalValue": "sCSDcas",
                            "lblAccountName": "asdasd",
                            "lblAccountNumber": "asdasc",
                            "lblBankName": "sddcs",
                            "lblBillPay": "kony.i18n.getLocalizedString(\"kony.mb.BillPay.VIEWBILL\")",
                            "lblDelete": "kony.i18n.getLocalizedString(\"kony.mb.BillPay.VIEWBILL\")"
                        }, {
                            "imgBillPay": "deleteicon.png",
                            "imgDelete": "deleteicon.png",
                            "imgebill": "ebill.png",
                            "lblAccountBal": "Due on: 05/14/2018",
                            "lblAccountBalValue": "sCSDcas",
                            "lblAccountName": "asdasd",
                            "lblAccountNumber": "asdasc",
                            "lblBankName": "sddcs",
                            "lblBillPay": "kony.i18n.getLocalizedString(\"kony.mb.BillPay.VIEWBILL\")",
                            "lblDelete": "kony.i18n.getLocalizedString(\"kony.mb.BillPay.VIEWBILL\")"
                        }, {
                            "imgBillPay": "deleteicon.png",
                            "imgDelete": "deleteicon.png",
                            "imgebill": "ebill.png",
                            "lblAccountBal": "Due on: 05/14/2018",
                            "lblAccountBalValue": "sCSDcas",
                            "lblAccountName": "asdasd",
                            "lblAccountNumber": "asdasc",
                            "lblBankName": "sddcs",
                            "lblBillPay": "kony.i18n.getLocalizedString(\"kony.mb.BillPay.VIEWBILL\")",
                            "lblDelete": "kony.i18n.getLocalizedString(\"kony.mb.BillPay.VIEWBILL\")"
                        }, {
                            "imgBillPay": "deleteicon.png",
                            "imgDelete": "deleteicon.png",
                            "imgebill": "ebill.png",
                            "lblAccountBal": "Due on: 05/14/2018",
                            "lblAccountBalValue": "sCSDcas",
                            "lblAccountName": "asdasd",
                            "lblAccountNumber": "asdasc",
                            "lblBankName": "sddcs",
                            "lblBillPay": "kony.i18n.getLocalizedString(\"kony.mb.BillPay.VIEWBILL\")",
                            "lblDelete": "kony.i18n.getLocalizedString(\"kony.mb.BillPay.VIEWBILL\")"
                        }]
                    ]
                ],
                "groupCells": false,
                "id": "segTransactions",
                "isVisible": true,
                "left": "0dp",
                "minHeight": "85%",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxAccountsNoImageBillPay",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "sectionHeaderTemplate": "flxTransHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxAccountName": "flxAccountName",
                    "flxAccountsNoImageBillPay": "flxAccountsNoImageBillPay",
                    "flxBillPay": "flxBillPay",
                    "flxMain": "flxMain",
                    "flxSeparator": "flxSeparator",
                    "flxShadowBottom": "flxShadowBottom",
                    "flxTransHeader": "flxTransHeader",
                    "flxTypeOneShadow": "flxTypeOneShadow",
                    "flxViewBill": "flxViewBill",
                    "flxebill": "flxebill",
                    "imgBillPay": "imgBillPay",
                    "imgDelete": "imgDelete",
                    "imgUpArrow": "imgUpArrow",
                    "imgebill": "imgebill",
                    "lblAccountBal": "lblAccountBal",
                    "lblAccountBalValue": "lblAccountBalValue",
                    "lblAccountName": "lblAccountName",
                    "lblAccountNumber": "lblAccountNumber",
                    "lblBankName": "lblBankName",
                    "lblBillPay": "lblBillPay",
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
            var flxNoTransactions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": 300,
                "id": "flxNoTransactions",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxNoTransactions.setDefaultUnit(kony.flex.DP);
            var lblNoTransaction = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblNoTransaction",
                "isVisible": true,
                "skin": "sknlbl727272SSP93pr",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.accdetails.noTransactionMsg\")",
                "textStyle": {},
                "top": "50%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 6
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            flxNoTransactions.add(lblNoTransaction);
            flxMainContainer.add(flxToastDummy, flxSearch, flxShadow, flxTransferOptions, flxSeperator2, segTransactions, flxNoTransactions);
            var flxFooter = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": false,
                "height": "60dp",
                "id": "flxFooter",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxFooter.setDefaultUnit(kony.flex.DP);
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
                "zIndex": 300
            }, {}, {});
            customFooter.flxAccSelect.isVisible = false;
            customFooter.flxAccounts.onClick = controller.AS_FlexContainer_gb53153c5f42446ca5dc1ff381ec7699;
            customFooter.flxBillSelected.isVisible = false;
            customFooter.flxMoreSelect.isVisible = false;
            customFooter.flxTransferSel.isVisible = true;
            customFooter.flxTypeOneShadow.clipBounds = true;
            var flxSeperator1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSeperator1.setDefaultUnit(kony.flex.DP);
            flxSeperator1.add();
            flxFooter.add(customFooter, flxSeperator1);
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
            var flxHamburger = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxHamburger",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlx000000Op50",
                "top": "0dp",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxHamburger.setDefaultUnit(kony.flex.DP);
            var flxHamburgerWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxHamburgerWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "-100%",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHamburgerWrapper.setDefaultUnit(kony.flex.DP);
            var flxHamburgerContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxHamburgerContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "right": "50dp",
                "skin": "slFbox",
                "top": "0dp",
                "zIndex": 10
            }, {}, {});
            flxHamburgerContainer.setDefaultUnit(kony.flex.DP);
            var Hamburger = new com.kmb.common.Hamburger({
                "clipBounds": true,
                "height": "100%",
                "id": "Hamburger",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxHamburgerContainer.add(Hamburger);
            var flxHamburgerDummy = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxHamburgerDummy",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "50dp",
                "zIndex": 3
            }, {}, {});
            flxHamburgerDummy.setDefaultUnit(kony.flex.DP);
            flxHamburgerDummy.add();
            flxHamburgerWrapper.add(flxHamburgerContainer, flxHamburgerDummy);
            flxHamburger.add(flxHamburgerWrapper);
            var flxGradient = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40%",
                "id": "flxGradient",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxGradientBlue",
                "top": "56dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxGradient.setDefaultUnit(kony.flex.DP);
            flxGradient.add();
            var flxWhite = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": true,
                "id": "flxWhite",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxffffff",
                "top": "55%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxWhite.setDefaultUnit(kony.flex.DP);
            flxWhite.add();
            var flxGradientBottom = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "30%",
                "id": "flxGradientBottom",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlx0095e4",
                "top": "25%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxGradientBottom.setDefaultUnit(kony.flex.DP);
            flxGradientBottom.add();
            this.add(flxHeader, flxHeaderSearchbox, flxMainContainer, flxFooter, flxPopup, flxHamburger, flxGradient, flxWhite, flxGradientBottom);
        };
        return [{
            "addWidgets": addWidgetsfrmBillPay,
            "bounces": false,
            "enableScrolling": true,
            "enabledForIdleTimeout": true,
            "id": "frmBillPay",
            "init": controller.AS_Form_ed0f6d7dc91b4701a029b6ba29509b49,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_e9cffac3ba8b48a3be1c9762db1c32d6,
            "skin": "sknFrmffffff",
            "i18n_title": "kony.i18n.getLocalizedString(\"kony.mb.transaction.billPay\")"
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