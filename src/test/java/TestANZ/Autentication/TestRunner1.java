package TestANZ.Autentication;


import java.io.*;
import java.io.File;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;
import cucumber.api.testng.AbstractTestNGCucumberTests;

import cucumber.api.java.it.Date;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;
import cucumber.api.Plugin;

@RunWith(Cucumber.class)
//@CucumberOptions(features = {"src/test/resources"}, plugin = {"json:output/cucumber.json", "html:target/site/cucumber-pretty", "com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html"}, glue={"TestANZ/Autentication"})
@CucumberOptions(features = {"src/test/resources/TestANZ"},plugin = {"json:output/cucumber.json", "html:target/site/cucumber-pretty", "com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html"})
public class TestRunner1 {

	

	@AfterClass
	public static void writeExtentReport() {
		
	Reporter.loadXMLConfig("C:\\Users\\amanpreet.singh.aman\\Desktop\\Aman\\Worklogs\\ANZ\\Framework\\ANZ Demo\\ANZ.Demo\\src\\test\\resources\\extent-config.xml");
	}
}


