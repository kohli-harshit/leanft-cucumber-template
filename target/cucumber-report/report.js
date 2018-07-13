$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login;successful-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on \"Home\" Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User logs in using username as \"\u003cuname\u003e\" and password as \"\u003cpwd\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "login should be successful",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User presses Sign Out button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "logout should be successful",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "login;successful-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "uname",
        "pwd"
      ],
      "line": 12,
      "id": "login;successful-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "tutorial",
        "tutorial"
      ],
      "line": 13,
      "id": "login;successful-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "leanft",
        "leanft"
      ],
      "line": 14,
      "id": "login;successful-login-with-valid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1327321805,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login;successful-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on \"Home\" Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User logs in using username as \"tutorial\" and password as \"tutorial\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "login should be successful",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User presses Sign Out button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "logout should be successful",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Home",
      "offset": 12
    }
  ],
  "location": "StepDefinitions.user_is_on_Page(String)"
});
formatter.result({
  "duration": 2220939089,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tutorial",
      "offset": 32
    },
    {
      "val": "tutorial",
      "offset": 59
    }
  ],
  "location": "StepDefinitions.user_logs_in_using_username_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 4414838466,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.login_should_be_successful()"
});
formatter.result({
  "duration": 14350092,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_presses_Sign_Out_button()"
});
formatter.result({
  "duration": 2818874518,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.logout_should_be_successful()"
});
formatter.result({
  "duration": 14635007,
  "status": "passed"
});
formatter.after({
  "duration": 1558196225,
  "status": "passed"
});
formatter.before({
  "duration": 215661827,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login;successful-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on \"Home\" Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User logs in using username as \"leanft\" and password as \"leanft\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "login should be successful",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User presses Sign Out button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "logout should be successful",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Home",
      "offset": 12
    }
  ],
  "location": "StepDefinitions.user_is_on_Page(String)"
});
formatter.result({
  "duration": 1494366947,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "leanft",
      "offset": 32
    },
    {
      "val": "leanft",
      "offset": 57
    }
  ],
  "location": "StepDefinitions.user_logs_in_using_username_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 4872342504,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.login_should_be_successful()"
});
formatter.result({
  "duration": 14472803,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.user_presses_Sign_Out_button()"
});
formatter.result({
  "duration": 1350364958,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.logout_should_be_successful()"
});
formatter.result({
  "duration": 18315621,
  "status": "passed"
});
formatter.after({
  "duration": 1537100220,
  "status": "passed"
});
});