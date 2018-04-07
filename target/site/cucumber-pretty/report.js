$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Autentication/Password1.feature");
formatter.feature({
  "line": 2,
  "name": "Password Authentication",
  "description": "\r\nIn order to log into application  \r\nAs an ANZ employee\r\nI use password authentication",
  "id": "password-authentication",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Existing user logging into multiple partner apps with valid and invalid credentials",
  "description": "",
  "id": "password-authentication;existing-user-logging-into-multiple-partner-apps-with-valid-and-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "Runmode is \"\u003cRunmode\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I go to \"\u003cApp\u003e\" on \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I enter \"username\" as \"\u003cUsername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on \"submit\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter \"password\" as \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on \"logon\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "login should be \"\u003cExpected_Result\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "password-authentication;existing-user-logging-into-multiple-partner-apps-with-valid-and-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "Runmode",
        "Browser",
        "App",
        "Username",
        "Password",
        "Expected_Result"
      ],
      "line": 24,
      "id": "password-authentication;existing-user-logging-into-multiple-partner-apps-with-valid-and-invalid-credentials;;1"
    },
    {
      "cells": [
        "Y",
        "Chrome",
        "App1",
        "Aman",
        "zxxxx",
        "failure"
      ],
      "line": 25,
      "id": "password-authentication;existing-user-logging-into-multiple-partner-apps-with-valid-and-invalid-credentials;;2"
    },
    {
      "cells": [
        "Y",
        "Chrome",
        "App2",
        "User2",
        "def3",
        "success"
      ],
      "line": 26,
      "id": "password-authentication;existing-user-logging-into-multiple-partner-apps-with-valid-and-invalid-credentials;;3"
    },
    {
      "cells": [
        "Y",
        "Chrome",
        "App2",
        "User22",
        "def3",
        "failure"
      ],
      "line": 27,
      "id": "password-authentication;existing-user-logging-into-multiple-partner-apps-with-valid-and-invalid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 33844464,
  "status": "passed"
});
formatter.background({
  "line": 9,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 25,
  "name": "Existing user logging into multiple partner apps with valid and invalid credentials",
  "description": "",
  "id": "password-authentication;existing-user-logging-into-multiple-partner-apps-with-valid-and-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "Runmode is \"Y\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I go to \"App1\" on \"Chrome\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I enter \"username\" as \"Aman\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on \"submit\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter \"password\" as \"zxxxx\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on \"logon\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "login should be \"failure\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Y",
      "offset": 12
    }
  ],
  "location": "PasswordTest1.Runmode_is(String)"
});
formatter.result({
  "duration": 181697219,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "App1",
      "offset": 9
    },
    {
      "val": "Chrome",
      "offset": 19
    }
  ],
  "location": "PasswordTest1.I_Go_To_ANZ(String,String)"
});
formatter.result({
  "duration": 11286009608,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 9
    },
    {
      "val": "Aman",
      "offset": 23
    }
  ],
  "location": "PasswordTest1.I_enter(String,String)"
});
formatter.result({
  "duration": 257759004,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submit",
      "offset": 12
    }
  ],
  "location": "PasswordTest1.I_click(String)"
});
formatter.result({
  "duration": 1789566232,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 9
    },
    {
      "val": "zxxxx",
      "offset": 23
    }
  ],
  "location": "PasswordTest1.I_enter(String,String)"
});
formatter.result({
  "duration": 138747391,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "logon",
      "offset": 12
    }
  ],
  "location": "PasswordTest1.I_click(String)"
});
formatter.result({
  "duration": 1868864263,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "failure",
      "offset": 17
    }
  ],
  "location": "PasswordTest1.Login_should_be(String)"
});
formatter.result({
  "duration": 144899316,
  "status": "passed"
});
formatter.match({
  "location": "PasswordTest1.I_close_browser()"
});
formatter.result({
  "duration": 2197923381,
  "status": "passed"
});
formatter.before({
  "duration": 942819,
  "status": "passed"
});
formatter.background({
  "line": 9,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 26,
  "name": "Existing user logging into multiple partner apps with valid and invalid credentials",
  "description": "",
  "id": "password-authentication;existing-user-logging-into-multiple-partner-apps-with-valid-and-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "Runmode is \"Y\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I go to \"App2\" on \"Chrome\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I enter \"username\" as \"User2\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on \"submit\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter \"password\" as \"def3\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on \"logon\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "login should be \"success\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Y",
      "offset": 12
    }
  ],
  "location": "PasswordTest1.Runmode_is(String)"
});
formatter.result({
  "duration": 141593,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "App2",
      "offset": 9
    },
    {
      "val": "Chrome",
      "offset": 19
    }
  ],
  "location": "PasswordTest1.I_Go_To_ANZ(String,String)"
});
formatter.result({
  "duration": 7409530671,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 9
    },
    {
      "val": "User2",
      "offset": 23
    }
  ],
  "location": "PasswordTest1.I_enter(String,String)"
});
formatter.result({
  "duration": 326102281,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submit",
      "offset": 12
    }
  ],
  "location": "PasswordTest1.I_click(String)"
});
formatter.result({
  "duration": 3085258524,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 9
    },
    {
      "val": "def3",
      "offset": 23
    }
  ],
  "location": "PasswordTest1.I_enter(String,String)"
});
formatter.result({
  "duration": 135902318,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "logon",
      "offset": 12
    }
  ],
  "location": "PasswordTest1.I_click(String)"
});
formatter.result({
  "duration": 974051885,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "success",
      "offset": 17
    }
  ],
  "location": "PasswordTest1.Login_should_be(String)"
});
formatter.result({
  "duration": 355248129,
  "error_message": "java.lang.AssertionError: Login not successfull\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat TestANZ.Autentication.PasswordTest1.Login_should_be(PasswordTest1.java:98)\r\n\tat ✽.Then login should be \"success\"(Autentication/Password1.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "PasswordTest1.I_close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 606395,
  "status": "passed"
});
formatter.background({
  "line": 9,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 27,
  "name": "Existing user logging into multiple partner apps with valid and invalid credentials",
  "description": "",
  "id": "password-authentication;existing-user-logging-into-multiple-partner-apps-with-valid-and-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "Runmode is \"Y\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I go to \"App2\" on \"Chrome\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I enter \"username\" as \"User22\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on \"submit\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter \"password\" as \"def3\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on \"logon\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "login should be \"failure\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Y",
      "offset": 12
    }
  ],
  "location": "PasswordTest1.Runmode_is(String)"
});
formatter.result({
  "duration": 71363,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "App2",
      "offset": 9
    },
    {
      "val": "Chrome",
      "offset": 19
    }
  ],
  "location": "PasswordTest1.I_Go_To_ANZ(String,String)"
});
formatter.result({
  "duration": 6276463230,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 9
    },
    {
      "val": "User22",
      "offset": 23
    }
  ],
  "location": "PasswordTest1.I_enter(String,String)"
});
formatter.result({
  "duration": 170817225,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submit",
      "offset": 12
    }
  ],
  "location": "PasswordTest1.I_click(String)"
});
formatter.result({
  "duration": 2394281310,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 9
    },
    {
      "val": "def3",
      "offset": 23
    }
  ],
  "location": "PasswordTest1.I_enter(String,String)"
});
formatter.result({
  "duration": 103910643,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "logon",
      "offset": 12
    }
  ],
  "location": "PasswordTest1.I_click(String)"
});
formatter.result({
  "duration": 1014077349,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "failure",
      "offset": 17
    }
  ],
  "location": "PasswordTest1.Login_should_be(String)"
});
formatter.result({
  "duration": 105203858,
  "status": "passed"
});
formatter.match({
  "location": "PasswordTest1.I_close_browser()"
});
formatter.result({
  "duration": 336190488,
  "status": "passed"
});
formatter.uri("WebPages/logonPage.feature");
formatter.feature({
  "line": 2,
  "name": "Verify all elements on logon webpage",
  "description": "",
  "id": "verify-all-elements-on-logon-webpage",
  "keyword": "Feature"
});
formatter.before({
  "duration": 643397,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "verify \"Digital Services Log On\" on logon webpage",
  "description": "",
  "id": "verify-all-elements-on-logon-webpage;verify-\"digital-services-log-on\"-on-logon-webpage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I go to \"App1\" on \"Chrome\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I \"pass\" the test if \"lbl_Digital_Services_Log_On\" is present",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "App1",
      "offset": 9
    },
    {
      "val": "Chrome",
      "offset": 19
    }
  ],
  "location": "PasswordTest1.I_Go_To_ANZ(String,String)"
});
formatter.result({
  "duration": 6115400430,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pass",
      "offset": 3
    },
    {
      "val": "lbl_Digital_Services_Log_On",
      "offset": 22
    }
  ],
  "location": "LogonPageTest.obj_Presence(String,String)"
});
formatter.result({
  "duration": 28295158,
  "status": "passed"
});
formatter.match({
  "location": "PasswordTest1.I_close_browser()"
});
formatter.result({
  "duration": 316110358,
  "status": "passed"
});
formatter.before({
  "duration": 1135386,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "verify \"Enter your User ID and select Submit\" on logon webpage",
  "description": "",
  "id": "verify-all-elements-on-logon-webpage;verify-\"enter-your-user-id-and-select-submit\"-on-logon-webpage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I go to \"App1\" on \"Chrome\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I \"pass\" the test if \"lbl_Enter_your_User_ID_and_select_Submit\" is present",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "App1",
      "offset": 9
    },
    {
      "val": "Chrome",
      "offset": 19
    }
  ],
  "location": "PasswordTest1.I_Go_To_ANZ(String,String)"
});
formatter.result({
  "duration": 5714411017,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pass",
      "offset": 3
    },
    {
      "val": "lbl_Enter_your_User_ID_and_select_Submit",
      "offset": 22
    }
  ],
  "location": "LogonPageTest.obj_Presence(String,String)"
});
formatter.result({
  "duration": 213232398,
  "status": "passed"
});
formatter.match({
  "location": "PasswordTest1.I_close_browser()"
});
formatter.result({
  "duration": 291583457,
  "status": "passed"
});
formatter.before({
  "duration": 732129,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "verify \"Submit\" button on logon webpage",
  "description": "",
  "id": "verify-all-elements-on-logon-webpage;verify-\"submit\"-button-on-logon-webpage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "I go to \"App1\" on \"Chrome\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I \"pass\" the test if \"btn_Submit\" is present",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "App1",
      "offset": 9
    },
    {
      "val": "Chrome",
      "offset": 19
    }
  ],
  "location": "PasswordTest1.I_Go_To_ANZ(String,String)"
});
formatter.result({
  "duration": 7023026394,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pass",
      "offset": 3
    },
    {
      "val": "btn_Submit",
      "offset": 22
    }
  ],
  "location": "LogonPageTest.obj_Presence(String,String)"
});
formatter.result({
  "duration": 79307094,
  "status": "passed"
});
formatter.match({
  "location": "PasswordTest1.I_close_browser()"
});
formatter.result({
  "duration": 328078162,
  "status": "passed"
});
formatter.before({
  "duration": 890714,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "verify \"Remember_my_User_ID\" button on logon webpage",
  "description": "",
  "id": "verify-all-elements-on-logon-webpage;verify-\"remember-my-user-id\"-button-on-logon-webpage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "I go to \"App1\" on \"Chrome\"",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I \"pass\" the test if \"Remember_my_User_ID\" is present",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "App1",
      "offset": 9
    },
    {
      "val": "Chrome",
      "offset": 19
    }
  ],
  "location": "PasswordTest1.I_Go_To_ANZ(String,String)"
});
formatter.result({
  "duration": 5930498682,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pass",
      "offset": 3
    },
    {
      "val": "Remember_my_User_ID",
      "offset": 22
    }
  ],
  "location": "LogonPageTest.obj_Presence(String,String)"
});
formatter.result({
  "duration": 204518209,
  "status": "passed"
});
formatter.match({
  "location": "PasswordTest1.I_close_browser()"
});
formatter.result({
  "duration": 272256224,
  "status": "passed"
});
formatter.before({
  "duration": 775928,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "verify \"Forgot_Password\" link on logon webpage",
  "description": "",
  "id": "verify-all-elements-on-logon-webpage;verify-\"forgot-password\"-link-on-logon-webpage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "I go to \"App1\" on \"Chrome\"",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I \"pass\" the test if \"Forgot_Password\" is present",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "App1",
      "offset": 9
    },
    {
      "val": "Chrome",
      "offset": 19
    }
  ],
  "location": "PasswordTest1.I_Go_To_ANZ(String,String)"
});
formatter.result({
  "duration": 6322694992,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pass",
      "offset": 3
    },
    {
      "val": "Forgot_Password",
      "offset": 22
    }
  ],
  "location": "LogonPageTest.obj_Presence(String,String)"
});
formatter.result({
  "duration": 67212422,
  "status": "passed"
});
formatter.match({
  "location": "PasswordTest1.I_close_browser()"
});
formatter.result({
  "duration": 312419882,
  "status": "passed"
});
formatter.before({
  "duration": 888448,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "verify \"Forgot_Password\" link is not broken",
  "description": "",
  "id": "verify-all-elements-on-logon-webpage;verify-\"forgot-password\"-link-is-not-broken",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 42,
  "name": "I go to \"App1\" on \"Chrome\"",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "\"Forgot_Password\" is not a broken link",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "test \"passes\"",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "I close browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "App1",
      "offset": 9
    },
    {
      "val": "Chrome",
      "offset": 19
    }
  ],
  "location": "PasswordTest1.I_Go_To_ANZ(String,String)"
});
formatter.result({
  "duration": 7184473194,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Forgot_Password",
      "offset": 1
    }
  ],
  "location": "LogonPageTest.is_not_a_broken_link(String)"
});
formatter.result({
  "duration": 84265109,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "passes",
      "offset": 6
    }
  ],
  "location": "LogonPageTest.test_result(String)"
});
formatter.result({
  "duration": 172932,
  "status": "passed"
});
formatter.match({
  "location": "PasswordTest1.I_close_browser()"
});
formatter.result({
  "duration": 363026296,
  "status": "passed"
});
});