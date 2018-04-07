
Feature: Verify all elements on logon webpage 


Scenario: verify "Digital Services Log On" on logon webpage

Given I go to "App1" on "Chrome"
Then I "pass" the test if "lbl_Digital_Services_Log_On" is present
And  I close browser

Scenario: verify "Enter your User ID and select Submit" on logon webpage
	
Given I go to "App1" on "Chrome"
Then I "pass" the test if "lbl_Enter_your_User_ID_and_select_Submit" is present
And  I close browser
	
		
Scenario: verify "Submit" button on logon webpage
	
Given I go to "App1" on "Chrome"
Then I "pass" the test if "btn_Submit" is present
And  I close browser
	

	
Scenario: verify "Remember_my_User_ID" button on logon webpage
	
Given I go to "App1" on "Chrome"
Then I "pass" the test if "Remember_my_User_ID" is present
And  I close browser	
	

	
Scenario: verify "Forgot_Password" link on logon webpage

Given I go to "App1" on "Chrome"
Then I "pass" the test if "Forgot_Password" is present
And  I close browser
	
Scenario: verify "Forgot_Password" link is not broken

Given I go to "App1" on "Chrome"	
When  "Forgot_Password" is not a broken link
Then test "passes"
And  I close browser
