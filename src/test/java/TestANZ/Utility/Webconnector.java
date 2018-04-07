package TestANZ.Utility;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.apache.log4j.Logger;
import org.junit.AfterClass;
import org.junit.Assert;






import java.net.HttpURLConnection;
//------------------------
import java.net.MalformedURLException;
import java.net.URL;
 


import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.remote.DesiredCapabilities;
 


import cucumber.api.PendingException;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;
 
//---------------------

public class Webconnector{
	Logger APPLICATION_LOGS = Logger.getLogger("devpinoyLogger");
    Properties OR= null;
    Properties CONFIG=null;
	WebDriver driver= null;
	WebDriver mozilla=null;
	WebDriver chrome=null;
	WebDriver ie=null;
	//static Webconnector w;
	Webconnector w;
	
	HttpURLConnection huc = null;
	int respCode;
	
	public Webconnector()
	{
		if(OR==null){
			try{
				// initialize OR
				OR = new Properties();
				FileInputStream fs  = new FileInputStream(System.getProperty("user.dir")+"\\src\\test\\java\\TestANZ\\Config\\OR.properties");
				OR.load(fs);
				
				// initialize CONFIG to corresponding env
				CONFIG= new Properties();
				fs  = new FileInputStream(System.getProperty("user.dir")+"\\src\\test\\java\\TestANZ\\Config\\"+OR.getProperty("testEnv")+"_config.properties");
				CONFIG.load(fs);
				System.out.println(OR.getProperty("testEnv"));	
				System.out.println(CONFIG.getProperty("UserName"));
			}catch(Exception e){ 	
				System.out.println(e.getMessage());
			}
		}
		
	}
	
	//Open selected Browser
	public void openBrowser(String browserType)
	{
		log("Opening browser "+browserType);
		//System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"\\BrowserDrivers\\chromedriver.exe");
		//driver=new ChromeDriver(); 
		
		if(browserType.equals("Mozilla") && mozilla==null){
			//driver = new FirefoxDriver();
			//mozilla=driver;
		}else if(browserType.equals("Mozilla") && mozilla!=null){
			driver=mozilla;
		}else if(browserType.equals("Chrome") && chrome==null){
			System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"\\BrowserDrivers\\chromedriver.exe");
			driver=new ChromeDriver();
			chrome=driver;
		}else if(browserType.equals("Chrome") && chrome!=null){
			driver=chrome;
		}
		
