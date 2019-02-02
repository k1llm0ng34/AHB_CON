package test.MobileBanking.forms;

import java.io.IOException;

import test.MobileBanking.MobileBankingWidgetId;
import test.common.AppCalendar;
import test.common.AppElement;
import test.common.Segment;
import test.common.ListBox;

public class frmTransactionMode {


  public frmTransactionMode() throws Exception {
  AppElement lblHeader=new AppElement(MobileBankingWidgetId.getWidgetId("frmTransactionMode_frmTransactionMode"));
  }




public void segTransactionMode(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblTransactionMode = new Segment(MobileBankingWidgetId.getWidgetId("frmTransactionMode_segTransactionMode"),MobileBankingWidgetId.getWidgetId("frmTransactionMode_lblTransactionMode"));
		lblTransactionMode.clickSegRowElementbyLabel(label);		
		}catch(Exception e){
		 e.printStackTrace();
		}
	} 

public static int getValidTransModeIndex() throws IOException, Exception {
	String segId = "frmTransactionMode_segTransactionMode";
	String seglblId = "segTransactionMode_imgArrow";
	//Scroll until internal accounts segment
	AppElement.scrollScreenUntilVisibleByID(MobileBankingWidgetId.getWidgetId(segId));
	//Return a valid index
	int validIndex = AppSpecificFunctions.getValidIndexForSegment(segId, seglblId);
	return validIndex;
}
public void selectTransactionMode(int index) throws IOException, Exception {
	Segment seg = new Segment(MobileBankingWidgetId.getWidgetId("frmTransactionMode_segTransactionMode"),MobileBankingWidgetId.getWidgetId("segTransactionMode_imgArrow"));
	//Get the account name which is being selected
//	String transactionMode = seg.getElementWithIndex(index).getText();
	seg.getElementWithIndex(index).click();
//	return transactionMode;
} 

}