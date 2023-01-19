$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TechfiosBCNewAcount.feature");
formatter.feature({
  "line": 2,
  "name": "Techfios bank and cash New Account Functionality",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@AddAcount"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User should be able to login with valid credentials",
  "description": "and open a new account",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters the \"\u003cusername\u003e\" in the \"username\" field",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters the \"\u003cpassword\u003e\" in the \"password\" field",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks on \"login\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User clicks on \"bankCash\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User clicks on \"newAccount\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters \"\u003caccountTitle\u003e\" in the \"accountTitle\" field in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters \"\u003cdescription\u003e\" in the \"description\" field in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters \"\u003cinitialBalance\u003e\" in the \"initialBalance\" field in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters \"\u003caccountNumber\u003e\" in the \"accountNumber\" field in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters \"\u003ccontactPerson\u003e\" in the \"contactPerson\" field in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters \"\u003cPhone\u003e\" in the \"Phone\" field in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User enters \"\u003cinternetBankingURL\u003e\" in the \"internetBankingURL\" field in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User clicks on \"submit\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accountTitle",
        "description",
        "initialBalance",
        "accountNumber",
        "contactPerson",
        "Phone",
        "internetBankingURL"
      ],
      "line": 25,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "business",
        "saving",
        "5000",
        "25807562",
        "Teboun madj",
        "210 000 4444",
        "https://www.wellsfargo.com/"
      ],
      "line": 26,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3779005000,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "User should be able to login with valid credentials",
  "description": "and open a new account",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@AddAcount"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters the \"demo@techfios.com\" in the \"username\" field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters the \"abc123\" in the \"password\" field",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks on \"login\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User clicks on \"bankCash\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User clicks on \"newAccount\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters \"business\" in the \"accountTitle\" field in accounts page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters \"saving\" in the \"description\" field in accounts page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters \"5000\" in the \"initialBalance\" field in accounts page",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters \"25807562\" in the \"accountNumber\" field in accounts page",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters \"Teboun madj\" in the \"contactPerson\" field in accounts page",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters \"210 000 4444\" in the \"Phone\" field in accounts page",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User enters \"https://www.wellsfargo.com/\" in the \"internetBankingURL\" field in accounts page",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User clicks on \"submit\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "AddAccountStepDefinition.user_enters_the_in_the_field()"
});
formatter.result({
  "duration": 2391491500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 17
    },
    {
      "val": "username",
      "offset": 44
    }
  ],
  "location": "AddAccountStepDefinition.user_enters_the_in_the_field(String,String)"
});
formatter.result({
  "duration": 3163674200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 17
    },
    {
      "val": "password",
      "offset": 33
    }
  ],
  "location": "AddAccountStepDefinition.user_enters_the_in_the_field(String,String)"
});
formatter.result({
  "duration": 3108229700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 16
    }
  ],
  "location": "AddAccountStepDefinition.user_clicks_on(String)"
});
formatter.result({
  "duration": 5226914300,
  "status": "passed"
});
formatter.match({
  "location": "AddAccountStepDefinition.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 7216000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bankCash",
      "offset": 16
    }
  ],
  "location": "AddAccountStepDefinition.user_clicks_on(String)"
});
formatter.result({
  "duration": 58788500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "newAccount",
      "offset": 16
    }
  ],
  "location": "AddAccountStepDefinition.user_clicks_on(String)"
});
formatter.result({
  "duration": 377642700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "business",
      "offset": 13
    },
    {
      "val": "accountTitle",
      "offset": 31
    }
  ],
  "location": "AddAccountStepDefinition.user_enters_in_the_field_in_accounts_page(String,String)"
});
formatter.result({
  "duration": 101498100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "saving",
      "offset": 13
    },
    {
      "val": "description",
      "offset": 29
    }
  ],
  "location": "AddAccountStepDefinition.user_enters_in_the_field_in_accounts_page(String,String)"
});
formatter.result({
  "duration": 89987600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5000",
      "offset": 13
    },
    {
      "val": "initialBalance",
      "offset": 27
    }
  ],
  "location": "AddAccountStepDefinition.user_enters_in_the_field_in_accounts_page(String,String)"
});
formatter.result({
  "duration": 299809500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25807562",
      "offset": 13
    },
    {
      "val": "accountNumber",
      "offset": 31
    }
  ],
  "location": "AddAccountStepDefinition.user_enters_in_the_field_in_accounts_page(String,String)"
});
formatter.result({
  "duration": 227016000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Teboun madj",
      "offset": 13
    },
    {
      "val": "contactPerson",
      "offset": 34
    }
  ],
  "location": "AddAccountStepDefinition.user_enters_in_the_field_in_accounts_page(String,String)"
});
formatter.result({
  "duration": 180012200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "210 000 4444",
      "offset": 13
    },
    {
      "val": "Phone",
      "offset": 35
    }
  ],
  "location": "AddAccountStepDefinition.user_enters_in_the_field_in_accounts_page(String,String)"
});
formatter.result({
  "duration": 144840900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.wellsfargo.com/",
      "offset": 13
    },
    {
      "val": "internetBankingURL",
      "offset": 50
    }
  ],
  "location": "AddAccountStepDefinition.user_enters_in_the_field_in_accounts_page(String,String)"
});
formatter.result({
  "duration": 3128360500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submit",
      "offset": 16
    }
  ],
  "location": "AddAccountStepDefinition.user_clicks_on(String)"
});
formatter.result({
  "duration": 1035138800,
  "status": "passed"
});
formatter.match({
  "location": "AddAccountStepDefinition.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 51125400,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[× Account Created Successfully]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat steps.AddAccountStepDefinition.user_should_be_able_to_validate_account_created_successfully(AddAccountStepDefinition.java:103)\r\n\tat ✽.Then User should be able to validate account created successfully(TechfiosBCNewAcount.feature:22)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1070682800,
  "status": "passed"
});
});