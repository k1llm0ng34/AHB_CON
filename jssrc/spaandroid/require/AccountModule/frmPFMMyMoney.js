define("AccountModule/frmPFMMyMoney", function() {
    return function(controller) {
        function addWidgetsfrmPFMMyMoney() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "56dp",
                "id": "flxHeader",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 11
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
            customHeader.lblLocateUs.text = "My Money";
            flxHeader.add(customHeader);
            var flxMainContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "0dp",
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var flxButtons = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "46dp",
                "id": "flxButtons",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxButtons.setDefaultUnit(kony.flex.DP);
            var flxTopButtons = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "30dp",
                "id": "flxTopButtons",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "50dp",
                "right": "50dp",
                "skin": "sknflxbgffffffborder046AF9radius4px",
                "zIndex": 1
            }, {}, {});
            flxTopButtons.setDefaultUnit(kony.flex.DP);
            var btnSpending = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "sknBtn0095e426pxEnabled",
                "height": "100%",
                "id": "btnSpending",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknbtnbg046AF9noradius",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.PFM.SPENDING\")",
                "top": "11dp",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnBudget = new kony.ui.Button({
                "centerY": "49.52%",
                "focusSkin": "sknBtn0095e426pxEnabled",
                "height": "100%",
                "id": "btnBudget",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknbtnfont046AF9noradius",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.PFM.BUDGET\")",
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxTopButtons.add(btnSpending, btnBudget);
            var flxSeperator1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperator1.setDefaultUnit(kony.flex.DP);
            flxSeperator1.add();
            flxButtons.add(flxTopButtons, flxSeperator1);
            var flxRangeAndCal = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "48dp",
                "id": "flxRangeAndCal",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxRangeAndCal.setDefaultUnit(kony.flex.DP);
            var flxDateLeft = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxDateLeft",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": 0,
                "skin": "slFbox",
                "top": "0dp",
                "width": "55dp",
                "zIndex": 1
            }, {}, {});
            flxDateLeft.setDefaultUnit(kony.flex.DP);
            var imgCalLeft = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "12dp",
                "id": "imgCalLeft",
                "isVisible": true,
                "skin": "slImage",
                "src": "calenderarrowleft.png",
                "width": "12dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDateLeft.add(imgCalLeft);
            var flxDateRange = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxDateRange",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "55dp",
                "right": "111dp",
                "skin": "slFbox",
                "top": "0dp",
                "zIndex": 2
            }, {}, {});
            flxDateRange.setDefaultUnit(kony.flex.DP);
            var lblDateRange = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblDateRange",
                "isVisible": true,
                "skin": "sknLbl4a4a4a22px",
                "text": "January 2018",
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
            flxDateRange.add(lblDateRange);
            var flxDateRight = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxDateRight",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "56dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "55dp",
                "zIndex": 1
            }, {}, {});
            flxDateRight.setDefaultUnit(kony.flex.DP);
            var imgCalRight = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "12dp",
                "id": "imgCalRight",
                "isVisible": true,
                "skin": "slImage",
                "src": "calenderarrowright.png",
                "width": "12dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDateRight.add(imgCalRight);
            var flxCalSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxCalSeperator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "55dp",
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "1dp",
                "zIndex": 2
            }, {}, {});
            flxCalSeperator.setDefaultUnit(kony.flex.DP);
            flxCalSeperator.add();
            var flxCalIcon = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxCalIcon",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "55dp",
                "zIndex": 1
            }, {}, {});
            flxCalIcon.setDefaultUnit(kony.flex.DP);
            var imgCalIcon = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "25dp",
                "id": "imgCalIcon",
                "isVisible": true,
                "skin": "slImage",
                "src": "calender.png",
                "width": "25dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxCalIcon.add(imgCalIcon);
            var flxSeperator2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperator2.setDefaultUnit(kony.flex.DP);
            flxSeperator2.add();
            flxRangeAndCal.add(flxDateLeft, flxDateRange, flxDateRight, flxCalSeperator, flxCalIcon, flxSeperator2);
            var flxCharts = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "280dp",
                "id": "flxCharts",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxCharts.setDefaultUnit(kony.flex.DP);
            var flxPieChart = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxPieChart",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPieChart.setDefaultUnit(kony.flex.DP);
            var brwsrPie = new kony.ui.Browser({
                "centerX": "50%",
                "centerY": "47%",
                "detectTelNumber": true,
                "enableZoom": false,
                "height": "85%",
                "id": "brwsrPie",
                "isVisible": true,
                "left": "0%",
                "requestURLConfig": {
                    "URL": "",
                    "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
                },
                "top": "0%",
                "width": "95%",
                "zIndex": 1
            }, {}, {});
            flxPieChart.add(brwsrPie);
            var flxDummy = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxDummy",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "onClick": controller.AS_FlexContainer_f440b7436f27438ca4595c1d01793cff,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxDummy.setDefaultUnit(kony.flex.DP);
            flxDummy.add();
            var flxBarChart = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxBarChart",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBarChart.setDefaultUnit(kony.flex.DP);
            var ImgBarChart = new kony.ui.Image2({
                "bottom": "25dp",
                "id": "ImgBarChart",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "slImage",
                "src": "bardaigram.png",
                "top": "25dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBarChart.add(ImgBarChart);
            flxCharts.add(flxPieChart, flxDummy, flxBarChart);
            var flxBudgetSegment = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxBudgetSegment",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBudgetSegment.setDefaultUnit(kony.flex.DP);
            var flxColors = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxColors",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxColors.setDefaultUnit(kony.flex.DP);
            var flxSpent = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxSpent",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "33.33%",
                "zIndex": 1
            }, {}, {});
            flxSpent.setDefaultUnit(kony.flex.DP);
            var flxColorSpent = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "10dp",
                "id": "flxColorSpent",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "30dp",
                "skin": "sknflx5caf00Radius20px",
                "width": "10dp",
                "zIndex": 1
            }, {}, {});
            flxColorSpent.setDefaultUnit(kony.flex.DP);
            flxColorSpent.add();
            var lblSpent = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblSpent",
                "isVisible": true,
                "left": "8dp",
                "skin": "sknLbl424242SSP22px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.PFM.Spent\")",
                "textStyle": {},
                "top": "8dp",
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
            flxSpent.add(flxColorSpent, lblSpent);
            var flxTarget = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxTarget",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "33.33%",
                "zIndex": 1
            }, {}, {});
            flxTarget.setDefaultUnit(kony.flex.DP);
            var flxColorTarget = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "10dp",
                "id": "flxColorTarget",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "skin": "sknflxe0e0e0Radius20px",
                "width": "10dp",
                "zIndex": 1
            }, {}, {});
            flxColorTarget.setDefaultUnit(kony.flex.DP);
            flxColorTarget.add();
            var lblTarget = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblTarget",
                "isVisible": true,
                "left": "8dp",
                "skin": "sknLbl424242SSP22px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.PFM.Target\")",
                "textStyle": {},
                "top": "8dp",
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
            flxTarget.add(flxColorTarget, lblTarget);
            var flxExceeded = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxExceeded",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "33.33%",
                "zIndex": 1
            }, {}, {});
            flxExceeded.setDefaultUnit(kony.flex.DP);
            var flxColorExceeding = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "10dp",
                "id": "flxColorExceeding",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10dp",
                "skin": "sknflxfd031fRadius20px",
                "width": "10dp",
                "zIndex": 1
            }, {}, {});
            flxColorExceeding.setDefaultUnit(kony.flex.DP);
            flxColorExceeding.add();
            var lblExceeded = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblExceeded",
                "isVisible": true,
                "left": "8dp",
                "skin": "sknLbl424242SSP22px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.PFM.Exceeded\")",
                "textStyle": {},
                "top": "8dp",
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
            flxExceeded.add(flxColorExceeding, lblExceeded);
            flxColors.add(flxSpent, flxTarget, flxExceeded);
            var flxBudgetSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxBudgetSeperator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxBudgetSeperator.setDefaultUnit(kony.flex.DP);
            flxBudgetSeperator.add();
            var segBudget = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "imgBudgetType": "education.png",
                    "lblBudgetAmount": "$134.00",
                    "lblBudgetName": "Education - 45%"
                }, {
                    "imgBudgetType": "groceries.png",
                    "lblBudgetAmount": "$134.00",
                    "lblBudgetName": "Groceries- 45%"
                }, {
                    "imgBudgetType": "homeneeds.png",
                    "lblBudgetAmount": "$134.00",
                    "lblBudgetName": "Home Needs- 45%"
                }, {
                    "imgBudgetType": "medical.png",
                    "lblBudgetAmount": "$134.00",
                    "lblBudgetName": "Medical- 45%"
                }, {
                    "imgBudgetType": "miscellaneous.png",
                    "lblBudgetAmount": "$134.00",
                    "lblBudgetName": "Miscellaneous- 45%"
                }, {
                    "imgBudgetType": "rent.png",
                    "lblBudgetAmount": "$134.00",
                    "lblBudgetName": "Rent- 45%"
                }, {
                    "imgBudgetType": "travel.png",
                    "lblBudgetAmount": "$134.00",
                    "lblBudgetName": "Travel- 45%"
                }],
                "groupCells": false,
                "id": "segBudget",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxPFMBudget",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "f1f1f100",
                "separatorRequired": true,
                "separatorThickness": 2,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxExceeded": "flxExceeded",
                    "flxPFMBudget": "flxPFMBudget",
                    "flxProgressBar": "flxProgressBar",
                    "flxSpent": "flxSpent",
                    "flxTarget": "flxTarget",
                    "imgBudgetType": "imgBudgetType",
                    "lblBudgetAmount": "lblBudgetAmount",
                    "lblBudgetName": "lblBudgetName"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBudgetSegment.add(flxColors, flxBudgetSeperator, segBudget);
            var flxToggle = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxToggle",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxToggle.setDefaultUnit(kony.flex.DP);
            var flxSeperator3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperator3.setDefaultUnit(kony.flex.DP);
            flxSeperator3.add();
            var flxToggleWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "30dp",
                "id": "flxToggleWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "skin": "slFbox",
                "width": "60dp",
                "zIndex": 1
            }, {}, {});
            flxToggleWrapper.setDefaultUnit(kony.flex.DP);
            var flxPie = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxPie",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {}, {});
            flxPie.setDefaultUnit(kony.flex.DP);
            var imgPie = new kony.ui.Image2({
                "height": "100%",
                "id": "imgPie",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "piechartactive.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxPie.add(imgPie);
            var flxBar = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxBar",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {}, {});
            flxBar.setDefaultUnit(kony.flex.DP);
            var imgBar = new kony.ui.Image2({
                "height": "100%",
                "id": "imgBar",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "barchartinactive.png",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBar.add(imgBar);
            flxToggleWrapper.add(flxPie, flxBar);
            flxToggle.add(flxSeperator3, flxToggleWrapper);
            var flxIncomeAndSpending = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxIncomeAndSpending",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxIncomeAndSpending.setDefaultUnit(kony.flex.DP);
            var flxSeperator4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperator4.setDefaultUnit(kony.flex.DP);
            flxSeperator4.add();
            var flxIncome = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxIncome",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {}, {});
            flxIncome.setDefaultUnit(kony.flex.DP);
            var lblTotalIncome = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblTotalIncome",
                "isVisible": true,
                "skin": "sknLbl4a4a4a22px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.PFM.TotalIncome\")",
                "textStyle": {},
                "top": "10dp",
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
            var lblTotalIncomeValue = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblTotalIncomeValue",
                "isVisible": true,
                "skin": "sknLbl4a4a4aSSPBold36px",
                "text": "$2,783.54",
                "textStyle": {},
                "top": "25dp",
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
            flxIncome.add(lblTotalIncome, lblTotalIncomeValue);
            var flxSpendingSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxSpendingSeperator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "sknFlxf1f1f1",
                "top": "0dp",
                "width": "1dp",
                "zIndex": 2
            }, {}, {});
            flxSpendingSeperator.setDefaultUnit(kony.flex.DP);
            flxSpendingSeperator.add();
            var flxSpending = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxSpending",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": 0,
                "skin": "slFbox",
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {}, {});
            flxSpending.setDefaultUnit(kony.flex.DP);
            var lblTotalSpendnig = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblTotalSpendnig",
                "isVisible": true,
                "skin": "sknLbl4a4a4a22px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.PFM.TotalSpending\")",
                "textStyle": {},
                "top": "10dp",
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
            var lblTotalSpendingValue = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblTotalSpendingValue",
                "isVisible": true,
                "skin": "sknLbl4a4a4aSSPBold36px",
                "text": "$568.54",
                "textStyle": {},
                "top": "25dp",
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
            flxSpending.add(lblTotalSpendnig, lblTotalSpendingValue);
            var flxSeperator5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator5",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSeperator5.setDefaultUnit(kony.flex.DP);
            flxSeperator5.add();
            flxIncomeAndSpending.add(flxSeperator4, flxIncome, flxSpendingSeperator, flxSpending, flxSeperator5);
            var flxSpendingDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxSpendingDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSpendingDetails.setDefaultUnit(kony.flex.DP);
            var segSpending = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "lblAmountSpent": "$134.00",
                    "lblSpending": "Rent - 45%"
                }, {
                    "lblAmountSpent": "$134.00",
                    "lblSpending": "Rent - 45%"
                }, {
                    "lblAmountSpent": "$134.00",
                    "lblSpending": "Rent - 45%"
                }, {
                    "lblAmountSpent": "$134.00",
                    "lblSpending": "Rent - 45%"
                }],
                "groupCells": false,
                "id": "segSpending",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxPFMSpending",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxColor": "flxColor",
                    "flxPFMSpending": "flxPFMSpending",
                    "flxSeperator": "flxSeperator",
                    "lblAmountSpent": "lblAmountSpent",
                    "lblSpending": "lblSpending"
                },
                "widgetSkin": "seg2Normal",
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxSegSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSegSeperator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 110
            }, {}, {});
            flxSegSeperator.setDefaultUnit(kony.flex.DP);
            flxSegSeperator.add();
            flxSpendingDetails.add(segSpending, flxSegSeperator);
            var btnViewTransactions = new kony.ui.Button({
                "bottom": 27,
                "centerX": "50.00%",
                "focusSkin": "sknBtn0095e4RoundedffffffSSP26px",
                "height": "40dp",
                "id": "btnViewTransactions",
                "isVisible": true,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.PFM.VIEWTRANSACTIONS\")",
                "top": "20dp",
                "width": "87%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxMainContainer.add(flxButtons, flxRangeAndCal, flxCharts, flxBudgetSegment, flxToggle, flxIncomeAndSpending, flxSpendingDetails, btnViewTransactions);
            var flxEdit = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxEdit",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlx000000Op50",
                "top": "0dp",
                "width": "100%",
                "zIndex": 12
            }, {}, {});
            flxEdit.setDefaultUnit(kony.flex.DP);
            var flxOptions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "20dp",
                "clipBounds": true,
                "height": "100dp",
                "id": "flxOptions",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "20dp",
                "right": "20dp",
                "skin": "sknFlxffffffRadiusffffff10px",
                "zIndex": 1
            }, {}, {});
            flxOptions.setDefaultUnit(kony.flex.DP);
            var flxOption1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxOption1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxOption1.setDefaultUnit(kony.flex.DP);
            var lblOption1 = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblOption1",
                "isVisible": true,
                "skin": "sknLbl0095e4SSPRegular26px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.Messages.TakeAPicture\")",
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
            var flxSeparatorOption1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparatorOption1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSeparatorOption1.setDefaultUnit(kony.flex.DP);
            flxSeparatorOption1.add();
            flxOption1.add(lblOption1, flxSeparatorOption1);
            var flxOption2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxOption2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxOption2.setDefaultUnit(kony.flex.DP);
            var lblOption2 = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblOption2",
                "isVisible": true,
                "skin": "sknLbl0095e4SSPRegular26px",
                "i18n_text": "kony.i18n.getLocalizedString(\"kony.mb.OnBoarding.ChooseFromGallery\")",
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
            flxOption2.add(lblOption2);
            flxOptions.add(flxOption1, flxOption2);
            flxEdit.add(flxOptions);
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
                "zIndex": 202
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
            this.add(flxHeader, flxMainContainer, flxEdit, flxPopup);
        };
        return [{
            "addWidgets": addWidgetsfrmPFMMyMoney,
            "enabledForIdleTimeout": true,
            "id": "frmPFMMyMoney",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_a5df6ed5cc624a70aa85db84531df974,
            "preShow": controller.AS_Form_c9294c1e0a0243fb9f426fd2dd224ffe,
            "skin": "sknFrmffffff",
            "i18n_title": "kony.i18n.getLocalizedString(\"kony.mb.PFMMyMoney\")"
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