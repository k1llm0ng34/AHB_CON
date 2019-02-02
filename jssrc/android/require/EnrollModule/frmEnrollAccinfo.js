define("EnrollModule/frmEnrollAccinfo", function() {
    return function(controller) {
        function addWidgetsfrmEnrollAccinfo() {
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
            var flxProgressBackgroundHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxProgressBackgroundHeader",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "sknFlxda8b08Op20",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxProgressBackgroundHeader.setDefaultUnit(kony.flex.DP);
            flxProgressBackgroundHeader.add();
            var flxProgressHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxProgressHeader",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "right": "33.60%",
                "skin": "sknFlxda8b08",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxProgressHeader.setDefaultUnit(kony.flex.DP);
            flxProgressHeader.add();
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
            customHeader.btnRight.onClick = controller.AS_Button_af97396e008646d4ad75cc38f42be800;
            customHeader.flxBack.isVisible = false;
            customHeader.flxSearch.isVisible = false;
            customHeader.lblLocateUs.text = "Account Info";
            flxHeader.add(flxProgressBackgroundHeader, flxProgressHeader, customHeader);
            var flxAccountInfo = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "centerX": "50%",
                "clipBounds": false,
                "enableScrolling": true,
                "height": "87.66%",
                "horizontalScrollIndicator": true,
                "id": "flxAccountInfo",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknFlxScrlfafafa",
                "top": "56dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAccountInfo.setDefaultUnit(kony.flex.DP);
            var flxViewAccountinfo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxViewAccountinfo",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "f9f9",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxViewAccountinfo.setDefaultUnit(kony.flex.DP);
            var flxAccountDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxAccountDetails",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxfafafa",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAccountDetails.setDefaultUnit(kony.flex.DP);
            var lblAccountDetails = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblAccountDetails",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.enroll.accountDetails"),
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
            var btnEdit = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "sknBtn0095e428px",
                "height": "100%",
                "id": "btnEdit",
                "isVisible": false,
                "right": "6.25%",
                "skin": "sknBtn0095e428px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.editNickName"),
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAccountDetails.add(lblAccountDetails, btnEdit);
            var lblAccountNumber = new kony.ui.Label({
                "id": "lblAccountNumber",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknLbla0a0a022px",
                "text": kony.i18n.getLocalizedString("kony.mb.enroll.accountNumber"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblAccountNumberValue = new kony.ui.Label({
                "id": "lblAccountNumberValue",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknLbl424242SSP26px",
                "text": "2137-2210-3423-9098",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "3dp",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblAccType = new kony.ui.Label({
                "id": "lblAccType",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknLbla0a0a022px",
                "text": kony.i18n.getLocalizedString("kony.mb.enroll.accountType"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblAccountTypeValue = new kony.ui.Label({
                "id": "lblAccountTypeValue",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.enroll.checkingAccount"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "3dp",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblAccountHolderName = new kony.ui.Label({
                "id": "lblAccountHolderName",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknLbla0a0a022px",
                "text": kony.i18n.getLocalizedString("kony.mb.enroll.accountHolderName"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblAcctHolderNameValue = new kony.ui.Label({
                "id": "lblAcctHolderNameValue",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknLbl424242SSP26px",
                "text": "John Kumar",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "3dp",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblDOB = new kony.ui.Label({
                "id": "lblDOB",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknLbla0a0a022px",
                "text": kony.i18n.getLocalizedString("kony.mb.enroll.dob"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblDOBValue = new kony.ui.Label({
                "id": "lblDOBValue",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknLbl424242SSP26px",
                "text": "05/23/1995",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "3dp",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblGender = new kony.ui.Label({
                "id": "lblGender",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknLbla0a0a022px",
                "text": kony.i18n.getLocalizedString("kony.mb.enroll.gender"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblGenderValue = new kony.ui.Label({
                "id": "lblGenderValue",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.OBGender.Male"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "3dp",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyflxAccountDetails0acfa2300e35e4f = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "20dp",
                "id": "CopyflxAccountDetails0acfa2300e35e4f",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxAccountDetails0acfa2300e35e4f.setDefaultUnit(kony.flex.DP);
            CopyflxAccountDetails0acfa2300e35e4f.add();
            flxViewAccountinfo.add(flxAccountDetails, lblAccountNumber, lblAccountNumberValue, lblAccType, lblAccountTypeValue, lblAccountHolderName, lblAcctHolderNameValue, lblDOB, lblDOBValue, lblGender, lblGenderValue, CopyflxAccountDetails0acfa2300e35e4f);
            var lblAccountInfo = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblAccountInfo",
                "isVisible": true,
                "left": "111dp",
                "skin": "sknLbl424242SSP22px",
                "text": kony.i18n.getLocalizedString("kony.mb.EnrollAccinfo.AccountInfo"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "2%",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var segAccounts = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "data": [{
                    "imgCheckBox": "remeberme.png",
                    "lblAccType": kony.i18n.getLocalizedString("kony.mb.enroll.accountType"),
                    "lblAccountNumber": kony.i18n.getLocalizedString("kony.mb.enroll.accountNumber"),
                    "lblAccountNumberValue": "2137-2210-3423-9098",
                    "lblAccountTypeValue": "Checking Account"
                }, {
                    "imgCheckBox": "remembermetick.png",
                    "lblAccType": kony.i18n.getLocalizedString("kony.mb.enroll.accountType"),
                    "lblAccountNumber": kony.i18n.getLocalizedString("kony.mb.enroll.accountNumber"),
                    "lblAccountNumberValue": "2137-2210-3423-9098",
                    "lblAccountTypeValue": "Checking Account"
                }],
                "groupCells": false,
                "id": "segAccounts",
                "isVisible": true,
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxAccountInfo",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "fafafa00",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "2%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxAccountInfo": "flxAccountInfo",
                    "imgCheckBox": "imgCheckBox",
                    "lblAccType": "lblAccType",
                    "lblAccountNumber": "lblAccountNumber",
                    "lblAccountNumberValue": "lblAccountNumberValue",
                    "lblAccountTypeValue": "lblAccountTypeValue"
                },
                "width": "100%",
                "zIndex": 10
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxTermsAndConditions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "10%",
                "id": "flxTermsAndConditions",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "56dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTermsAndConditions.setDefaultUnit(kony.flex.DP);
            var imgCheck = new kony.ui.Image2({
                "centerY": "41%",
                "height": "20dp",
                "id": "imgCheck",
                "isVisible": true,
                "left": "25dp",
                "onTouchEnd": controller.AS_Image_aa2e6873a24a4784b4adc289b3a1938b,
                "skin": "slImage",
                "src": "remeberme.png",
                "top": "20dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var rtxtnc = new kony.ui.RichText({
                "centerY": "56.06%",
                "id": "rtxtnc",
                "isVisible": true,
                "linkSkin": "sknRtx0095e4SSPReg26px",
                "right": "16.00%",
                "skin": "sknRtx424242SSP26px",
                "text": "I agree to your <a href =\"\">Terms & Conditions </a> of online banking",
                "width": "68.00%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxTermsAndConditions.add(imgCheck, rtxtnc);
            var btnContinueAccountInfo = new kony.ui.Button({
                "bottom": "2%",
                "centerX": "50%",
                "focusSkin": "sknBtn0095e4RoundedffffffSSP26px",
                "height": "40dp",
                "id": "btnContinueAccountInfo",
                "isVisible": true,
                "left": "20dp",
                "onClick": controller.AS_Button_b5e4b22c81e947139f56a896008a0015,
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
                "top": "1%",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAccountInfo.add(flxViewAccountinfo, lblAccountInfo, segAccounts, flxTermsAndConditions, btnContinueAccountInfo);
            this.add(flxHeader, flxAccountInfo);
        };
        return [{
            "addWidgets": addWidgetsfrmEnrollAccinfo,
            "enabledForIdleTimeout": true,
            "id": "frmEnrollAccinfo",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.enroll.accountInfo")
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