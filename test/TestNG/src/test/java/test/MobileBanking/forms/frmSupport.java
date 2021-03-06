package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;

import java.io.IOException;

import test.MobileBanking.MobileBankingWidgetId;

public class frmSupport {


  public frmSupport() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmSupport_frmSupport"));
  }
public void btnBookAppointment() throws Exception{ 
  AppElement btnBookAppointment=new AppElement(MobileBankingWidgetId.getWidgetId("frmSupport_btnBookAppointment"));
  btnBookAppointment.click();
  }
public void btnCallBranch() throws Exception{ 
  AppElement btnCallBranch=new AppElement(MobileBankingWidgetId.getWidgetId("frmSupport_btnCallBranch"));
  btnCallBranch.click();
  }


public void segSupport(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmSupport_segSupport"),MobileBankingWidgetId.getWidgetId("frmSupport_flxShadowOne"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 
public void segTimings(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmSupport_segTimings"),MobileBankingWidgetId.getWidgetId("frmSupport_flxBankTimings"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	}
public frmSupportInfo clickFAQs() throws Exception {
	 frmSupport.flxSupport(0);
//	 AppElement.waitForEnable(MobileBankingWidgetId.getWidgetId("frmSupportInfo_frmSupportInfo"),70);
	return new frmSupportInfo();
}
private static void flxSupport(int i) throws IOException, Exception {
	Segment SegSupport = new Segment(MobileBankingWidgetId.getWidgetId("frmSupport_segSupport"),MobileBankingWidgetId.getWidgetId("frmSupport_flxSupport"));
	SegSupport.getElementWithIndex(i).click();
//	AppElement flxSupport = new AppElement(MobileBankingWidgetId.getWidgetId("frmSupport_flxSupport"));
}
public frmSupportInfo clickPrivacyPolicy() throws IOException, Exception {
	 frmSupport.flxSupport(2);
//	 AppElement.waitForEnable(MobileBankingWidgetId.getWidgetId("frmSupportInfo_frmSupportInfo"),70);
	return new frmSupportInfo();
}
public frmSupportInfo clickTermsandConditions() throws IOException, Exception {
	frmSupport.flxSupport(1);
	 
	AppElement.waitForEnable(MobileBankingWidgetId.getWidgetId("frmSupportInfo_frmSupportInfo"),70);
	return new frmSupportInfo();
}
public frmLogin clickimgBack() throws IOException, Exception {

	AppSpecificFunctions.clickAppElement("frmSupport_imgBack");
	if(AppElement.waitForEnable(MobileBankingWidgetId.getWidgetId("frmLogin_frmLogin")))
			{
		return new frmLogin();
			}
	else
		return AppSpecificFunctions.signOut();
}
}