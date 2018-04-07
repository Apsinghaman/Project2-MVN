package TestANZ.Autentication;

import cucumber.api.java.After;
import TestANZ.Utility.Webconnector;

public class AbstractPageStepDefinition {
	
	protected static Webconnector wbc;
	
	protected Webconnector getObject(){
		
		if(wbc== null){
			wbc = new Webconnector();
		}
		
		return wbc;
	}

}
