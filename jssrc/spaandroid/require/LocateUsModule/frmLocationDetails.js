define("LocateUsModule/frmLocationDetails", function() {
    return function(controller) {
        function addWidgetsfrmLocationDetails() {
            this.setDefaultUnit(kony.flex.DP);
            var flxMainContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
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
            customHeader.flxSearch.right = "6.25%";
            customHeader.flxSearch.top = "0dp";
            flxHeader.add(customHeader);
            var flxDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "id": "flxDetails",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "55dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxDetails.setDefaultUnit(kony.flex.DP);
            var flxDetailsMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100dp",
                "id": "flxDetailsMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 11
            }, {}, {});
            flxDetailsMain.setDefaultUnit(kony.flex.DP);
            var lblBranchName = new kony.ui.Label({
                "height": "18dp",
                "id": "lblBranchName",
                "isVisible": true,
                "left": "20dp",
                "maxNumberOfLines": 1,
                "right": "90dp",
                "skin": "sknLbl424242SSPSemiBold93pr",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.Location.BranchName\")",
                "textStyle": {},
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "top": "12dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblStatus = new kony.ui.Label({
                "id": "lblStatus",
                "isVisible": true,
                "left": "20dp",
                "right": "90dp",
                "skin": "sknLbl5daf0bSSP79pr",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.Location.StatusOpen\")",
                "textStyle": {},
                "top": "30dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblAddress1 = new kony.ui.Label({
                "id": "lblAddress1",
                "isVisible": true,
                "left": "20dp",
                "right": "90dp",
                "skin": "sknLbl424242SSP93pr",
                "text": "Branch Address one line",
                "textStyle": {},
                "top": "47dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblAddress2 = new kony.ui.Label({
                "id": "lblAddress2",
                "isVisible": true,
                "left": "20dp",
                "right": "90dp",
                "skin": "sknLbl424242SSP93pr",
                "text": "Branch Address, CIty, Country.",
                "textStyle": {},
                "top": "63dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var flxDetailsDirections = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "10dp",
                "clipBounds": true,
                "id": "flxDetailsDirections",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "0dp",
                "skin": "slFbox",
                "top": "10dp",
                "width": "85dp",
                "zIndex": 11
            }, {}, {});
            flxDetailsDirections.setDefaultUnit(kony.flex.DP);
            var flxSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxf1f1f1Op100",
                "top": "0dp",
                "width": "1dp",
                "zIndex": 1
            }, {}, {});
            flxSeparator.setDefaultUnit(kony.flex.DP);
            flxSeparator.add();
            var flxImgNavigation = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "35%",
                "clipBounds": true,
                "height": "35dp",
                "id": "flxImgNavigation",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "width": "35dp",
                "zIndex": 1
            }, {}, {});
            flxImgNavigation.setDefaultUnit(kony.flex.DP);
            var imgNavigation = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "29dp",
                "id": "imgNavigation",
                "isVisible": true,
                "skin": "slImage",
                "src": "navigationicon.png",
                "width": "29dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxImgNavigation.add(imgNavigation);
            var lblDistance = new kony.ui.Label({
                "bottom": "8dp",
                "centerX": "50%",
                "id": "lblDistance",
                "isVisible": true,
                "skin": "sknLbl0a78d1SSp93pr",
                "text": "2.2 miles",
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
            flxDetailsDirections.add(flxSeparator, flxImgNavigation, lblDistance);
            flxDetailsMain.add(lblBranchName, lblStatus, lblAddress1, lblAddress2, flxDetailsDirections);
            var flxBranchDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": true,
                "id": "flxBranchDetails",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "f9f9",
                "top": "100dp",
                "width": "100.00%",
                "zIndex": 100
            }, {}, {});
            flxBranchDetails.setDefaultUnit(kony.flex.DP);
            var flxBranchDetailsMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "80dp",
                "clipBounds": true,
                "id": "flxBranchDetailsMain",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBranchDetailsMain.setDefaultUnit(kony.flex.DP);
            var flxOperationHours = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxOperationHours",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "sknFlxf9f9f9",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxOperationHours.setDefaultUnit(kony.flex.DP);
            var lblOperationalHours = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblOperationalHours",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSPSemiBold93pr",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.Location.OperationalHours\")",
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
            flxOperationHours.add(lblOperationalHours);
            var segOperationalHours = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "10dp",
                "data": [{
                    "lblDay": "Tue",
                    "lblTimings": "10:00 am to 5:00 pm"
                }, {
                    "lblDay": "Tue",
                    "lblTimings": "10:00 am to 5:00 pm"
                }, {
                    "lblDay": "Wednesday",
                    "lblTimings": "10:00 am to 5:00 pm"
                }, {
                    "lblDay": "asds",
                    "lblTimings": ""
                }, {
                    "lblDay": "asx",
                    "lblTimings": ""
                }, {
                    "lblDay": "asa",
                    "lblTimings": ""
                }, {
                    "lblDay": "as",
                    "lblTimings": ""
                }],
                "groupCells": false,
                "id": "segOperationalHours",
                "isVisible": true,
                "left": "0%",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "right": "0%",
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxOperationHours",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "10dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxOperationHours": "flxOperationHours",
                    "lblDay": "lblDay",
                    "lblTimings": "lblTimings"
                },
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxServices = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxServices",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "sknFlxf9f9f9",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxServices.setDefaultUnit(kony.flex.DP);
            var lblServices = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblServices",
                "isVisible": true,
                "left": "20dp",
                "skin": "sknLbl424242SSPSemiBold93pr",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.Location.Services\")",
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
            flxServices.add(lblServices);
            var segServices = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "5dp",
                "data": [{
                    "lblBullet": "Label",
                    "lblService": "ATM- 24 Hours"
                }, {
                    "lblBullet": "Label",
                    "lblService": "ATM- 24 Hours"
                }],
                "groupCells": false,
                "id": "segServices",
                "isVisible": true,
                "left": "0%",
                "minHeight": "25%",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "right": "0%",
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxServices",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "10dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxServices": "flxServices",
                    "lblBullet": "lblBullet",
                    "lblService": "lblService"
                },
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBranchDetailsMain.add(flxOperationHours, segOperationalHours, flxServices, segServices);
            var flxBtnCallBranch = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "20dp",
                "clipBounds": true,
                "height": "40dp",
                "id": "flxBtnCallBranch",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "0%",
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBtnCallBranch.setDefaultUnit(kony.flex.DP);
            var btnCallBranch = new kony.ui.Button({
                "bottom": "0%",
                "focusSkin": "sknBtn0095e4RoundedffffffSSP26px",
                "height": "100%",
                "id": "btnCallBranch",
                "isVisible": true,
                "left": "6.25%",
                "right": "6.25%",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.Location.CallBranch\")",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBtnCallBranch.add(btnCallBranch);
            flxBranchDetails.add(flxBranchDetailsMain, flxBtnCallBranch);
            flxDetails.add(flxDetailsMain, flxBranchDetails);
            flxMainContainer.add(flxHeader, flxDetails);
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
            this.add(flxMainContainer, flxPopup);
        };
        return [{
            "addWidgets": addWidgetsfrmLocationDetails,
            "enableScrolling": false,
            "enabledForIdleTimeout": true,
            "id": "frmLocationDetails",
            "init": controller.AS_Form_bd676377fd5945c68133233e4c2f2289,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": true,
            "preShow": controller.AS_Form_efb878f944564a6995a7b43a23755ffa,
            "skin": "sknFrmffffff",
            "i18n_title": "kony.i18n.getLocalizedString(\"kony.mb.Hamburger.Locateus\")"
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