		else if(browserType.equals("IE")){
			// set the IE server exe path and initialize
		}
		// max
		driver.manage().window().maximize();
		// implicit wait
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		
		
		
	}
	//Navigate to URL
	public void NaviateTo(String App) throws Exception
	{
		log("Navigating to"+ OR.getProperty(App));
		try {
		driver.get(OR.getProperty(App));
		}
		catch(Exception e){
			log("Could not navigate to expected URL");
			closeBrowser();
			throw new Exception(e); 
		}
		
	}
	
	public void type(String objName, String text) throws Exception
	{
		log("typing "+text+ " in "+objName);
		if(isElementPresent(objName))
		{
		try{
			driver.findElement(By.xpath(OR.getProperty(objName))).sendKeys(text);
		}
		catch(Exception e){
			log("brrrrrrrahhhhh"+text+ " in "+objName);
			closeBrowser();
			throw new Exception(e); 
		}
		}
		else
		{
			log("Could not type in "+ objName);
			closeBrowser();
			Assert.fail("Could not type in "+ objName);
		}
		
		
	}
	
	public void click(String objName) throws Exception
	{
		log("Click on "+objName);
		if(isElementPresent(objName))
		{
		try{
		driver.findElement(By.xpath(OR.getProperty(objName))).click();
		}
		catch(Exception e){
			
			closeBrowser();
			throw new Exception(e); 
		}
		}
		else
		{
			log("Could not click on "+ objName);
			closeBrowser();
			Assert.fail("Could not click on "+ objName);
		}
	
	}
	
		public void closeBrowser()
		{
			try{
			driver.close();
			//driver=null;
			}
			catch(Exception e)
			{
				Assert.fail("Could not close browser");
			}
		}
		
		public boolean isElementPresent(String objtName){
			log("Checking object presence "+ objtName);
			checkObjectInOR(objtName);	
			
			try {
				int count = driver.findElements(By.xpath(OR.getProperty(objtName))).size();
				if(count==0)
					return false;
				else
					return true;

			} catch (Exception e) {
				
				log(" Iam in the catch section of isElementPresent method ");
				return false;

			}	    
		}	
		
		public void checkObjectInOR(String objName)
		{
			log("Checking object in OR "+ objName);
			if (OR.getProperty(objName)== null)
			{	
				closeBrowser();
				Assert.fail(objName + " not found in OR");
				//throw new PendingException("Skipping the test as " +objName + " not found in OR");		
			}
			}
		//--------------- Application dependent functions--------
	
		//********Singleton**********
		/*
		public static Webconnector getInstance(){
			if(w==null)
				w= new Webconnector();
			
			return w;
		}
		*/
		
		public boolean notBrokenLink(String objName)
		{
			if(isElementPresent(objName))
			{
				
			}
			else
			{
				log("Could not click on "+ objName);
				closeBrowser();
				Assert.fail("Could not click on "+ objName);
				
			}
			
			try {
				String url = driver.findElement(By.xpath(OR.getProperty(objName))).getAttribute("href");
                huc = (HttpURLConnection)(new URL(url).openConnection());
                
                huc.setRequestMethod("HEAD");
                
                huc.connect();
                
                respCode = huc.getResponseCode();
                
                               
            } catch (MalformedURLException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            } catch (IOException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
			
		 
			 if(respCode >= 400){
                 return false;
             }
             else{
                 return true;
             }
			
		
             
		}
		
		
		
		//**************Logging***************/
		public void log(String msg){
			APPLICATION_LOGS.debug(msg);
		}
		//**************************Appium****************8
		
		public void mobileTask()
		{
			log("Perfroming mobile app action");
			AppiumDriver<MobileElement> mdriver = null;
			//Set the Desired Capabilities
			
			DesiredCapabilities caps = new DesiredCapabilities();
			caps.setCapability("deviceName", "OnePlus5T");
			caps.setCapability("udid", "8cb2a6b"); //Give Device ID of your mobile phone
			caps.setCapability("platformName", "Android");
			caps.setCapability("platformVersion", "8.0");
			//caps.setCapability("appPackage", "com.android.vending");
			//caps.setCapability("appActivity", "com.android.vending.AssetBrowserActivity");
			caps.setCapability("appPackage", "com.android.mms");
			caps.setCapability("appActivity", "com.android.mms.ui.ConversationList");
			
			caps.setCapability("noReset", "true");
			
			//Instantiate Appium Driver
			try {
				mdriver = new AndroidDriver<MobileElement>(new URL("http://0.0.0.0:4723/wd/hub"), caps);
				
			} catch (MalformedURLException e) {
				System.out.println(e.getMessage());
			}
			
			//Added 5 seconds wait so that the app loads completely before starting with element identification
			try {
				Thread.sleep(5000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
			
			//Find Google Play element using ID property and click on it
			//mdriver.findElement(By.id("com.android.vending:id/search_box_idle_text")).click();
			
			//Find 'Google Play Store' element and set the value Google
			//mdriver.findElement(By.id("com.android.vending:id/search_box_text_input")).sendKeys("Google");
			
			//Press Enter key from Keyboard using any of the below methods
			//((AndroidDriver<MobileElement>) mdriver).pressKeyCode(66);
			
			//OR
			//The below code might now work for you, as some keyboards use Search button instead of ENTER. Hence,
			// there are chances that the below line would fail on specific devices
			//driver.findElement(By.id("com.android.vending:id/search_box_text_input")).sendKeys(Keys.ENTER);
			
			// Message application------------------------
						
			//Click on new msg icon
			mdriver.findElement(By.id("com.android.mms:id/action_compose_new_icon")).click();			
			//click on recipient text box
			mdriver.findElement(By.id("com.android.mms:id/recipients_editor")).sendKeys("0451156096");
			//press enter
			//((AndroidDriver<MobileElement>) mdriver).pressKeyCode(66);
			//mdriver.findElement(By.id("com.android.mms:id/recipients_editor")).sendKeys("0469710599");
			
			//enter text body
			mdriver.findElement(By.id("com.android.mms:id/embedded_text_editor")).sendKeys("Test Automation1");
			
			//Click send button
			mdriver.findElement(By.id("com.android.mms:id/send_button_sms")).click();
								
			
		}
		
		
		
}

	
	

