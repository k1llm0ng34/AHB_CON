define("NewUserModule/frmOBPersonalInfo", function() {
    return function(controller) {
        function addWidgetsfrmOBPersonalInfo() {
            this.setDefaultUnit(kony.flex.DP);
            var flxMainContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0.00%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxHeaderPersonalInfo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "56dp",
                "id": "flxHeaderPersonalInfo",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxffffffShadow",
                "top": "0%",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxHeaderPersonalInfo.setDefaultUnit(kony.flex.DP);
            var customHeaderPersonalInfo = new com.kmb.common.customHeader({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "customHeaderPersonalInfo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            customHeaderPersonalInfo.btnRight.isVisible = true;
            customHeaderPersonalInfo.btnRight.text = "LOGOUT";
            customHeaderPersonalInfo.height = "100%";
            customHeaderPersonalInfo.zIndex = 1;
            customHeaderPersonalInfo.flxBack.isVisible = true;
            customHeaderPersonalInfo.flxBack.width = "10%";
            customHeaderPersonalInfo.flxBack.zIndex = 2;
            customHeaderPersonalInfo.flxSearch.isVisible = false;
            customHeaderPersonalInfo.lblLocateUs.centerY = "40%";
            customHeaderPersonalInfo.lblLocateUs.text = "Personal Info";
            flxHeaderPersonalInfo.add(customHeaderPersonalInfo);
            var flxViewPersonalInfo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxViewPersonalInfo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "56dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxViewPersonalInfo.setDefaultUnit(kony.flex.DP);
            var flxHeaderViewPersonalInfo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxHeaderViewPersonalInfo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxfafafa",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHeaderViewPersonalInfo.setDefaultUnit(kony.flex.DP);
            var lblCapturedDataTitle = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblCapturedDataTitle",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.OB.CapturedData"),
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
            var btnEditPersonalInfo = new kony.ui.Button({
                "centerY": "50%",
                "height": "100%",
                "id": "btnEditPersonalInfo",
                "isVisible": true,
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
            flxHeaderViewPersonalInfo.add(lblCapturedDataTitle, btnEditPersonalInfo);
            var flxInfo = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "105dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxInfo",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "40dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxInfo.setDefaultUnit(kony.flex.DP);
            var lblFirstNameTitle = new kony.ui.Label({
                "id": "lblFirstNameTitle",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknLbla0a0a022px",
                "text": kony.i18n.getLocalizedString("kony.mb.p2p.firstName"),
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
            var lblFirstNameValue = new kony.ui.Label({
                "id": "lblFirstNameValue",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknLbl424242SSP26px",
                "text": "Bruce",
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
            var lblLastNameTitle = new kony.ui.Label({
                "id": "lblLastNameTitle",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknLbla0a0a022px",
                "text": kony.i18n.getLocalizedString("kony.mb.p2p.lastName"),
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
            var lblLastNameValue = new kony.ui.Label({
                "id": "lblLastNameValue",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknLbl424242SSP26px",
                "text": "John",
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
            var lblDateOfBirthTitle = new kony.ui.Label({
                "id": "lblDateOfBirthTitle",
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
            var lblDateOfBirthValue = new kony.ui.Label({
                "id": "lblDateOfBirthValue",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknLbl424242SSP26px",
                "text": "03 / 11 / 2017",
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
            var lblGenderTitle = new kony.ui.Label({
                "id": "lblGenderTitle",
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
            var lblAddressTitle = new kony.ui.Label({
                "id": "lblAddressTitle",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknLbla0a0a022px",
                "text": "Address",
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
            var lblAddressLine1 = new kony.ui.Label({
                "id": "lblAddressLine1",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknLbl424242SSP26px",
                "text": "2211 North",
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
            var lblAddressLine2 = new kony.ui.Label({
                "id": "lblAddressLine2",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknLbl424242SSP26px",
                "text": "Orange Blossom Trail,",
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
            var lblAddressCity = new kony.ui.Label({
                "id": "lblAddressCity",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknLbl424242SSP26px",
                "text": "Orlando",
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
            var lblAddressState = new kony.ui.Label({
                "id": "lblAddressState",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknLbl424242SSP26px",
                "text": "FL",
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
            var lblAddressCountry = new kony.ui.Label({
                "id": "lblAddressCountry",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknLbl424242SSP26px",
                "text": "United States",
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
            var lblAddressZipCode = new kony.ui.Label({
                "id": "lblAddressZipCode",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknLbl424242SSP26px",
                "text": "133302",
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
            flxInfo.add(lblFirstNameTitle, lblFirstNameValue, lblLastNameTitle, lblLastNameValue, lblDateOfBirthTitle, lblDateOfBirthValue, lblGenderTitle, lblGenderValue, lblAddressTitle, lblAddressLine1, lblAddressLine2, lblAddressCity, lblAddressState, lblAddressCountry, lblAddressZipCode);
            flxViewPersonalInfo.add(flxHeaderViewPersonalInfo, flxInfo);
            var btnContinuePersonalInfo = new kony.ui.Button({
                "bottom": "50dp",
                "height": "40dp",
                "id": "btnContinuePersonalInfo",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnChangeIDPersonalInfo = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "id": "btnChangeIDPersonalInfo",
                "isVisible": true,
                "skin": "sknBtn0095e428px",
                "text": kony.i18n.getLocalizedString("kony.mb.OnBoarding.ChangeID"),
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxProgress = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "4dp",
                "id": "flxProgress",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "56dp",
                "width": "100%",
                "zIndex": 6
            }, {}, {});
            flxProgress.setDefaultUnit(kony.flex.DP);
            var flxProgressBackgroundPersonalInfo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxProgressBackgroundPersonalInfo",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "sknFlxda8b08Op20",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxProgressBackgroundPersonalInfo.setDefaultUnit(kony.flex.DP);
            flxProgressBackgroundPersonalInfo.add();
            var flxProgressPersonalInfo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxProgressPersonalInfo",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "right": "65%",
                "skin": "sknFlxda8b08",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxProgressPersonalInfo.setDefaultUnit(kony.flex.DP);
            flxProgressPersonalInfo.add();
            flxProgress.add(flxProgressBackgroundPersonalInfo, flxProgressPersonalInfo);
            flxMainContainer.add(flxHeaderPersonalInfo, flxViewPersonalInfo, btnContinuePersonalInfo, btnChangeIDPersonalInfo, flxProgress);
            var flxSearchAddress = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxSearchAddress",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxSearchAddress.setDefaultUnit(kony.flex.DP);
            var flxHeaderSearchAddress = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "14%",
                "id": "flxHeaderSearchAddress",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxHeaderSearchAddress.setDefaultUnit(kony.flex.DP);
            var flxHeaderWrapperSearchAddress = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "50%",
                "id": "flxHeaderWrapperSearchAddress",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "f9f9",
                "top": "0%",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxHeaderWrapperSearchAddress.setDefaultUnit(kony.flex.DP);
            var lblSearchAddressTitle = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblSearchAddressTitle",
                "isVisible": true,
                "skin": "sknLbl0a78d1SSP30px",
                "text": "SEARCH ADDRESS",
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
            var btnCancelSearchAddress = new kony.ui.Button({
                "centerY": "50%",
                "height": "100%",
                "id": "btnCancelSearchAddress",
                "isVisible": true,
                "right": "6.25%",
                "skin": "sknBtn0095e428px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.CancelSmall"),
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxHeaderWrapperSearchAddress.add(lblSearchAddressTitle, btnCancelSearchAddress);
            var txtSearchAddress = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "height": "35dp",
                "id": "txtSearchAddress",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "placeholder": kony.i18n.getLocalizedString("kony.mb.OB.SearchByInfo"),
                "secureTextEntry": false,
                "skin": "sknTbx424242SSPRegular28px",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "2%",
                "width": "87.50%",
                "zIndex": 3
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [1, 3, 1, 3],
                "paddingInPixel": true
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "sknTbxA0A0A0SSPRegular28px",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxHeaderShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "5dp",
                "id": "flxHeaderShadow",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "sknFlxHeaderShadow",
                "top": "8dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHeaderShadow.setDefaultUnit(kony.flex.DP);
            flxHeaderShadow.add();
            flxHeaderSearchAddress.add(flxHeaderWrapperSearchAddress, txtSearchAddress, flxHeaderShadow);
            var segAddresses = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "lblAddress": "2211 Oberlin Avenur, Orlando, FL, United States"
                }, {
                    "lblAddress": "2211 Oberlin Avenur Trail, Orlando, FL, United States United States"
                }, {
                    "lblAddress": "2211 Oberlin Avenur, Orlando, FL, United States"
                }],
                "groupCells": false,
                "height": "85.00%",
                "id": "segAddresses",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxSearchAddress",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "16%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxSearchAddress": "flxSearchAddress",
                    "flxSeparator": "flxSeparator",
                    "lblAddress": "lblAddress"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSearchAddress.add(flxHeaderSearchAddress, segAddresses);
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
            customPopup.height = "100%";
            flxPopup.add(customPopup);
            this.add(flxMainContainer, flxSearchAddress, flxPopup);
        };
        return [{
            "addWidgets": addWidgetsfrmOBPersonalInfo,
            "enabledForIdleTimeout": true,
            "id": "frmOBPersonalInfo",
            "init": controller.AS_Form_d420e234757d44058e4bde31ed53ef17,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": true,
            "preShow": controller.AS_Form_b010e110aec74fd5b3f944f3be9defb8,
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.NAOReviewProduct.PersonalInfo")
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