define("SettingsModule/frmProfileEditPhoneNumberMain", function() {
    return function(controller) {
        function addWidgetsfrmProfileEditPhoneNumberMain() {
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
                "zIndex": 1
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
            customHeader.flxSearch.isVisible = false;
            customHeader.lblLocateUs.text = "Enter Phone Number";
            flxHeader.add(customHeader);
            var flxMainContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "32%",
                "clipBounds": false,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxEnterPhoneNumberDropdown = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxEnterPhoneNumberDropdown",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxf9f9f9",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEnterPhoneNumberDropdown.setDefaultUnit(kony.flex.DP);
            var lblEnterPhoneNumberHeader = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblEnterPhoneNumberHeader",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSP26px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.ProfileEditPhoneNumberMain.EnterPhoneNumberHeader\")",
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
            var flxDropdowm = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxDropdowm",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "20dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "40dp",
                "zIndex": 1
            }, {}, {});
            flxDropdowm.setDefaultUnit(kony.flex.DP);
            var imgArrow = new kony.ui.Image2({
                "centerY": "50%",
                "height": "28dp",
                "id": "imgArrow",
                "isVisible": true,
                "right": "0dp",
                "skin": "slImage",
                "src": "arrowdown.png",
                "width": "12dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDropdowm.add(imgArrow);
            flxEnterPhoneNumberDropdown.add(lblEnterPhoneNumberHeader, flxDropdowm);
            var flxInputPhoneNumber = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "40dp",
                "id": "flxInputPhoneNumber",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "skin": "slFbox",
                "top": "90dp",
                "width": "260dp",
                "zIndex": 1
            }, {}, {});
            flxInputPhoneNumber.setDefaultUnit(kony.flex.DP);
            var lblPhoneOne = new kony.ui.Label({
                "height": "100%",
                "id": "lblPhoneOne",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "(",
                "textStyle": {},
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblPhoneTwo = new kony.ui.Label({
                "height": "100%",
                "id": "lblPhoneTwo",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblPhoneThree = new kony.ui.Label({
                "height": "100%",
                "id": "lblPhoneThree",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblPhoneFour = new kony.ui.Label({
                "height": "100%",
                "id": "lblPhoneFour",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblPhoneFive = new kony.ui.Label({
                "height": "100%",
                "id": "lblPhoneFive",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": ")",
                "textStyle": {},
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblPhoneSix = new kony.ui.Label({
                "height": "100%",
                "id": "lblPhoneSix",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblPhoneSeven = new kony.ui.Label({
                "height": "100%",
                "id": "lblPhoneSeven",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblPhoneEight = new kony.ui.Label({
                "height": "100%",
                "id": "lblPhoneEight",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblPhoneNine = new kony.ui.Label({
                "height": "100%",
                "id": "lblPhoneNine",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "-",
                "textStyle": {},
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblPhoneTen = new kony.ui.Label({
                "height": "100%",
                "id": "lblPhoneTen",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblPhoneEleven = new kony.ui.Label({
                "height": "100%",
                "id": "lblPhoneEleven",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblPhoneTwelve = new kony.ui.Label({
                "height": "100%",
                "id": "lblPhoneTwelve",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblPhoneThirteen = new kony.ui.Label({
                "height": "100%",
                "id": "lblPhoneThirteen",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLble3e3e3SSP60px",
                "text": "_",
                "textStyle": {},
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            flxInputPhoneNumber.add(lblPhoneOne, lblPhoneTwo, lblPhoneThree, lblPhoneFour, lblPhoneFive, lblPhoneSix, lblPhoneSeven, lblPhoneEight, lblPhoneNine, lblPhoneTen, lblPhoneEleven, lblPhoneTwelve, lblPhoneThirteen);
            var flxOptions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxOptions",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "170dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxOptions.setDefaultUnit(kony.flex.DP);
            var flxPrimary = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "25dp",
                "id": "flxPrimary",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPrimary.setDefaultUnit(kony.flex.DP);
            var flxCheckboxPrimary = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxCheckboxPrimary",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {}, {});
            flxCheckboxPrimary.setDefaultUnit(kony.flex.DP);
            var imgCheckboxPrimary = new kony.ui.Image2({
                "centerY": "50%",
                "height": "15dp",
                "id": "imgCheckboxPrimary",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "checkbox.png",
                "top": "3dp",
                "width": "15dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxCheckboxPrimary.add(imgCheckboxPrimary);
            var lblPrimary = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblPrimary",
                "isVisible": true,
                "left": "45dp",
                "skin": "sknLbl424242SSP22px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.ProfileEditPhoneNumberMain.Primary\")",
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
            flxPrimary.add(flxCheckboxPrimary, lblPrimary);
            var flxInternational = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "25dp",
                "id": "flxInternational",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxInternational.setDefaultUnit(kony.flex.DP);
            var flxCheckboxInternational = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxCheckboxInternational",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {}, {});
            flxCheckboxInternational.setDefaultUnit(kony.flex.DP);
            var imgCheckboxInternational = new kony.ui.Image2({
                "centerY": "50%",
                "height": "15dp",
                "id": "imgCheckboxInternational",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "checkboxempty.png",
                "top": "3dp",
                "width": "15dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxCheckboxInternational.add(imgCheckboxInternational);
            var lblInternational = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblInternational",
                "isVisible": true,
                "left": "45dp",
                "skin": "sknLbl424242SSP22px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.profile.MarkIfYouWantToReceiveAlerts\")",
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
            flxInternational.add(flxCheckboxInternational, lblInternational);
            flxOptions.add(flxPrimary, flxInternational);
            var btnVerifyPhoneNumber = new kony.ui.Button({
                "bottom": "50dp",
                "centerX": "50%",
                "focusSkin": "sknBtnOnBoardingInactive",
                "height": "40dp",
                "id": "btnVerifyPhoneNumber",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtnOnBoardingInactive",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.Profile.UpdateChanges\")",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnDelete = new kony.ui.Button({
                "bottom": "10dp",
                "centerX": "50%",
                "focusSkin": "sknBtn0095e4SSPReg26px",
                "height": "40dp",
                "id": "btnDelete",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4SSPReg26px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.Profile.DeletePhoneNumber\")",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxPhoneType = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxPhoneType",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "45dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPhoneType.setDefaultUnit(kony.flex.DP);
            var segContactType = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "lblFrequency": "Home"
                }, {
                    "lblFrequency": "Mobile"
                }, {
                    "lblFrequency": "Work"
                }, {
                    "lblFrequency": "Other"
                }],
                "groupCells": false,
                "id": "segContactType",
                "isVisible": false,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxFrequency",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "10dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxFrequency": "flxFrequency",
                    "flxMain": "flxMain",
                    "lblFrequency": "lblFrequency"
                },
                "width": "100%",
                "zIndex": 4
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxPhoneType.add(segContactType);
            flxMainContainer.add(flxEnterPhoneNumberDropdown, flxInputPhoneNumber, flxOptions, btnVerifyPhoneNumber, btnDelete, flxPhoneType);
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
            keypad.btnEight.onClick = controller.AS_Button_c095a38b7a464014af0b22bb663e72d0;
            keypad.btnFive.onClick = controller.AS_Button_b81f10d76b9c49b489f80447d90eaf59;
            keypad.btnFour.onClick = controller.AS_Button_j17cc5ddc7d64209a500109135dbafb1;
            keypad.btnNine.onClick = controller.AS_Button_cfdb950230e04132a3b710a756627684;
            keypad.btnOne.onClick = controller.AS_Button_b600ad00331a44adad502fe1f21a821e;
            keypad.btnSeven.onClick = controller.AS_Button_h8875e2b7c9547c7a74675abc0b59396;
            keypad.btnSix.onClick = controller.AS_Button_fb3682f759a6453a816a59ab285ee2f5;
            keypad.btnThree.onClick = controller.AS_Button_a5d6ad3993b143bcab0b68f04055971e;
            keypad.btnTwo.onClick = controller.AS_Button_e5930f70c45143c3a6f5df643220ac49;
            keypad.btnZero.onClick = controller.AS_Button_a33fcaf49c4742deb085f317be8e8db5;
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
            this.add(flxHeader, flxMainContainer, flxKeypad, flxPopup);
        };
        return [{
            "addWidgets": addWidgetsfrmProfileEditPhoneNumberMain,
            "enabledForIdleTimeout": true,
            "id": "frmProfileEditPhoneNumberMain",
            "init": controller.AS_Form_b6e0cbe80fb942d484f3b30a6a3686be,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": true,
            "preShow": controller.AS_Form_de72fc54f6484408848879f4aeb90ca3,
            "skin": "sknFrmffffff",
            "i18n_title": "kony.i18n.getLocalizedString(\"kony.mb.p2p.enterPhoneNo\")"
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