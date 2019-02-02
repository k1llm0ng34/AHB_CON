package test.MobileBanking.forms;

import java.io.IOException;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmCardLessConfWithdraw {


  public frmCardLessConfWithdraw() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessConfWithdraw_frmCardLessConfWithdraw"));
  }
public frmCardLessCWCode btnConfirm() throws Exception{ 
  AppElement btnConfirm=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessConfWithdraw_btnConfirm"));
  btnConfirm.click();
  return new frmCardLessCWCode();
  }

public frmCardLessHome btnRight() throws Exception{ 
	  AppElement btnRight=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessConfWithdraw_btnRight"));
	  btnRight.click();
	  return new frmCardLessHome();
	  }
public frmCardLessWithdraw imgBack() throws Exception{ 
	  AppElement btnRight=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessConfWithdraw_imgBack"));
	  btnRight.click();
	  return new frmCardLessWithdraw();
	  }

public boolean isSecureCodeVisible() throws IOException, Exception{
	if(AppElement.isElementVisible("id",MobileBankingWidgetId.getWidgetId("frmCardLessSecureCode_frmCardLessSecureCode"))){
		return true;
	}
	return false;
	
}


}