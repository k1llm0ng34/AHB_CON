define("NewUserModule/frmOBGender", function() {
    return function(controller) {
        function addWidgetsfrmOBGender() {
            this.setDefaultUnit(kony.flex.DP);
            var flxPersonalInfo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxPersonalInfo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0.00%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPersonalInfo.setDefaultUnit(kony.flex.DP);
            var flxHeaderPersonalInfo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "56dp",
                "id": "flxHeaderPersonalInfo",
                "isVisible": true,
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
            customHeaderPersonalInfo.btnRight.text = "CLOSE";
            customHeaderPersonalInfo.height = "100%";
            customHeaderPersonalInfo.zIndex = 1;
            customHeaderPersonalInfo.flxBack.isVisible = true;
            customHeaderPersonalInfo.flxBack.width = "10%";
            customHeaderPersonalInfo.flxBack.zIndex = 2;
            customHeaderPersonalInfo.flxSearch.isVisible = false;
            customHeaderPersonalInfo.lblLocateUs.centerY = "50%";
            customHeaderPersonalInfo.lblLocateUs.text = "Personal Info";
            flxHeaderPersonalInfo.add(customHeaderPersonalInfo);
            var flxEnterPersonalInfo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": false,
                "id": "flxEnterPersonalInfo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "56dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEnterPersonalInfo.setDefaultUnit(kony.flex.DP);
            var flxEnterPersonalInfoHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxEnterPersonalInfoHeader",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "sknFlxfafafa",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEnterPersonalInfoHeader.setDefaultUnit(kony.flex.DP);
            var lblEnterPersonalInfoHeader = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblEnterPersonalInfoHeader",
                "isVisible": true,
                "skin": "sknLbl424242SSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.OBGender.EnterPersonalInfoHeader"),
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
            flxEnterPersonalInfoHeader.add(lblEnterPersonalInfoHeader);
            var flxGender = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "200dp",
                "id": "flxGender",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "60dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxGender.setDefaultUnit(kony.flex.DP);
            var flxMale = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "50dp",
                "id": "flxMale",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "sknFlxF4F4F4Radius100",
                "top": "30dp",
                "width": "60%",
                "zIndex": 1
            }, {}, {});
            flxMale.setDefaultUnit(kony.flex.DP);
            var lblMale = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblMale",
                "isVisible": true,
                "skin": "sknLbl0095e4SSPRegular35px",
                "text": kony.i18n.getLocalizedString("kony.mb.OBGender.Male"),
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
            flxMale.add(lblMale);
            var flxFemale = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "50dp",
                "id": "flxFemale",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "f9f9",
                "top": "30dp",
                "width": "60%",
                "zIndex": 1
            }, {}, {});
            flxFemale.setDefaultUnit(kony.flex.DP);
            var lblFemale = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblFemale",
                "isVisible": true,
                "skin": "sknLbl424242SSPRegular124pr",
                "text": kony.i18n.getLocalizedString("kony.mb.OBGender.Female"),
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
            flxFemale.add(lblFemale);
            flxGender.add(flxMale, flxFemale);
            var flxDependents = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "90%",
                "id": "flxDependents",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "f9f9",
                "top": "50dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxDependents.setDefaultUnit(kony.flex.DP);
            var segDependents = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "btnOption": "Button"
                }, {
                    "btnOption": "Button"
                }, {
                    "btnOption": "Button"
                }],
                "groupCells": false,
                "height": "100%",
                "id": "segDependents",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxOnBoardingOption",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "btnOption": "btnOption",
                    "flxOnBoardingOption": "flxOnBoardingOption"
                },
                "width": "100%",
                "zIndex": 3
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDependents.add(segDependents);
            flxEnterPersonalInfo.add(flxEnterPersonalInfoHeader, flxGender, flxDependents);
            var flxProgress = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
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
            flxPersonalInfo.add(flxHeaderPersonalInfo, flxEnterPersonalInfo, flxProgress);
            this.add(flxPersonalInfo);
        };
        return [{
            "addWidgets": addWidgetsfrmOBGender,
            "enabledForIdleTimeout": true,
            "id": "frmOBGender",
            "init": controller.AS_Form_bf10bc2e742b439cabdfa33951921d92,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": true,
            "preShow": controller.AS_Form_aa7163c79a5a46a6a7664f2a5fdfc1dc,
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