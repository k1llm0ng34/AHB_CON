define("AccountModule/frmSelectExternalAccounts", function() {
    return function(controller) {
        function addWidgetsfrmSelectExternalAccounts() {
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
            customHeader.btnRight.isVisible = false;
            customHeader.btnRight.text = "CANCEL";
            customHeader.flxSearch.isVisible = false;
            customHeader.flxSearch.right = "15dp";
            customHeader.imgSearch.centerX = "50%";
            customHeader.imgSearch.right = null;
            customHeader.imgSearch.src = "info.png";
            customHeader.lblLocateUs.centerX = null;
            customHeader.lblLocateUs.text = "Account Details";
            flxHeader.add(customHeader);
            var flxBody = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "id": "flxBody",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "56dp",
                "width": "100%",
                "zIndex": 8
            }, {}, {});
            flxBody.setDefaultUnit(kony.flex.DP);
            var flxShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "5dp",
                "id": "flxShadow",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxHeaderShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShadow.setDefaultUnit(kony.flex.DP);
            flxShadow.add();
            var flxExternalAccountsHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "68dp",
                "id": "flxExternalAccountsHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "skin": "f9f9",
                "top": "5dp",
                "width": "100%"
            }, {}, {});
            flxExternalAccountsHeader.setDefaultUnit(kony.flex.DP);
            var imgBank = new kony.ui.Image2({
                "centerY": "50%",
                "height": "36dp",
                "id": "imgBank",
                "isVisible": true,
                "left": "20dp",
                "skin": "slImage",
                "src": "imagedrag.png",
                "width": "41dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblAccountHolderName = new kony.ui.Label({
                "id": "lblAccountHolderName",
                "isVisible": true,
                "left": "80dp",
                "skin": "sknLbl72727SSPReg26px",
                "text": "Mr. John Bailey",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "21dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblBankName = new kony.ui.Label({
                "bottom": "17dp",
                "id": "lblBankName",
                "isVisible": true,
                "left": "80dp",
                "skin": "sknLbla0a0a0SSPReg22px",
                "text": "Chase Bank",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
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
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeparator.setDefaultUnit(kony.flex.DP);
            flxSeparator.add();
            flxExternalAccountsHeader.add(imgBank, lblAccountHolderName, lblBankName, flxSeparator);
            var flxShadow2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "5dp",
                "id": "flxShadow2",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxHeaderShadow",
                "top": "73dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxShadow2.setDefaultUnit(kony.flex.DP);
            flxShadow2.add();
            var segTransactions = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [
                    [{
                            "lblAvailableExtAccounts": "Available accounts"
                        },
                        [{
                            "imgBank": "checkboxtick.png",
                            "lblExtAccountBal": "Available Balance",
                            "lblExtAccountBalValue": "$3,968.00",
                            "lblExtAccountName": "Chase Checking...2343",
                            "lblExtAccountType": "Checking Account"
                        }, {
                            "imgBank": "tickmarkbox.png",
                            "lblExtAccountBal": "Available Balance",
                            "lblExtAccountBalValue": "$3,968.00",
                            "lblExtAccountName": "Chase Checking...2343",
                            "lblExtAccountType": "Savings Account"
                        }, {
                            "imgBank": "tickmarkbox.png",
                            "lblExtAccountBal": "Available Balance",
                            "lblExtAccountBalValue": "$3,968.00",
                            "lblExtAccountName": "Chase Checking...2343",
                            "lblExtAccountType": "Personal Loan"
                        }, {
                            "imgBank": "checkboxtick.png",
                            "lblExtAccountBal": "Available Balance",
                            "lblExtAccountBalValue": "$3,968.00",
                            "lblExtAccountName": "Chase Checking...2343",
                            "lblExtAccountType": "Reward Credit Card"
                        }]
                    ]
                ],
                "groupCells": false,
                "id": "segTransactions",
                "isVisible": true,
                "left": "0dp",
                "maxHeight": "260dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxExternalAccounts",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "sectionHeaderTemplate": "flxExtAccountsHeader",
                "selectionBehavior": constants.SEGUI_MULTI_SELECT_BEHAVIOR,
                "selectionBehaviorConfig": {
                    "imageIdentifier": "imgBank",
                    "selectedStateImage": "checkboxtick.png",
                    "unselectedStateImage": "tickmarkbox.png"
                },
                "separatorColor": "f1f1f100",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "73dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxExtAccountsHeader": "flxExtAccountsHeader",
                    "flxExternalAccounts": "flxExternalAccounts",
                    "flxSeparator": "flxSeparator",
                    "flxTypeOneShadow": "flxTypeOneShadow",
                    "imgBank": "imgBank",
                    "lblAvailableExtAccounts": "lblAvailableExtAccounts",
                    "lblExtAccountBal": "lblExtAccountBal",
                    "lblExtAccountBalValue": "lblExtAccountBalValue",
                    "lblExtAccountName": "lblExtAccountName",
                    "lblExtAccountType": "lblExtAccountType"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "dockSectionHeaders": true
            });
            var flxTermsAndConditions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxTermsAndConditions",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "20dp",
                "right": 20,
                "skin": "slFbox",
                "top": "367dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {}, {});
            flxTermsAndConditions.setDefaultUnit(kony.flex.DP);
            var flxCheckBox = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxCheckBox",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "-5dp",
                "width": "30dp",
                "zIndex": 10
            }, {}, {});
            flxCheckBox.setDefaultUnit(kony.flex.DP);
            var imgTermsAccepted = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "18dp",
                "id": "imgTermsAccepted",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "tickmarkbox.png",
                "width": "18dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxCheckBox.add(imgTermsAccepted);
            var lblTermsAndConditions = new kony.ui.Label({
                "id": "lblTermsAndConditions",
                "isVisible": true,
                "left": "5dp",
                "skin": "sknLbl424242SSPRegular26px",
                "text": kony.i18n.getLocalizedString("kony.mb.externalAccounts.termnsConditionsChk"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var btnTnC = new kony.ui.Button({
                "focusSkin": "sknBtn004B9528px",
                "height": "30dp",
                "id": "btnTnC",
                "isVisible": true,
                "left": "3dp",
                "skin": "sknBtn004B9528px",
                "text": kony.i18n.getLocalizedString("kony.mb.accountAggregation.TermsAndConditions"),
                "top": "-5dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxTermsAndConditions.add(flxCheckBox, lblTermsAndConditions, btnTnC);
            var btnSave = new kony.ui.Button({
                "focusSkin": "sknBtn0095e4RoundedffffffSSP26px",
                "height": "40dp",
                "id": "btnSave",
                "isVisible": true,
                "left": "20dp",
                "right": 20,
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.externalAccounts.addAccount"),
                "top": "452dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxExtAccountsHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxExtAccountsHeader",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxf9f9f9Shadow",
                "top": "73dp",
                "width": "100%"
            }, {}, {});
            flxExtAccountsHeader.setDefaultUnit(kony.flex.DP);
            var lblAvailableExtAccounts = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblAvailableExtAccounts",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accountAggregation.AvailableAccounts"),
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
            var flxTypeOneShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "3dp",
                "id": "flxTypeOneShadow",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "sknFlxHeaderShadow",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTypeOneShadow.setDefaultUnit(kony.flex.DP);
            flxTypeOneShadow.add();
            var flxSeparator2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeparator2.setDefaultUnit(kony.flex.DP);
            flxSeparator2.add();
            flxExtAccountsHeader.add(lblAvailableExtAccounts, flxTypeOneShadow, flxSeparator2);
            var lblNoAccountsToAddMessage = new kony.ui.Label({
                "id": "lblNoAccountsToAddMessage",
                "isVisible": false,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknLbl424242SSPRegular26px",
                "text": kony.i18n.getLocalizedString("kony.mb.accountAggregation.AllAccountsAlreadyAdded"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "140dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxBody.add(flxShadow, flxExternalAccountsHeader, flxShadow2, segTransactions, flxTermsAndConditions, btnSave, flxExtAccountsHeader, lblNoAccountsToAddMessage);
            this.add(flxHeader, flxBody);
        };
        return [{
            "addWidgets": addWidgetsfrmSelectExternalAccounts,
            "enabledForIdleTimeout": true,
            "id": "frmSelectExternalAccounts",
            "init": controller.AS_Form_h6519424184b411dbca5f10bbc5dd029,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_g70b299b3dcb4b21812c3ca2bab2b0b4,
            "preShow": controller.AS_Form_d5c71070e7434db7865d590ac9d88511,
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.enroll.accountDetails")
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