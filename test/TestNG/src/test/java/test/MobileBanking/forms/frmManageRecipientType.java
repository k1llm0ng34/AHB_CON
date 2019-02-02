package test.MobileBanking.forms;

import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;
import test.MobileBanking.MobileBankingWidgetId;

public class frmManageRecipientType {


  public frmManageRecipientType() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmManageRecipientType_frmManageRecipientType"));
  }




public void segRecipientType(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(MobileBankingWidgetId.getWidgetId("frmManageRecipientType_segRecipientType"),MobileBankingWidgetId.getWidgetId("segTransactionMode_lblTransactionMode"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 

public void btnimgBack() throws Exception{ 
	  AppElement btnimgBack=new AppElement(MobileBankingWidgetId.getWidgetId("frmConfirmTransferCD_imgBack"));
	  btnimgBack.click();
	  }

}