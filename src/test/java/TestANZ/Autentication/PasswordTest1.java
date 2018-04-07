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



public class PasswordTest1 extends AbstractPageStepDefinition{
	
	//Webconnector wbc = getObject();
	 String actualResult;
	/*
	// Webconnector wbc = Webconnector.getInstance(); 
	public Webconnector wbc;
	 String actualResult;
	 */
	 @Before
	 public void testsetup()
	 {
		// Webconnector wbc = null;
		 System.out.println("setting up the env for execution");
		 //wbc = Webconnector.getInstance(); 
		 
		 wbc = new Webconnector();
		 Webconnector wbc = getObject();
		 
	 }
	 
		@Given("^Runmode is \"([^\"]*)\"$")
		public void Runmode_is(String runmode){
			if(runmode.equals("N"))
			{
				throw new PendingException("Skipping the test as Runmode is No");			
				//throw new SkipException("Skipping this exception");
				
			}
		}
	 
	 @Given("^I go to \"([^\"]*)\" on \"([^\"]*)\"$")
		public void I_Go_To_ANZ(String App, String browser) throws Exception {
			wbc.log("I am going to" + App + " on " + browser);	
			wbc.openBrowser(browser);
			wbc.NaviateTo(App);

		}
		@And("^I enter \"([^\"]*)\" as \"([^\"]*)\"$")
		public void I_enter(String username, String username1) throws Exception {
			System.out.println("I enter " + username + " as " + username1);
		   	wbc.type(username, username1);
			}
		
		@And("^I click on \"([^\"]*)\"$")
		public void I_click(String objName) throws Exception
		{
			
			wbc.log("I click " + objName);
			wbc.click(objName);
		}
		
	
		@Then("^login should be \"([^\"]*)\"$")
		public void Login_should_be(String expectedResult) {
			
			boolean result = wbc.isElementPresent("logonErrorMessage");
			String actualResult=null;
			System.out.println(result);
			if(result)
				actualResult="failure";
			else
				actualResult="success";
			if(expectedResult.equals(actualResult))
			{			
			wbc.log("Login sucessfull");
			}
			else
			{
				wbc.log("Login not sucessfull");
				wbc.closeBrowser();
				Assert.fail("Login not successfull");
				
			}
					
		}
		
		@And("I close browser")
		public void I_close_browser()
		{
			wbc.log("I am closing browser");
			wbc.closeBrowser();
		}
		/*
		
		    @Then("^test \"([^\"]*)\"$")
		    public void test_result(String expectedResult)
		    {    	
		    	Assert.assertEquals(expectedResult, actualResult);
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
			 
			 @When("^\"([^\"]*)\" is not a broken link$")
			    public void is_not_a_broken_link(String objName)
			    {
				 boolean result = wbc.notBrokenLink(objName);	
				 
				 if(result)
						actualResult="passes";
					else
						actualResult="fails";
			    }
			    
		    */

}
