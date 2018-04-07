package TestANZ.Autentication;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;

import org.junit.Assert;
import org.junit.Rule;
import org.junit.rules.ErrorCollector;
import org.testng.SkipException;

import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.Status;
import com.aventstack.extentreports.gherkin.model.Feature;

import cucumber.api.PendingException;
import TestANZ.Utility.Webconnector;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LogonPageTest extends AbstractPageStepDefinition {
	
	
	     Webconnector wbc = getObject();
	     String actualResult="";
					
			    @Then("^test \"([^\"]*)\"$")
			    public void test_result(String expectedResult) throws Exception
			    			    {    	
			    	try{
			    	Assert.assertEquals("asa", expectedResult, actualResult);
			    	}
			    	catch(Exception e)
			    	{
			    		wbc.closeBrowser();
			    		throw new Exception(e);
			    	}
			    }
				 @When("^\"([^\"]*)\" is present$")
				    public void is_Present(String objName)
				    {
				    	boolean result = wbc.isElementPresent(objName);
						if(result)
							actualResult="passes";
						else
							actualResult="fails";
						
						
				    }
				 
				 
				 @Then("^I \"([^\"]*)\" the test if \"([^\"]*)\" is present$")
				 public void obj_Presence(String expectedResult, String objName)throws Exception
				 {
					 boolean result = wbc.isElementPresent(objName);
					
						if(result)
						{
							actualResult="pass";
					
						}
						else
						{
							actualResult="fail";
						
						}
						if(expectedResult.equals(actualResult))
						{
							wbc.log("ObjName is present");
						}
						else
						{
							wbc.closeBrowser();
							Assert.fail(objName + " is not present");	
						}
												
				 }
				 
				 @When("^\"([^\"]*)\" is not a broken link$")
				    public void is_not_a_broken_link(String objName)
				    {
					 boolean result = wbc.notBrokenLink(objName);	
					 
					 if(result)
							actualResult="passes";
						else
							actualResult="fails";
				    }
				    
			    
	
	

}
