define("AuthModule/frmForgotEnterSSN", function() {
    return function(controller) {
        function addWidgetsfrmForgotEnterSSN() {
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
            customHeader.btnRight.onClick = controller.AS_Button_b1c723d7333d40f18c346b58d0066d7b;
            customHeader.flxBack.isVisible = true;
            customHeader.flxBack.onClick = controller.AS_FlexContainer_c8f9981c4572412fa03c30f152c7d63e;
            customHeader.flxSearch.isVisible = false;
            customHeader.lblLocateUs.text = "Forgot Credentials";
            flxHeader.add(flxHeaderShadow, customHeader);
            var flxMainContainer = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "59%",
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "56dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var lblEnterInfoTitle = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblEnterInfoTitle",
                "isVisible": true,
                "skin": "sknLbl424242SSPLight30px",
                "text": kony.i18n.getLocalizedString("kony.mb.Forgot.EnterSSNSubtitle"),
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
            var lblEnterInfoSubtitle = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblEnterInfoSubtitle",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.Forgot.EnterSSNTitle"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "45dp",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxInputSSNDummy = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "35dp",
                "id": "flxInputSSNDummy",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "skin": "slFbox",
                "top": "100dp",
                "width": "260dp",
                "zIndex": 1
            }, {}, {});
            flxInputSSNDummy.setDefaultUnit(kony.flex.DP);
            var lblSSNOne = new kony.ui.Label({
                "height": "100%",
                "id": "lblSSNOne",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "•",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSSNTwo = new kony.ui.Label({
                "height": "100%",
                "id": "lblSSNTwo",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "•",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSSNThree = new kony.ui.Label({
                "height": "100%",
                "id": "lblSSNThree",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "•",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSSNFour = new kony.ui.Label({
                "height": "100%",
                "id": "lblSSNFour",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "•",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSSNFive = new kony.ui.Label({
                "height": "100%",
                "id": "lblSSNFive",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "•",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSSNSix = new kony.ui.Label({
                "height": "100%",
                "id": "lblSSNSix",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "•",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSSNSeven = new kony.ui.Label({
                "height": "100%",
                "id": "lblSSNSeven",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "•",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSSNEight = new kony.ui.Label({
                "height": "100%",
                "id": "lblSSNEight",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "•",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSSNNine = new kony.ui.Label({
                "height": "100%",
                "id": "lblSSNNine",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "•",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxInputSSNBorder = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "flxInputSSNBorder",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "-260dp",
                "skin": "slFbox",
                "top": "33dp",
                "width": "260dp",
                "zIndex": 1
            }, {}, {});
            flxInputSSNBorder.setDefaultUnit(kony.flex.DP);
            var CopyflxSecurityOne0a29d21be5e5f46 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "CopyflxSecurityOne0a29d21be5e5f46",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "skin": "sknFlx979797",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {}, {});
            CopyflxSecurityOne0a29d21be5e5f46.setDefaultUnit(kony.flex.DP);
            CopyflxSecurityOne0a29d21be5e5f46.add();
            var CopyflxSecurityTwo0i443879994884b = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "CopyflxSecurityTwo0i443879994884b",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": 10,
                "skin": "sknFlx979797",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {}, {});
            CopyflxSecurityTwo0i443879994884b.setDefaultUnit(kony.flex.DP);
            CopyflxSecurityTwo0i443879994884b.add();
            var CopyflxSecurityThree0db2a071d5a2343 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "CopyflxSecurityThree0db2a071d5a2343",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": 10,
                "skin": "sknFlx979797",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {}, {});
            CopyflxSecurityThree0db2a071d5a2343.setDefaultUnit(kony.flex.DP);
            CopyflxSecurityThree0db2a071d5a2343.add();
            var CopyflxSecurityFour0d496882a3f1342 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "CopyflxSecurityFour0d496882a3f1342",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": 10,
                "skin": "sknFlx979797",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {}, {});
            CopyflxSecurityFour0d496882a3f1342.setDefaultUnit(kony.flex.DP);
            CopyflxSecurityFour0d496882a3f1342.add();
            var CopyflxSecurityFive0fc62dfea97e64f = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "CopyflxSecurityFive0fc62dfea97e64f",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": 10,
                "skin": "sknFlx979797",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {}, {});
            CopyflxSecurityFive0fc62dfea97e64f.setDefaultUnit(kony.flex.DP);
            CopyflxSecurityFive0fc62dfea97e64f.add();
            var CopyflxSecurityFive0e00a4cd5b6974e = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "CopyflxSecurityFive0e00a4cd5b6974e",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": 10,
                "skin": "sknFlx979797",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {}, {});
            CopyflxSecurityFive0e00a4cd5b6974e.setDefaultUnit(kony.flex.DP);
            CopyflxSecurityFive0e00a4cd5b6974e.add();
            var CopyflxSecurityFive0id3e930f133c49 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "CopyflxSecurityFive0id3e930f133c49",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": 10,
                "skin": "sknFlx979797",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {}, {});
            CopyflxSecurityFive0id3e930f133c49.setDefaultUnit(kony.flex.DP);
            CopyflxSecurityFive0id3e930f133c49.add();
            var CopyflxSecurityFive0fd8beb63570e48 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "CopyflxSecurityFive0fd8beb63570e48",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": 10,
                "skin": "sknFlx979797",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {}, {});
            CopyflxSecurityFive0fd8beb63570e48.setDefaultUnit(kony.flex.DP);
            CopyflxSecurityFive0fd8beb63570e48.add();
            var CopyflxSecurityFive0a8b04c20fa2f41 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "CopyflxSecurityFive0a8b04c20fa2f41",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": 10,
                "skin": "sknFlx979797",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {}, {});
            CopyflxSecurityFive0a8b04c20fa2f41.setDefaultUnit(kony.flex.DP);
            CopyflxSecurityFive0a8b04c20fa2f41.add();
            flxInputSSNBorder.add(CopyflxSecurityOne0a29d21be5e5f46, CopyflxSecurityTwo0i443879994884b, CopyflxSecurityThree0db2a071d5a2343, CopyflxSecurityFour0d496882a3f1342, CopyflxSecurityFive0fc62dfea97e64f, CopyflxSecurityFive0e00a4cd5b6974e, CopyflxSecurityFive0id3e930f133c49, CopyflxSecurityFive0fd8beb63570e48, CopyflxSecurityFive0a8b04c20fa2f41);
            flxInputSSNDummy.add(lblSSNOne, lblSSNTwo, lblSSNThree, lblSSNFour, lblSSNFive, lblSSNSix, lblSSNSeven, lblSSNEight, lblSSNNine, flxInputSSNBorder);
            var btnVerify = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "focusSkin": "sknBtn0095e426pxEnabled",
                "height": "40dp",
                "id": "btnVerify",
                "isVisible": true,
                "skin": "sknBtna0a0a0SSPReg26px",
                "text": kony.i18n.getLocalizedString("kony.mb.Forgot.Next"),
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxInputSSN = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "52%",
                "clipBounds": true,
                "height": "40dp",
                "id": "flxInputSSN",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "skin": "slFbox",
                "top": "100dp",
                "width": "235dp",
                "zIndex": 1
            }, {}, {});
            flxInputSSN.setDefaultUnit(kony.flex.DP);
            var lblSSNoDigit1 = new kony.ui.Label({
                "height": "100%",
                "id": "lblSSNoDigit1",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl484848SSPReg40px",
                "text": "_",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSSNoDigit2 = new kony.ui.Label({
                "height": "100%",
                "id": "lblSSNoDigit2",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl484848SSPReg40px",
                "text": "_",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSSNoDigit3 = new kony.ui.Label({
                "height": "100%",
                "id": "lblSSNoDigit3",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl484848SSPReg40px",
                "text": "_",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSSNoHyphen1 = new kony.ui.Label({
                "height": "100%",
                "id": "lblSSNoHyphen1",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLbl484848SSPReg40px",
                "text": "-",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSSNoDigit4 = new kony.ui.Label({
                "height": "100%",
                "id": "lblSSNoDigit4",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLbl484848SSPReg40px",
                "text": "_",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSSNoDigit5 = new kony.ui.Label({
                "height": "100%",
                "id": "lblSSNoDigit5",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl484848SSPReg40px",
                "text": "_",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSSNoHyphen2 = new kony.ui.Label({
                "height": "100%",
                "id": "lblSSNoHyphen2",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLbl484848SSPReg40px",
                "text": "-",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSSNoDigit6 = new kony.ui.Label({
                "height": "100%",
                "id": "lblSSNoDigit6",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLbl484848SSPReg40px",
                "text": "_",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSSNoDigit7 = new kony.ui.Label({
                "height": "100%",
                "id": "lblSSNoDigit7",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl484848SSPReg40px",
                "text": "_",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSSNoDigit8 = new kony.ui.Label({
                "height": "100%",
                "id": "lblSSNoDigit8",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLbl484848SSPReg40px",
                "text": "_",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSSNoDigit9 = new kony.ui.Label({
                "height": "100%",
                "id": "lblSSNoDigit9",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknLbl484848SSPReg40px",
                "text": "_",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "6%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxInputSSN.add(lblSSNoDigit1, lblSSNoDigit2, lblSSNoDigit3, lblSSNoHyphen1, lblSSNoDigit4, lblSSNoDigit5, lblSSNoHyphen2, lblSSNoDigit6, lblSSNoDigit7, lblSSNoDigit8, lblSSNoDigit9);
            flxMainContainer.add(lblEnterInfoTitle, lblEnterInfoSubtitle, flxInputSSNDummy, btnVerify, flxInputSSN);
            var flxKeypad = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "32%",
                "id": "flxKeypad",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "sknFlxF5F6FB",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxKeypad.setDefaultUnit(kony.flex.DP);
            var keypad = new com.kmb.common.keypad({
                "clipBounds": true,
                "height": "100%",
                "id": "keypad",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxKeypad.add(keypad);
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
            this.add(flxHeader, flxMainContainer, flxKeypad, flxPopup);
        };
        return [{
            "addWidgets": addWidgetsfrmForgotEnterSSN,
            "enabledForIdleTimeout": true,
            "id": "frmForgotEnterSSN",
            "init": controller.AS_Form_d44e0690a04a4e72b73051ac557674ef,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": true,
            "preShow": controller.AS_Form_j08a833dfea14ad2a5c98aa429f0aa0f,
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