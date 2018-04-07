
Feature: Password Authentication

In order to log into application  
As an ANZ employee
I use password authentication


Background:


Scenario Outline: Existing user logging into multiple partner apps with valid and invalid credentials

Given Runmode is "<Runmode>"
Given I go to "<App>" on "<Browser>"
And I enter "username" as "<Username>"
And I click on "submit"
And I enter "password" as "<Password>"
And I click on "logon"
Then login should be "<Expected_Result>"
And  I close browser
	
Examples:
|Runmode|Browser  |App     | Username | Password | Expected_Result |
|Y| Chrome |App1     |Aman    | zxxxx    | failure    |
|Y| Chrome |App2     |User2   | def3   | success     |
|Y| Chrome |App2     |User22   | def3   | failure     |
#|N| Chrome |App2     |User23   | def3   | failure     |
#|N| Chrome |App2     |User23  | def3   | failure      |
#|N| Chrome |App2     |User2w   | def3   | failure      |
#|N| Chrome |App2     |User2e   | def3   | failure      |
#|N| Chrome |App2     |User2e   | def3   | failure      |