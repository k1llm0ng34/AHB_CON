define("frmLocation", function() {
    return function(controller) {
        function addWidgetsfrmLocation() {
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
            var flxHeaderAndSearch = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "96dp",
                "id": "flxHeaderAndSearch",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxHeaderAndSearch.setDefaultUnit(kony.flex.DP);
            var customSearch = new com.kmb.Search.customSearch({
                "clipBounds": false,
                "height": "95dp",
                "id": "customSearch",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "skin": "sknFlx1a98ff",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            customSearch.btnCancel.isVisible = false;
            customSearch.top = "0dp";
            customSearch.flxBack.isVisible = true;
            customSearch.flxBack.onClick = controller.AS_FlexContainer_eb4b13b092f749b1af663731fefe462f;
            customSearch.flxHeader.isVisible = true;
            customSearch.flxHeader.left = "0%";
            customSearch.flxHeader.top = "0%";
            customSearch.flxSearchMain.isVisible = true;
            customSearch.imgBack.src = "hamburger.png";
            customSearch.lblLocateUs.i18n_text = "kony.i18n.getLocalizedString(\"kony.mb.Location.Header\")";
            var flxOpenHamburger = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxOpenHamburger",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "6.25%",
                "top": "0%",
                "width": "10%",
                "zIndex": 1
            }, {}, {});
            flxOpenHamburger.setDefaultUnit(kony.flex.DP);
            var imgHamburger = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgHamburger",
                "isVisible": true,
                "left": "0%",
                "skin": "slImage",
                "src": "hamburger.png",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxOpenHamburger.add(imgHamburger);
            flxHeaderAndSearch.add(customSearch, flxOpenHamburger);
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
            flxHeaderSearchbox.add(customSearchbox);
            var flxMap = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "93%",
                "id": "flxMap",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "slFbox",
                "top": "40dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMap.setDefaultUnit(kony.flex.DP);
            var mapLocation = new kony.ui.Map({
                "calloutWidth": 80,
                "defaultPinImage": "pinb.png",
                "height": "100%",
                "id": "mapLocation",
                "isVisible": true,
                "left": "0dp",
                "provider": constants.MAP_PROVIDER_GOOGLE,
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {
                "mapSource": constants.MAP_SOURCE_NON_NATIVE,
                "mode": constants.MAP_VIEW_MODE_NORMAL
            });
            var flxCurrentLocation = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "130dp",
                "clipBounds": true,
                "height": "60dp",
                "id": "flxCurrentLocation",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "0dp",
                "skin": "slFbox",
                "width": "60dp",
                "zIndex": 1
            }, {}, {});
            flxCurrentLocation.setDefaultUnit(kony.flex.DP);
            var imgCurrentLocation = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "id": "imgCurrentLocation",
                "isVisible": true,
                "skin": "slImage",
                "src": "centralizelocation.png",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxCurrentLocation.add(imgCurrentLocation);
            flxMap.add(mapLocation, flxCurrentLocation);
            var flxMapButtons = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "20dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "40dp",
                "id": "flxMapButtons",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "slFbox",
                "width": "56.25%",
                "zIndex": 100
            }, {}, {});
            flxMapButtons.setDefaultUnit(kony.flex.DP);
            var flxBtnListView = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxBtnListView",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "sknFlx0095e4B4Radius",
                "top": "0%",
                "width": "52%",
                "zIndex": 1
            }, {}, {});
            flxBtnListView.setDefaultUnit(kony.flex.DP);
            var imgListView = new kony.ui.Image2({
                "centerY": "50%",
                "height": "16dp",
                "id": "imgListView",
                "isVisible": true,
                "left": "10%",
                "skin": "slImage",
                "src": "listview.png",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblListView = new kony.ui.Label({
                "centerX": "60%",
                "centerY": "50%",
                "id": "lblListView",
                "isVisible": true,
                "skin": "sknLblffffffSSP93pr",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.Location.ListView\")",
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
            flxBtnListView.add(imgListView, lblListView);
            var flxBtnFilters = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxBtnFilters",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "0%",
                "skin": "sknFlx0095e4B4Radius",
                "top": "0%",
                "width": "52%",
                "zIndex": 1
            }, {}, {});
            flxBtnFilters.setDefaultUnit(kony.flex.DP);
            var imgFilters = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgFilters",
                "isVisible": true,
                "left": "18%",
                "skin": "slImage",
                "src": "filtericon.png",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblFilters = new kony.ui.Label({
                "centerX": "60%",
                "centerY": "50%",
                "id": "lblFilters",
                "isVisible": true,
                "skin": "sknLblffffffSSP93pr",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.Location.Filters\")",
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
            flxBtnFilters.add(imgFilters, lblFilters);
            var flxBtnsSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxBtnsSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "f9f9",
                "top": "0%",
                "width": "1dp",
                "zIndex": 1
            }, {}, {});
            flxBtnsSeparator.setDefaultUnit(kony.flex.DP);
            flxBtnsSeparator.add();
            flxMapButtons.add(flxBtnListView, flxBtnFilters, flxBtnsSeparator);
            var flxDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "-70%",
                "clipBounds": true,
                "id": "flxDetails",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "81%",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxDetails.setDefaultUnit(kony.flex.DP);
            var flxDummy = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "5.20%",
                "id": "flxDummy",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "sknFlx000000Op50",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDummy.setDefaultUnit(kony.flex.DP);
            flxDummy.add();
            var imgDetails = new kony.ui.Image2({
                "height": "80dp",
                "id": "imgDetails",
                "isVisible": true,
                "left": "0%",
                "skin": "slImage",
                "src": "cardup.png",
                "top": "2%",
                "width": "100%",
                "zIndex": 5
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxDetailsMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "17.02%",
                "id": "flxDetailsMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "f9f9",
                "top": "5.20%",
                "width": "100%",
                "zIndex": 11
            }, {}, {});
            flxDetailsMain.setDefaultUnit(kony.flex.DP);
            var lblBranchName = new kony.ui.Label({
                "height": "18dp",
                "id": "lblBranchName",
                "isVisible": true,
                "left": "6.25%",
                "maxNumberOfLines": 1,
                "skin": "sknLbl424242SSPSemiBold93pr",
                "text": "Branch Name",
                "textStyle": {},
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "top": "5%",
                "width": "65%",
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
                "left": "6.25%",
                "skin": "sknLbl5daf0bSSP79pr",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.Location.StatusOpen\")",
                "textStyle": {},
                "top": "25%",
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
            var lblAddress1 = new kony.ui.Label({
                "id": "lblAddress1",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknlbl727272SSPSSP79pr",
                "text": "Branch Address one line",
                "textStyle": {},
                "top": "48%",
                "width": "70%",
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
                "left": "6.25%",
                "skin": "sknlbl727272SSPSSP79pr",
                "text": "Branch Address, CIty, Country.",
                "textStyle": {},
                "top": "63%",
                "width": "68%",
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
                "clipBounds": true,
                "height": "90%",
                "id": "flxDetailsDirections",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "0%",
                "skin": "slFbox",
                "top": "0%",
                "width": "25%",
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
                "height": "60%",
                "id": "flxImgNavigation",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "width": "60%",
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
                "bottom": "17%",
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
                "clipBounds": true,
                "height": "79%",
                "id": "flxBranchDetails",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "f9f9",
                "top": "22%",
                "width": "100.00%",
                "zIndex": 100
            }, {}, {});
            flxBranchDetails.setDefaultUnit(kony.flex.DP);
            var flxBranchDetailsMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "16%",
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
                "height": "10%",
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
                "centerY": "45%",
                "id": "lblOperationalHours",
                "isVisible": true,
                "left": "6.25%",
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
                "bottom": "1%",
                "data": [{
                    "lblDay": "Tue",
                    "lblTimings": "10:00 am to 5:00 pm"
                }, {
                    "lblDay": "Tue",
                    "lblTimings": "10:00 am to 5:00 pm"
                }, {
                    "lblDay": "Tue",
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
                "right": "1%",
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxOperationHours",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "1%",
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
                "height": "10%",
                "id": "flxServices",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "sknFlxf9f9f9",
                "top": "1%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxServices.setDefaultUnit(kony.flex.DP);
            var lblServices = new kony.ui.Label({
                "centerY": "45%",
                "id": "lblServices",
                "isVisible": true,
                "left": "6.25%",
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
                "bottom": "1%",
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
                "right": "1%",
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxServices",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "1%",
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
                "bottom": "5%",
                "clipBounds": true,
                "height": "10%",
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
            flxDetails.add(flxDummy, imgDetails, flxDetailsMain, flxBranchDetails);
            var flxDirections = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "-70%",
                "clipBounds": true,
                "height": "93%",
                "id": "flxDirections",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "slFbox",
                "top": "81%",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxDirections.setDefaultUnit(kony.flex.DP);
            var flxDummy2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7%",
                "id": "flxDummy2",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "sknFlx000000Op50",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDummy2.setDefaultUnit(kony.flex.DP);
            flxDummy2.add();
            var imgDirections = new kony.ui.Image2({
                "height": "80dp",
                "id": "imgDirections",
                "isVisible": true,
                "left": "0%",
                "skin": "slImage",
                "src": "carddown.png",
                "top": "2%",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxDirectionMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "15%",
                "id": "flxDirectionMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "f9f9",
                "top": "7%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDirectionMain.setDefaultUnit(kony.flex.DP);
            var lblDistanceAndTime = new kony.ui.Label({
                "id": "lblDistanceAndTime",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknLbl424242SSPSemiBold93pr",
                "text": "2.2 Miles (10 minutes)",
                "textStyle": {},
                "top": "15%",
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
            var lblNavigationSteps = new kony.ui.Label({
                "id": "lblNavigationSteps",
                "isVisible": true,
                "left": "6.25%",
                "skin": "sknLbl424242SSPSemiBold93pr",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.Location.NavigationSteps\")",
                "textStyle": {},
                "top": "40%",
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
            var flxSeparator2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "1%",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparator2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxf1f1f1Op100",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeparator2.setDefaultUnit(kony.flex.DP);
            flxSeparator2.add();
            flxDirectionMain.add(lblDistanceAndTime, lblNavigationSteps, flxSeparator2);
            var flxSegDirections = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0%",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "78%",
                "horizontalScrollIndicator": true,
                "id": "flxSegDirections",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknScrFlxffffff",
                "top": "21.80%",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSegDirections.setDefaultUnit(kony.flex.DP);
            var segDirections = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgDirection": "arrow3.png",
                    "lblDirection": "Head southwest on S El Camino Real toward W 4th Ave",
                    "lblDistance": "80 Feet ",
                    "lblSeparator": "Label",
                    "lblSeparator2": "Label",
                    "lblTime": "20 Seconds"
                }, {
                    "imgDirection": "arrow3.png",
                    "lblDirection": "Head southwest on S El Camino Real toward W 4th Ave",
                    "lblDistance": "80 Feet ",
                    "lblSeparator": "Label",
                    "lblSeparator2": "Label",
                    "lblTime": "20 Seconds"
                }, {
                    "imgDirection": "arrow3.png",
                    "lblDirection": "Head southwest on S El Camino Real toward W 4th Ave",
                    "lblDistance": "80 Feet ",
                    "lblSeparator": "Label",
                    "lblSeparator2": "Label",
                    "lblTime": "20 Seconds"
                }],
                "groupCells": false,
                "id": "segDirections",
                "isVisible": true,
                "left": "0%",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowTemplate": "flxDirections",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxDirectionData": "flxDirectionData",
                    "flxDirections": "flxDirections",
                    "flxDirectionsWrapper": "flxDirectionsWrapper",
                    "flxImgDirection": "flxImgDirection",
                    "flxMain": "flxMain",
                    "imgDirection": "imgDirection",
                    "lblDirection": "lblDirection",
                    "lblDistance": "lblDistance",
                    "lblSeparator": "lblSeparator",
                    "lblSeparator2": "lblSeparator2",
                    "lblTime": "lblTime"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSegDirections.add(segDirections);
            flxDirections.add(flxDummy2, imgDirections, flxDirectionMain, flxSegDirections);
            var flxBranchesList = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0%",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxBranchesList",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknFlxScrlffffff",
                "top": "55dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 11
            }, {}, {});
            flxBranchesList.setDefaultUnit(kony.flex.DP);
            var segBranchList = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "80dp",
                "data": [{
                    "imgBank": "group.png",
                    "imgGetDirections": "segmentarrow.png",
                    "lblAddress": "504, Market street, Austin",
                    "lblDistance": "2.2 Miles",
                    "lblName": "Branch Name One",
                    "lblSatus": "OPEN",
                    "lblSeparator": "Label"
                }, {
                    "imgBank": "group.png",
                    "imgGetDirections": "segmentarrow.png",
                    "lblAddress": "504, Market street, Austin",
                    "lblDistance": "2.2 Miles",
                    "lblName": "Branch Name One",
                    "lblSatus": "OPEN",
                    "lblSeparator": "Label"
                }, {
                    "imgBank": "group.png",
                    "imgGetDirections": "segmentarrow.png",
                    "lblAddress": "504, Market street, Austin",
                    "lblDistance": "2.2 Miles",
                    "lblName": "Branch Name One",
                    "lblSatus": "OPEN",
                    "lblSeparator": "Label"
                }],
                "groupCells": false,
                "id": "segBranchList",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Normal",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxLocation",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxBankImage": "flxBankImage",
                    "flxDistance": "flxDistance",
                    "flxGetDirections": "flxGetDirections",
                    "flxLocation": "flxLocation",
                    "imgBank": "imgBank",
                    "imgGetDirections": "imgGetDirections",
                    "lblAddress": "lblAddress",
                    "lblDistance": "lblDistance",
                    "lblName": "lblName",
                    "lblSatus": "lblSatus",
                    "lblSeparator": "lblSeparator"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBranchesList.add(segBranchList);
            var flxFilters = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxFilters",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "0%",
                "skin": "sknFlx7e7e7e",
                "top": "0%",
                "width": "100%",
                "zIndex": 100
            }, {}, {});
            flxFilters.setDefaultUnit(kony.flex.DP);
            var flxFiltersMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxFiltersMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "0%",
                "skin": "f9f9",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFiltersMain.setDefaultUnit(kony.flex.DP);
            var flxFiltersegs = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "10%",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxFiltersegs",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "top": "0%",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFiltersegs.setDefaultUnit(kony.flex.DP);
            var flxFilterHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10.56%",
                "id": "flxFilterHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFilterHeader.setDefaultUnit(kony.flex.DP);
            var lblAdvanceFilter = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblAdvanceFilter",
                "isVisible": true,
                "left": "5.94%",
                "skin": "sknLbl0a78d1sspreg26px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.Location.AdvanceFilter\")",
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
            var flxFilterClose = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxFilterClose",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "6.25%",
                "skin": "slFbox",
                "top": "0%",
                "width": "15%",
                "zIndex": 1
            }, {}, {});
            flxFilterClose.setDefaultUnit(kony.flex.DP);
            var imgClose = new kony.ui.Image2({
                "centerY": "50%",
                "height": "15dp",
                "id": "imgClose",
                "isVisible": true,
                "right": "0dp",
                "skin": "slImage",
                "src": "cancelicon.png",
                "width": "15dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxFilterClose.add(imgClose);
            flxFilterHeader.add(lblAdvanceFilter, flxFilterClose);
            var flxShow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7.04%",
                "id": "flxShow",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "sknFlxf9f9f9",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShow.setDefaultUnit(kony.flex.DP);
            var lblShow = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblShow",
                "isVisible": true,
                "left": "5.94%",
                "skin": "sknLbl424242SSPSemiBold93pr",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.Location.Show\")",
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
            flxShow.add(lblShow);
            var segShow = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgCheckbox": "radiobuttoninactive.png",
                    "lblRange": "Branches",
                    "lblSeparator": "5 Miles"
                }, {
                    "imgCheckbox": "radiobuttoninactive.png",
                    "lblRange": "ATMs",
                    "lblSeparator": "5 Miles"
                }, {
                    "imgCheckbox": "radiobuttoninactive.png",
                    "lblRange": "Both",
                    "lblSeparator": "5 Miles"
                }],
                "groupCells": false,
                "id": "segShow",
                "isVisible": true,
                "left": "2.81%",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxRange",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_SINGLE_SELECT_BEHAVIOR,
                "selectionBehaviorConfig": {
                    "imageIdentifier": "imgCheckbox",
                    "selectedStateImage": "radiobtn.png",
                    "unselectedStateImage": "radiobuttoninactive.png"
                },
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxCheckbox": "flxCheckbox",
                    "flxRange": "flxRange",
                    "imgCheckbox": "imgCheckbox",
                    "lblRange": "lblRange",
                    "lblSeparator": "lblSeparator"
                },
                "width": "95%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxSelectSearchRange = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7.04%",
                "id": "flxSelectSearchRange",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "sknFlxf9f9f9",
                "top": "-0.50%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSelectSearchRange.setDefaultUnit(kony.flex.DP);
            var lblSelectSearchRange = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblSelectSearchRange",
                "isVisible": true,
                "left": "5.94%",
                "skin": "sknLbl424242SSPSemiBold93pr",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.Location.SelectSearchRange\")",
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
            flxSelectSearchRange.add(lblSelectSearchRange);
            var segSelectSearchRange = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgCheckbox": "radiobuttoninactive.png",
                    "lblRange": "5 Miles",
                    "lblSeparator": "."
                }, {
                    "imgCheckbox": "radiobuttoninactive.png",
                    "lblRange": "10 Miles",
                    "lblSeparator": "."
                }, {
                    "imgCheckbox": "radiobuttoninactive.png",
                    "lblRange": "25 Miles",
                    "lblSeparator": "."
                }, {
                    "imgCheckbox": "radiobuttoninactive.png",
                    "lblRange": "50 Miles",
                    "lblSeparator": "."
                }, {
                    "imgCheckbox": "radiobuttoninactive.png",
                    "lblRange": "100 Miles",
                    "lblSeparator": "."
                }],
                "groupCells": false,
                "id": "segSelectSearchRange",
                "isVisible": true,
                "left": "2.81%",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxRange",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_SINGLE_SELECT_BEHAVIOR,
                "selectionBehaviorConfig": {
                    "imageIdentifier": "imgCheckbox",
                    "selectedStateImage": "radiobtn.png",
                    "unselectedStateImage": "radiobuttoninactive.png"
                },
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxCheckbox": "flxCheckbox",
                    "flxRange": "flxRange",
                    "imgCheckbox": "imgCheckbox",
                    "lblRange": "lblRange",
                    "lblSeparator": "lblSeparator"
                },
                "width": "95%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxServicesFilter = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7.04%",
                "id": "flxServicesFilter",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "sknFlxf9f9f9",
                "top": "-0.50%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxServicesFilter.setDefaultUnit(kony.flex.DP);
            var lblServicesFilter = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblServicesFilter",
                "isVisible": true,
                "left": "5.94%",
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
            flxServicesFilter.add(lblServicesFilter);
            var segServicesFilter = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgCheckbox": "radiobuttoninactive.png",
                    "lblRange": "All",
                    "lblSeparator": "."
                }, {
                    "imgCheckbox": "radiobuttoninactive.png",
                    "lblRange": "Make an Appointment",
                    "lblSeparator": "."
                }, {
                    "imgCheckbox": "radiobuttoninactive.png",
                    "lblRange": "Onsite Relationship Manager",
                    "lblSeparator": "."
                }, {
                    "imgCheckbox": "radiobuttoninactive.png",
                    "lblRange": "Home Loan Specialists",
                    "lblSeparator": "."
                }, {
                    "imgCheckbox": "radiobuttoninactive.png",
                    "lblRange": "Financial Advisors",
                    "lblSeparator": "."
                }],
                "groupCells": false,
                "id": "segServicesFilter",
                "isVisible": true,
                "left": "2.81%",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxRange",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_MULTI_SELECT_BEHAVIOR,
                "selectionBehaviorConfig": {
                    "imageIdentifier": "imgCheckbox",
                    "selectedStateImage": "remembermetick.png",
                    "unselectedStateImage": "remeberme.png"
                },
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxCheckbox": "flxCheckbox",
                    "flxRange": "flxRange",
                    "imgCheckbox": "imgCheckbox",
                    "lblRange": "lblRange",
                    "lblSeparator": "lblSeparator"
                },
                "width": "95%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxFiltersegs.add(flxFilterHeader, flxShow, segShow, flxSelectSearchRange, segSelectSearchRange, flxServicesFilter, segServicesFilter);
            var btnApply = new kony.ui.Button({
                "bottom": "2%",
                "centerX": "50%",
                "focusSkin": "sknBtn0095e4RoundedffffffSSP26px",
                "height": "7.04%",
                "id": "btnApply",
                "isVisible": true,
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.Location.Apply\")",
                "width": "81%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxFiltersMain.add(flxFiltersegs, btnApply);
            flxFilters.add(flxFiltersMain);
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
            flxMainContainer.add(flxHeaderAndSearch, flxHeaderSearchbox, flxMap, flxMapButtons, flxDetails, flxDirections, flxBranchesList, flxFilters, flxHamburger);
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
            var flxFooter = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "60dp",
                "id": "flxFooter",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFooter.setDefaultUnit(kony.flex.DP);
            var customFooter = new com.kmb.common.customFooter({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
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
            customFooter.flxBillSelected.isVisible = false;
            customFooter.flxTransferSel.isVisible = false;
            flxFooter.add(customFooter);
            this.add(flxMainContainer, flxPopup, flxFooter);
        };
        return [{
            "addWidgets": addWidgetsfrmLocation,
            "enableScrolling": false,
            "enabledForIdleTimeout": true,
            "id": "frmLocation",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": true,
            "preShow": controller.AS_Form_cd12bb55731748f59cf8c5d1caa6018c,
            "skin": "sknFrmffffff",
            "title": "Locate Us"
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