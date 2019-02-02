package test.MobileBanking.forms;

import java.io.IOException;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmCardLessWithdraw {


  public frmCardLessWithdraw() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessWithdraw_frmCardLessWithdraw"));
  }
  
  public String invalidDenominations="Please enter an amount with valid denomination";
  public String insufficientAmount="Please enter amount less than available balance";

 public frmCardLessFrom btnChange() throws Exception{ 
  AppElement btnChange=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessWithdraw_btnChange"));
  btnChange.click();
  return new frmCardLessFrom();
  }
public void btnContinue() throws Exception{ 
  AppElement btnContinue=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessWithdraw_btnContinue"));
  btnContinue.click();
  }
public void btnDot() throws Exception{ 
  AppElement btnDot=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessWithdraw_btnDot"));
  btnDot.click();
  }

public void tbxAmount(String text) throws Exception{
  AppElement tbxAmount=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessWithdraw_tbxAmount"));
  tbxAmount.type(text);
  }

public boolean isInvalidAmountAlertVisible() throws Exception {
	//returns true if InvalidAmount label is visible
//	AppElement.waitForEnable(MobileBankingWidgetId.getWidgetId("frmCardLessWithdraw_lblPopup"));
//	Thread.sleep(1000);
	boolean visible = AppElement.isElementVisible("id",MobileBankingWidgetId.getWidgetId("frmCardLessWithdraw_lblPopup"));
	if(visible)
	  return true;
	else 
      return false;
}

public String getAmountErrorText() throws IOException, Exception{
	String amountErrorText = new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessWithdraw_lblPopup")).getText();	
	return amountErrorText;
}

public frmCardLessHome btnRight() throws Exception{ 
	  AppElement btnRight=new AppElement(MobileBankingWidgetId.getWidgetId("frmCardLessConfWithdraw_btnRight"));
	  btnRight.click();
	  return new frmCardLessHome();
	  }

}