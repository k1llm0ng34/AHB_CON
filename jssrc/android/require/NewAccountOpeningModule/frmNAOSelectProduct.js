define("NewAccountOpeningModule/frmNAOSelectProduct", function() {
    return function(controller) {
        function addWidgetsfrmNAOSelectProduct() {
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
                "zIndex": 6
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
            customHeader.btnRight.text = "CLOSE";
            customHeader.flxBack.isVisible = false;
            customHeader.imgBack.isVisible = true;
            customHeader.lblLocateUs.text = "SELECT PRODUCTS";
            flxHeader.add(customHeader);
            var flxSelectProducts = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": "80dp",
                "bounces": true,
                "clipBounds": false,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "flxSelectProducts",
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
            flxSelectProducts.setDefaultUnit(kony.flex.DP);
            var flxSearch = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "55dp",
                "id": "flxSearch",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "25dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 4
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
                "centerY": "49.79%",
                "focusSkin": "sknTbxSSPf1f1f1B",
                "height": "35dp",
                "id": "tbxSearch",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "20dp",
                "placeholder": kony.i18n.getLocalizedString("kony.mb.ExternalAccounts.Search"),
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
                "paddingInPixel": true
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_SEARCH,
                "placeholderSkin": "sknTbxPlaceholderDefault",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxSearchMain.add(imgSearchIcon, tbxSearch);
            var flxSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeperator",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxf1f1f1",
                "width": "100%",
                "zIndex": 1000
            }, {}, {});
            flxSeperator.setDefaultUnit(kony.flex.DP);
            flxSeperator.add();
            flxSearch.add(flxSearchMain, flxSeperator);
            var flxProgress = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "flxProgress",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxffffff",
                "top": "0dp",
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
                "right": "80%",
                "skin": "sknFlxda8b08",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxProgressPersonalInfo.setDefaultUnit(kony.flex.DP);
            flxProgressPersonalInfo.add();
            flxProgress.add(flxProgressBackgroundPersonalInfo, flxProgressPersonalInfo);
            var flxHeaderSelectProducts = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "40dp",
                "id": "flxHeaderSelectProducts",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxffffffShadow",
                "top": "56dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxHeaderSelectProducts.setDefaultUnit(kony.flex.DP);
            var customSearch = new com.kmb.Search.customSearch({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "95dp",
                "id": "customSearch",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "skin": "sknFlx1a98ff",
                "top": "0%",
                "width": "100%"
            }, {}, {});
            customSearch.height = "95dp";
            customSearch.isVisible = true;
            customSearch.flxHeader.isVisible = true;
            customSearch.flxHeaderShadow.zIndex = 1;
            customSearch.flxSearchMain.isVisible = true;
            customSearch.tbxSearch.placeholder = "Search Products...";
            flxHeaderSelectProducts.add(customSearch);
            var segSelectProducts = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "btnViewDetails": "Button",
                    "imgCheckbox": "remeberme.png",
                    "lblProductInfo": "Label",
                    "lblProductSubTitle": "Label",
                    "lblProductTitle": "Label"
                }, {
                    "btnViewDetails": "Button",
                    "imgCheckbox": "remeberme.png",
                    "lblProductInfo": "Label",
                    "lblProductSubTitle": "Label",
                    "lblProductTitle": "Label"
                }, {
                    "btnViewDetails": "Button",
                    "imgCheckbox": "remeberme.png",
                    "lblProductInfo": "Label",
                    "lblProductSubTitle": "Label",
                    "lblProductTitle": "Label"
                }, {
                    "btnViewDetails": "Button",
                    "imgCheckbox": "remeberme.png",
                    "lblProductInfo": "Label",
                    "lblProductSubTitle": "Label",
                    "lblProductTitle": "Label"
                }],
                "groupCells": false,
                "id": "segSelectProducts",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "sknSegf9f9f9",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxSelectProduct",
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
                    "btnViewDetails": "btnViewDetails",
                    "flxSelectProduct": "flxSelectProduct",
                    "flxShadowUser": "flxShadowUser",
                    "imgCheckbox": "imgCheckbox",
                    "lblProductInfo": "lblProductInfo",
                    "lblProductSubTitle": "lblProductSubTitle",
                    "lblProductTitle": "lblProductTitle"
                },
                "widgetSkin": "seg2Normal",
                "width": "100%",
                "zIndex": 3
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxNoRecords = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": 350,
                "id": "flxNoRecords",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "sknFlxffffff",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxNoRecords.setDefaultUnit(kony.flex.DP);
            var lblNoTransaction = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblNoTransaction",
                "isVisible": true,
                "skin": "sknlbl727272SSP93pr",
                "text": kony.i18n.getLocalizedString("kony.mb.OB.NoRecordsAvailable"),
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "50%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 6
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxNoRecords.add(lblNoTransaction);
            flxSelectProducts.add(flxSearch, flxProgress, flxHeaderSelectProducts, segSelectProducts, flxNoRecords);
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
                "zIndex": 12
            }, {}, {});
            flxHeaderSearchbox.setDefaultUnit(kony.flex.DP);
            var customSearchbox = new com.kmb.Search.customSearchbox({
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
            customSearchbox.top = "0dp";
            customSearchbox.tbxSearch.placeholder = "Search Products...";
            flxHeaderSearchbox.add(customSearchbox);
            var flxPopupDeviceLocation = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxPopupDeviceLocation",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyslFbox0f2a5b0bfd49a49",
                "top": "0%",
                "width": "100%",
                "zIndex": 14
            }, {}, {});
            flxPopupDeviceLocation.setDefaultUnit(kony.flex.DP);
            var flxPopupDeviceLocationWrapper = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "7%",
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "116dp",
                "id": "flxPopupDeviceLocationWrapper",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "skin": "sknFlxPopupDocuments",
                "width": "245dp",
                "zIndex": 1
            }, {}, {});
            flxPopupDeviceLocationWrapper.setDefaultUnit(kony.flex.DP);
            var rtxCompleteMessage = new kony.ui.RichText({
                "centerX": "50%",
                "height": "74dp",
                "id": "rtxCompleteMessage",
                "isVisible": true,
                "linkSkin": "defRichTextLink",
                "skin": "sknRtx424242SSP24px",
                "text": kony.i18n.getLocalizedString("kony.mb.NAOS.AccessLocation"),
                "top": "0dp",
                "width": "90%",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblSeparatorComplete = new kony.ui.Label({
                "centerX": "50%",
                "height": "1dp",
                "id": "lblSeparatorComplete",
                "isVisible": true,
                "left": "-2%",
                "skin": "sknLblSeparatore3e3e3",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "105%",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxPopupCompleteActions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "centerX": "50%",
                "clipBounds": false,
                "height": "41dp",
                "id": "flxPopupCompleteActions",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "skin": "sknFlxPopupDocuments",
                "width": "245dp",
                "zIndex": 1
            }, {}, {});
            flxPopupCompleteActions.setDefaultUnit(kony.flex.DP);
            var btnDontAllow = new kony.ui.Button({
                "height": "100%",
                "id": "btnDontAllow",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknBtn0095e428px",
                "text": kony.i18n.getLocalizedString("kony.mb.NAO.DontAllow"),
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblSeparatorContinueTwo = new kony.ui.Label({
                "height": "100%",
                "id": "lblSeparatorContinueTwo",
                "isVisible": true,
                "left": "0%",
                "skin": "sknLblSeparatore3e3e3",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "-1dp",
                "width": "1dp",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var btnAllow = new kony.ui.Button({
                "height": "100%",
                "id": "btnAllow",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknBtn0095e428px",
                "text": kony.i18n.getLocalizedString("kony.mb.NAO.Allow"),
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxPopupCompleteActions.add(btnDontAllow, lblSeparatorContinueTwo, btnAllow);
            flxPopupDeviceLocationWrapper.add(rtxCompleteMessage, lblSeparatorComplete, flxPopupCompleteActions);
            flxPopupDeviceLocation.add(flxPopupDeviceLocationWrapper);
            var flxProductDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxProductDetails",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0.00%",
                "width": "100%",
                "zIndex": 6
            }, {}, {});
            flxProductDetails.setDefaultUnit(kony.flex.DP);
            var flxHeaderProductDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "7%",
                "id": "flxHeaderProductDetails",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxffffffShadow",
                "top": "0%",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxHeaderProductDetails.setDefaultUnit(kony.flex.DP);
            var customHeaderProductDetails = new com.kmb.common.customHeader({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "100%",
                "id": "customHeaderProductDetails",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            customHeaderProductDetails.height = "100%";
            customHeaderProductDetails.flxBack.isVisible = true;
            customHeaderProductDetails.flxBack.top = "0dp";
            customHeaderProductDetails.flxSearch.isVisible = false;
            customHeaderProductDetails.imgBack.src = "cancelicon.png";
            customHeaderProductDetails.lblLocateUs.text = "Regular Savings";
            flxHeaderProductDetails.add(customHeaderProductDetails);
            var flxSeparatorHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparatorHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxe3e3e3",
                "top": "0dp",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxSeparatorHeader.setDefaultUnit(kony.flex.DP);
            flxSeparatorHeader.add();
            var flxProductDetailsTabs = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "7%",
                "id": "flxProductDetailsTabs",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxe3e3e3Shadow",
                "top": "0%",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxProductDetailsTabs.setDefaultUnit(kony.flex.DP);
            var btnFeatures = new kony.ui.Button({
                "height": "100%",
                "id": "btnFeatures",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknBtnffffff424242SSP24px",
                "text": kony.i18n.getLocalizedString("kony.mb.NAO.Features"),
                "top": "0dp",
                "width": "33.20%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnCharges = new kony.ui.Button({
                "centerX": "50%",
                "height": "100%",
                "id": "btnCharges",
                "isVisible": true,
                "skin": "sknBtnffffff424242SSP24px",
                "text": kony.i18n.getLocalizedString("kony.mb.NAO.Charges"),
                "top": "0dp",
                "width": "33.20%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnInfo = new kony.ui.Button({
                "height": "100%",
                "id": "btnInfo",
                "isVisible": true,
                "right": "0dp",
                "skin": "sknBtnffffff424242SSP24px",
                "text": kony.i18n.getLocalizedString("kony.mb.NAO.Info"),
                "top": "0dp",
                "width": "33.20%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxFeaturesSelected = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxFeaturesSelected",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlx0095e4",
                "width": "33.20%",
                "zIndex": 4
            }, {}, {});
            flxFeaturesSelected.setDefaultUnit(kony.flex.DP);
            flxFeaturesSelected.add();
            var flxChargesSelected = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxChargesSelected",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "sknFlx0095e4",
                "width": "33.20%",
                "zIndex": 4
            }, {}, {});
            flxChargesSelected.setDefaultUnit(kony.flex.DP);
            flxChargesSelected.add();
            var flxInfoSelected = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxInfoSelected",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "right": "0dp",
                "skin": "sknFlx0095e4",
                "width": "33.20%",
                "zIndex": 4
            }, {}, {});
            flxInfoSelected.setDefaultUnit(kony.flex.DP);
            flxInfoSelected.add();
            flxProductDetailsTabs.add(btnFeatures, btnCharges, btnInfo, flxFeaturesSelected, flxChargesSelected, flxInfoSelected);
            var flxSeparatorButtons = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparatorButtons",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxe3e3e3",
                "top": "-1dp",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            flxSeparatorButtons.setDefaultUnit(kony.flex.DP);
            flxSeparatorButtons.add();
            var segProductDetails = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "btnShowMore": "SHOW MORE",
                    "lblSubTitle": "Basic information about this card. Show only very brief description here. If there are more info we can show the link here as show more. It brings more info by expanding the section. ",
                    "lblTitle": "About Product",
                    "rtxData": "RichText"
                }, {
                    "btnShowMore": "SHOW MORE",
                    "lblSubTitle": "Basic information about this card. Show only very brief description here. If there are more info we can show the link here as show more. It brings more info by expanding the section. ",
                    "lblTitle": "Benifits",
                    "rtxData": "RichText"
                }, {
                    "btnShowMore": "SHOW MORE",
                    "lblSubTitle": "Basic information about this card. Show only very brief description here. If there are more info we can show the link here as show more. It brings more info by expanding the section. ",
                    "lblTitle": "Additional Features",
                    "rtxData": "RichText"
                }],
                "groupCells": false,
                "id": "segProductDetails",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxProductDetails",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "-15dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "FlexContainer0je14ed46783344": "FlexContainer0je14ed46783344",
                    "btnShowMore": "btnShowMore",
                    "flxProductDetails": "flxProductDetails",
                    "lblSubTitle": "lblSubTitle",
                    "lblTitle": "lblTitle",
                    "rtxData": "rtxData"
                },
                "width": "100%",
                "zIndex": 3
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxProductDetails.add(flxHeaderProductDetails, flxSeparatorHeader, flxProductDetailsTabs, flxSeparatorButtons, segProductDetails);
            var flxGradient = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "45%",
                "id": "flxGradient",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "sknFlxGradientBlue",
                "top": "56dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxGradient.setDefaultUnit(kony.flex.DP);
            flxGradient.add();
            var btnContinueSelectProducts = new kony.ui.Button({
                "bottom": "20dp",
                "centerX": "50%",
                "height": "40dp",
                "id": "btnContinueSelectProducts",
                "isVisible": true,
                "skin": "sknBtn0095e4RoundedffffffSSP26px",
                "text": kony.i18n.getLocalizedString("kony.mb.common.continue"),
                "width": "87%",
                "zIndex": 4
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            this.add(flxHeader, flxSelectProducts, flxHeaderSearchbox, flxPopupDeviceLocation, flxProductDetails, flxGradient, btnContinueSelectProducts);
        };
        return [{
            "addWidgets": addWidgetsfrmNAOSelectProduct,
            "enabledForIdleTimeout": true,
            "id": "frmNAOSelectProduct",
            "init": controller.AS_Form_ie3c596af4e540faa633936370b1914a,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": true,
            "preShow": controller.AS_Form_e65080a1ae484deaa827aa7b7d35418d,
            "skin": "sknFrmffffff",
            "title": kony.i18n.getLocalizedString("kony.mb.NAOSelectProduct.Title")
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