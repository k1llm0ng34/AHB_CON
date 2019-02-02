package test.MobileBanking.forms;

import java.io.IOException;

import test.MobileBanking.MobileBankingWidgetId;
import test.common.AppElement;

public class frmPreferencesAccountPreview {


  public frmPreferencesAccountPreview() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmPreferencesAccountPreview_frmPreferencesAccountPreview"));
  }

  public void clickEnableAccountPreview() throws IOException, Exception {
		//implemented only for phone
		if(AppSpecificFunctions.isPhone())
		{
			AppSpecificFunctions.clickAppElement("frmPreferencesAccountPreview_imgSwitch");
		}
	}

	public frmSettings clickBack() throws Exception {
		AppSpecificFunctions.clickAppElement("frmSettings_imgBack");
		return new frmSettings();
	}


}