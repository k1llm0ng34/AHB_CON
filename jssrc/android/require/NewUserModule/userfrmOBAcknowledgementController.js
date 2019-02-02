define({
    init: function() {
        var navManager = applicationManager.getNavigationManager();
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().initCommonActions(this, "YES_NUOLANDING", currentForm);
    },
    preShow: function() {
        var navManager = applicationManager.getNavigationManager();
        var formdata = navManager.getCustomInfo("frmOBAcknowledgement");
        if (formdata.form == "signature") {
            this.view.flxMain.setVisibility(true);
            this.view.flxSignature.setVisibility(false);
            this.view.lblGoToAccounts.setVisibility(true);
            this.view.lblStatus.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.nuo.Congratulations!");
            this.view.segSelectedProducts.setVisibility(true);
            var productsdata = navManager.getCustomInfo("frmOBSelectProducts");
            var userproducts = productsdata.products.userProducts;
            this.setSegmentData(userproducts);
            this.view.lblGoToAccounts.onClick = function() {
                applicationManager.getPresentationUtility().showLoadingScreen();
                var navManager = applicationManager.getNavigationManager();
                var loginData = navManager.getCustomInfo("frmLogin");
                var nuoUserData = navManager.getCustomInfo("frmOBLogin");
                loginData.NUOUsername = nuoUserData.username;
                navManager.setCustomInfo("frmLogin", loginData);
                var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
                NUOMod.presentationController.onLogout();
            };
        } else if (formdata.form == "creditcheck") {
            this.view.lblGoToAccounts.setVisibility(false);
            this.view.imgSign.src = "sign.png";
            this.view.flxMain.setVisibility(false);
            this.view.flxSignature.setVisibility(true);
            this.view.lblStatus.text = applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.nuo.CreditCheckSuccessful");
            this.view.segSelectedProducts.setVisibility(false);
            this.view.flxSignature.onClick = function() {
                applicationManager.getPresentationUtility().showLoadingScreen();
                var navManager = applicationManager.getNavigationManager();
                navManager.setCustomInfo("frmOBSignature", {});
                var NUOMod = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("NewUserModule");
                NUOMod.presentationController.commonFunctionForNavigation("frmOBSignature");
            };
        }
        var currentForm = navManager.getCurrentForm();
        applicationManager.getPresentationFormUtility().logFormName(currentForm);
        applicationManager.getPresentationUtility().dismissLoadingScreen();
    },
    setSegmentData: function(userproducts) {
            var proList = [],
                products;
            for (var i = 0; i < userproducts.length; i++) {
                if (userproducts[i]["productType"] == "Credit Card") {
                    products = {
                        // "imgProduct":{"src":"appicon.png"},
                        "lblProduct": userproducts[i]["productName"],
                        "lblProductInfo": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.nuo.Yourcardwillbedispatched")
                    };
                } else {
                    products = {
                        //"imgProduct":{"src":"appicon.png"},
                        "lblProduct": userproducts[i]["productName"],
                        "lblProductInfo": applicationManager.getPresentationUtility().getStringFromi18n("kony.mb.nuo.YourAccountisActive")
                    };
                }
                proList.push(products);
            }
            this.view.segSelectedProducts.setData(proList);
        }
        //Type your controller code here 
});